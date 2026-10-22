// 构建前生成贡献者名单：扫描 git 提交历史（含 Co-authored-by 联合署名），
// 并通过 GitHub API 将作者邮箱映射为 GitHub 用户名（离线时回退为 git 作者名）。
// 输出 docs/.vitepress/contributors.json，供 appendix/contributors.md 渲染。
// 由 npm 钩子（predocs:dev / predocs:build）自动执行，无需手动运行。
import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const OUT = fileURLToPath(new URL('../docs/.vitepress/contributors.json', import.meta.url))

function git(format) {
  try {
    return execSync(`git log --format=${format}`, { encoding: 'utf8' })
  } catch {
    return '' // 无 git 历史时（如直接下载源码）生成空名单
  }
}

function repoSlug() {
  try {
    const url = execSync('git remote get-url origin', { encoding: 'utf8' }).trim()
    const m = url.match(/[:/]([^/]+\/[^/]+?)(?:\.git)?$/)
    return m ? m[1] : null
  } catch {
    return null
  }
}

// 邮箱 → GitHub 用户名。仅统计 author 非 null 的提交（即邮箱已关联 GitHub 账号）。
async function fetchGithubLogins() {
  const slug = repoSlug()
  if (!slug) return {}
  const headers = { Accept: 'application/vnd.github+json' }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  const map = {}
  try {
    for (let page = 1; page <= 3; page++) {
      const res = await fetch(
        `https://api.github.com/repos/${slug}/commits?per_page=100&page=${page}`,
        { headers },
      )
      if (!res.ok) break
      const commits = await res.json()
      for (const c of commits) {
        const login = c.author?.login
        const email = c.commit?.author?.email
        if (login && email) map[email.toLowerCase()] = login
      }
      if (commits.length < 100) break
    }
  } catch {
    // 离线或超限时静默回退：直接使用 git 作者名
  }
  return map
}

const people = new Map() // key: 邮箱或名字小写 → { name, count }

function add(name, email) {
  name = (name || '').trim()
  if (!name || /dependabot|github-actions|\[bot\]/i.test(name)) return
  const key = (email || name).trim().toLowerCase()
  const cur = people.get(key) || { name, count: 0 }
  cur.count += 1
  people.set(key, cur)
}

const githubLogins = await fetchGithubLogins()

// 提交作者（优先显示 GitHub 用户名）
for (const line of git('%aN%x1e%aE').split('\n')) {
  if (!line.trim()) continue
  const [name, email] = line.split('\x1e')
  add(githubLogins[email?.toLowerCase()] || name, email)
}

// Co-authored-by 联合署名（邮箱投稿由维护者代为提交时，须以此注明原作者）
for (const line of git('%b').split('\n')) {
  const m = line.match(/^Co-authored-by:\s*(.+?)\s*<(.+?)>/i)
  if (m) add(githubLogins[m[2]?.toLowerCase()] || m[1], m[2])
}

const list = [...people.values()].sort((a, b) => b.count - a.count)
writeFileSync(OUT, JSON.stringify(list, null, 2) + '\n', 'utf8')
console.log(`contributors.json 已生成（${list.length} 位贡献者）`)

# 贡献指南

感谢你愿意为之后的每一届江大人留下一点东西。本页说明仓库层面的协作规则；面向投稿者的图文版教程见站内 [如何投稿](docs/contribute/how-to-contribute.md)。

## 贡献方式

| 方式 | 适合人群 | 说明 |
|---|---|---|
| 投稿箱 | 所有投稿者 | 在仓库 `inbox/` 文件夹网页上传一个文件即可，图文步骤见站内[如何投稿](docs/contribute/how-to-contribute.md) |
| 直接修改 | 维护者与熟悉 Git 的同学 | 按下述内容规范修改 `docs/` 对应页面，提 PR |

**维护者职责**：定期整理 `inbox/` 中的投稿 → 按内容归入对应章节 → 以 `Co-authored-by: 作者 <邮箱>` 联合署名提交（原作者自动进入[感谢贡献者](docs/appendix/contributors.md)名单，由 `scripts/fetch_contributors.mjs` 在每次构建时从 git 历史生成）。

## 内容规范

1. **文章放对地方**：按 `docs/` 目录结构放置（出路经验 → `path/experiences/`；学业、生活等章节内容 → 对应章节文件夹）；
2. **文件命名**：小写英文/拼音 + 连字符，禁止空格与中文标点（经验帖按 `[去向]-年份-昵称.md` 规范）；
3. **时效标注**：政策、价格、时刻类信息必须标注"最后核实于 XXXX-XX"；
4. **转载**：必须获原作者授权并在文首注明出处与授权情况；
5. **红线**：人身攻击、无据指控、隐私泄露的内容不予合并；批评性内容必须基于事实与亲历（参见[声明与免责](docs/xu/disclaimer.md)）；
6. **排版**：中文全角标点，中英文之间加空格，一级标题留给文件标题；
7. **协议**：投稿即同意内容以 CC BY-NC-SA 4.0 发布。

## 维护者（编委会）工作约定

- **审核**：PR 与 Issue 48 小时内响应；只审格式与合规，不改观点；对争议内容启用"二次复核"（邀请背景相似的同学复核后再处理）；
- **署名**：整理投稿箱稿件并代为提交时，commit 信息中用 `Co-authored-by: 作者 <邮箱>` 联合署名——原作者会自动进入[感谢贡献者](docs/appendix/contributors.md)名单；
- **结构变更**（新增章节/页面、改导航）：维护 `docs/.vitepress/config.mts` 的侧边栏，PR 中说明即可；
- **年度维护**：每年 6 月毕业季，各章节负责人对照"最后核实于"标记做一轮内容大修；
- **TODO 文化**：缺内容的页面保留 `🚧 TODO` 标记公开挂出，等于招募——比空目录更能唤起投稿。

## 本地开发

```bash
npm install
npm run docs:dev   # http://localhost:5173
```

新增页面后需要同步登记 `docs/.vitepress/config.mts` 侧边栏，否则页面可达但不会出现在导航中。

## 提交流程

1. 从 `main` 拉出分支（或直接在 GitHub 网页上编辑）；
2. 一个 PR 聚焦一件事（一篇文章 / 一处修正）；
3. PR 描述里写清楚：新增还是修改、放哪个目录、是否涉及政策内容（如是，注明核实来源）；
4. 通过审核合并后，CI 自动构建部署，网站即刻更新。

## 站点维护（维护者参考）

### 本地开发

```bash
npm install
npm run docs:dev   # http://localhost:5173/UJS-Survival-Guide/
```

新增页面后需同步登记 `docs/.vitepress/config.mts` 侧边栏。

### 上线部署（一次性设置，已完成存档）

1. 推送到远程仓库 `git@github.com:AinzFn/UJS-Survival-Guide.git`；
2. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**；
3. 已完成的占位替换：仓库地址、校徽/校标素材（见 `assets-src/README.md`）；**仍待填**：投稿邮箱（`docs/contribute/how-to-contribute.md`）。

### 评论与统计

- **统计（不蒜子）**：已接入，无需配置，每页底部显示站点 PV/UV（`theme/components/SiteStats.vue`）；
- **评论（giscus）**：已接入，配置在 `docs/.vitepress/giscus.js`。若需更换分类或仓库，在 [giscus.app/zh-CN](https://giscus.app/zh-CN) 重新生成 `repoId`/`categoryId` 粘贴进去即可。

### 维护路线图

- [x] 站点骨架与部署流水线
- [x] 全部章节大纲与写作提示
- [ ] 组建编委会（站长 + 各章负责人 + 学院约稿人）
- [ ] 冷启动首批 15~20 篇内容（编辑部骨干文 + 经验帖）
- [ ] 发布 v1 并校内宣传，开放投稿
- [ ] 每年 6 月：毕业季内容大修 + 编委会换届

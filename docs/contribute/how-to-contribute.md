# 如何投稿

会打字就能投稿。三种方式按门槛从低到高排列，**任选其一**，都能让文章出现在本手册上。

::: tip 投稿前
请先看一眼[写作模板](/contribute/writing-template)，套着写最快。对姓名、成绩、联系方式等敏感信息，可以模糊化或匿名，审核时会保护你的隐私。
:::

---

## 方式一：GitHub 网页投稿（推荐，全程点鼠标）

不需要安装任何软件，只需要一个 GitHub 账号（[注册入口](https://github.com/signup)，免费，两分钟）。

1. 打开仓库页面 `https://github.com/AinzFn/UJS-Survival-Guide`；
2. 进入 `docs` 目录，找到你的文章该放的位置（比如 `docs/path/experiences/` 或 `docs/majors/cs/`），点右上角 **Add file → Create new file**；
3. 文件名按规范填写，例如 `[abroad]-2021-xiaoming.md`（全小写、用连字符、不能有空格）；
4. 把内容粘贴进去，点上方 **Preview** 标签可以预览排版；
5. 点 **Commit changes...**，选择 **Propose changes**，然后点 **Create pull request**；
6. 大功告成。维护者审核通过（通常 48 小时内）合并后，网站会**自动**更新上线。

【截图位：① Create new file 按钮 ② 文件名与编辑区 ③ Propose changes ④ Create pull request——首批内容发布前补上】

## 方式二：邮箱投稿（完全零门槛，可匿名）

把写好的内容（Word / Pages / 纯文本均可）发送到投稿邮箱：

> **TODO：投稿邮箱**（建议使用编委会公共邮箱，不使用个人邮箱）

邮件标题请注明：`【投稿】去向或类型-年级-昵称`，如 `【投稿】出国-2021-匿名`。

编委会会在一周内代为整理上架。**匿名投稿请注明"匿名发布"**，我们将隐去所有可识别信息。

## 方式三：Git / 本地投稿（适合熟悉 Git 的同学）

1. Fork 仓库 → 克隆到本地；
2. 本地预览（可选）：

   ```bash
   npm install      # 安装依赖（需要 Node.js 18+）
   npm run docs:dev # 启动本地预览，浏览器打开 http://localhost:5173
   ```

3. 在 `docs/` 对应目录新建文章，按规范命名；
4. 提交并推送后发起 Pull Request，通过审核即自动上线。

## 新文章如何出现在导航里

- `docs/path/experiences/` 下的经验帖：收录进该目录的 README 列表；
- `docs/majors/` 下的专业介绍：放进对应学院文件夹即可；
- 新建了页面或想调整目录：在 PR 里说明即可，维护者会更新站点导航（`docs/.vitepress/config.mts`）。

## 审核规则（我们承诺）

1. **只审格式与合规，不改观点**——不删减、不"平衡"你的真实体验，除非涉及[声明](/xu/disclaimer)中的红线（人身攻击、无据指控、未授权转载）；
2. 48 小时内响应；邮箱投稿一周内上架；
3. 修改建议都会以评论形式和你商量；
4. 你随时可以要求更新或撤下自己的文章，发邮件或提 Issue 即可。

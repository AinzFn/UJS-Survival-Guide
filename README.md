# 江苏大学生存手册

> 由江大人写给江大人的非官方生存指南。

收录选课、转专业、保研、考研、出国、就业、考公等各条出路的经验，以及校园生活与各专业在读学生的真实介绍。项目灵感与体例深受 [《上海交通大学生存手册》](https://github.com/SurviveSJTU/SurviveSJTUManual)（2008，5931★）及其衍生的各校同类项目启发，在此致谢。

**当前状态：🚧 骨架阶段，内容招募中。** 章节结构与站点已就绪，等待第一批作者与稿件——见 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 章节结构

```
序            关于本手册、声明与免责
第一章 认识江大   欢迎辞、校园与学院分布、常用系统、办事指南
第二章 学业生存   选课、GPA、转专业、辅修、四六级、竞赛、科研入门
第三章 出路      保研 / 考研 / 出国 / 就业 / 选调考公 / 其他 + 经验分享合集
第四章 生活      食堂、宿舍、镇江生活、兼职
第五章 专业介绍   各学院在读学生第一人称介绍（众包核心区）
附录           社团、FAQ、友情链接
参与贡献        投稿指南、写作模板
```

## 技术栈

[VitePress](https://vitepress.dev)（Vue 生态静态文档站）+ GitHub Actions 自动部署到 GitHub Pages。贡献者只需写 Markdown，不需要碰任何前端。

## 本地开发

需要 Node.js 18+。

```bash
npm install
npm run docs:dev      # 本地预览 http://localhost:5173
npm run docs:build    # 构建到 docs/.vitepress/dist
npm run docs:preview  # 预览构建产物
```

## 上线部署（一次性设置）

1. 推送本目录到远程仓库 `git@github.com:AinzFn/UJS-Survival-Guide.git`；
2. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**；
3. 替换以下占位内容：
   - ~~全局搜索 `YOUR-ORG`，替换为实际组织/用户名与仓库名~~（已完成：仓库为 `AinzFn/UJS-Survival-Guide`）；
   - 填写投稿邮箱（`docs/contribute/how-to-contribute.md`）；
   - 替换占位的校徽/校标素材为最新官方版本（当前已接入，见 `assets-src/README.md`）；
   - 核对 `docs/majors/` 学院清单是否与学校官网最新院系设置一致。

## 路线图

- [x] 站点骨架与部署流水线
- [x] 全部章节大纲与写作模板
- [ ] 组建编委会（站长 + 各章负责人 + 学院约稿人）
- [ ] 冷启动首批 15~20 篇内容（编辑部骨干文 + 专业介绍）
- [ ] 发布 v1 并校内宣传，开放投稿
- [ ] 每年 6 月：毕业季内容大修 + 编委会换届

## 参与贡献

见 [CONTRIBUTING.md](CONTRIBUTING.md)。三种方式任选：GitHub 网页投稿（会打字就行）、邮箱投稿（可匿名）、Git 工作流。

## 许可协议

- **正文内容**（`docs/` 下文章与图片）：[CC BY-NC-SA 4.0](LICENSE-CONTENT.md)
- **站点代码与配置**：[MIT](LICENSE)

> 本项目为在校学生自发组织的非官方项目，与江苏大学官方无关。

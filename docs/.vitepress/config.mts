import { defineConfig } from 'vitepress'

const repo = 'AinzFn/UJS-Survival-Guide'

// GitHub Pages 项目页部署在子路径下，必须与仓库名一致，否则资源全部 404
const base = '/UJS-Survival-Guide/'

export default defineConfig({
  lang: 'zh-CN',
  base,
  title: '江苏大学生存手册',
  description:
    '由江大人写给江大人的非官方生存指南：选课、转专业、保研、考研、出国、就业、研究生选导师与科研生存、校园生活与各专业在读学生的真实分享。',

  appearance: false, // 只保留浅色模式，不提供深色切换

  head: [['link', { rel: 'icon', type: 'image/png', href: `${base}img/emblem-256.png` }]],

  lastUpdated: true, // 每页底部显示“最后更新”，需要 git 历史

  themeConfig: {
    logo: '/img/emblem.svg',

    nav: [
      { text: '认识江大', link: '/campus/', activeMatch: '/campus/' },
      { text: '学业生存', link: '/study/', activeMatch: '/study/' },
      { text: '出路', link: '/path/', activeMatch: '/path/' },
      { text: '生活', link: '/life/', activeMatch: '/life/' },
      { text: '研究生生存', link: '/grad/', activeMatch: '/grad/' },
      { text: '我要投稿', link: '/contribute/how-to-contribute' },
    ],

    sidebar: [
      {
        text: '序',
        items: [
          { text: '关于本手册', link: '/xu/about' },
          { text: '声明与免责', link: '/xu/disclaimer' },
        ],
      },
      {
        text: '第一章 · 认识江大',
        items: [
          { text: '本章导读', link: '/campus/' },
          { text: '欢迎来到江苏大学', link: '/campus/welcome' },
          { text: '校园与学院分布', link: '/campus/map' },
          { text: '常用网站与系统', link: '/campus/systems' },
          { text: '办事指南', link: '/campus/affairs' },
        ],
      },
      {
        text: '第二章 · 学业生存',
        items: [
          { text: '本章导读', link: '/study/' },
          { text: '选课技巧', link: '/study/course-selection' },
          { text: 'GPA 制度解读', link: '/study/gpa' },
          { text: '转专业指南', link: '/study/major-transfer' },
          { text: '保研要求', link: '/study/baoyan-requirement' },
          { text: '评奖评优', link: '/study/awards' },
          { text: '入党', link: '/study/party' },
          { text: '竞赛路线图', link: '/study/competition' },
          { text: '科研入门：大创、实验室与导师', link: '/study/research' },
        ],
      },
      {
        text: '第三章 · 出路',
        items: [
          { text: '本章导读', link: '/path/' },
          { text: '保研', link: '/path/baoyan' },
          { text: '考研', link: '/path/kaoyan' },
          { text: '出国留学', link: '/path/abroad' },
          { text: '就业与实习', link: '/path/career' },
          { text: '选调与考公', link: '/path/civil-service' },
          { text: '其他出路', link: '/path/others' },
          { text: '经验分享合集', link: '/path/experiences/' },
        ],
      },
      {
        text: '第四章 · 生活',
        items: [
          { text: '本章导读', link: '/life/' },
          { text: '美食评测', link: '/life/food' },
          { text: '宿舍与园区', link: '/life/dorm' },
          { text: '镇江生活指南', link: '/life/zhenjiang' },
          { text: '兼职与勤工俭学', link: '/life/parttime' },
        ],
      },
      {
        text: '第五章 · 研究生生存',
        items: [
          { text: '本章导读', link: '/grad/' },
          { text: '选导师与进组', link: '/grad/advisor' },
          { text: '培养方案与毕业要求', link: '/grad/requirements' },
          { text: '科研生存', link: '/grad/research' },
          { text: '奖助学金与评奖', link: '/grad/funding' },
          { text: '考博与申请考核', link: '/grad/phd' },
          { text: '就业与实习', link: '/grad/career' },
        ],
      },
      {
        text: '附录',
        items: [
          { text: '感谢贡献者', link: '/appendix/contributors' },
          { text: '社团介绍', link: '/appendix/clubs' },
          { text: '常见问题 FAQ', link: '/appendix/faq' },
          { text: '友情链接', link: '/appendix/links' },
        ],
      },
      {
        text: '参与贡献',
        items: [{ text: '如何投稿', link: '/contribute/how-to-contribute' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: `https://github.com/${repo}` }],

    outline: { level: [2, 3], label: '本页目录' },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示详细列表',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },

    lastUpdated: { text: '最后更新' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',

    editLink: {
      pattern: `https://github.com/${repo}/edit/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },

    footer: {
      message: '内容采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank">CC BY-NC-SA 4.0</a> 协议授权',
      copyright: '非官方学生项目 · 与江苏大学官方无关',
    },
  },
})

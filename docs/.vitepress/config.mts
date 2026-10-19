import { defineConfig } from 'vitepress'

const repo = 'AinzFn/UJS-Survival-Guide'

// GitHub Pages 项目页部署在子路径下，必须与仓库名一致，否则资源全部 404
const base = '/UJS-Survival-Guide/'

export default defineConfig({
  lang: 'zh-CN',
  base,
  title: '江苏大学生存手册',
  description:
    '由江大人写给江大人的非官方生存指南：选课、转专业、保研、考研、出国、就业、校园生活与各专业在读学生的真实分享。',

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
      { text: '专业介绍', link: '/majors/', activeMatch: '/majors/' },
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
          { text: '辅修与二专', link: '/study/minor' },
          { text: '四六级与英语学习', link: '/study/english' },
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
          { text: '食堂评测', link: '/life/canteen' },
          { text: '宿舍与园区', link: '/life/dorm' },
          { text: '镇江生活指南', link: '/life/zhenjiang' },
          { text: '兼职与勤工俭学', link: '/life/parttime' },
        ],
      },
      {
        text: '第五章 · 专业介绍',
        collapsed: true,
        items: [
          { text: '本章导读 · 如何投稿', link: '/majors/' },
          { text: '机械工程学院', link: '/majors/mechanical/' },
          { text: '农业工程学院', link: '/majors/agricultural/' },
          { text: '汽车与交通工程学院', link: '/majors/automotive/' },
          { text: '能源与动力工程学院', link: '/majors/energy/' },
          { text: '材料科学与工程学院', link: '/majors/materials/' },
          { text: '食品与生物工程学院', link: '/majors/food/' },
          { text: '计算机科学与通信工程学院', link: '/majors/cs/' },
          { text: '电气信息工程学院', link: '/majors/ee/' },
          { text: '环境与安全工程学院', link: '/majors/env/' },
          { text: '化学化工学院', link: '/majors/chem/' },
          { text: '土木工程与力学学院', link: '/majors/civil/' },
          { text: '理学院', link: '/majors/science/' },
          { text: '医学院', link: '/majors/medicine/' },
          { text: '药学院', link: '/majors/pharmacy/' },
          { text: '财经学院', link: '/majors/economics/' },
          { text: '管理学院', link: '/majors/management/' },
          { text: '法学院', link: '/majors/law/' },
          { text: '外国语学院', link: '/majors/fls/' },
          { text: '文学院', link: '/majors/liberal-arts/' },
          { text: '艺术学院', link: '/majors/art/' },
        ],
      },
      {
        text: '附录',
        items: [
          { text: '社团介绍', link: '/appendix/clubs' },
          { text: '常见问题 FAQ', link: '/appendix/faq' },
          { text: '友情链接', link: '/appendix/links' },
        ],
      },
      {
        text: '参与贡献',
        items: [
          { text: '如何投稿', link: '/contribute/how-to-contribute' },
          { text: '写作模板', link: '/contribute/writing-template' },
        ],
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

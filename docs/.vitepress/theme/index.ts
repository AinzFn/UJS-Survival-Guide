import DefaultTheme from 'vitepress/theme'
import Comment from './components/Comment.vue'
import SiteStats from './components/SiteStats.vue'
import { h } from 'vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      // 文档页底部：giscus 评论（未配置时自动隐藏）
      'doc-after': () => h(Comment),
      // 每页最底部：不蒜子站点访问统计
      'layout-bottom': () => h(SiteStats)
    })
}

<script setup>
// 站点访问统计（不蒜子）：显示在每页最底部。
// 原理：每次路由变化时重新注入统计脚本，触发重新计数并回填页面上的占位元素。
import { useRoute } from 'vitepress'
import { onMounted, watch } from 'vue'

const route = useRoute()

function load() {
  document.getElementById('busuanzi-script')?.remove()
  const el = document.createElement('script')
  el.id = 'busuanzi-script'
  el.async = true
  el.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  document.body.appendChild(el)
}

onMounted(load)
watch(() => route.path, load)
</script>

<template>
  <div class="site-stats">
    <span id="busuanzi_container_site_pv" style="display: none">
      本站总访问量 <span id="busuanzi_value_site_pv" /> 次 · 访客数
      <span id="busuanzi_value_site_uv" /> 人
    </span>
  </div>
</template>

<style scoped>
.site-stats {
  text-align: center;
  padding: 16px 0 24px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}
</style>

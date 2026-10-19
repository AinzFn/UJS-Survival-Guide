<script setup>
// 文档页底部的 giscus 评论（基于 GitHub Discussions，评论即仓库里的讨论帖）。
// 未配置 repoId/categoryId 时整体不渲染。
import { useData, useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import { categoryId, category, repoId } from '../giscus'

const route = useRoute()
const enabled = Boolean(repoId && categoryId)

function mount() {
  if (!enabled) return
  const box = document.getElementById('giscus-container')
  if (!box) return
  box.innerHTML = ''
  const el = document.createElement('script')
  el.src = 'https://giscus.app/client.js'
  el.async = true
  el.crossOrigin = 'anonymous'
  el.setAttribute('data-repo', 'AinzFn/UJS-Survival-Guide')
  el.setAttribute('data-repo-id', repoId)
  el.setAttribute('data-category', category)
  el.setAttribute('data-category-id', categoryId)
  el.setAttribute('data-mapping', 'pathname')
  el.setAttribute('data-strict', '1')
  el.setAttribute('data-reactions-enabled', '1')
  el.setAttribute('data-emit-metadata', '0')
  el.setAttribute('data-input-position', 'top')
  el.setAttribute('data-theme', 'light')
  el.setAttribute('data-lang', 'zh-CN')
  el.setAttribute('data-loading', 'lazy')
  box.appendChild(el)
}

onMounted(() => nextTick(mount))
// VitePress 是 SPA：路由变化后重建评论框，保证 mapping=pathname 对应当前页面
watch(() => route.path, () => nextTick(mount))
</script>

<template>
  <div v-if="enabled" class="giscus-wrapper">
    <div id="giscus-container" />
  </div>
</template>

<style scoped>
.giscus-wrapper {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>

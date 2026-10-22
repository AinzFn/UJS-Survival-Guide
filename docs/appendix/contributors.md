# 感谢贡献者

本手册的每一页，都来自同学们愿意为后来者留下一点东西的善意。以下名单由仓库提交记录**自动生成、随每次构建更新**——你在 GitHub 上合并的每一次投稿，都会自动出现在这里。

把稿件投进仓库[投稿箱](https://github.com/AinzFn/UJS-Survival-Guide/tree/main/inbox)、由维护者代为上架的同学也不必担心漏掉：上架时会以 `Co-authored-by` 联合署名，同样自动进入名单。

<script setup>
import contributors from '../.vitepress/contributors.json'
</script>

<ul v-if="contributors.length" class="contributor-list">
  <li v-for="p in contributors" :key="p.name" class="contributor">
    <span class="name">{{ p.name }}</span>
    <span class="count">{{ p.count }} 次提交</span>
  </li>
</ul>

<div v-else class="empty">

::: tip 🚧 虚位以待
还没有任何投稿。你的名字可以出现在这里——见[如何投稿](/contribute/how-to-contribute)。
:::

</div>

<style>
.contributor-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
}
.contributor {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
  background: var(--vp-c-bg-soft);
}
.contributor .name {
  font-weight: 600;
}
.contributor .count {
  font-size: 12px;
  color: var(--vp-c-text-3);
}
</style>

## 特别感谢

- **《上海交通大学生存手册》全体原作者**——本书体例与精神的灵感来源；
- **各校同类项目**（南方科大、南京理工、合工大、大连理工等）的维护者们——他们的公开实践证明了这件事值得做；
- 所有通过问卷、群聊、Issue 反馈信息与纠错的同学；
- 参加编写的成员：<!-- TODO：编委会成立后在此列出 -->

愿这个名单越来越长。

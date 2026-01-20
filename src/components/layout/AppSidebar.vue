<script setup lang="ts">
import { RouterLink } from 'vue-router'

// 导航菜单项
const navItems = [
  { path: '/', icon: 'fas fa-home', title: '首页' },
  { path: '#projects', icon: 'fas fa-rocket', title: '项目展示', isAnchor: true },
  { path: '/notes', icon: 'fas fa-book-open', title: '技术笔记' },
  { path: '/schedule', icon: 'fas fa-calendar-alt', title: '课程表' },
  { path: '/#contact', icon: 'fas fa-envelope', title: '联系我', isAnchor: true },
]

// 外部链接
const externalLinks = [
  { href: 'https://github.com/NEGIAO', icon: 'fab fa-github', title: 'GitHub项目', target: '_blank' },
]
</script>

<template>
  <aside class="sidebar">
    <!-- Logo -->
    <RouterLink to="/" class="sidebar__logo">NEGIAO</RouterLink>

    <!-- 导航链接 -->
    <nav class="sidebar__nav">
      <template v-for="item in navItems" :key="item.path">
        <a 
          v-if="item.isAnchor"
          :href="item.path" 
          class="sidebar__link"
          :data-title="item.title"
        >
          <i :class="item.icon"></i>
        </a>
        <RouterLink 
          v-else
          :to="item.path" 
          class="sidebar__link"
          :data-title="item.title"
        >
          <i :class="item.icon"></i>
        </RouterLink>
      </template>
    </nav>

    <!-- 底部链接 -->
    <div class="sidebar__footer">
      <a 
        v-for="link in externalLinks"
        :key="link.href"
        :href="link.href" 
        :target="link.target"
        rel="noopener noreferrer"
        class="sidebar__link"
        :data-title="link.title"
      >
        <i :class="link.icon"></i>
      </a>
    </div>
  </aside>
</template>

<style scoped>
/* 侧边栏样式已在 layout.css 中定义 */
</style>

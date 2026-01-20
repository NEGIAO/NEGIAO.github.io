<script setup lang="ts">
import { watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

interface Props {
  isMenuOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isMenuOpen: false
})

const emit = defineEmits<{
  'toggle-menu': []
  'close-menu': []
}>()

const route = useRoute()

// 导航菜单项
const navItems = [
  { path: '/', label: '首页' },
  { path: '#projects', label: '项目', isAnchor: true },
  { path: '/notes', label: '笔记' },
  { path: '/schedule', label: '课程表' },
  { path: '/#contact', label: '联系我', isAnchor: true },
]

// 外部链接
const externalLinks = [
  { href: 'https://github.com/NEGIAO', label: 'GitHub', icon: 'fab fa-github', target: '_blank' },
]

// 路由变化时关闭菜单
watch(() => route.path, () => {
  emit('close-menu')
})
</script>

<template>
  <header class="navbar">
    <div class="container navbar__container">
      <!-- Logo -->
      <RouterLink to="/" class="navbar__brand">NEGIAO</RouterLink>

      <!-- 移动端菜单按钮 -->
      <button 
        class="mobile-menu-toggle" 
        @click="$emit('toggle-menu')"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <!-- 导航菜单 -->
      <nav>
        <ul class="navbar__nav" :class="{ 'is-active': isMenuOpen }">
          <li v-for="item in navItems" :key="item.path">
            <a 
              v-if="item.isAnchor"
              :href="item.path" 
              class="navbar__link"
              @click="$emit('close-menu')"
            >
              {{ item.label }}
            </a>
            <RouterLink 
              v-else
              :to="item.path" 
              class="navbar__link"
            >
              {{ item.label }}
            </RouterLink>
          </li>
          <li v-for="link in externalLinks" :key="link.href">
            <a 
              :href="link.href" 
              :target="link.target"
              rel="noopener noreferrer"
              class="navbar__link"
            >
              <i v-if="link.icon" :class="link.icon"></i>
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* 导航栏样式已在 layout.css 中定义 */
</style>

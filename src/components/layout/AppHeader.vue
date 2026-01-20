<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

interface Props {
  isSidebarOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isSidebarOpen: true
})

const emit = defineEmits<{
  toggleSidebar: []
}>()

const route = useRoute()

// 根据路由生成面包屑
const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter(Boolean)
  const crumbs: { label: string; path: string }[] = []
  
  const labelMap: Record<string, string> = {
    notes: '技术笔记',
    schedule: '课程表',
    'word-learning': '英语学习',
  }

  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    crumbs.push({
      label: labelMap[path] || path,
      path: currentPath
    })
  })

  return crumbs
})

// 页面标题
const pageTitle = computed(() => {
  if (route.name === 'home') return '首页'
  const meta = route.meta as { title?: string }
  return meta.title || '页面'
})
</script>

<template>
  <header class="header">
    <div class="header__left">
      <!-- 移动端菜单按钮 -->
      <button 
        class="menu-toggle"
        @click="emit('toggleSidebar')"
        aria-label="切换菜单"
      >
        <i :class="isSidebarOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <!-- 面包屑导航 -->
      <nav class="header__breadcrumb" v-if="breadcrumbs.length > 0">
        <RouterLink to="/">首页</RouterLink>
        <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
          <span>/</span>
          <RouterLink 
            v-if="index < breadcrumbs.length - 1" 
            :to="crumb.path"
          >
            {{ crumb.label }}
          </RouterLink>
          <span v-else class="current">{{ crumb.label }}</span>
        </template>
      </nav>
    </div>

    <div class="header__right">
      <!-- 可以添加搜索、主题切换等按钮 -->
      <button class="header__action" title="搜索 (Ctrl+K)">
        <i class="fas fa-search"></i>
      </button>
      <a 
        href="https://github.com/NEGIAO" 
        target="_blank" 
        rel="noopener noreferrer"
        class="header__action"
        title="GitHub"
      >
        <i class="fab fa-github"></i>
      </a>
    </div>
  </header>
</template>

<style scoped>
.header__action {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--bg-tertiary);
  border: none;
  border-radius: var(--border-radius-sm);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.header__action:hover {
  background: var(--primary);
  color: white;
}

.header__breadcrumb .current {
  color: var(--text-primary);
  font-weight: 500;
}
</style>

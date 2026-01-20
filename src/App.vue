<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollProgress from '@/components/common/ScrollProgress.vue'
import BackToTop from '@/components/common/BackToTop.vue'

const route = useRoute()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <div class="app-layout">
    <!-- 滚动进度条 -->
    <ScrollProgress />

    <!-- 侧边栏 (桌面端) -->
    <AppSidebar />

    <!-- 导航栏 (移动端) -->
    <AppNavbar 
      :is-menu-open="isMobileMenuOpen"
      @toggle-menu="toggleMobileMenu"
      @close-menu="closeMobileMenu"
    />

    <!-- 主内容区 -->
    <div class="main-content">
      <RouterView />
      <AppFooter />
    </div>

    <!-- 回到顶部按钮 -->
    <BackToTop />
  </div>
</template>

<style scoped>
/* App 级别的样式已经在全局 CSS 中定义 */
</style>

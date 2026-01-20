import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'NEGIAO - 个人主页' }
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('@/views/NotesListView.vue'),
      meta: { title: '技术笔记' }
    },
    {
      path: '/geoscene',
      name: 'geoscene',
      component: () => import('@/views/GeosceneView.vue'),
      meta: { title: 'GeoScene - 宝藏小城' }
    },
    {
      path: '/notes/:id',
      name: 'note-detail',
      component: () => import('@/views/NoteDetailView.vue'),
      meta: { title: '笔记详情' }
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: () => import('@/views/ScheduleView.vue'),
      meta: { title: '课程表' }
    },
    {
      path: '/word-learning',
      name: 'word-learning',
      component: () => import('@/views/WordLearningView.vue'),
      meta: { title: '英语学习' }
    },
    // 404 页面
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: '页面未找到' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 如果有锚点，滚动到锚点
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // sidebar 宽度考虑
      }
    }
    // 如果有保存的位置（浏览器后退），恢复位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到顶部
    return { top: 0 }
  }
})

// 更新页面标题
router.afterEach((to) => {
  const title = to.meta.title as string
  document.title = title || 'NEGIAO'
})

export default router

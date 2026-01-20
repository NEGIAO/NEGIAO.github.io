import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入全局样式
import './assets/styles/main.css'

// 导入 highlight.js 主题
import 'highlight.js/styles/atom-one-dark.css'

// 导入统计与性能监控（延迟加载）
import { initAnalytics, initPerformanceMonitoring } from './utils/analytics'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 初始化统计（延迟加载，不影响首屏）
initAnalytics()

// 初始化性能监控（仅开发环境或需要时启用）
if (import.meta.env.DEV) {
  initPerformanceMonitoring()
}

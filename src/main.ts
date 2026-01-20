import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入全局样式
import './assets/styles/main.css'

// 导入 highlight.js 主题
import 'highlight.js/styles/atom-one-dark.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

# NEGIAO.github.io Vue 3 架构设计方案

## 📋 项目概述

将原有的静态 HTML/CSS/JS 项目迁移至 Vue 3 + TypeScript + Vite 现代化架构，保留所有功能特性的同时提升代码可维护性、性能和用户体验。

## 🎯 核心目标

1. **模块化重构**：将原项目的 8 大功能模块解耦为独立的 Vue 组件和页面（WebGIS 为独立项目）
2. **类型安全**：全面使用 TypeScript 增强代码健壮性
3. **状态管理**：使用 Pinia 统一管理全局状态
4. **性能优化**：组件懒加载、资源按需加载、代码分割
5. **开发体验**：热模块替换、ESLint/Prettier、DevTools
6. **响应式设计**：统一的断点管理和移动端适配

---

## 📁 项目目录结构

```
d:/Dev/GitHub/VueFile/
├── public/                          # 静态资源（不经过 Webpack 处理）
│   ├── favicon.ico
│   ├── images/                      # 全局图片资源
│   │   ├── icon.png
│   │   ├── typing.svg
│   │   ├── avatar.jpg
│   │   └── backgrounds/
│   ├── data/                        # 静态数据文件
│   │   ├── word-list.json          # 英语学习词库
│   │   └── schedule-data.json      # 课程表数据
│   ├── assets/                      # 第三方静态资源
│   │   └── geoscene/               # 宝藏小城可视化资源
│   └── WebGIS/                      # WebGIS 独立项目（通过 GitHub Actions 部署）
│
├── src/
│   ├── assets/                      # 项目资源（会被 Vite 处理）
│   │   ├── styles/                 # 全局样式
│   │   │   ├── main.css            # 样式入口
│   │   │   ├── variables.css       # CSS 变量
│   │   │   ├── base.css            # 基础样式
│   │   │   ├── layout.css          # 布局样式
│   │   │   ├── navigation.css      # 导航栏样式
│   │   │   ├── components.css      # 组件样式
│   │   │   ├── sections.css        # 区块样式
│   │   │   ├── notes.css           # 笔记页面样式
│   │   │   ├── utilities.css       # 工具类样式
│   │   │   └── animations.css      # 动画效果
│   │   ├── images/                 # 组件级图片
│   │   └── fonts/                  # 自定义字体
│   │
│   ├── components/                  # 可复用组件
│   │   ├── common/                 # 通用基础组件
│   │   │   ├── AppLoading.vue      # 加载动画
│   │   │   ├── BackToTop.vue       # 返回顶部按钮
│   │   │   ├── ScrollProgress.vue  # 滚动进度条
│   │   │   ├── Card.vue            # 卡片组件
│   │   │   ├── Button.vue          # 按钮组件
│   │   │   ├── Badge.vue           # 徽章组件
│   │   │   └── Modal.vue           # 模态框组件
│   │   │
│   │   ├── layout/                 # 布局组件
│   │   │   ├── AppHeader.vue       # 顶部导航栏
│   │   │   ├── AppSidebar.vue      # 侧边栏
│   │   │   ├── AppFooter.vue       # 页脚
│   │   │   ├── MobileMenu.vue      # 移动端菜单
│   │   │   └── PageContainer.vue   # 页面容器
│   │   │
│   │   ├── sections/               # 首页区块组件
│   │   │   ├── HeroSection.vue     # 英雄区
│   │   │   ├── ProjectsSection.vue # 项目展示区
│   │   │   ├── ResearchSection.vue # 研究专题区
│   │   │   └── ContactSection.vue  # 联系方式区
│   │   │
│   │   ├── notes/                  # 笔记相关组件
│   │   │   ├── NoteCard.vue        # 笔记卡片
│   │   │   ├── NoteToc.vue         # 笔记目录
│   │   │   ├── CodeBlock.vue       # 代码块
│   │   │   ├── MarkdownRenderer.vue # Markdown 渲染器
│   │   │   └── CopyButton.vue      # 复制按钮
│   │   │
│   │   ├── schedule/               # 课程表组件
│   │   │   ├── ScheduleGrid.vue    # 课程表格
│   │   │   ├── CourseCard.vue      # 课程卡片
│   │   │   ├── TimeIndicator.vue   # 时间指示器
│   │   │   └── StatusBadge.vue     # 状态徽章
│   │   │
│   │   ├── word-learning/          # 英语学习组件
│   │   │   ├── WordCard.vue        # 单词卡片
│   │   │   ├── WordTest.vue        # 单词测试
│   │   │   ├── ProgressPanel.vue   # 进度面板
│   │   │   ├── TopicFilter.vue     # 主题筛选
│   │   │   └── StatisticsChart.vue # 统计图表
│   │   │
│   │   └── visualization/          # 可视化组件
│   │       ├── EchartsWrapper.vue  # ECharts 包装器
│   │       ├── WordCloud.vue       # 词云图
│   │       ├── LineChart.vue       # 折线图
│   │       └── BarChart.vue        # 柱状图
│   │
│   ├── views/                       # 页面视图组件
│   │   ├── Home/
│   │   │   └── HomeView.vue        # 首页
│   │   │
│   │   ├── Notes/
│   │   │   ├── NotesListView.vue   # 笔记列表
│   │   │   ├── NoteDetailView.vue  # 笔记详情
│   │   │   ├── MarkdownEditor.vue  # Markdown 编辑器
│   │   │   └── GalleryView.vue     # 图片展示
│   │   │
│   │   ├── Schedule/
│   │   │   └── ScheduleView.vue    # 课程表页面
│   │   │
│   │   ├── WordLearning/
│   │   │   └── WordLearningView.vue # 英语学习页面
│   │   │
│   │   ├── Geoscene/
│   │   │   ├── GeosceneIndex.vue   # 宝藏小城主页
│   │   │   ├── WordCloudView.vue   # 词云展示
│   │   │   ├── SeasonalView.vue    # 季节变化
│   │   │   ├── AnnualView.vue      # 年内变化
│   │   │   └── InterannualView.vue # 年际变化
│   │   │
│   │   └── Toolbox/
│   │       └── ToolboxView.vue     # NEGIAO 工具箱
│   │
│   ├── composables/                 # 组合式函数（Hooks）
│   │   ├── useNavigation.ts        # 导航栏逻辑
│   │   ├── useScroll.ts            # 滚动相关
│   │   ├── useAnimations.ts        # 动画效果
│   │   ├── useLoading.ts           # 加载状态
│   │   ├── useNoteToc.ts           # 笔记目录
│   │   ├── useSchedule.ts          # 课程表逻辑
│   │   ├── useWordLearning.ts      # 单词学习逻辑
│   │   ├── useMarkdown.ts          # Markdown 解析
│   │   ├── useEcharts.ts           # ECharts 图表
│   │   ├── useLocalStorage.ts      # 本地存储
│   │   ├── useResponsive.ts        # 响应式断点
│   │   └── useTheme.ts             # 主题切换
│   │
│   ├── stores/                      # Pinia 状态管理
│   │   ├── index.ts                # Store 入口
│   │   ├── app.ts                  # 全局应用状态
│   │   ├── navigation.ts           # 导航状态
│   │   ├── notes.ts                # 笔记状态
│   │   ├── schedule.ts             # 课程表状态
│   │   ├── wordLearning.ts         # 单词学习状态
│   │   └── user.ts                 # 用户偏好设置
│   │
│   ├── router/                      # Vue Router 路由
│   │   ├── index.ts                # 路由配置入口
│   │   ├── routes.ts               # 路由定义
│   │   ├── guards.ts               # 路由守卫
│   │   └── scrollBehavior.ts       # 滚动行为
│   │
│   ├── services/                    # API 服务层
│   │   ├── api.ts                  # API 基础配置
│   │   ├── notes.ts                # 笔记相关 API
│   │   ├── schedule.ts             # 课程表 API
│   │   ├── wordLearning.ts         # 单词学习 API
│   │   └── visualization.ts        # 可视化数据 API
│   │
│   ├── utils/                       # 工具函数
│   │   ├── constants.ts            # 常量定义
│   │   ├── helpers.ts              # 辅助函数
│   │   ├── validators.ts           # 验证函数
│   │   ├── formatters.ts           # 格式化函数
│   │   ├── time.ts                 # 时间处理
│   │   ├── storage.ts              # 本地存储封装
│   │   └── dom.ts                  # DOM 操作
│   │
│   ├── types/                       # TypeScript 类型定义
│   │   ├── index.ts                # 类型导出
│   │   ├── common.ts               # 通用类型
│   │   ├── note.ts                 # 笔记类型
│   │   ├── schedule.ts             # 课程表类型
│   │   ├── word.ts                 # 单词类型
│   │   ├── visualization.ts        # 可视化类型
│   │   └── api.ts                  # API 响应类型
│   │
│   ├── plugins/                     # Vue 插件
│   │   ├── highlight.ts            # 代码高亮插件
│   │   ├── markdown.ts             # Markdown 插件
│   │   └── echarts.ts              # ECharts 插件
│   │
│   ├── directives/                  # 自定义指令
│   │   ├── lazyLoad.ts             # 图片懒加载
│   │   ├── ripple.ts               # 水波纹效果
│   │   └── clickOutside.ts         # 点击外部
│   │
│   ├── App.vue                      # 根组件
│   └── main.ts                      # 应用入口
│
├── tests/                           # 测试文件
│   ├── unit/                       # 单元测试
│   └── e2e/                        # 端到端测试
│
├── .env.development                 # 开发环境变量
├── .env.production                  # 生产环境变量
├── vite.config.ts                   # Vite 配置
├── tsconfig.json                    # TypeScript 配置
├── package.json                     # 项目依赖
└── README.md                        # 项目说明
```

---

## 🧩 核心模块设计

### 1. 路由架构（router/routes.ts）

```typescript
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/HomeView.vue'),
    meta: { title: 'NEGIAO - 个人主页' }
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('@/views/Notes/NotesListView.vue'),
    meta: { title: '技术笔记' },
    children: [
      {
        path: ':id',
        name: 'NoteDetail',
        component: () => import('@/views/Notes/NoteDetailView.vue'),
        meta: { title: '笔记详情' }
      }
    ]
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('@/views/Schedule/ScheduleView.vue'),
    meta: { title: '智能课程表' }
  },
  {
    path: '/word-learning',
    name: 'WordLearning',
    component: () => import('@/views/WordLearning/WordLearningView.vue'),
    meta: { title: '英语学习系统' }
  },
  // WebGIS 由独立项目开发，通过 GitHub Actions 自动部署到 /WebGIS 目录
  // 首页通过外部链接跳转：<a href="/WebGIS/index.html">WebGIS</a>
  {
    path: '/geoscene',
    name: 'Geoscene',
    component: () => import('@/views/Geoscene/GeosceneIndex.vue'),
    meta: { title: '宝藏小城' },
    children: [
      {
        path: 'wordcloud',
        name: 'WordCloud',
        component: () => import('@/views/Geoscene/WordCloudView.vue'),
        meta: { title: '城市印象词云' }
      },
      {
        path: 'seasonal/:city',
        name: 'Seasonal',
        component: () => import('@/views/Geoscene/SeasonalView.vue'),
        meta: { title: '季节变化分析' }
      },
      {
        path: 'annual/:city',
        name: 'Annual',
        component: () => import('@/views/Geoscene/AnnualView.vue'),
        meta: { title: '年内变化分析' }
      },
      {
        path: 'interannual/:city',
        name: 'Interannual',
        component: () => import('@/views/Geoscene/InterannualView.vue'),
        meta: { title: '年际变化分析' }
      }
    ]
  },
  {
    path: '/toolbox',
    name: 'Toolbox',
    component: () => import('@/views/Toolbox/ToolboxView.vue'),
    meta: { title: 'NEGIAO 工具箱' }
  },
  {
    path: '/markdown-editor',
    name: 'MarkdownEditor',
    component: () => import('@/views/Notes/MarkdownEditor.vue'),
    meta: { title: 'Markdown 编辑器' }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/Notes/GalleryView.vue'),
    meta: { title: '技术成果画廊' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '页面未找到' }
  }
]
```

### 2. 状态管理设计

#### 全局应用状态（stores/app.ts）
```typescript
export const useAppStore = defineStore('app', () => {
  const isLoading = ref(true)
  const isMobileMenuOpen = ref(false)
  const scrollProgress = ref(0)
  const isBackToTopVisible = ref(false)
  
  // Favicon 管理
  const ensureFavicon = () => { /* ... */ }
  
  // 预加载图片
  const preloadImages = (urls: string[]) => { /* ... */ }
  
  return {
    isLoading,
    isMobileMenuOpen,
    scrollProgress,
    isBackToTopVisible,
    ensureFavicon,
    preloadImages
  }
})
```

#### 笔记状态（stores/notes.ts）
```typescript
export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([])
  const currentNote = ref<Note | null>(null)
  const tocItems = ref<TocItem[]>([])
  const activeTocId = ref('')
  
  const fetchNotes = async () => { /* ... */ }
  const fetchNoteById = async (id: string) => { /* ... */ }
  const buildToc = (content: HTMLElement) => { /* ... */ }
  
  return {
    notes,
    currentNote,
    tocItems,
    activeTocId,
    fetchNotes,
    fetchNoteById,
    buildToc
  }
})
```

#### 课程表状态（stores/schedule.ts）
```typescript
export const useScheduleStore = defineStore('schedule', () => {
  const courses = ref<Course[]>([])
  const currentCourse = ref<Course | null>(null)
  const currentTime = ref(new Date())
  
  const loadSchedule = async () => { /* ... */ }
  const getCurrentCourse = () => { /* ... */ }
  const getNextCourse = () => { /* ... */ }
  
  // 定时器更新当前时间
  const startTimeUpdate = () => {
    setInterval(() => {
      currentTime.value = new Date()
    }, 1000)
  }
  
  return {
    courses,
    currentCourse,
    currentTime,
    loadSchedule,
    getCurrentCourse,
    getNextCourse,
    startTimeUpdate
  }
})
```

#### 单词学习状态（stores/wordLearning.ts）
```typescript
export const useWordLearningStore = defineStore('wordLearning', () => {
  const words = ref<Word[]>([])
  const currentWord = ref<Word | null>(null)
  const testMode = ref(false)
  const statistics = ref({
    total: 0,
    learned: 0,
    correct: 0,
    wrong: 0
  })
  
  const loadWords = async () => { /* ... */ }
  const getRandomWord = () => { /* ... */ }
  const checkAnswer = (answer: string) => { /* ... */ }
  const updateStatistics = () => { /* ... */ }
  
  return {
    words,
    currentWord,
    testMode,
    statistics,
    loadWords,
    getRandomWord,
    checkAnswer,
    updateStatistics
  }
})
```

### 3. 组合式函数（Composables）

#### useNavigation.ts - 导航栏逻辑
```typescript
export function useNavigation() {
  const isScrolled = ref(false)
  const isHidden = ref(false)
  const lastScrollY = ref(0)
  
  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY
    isScrolled.value = currentScrollY > 50
    isHidden.value = currentScrollY > lastScrollY.value && currentScrollY > 200
    lastScrollY.value = currentScrollY
  }, 100)
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  return { isScrolled, isHidden }
}
```

#### useScroll.ts - 滚动相关
```typescript
export function useScroll() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const scrollToElement = (selector: string, offset = 80) => {
    const element = document.querySelector(selector)
    if (!element) return
    
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
  
  return { scrollToTop, scrollToElement }
}

export function useBackToTop() {
  const isVisible = ref(false)
  
  const handleScroll = throttle(() => {
    isVisible.value = window.scrollY > 300
  }, 200)
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  return { isVisible, scrollToTop: useScroll().scrollToTop }
}

export function useScrollProgress() {
  const progress = ref(0)
  
  const updateProgress = throttle(() => {
    const winScroll = window.pageYOffset
    const height = document.documentElement.scrollHeight - window.innerHeight
    progress.value = (winScroll / height) * 100
  }, 100)
  
  onMounted(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateProgress)
  })
  
  return { progress }
}
```

#### useMarkdown.ts - Markdown 解析
```typescript
export function useMarkdown() {
  const parseMarkdown = (markdown: string): string => {
    // 代码块
    let html = markdown.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
      const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      return `<pre><code class="language-${lang || 'text'}">${escapedCode}</code></pre>`
    })
    
    // 行内代码
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
    
    // 标题
    html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')
    
    // 粗体和斜体
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')
    
    // 链接和图片
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    
    return html
  }
  
  return { parseMarkdown }
}
```

### 4. 类型定义（types/）

#### note.ts
```typescript
export interface Note {
  id: string
  title: string
  description: string
  date: string
  tag: string
  icon: string
  file?: string
  external?: boolean
}

export interface TocItem {
  id: string
  text: string
  level: number
  tagName: string
}

export interface NoteContent {
  html: string
  markdown: string
  toc: TocItem[]
}
```

#### schedule.ts
```typescript
export interface Course {
  id: string
  name: string
  teacher: string
  location: string
  weekday: number
  startTime: string
  endTime: string
  weeks: number[]
  color?: string
}

export interface TimeSlot {
  index: number
  startTime: string
  endTime: string
}

export type CourseStatus = 'upcoming' | 'ongoing' | 'finished' | 'none'
```

#### word.ts
```typescript
export interface Word {
  id: string
  word: string
  phonetic?: string
  meaning: string
  example?: string
  translation?: string
  topic: string
  difficulty: 'easy' | 'medium' | 'hard'
  learned: boolean
  correctCount: number
  wrongCount: number
}

export interface WordStatistics {
  total: number
  learned: number
  byTopic: Record<string, number>
  byDifficulty: Record<string, number>
  accuracy: number
}
```

---

## 🔧 技术栈升级

### 核心依赖
```json
{
  "dependencies": {
    "vue": "^3.5.26",
    "vue-router": "^4.6.4",
    "pinia": "^3.0.4",
    "pinia-plugin-persistedstate": "^4.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.3",
    "vite": "^7.3.0",
    "typescript": "~5.9.3",
    "vue-tsc": "^3.2.2"
  }
}
```

### 新增依赖
```bash
# 可视化
npm install echarts vue-echarts

# Markdown 和代码高亮
npm install marked highlight.js

# 工具库
npm install dayjs lodash-es @vueuse/core

# 类型定义
npm install -D @types/lodash-es @types/marked
```

---

## 🚀 迁移策略

### 阶段一：基础架构搭建（第 1-2 天）
1. ✅ 创建项目目录结构
2. ✅ 配置 TypeScript、ESLint、Prettier
3. ✅ 搭建路由系统
4. ✅ 创建基础布局组件（Header、Sidebar、Footer）
5. ✅ 迁移全局样式（CSS 变量、基础样式）

### 阶段二：核心功能迁移（第 3-5 天）
1. **首页模块**
   - 迁移 Hero 区域
   - 迁移项目展示区
   - 迁移联系方式区
   - 优化动画效果

2. **笔记系统**
   - 创建笔记列表页
   - 创建笔记详情页
   - 实现 TOC 自动生成
   - 集成 Markdown 渲染
   - 添加代码高亮

3. **课程表系统**
   - 迁移课程数据
   - 实现时间同步逻辑
   - 实现课程状态识别
   - 优化呼吸灯效果

### 阶段三：专题功能迁移（第 6-8 天）
1. **英语学习系统**
   - 迁移词库数据
   - 实现单词测试功能
   - 实现统计面板
   - 添加主题筛选

2. **宝藏小城可视化**
   - 集成 ECharts
   - 迁移词云图
   - 迁移各类图表
   - 实现动态数据加载

### 阶段四：优化与完善（第 9-10 天）
1. **性能优化**
   - 组件懒加载
   - 图片懒加载
   - 代码分割
   - 资源压缩

2. **用户体验优化**
   - 添加加载动画
   - 优化过渡效果
   - 完善移动端适配
   - 添加错误边界

3. **测试与部署**
   - 单元测试
   - 端到端测试
   - GitHub Pages 部署配置
   - 构建优化

---

## 📦 资源迁移方案

### 静态资源处理
```
原项目                          →  Vue 项目
---------------------------------------------------
images/icon.png                →  public/images/icon.png
Pages/avatar.jpg               →  public/images/avatar.jpg
images/typing.svg              →  public/images/typing.svg
Pages/Note/resources/          →  public/assets/notes/
Geoscene_宝藏小城/             →  public/assets/geoscene/

# WebGIS 目录保持独立，由外部项目通过 GitHub Actions 部署
WebGIS/                        →  public/WebGIS/ (保持原样)
```

### 数据文件处理
```
Pages/Note/word-list.json      →  public/data/word-list.json
(新建) schedule-data.json      →  public/data/schedule-data.json
```

### 样式迁移
```
Pages/style.css                →  src/assets/styles/
  ├─ variables.css (CSS 变量)
  ├─ base.css (基础样式)
  ├─ layout.css (布局)
  ├─ navigation.css (导航栏)
  ├─ components.css (组件)
  ├─ sections.css (区块)
  ├─ notes.css (笔记)
  └─ utilities.css (工具类)
```

### 脚本迁移
```
Pages/main-enhanced.js         →  src/composables/
  ├─ useNavigation.ts
  ├─ useScroll.ts
  ├─ useAnimations.ts
  └─ useLoading.ts

Pages/notes-toc.js             →  src/composables/useNoteToc.ts
```

---

## 🎨 组件设计规范

### 组件命名规范
- **布局组件**：`App` 前缀（AppHeader、AppSidebar）
- **区块组件**：功能名 + `Section` 后缀（HeroSection、ProjectsSection）
- **卡片组件**：功能名 + `Card` 后缀（NoteCard、CourseCard）
- **通用组件**：简洁命名（Button、Badge、Modal）

### 组件结构规范
```vue
<script setup lang="ts">
// 1. 导入依赖
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// 2. 定义 Props 和 Emits
interface Props {
  title: string
  data?: any[]
}

const props = withDefaults(defineProps<Props>(), {
  data: () => []
})

const emit = defineEmits<{
  click: [id: string]
  change: [value: any]
}>()

// 3. 响应式状态
const isLoading = ref(false)

// 4. 计算属性
const filteredData = computed(() => {
  return props.data.filter(item => item.active)
})

// 5. 方法
const handleClick = (id: string) => {
  emit('click', id)
}

// 6. 生命周期
onMounted(() => {
  // 初始化逻辑
})
</script>

<template>
  <div class="component-name">
    <!-- 模板内容 -->
  </div>
</template>

<style scoped>
.component-name {
  /* 组件样式 */
}
</style>
```

---

## 🔐 环境配置

### .env.development
```env
VITE_APP_TITLE=NEGIAO - 开发环境
VITE_API_BASE_URL=http://localhost:8080
VITE_ENABLE_MOCK=true
```

### .env.production
```env
VITE_APP_TITLE=NEGIAO - Personal Website
VITE_API_BASE_URL=https://negiao.github.io
VITE_ENABLE_MOCK=false
```

---

## 📝 开发规范

### Git Commit 规范
```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式调整
refactor: 重构
perf: 性能优化
test: 测试相关
chore: 构建/工具配置
```

### 代码审查清单
- [ ] TypeScript 类型定义完整
- [ ] 组件职责单一
- [ ] 避免过度嵌套
- [ ] 性能优化（v-memo、computed 缓存）
- [ ] 可访问性（aria-label、语义化标签）
- [ ] 响应式设计
- [ ] 错误处理
- [ ] 代码注释

---

## 🎯 性能优化策略

### 1. 组件懒加载
```typescript
// 路由级懒加载
const Home = () => import('@/views/Home/HomeView.vue')

// 组件级懒加载
const HeavyComponent = defineAsyncComponent(() =>
  import('@/components/HeavyComponent.vue')
)
```

### 2. 图片优化
```vue
<template>
  <img
    v-lazy="imageSrc"
    :alt="imageAlt"
    loading="lazy"
  />
</template>
```

### 3. 虚拟滚动（长列表）
```vue
<template>
  <RecycleScroller
    :items="words"
    :item-size="80"
    key-field="id"
  >
    <template #default="{ item }">
      <WordCard :word="item" />
    </template>
  </RecycleScroller>
</template>
```

### 4. 缓存策略
```typescript
// Vite 配置
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia'],
          'charts': ['echarts', 'vue-echarts']
        }
      }
    }
  }
})
```

---

## 🚢 部署配置

### vite.config.ts
```typescript
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools()
  ]
})
```

### GitHub Actions 自动部署
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 📚 后续扩展规划

### 短期（1-3 个月）
- [ ] 实现全站搜索功能
- [ ] 添加暗色/亮色主题切换
- [ ] 实现多语言支持（中英文）
- [ ] 添加访问统计面板
- [ ] 实现笔记评论系统

### 中期（3-6 个月）
- [ ] 集成 PWA（离线访问）
- [ ] 添加单词发音模块
- [ ] 实现笔记标签系统
- [ ] 优化 SEO（SSR/SSG）
- [ ] 添加 RSS 订阅

### 长期（6-12 个月）
- [ ] 后端 API 开发（Node.js/Nest.js）
- [ ] 用户系统（登录/注册）
- [ ] 数据持久化（数据库）
- [ ] 实时协作编辑
- [ ] 移动端 App（Capacitor）

---

## 🎓 学习资源

- [Vue 3 官方文档](https://cn.vuejs.org/)
- [Vite 官方文档](https://cn.vitejs.dev/)
- [Pinia 官方文档](https://pinia.vuejs.org/zh/)
- [TypeScript 官方文档](https://www.typescriptlang.org/zh/)
- [VueUse 工具库](https://vueuse.org/)

---

## ✅ 行动清单

### 第一周任务
- [ ] 创建完整目录结构
- [ ] 配置开发环境
- [ ] 搭建路由系统
- [ ] 迁移全局样式
- [ ] 创建布局组件
- [ ] 实现首页基础功能

### 第二周任务
- [ ] 完成笔记系统迁移
- [ ] 完成课程表系统迁移
- [ ] 实现 Markdown 渲染
- [ ] 实现代码高亮
- [ ] 优化移动端适配

### 第三周任务
- [ ] 完成英语学习系统
- [ ] 集成 WebGIS 功能
- [ ] 迁移可视化图表
- [ ] 性能优化
- [ ] 测试与部署

---

**该架构设计方案为你的项目提供了清晰的技术路线和实施步骤，可根据实际需求灵活调整。**

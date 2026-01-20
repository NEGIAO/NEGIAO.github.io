# 📝 笔记系统 - Vue 3 核心架构设计

## 🎯 核心定位

这是一个**个人技术博客/笔记系统**，核心功能是：
1. **撰写笔记**：使用 Markdown 语法方便地编写技术笔记
2. **展示笔记**：渲染 Markdown 内容，自动生成目录，代码高亮
3. **易于维护**：添加新笔记只需创建一个 .md 文件

## 🔄 方案对比

### 原方案（HTML + 内嵌 Markdown）
```html
<!-- 每个笔记都是一个 HTML 文件 -->
<article class="note-content" id="note-content">
  <script type="text/markdown" id="note-markdown">
# 标题
## 内容
这里写 Markdown...
  </script>
</article>
<script>
  // 运行时用 marked.js 渲染
  const md = document.getElementById('note-markdown').textContent;
  container.innerHTML = marked.parse(md);
</script>
```

**优点**：简单直接，HTML 文件即可预览  
**缺点**：每个笔记都要复制大量 HTML 模板代码，维护成本高

### Vue 新方案（纯 .md 文件 + 自动渲染）

```
content/
├── notes/
│   ├── arcgis-engine.md     # 只需要纯 Markdown 文件
│   ├── arcpy.md
│   ├── gee-coursework.md
│   └── ...
```

**优点**：
- ✅ 只需专注于写 Markdown，无需关心 HTML 模板
- ✅ 自动生成目录、代码高亮、复制按钮
- ✅ 统一的笔记模板和样式
- ✅ 支持 frontmatter（标题、日期、标签等元数据）
- ✅ 未来可扩展搜索、标签筛选等功能

---

## 📁 精简目录结构（以笔记为核心）

```
d:/Dev/GitHub/VueFile/
├── content/                         # 📝 内容目录（核心！）
│   └── notes/                       # 笔记 Markdown 文件
│       ├── arcgis-engine.md
│       ├── arcpy.md
│       ├── gee-coursework.md
│       ├── ml-dl-learning.md
│       ├── spatial-analysis-R.md
│       ├── word-learning-record.md
│       ├── negiao-toolbox.md
│       └── note-template.md         # 笔记模板
│
├── public/                          # 静态资源
│   ├── images/
│   │   ├── icon.png
│   │   ├── avatar.jpg
│   │   └── typing.svg
│   ├── data/
│   │   ├── word-list.json           # 单词学习数据
│   │   └── schedule.json            # 课程表数据
│   └── WebGIS/                      # WebGIS（独立项目）
│
├── src/
│   ├── assets/
│   │   └── styles/                  # 样式文件
│   │       ├── main.css
│   │       ├── variables.css
│   │       ├── base.css
│   │       ├── layout.css
│   │       ├── components.css
│   │       └── notes.css            # 笔记专用样式
│   │
│   ├── components/
│   │   ├── common/                  # 通用组件
│   │   │   ├── AppLoading.vue
│   │   │   ├── BackToTop.vue
│   │   │   ├── ScrollProgress.vue
│   │   │   └── Card.vue
│   │   │
│   │   ├── layout/                  # 布局组件
│   │   │   ├── AppHeader.vue
│   │   │   ├── AppSidebar.vue
│   │   │   ├── AppFooter.vue
│   │   │   └── MobileMenu.vue
│   │   │
│   │   ├── notes/                   # 笔记组件（核心！）
│   │   │   ├── NoteCard.vue         # 笔记卡片
│   │   │   ├── NoteToc.vue          # 目录组件
│   │   │   ├── NoteRenderer.vue     # Markdown 渲染器
│   │   │   ├── CodeBlock.vue        # 代码块（含复制）
│   │   │   └── TocToggle.vue        # 目录切换按钮
│   │   │
│   │   └── sections/                # 首页区块
│   │       ├── HeroSection.vue
│   │       ├── ProjectsSection.vue
│   │       └── ContactSection.vue
│   │
│   ├── views/
│   │   ├── HomeView.vue             # 首页
│   │   ├── NotesListView.vue        # 笔记列表
│   │   ├── NoteDetailView.vue       # 笔记详情（核心！）
│   │   ├── ScheduleView.vue         # 课程表
│   │   └── WordLearningView.vue     # 单词学习
│   │
│   ├── composables/
│   │   ├── useMarkdown.ts           # Markdown 解析（核心！）
│   │   ├── useNoteToc.ts            # 目录生成
│   │   ├── useNoteList.ts           # 笔记列表
│   │   ├── useNavigation.ts
│   │   ├── useScroll.ts
│   │   └── useLoading.ts
│   │
│   ├── router/
│   │   └── index.ts
│   │
│   ├── stores/
│   │   ├── app.ts
│   │   └── notes.ts                 # 笔记状态
│   │
│   ├── types/
│   │   └── note.ts                  # 笔记类型定义
│   │
│   ├── App.vue
│   └── main.ts
│
├── vite.config.ts
└── package.json
```

---

## 📄 Markdown 笔记文件格式

### 推荐格式（带 Frontmatter）

```markdown
---
title: ArcGIS Engine 开发实践
date: 2024-05-20
tags: [GIS开发, C#, .NET]
description: ArcGIS Engine 的基本功能实现，包括地图控件、空间分析、数据加载等
icon: fas fa-code
---

# ArcGIS Engine 开发实践

## 简介

ArcGIS Engine 是 Esri 公司推出的一款用于构建桌面 GIS 应用程序的开发工具包...

## 环境配置

在开始开发之前，需要配置好 ArcGIS Engine 的开发环境...

```csharp
// 代码示例
using ESRI.ArcGIS.Carto;
```

## 总结

本文介绍了 ArcGIS Engine 的基本功能...
```

### Frontmatter 字段说明

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| title | string | ✅ | 笔记标题 |
| date | string | ✅ | 发布日期 YYYY-MM-DD |
| tags | string[] | ❌ | 标签数组 |
| description | string | ❌ | 简短描述 |
| icon | string | ❌ | Font Awesome 图标类名 |
| draft | boolean | ❌ | 是否为草稿（不显示在列表） |

---

## 🔧 核心实现方案

### 方案 A：构建时处理（推荐）

使用 Vite 插件在构建时将 .md 文件转换为可导入的模块。

#### 1. 安装依赖

```bash
npm install marked highlight.js gray-matter
npm install -D vite-plugin-md @types/markdown-it
```

#### 2. Vite 配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]  // 支持 .md 文件作为组件
    }),
    Markdown({
      headEnabled: true,            // 自动提取 frontmatter
      markdownItSetup(md) {
        // 配置 markdown-it 插件
      }
    })
  ]
})
```

#### 3. 笔记详情视图

```vue
<!-- src/views/NoteDetailView.vue -->
<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMarkdown } from '@/composables/useMarkdown'
import { useNoteToc } from '@/composables/useNoteToc'
import NoteToc from '@/components/notes/NoteToc.vue'
import TocToggle from '@/components/notes/TocToggle.vue'

const route = useRoute()
const noteId = computed(() => route.params.id as string)

const { 
  content, 
  frontmatter, 
  isLoading, 
  error, 
  loadNote 
} = useMarkdown()

const { 
  tocItems, 
  activeId, 
  isTocVisible, 
  buildToc, 
  toggleToc 
} = useNoteToc()

const contentRef = ref<HTMLElement | null>(null)

// 加载笔记
watch(noteId, (id) => {
  if (id) loadNote(id)
}, { immediate: true })

// 构建目录
watch(content, async () => {
  await nextTick()
  if (contentRef.value) {
    buildToc(contentRef.value)
  }
})
</script>

<template>
  <main class="note-layout">
    <!-- 加载状态 -->
    <div v-if="isLoading" class="note-loading">
      <div class="loading-spinner"></div>
    </div>

    <!-- 错误状态 -->
    <div v-else-if="error" class="note-error">
      <p>{{ error }}</p>
    </div>

    <!-- 笔记内容 -->
    <template v-else>
      <!-- 目录 -->
      <NoteToc 
        :items="tocItems" 
        :active-id="activeId"
        :visible="isTocVisible"
      />

      <!-- 目录切换按钮 -->
      <TocToggle 
        :visible="isTocVisible" 
        @toggle="toggleToc" 
      />

      <!-- 文章内容 -->
      <article 
        ref="contentRef"
        class="note-content card"
        v-html="content"
      ></article>
    </template>
  </main>
</template>
```

### 方案 B：运行时加载（更灵活）

直接在运行时加载 .md 文件并渲染。

#### 1. Markdown 解析 Composable

```typescript
// src/composables/useMarkdown.ts
import { ref } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'

// 配置 marked
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  },
  breaks: true,
  gfm: true
})

// 解析 frontmatter
function parseFrontmatter(content: string) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/
  const match = content.match(frontmatterRegex)
  
  if (match) {
    const frontmatterStr = match[1]
    const body = content.slice(match[0].length)
    
    // 简单解析 YAML
    const frontmatter: Record<string, any> = {}
    frontmatterStr.split('\n').forEach(line => {
      const [key, ...values] = line.split(':')
      if (key && values.length) {
        let value = values.join(':').trim()
        // 处理数组
        if (value.startsWith('[') && value.endsWith(']')) {
          value = JSON.parse(value.replace(/'/g, '"'))
        }
        frontmatter[key.trim()] = value
      }
    })
    
    return { frontmatter, body }
  }
  
  return { frontmatter: {}, body: content }
}

export function useMarkdown() {
  const content = ref('')
  const frontmatter = ref<Record<string, any>>({})
  const isLoading = ref(false)
  const error = ref('')

  const loadNote = async (noteId: string) => {
    isLoading.value = true
    error.value = ''
    
    try {
      // 加载 markdown 文件
      const response = await fetch(`/content/notes/${noteId}.md`)
      if (!response.ok) throw new Error('笔记不存在')
      
      const text = await response.text()
      const { frontmatter: fm, body } = parseFrontmatter(text)
      
      frontmatter.value = fm
      content.value = marked.parse(body)
      
      // 添加代码复制按钮
      await addCopyButtons()
    } catch (e) {
      error.value = e instanceof Error ? e.message : '加载失败'
    } finally {
      isLoading.value = false
    }
  }

  const addCopyButtons = async () => {
    await nextTick()
    document.querySelectorAll('pre code').forEach(block => {
      const pre = block.parentElement
      if (!pre || pre.querySelector('.copy-btn')) return
      
      const btn = document.createElement('button')
      btn.className = 'copy-btn'
      btn.textContent = '复制'
      btn.onclick = async () => {
        await navigator.clipboard.writeText(block.textContent || '')
        btn.textContent = '已复制'
        setTimeout(() => btn.textContent = '复制', 2000)
      }
      pre.appendChild(btn)
    })
  }

  return {
    content,
    frontmatter,
    isLoading,
    error,
    loadNote
  }
}
```

#### 2. 笔记列表 Composable

```typescript
// src/composables/useNoteList.ts
import { ref, computed } from 'vue'

export interface NoteMeta {
  id: string
  title: string
  date: string
  description?: string
  tags?: string[]
  icon?: string
}

// 笔记元数据（可以从配置文件或 API 获取）
const notesMeta: NoteMeta[] = [
  {
    id: 'arcgis-engine',
    title: 'ArcGIS Engine 开发实践',
    date: '2024-05-20',
    description: '包含环境配置与基础功能实现',
    tags: ['GIS开发', 'C#'],
    icon: 'fas fa-code'
  },
  {
    id: 'arcpy',
    title: 'ArcPy 自动化处理',
    date: '2024-06-15',
    description: 'Python 在 ArcGIS 中的应用',
    tags: ['Python', 'ArcGIS'],
    icon: 'fab fa-python'
  },
  // ... 更多笔记
]

export function useNoteList() {
  const notes = ref<NoteMeta[]>(notesMeta)
  const searchQuery = ref('')
  const selectedTag = ref('')

  // 过滤后的笔记列表
  const filteredNotes = computed(() => {
    return notes.value.filter(note => {
      const matchesSearch = !searchQuery.value || 
        note.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        note.description?.toLowerCase().includes(searchQuery.value.toLowerCase())
      
      const matchesTag = !selectedTag.value || 
        note.tags?.includes(selectedTag.value)
      
      return matchesSearch && matchesTag
    })
  })

  // 所有标签
  const allTags = computed(() => {
    const tags = new Set<string>()
    notes.value.forEach(note => {
      note.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags)
  })

  return {
    notes,
    filteredNotes,
    searchQuery,
    selectedTag,
    allTags
  }
}
```

---

## 🛤️ 路由配置

```typescript
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
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
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

// 更新页面标题
router.afterEach((to) => {
  document.title = to.meta.title as string || 'NEGIAO'
})

export default router
```

---

## 📝 添加新笔记的工作流程

### 以前的方式（繁琐）
1. 复制一个完整的 HTML 模板文件
2. 修改 `<title>`、`<meta>` 等标签
3. 在 `<script type="text/markdown">` 中写内容
4. 手动添加到笔记列表页面

### 现在的方式（简洁）
1. 在 `content/notes/` 下创建 `my-note.md` 文件
2. 写 frontmatter 和 Markdown 内容
3. 完成！（列表会自动更新）

```markdown
---
title: 我的新笔记
date: 2026-01-20
tags: [学习, 技术]
---

# 我的新笔记

正文内容...
```

---

## 🔮 未来扩展能力

这个以笔记为核心的架构可以轻松扩展：

### 近期
- [ ] 笔记搜索功能
- [ ] 标签筛选
- [ ] 阅读进度记忆
- [ ] 笔记间互链

### 中期
- [ ] 暗色/亮色主题切换
- [ ] RSS 订阅
- [ ] 笔记分类（树状目录）
- [ ] Markdown 在线编辑器

### 远期
- [ ] 评论系统（Giscus）
- [ ] 访问统计
- [ ] 全文搜索（Algolia）
- [ ] 多语言支持

---

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install marked highlight.js gray-matter
npm install -D @types/marked
```

### 2. 创建内容目录

```bash
mkdir -p content/notes
```

### 3. 迁移现有笔记

将原项目中的 `<script type="text/markdown">` 内容提取出来，保存为 `.md` 文件并添加 frontmatter。

### 4. 配置 Vite 静态资源

```typescript
// vite.config.ts
export default defineConfig({
  publicDir: 'public',
  // 将 content 目录也作为静态资源
  server: {
    fs: {
      allow: ['content', 'public', 'src']
    }
  }
})
```

---

## ✅ 总结

| 对比项 | 原方案 | Vue 新方案 |
|--------|--------|------------|
| 文件格式 | .html (含模板) | .md (纯内容) |
| 添加笔记 | 复制模板+修改 | 只写 .md |
| 目录生成 | 每页手动配置 | 自动生成 |
| 代码高亮 | 每页引入 CDN | 全局配置一次 |
| 样式维护 | 分散在各文件 | 统一管理 |
| 可扩展性 | 困难 | 容易 |

**核心改进**：将「笔记内容」与「展示逻辑」彻底分离，你只需专注于写 Markdown。

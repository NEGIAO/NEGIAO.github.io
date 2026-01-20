<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMarkdown } from '@/composables/useMarkdown'
import { useNoteToc } from '@/composables/useNoteToc'
import NoteToc from '@/components/notes/NoteToc.vue'
import TocToggle from '@/components/notes/TocToggle.vue'

const route = useRoute()
const router = useRouter()

const noteId = computed(() => route.params.id as string)

const { content, frontmatter, isLoading, error, loadNote } = useMarkdown()
const { tocItems, activeId, isTocVisible, buildToc, toggleToc, cleanup } = useNoteToc()

const contentRef = ref<HTMLElement | null>(null)

// 加载笔记
watch(noteId, async (id) => {
  if (id) {
    cleanup()
    await loadNote(id)
    
    // 构建目录
    await nextTick()
    if (contentRef.value) {
      buildToc(contentRef.value)
    }
  }
}, { immediate: true })

// 格式化日期
const formattedDate = computed(() => {
  if (!frontmatter.value.date) return ''
  const date = new Date(frontmatter.value.date)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// 返回列表
const goBack = () => {
  router.push('/notes')
}
</script>

<template>
  <div class="note-detail-view">
    <!-- 加载状态 -->
    <div v-if="isLoading" class="note-loading">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>

    <!-- 错误状态 -->
    <div v-else-if="error" class="note-error">
      <i class="fas fa-exclamation-circle"></i>
      <p>{{ error }}</p>
      <button class="btn btn--outline" @click="goBack">
        <i class="fas fa-arrow-left"></i> 返回笔记列表
      </button>
    </div>

    <!-- 笔记内容 -->
    <template v-else>
      <main class="note-layout" :class="{ 'toc-hidden': !isTocVisible }">
        <!-- 目录 -->
        <NoteToc 
          v-show="isTocVisible"
          :items="tocItems" 
          :active-id="activeId"
          :visible="isTocVisible"
        />

        <!-- 目录切换按钮 - 始终显示 -->
        <TocToggle 
          :visible="isTocVisible" 
          @toggle="toggleToc" 
        />

        <!-- 文章内容 -->
        <article class="note-content card">
          <!-- 笔记头部信息 -->
          <header class="note-header">
            <button class="note-header__back" @click="goBack">
              <i class="fas fa-arrow-left"></i> 返回
            </button>
            
            <h1 class="note-header__title">{{ frontmatter.title }}</h1>
            
            <div class="note-header__meta">
              <span v-if="formattedDate" class="note-header__date">
                <i class="far fa-calendar"></i> {{ formattedDate }}
              </span>
              <div v-if="frontmatter.tags?.length" class="note-header__tags">
                <span 
                  v-for="tag in frontmatter.tags" 
                  :key="tag" 
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </header>

          <!-- Markdown 渲染内容 -->
          <div 
            ref="contentRef"
            class="note-body"
            v-html="content"
          ></div>
        </article>
      </main>
    </template>
  </div>
</template>

<style scoped>
.note-detail-view {
  min-height: 100vh;
  padding-bottom: var(--space-2xl);
}

.note-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: var(--space-lg);
  color: var(--text-muted);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--glass-border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.note-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: var(--space-lg);
  text-align: center;
  padding: var(--space-xl);
}

.note-error i {
  font-size: 4rem;
  color: var(--danger);
  opacity: 0.8;
}

.note-error p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 400px;
}

/* 笔记头部 */
.note-header {
  margin-bottom: var(--space-xl);
  padding-bottom: var(--space-xl);
  border-bottom: 1px solid var(--glass-border);
  position: relative;
}

.note-header::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 80px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
}

.note-header__back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.5rem 1rem;
  background: var(--surface-elevated);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: var(--space-lg);
  transition: all 0.3s ease;
}

.note-header__back:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateX(-4px);
}

.note-header__title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: var(--space-md);
  line-height: 1.3;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.note-header__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md);
}

.note-header__date {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--text-muted);
  font-size: 0.9rem;
  padding: 0.35rem 0.75rem;
  background: var(--surface-elevated);
  border-radius: var(--radius-full);
}

.note-header__date i {
  color: var(--primary);
}

.note-header__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

/* 响应式 */
@media (max-width: 1024px) {
  .note-detail-view {
    padding-bottom: var(--space-xl);
  }
}

@media (max-width: 768px) {
  .note-header__back {
    padding: 0.4rem 0.75rem;
    font-size: 0.8rem;
    margin-bottom: var(--space-md);
  }
  
  .note-header__title {
    font-size: 1.5rem;
  }
  
  .note-header__meta {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }
  
  .note-header__date {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .note-header__title {
    font-size: 1.25rem;
  }
  
  .note-header__date {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
  
  .note-loading,
  .note-error {
    padding: var(--space-lg);
  }
}
</style>

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
      <main class="note-layout">
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
  max-width: calc(var(--content-max-width) + var(--toc-width) + var(--spacing-xl));
  margin: 0 auto;
}

.note-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: var(--spacing-md);
  color: var(--text-muted);
}

.note-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: var(--spacing-md);
  text-align: center;
}

.note-error i {
  font-size: 3rem;
  color: var(--danger);
}

.note-error p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

/* 笔记头部 */
.note-header {
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.note-header__back {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.4rem 0.8rem;
  background: var(--bg-tertiary);
  border-radius: var(--border-radius-sm);
  color: var(--text-secondary);
  font-size: 0.85rem;
  margin-bottom: var(--spacing-md);
  transition: all var(--transition-fast);
}

.note-header__back:hover {
  background: var(--primary);
  color: white;
}

.note-header__title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.3;
}

.note-header__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-md);
}

.note-header__date {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--text-muted);
  font-size: 0.9rem;
}

.note-header__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

/* 响应式 */
@media (max-width: 768px) {
  .note-header__title {
    font-size: 1.5rem;
  }
}
</style>

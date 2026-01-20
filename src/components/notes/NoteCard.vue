<script setup lang="ts">
import type { NoteMeta } from '@/types/note'

interface Props {
  note: NoteMeta
}

defineProps<Props>()

// 格式化日期
const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <RouterLink :to="`/notes/${note.id}`" class="note-card">
    <div class="note-card__glow"></div>
    <div class="note-card__content">
      <div class="note-card__header">
        <div class="note-card__icon">
          <i :class="note.icon || 'fas fa-file-alt'"></i>
        </div>
        <div class="note-card__info">
          <h3 class="note-card__title">{{ note.title }}</h3>
          <span class="note-card__date">
            <i class="far fa-calendar-alt"></i>
            {{ formatDate(note.date) }}
          </span>
        </div>
      </div>
      
      <p v-if="note.description" class="note-card__description">
        {{ note.description }}
      </p>
      
      <div v-if="note.tags?.length" class="note-card__tags">
        <span 
          v-for="tag in note.tags" 
          :key="tag" 
          class="tag"
        >
          <i class="fas fa-hashtag"></i>{{ tag }}
        </span>
      </div>
      
      <div class="note-card__footer">
        <span class="note-card__read-more">
          阅读笔记 <i class="fas fa-arrow-right"></i>
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.note-card {
  display: block;
  position: relative;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.note-card__glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.note-card:hover .note-card__glow {
  opacity: 1;
}

.note-card:hover {
  transform: translateY(-6px);
  border-color: rgba(0, 217, 255, 0.3);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 217, 255, 0.1);
}

.note-card__content {
  padding: var(--space-xl);
}

.note-card__header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.note-card__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: var(--radius-lg);
  font-size: 1.25rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
}

.note-card__info {
  flex: 1;
  min-width: 0;
}

.note-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space-xs);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;
}

.note-card:hover .note-card__title {
  color: var(--primary);
}

.note-card__date {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.note-card__date i {
  font-size: 0.75rem;
}

.note-card__description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.note-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
}

.note-card__tags .tag {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 0.3rem 0.7rem;
  background: var(--surface-elevated);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.note-card__tags .tag i {
  font-size: 0.6rem;
  opacity: 0.6;
}

.note-card:hover .note-card__tags .tag {
  background: rgba(0, 217, 255, 0.1);
  color: var(--primary-light);
}

.note-card__footer {
  padding-top: var(--space-md);
  border-top: 1px solid var(--glass-border);
}

.note-card__read-more {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: all 0.3s ease;
}

.note-card__read-more i {
  transition: transform 0.3s ease;
}

.note-card:hover .note-card__read-more {
  color: var(--primary);
}

.note-card:hover .note-card__read-more i {
  transform: translateX(4px);
}

/* 响应式 */
@media (max-width: 768px) {
  .note-card__content {
    padding: var(--space-lg);
  }
  
  .note-card__icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .note-card__title {
    font-size: 1rem;
  }
}
</style>

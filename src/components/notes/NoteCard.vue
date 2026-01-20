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
    <div class="note-card__header">
      <div class="note-card__icon">
        <i :class="note.icon || 'fas fa-file-alt'"></i>
      </div>
      <div class="note-card__info">
        <h3 class="note-card__title">{{ note.title }}</h3>
        <span class="note-card__date">{{ formatDate(note.date) }}</span>
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
        {{ tag }}
      </span>
    </div>
  </RouterLink>
</template>

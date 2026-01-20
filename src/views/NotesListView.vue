<script setup lang="ts">
import { useNoteList } from '@/composables/useNoteList'
import NoteCard from '@/components/notes/NoteCard.vue'

const { 
  sortedNotes, 
  searchQuery, 
  selectedTag, 
  allTags, 
  setSearchQuery, 
  setSelectedTag, 
  clearFilters 
} = useNoteList()
</script>

<template>
  <div class="notes-view">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-book"></i>
        技术笔记
      </h1>
      <p class="page-description">
        记录学习与开发过程中的技术笔记，涵盖 GIS、Python、前端开发等领域
      </p>
    </div>

    <!-- 筛选区 -->
    <div class="filters">
      <!-- 搜索框 -->
      <div class="search-box">
        <i class="fas fa-search search-box__icon"></i>
        <input 
          type="text"
          class="search-box__input"
          placeholder="搜索笔记..."
          :value="searchQuery"
          @input="setSearchQuery(($event.target as HTMLInputElement).value)"
        >
        <button 
          v-if="searchQuery"
          class="search-box__clear"
          @click="setSearchQuery('')"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>

      <!-- 标签筛选 -->
      <div class="filter-tags">
        <button 
          v-for="tag in allTags" 
          :key="tag"
          class="filter-tag"
          :class="{ 'is-active': selectedTag === tag }"
          @click="setSelectedTag(tag)"
        >
          {{ tag }}
        </button>
        <button 
          v-if="selectedTag || searchQuery"
          class="filter-tag filter-tag--clear"
          @click="clearFilters"
        >
          <i class="fas fa-times"></i> 清除筛选
        </button>
      </div>
    </div>

    <!-- 笔记列表 -->
    <div class="notes-grid" v-if="sortedNotes.length > 0">
      <NoteCard 
        v-for="note in sortedNotes" 
        :key="note.id" 
        :note="note" 
      />
    </div>

    <!-- 空状态 -->
    <div class="empty-state" v-else>
      <i class="fas fa-search empty-state__icon"></i>
      <p>没有找到匹配的笔记</p>
      <button class="btn btn--outline" @click="clearFilters">
        清除筛选条件
      </button>
    </div>
  </div>
</template>

<style scoped>
.notes-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-2xl);
}

.page-header {
  margin-bottom: var(--space-xl);
}

.page-title {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 1.75rem;
  color: var(--text);
  margin-bottom: var(--space-sm);
}

.page-title i {
  color: var(--primary);
}

.page-description {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* 筛选区 */
.filters {
  margin-bottom: var(--space-xl);
}

.search-box {
  margin-bottom: var(--space-md);
  max-width: 400px;
}

.search-box__clear {
  color: var(--text-muted);
  padding: 0.25rem;
  transition: color var(--transition-fast);
}

.search-box__clear:hover {
  color: var(--text);
}

/* 标签筛选 */
.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.filter-tag {
  padding: 0.4rem 0.8rem;
  background: var(--surface-elevated);
  border: 1px solid transparent;
  border-radius: 9999px;
  color: var(--text-secondary);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-tag:hover {
  background: var(--glass-bg);
  border-color: var(--glass-border);
}

.filter-tag.is-active {
  background: var(--primary);
  color: white;
}

.filter-tag--clear {
  background: transparent;
  border-color: var(--glass-border);
  color: var(--text-muted);
}

.filter-tag--clear:hover {
  border-color: var(--danger);
  color: var(--danger);
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: var(--space-2xl);
  color: var(--text-muted);
}

.empty-state__icon {
  font-size: 3rem;
  margin-bottom: var(--space-md);
  opacity: 0.5;
}

.empty-state p {
  margin-bottom: var(--space-lg);
}
</style>

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
  min-height: 100vh;
}

.page-header {
  margin-bottom: var(--space-2xl);
  text-align: center;
  padding: var(--space-2xl) 0;
  background: radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.08) 0%, transparent 60%);
  border-radius: var(--radius-2xl);
  position: relative;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: var(--gradient-primary);
  border-radius: var(--radius-full);
}

.page-title {
  display: inline-flex;
  align-items: center;
  gap: var(--space-md);
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-md);
}

.page-title i {
  font-size: 2rem;
}

.page-description {
  color: var(--text-muted);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 筛选区 */
.filters {
  margin-bottom: var(--space-2xl);
  padding: var(--space-lg);
  background: var(--surface);
  border-radius: var(--radius-xl);
  border: 1px solid var(--glass-border);
}

.search-box {
  position: relative;
  margin-bottom: var(--space-lg);
  max-width: 100%;
}

.search-box__icon {
  position: absolute;
  left: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  font-size: 1rem;
}

.search-box__input {
  width: 100%;
  padding: var(--space-md) var(--space-md) var(--space-md) calc(var(--space-md) * 2 + 1rem);
  background: var(--surface-elevated);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  color: var(--text);
  font-size: 1rem;
  transition: all var(--transition-normal);
}

.search-box__input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.15);
}

.search-box__input::placeholder {
  color: var(--text-muted);
}

.search-box__clear {
  position: absolute;
  right: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-muted);
  padding: var(--space-xs);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.search-box__clear:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.1);
}

/* 标签筛选 */
.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.filter-tag {
  padding: 0.5rem 1rem;
  background: var(--surface-elevated);
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-normal);
}

.filter-tag:hover {
  background: rgba(0, 217, 255, 0.1);
  border-color: rgba(0, 217, 255, 0.3);
  color: var(--primary);
  transform: translateY(-2px);
}

.filter-tag.is-active {
  background: var(--gradient-primary);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
}

.filter-tag--clear {
  background: transparent;
  border: 1px dashed var(--glass-border);
  color: var(--text-muted);
}

.filter-tag--clear:hover {
  border-color: var(--danger);
  color: var(--danger);
  background: rgba(244, 67, 54, 0.1);
}

/* 笔记网格 */
.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: var(--space-xl);
}

/* 空状态 */
.empty-state {
  text-align: center;
  padding: var(--space-3xl);
  color: var(--text-muted);
  background: var(--surface);
  border-radius: var(--radius-xl);
  border: 1px dashed var(--glass-border);
}

.empty-state__icon {
  font-size: 4rem;
  margin-bottom: var(--space-lg);
  opacity: 0.3;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.empty-state p {
  margin-bottom: var(--space-lg);
  font-size: 1.1rem;
}

/* 响应式 */
@media (max-width: 1024px) {
  .notes-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}

@media (max-width: 768px) {
  .notes-view {
    padding: var(--space-lg);
  }
  
  .page-header {
    padding: var(--space-lg) 0;
  }
  
  .page-title {
    font-size: 1.75rem;
    flex-direction: column;
    gap: var(--space-sm);
  }
  
  .page-title i {
    font-size: 1.5rem;
  }
  
  .page-description {
    font-size: 0.95rem;
  }
  
  .filters {
    padding: var(--space-md);
  }
  
  .notes-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
  
  .filter-tags {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .notes-view {
    padding: var(--space-md);
  }
  
  .page-header {
    padding: var(--space-md) 0;
  }
  
  .page-title {
    font-size: 1.5rem;
  }
  
  .page-description {
    font-size: 0.85rem;
  }
  
  .filter-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
  
  .empty-state {
    padding: var(--space-xl);
  }
  
  .empty-state__icon {
    font-size: 3rem;
  }
}
</style>

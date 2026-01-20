<script setup lang="ts">
import type { TocItem } from '@/types/note'

interface Props {
  items: TocItem[]
  activeId: string
  visible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: true
})

const emit = defineEmits<{
  navigate: [id: string]
}>()

// 获取相对于最小层级的缩进级别
const getIndentLevel = (level: number) => {
  const minLevel = Math.min(...props.items.map(item => item.level))
  return level - minLevel
}

const handleClick = (id: string) => {
  emit('navigate', id)
  
  // 平滑滚动到目标
  const el = document.getElementById(id)
  if (el) {
    const top = el.offsetTop - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<template>
  <nav 
    class="note-toc" 
    :class="{ 'is-visible': visible }"
    v-if="items.length > 0"
  >
    <h3 class="note-toc__title">
      <i class="fas fa-list-ul"></i>
      目录
    </h3>
    <ul class="note-toc__list">
      <li 
        v-for="item in items" 
        :key="item.id"
        class="note-toc__item"
      >
        <a 
          :href="`#${item.id}`"
          class="note-toc__link"
          :class="{ 'is-active': item.id === activeId }"
          :style="{ '--toc-level': getIndentLevel(item.level) }"
          @click.prevent="handleClick(item.id)"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

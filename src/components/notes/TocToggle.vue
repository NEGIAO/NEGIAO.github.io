<script setup lang="ts">
interface Props {
  visible: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <button 
    class="toc-toggle"
    @click="emit('toggle')"
    :title="visible ? '隐藏目录' : '显示目录'"
  >
    <i :class="visible ? 'fas fa-times' : 'fas fa-list'"></i>
  </button>
</template>

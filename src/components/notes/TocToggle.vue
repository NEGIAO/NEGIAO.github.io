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
    :class="{ 'is-active': visible }"
    @click="emit('toggle')"
    :title="visible ? '隐藏目录' : '显示目录'"
    type="button"
  >
    <i :class="visible ? 'fas fa-times' : 'fas fa-bars'"></i>
  </button>
</template>

<style scoped>
.toc-toggle.is-active {
  background: rgba(0, 217, 255, 0.2);
  border-color: var(--primary);
  color: var(--primary);
}
</style>

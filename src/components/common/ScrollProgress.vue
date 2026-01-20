<script setup lang="ts">
import { useScroll } from '@/composables/useScroll'

const { scrollProgress } = useScroll()
</script>

<template>
  <div class="scroll-progress">
    <div 
      class="scroll-progress__bar" 
      :style="{ width: `${scrollProgress}%` }"
    ></div>
  </div>
</template>

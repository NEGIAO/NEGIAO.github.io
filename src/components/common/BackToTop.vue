<script setup lang="ts">
import { useScroll } from '@/composables/useScroll'

const { showBackToTop, scrollToTop } = useScroll()
</script>

<template>
  <Transition name="fade">
    <button 
      v-show="showBackToTop"
      class="back-to-top"
      :class="{ 'is-visible': showBackToTop }"
      @click="scrollToTop"
      title="回到顶部"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </Transition>
</template>

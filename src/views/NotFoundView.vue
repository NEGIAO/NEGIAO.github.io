<script setup lang="ts">
// 404 页面
</script>

<template>
  <div class="not-found-view">
    <div class="not-found-content">
      <div class="not-found-code">404</div>
      <h1>页面未找到</h1>
      <p>抱歉，您访问的页面不存在或已被移除</p>
      <div class="not-found-actions">
        <RouterLink to="/" class="btn btn--primary">
          <i class="fas fa-home"></i> 返回首页
        </RouterLink>
        <RouterLink to="/notes" class="btn btn--outline">
          <i class="fas fa-book"></i> 浏览笔记
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-view {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.not-found-content {
  text-align: center;
  padding: var(--spacing-xl);
}

.not-found-code {
  font-size: 8rem;
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: var(--spacing-md);
}

.not-found-content h1 {
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.not-found-content p {
  color: var(--text-muted);
  margin-bottom: var(--spacing-xl);
}

.not-found-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}
</style>

<script setup lang="ts">
// 课程表视图 - 占位页面
</script>

<template>
  <div class="schedule-view">
    <div class="page-header">
      <h1 class="page-title">
        <i class="fas fa-calendar-alt"></i>
        课程表
      </h1>
      <p class="page-description">
        学期课程安排（开发中...）
      </p>
    </div>

    <div class="placeholder-content card">
      <div class="placeholder-icon">
        <i class="fas fa-hammer"></i>
      </div>
      <h2>功能开发中</h2>
      <p>课程表功能正在开发中，敬请期待！</p>
      <RouterLink to="/" class="btn btn--primary">
        <i class="fas fa-home"></i> 返回首页
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.schedule-view {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: var(--spacing-xl);
}

.page-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.page-title i {
  color: var(--primary);
}

.page-description {
  color: var(--text-muted);
}

.placeholder-content {
  text-align: center;
  padding: var(--spacing-2xl);
}

.placeholder-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--primary-rgb), 0.2);
  color: var(--primary);
  border-radius: 50%;
  font-size: 2rem;
}

.placeholder-content h2 {
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.placeholder-content p {
  color: var(--text-muted);
  margin-bottom: var(--spacing-lg);
}
</style>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <p class="footer__copyright">
          &copy; {{ currentYear }} <a href="https://github.com/NEGIAO" target="_blank" rel="noopener noreferrer">NEGIAO</a>. All rights reserved.
        </p>
        <p class="footer__links">
          <a href="https://github.com/NEGIAO" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github"></i> GitHub
          </a>
          <span class="footer__divider">|</span>
          <a href="/WebGIS/index.html">
            <i class="fas fa-map"></i> WebGIS
          </a>
        </p>
        <p class="footer__tech">
          Powered by <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue 3</a> + 
          <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer__copyright {
  color: var(--text-secondary);
}

.footer__links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.footer__links a {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.footer__divider {
  color: var(--border);
}

.footer__tech {
  font-size: 0.75rem;
  color: var(--text-muted);
}
</style>

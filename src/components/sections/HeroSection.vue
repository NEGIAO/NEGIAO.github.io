<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

// 技术标签配置
const techBadges = [
  { icon: 'fas fa-globe-asia', text: 'WebGIS', variant: 'primary' },
  { icon: 'fas fa-chart-line', text: '数据可视化', variant: 'accent' },
  { icon: 'fas fa-laptop-code', text: '全栈开发', variant: 'success' }
]

// 操作按钮配置
const actions = [
  { href: '/WebGIS/index.html', icon: 'fas fa-book-open', text: 'WebGIS', primary: false },
  { to: '#projects', icon: 'fas fa-rocket', text: '探索项目', primary: true, large: true },
  { to: '/notes', icon: 'fas fa-book-open', text: '技术笔记', primary: false }
]

const initAnimationsAndInteractions = (): (() => void) => {
  let animationObserver: IntersectionObserver | null = null;
  const rippleHandlers: Array<{ el: Element; handler: EventListener }> = [];
  let onScroll: ((this: Window, ev?: Event) => any) | null = null;

  // 视差浮动形状
  const floatingShapes = Array.from(document.querySelectorAll('.floating-shapes .shape')) as HTMLElement[];
  if (floatingShapes.length > 0) {
    onScroll = () => {
      const scrolled = window.pageYOffset;
      floatingShapes.forEach((shape, index) => {
        const rate = scrolled * (0.1 + index * 0.05);
        (shape as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 入场动画
  if ('IntersectionObserver' in window) {
    animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          animationObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const animatedElements = Array.from(document.querySelectorAll('.card:not(.note-toc), .feature, .hero__title, .hero__subtitle, .tech-badge')) as HTMLElement[];
    animatedElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      const delay = (index % 5) * 0.1;
      el.style.transition = `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`;
      animationObserver?.observe(el);
    });
  }

  // 卡片点击波纹效果
  const cards = Array.from(document.querySelectorAll('.card')) as HTMLElement[];
  cards.forEach(card => {
    const handler = function (e: Event) {
      const ev = e as MouseEvent;
      const rect = (this as HTMLElement).getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = ev.clientX - rect.left - size / 2;
      const y = ev.clientY - rect.top - size / 2;
      ripple.style.cssText = `position: absolute; width: ${size}px; height: ${size}px; left: ${x}px; top: ${y}px; background: rgba(0,217,255,0.3); border-radius:50%; transform:scale(0); animation:ripple 0.3s linear; pointer-events:none; z-index:1;`;
      (this as HTMLElement).style.position = 'relative';
      (this as HTMLElement).style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); }, 300);
    };
    card.addEventListener('click', handler);
    rippleHandlers.push({ el: card, handler });
  });

  // 添加波纹关键帧与 animate-in 样式（如果尚未插入）
  if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `@keyframes ripple{to{transform:scale(4);opacity:0;}} .animate-in{opacity:1!important;transform:translateY(0)!important;}`;
    document.head.appendChild(style);
  }

  // 返回清理函数
  return () => {
    if (onScroll) window.removeEventListener('scroll', onScroll as EventListener);
    rippleHandlers.forEach(({ el, handler }) => el.removeEventListener('click', handler));
    if (animationObserver) { animationObserver.disconnect(); animationObserver = null; }
  };
};

let cleanupAnimations: (() => void) | null = null;

onMounted(() => {
  cleanupAnimations = initAnimationsAndInteractions();
});

onBeforeUnmount(() => {
  cleanupAnimations?.();
});
</script>

<template>
  <section class="section section--hero" id="main">
    <div class="container">
      <div class="hero">
        <!-- 头像容器 -->
        <div class="avatar-container">
          <div class="avatar-ring"></div>
          <div class="avatar-glow"></div>
          <img 
            src="/public/images/avatar.jpg" 
            alt="Avatar" 
            class="avatar"
            @error="($event.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/initials/svg?seed=NEGIAO'"
          >
        </div>

        <!-- 标题 -->
        <h1 class="hero__title">NEGIAO</h1>

        <!-- 副标题 / 打字效果 -->
        <div class="hero__subtitle">
          <img 
            src="/public/images/typing.svg" 
            alt="typing" 
            class="hero__typing"
            @error="($event.target as HTMLImageElement).style.display = 'none'"
          >
        </div>

        <!-- 技术标签 -->
        <div class="hero-tech-badges">
          <span 
            v-for="badge in techBadges" 
            :key="badge.text" 
            class="tech-badge"
            :class="`tech-badge--${badge.variant}`"
          >
            <i :class="badge.icon"></i>
            {{ badge.text }}
          </span>
        </div>

        <!-- 操作按钮 -->
        <div class="hero__actions">
          <template v-for="action in actions" :key="action.text">
            <!-- 锚点链接 -->
            <a 
              v-if="action.to?.startsWith('#')"
              :href="action.to"
              class="btn"
              :class="[
                action.primary ? 'btn--primary' : 'btn--outline',
                action.large ? 'btn--large' : ''
              ]"
            >
              <i :class="action.icon"></i>
              {{ action.text }}
            </a>
            
            <!-- 内部路由链接 -->
            <RouterLink 
              v-else-if="action.to"
              :to="action.to" 
              class="btn"
              :class="[
                action.primary ? 'btn--primary' : 'btn--outline',
                action.large ? 'btn--large' : ''
              ]"
            >
              <i :class="action.icon"></i>
              {{ action.text }}
            </RouterLink>
            
            <!-- 外部链接 -->
            <a 
              v-else-if="action.href"
              :href="action.href"
              class="btn"
              :class="[
                action.primary ? 'btn--primary' : 'btn--outline',
                action.large ? 'btn--large' : ''
              ]"
            >
              <i :class="action.icon"></i>
              {{ action.text }}
            </a>
          </template>
        </div>
      </div>
    </div>

    <!-- 浮动形状背景 -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <!-- <div class="shape shape-2"></div>
      <div class="shape shape-3"></div> -->
    </div>
  </section>
</template>

<style scoped>
/* Hero 样式已在 components.css 中定义 */
.hero__actions {
  margin-top: 0; /* 保持文档流原位 */
  transform: translateY(40px); /* 视觉下移，不影响相邻块位置 */
  will-change: transform;
}
.hero-tech-badges{
    margin-top: 0;
    transform: translateY(20px);
    will-change: transform;
}
</style>

/**
 * 滚动相关 Composable
 * 滚动进度条、回到顶部按钮等
 */

import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const scrollProgress = ref(0)
  const isScrolled = ref(false)
  const showBackToTop = ref(false)

  let ticking = false

  const updateScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight

    // 计算滚动进度
    scrollProgress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

    // 是否已滚动
    isScrolled.value = scrollTop > 50

    // 是否显示回到顶部按钮
    showBackToTop.value = scrollTop > 300
  }

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScroll()
        ticking = false
      })
      ticking = true
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToElement = (selector: string, offset = 80) => {
    const el = document.querySelector(selector)
    if (el) {
      const top = (el as HTMLElement).offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollProgress,
    isScrolled,
    showBackToTop,
    scrollToTop,
    scrollToElement
  }
}

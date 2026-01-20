/**
 * 笔记目录 Composable
 * 自动从 Markdown 内容生成目录
 */

import { ref, onMounted, onUnmounted } from 'vue'
import type { TocItem } from '@/types/note'

/**
 * 生成 slug（用于锚点）
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\u4e00-\u9fa5-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * 节流函数
 */
function throttle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0
  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastCall >= delay) {
      lastCall = now
      fn(...args)
    }
  }
}

export function useNoteToc() {
  const tocItems = ref<TocItem[]>([])
  const activeId = ref('')
  const isTocVisible = ref(true)

  let headingElements: HTMLElement[] = []
  let scrollHandler: (() => void) | null = null

  /**
   * 从容器中提取标题并构建目录
   */
  const buildToc = (container: HTMLElement) => {
    const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6')
    const items: TocItem[] = []
    headingElements = []

    headings.forEach((heading, index) => {
      const el = heading as HTMLElement
      const level = parseInt(el.tagName.charAt(1))
      const text = el.textContent || ''
      
      // 生成或获取 id
      let id = el.id
      if (!id) {
        id = slugify(text) || `heading-${index}`
        el.id = id
      }

      items.push({ id, text, level })
      headingElements.push(el)
    })

    tocItems.value = items

    // 设置滚动监听
    setupScrollSpy()
  }

  /**
   * 设置滚动监听，高亮当前可见标题
   */
  const setupScrollSpy = () => {
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler)
    }

    scrollHandler = throttle(() => {
      const scrollTop = window.scrollY
      const offset = 100 // header 高度 + 一些余量

      let currentId = ''

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i]
        if (el.offsetTop <= scrollTop + offset) {
          currentId = el.id
          break
        }
      }

      // 如果没找到，使用第一个
      if (!currentId && headingElements.length > 0) {
        currentId = headingElements[0].id
      }

      activeId.value = currentId
    }, 100)

    window.addEventListener('scroll', scrollHandler)
  }

  /**
   * 滚动到指定标题
   */
  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.offsetTop - 80 // header 高度
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  /**
   * 切换目录显示
   */
  const toggleToc = () => {
    isTocVisible.value = !isTocVisible.value
  }

  /**
   * 清理
   */
  const cleanup = () => {
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler)
      scrollHandler = null
    }
    headingElements = []
    tocItems.value = []
    activeId.value = ''
  }

  onUnmounted(cleanup)

  return {
    tocItems,
    activeId,
    isTocVisible,
    buildToc,
    scrollToHeading,
    toggleToc,
    cleanup
  }
}

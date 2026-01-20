/**
 * Markdown 解析 Composable
 * 使用 marked + highlight.js 渲染 Markdown
 */

import { ref, nextTick } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import type { NoteFrontmatter } from '@/types/note'

// 自定义 renderer 添加代码高亮
const renderer = new marked.Renderer()

renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
  const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext'
  const highlighted = hljs.highlight(text, { language }).value
  return `<pre><code class="hljs language-${language}">${highlighted}</code></pre>`
}

// 配置 marked 选项
marked.setOptions({
  renderer,
  breaks: true,
  gfm: true
})

/**
 * 解析 Frontmatter
 */
function parseFrontmatter(content: string): {
  frontmatter: NoteFrontmatter
  body: string
} {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/
  const match = content.match(frontmatterRegex)

  if (match) {
    const frontmatterStr = match[1]
    const body = content.slice(match[0].length)

    // 简单解析 YAML
    const frontmatter: Record<string, unknown> = {}
    frontmatterStr.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':')
      if (colonIndex > 0) {
        const key = line.slice(0, colonIndex).trim()
        let value: unknown = line.slice(colonIndex + 1).trim()

        // 处理数组 [a, b, c]
        if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
          try {
            value = JSON.parse(value.replace(/'/g, '"'))
          } catch {
            // 保持原值
          }
        }
        // 处理布尔值
        else if (value === 'true') value = true
        else if (value === 'false') value = false

        frontmatter[key] = value
      }
    })

    return {
      frontmatter: {
        title: (frontmatter.title as string) || '未命名笔记',
        date: (frontmatter.date as string) || '',
        tags: frontmatter.tags as string[] | undefined,
        description: frontmatter.description as string | undefined,
        icon: frontmatter.icon as string | undefined,
        draft: frontmatter.draft as boolean | undefined
      },
      body
    }
  }

  return {
    frontmatter: { title: '未命名笔记', date: '' },
    body: content
  }
}

/**
 * 添加代码复制按钮
 */
async function addCopyButtons() {
  await nextTick()
  document.querySelectorAll('pre code').forEach(block => {
    const pre = block.parentElement
    if (!pre || pre.querySelector('.copy-btn')) return

    const btn = document.createElement('button')
    btn.className = 'copy-btn'
    btn.textContent = '复制'
    btn.onclick = async () => {
      try {
        await navigator.clipboard.writeText(block.textContent || '')
        btn.textContent = '已复制!'
        setTimeout(() => (btn.textContent = '复制'), 2000)
      } catch {
        btn.textContent = '失败'
        setTimeout(() => (btn.textContent = '复制'), 2000)
      }
    }
    pre.appendChild(btn)
  })
}

/**
 * useMarkdown Composable
 */
export function useMarkdown() {
  const content = ref('')
  const frontmatter = ref<NoteFrontmatter>({ title: '', date: '' })
  const isLoading = ref(false)
  const error = ref('')

  /**
   * 加载并解析 Markdown 笔记
   */
  const loadNote = async (noteId: string) => {
    isLoading.value = true
    error.value = ''

    try {
      // 尝试从 public/content/notes/ 加载
      const response = await fetch(`/content/notes/${noteId}.md`)
      
      if (!response.ok) {
        throw new Error(`笔记 "${noteId}" 不存在`)
      }

      const text = await response.text()
      const { frontmatter: fm, body } = parseFrontmatter(text)

      frontmatter.value = fm
      content.value = await marked.parse(body)

      // 添加代码复制按钮
      await addCopyButtons()
    } catch (e) {
      error.value = e instanceof Error ? e.message : '加载失败'
      content.value = ''
      frontmatter.value = { title: '', date: '' }
    } finally {
      isLoading.value = false
    }
  }

  /**
   * 直接解析 Markdown 字符串
   */
  const parseMarkdown = async (markdown: string) => {
    const { frontmatter: fm, body } = parseFrontmatter(markdown)
    frontmatter.value = fm
    content.value = await marked.parse(body)
    await addCopyButtons()
  }

  return {
    content,
    frontmatter,
    isLoading,
    error,
    loadNote,
    parseMarkdown
  }
}

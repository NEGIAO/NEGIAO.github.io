/**
 * Markdown 解析 Composable
 * 使用 marked + highlight.js 渲染 Markdown
 */

import { ref, nextTick } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import type { NoteFrontmatter } from '@/types/note'

// 自定义 renderer 添加增强功能
const renderer = new marked.Renderer()

// 代码块渲染 - 添加语言标签
renderer.code = ({ text, lang }: { text: string; lang?: string }) => {
  const language = lang && hljs.getLanguage(lang) ? lang : 'plaintext'
  const highlighted = hljs.highlight(text, { language }).value
  const languageLabel = lang || 'text'
  return `<pre><div class="code-header"><span class="code-lang">${languageLabel}</span></div><code class="hljs language-${language}">${highlighted}</code></pre>`
}

// 表格渲染 - 添加响应式包装
renderer.table = (token: any) => {
  const header = token.header
  const body = token.body
  return `<div class="table-wrapper"><table><thead>${header}</thead><tbody>${body}</tbody></table></div>`
}

// 链接渲染 - 外部链接添加图标和新标签打开
renderer.link = (token: any) => {
  const href = token.href
  const title = token.title
  const text = token.text
  const isExternal = href.startsWith('http://') || href.startsWith('https://')
  const titleAttr = title ? ` title="${title}"` : ''
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
  const icon = isExternal ? ' <i class="fas fa-external-link-alt"></i>' : ''
  return `<a href="${href}"${titleAttr}${target}>${text}${icon}</a>`
}

// 图片渲染 - 添加懒加载和点击预览
renderer.image = (token: any) => {
  const href = token.href
  const title = token.title
  const text = token.text
  const titleAttr = title ? ` title="${title}"` : ''
  const alt = text || ''
  return `<img src="${href}" alt="${alt}"${titleAttr} loading="lazy" class="zoomable">`
}

// 任务列表渲染
renderer.listitem = (token: any) => {
  const text = token.text
  const task = token.task
  const checked = token.checked
  if (task) {
    const checkbox = checked 
      ? '<input type="checkbox" disabled checked class="task-checkbox">'
      : '<input type="checkbox" disabled class="task-checkbox">'
    return `<li class="task-list-item">${checkbox}${text}</li>`
  }
  return `<li>${text}</li>`
}

// 配置 marked 选项 - 启用所有扩展
marked.setOptions({
  renderer,
  breaks: true,
  gfm: true, // GitHub Flavored Markdown
  pedantic: false
})

// 使用 marked 扩展支持更多功能
marked.use({
  extensions: [
    {
      name: 'alert',
      level: 'block',
      start(src: string) { return src.match(/^:::/)?.index },
      tokenizer(src: string) {
        const rule = /^:::(tip|warning|danger|info)\n([\s\S]*?)\n:::/
        const match = rule.exec(src)
        if (match) {
          return {
            type: 'alert',
            raw: match[0],
            alertType: match[1],
            text: match[2].trim()
          }
        }
      },
      renderer(token: any) {
        const icons: Record<string, string> = {
          tip: 'fa-lightbulb',
          warning: 'fa-exclamation-triangle',
          danger: 'fa-times-circle',
          info: 'fa-info-circle'
        }
        const icon = icons[token.alertType] || 'fa-info-circle'
        return `<div class="alert alert-${token.alertType}"><i class="fas ${icon}"></i><div class="alert-content">${marked.parse(token.text)}</div></div>`
      }
    }
  ]
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
  // 等待 DOM 更新完成
  setTimeout(() => {
    const container = document.querySelector('.note-body') || document
    container.querySelectorAll('pre').forEach(pre => {
      // 跳过已有按钮的
      if (pre.querySelector('.copy-btn')) return
      
      const code = pre.querySelector('code')
      if (!code) return

      const btn = document.createElement('button')
      btn.className = 'copy-btn'
      btn.type = 'button'
      btn.innerHTML = '<i class="far fa-copy"></i> <span>复制</span>'
      
      btn.addEventListener('click', async (e) => {
        e.preventDefault()
        e.stopPropagation()
        try {
          await navigator.clipboard.writeText(code.textContent || '')
          btn.innerHTML = '<i class="fas fa-check"></i> <span>已复制!</span>'
          btn.classList.add('copied')
          setTimeout(() => {
            btn.innerHTML = '<i class="far fa-copy"></i> <span>复制</span>'
            btn.classList.remove('copied')
          }, 2000)
        } catch {
          btn.innerHTML = '<i class="fas fa-times"></i> <span>失败</span>'
          setTimeout(() => {
            btn.innerHTML = '<i class="far fa-copy"></i> <span>复制</span>'
          }, 2000)
        }
      })
      
      // 将按钮插入到 code-header 中
      const header = pre.querySelector('.code-header')
      if (header) {
        header.appendChild(btn)
      } else {
        pre.style.position = 'relative'
        pre.appendChild(btn)
      }
    })
  }, 100)
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

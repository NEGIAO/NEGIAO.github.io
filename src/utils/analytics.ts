/**
 * 网站统计与性能优化工具
 * 使用懒加载策略，避免阻塞首屏渲染
 */

/**
 * 51.la 统计脚本（国内访问优化）
 */
function load51LaStats(): void {
  try {
    // 51.la 国内统计
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = '//js.users.51.la/22001747.js'
    script.async = true
    script.onload = () => console.log('[Analytics] 51.la 国内脚本已加载')
    script.onerror = () => console.warn('[Analytics] 51.la 国内脚本加载失败')
    document.body.appendChild(script)

    // 51.la 国际 SDK
    const sdkScript = document.createElement('script')
    sdkScript.charset = 'UTF-8'
    sdkScript.id = 'LA_COLLECT'
    sdkScript.type = 'text/javascript'
    sdkScript.src = '//sdk.51.la/js-sdk-pro.min.js'
    sdkScript.async = true
    sdkScript.onload = () => {
      try {
        const LA = (window as any).LA
        if (LA && typeof LA.init === 'function') {
          LA.init({
            id: '3OVJu4iCpXi3wE8k',
            ck: '3OVJu4iCpXi3wE8k',
            autoTrack: true,
            hashMode: true,
            screenRecord: true
          })
          console.log('[Analytics] 51.la SDK 已初始化')
        }
      } catch (e) {
        console.warn('[Analytics] 51.la SDK 初始化失败:', e)
      }
    }
    sdkScript.onerror = () => console.warn('[Analytics] 51.la SDK 加载失败')
    document.head.appendChild(sdkScript)
  } catch (err) {
    console.warn('[Analytics] 加载 51.la 统计时出错:', err)
  }
}

/**
 * Google Analytics (可选，国外访问)
 */
function loadGoogleAnalytics(): void {
  try {
    const gaScript = document.createElement('script')
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KYJ7Y4LE2N'
    gaScript.async = true
    gaScript.onerror = () => console.warn('[Analytics] Google Analytics 加载失败')
    document.head.appendChild(gaScript)

    const dataLayer = ((window as any).dataLayer = (window as any).dataLayer || [])
    const gtag = (...args: any[]) => {
      dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', 'G-KYJ7Y4LE2N')
    console.log('[Analytics] Google Analytics 已初始化')
  } catch (err) {
    console.warn('[Analytics] 加载 GA 时出错:', err)
  }
}

/**
 * 延迟加载所有统计脚本
 * 在页面加载完成后 3 秒执行，避免影响首屏性能
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined') return

  // 使用 requestIdleCallback 或 setTimeout 延迟加载
  const delayLoad = (callback: () => void) => {
    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(callback, { timeout: 5000 })
    } else {
      setTimeout(callback, 3000)
    }
  }

  window.addEventListener('load', () => {
    delayLoad(() => {
      // 加载 51.la（国内优先）
      load51LaStats()
      
      // 可选：加载 Google Analytics（取消注释启用）
      // loadGoogleAnalytics()
    })
  })
}

/**
 * 性能监控：记录关键指标
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

  try {
    // 监控 LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as any
      console.log('[Performance] LCP:', Math.round(lastEntry.startTime), 'ms')
    })
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })

    // 监控 FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as any
        console.log('[Performance] FID:', Math.round(fidEntry.processingStart - fidEntry.startTime), 'ms')
      }
    })
    fidObserver.observe({ type: 'first-input', buffered: true })

    // 监控 CLS (Cumulative Layout Shift)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const clsEntry = entry as any
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value
        }
      }
    })
    clsObserver.observe({ type: 'layout-shift', buffered: true })

    // 页面卸载时输出 CLS
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        console.log('[Performance] CLS:', clsValue.toFixed(4))
      }
    })
  } catch (e) {
    console.warn('[Performance] 性能监控初始化失败:', e)
  }
}

export default {
  initAnalytics,
  initPerformanceMonitoring
}

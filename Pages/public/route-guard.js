/**
 * route-guard.js - 前端路由守卫
 * NEGIAO.github.io 路由管理模块
 *
 * 功能：
 * 1. 检测页面加载状态（用于 GitHub Pages 自定义 404）
 * 2. 拦截站内链接，预检测目标页面是否存在
 * 3. 提供路由跳转工具函数
 *
 * 使用方式：在页面中引入 <script src="/Pages/public/route-guard.js" defer></script>
 */

(function () {
  'use strict';

  // ========================
  // 配置项
  // ========================
  const CONFIG = {
    // 404 页面路径
    notFoundPage: '/404.html',
    // 站内域名（用于判断是否为站内链接）
    siteDomains: ['negiao.github.io', 'negiao.cloud-ip.cc', 'localhost', '127.0.0.1'],
    // 已知存在的页面路径（用于快速匹配）
    knownPaths: [
      '/',
      '/index.html',
      '/Pages/notes.html',
      '/Pages/schedule.html',
      '/Pages/phy.html',
      '/Pages/Note/note-viewer/note-viewer.html',
      '/Pages/Note/gallery.html',
      '/Pages/Note/note-template.html',
      '/Pages/Note/markdown_editor.html',
      '/Pages/Note/word-quiz.html',
      '/WebGIS/index.html',
      '/Geoscene_宝藏小城/awesome.html',
      '/Geoscene_宝藏小城/wordcloud.html',
      '/Others/decoder.html'
    ],
    // 路径前缀映射（用于模糊匹配）
    pathPrefixes: [
      '/Pages/',
      '/WebGIS/',
      '/Geoscene_宝藏小城/',
      '/Others/',
      '/images/',
      '/Pages/Note/',
      '/Pages/Note/md/',
      '/Pages/Note/resources/',
      '/Pages/css/',
      '/Pages/public/',
      '/Pages/navbar-widgets/'
    ],
    // 启用链接预检测（可能影响性能）
    enablePrefetch: false,
    // 调试模式
    debug: false
  };

  // ========================
  // 工具函数
  // ========================

  /**
   * 判断是否为站内链接
   * @param {string} url - 链接地址
   * @returns {boolean}
   */
  function isInternalLink(url) {
    try {
      const parsed = new URL(url, window.location.origin);
      return CONFIG.siteDomains.some(domain => parsed.hostname === domain || parsed.hostname.endsWith('.' + domain));
    } catch {
      return false;
    }
  }

  /**
   * 获取相对路径
   * @param {string} url - 完整 URL
   * @returns {string}
   */
  function getRelativePath(url) {
    try {
      const parsed = new URL(url, window.location.origin);
      return parsed.pathname;
    } catch {
      return url;
    }
  }

  /**
   * 判断路径是否可能是有效的静态资源
   * @param {string} path - 相对路径
   * @returns {boolean}
   */
  function isLikelyValidPath(path) {
    // 检查已知路径
    if (CONFIG.knownPaths.includes(path)) {
      return true;
    }

    // 检查路径前缀
    if (CONFIG.pathPrefixes.some(prefix => path.startsWith(prefix))) {
      return true;
    }

    // 检查是否为锚点链接
    if (path.startsWith('#')) {
      return true;
    }

    // 检查是否为查询参数
    if (path.startsWith('?')) {
      return true;
    }

    return false;
  }

  /**
   * 日志输出
   * @param {string} type - 日志类型
   * @param {string} message - 日志消息
   * @param {any} data - 附加数据
   */
  function log(type, message, data) {
    if (!CONFIG.debug) return;

    const prefix = '[Route Guard]';
    switch (type) {
      case 'info':
        console.log(`${prefix} ℹ️ ${message}`, data || '');
        break;
      case 'warn':
        console.warn(`${prefix} ⚠️ ${message}`, data || '');
        break;
      case 'error':
        console.error(`${prefix} ❌ ${message}`, data || '');
        break;
    }
  }

  // ========================
  // 核心功能
  // ========================

  /**
   * 检测页面是否为 404（GitHub Pages 自定义 404 检测）
   * 当 GitHub Pages 返回自定义 404.html 时，页面会正常加载
   * 这个函数用于检测是否在 404 页面中
   */
  function detectNotFoundPage() {
    // 检查 URL 参数中是否有 404 标记
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('notfound') || urlParams.has('404')) {
      log('info', '检测到 404 标记参数');
      return true;
    }

    // 检查页面标题
    if (document.title.includes('404') || document.title.includes('未找到')) {
      log('info', '检测到 404 页面标题');
      return true;
    }

    return false;
  }

  /**
   * 跳转到 404 页面
   * @param {string} requestedPath - 请求的路径
   */
  function redirectTo404(requestedPath) {
    const targetUrl = `${CONFIG.notFoundPage}?path=${encodeURIComponent(requestedPath)}`;
    log('warn', `跳转到 404 页面: ${requestedPath}`);
    window.location.href = targetUrl;
  }

  /**
   * 预检测链接是否有效（异步）
   * @param {string} url - 链接地址
   * @returns {Promise<boolean>}
   */
  async function checkLinkExists(url) {
    try {
      const response = await fetch(url, {
        method: 'HEAD',
        cache: 'no-cache'
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * 拦截站内链接点击事件
   * @param {Event} event - 点击事件
   */
  async function handleLinkClick(event) {
    const link = event.target.closest('a');
    if (!link || !link.href) return;

    // 忽略外部链接
    if (!isInternalLink(link.href)) {
      log('info', '外部链接，跳过检测', link.href);
      return;
    }

    // 忽略锚点链接
    const path = getRelativePath(link.href);
    if (path.startsWith('#') || path === window.location.pathname) {
      return;
    }

    // 忽略已知有效路径
    if (isLikelyValidPath(path)) {
      log('info', '已知有效路径，跳过检测', path);
      return;
    }

    // 启用预检测时，异步检查链接
    if (CONFIG.enablePrefetch) {
      event.preventDefault();
      log('info', '预检测链接', link.href);

      const exists = await checkLinkExists(link.href);
      if (exists) {
        log('info', '链接有效，继续跳转');
        window.location.href = link.href;
      } else {
        log('warn', '链接无效，跳转 404');
        redirectTo404(path);
      }
    }
  }

  /**
   * 初始化路由守卫
   */
  function init() {
    log('info', '路由守卫初始化');

    // 检测当前页面是否为 404
    if (detectNotFoundPage()) {
      log('warn', '当前页面为 404 页面');
      // 可以在这里添加额外的 404 页面处理逻辑
    }

    // 拦截链接点击（可选功能）
    if (CONFIG.enablePrefetch) {
      document.addEventListener('click', handleLinkClick);
      log('info', '链接预检测已启用');
    }

    // 监听 popstate 事件（浏览器前进/后退）
    window.addEventListener('popstate', function () {
      log('info', 'popstate 事件触发', window.location.href);
    });

    log('info', '路由守卫初始化完成');
  }

  // ========================
  // 导出 API
  // ========================

  // 将 API 挂载到全局对象
  window.RouteGuard = {
    /**
     * 跳转到 404 页面
     * @param {string} path - 请求的路径
     */
    goTo404: redirectTo404,

    /**
     * 检查链接是否有效
     * @param {string} url - 链接地址
     * @returns {Promise<boolean>}
     */
    checkLink: checkLinkExists,

    /**
     * 判断是否为站内链接
     * @param {string} url - 链接地址
     * @returns {boolean}
     */
    isInternal: isInternalLink,

    /**
     * 获取配置
     * @returns {Object}
     */
    getConfig: function () {
      return { ...CONFIG };
    },

    /**
     * 更新配置
     * @param {Object} newConfig - 新配置
     */
    updateConfig: function (newConfig) {
      Object.assign(CONFIG, newConfig);
      log('info', '配置已更新', CONFIG);
    },

    /**
     * 启用/禁用调试模式
     * @param {boolean} enabled - 是否启用
     */
    setDebug: function (enabled) {
      CONFIG.debug = enabled;
      log('info', `调试模式${enabled ? '启用' : '禁用'}`);
    }
  };

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

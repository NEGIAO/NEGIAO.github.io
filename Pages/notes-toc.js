
(function () {
  'use strict';
  
  // 缓存常用的DOM查询
  let cachedHeadings = null;
  let cachedTocLinks = null;
  let cachedTocNav = null;
  let lastActiveId = null;
  
  // 设备检测 - 只检测一次
  const isMobile = window.innerWidth <= 768;
  
  // 辅助工具函数
  const util = {
    // 将文本转换为 ID 格式
    slugify: (text) => text.toLowerCase().trim().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/(^-|-$)/g, ''),

    // 防抖函数 - 用于resize等低频事件
    debounce: (func, delay) => {
      let timeoutId = null;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
      };
    },

    // 节流函数 - 用于scroll等高频事件
    throttle: (func, delay) => {
      let lastCall = 0;
      let timeoutId = null;
      return function (...args) {
        const now = Date.now();
        const timeSinceLastCall = now - lastCall;
        
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        
        if (timeSinceLastCall >= delay) {
          lastCall = now;
          func.apply(this, args);
        } else {
          timeoutId = setTimeout(() => {
            lastCall = Date.now();
            func.apply(this, args);
            timeoutId = null;
          }, delay - timeSinceLastCall);
        }
      };
    },

    // 优化 DOM 批量操作
    batchDOM: (callback) => {
      return window.requestAnimationFrame(callback);
    },
    
    // 安全的滚动到指定位置
    safeScrollTo: (position, smooth = true) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const safePosition = Math.max(0, Math.min(position, maxScroll));
      
      if (isMobile || !smooth) {
        document.documentElement.scrollTop = safePosition;
        document.body.scrollTop = safePosition;
      } else {
        window.scrollTo({ top: safePosition, behavior: 'smooth' });
      }
    }
  };

  // 滚动进度条功能
  function initProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: var(--gradient-primary);
      width: 0%;
      z-index: 99999;
      transition: width 0.1s ease-out;
      box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
    `;
    document.body.appendChild(progressBar);

    const updateProgress = util.throttle(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      util.batchDOM(() => {
        progressBar.style.width = `${scrollPercent}%`;
      });
    }, isMobile ? 50 : 10);

    window.addEventListener('scroll', updateProgress, { passive: true });
  }

  // 滚动时高亮当前目录项
  function updateActiveHeading() {
    if (!cachedHeadings || !cachedTocLinks) {
      cachedHeadings = document.querySelectorAll('.note-content h2, .note-content h3, .note-content h4');
      cachedTocLinks = document.querySelectorAll('.note-toc__link');
      cachedTocNav = document.querySelector('.note-toc__nav');
    }

    if (!cachedHeadings.length || !cachedTocLinks.length) return;

    const headerOffset = 150;
    const scrollY = window.scrollY;
    const viewportBottom = window.innerHeight + scrollY;
    const docHeight = document.body.offsetHeight;
    let activeId = null;

    // 优化：使用二分查找或倒序遍历
    for (let i = cachedHeadings.length - 1; i >= 0; i--) {
      const heading = cachedHeadings[i];
      const rect = heading.getBoundingClientRect();
      
      if (rect.top <= headerOffset) {
        activeId = heading.id;
        break;
      }
    }

    // 滚动到底部时激活最后一个
    if (viewportBottom >= docHeight - 50 && cachedHeadings.length > 0) {
      activeId = cachedHeadings[cachedHeadings.length - 1].id;
    }
    
    // 默认激活第一个
    if (!activeId && cachedHeadings.length > 0) {
      activeId = cachedHeadings[0].id;
    }

    // 如果激活项没有变化，跳过更新
    if (activeId === lastActiveId) return;
    lastActiveId = activeId;

    // 更新目录链接状态
    let activeLinkElement = null;
    cachedTocLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      const isActive = href === activeId;
      
      if (isActive && !link.classList.contains('is-active')) {
        link.classList.add('is-active');
        activeLinkElement = link;
      } else if (!isActive && link.classList.contains('is-active')) {
        link.classList.remove('is-active');
      }
    });

    // 桌面端才自动滚动目录容器
    if (!isMobile && activeLinkElement && cachedTocNav) {
      util.batchDOM(() => {
        try {
          const linkRect = activeLinkElement.getBoundingClientRect();
          const navRect = cachedTocNav.getBoundingClientRect();
          const relativeTop = linkRect.top - navRect.top + cachedTocNav.scrollTop;
          const targetScroll = relativeTop - (cachedTocNav.clientHeight / 2) + (linkRect.height / 2);
          
          cachedTocNav.scrollTo({ top: targetScroll, behavior: 'smooth' });
        } catch (e) {
          // 忽略滚动错误
        }
      });
    }
  }

  // 生成目录
  function buildTOC() {
    const content = document.querySelector('.note-content');
    const tocContainer = document.getElementById('note-toc');

    if (!content || !tocContainer) return;

    const headings = content.querySelectorAll('h2, h3, h4');

    if (!headings.length) {
      tocContainer.innerHTML = '<p class="text-muted">本文暂无章节标题。</p>';
      return;
    }

    const fragment = document.createDocumentFragment();
    const list = document.createElement('ul');
    list.className = 'note-toc__list';

    headings.forEach(h => {
      const id = h.id || util.slugify(h.textContent);
      if (!h.id) h.id = id;

      const li = document.createElement('li');
      li.className = `note-toc__item note-toc-level-${h.tagName.toLowerCase()}`;

      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = h.textContent;
      a.className = `note-toc__link toc-level-${h.tagName.charAt(1)}`;
      
      a.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        const target = document.getElementById(id);
        if (!target) return;

        const offset = 72;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        util.safeScrollTo(targetPosition, !isMobile);
        
        // 更新hash
        setTimeout(() => {
          if (history.replaceState) {
            history.replaceState(null, null, `#${id}`);
          }
        }, isMobile ? 100 : 10);
      });

      li.appendChild(a);
      list.appendChild(li);
    });

    const title = document.createElement('h4');
    title.className = 'note-toc__title';
    title.innerHTML = '<span class="toc-accent"></span>文章目录';

    fragment.appendChild(title);
    fragment.appendChild(list);

    util.batchDOM(() => {
      tocContainer.innerHTML = '';
      tocContainer.appendChild(fragment);
      // 初始化缓存
      cachedHeadings = null;
      cachedTocLinks = null;
      cachedTocNav = null;
      updateActiveHeading();
    });
  }

  // 初始化
  function init() {
    const execute = () => {
      util.batchDOM(() => {
        buildTOC();
        initProgressBar();
      });
    };

    if (document.readyState !== 'loading') {
      execute();
    } else {
      document.addEventListener('DOMContentLoaded', execute);
    }
  }

  // 滚动事件监听
  const scrollThrottle = isMobile ? 300 : 100;
  window.addEventListener('scroll', util.throttle(updateActiveHeading, scrollThrottle), { passive: true });

  // 窗口大小改变时重新缓存
  window.addEventListener('resize', util.debounce(() => {
    cachedHeadings = null;
    cachedTocLinks = null;
    cachedTocNav = null;
  }, 300), { passive: true });

  init();

  // 暴露公共 API
  window.buildNoteTOC = buildTOC;
})();

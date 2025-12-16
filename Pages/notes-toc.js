
(function () {
  // 辅助工具函数
  const util = {
    // 将文本转换为 ID 格式
    slugify: (text) => text.toLowerCase().trim().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/(^-|-$)/g, ''),

    // 节流函数，限制执行频率
    throttle: (func, delay) => {
      let lastCall = 0;
      return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
          lastCall = now;
          func.apply(this, args);
        }
      };
    },

    // 优化 DOM 批量操作
    batchDOM: (callback) => {
      return window.requestAnimationFrame(() => {
        callback();
      });
    }
  };

  // 滚动进度条功能
  function initProgressBar() {
    // 创建进度条元素
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

    // 滚动时更新进度
    const updateProgress = util.throttle(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      util.batchDOM(() => {
        progressBar.style.width = `${scrollPercent}%`;
      });
    }, 10);

    window.addEventListener('scroll', updateProgress, { passive: true });
  }

  // 滚动时高亮当前目录项并同步滚动目录
  function updateActiveHeading() {
    const headings = Array.from(document.querySelectorAll('.note-content h2, .note-content h3, .note-content h4'));
    const tocLinks = document.querySelectorAll('.note-toc__link');
    const tocNav = document.querySelector('.note-toc__nav'); // 实际滚动的容器

    if (!headings.length || !tocLinks.length) return;

    // 找到当前视口中最接近顶部的标题
    const headerOffset = 150;
    let activeId = null;

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const rect = heading.getBoundingClientRect();
      
      if (rect.top <= headerOffset) {
        activeId = heading.id;
      } else {
        break;
      }
    }

    // 如果页面滚动到底部，强制激活最后一个
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      activeId = headings[headings.length - 1].id;
    }
    
    // 如果没有找到，默认激活第一个
    if (!activeId && headings.length > 0) {
      activeId = headings[0].id;
    }

    // 更新目录链接状态并同步滚动
    let activeLinkElement = null;
    tocLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === activeId) {
        if (!link.classList.contains('is-active')) {
          link.classList.add('is-active');
          activeLinkElement = link;
        }
      } else {
        link.classList.remove('is-active');
      }
    });

    // 自动滚动目录容器，使当前激活项可见并居中
    if (activeLinkElement && tocNav) {
      const linkRect = activeLinkElement.getBoundingClientRect();
      const navRect = tocNav.getBoundingClientRect();
      
      // 计算链接相对于目录容器的位置
      const relativeTop = linkRect.top - navRect.top + tocNav.scrollTop;
      
      // 计算目标滚动位置（使链接居中）
      const targetScroll = relativeTop - (tocNav.clientHeight / 2) + (linkRect.height / 2);
      
      tocNav.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    }
  }

  // 生成目录
  function buildTOC() {
    const content = document.querySelector('.note-content');
    const tocContainer = document.getElementById('note-toc');

    if (!content || !tocContainer) return;

    // 使用文档片段进行批量 DOM 更新
    const fragment = document.createDocumentFragment();
    const headings = content.querySelectorAll('h2, h3, h4');

    // 如果没有找到标题则提前退出
    if (!headings.length) {
      tocContainer.innerHTML = '<p class="text-muted">本文暂无章节标题。</p>';
      return;
    }

    // 创建列表元素
    const list = document.createElement('ul');
    list.className = 'note-toc__list';

    // 构建所有列表项
    headings.forEach(function (h) {
      // 创建或分配 ID 给标题
      const id = h.id || util.slugify(h.textContent);
      if (!h.id) h.id = id;

      // 创建列表项
      const li = document.createElement('li');
      li.className = 'note-toc__item note-toc-level-' + h.tagName.toLowerCase();

      // 创建带有平滑滚动的锚点
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;

      // 获取标题级别并添加对应的类名
      const level = parseInt(h.tagName.charAt(1));
      a.className = 'note-toc__link toc-level-' + level;
      a.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.getElementById(id);
        if (!target) return;

        const offset = 72; // 考虑固定导航栏的高度
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });

        // 更新 URL 哈希而不滚动
        history.pushState(null, null, '#' + id);
      });

      // 将链接添加到列表项
      li.appendChild(a);
      list.appendChild(li);
    });

    // 构建标题并将所有内容添加到片段
    const title = document.createElement('h4');
    title.className = 'note-toc__title';

    const accent = document.createElement('span');
    accent.className = 'toc-accent';
    title.appendChild(accent);

    const titleText = document.createTextNode('文章目录');
    title.appendChild(titleText);

    fragment.appendChild(title);
    fragment.appendChild(list);

    // 批量更新到 DOM
    util.batchDOM(() => {
      tocContainer.innerHTML = '';
      tocContainer.appendChild(fragment);
    });

    // 设置当前标题高亮
    updateActiveHeading();
  }

  // 使用渐进增强处理初始加载
  function init() {
    // 如果 DOM 已加载，立即生成目录
    if (document.readyState !== 'loading') {
      util.batchDOM(() => {
        buildTOC();
        initProgressBar();
      });
      return;
    }

    // 否则等待 DOM 准备就绪
    document.addEventListener('DOMContentLoaded', function () {
      util.batchDOM(() => {
        buildTOC();
        initProgressBar();
      });
    });
  }

  // 添加滚动事件处理程序以高亮当前标题
  window.addEventListener('scroll', util.throttle(updateActiveHeading, 100), { passive: true });

  // 初始化
  init();

  // 暴露公共 API
  window.buildNoteTOC = buildTOC;
})();

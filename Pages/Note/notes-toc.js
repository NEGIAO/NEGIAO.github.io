(function () {
  'use strict';

  const HEADING_SELECTOR = '.note-content h1, .note-content h2, .note-content h3, .note-content h4';
  const TOC_NAV_SELECTOR = '#note-toc';
  const TOC_ROOT_SELECTOR = '.note-toc';
  const ACTIVE_OFFSET_EXTRA = 16;

  const state = {
    contentEl: null,
    tocRootEl: null,
    tocNavEl: null,
    headings: [],
    headingPositions: [],
    linksById: new Map(),
    itemById: new Map(),
    parentById: new Map(),
    activeId: null,
    activeLink: null,
    activePathItems: [],
    scrollRaf: 0,
    resizeTimer: 0,
    userScrollTimer: 0,
    isUserTocScrolling: false,
    initialized: false,
    progressInitialized: false
  };

  function requestFrame(callback) {
    return window.requestAnimationFrame(callback);
  }

  function slugify(text) {
    return String(text || '').toLowerCase().trim()
      .replace(/[、，。；：！？「」『』【】《》（）—…·]/g, '')
      .replace(/[^a-z0-9一-龥]+/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function getHeaderOffset() {
    const navbar = document.querySelector('.navbar');
    const height = navbar ? navbar.offsetHeight : 72;
    return height + ACTIVE_OFFSET_EXTRA;
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function getSafeScrollTop(target) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    return Math.max(0, Math.min(target, maxScroll));
  }

  function buildHeadingPositions() {
    state.headingPositions = state.headings.map((heading) => ({
      id: heading.id,
      top: heading.getBoundingClientRect().top + window.scrollY
    })).sort((a, b) => a.top - b.top);
  }

  function ensureHeadingIds(headings) {
    const usedIds = new Set(Array.from(document.querySelectorAll('[id]')).map((el) => el.id));

    headings.forEach((heading) => {
      if (heading.id) {
        return;
      }

      const base = slugify(heading.textContent) || 'section';
      let finalId = base;
      let counter = 2;

      while (usedIds.has(finalId)) {
        finalId = `${base}-${counter++}`;
      }

      heading.id = finalId;
      usedIds.add(finalId);
    });
  }

  function setTocState(kind) {
    if (!state.tocRootEl) {
      return;
    }

    state.tocRootEl.classList.toggle('note-toc--empty', kind === 'empty');
    state.tocRootEl.classList.toggle('note-toc--ready', kind === 'ready');
  }

  function setToggleAvailability(hasToc) {
    const toggle = document.getElementById('toc-toggle-btn');
    if (!toggle) {
      return;
    }

    toggle.hidden = !hasToc;
    toggle.disabled = !hasToc;
    toggle.setAttribute('aria-disabled', hasToc ? 'false' : 'true');
  }

  function resetMaps() {
    state.linksById.clear();
    state.itemById.clear();
    state.parentById.clear();
    state.activeId = null;
    state.activeLink = null;
    state.activePathItems = [];
  }

  function renderEmptyState() {
    resetMaps();
    setTocState('empty');
    setToggleAvailability(false);

    state.tocNavEl.innerHTML = '';

    const empty = document.createElement('div');
    empty.className = 'note-toc__empty';

    const icon = document.createElement('span');
    icon.className = 'note-toc__empty-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = '¶';

    const text = document.createElement('span');
    text.textContent = '本文暂无章节标题';

    empty.appendChild(icon);
    empty.appendChild(text);
    state.tocNavEl.appendChild(empty);
  }

  function createHeadingTree(headings) {
    const root = { id: '__root__', level: 0, children: [] };
    const stack = [root];

    headings.forEach((heading) => {
      const node = {
        id: heading.id,
        text: heading.textContent.trim() || '未命名章节',
        level: Number(heading.tagName.substring(1)),
        children: []
      };

      while (stack.length > 1 && stack[stack.length - 1].level >= node.level) {
        stack.pop();
      }

      const parent = stack[stack.length - 1];
      parent.children.push(node);
      if (parent.id !== '__root__') {
        state.parentById.set(node.id, parent.id);
      }
      stack.push(node);
    });

    return root.children;
  }

  function setItemExpanded(item, expanded) {
    const button = item.querySelector(':scope > .note-toc__row > .note-toc__toggle');
    const link = item.querySelector(':scope > .note-toc__row > .note-toc__link');
    item.classList.toggle('is-expanded', expanded);
    item.classList.toggle('is-collapsed', !expanded);
    if (button) {
      button.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      button.setAttribute('aria-label', `${expanded ? '折叠' : '展开'} ${link ? link.textContent : '子章节'}`);
    }
  }

  function toggleItem(event) {
    event.preventDefault();
    event.stopPropagation();
    const item = event.currentTarget.closest('.note-toc__item');
    if (!item) {
      return;
    }
    setItemExpanded(item, !item.classList.contains('is-expanded'));
  }

  function renderTreeNodes(nodes, options = {}) {
    const list = document.createElement('ul');
    list.className = options.isRoot ? 'note-toc__list note-toc__list--root' : 'note-toc__list note-toc__list--children';

    nodes.forEach((node, index) => {
      const hasChildren = node.children.length > 0;
      const li = document.createElement('li');
      const row = document.createElement('div');
      const toggle = hasChildren ? document.createElement('button') : document.createElement('span');
      const link = document.createElement('a');

      li.className = `note-toc__item ${hasChildren ? 'has-children is-collapsed' : 'is-leaf'}`;
      li.dataset.level = String(node.level);

      row.className = 'note-toc__row';

      if (hasChildren) {
        toggle.type = 'button';
        toggle.className = 'note-toc__toggle';
        toggle.setAttribute('aria-label', `展开 ${node.text}`);
        toggle.setAttribute('aria-expanded', 'false');
        toggle.innerHTML = '<i class="fas fa-chevron-right" aria-hidden="true"></i>';
        toggle.addEventListener('click', toggleItem);
      } else {
        toggle.className = 'note-toc__spacer';
        toggle.setAttribute('aria-hidden', 'true');
      }

      link.className = 'note-toc__link';
      link.dataset.level = String(node.level);
      link.dataset.headingId = node.id;
      link.href = `#${node.id}`;
      link.textContent = node.text;
      link.addEventListener('click', handleTocClick);

      row.appendChild(toggle);
      row.appendChild(link);
      li.appendChild(row);

      state.linksById.set(node.id, link);
      state.itemById.set(node.id, li);

      if (hasChildren) {
        li.appendChild(renderTreeNodes(node.children));
      }

      list.appendChild(li);

      if (options.isRoot && index === 0 && hasChildren) {
        requestFrame(() => setItemExpanded(li, true));
      }
    });

    return list;
  }

  function renderToc(headings) {
    const fragment = document.createDocumentFragment();
    const title = document.createElement('h4');
    const accent = document.createElement('span');
    const label = document.createElement('span');
    const count = document.createElement('span');
    const tree = createHeadingTree(headings);

    title.className = 'note-toc__title';
    accent.className = 'toc-accent';
    accent.setAttribute('aria-hidden', 'true');
    label.textContent = '文章目录';
    count.className = 'note-toc__count';
    count.textContent = String(headings.length);

    title.appendChild(accent);
    title.appendChild(label);
    title.appendChild(count);
    fragment.appendChild(title);
    fragment.appendChild(renderTreeNodes(tree, { isRoot: true }));

    state.tocNavEl.innerHTML = '';
    state.tocNavEl.appendChild(fragment);
  }

  function expandActivePath(id) {
    const pathItems = [];
    let parentId = state.parentById.get(id);

    while (parentId) {
      const item = state.itemById.get(parentId);
      if (item) {
        setItemExpanded(item, true);
        item.classList.add('is-active-path');
        pathItems.push(item);
      }
      parentId = state.parentById.get(parentId);
    }

    state.activePathItems = pathItems;
  }

  function clearActivePath() {
    state.activePathItems.forEach((item) => item.classList.remove('is-active-path'));
    state.activePathItems = [];
  }

  function scrollLinkIntoViewIfNeeded(link) {
    if (!state.tocNavEl || !link || state.isUserTocScrolling) {
      return;
    }

    const linkRect = link.getBoundingClientRect();
    const navRect = state.tocNavEl.getBoundingClientRect();
    const isAbove = linkRect.top < navRect.top + 12;
    const isBelow = linkRect.bottom > navRect.bottom - 12;

    if (!isAbove && !isBelow) {
      return;
    }

    link.scrollIntoView({
      block: 'nearest',
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });
  }

  function setActive(id, options = {}) {
    const scrollNav = options.scrollNav !== false;

    if (!id) {
      return;
    }

    const nextLink = state.linksById.get(id);
    if (!nextLink) {
      return;
    }

    if (id === state.activeId) {
      clearActivePath();
      expandActivePath(id);
      if (scrollNav) {
        scrollLinkIntoViewIfNeeded(nextLink);
      }
      return;
    }

    if (state.activeLink) {
      state.activeLink.classList.remove('is-active');
      state.activeLink.removeAttribute('aria-current');
    }

    clearActivePath();
    expandActivePath(id);

    nextLink.classList.add('is-active');
    nextLink.setAttribute('aria-current', 'location');
    state.activeId = id;
    state.activeLink = nextLink;

    if (scrollNav) {
      scrollLinkIntoViewIfNeeded(nextLink);
    }
  }

  function pickActiveHeadingId() {
    if (!state.headingPositions.length) {
      return null;
    }

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const readLine = scrollY + getHeaderOffset();
    const viewportBottom = window.innerHeight + scrollY;
    const docHeight = document.documentElement.scrollHeight;

    if (viewportBottom >= docHeight - 32) {
      return state.headingPositions[state.headingPositions.length - 1].id;
    }

    let activeId = null;
    for (let i = 0; i < state.headingPositions.length; i++) {
      if (state.headingPositions[i].top <= readLine) {
        activeId = state.headingPositions[i].id;
      } else {
        break;
      }
    }

    return activeId;
  }

  function updateActiveFromScroll() {
    state.scrollRaf = 0;
    const activeId = pickActiveHeadingId();
    if (activeId) {
      setActive(activeId);
    }
  }

  function scheduleActiveUpdate() {
    if (state.scrollRaf) {
      return;
    }
    state.scrollRaf = requestFrame(updateActiveFromScroll);
  }

  function handleTocClick(event) {
    event.preventDefault();

    const link = event.currentTarget;
    const id = link.dataset.headingId;
    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({
      top: getSafeScrollTop(targetTop),
      behavior: prefersReducedMotion() ? 'auto' : 'smooth'
    });

    if (!target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
    }
    target.focus({ preventScroll: true });

    if (history.pushState) {
      history.pushState(null, '', `#${id}`);
    }

    setActive(id, { scrollNav: false });
  }

  function onTocNavScroll() {
    state.isUserTocScrolling = true;
    clearTimeout(state.userScrollTimer);
    state.userScrollTimer = setTimeout(() => {
      state.isUserTocScrolling = false;
    }, 900);
  }

  function clear() {
    if (!state.tocNavEl) {
      state.tocNavEl = document.querySelector(TOC_NAV_SELECTOR);
    }
    if (!state.tocRootEl) {
      state.tocRootEl = document.querySelector(TOC_ROOT_SELECTOR);
    }
    if (state.tocNavEl) {
      renderEmptyState();
    }
  }

  function build() {
    state.contentEl = document.querySelector('.note-content');
    state.tocRootEl = document.querySelector(TOC_ROOT_SELECTOR);
    state.tocNavEl = document.querySelector(TOC_NAV_SELECTOR);

    if (!state.contentEl || !state.tocNavEl) {
      return;
    }

    const headings = Array.from(state.contentEl.querySelectorAll(HEADING_SELECTOR));
    state.headings = headings;
    ensureHeadingIds(headings);

    if (!headings.length) {
      renderEmptyState();
      return;
    }

    setTocState('ready');
    setToggleAvailability(true);
    resetMaps();
    renderToc(headings);
    buildHeadingPositions();
    updateActiveFromScroll();
  }

  function refresh() {
    build();
  }

  // 阅读进度条保留为兼容行为，但与目录构建解耦，避免重复创建。
  function initProgressBar() {
    if (state.progressInitialized || document.getElementById('scroll-progress')) {
      state.progressInitialized = true;
      return;
    }

    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:var(--gradient-primary);width:0%;z-index:99999;transition:width .1s ease-out;box-shadow:0 0 10px rgba(0,217,255,.5);';
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      requestFrame(() => {
        progressBar.style.width = `${scrollPercent}%`;
      });
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    state.progressInitialized = true;
  }

  function destroy() {
    window.removeEventListener('scroll', scheduleActiveUpdate);
    window.removeEventListener('resize', handleResize);
    if (state.tocNavEl) {
      state.tocNavEl.removeEventListener('scroll', onTocNavScroll);
    }
    clearTimeout(state.resizeTimer);
    clearTimeout(state.userScrollTimer);
    if (state.scrollRaf) {
      window.cancelAnimationFrame(state.scrollRaf);
    }
    state.initialized = false;
  }

  function handleResize() {
    clearTimeout(state.resizeTimer);
    state.resizeTimer = setTimeout(() => {
      buildHeadingPositions();
      scheduleActiveUpdate();
    }, 180);
  }

  function init() {
    if (state.initialized) {
      return;
    }

    state.initialized = true;
    const skipBuild = !!window._skipNoteViewerTOCBuild;

    const execute = () => {
      state.tocNavEl = document.querySelector(TOC_NAV_SELECTOR);
      if (state.tocNavEl) {
        state.tocNavEl.addEventListener('scroll', onTocNavScroll, { passive: true });
      }
      if (!skipBuild) {
        build();
      }
      initProgressBar();
    };

    if (document.readyState !== 'loading') {
      execute();
    } else {
      document.addEventListener('DOMContentLoaded', execute, { once: true });
    }

    window.addEventListener('scroll', scheduleActiveUpdate, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
  }

  const controller = {
    init,
    build,
    refresh,
    clear,
    destroy,
    setActive
  };

  init();

  window.NoteTOC = controller;
  window.buildNoteTOC = () => controller.refresh();
})();

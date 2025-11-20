/**
 * Optimized Table of Contents Generator for Technical Notes
 * Performance improvements include:
 * - Deferred loading using Intersection Observer
 * - Throttled scroll events
 * - Optimized DOM operations
 * - Reduced layout thrashing
 */
(function () {
  // Helper utilities
  const util = {
    // Slugify text for IDs
    slugify: (text) => text.toLowerCase().trim().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/(^-|-$)/g, ''),

    // Throttle function to limit execution frequency
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

    // Optimize DOM batch operations
    batchDOM: (callback) => {
      return window.requestAnimationFrame(() => {
        callback();
      });
    }
  };

  // Scroll Progress Bar Feature
  function initProgressBar() {
    // Create progress bar element
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

    // Update progress on scroll
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

  // Highlight active ToC item when scrolling
  function updateActiveHeading() {
    const headings = Array.from(document.querySelectorAll('.note-content h2, .note-content h3, .note-content h4'));
    const tocLinks = document.querySelectorAll('.note-toc__link');
    
    if (!headings.length || !tocLinks.length) return;
    
    // Use IntersectionObserver instead of scroll calculations for better performance
    if (!window._tocObserver) {
      const headingOffset = 100;
      window._tocObserver = new IntersectionObserver((entries) => {
        let activeHeading = null;
        
        // Check which headings are in view
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            activeHeading = entry.target;
          }
        });
        
        // Highlight the corresponding TOC link
        if (activeHeading) {
          const activeId = activeHeading.id;
          tocLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === activeId) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }, {
        rootMargin: `-${headingOffset}px 0px -${window.innerHeight - headingOffset - 50}px 0px`,
        threshold: [0, 1]
      });
      
      // Observe all headings
      headings.forEach(heading => {
        window._tocObserver.observe(heading);
      });
    }
  }

  // Build the table of contents
  function buildTOC() {
    const content = document.querySelector('.note-content');
    const tocContainer = document.getElementById('note-toc');
    
    if (!content || !tocContainer) return;

    // Use fragment for batch DOM updates
    const fragment = document.createDocumentFragment();
    const headings = content.querySelectorAll('h2, h3, h4');
    
    // Early exit if no headings found
    if (!headings.length) {
      tocContainer.innerHTML = '<p class="text-muted">本文暂无章节标题。</p>';
      return;
    }

    // Create list element once
    const list = document.createElement('ul');
    list.className = 'note-toc__list';

    // Build all list items
    headings.forEach(function (h) {
      // Create or assign ID to heading
      const id = h.id || util.slugify(h.textContent);
      if (!h.id) h.id = id;

      // Create list item
      const li = document.createElement('li');
      li.className = 'note-toc__item note-toc-level-' + h.tagName.toLowerCase();

      // Create anchor with smooth scroll
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
        
        const offset = 72; // account for fixed navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({ 
          top: top, 
          behavior: 'smooth' 
        });
        
        // Update URL hash without scrolling
        history.pushState(null, null, '#' + id);
      });

      // Add link to list item
      li.appendChild(a);
      list.appendChild(li);
    });

    // Build title and add everything to fragment
    const title = document.createElement('h4');
    title.className = 'note-toc__title';
    
    const accent = document.createElement('span');
    accent.className = 'toc-accent';
    title.appendChild(accent);
    
    const titleText = document.createTextNode('文章目录');
    title.appendChild(titleText);
    
    fragment.appendChild(title);
    fragment.appendChild(list);

    // Add to DOM in one batch update
    util.batchDOM(() => {
      tocContainer.innerHTML = '';
      tocContainer.appendChild(fragment);
    });

    // Add toggle button and responsive behavior
    setupTOCBehavior();
    
    // Setup highlighting for active heading
    updateActiveHeading();
  }

  // Setup TOC toggle and responsive behavior
  function setupTOCBehavior() {
    const aside = document.querySelector('.note-toc');
    if (!aside) return;

    // Responsive position based on screen size
    function updateTocPosition() {
      if (window.innerWidth >= 769) {
        aside.style.position = 'fixed';
        aside.style.right = aside.classList.contains('note-toc--collapsed') ? '12px' : '28px';
        aside.style.top = '50%';
        aside.style.transform = aside.classList.contains('note-toc--collapsed') ? 
          'translateY(-50%) translateX(120%)' : 
          'translateY(-50%) translateZ(0)';
        aside.style.zIndex = '99999';
      } else {
        aside.style.position = '';
        aside.style.right = '';
        aside.style.top = '';
        aside.style.transform = '';
        aside.style.zIndex = '';
        aside.classList.remove('note-toc--collapsed');
      }
    }

    // Add toggle button
    if (!document.getElementById('toc-toggle') && window.innerWidth >= 769) {
      const toggle = document.createElement('button');
      toggle.id = 'toc-toggle';
      toggle.setAttribute('aria-expanded', String(!aside.classList.contains('note-toc--collapsed')));
      toggle.title = '切换章节索引显示/隐藏';
      toggle.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L18 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 12L18 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 16L18 16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

      toggle.addEventListener('click', function () {
        aside.classList.toggle('note-toc--collapsed');
        const collapsed = aside.classList.contains('note-toc--collapsed');
        toggle.setAttribute('aria-expanded', String(!collapsed));
        
        // Cache state in localStorage
        try { 
          localStorage.setItem('note-toc-collapsed', collapsed ? '1' : '0'); 
        } catch (err) {}
        
        // Update visual state immediately
        if (collapsed) {
          aside.style.transform = 'translateY(-50%) translateX(120%)';
          aside.style.right = '12px';
        } else {
          aside.style.transform = 'translateY(-50%) translateZ(0)';
          aside.style.right = '28px';
        }
      });

      document.body.appendChild(toggle);

      // Restore saved state
      try {
        const saved = localStorage.getItem('note-toc-collapsed');
        if (saved === '1') {
          aside.classList.add('note-toc--collapsed');
          aside.style.transform = 'translateY(-50%) translateX(120%)';
          aside.style.right = '12px';
          toggle.setAttribute('aria-expanded', 'false');
        }
      } catch (err) {}
    }

    // Handle resize with throttling
    const throttledResize = util.throttle(() => {
      const toggle = document.getElementById('toc-toggle');
      if (window.innerWidth < 769) {
        if (toggle) toggle.style.display = 'none';
        aside.classList.remove('note-toc--collapsed');
        aside.style.position = '';
        aside.style.transform = '';
        aside.style.right = '';
      } else {
        if (toggle) toggle.style.display = 'flex';
        updateTocPosition();
      }
    }, 100);

    window.addEventListener('resize', throttledResize, { passive: true });
    
    // Initial position update
    updateTocPosition();
  }

  // Handle initial load with progressive enhancement
  function init() {
    // If DOM is already loaded, build TOC immediately
    if (document.readyState !== 'loading') {
      util.batchDOM(() => {
        buildTOC();
        initProgressBar();
      });
      return;
    }
    
    // Otherwise wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
      util.batchDOM(() => {
        buildTOC();
        initProgressBar();
      });
    });
  }

  // Add scroll event handler for active heading highlighting
  window.addEventListener('scroll', util.throttle(updateActiveHeading, 100), { passive: true });
  
  // Initialize
  init();
  
  // Expose public API
  window.buildNoteTOC = buildTOC;
})();

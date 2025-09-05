// notes-toc.js
// Build a right-hand table of contents from headings inside .note-content
(function () {
  function slugify(text) {
    return text.toLowerCase().trim().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-').replace(/(^-|-$)/g, '');
  }

  function buildTOC() {
    var content = document.querySelector('.note-content');
    var tocContainer = document.getElementById('note-toc');
    if (!content || !tocContainer) return;

    // collect headings h2..h4 (customize if you want deeper levels)
    var headings = content.querySelectorAll('h2, h3, h4');
    if (!headings.length) {
      tocContainer.innerHTML = '<p class="text-muted">本文暂无章节标题。</p>';
      return;
    }

    var list = document.createElement('ul');
    list.className = 'note-toc__list';

    headings.forEach(function (h) {
      var id = h.id || slugify(h.textContent);
      if (!h.id) h.id = id;

      var li = document.createElement('li');
      li.className = 'note-toc__item note-toc-level-' + h.tagName.toLowerCase();

      var a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;
      a.className = 'note-toc__link';

      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(id);
        if (!target) return;
        var offset = 72; // account for fixed navbar height
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });

      li.appendChild(a);
      list.appendChild(li);
    });

  // build header with small accent
  tocContainer.innerHTML = '';
  var title = document.createElement('h4');
  title.className = 'note-toc__title';
  var accent = document.createElement('span');
  accent.className = 'toc-accent';
  title.appendChild(accent);
  var titleText = document.createTextNode('文章目录');
  title.appendChild(titleText);
  tocContainer.appendChild(title);
  tocContainer.appendChild(list);

    // Runtime safeguard: ensure the aside containing #note-toc is fixed on desktop
    // and static on small screens. Also, ensure toggle injection for collapsing.
    try {
      var aside = tocContainer.closest('.note-toc');
      if (aside) {
        // responsive inline style fallback
        if (window.innerWidth >= 769) {
          aside.style.position = 'fixed';
          aside.style.right = aside.classList.contains('note-toc--collapsed') ? '12px' : '28px';
          aside.style.top = '50%';
          aside.style.transform = aside.classList.contains('note-toc--collapsed') ? 'translateY(-50%) translateX(120%)' : 'translateY(-50%) translateZ(0)';
          aside.style.zIndex = '99999';
        } else {
          aside.style.position = '';
          aside.style.right = '';
          aside.style.top = '';
          aside.style.transform = '';
          aside.style.zIndex = '';
          aside.classList.remove('note-toc--collapsed');
        }

        // inject toggle button if not present (desktop only)
        if (!document.getElementById('toc-toggle') && window.innerWidth >= 769) {
          var toggle = document.createElement('button');
          toggle.id = 'toc-toggle';
          toggle.setAttribute('aria-expanded', String(!aside.classList.contains('note-toc--collapsed')));
          toggle.title = '切换章节索引显示/隐藏';
          toggle.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8L18 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 12L18 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 16L18 16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

          toggle.addEventListener('click', function (e) {
            e.preventDefault();
            aside.classList.toggle('note-toc--collapsed');
            console.log('TOC toggle clicked, collapsed=', aside.classList.contains('note-toc--collapsed'));
            var collapsed = aside.classList.contains('note-toc--collapsed');
            toggle.setAttribute('aria-expanded', String(!collapsed));
            try { localStorage.setItem('note-toc-collapsed', collapsed ? '1' : '0'); } catch (err) {}
            // update inline styles for instant visual feedback
            if (collapsed) {
              aside.style.transform = 'translateY(-50%) translateX(120%)';
              aside.style.right = '12px';
            } else {
              aside.style.transform = 'translateY(-50%) translateZ(0)';
              aside.style.right = '28px';
            }
          });

          document.body.appendChild(toggle);

          // restore saved state
          try {
            var saved = localStorage.getItem('note-toc-collapsed');
            if (saved === '1') {
              aside.classList.add('note-toc--collapsed');
              aside.style.transform = 'translateY(-50%) translateX(120%)';
              aside.style.right = '12px';
              toggle.setAttribute('aria-expanded', 'false');
            }
          } catch (err) {}
        }
      }
    } catch (e) {
      // no-op
    }

    // ensure toggle visibility updates when resizing
    window.addEventListener('resize', function () {
      var t = document.getElementById('toc-toggle');
      var a = document.querySelector('.note-toc');
      if (!a) return;
      if (window.innerWidth < 769) {
        if (t) t.style.display = 'none';
        a.classList.remove('note-toc--collapsed');
        a.style.position = '';
        a.style.transform = '';
        a.style.right = '';
      } else {
        if (t) t.style.display = 'flex';
      }
    }, { passive: true });
  }
  // expose buildTOC so pages that render markdown dynamically can call it
  window.buildNoteTOC = buildTOC;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      // call once on load in case headings are already present
      buildTOC();
    });
  } else {
    buildTOC();
  }

})();

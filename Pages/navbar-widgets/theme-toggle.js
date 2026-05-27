/**
 * 主题切换 Widget
 * 浅色/暗色主题切换按钮，自动挂载到 .navbar__container 和 .sidebar__footer
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'site-theme';
    var THEME_COLORS = {
        dark: '#0D1117',
        light: '#f5f7fb'
    };

    function getPreferredTheme() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
        return 'dark';
    }

    function updateToggleUI(theme) {
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            var icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-moon', 'fa-sun');
                icon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
            }
            var nextLabel = theme === 'dark' ? '切换到浅色主题' : '切换到深色主题';
            btn.setAttribute('aria-label', nextLabel);
            btn.setAttribute('title', nextLabel);
        });
    }

    function applyTheme(theme) {
        var normalized = theme === 'light' ? 'light' : 'dark';
        document.body.dataset.theme = normalized;
        localStorage.setItem(STORAGE_KEY, normalized);

        var metaTheme = document.querySelector('meta[name="theme-color"]');
        if (metaTheme && THEME_COLORS[normalized]) {
            metaTheme.setAttribute('content', THEME_COLORS[normalized]);
        }

        updateToggleUI(normalized);
    }

    function createToggleButton() {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'theme-toggle';
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        return btn;
    }

    function mountToggle(container) {
        if (!container) return;

        var btn = container.querySelector('.theme-toggle');
        if (!btn) {
            btn = createToggleButton();
            container.appendChild(btn);
        }

        if (btn.dataset.themeBound === 'true') return;

        btn.dataset.themeBound = 'true';
        btn.addEventListener('click', function () {
            var current = document.body.dataset.theme || 'dark';
            var next = current === 'light' ? 'dark' : 'light';
            applyTheme(next);
        });
    }

    window.initThemeToggle = function () {
        mountToggle(document.querySelector('.navbar__container'));
        mountToggle(document.querySelector('.sidebar__footer'));
        applyTheme(getPreferredTheme());
    };
})();

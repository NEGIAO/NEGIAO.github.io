/**
 * 主题切换 Widget — 零样式注入
 * 创建按钮 DOM，样式完全由 CSS 控制
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'site-theme';
    var THEME_COLORS = { dark: '#0D1117', light: '#EFF1F5' };

    function getPreferredTheme() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') return stored;
        // 默认暗色：只有用户显式切换过才记住，不跟随系统偏好
        return 'dark';
    }

    function updateToggleUI(theme) {
        document.querySelectorAll('.theme-toggle').forEach(function (btn) {
            var icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-moon', 'fa-sun');
                icon.classList.add(theme === 'dark' ? 'fa-sun' : 'fa-moon');
            }
            var label = theme === 'dark' ? '切换到浅色主题' : '切换到深色主题';
            btn.setAttribute('aria-label', label);
            btn.setAttribute('title', label);
        });
    }

    function applyTheme(theme) {
        var t = theme === 'light' ? 'light' : 'dark';
        document.body.dataset.theme = t;
        localStorage.setItem(STORAGE_KEY, t);
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta && THEME_COLORS[t]) meta.setAttribute('content', THEME_COLORS[t]);
        updateToggleUI(t);
    }

    function createButton() {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'theme-toggle navbar-widget-btn';
        btn.setAttribute('aria-label', '切换主题');
        btn.setAttribute('title', '切换主题');
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        return btn;
    }

    function bindButton(btn) {
        if (btn.dataset.nwThemeBound === 'true') return;
        btn.dataset.nwThemeBound = 'true';
        btn.addEventListener('click', function () {
            var cur = document.body.dataset.theme || 'dark';
            applyTheme(cur === 'light' ? 'dark' : 'light');
        });
    }

    function mount(container) {
        if (!container) return;
        var existing = container.querySelector('.theme-toggle');
        var btn = existing || createButton();
        if (!existing) {
            container.appendChild(btn);
            // 第一个注入的按钮添加 margin-left: auto 把整个按钮组推到右侧
            btn.style.marginLeft = 'auto';
        }
        bindButton(btn);
    }

    window.initThemeToggle = function () {
        // 标准 navbar（index.html 等）
        var navbar = document.querySelector('.navbar__container');
        if (navbar) mount(navbar);

        // 侧边栏 footer（index.html 桌面端）
        var sidebarFooter = document.querySelector('.sidebar__footer');
        if (sidebarFooter) mount(sidebarFooter);

        // notes.html 的 notes-navbar
        var notesNavbar = document.querySelector('.notes-navbar');
        if (notesNavbar) mount(notesNavbar);

        // note-viewer 的 navbar
        var viewerNavbar = document.querySelector('.note-viewer-navbar');
        if (viewerNavbar) mount(viewerNavbar);

        // 应用初始主题
        applyTheme(getPreferredTheme());
    };
})();

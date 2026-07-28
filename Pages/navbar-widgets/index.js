/**
 * Navbar Widgets — 统一入口
 * 只负责加载子脚本，不注入任何样式
 * 所有 CSS 通过 layout.css 集中管理
 */
(function () {
    'use strict';

    var BASE = (function () {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var src = scripts[i].getAttribute('src') || '';
            var idx = src.indexOf('navbar-widgets/index.js');
            if (idx !== -1) return src.substring(0, idx);
        }
        return '';
    })();

    var VERSION = '20260728b';

    var WIDGETS = [
        'theme-toggle.js',
        'i18n-toggle.js',
        'share-btn.js'
    ];

    function loadScript(src) {
        return new Promise(function (resolve) {
            var script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = resolve;
            document.head.appendChild(script);
        });
    }

    function loadAll() {
        var promises = WIDGETS.map(function (name) {
            return loadScript(BASE + 'navbar-widgets/' + name + '?v=' + VERSION);
        });
        Promise.all(promises).then(function () {
            if (typeof window.initThemeToggle === 'function') window.initThemeToggle();
            if (typeof window.initLangToggle === 'function') window.initLangToggle();
            if (typeof window.initShareButton === 'function') window.initShareButton();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAll);
    } else {
        loadAll();
    }
})();

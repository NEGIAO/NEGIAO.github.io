/**
 * Navbar Widgets 统一入口
 * 主题切换 + 语言切换 + 分享按钮
 * 页面只需加载此文件，所有 widget 自动初始化
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

    // 子脚本缓存版本号：修改任一 widget 后更新此值
    var VERSION = '20260727';

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
            // i18n-toggle.js 自执行，无需手动调用
            if (typeof window.initShareButton === 'function') window.initShareButton();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAll);
    } else {
        loadAll();
    }
})();

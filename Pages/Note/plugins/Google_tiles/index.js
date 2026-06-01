/**
 * Google Tiles 地图预览插件
 * 为 Google_tiles.md 文章提供实时 XYZ 瓦片预览功能
 */
(function () {
    'use strict';

    var OL_CSS = '/WebGIS/ol.css';
    var OL_JS = '/WebGIS/ol.js';
    var DEFAULT_URL = 'https://mt0.google.com/vt/lyrs=m&hl=zh-CN&x={x}&y={y}&z={z}';

    var PRESETS = [
        { label: '标准电子地图', url: 'https://mt0.google.com/vt/lyrs=m&hl=zh-CN&x={x}&y={y}&z={z}' },
        { label: '纯卫星影像', url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}' },
        { label: '混合影像', url: 'https://mt0.google.com/vt/lyrs=y&hl=zh-CN&x={x}&y={y}&z={z}' },
        { label: '纯地形图', url: 'https://mt0.google.com/vt/lyrs=t&x={x}&y={y}&z={z}' },
        { label: '仅标注(透明)', url: 'https://mt0.google.com/vt/lyrs=h&hl=zh-CN&x={x}&y={y}&z={z}' },
        { label: '纯路网(中文)', url: 'https://mt0.google.com/vt/lyrs=m&hl=zh-CN&x={x}&y={y}&z={z}&apistyle=s.t:0|p.v:off,s.t:3|p.v:on' },
        { label: '纯路网骨架', url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&apistyle=s.t:0|p.v:off,s.t:3|p.v:on,s.t:3|s.e:l|p.v:off' },
        { label: '纯水体', url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&apistyle=s.t:0|p.v:off,s.t:6|p.v:on' },
        { label: '山体阴影(Protobuf)', url: 'https://www.google.com/maps/vt/pb=!1m4!1m3!1i{z}!2i{x}!3i{y}!2m1!1e5' },
    ];

    // 插件内部状态（供 destroy 清理）
    var resizeObserver = null;
    var map = null;

    /* ---------- 插件入口 ---------- */

    window.registerNotePlugin('Google_tiles', {
        meta: { name: 'Google Tiles 预览', version: '1.0.0' },

        init: async function (args) {
            var container = args.container;
            var utils = args.utils;
            var registerCleanup = args.registerCleanup;

            console.log('[Google_tiles] init 开始');

            if (!container) {
                console.error('[Google_tiles] container 为空');
                return;
            }

            // 先构建 UI 面板（即使 OL 加载失败也能看到界面）
            buildPreview(container);

            // 注册清理回调（无论 OL 是否成功都需要清理面板 DOM）
            registerCleanup(function () {
                var panel = container.querySelector('.gt-preview-panel');
                if (panel) panel.remove();
                if (map) { map.setTarget(null); map = null; }
                if (resizeObserver) { resizeObserver.disconnect(); resizeObserver = null; }
            });

            // 加载 OpenLayers（styles.css 已由 loader 自动加载）
            try {
                await utils.loadCSS(OL_CSS);
                await utils.loadScript(OL_JS);
                console.log('[Google_tiles] OL 已加载, ol =', typeof ol);
            } catch (err) {
                console.warn('[Google_tiles] OL 加载失败:', err);
            }

            if (typeof ol === 'undefined') {
                console.warn('[Google_tiles] OL 不可用，显示降级提示');
                showOLFallback(container);
                return;
            }

            initMap(container);
        },

        destroy: function () {
            var panel = document.querySelector('.gt-preview-panel');
            if (panel) panel.remove();
            if (map) { map.setTarget(null); map = null; }
            if (resizeObserver) { resizeObserver.disconnect(); resizeObserver = null; }
        }
    });

    /* ---------- OL 降级提示 ---------- */

    function showOLFallback(container) {
        var mapContainer = container.querySelector('.gt-map-container');
        if (!mapContainer) return;
        mapContainer.innerHTML =
            '<div class="gt-ol-fallback">' +
                '<i class="fas fa-triangle-exclamation"></i>' +
                '<p>OpenLayers 加载失败</p>' +
                '<span>地图预览功能暂不可用，请检查网络连接或刷新重试。</span>' +
            '</div>';
    }

    /* ---------- UI 构建 ---------- */

    function buildPreview(container) {
        var firstH2 = container.querySelector('h2');
        var panel = document.createElement('div');
        panel.className = 'gt-preview-panel';

        var presetHTML = '';
        for (var i = 0; i < PRESETS.length; i++) {
            presetHTML += '<button class="gt-preset-btn' + (i === 0 ? ' active' : '') +
                '" data-url="' + encodeURIComponent(PRESETS[i].url) + '">' +
                PRESETS[i].label + '</button>';
        }

        panel.innerHTML =
            '<div class="gt-preview-header">' +
                '<i class="fas fa-map-location-dot"></i>' +
                '<span>实时瓦片预览</span>' +
            '</div>' +
            '<div class="gt-preview-controls">' +
                '<div class="gt-url-row">' +
                    '<input type="text" class="gt-url-input" value="' + DEFAULT_URL + '" placeholder="输入 XYZ 瓦片 URL，{x} {y} {z} 为占位符">' +
                    '<button class="gt-apply-btn">应用</button>' +
                '</div>' +
                '<div class="gt-presets">' + presetHTML + '</div>' +
            '</div>' +
            '<div class="gt-map-container">' +
                '<div class="gt-zoom-info">Zoom: <span class="gt-zoom-val">4</span></div>' +
            '</div>';

        if (firstH2) {
            container.insertBefore(panel, firstH2);
        } else {
            container.prepend(panel);
        }
    }

    /* ---------- 地图初始化 ---------- */

    function initMap(container) {
        var mapContainer = container.querySelector('.gt-map-container');
        var urlInput = container.querySelector('.gt-url-input');
        var applyBtn = container.querySelector('.gt-apply-btn');
        var zoomVal = container.querySelector('.gt-zoom-val');
        var presetBtns = container.querySelectorAll('.gt-preset-btn');

        try {
            var tileSource = new ol.source.XYZ({
                url: DEFAULT_URL,
                crossOrigin: 'anonymous',
                maxZoom: 20,
            });

            map = new ol.Map({
                target: mapContainer,
                layers: [new ol.layer.Tile({ source: tileSource })],
                view: new ol.View({
                    center: ol.proj.fromLonLat([114.3, 30.5]),
                    zoom: 4,
                }),
                controls: ol.control.defaults.defaults({
                    attributionOptions: { collapsible: true }
                }),
            });

            // Zoom 显示
            map.getView().on('change:resolution', function () {
                zoomVal.textContent = Math.round(map.getView().getZoom());
            });

            // 应用 URL
            function applyUrl(url) {
                urlInput.value = url;
                tileSource.setUrl(url);
                for (var j = 0; j < presetBtns.length; j++) {
                    presetBtns[j].classList.toggle('active',
                        decodeURIComponent(presetBtns[j].dataset.url) === url);
                }
            }

            applyBtn.addEventListener('click', function () { applyUrl(urlInput.value.trim()); });
            urlInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') applyUrl(urlInput.value.trim());
            });

            for (var i = 0; i < presetBtns.length; i++) {
                (function (btn) {
                    btn.addEventListener('click', function () {
                        applyUrl(decodeURIComponent(btn.dataset.url));
                    });
                })(presetBtns[i]);
            }

            // 延迟刷新 + ResizeObserver
            setTimeout(function () { map.updateSize(); }, 200);
            resizeObserver = new ResizeObserver(function () { map.updateSize(); });
            resizeObserver.observe(mapContainer);

            console.log('[Google_tiles] OL 地图初始化完成');
        } catch (olErr) {
            console.error('[Google_tiles] OL 地图初始化失败:', olErr);
            showOLFallback(container);
        }
    }
})();

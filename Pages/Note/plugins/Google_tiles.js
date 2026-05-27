/**
 * Google Tiles 地图预览插件
 * 为 Google_tiles.md 文章提供实时 XYZ 瓦片预览功能
 */

(function () {
    const OL_CSS = '/WebGIS/ol.css';
    const OL_JS = '/WebGIS/ol.js';
    const DEFAULT_URL = 'https://mt0.google.com/vt/lyrs=m&hl=zh-CN&x={x}&y={y}&z={z}';

    const PRESETS = [
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

    /* ---------- 资源加载 ---------- */

    function loadCSS(href) {
        return new Promise((resolve) => {
            if (document.querySelector(`link[href="${href}"]`)) { resolve(); return; }
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = resolve;
            link.onerror = resolve;
            document.head.appendChild(link);
        });
    }

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
            const script = document.createElement('script');
            script.src = src;
            script.onload = () => {
                console.log(`[Google_tiles] 脚本加载成功: ${src}`);
                resolve();
            };
            script.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.head.appendChild(script);
        });
    }

    /* ---------- 插件入口 ---------- */

    window.registerNotePlugin('Google_tiles', {
        async init({ container }) {
            console.log('[Google_tiles] 插件 init 开始, container =', container);

            if (!container) {
                console.error('[Google_tiles] container 为空');
                return;
            }

            // 注入插件样式
            await loadCSS('./plugins/Google_tiles.css');
            console.log('[Google_tiles] 插件 CSS 已加载');

            // 加载 OpenLayers
            await loadCSS(OL_CSS);
            console.log('[Google_tiles] OL CSS 已加载');
            await loadScript(OL_JS);
            console.log('[Google_tiles] OL JS 已加载, ol =', typeof ol);

            if (typeof ol === 'undefined') {
                console.warn('[Google_tiles] OpenLayers 加载失败');
                return;
            }

            buildPreview(container);
            console.log('[Google_tiles] 预览面板已构建');
        }
    });

    /* ---------- UI 构建 ---------- */

    function buildPreview(container) {
        // 在第一个 h2 之前插入面板（即标题之后、正文之前）
        const firstH2 = container.querySelector('h2');
        const panel = document.createElement('div');
        panel.className = 'gt-preview-panel';

        panel.innerHTML = `
            <div class="gt-preview-header">
                <i class="fas fa-map-location-dot"></i>
                <span>实时瓦片预览</span>
            </div>
            <div class="gt-preview-controls">
                <div class="gt-url-row">
                    <input type="text" class="gt-url-input" value="${DEFAULT_URL}" placeholder="输入 XYZ 瓦片 URL，{x} {y} {z} 为占位符">
                    <button class="gt-apply-btn">应用</button>
                </div>
                <div class="gt-presets">
                    ${PRESETS.map((p, i) => `<button class="gt-preset-btn${i === 0 ? ' active' : ''}" data-url="${encodeURIComponent(p.url)}">${p.label}</button>`).join('')}
                </div>
            </div>
            <div class="gt-map-container">
                <div class="gt-zoom-info">Zoom: <span class="gt-zoom-val">4</span></div>
            </div>
        `;

        if (firstH2) {
            container.insertBefore(panel, firstH2);
        } else {
            container.prepend(panel);
        }

        // 初始化地图
        const mapContainer = panel.querySelector('.gt-map-container');
        const urlInput = panel.querySelector('.gt-url-input');
        const applyBtn = panel.querySelector('.gt-apply-btn');
        const zoomVal = panel.querySelector('.gt-zoom-val');
        const presetBtns = panel.querySelectorAll('.gt-preset-btn');

        console.log('[Google_tiles] 初始化 OL 地图...');

        let tileSource, map;
        try {
            tileSource = new ol.source.XYZ({
                url: DEFAULT_URL,
                crossOrigin: 'anonymous',
                maxZoom: 20,
            });

            map = new ol.Map({
                target: mapContainer,
                layers: [
                    new ol.layer.Tile({ source: tileSource })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([114.3, 30.5]), // 默认武汉
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

            // 高亮对应 preset
            presetBtns.forEach(btn => {
                btn.classList.toggle('active', decodeURIComponent(btn.dataset.url) === url);
            });
        }

        applyBtn.addEventListener('click', () => applyUrl(urlInput.value.trim()));
        urlInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') applyUrl(urlInput.value.trim());
        });

        presetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                applyUrl(decodeURIComponent(btn.dataset.url));
            });
        });

        // 延迟刷新尺寸（面板插入后 map 容器尺寸可能未确定）
        setTimeout(() => map.updateSize(), 200);
        new ResizeObserver(() => map.updateSize()).observe(mapContainer);

        console.log('[Google_tiles] OL 地图初始化完成');
        } catch (olErr) {
            console.error('[Google_tiles] OL 地图初始化失败:', olErr);
        }
    }
})();

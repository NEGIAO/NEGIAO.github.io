/**
 * Amap Tiles 地图全参数实时预览插件
 * 为 Amap_tiles.md 文章提供 host / style / ltype / lang / scl / size / scale 全参数交互组合与实时 XYZ 瓦片预览
 */
(function () {
    'use strict';

    var OL_CSS = 'https://cdn.jsdelivr.net/npm/ol@latest/ol.css';
    var OL_JS = 'https://cdn.jsdelivr.net/npm/ol@latest/dist/ol.js';
    var SAT_UNDERLAY_URL = 'https://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}';

    var DEFAULT_STATE = {
        host: 'webrd01',
        style: '8',
        lang: 'zh_cn',
        scl: '',
        size: '1',
        scale: '1',
        ltypeMode: 'omit', // 'omit' | 'mask' | 'zero'
        ltypeBits: 15      // 1+2+4+8
    };

    var PRESETS = [
        {
            label: '新版标准电子图 (webrd s=8)',
            underlay: false,
            state: { host: 'webrd01', style: '8', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '旧版经典电子图 (webrd s=7)',
            underlay: false,
            state: { host: 'webrd01', style: '7', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '纯卫星影像 (webst s=6)',
            underlay: false,
            state: { host: 'webst02', style: '6', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '卫星 + 透明路网注记叠加',
            underlay: true,
            state: { host: 'webst02', style: '8', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '无路名新版图 (webst s=7)',
            underlay: false,
            state: { host: 'webst02', style: '7', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '无标注底图 (s=7 ltype=3)',
            underlay: false,
            state: { host: 'webst02', style: '7', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'mask', ltypeBits: 3 }
        },
        {
            label: '无标注+建筑 (s=7 ltype=11)',
            underlay: false,
            zoom: 17,
            state: { host: 'webst02', style: '7', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'mask', ltypeBits: 11 }
        },
        {
            label: '去图标纯文字 (webst s=9)',
            underlay: false,
            state: { host: 'webst02', style: '9', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '极简去图标 (webst s=10)',
            underlay: false,
            state: { host: 'webst02', style: '10', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '透明纯路网 (s=8 ltype=2)',
            underlay: true,
            state: { host: 'webst02', style: '8', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'mask', ltypeBits: 2 }
        },
        {
            label: '透明纯注记 (s=8 ltype=4)',
            underlay: true,
            state: { host: 'webst02', style: '8', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'mask', ltypeBits: 4 }
        },
        {
            label: '纯建筑轮廓 (ltype=8, z≥17)',
            underlay: false,
            zoom: 17,
            state: { host: 'webrd01', style: '8', lang: 'zh_cn', scl: '', size: '1', scale: '1', ltypeMode: 'mask', ltypeBits: 8 }
        },
        {
            label: '512高清无标注 (scl=2)',
            underlay: false,
            state: { host: 'webrd01', style: '8', lang: 'zh_cn', scl: '2', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '512透明路网 (webst s=8 scl=2)',
            underlay: true,
            state: { host: 'webst02', style: '8', lang: 'zh_cn', scl: '2', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '纯英文地图 (lang=en)',
            underlay: false,
            state: { host: 'webrd01', style: '8', lang: 'en', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        },
        {
            label: '中英双语 (lang=zh_en)',
            underlay: false,
            state: { host: 'webrd01', style: '8', lang: 'zh_en', scl: '', size: '1', scale: '1', ltypeMode: 'omit', ltypeBits: 15 }
        }
    ];

    var LOCATIONS = [
        { label: '上海陆家嘴 (z15)', center: [121.4998, 31.2397], zoom: 15 },
        { label: '东方明珠建筑 (z17)', center: [121.4998, 31.2397], zoom: 17 },
        { label: '北京天安门 (z14)', center: [116.3975, 39.9087], zoom: 14 },
        { label: '全国概览 (z4)', center: [108.9, 34.2], zoom: 4 }
    ];

    var resizeObserver = null;
    var map = null;

    /* ---------- URL 构建与解析 ---------- */

    function buildUrl(st) {
        var params = [];
        if (st.lang) params.push('lang=' + st.lang);
        if (st.size) params.push('size=' + st.size);
        if (st.scale) params.push('scale=' + st.scale);
        params.push('style=' + st.style);
        if (st.ltypeMode === 'zero') {
            params.push('ltype=0');
        } else if (st.ltypeMode === 'mask') {
            params.push('ltype=' + st.ltypeBits);
        }
        if (st.scl) params.push('scl=' + st.scl);
        params.push('x={x}', 'y={y}', 'z={z}');
        return 'https://' + st.host + '.is.autonavi.com/appmaptile?' + params.join('&');
    }

    function parseUrlToState(rawUrl) {
        try {
            var m = rawUrl.match(/^https?:\/\/([a-z0-9{}\-]+)\.is\.autonavi\.com\/appmaptile\?(.+)$/i);
            if (!m) return null;
            var host = m[1];
            var qs = m[2].split('&');
            var mapParams = {};
            for (var i = 0; i < qs.length; i++) {
                var idx = qs[i].indexOf('=');
                if (idx > 0) {
                    mapParams[qs[i].slice(0, idx)] = qs[i].slice(idx + 1);
                }
            }
            var st = {
                host: host,
                style: mapParams.style || '8',
                lang: mapParams.lang !== undefined ? mapParams.lang : '',
                scl: mapParams.scl !== undefined ? mapParams.scl : '',
                size: mapParams.size !== undefined ? mapParams.size : '',
                scale: mapParams.scale !== undefined ? mapParams.scale : '',
                ltypeMode: 'omit',
                ltypeBits: 15
            };
            if (mapParams.ltype !== undefined && mapParams.ltype !== '') {
                var lt = parseInt(mapParams.ltype, 10);
                if (!isNaN(lt)) {
                    if (lt === 0) {
                        st.ltypeMode = 'zero';
                        st.ltypeBits = 7;
                    } else if (lt >= 1 && lt <= 15) {
                        st.ltypeMode = 'mask';
                        st.ltypeBits = lt;
                    } else {
                        st.ltypeMode = 'mask';
                        st.ltypeBits = 7;
                    }
                }
            }
            return st;
        } catch (e) {
            return null;
        }
    }

    function getHintMessage(st, zoom) {
        var isWebrd = st.host.indexOf('webrd') === 0;
        var hints = [];

        if (isWebrd && (st.style === '6' || st.style === '9' || st.style === '10')) {
            hints.push({ type: 'warn', text: 'webrd 域名不支持 style=' + st.style + '，服务端会返回 404（请切换至 webst 或 wprd）。' });
        } else if (isWebrd && st.style === '7') {
            hints.push({ type: 'info', text: 'webrd + style=7 为早期经典风格底图，会忽略 ltype、lang 与 scl 参数。' });
        }

        if (st.ltypeMode !== 'omit' && st.style !== '6' && !(isWebrd && st.style === '7')) {
            if (st.lang !== 'zh_cn') {
                hints.push({ type: 'warn', text: '当前 lang ' + (st.lang ? '="' + st.lang + '"' : '已省略') + '，ltype 仅在 lang=zh_cn 下生效，当前组合会忽略 ltype。' });
            }
            if (st.scl === '2') {
                hints.push({ type: 'info', text: 'scl=2 时会返回 512×512 并强制剥离注记层（Bit 2 无效，ltype=4 返回空白）。' });
            }
            if (st.ltypeMode === 'mask' && (st.ltypeBits & 8) && (st.ltypeBits & 7) === 0 && zoom < 17) {
                hints.push({ type: 'info', text: 'Bit 3 (+8 建筑轮廓) 仅在 z≥17 渲染，当前 Zoom=' + zoom + ' 将显示为空白；可点击下方「东方明珠建筑 (z17)」查看。' });
            }
            if (!isWebrd && st.style === '8' && st.ltypeMode === 'mask' && (st.ltypeBits === 1 || st.ltypeBits === 8 || st.ltypeBits === 9)) {
                hints.push({ type: 'warn', text: 'webst + style=8 透明叠加模式屏蔽地貌层(+1)与建筑层(+8)，当前仅选该位将返回全透明空白图。' });
            }
        } else if (st.scl === '2' && st.style !== '6' && !(isWebrd && st.style === '7')) {
            hints.push({ type: 'info', text: 'scl=2 返回 512×512 高清瓦片（tilePixelRatio=2），且服务端自动移除全部文字与 POI 标注。' });
        } else if (!isWebrd && st.style === '8') {
            hints.push({ type: 'info', text: 'webst + style=8 为透明背景叠加层（忽略 lang），建议勾选「叠加卫星底图」查看实际套合效果。' });
        } else if (st.style === '6') {
            hints.push({ type: 'info', text: 'style=6 为纯卫星影像（JPEG），忽略 ltype / lang / scl；城区实测最大缩放至 z=18（z=19 返回无图占位）。' });
        }

        if (hints.length === 0) {
            return { type: 'ok', text: '参数组合有效：当前使用 ' + st.host + '，style=' + st.style + (st.lang ? '，lang=' + st.lang : '（省略 lang 将回落旧版缓存）') + '。' };
        }
        return hints[0];
    }

    /* ---------- 插件入口 ---------- */

    window.registerNotePlugin('Amap_tiles', {
        meta: { name: 'Amap Tiles 全参数预览', version: '1.0.0' },

        init: async function (args) {
            var container = args.container;
            var utils = args.utils;
            var registerCleanup = args.registerCleanup;

            if (!container) return;

            buildPreview(container);

            registerCleanup(function () {
                var panel = container.querySelector('.amap-preview-panel');
                if (panel) panel.remove();
                if (map) { map.setTarget(null); map = null; }
                if (resizeObserver) { resizeObserver.disconnect(); resizeObserver = null; }
            });

            try {
                await utils.loadCSS(OL_CSS);
                await utils.loadScript(OL_JS);
            } catch (err) {
                console.warn('[Amap_tiles] OL 加载失败:', err);
            }

            if (typeof ol === 'undefined') {
                showOLFallback(container);
                return;
            }

            initMap(container);
        },

        destroy: function () {
            var panel = document.querySelector('.amap-preview-panel');
            if (panel) panel.remove();
            if (map) { map.setTarget(null); map = null; }
            if (resizeObserver) { resizeObserver.disconnect(); resizeObserver = null; }
        }
    });

    /* ---------- UI 构建 ---------- */

    function showOLFallback(container) {
        var mapContainer = container.querySelector('.amap-map-container');
        if (!mapContainer) return;
        mapContainer.innerHTML =
            '<div class="amap-ol-fallback">' +
                '<i class="fas fa-triangle-exclamation"></i>' +
                '<p>OpenLayers 加载失败</p>' +
                '<span>地图预览功能暂不可用，请检查网络连接或刷新重试。</span>' +
            '</div>';
    }

    function buildPreview(container) {
        var firstH2 = container.querySelector('h2');
        var panel = document.createElement('div');
        panel.className = 'amap-preview-panel';

        var presetHTML = '';
        for (var i = 0; i < PRESETS.length; i++) {
            presetHTML += '<button type="button" class="amap-preset-btn' + (i === 0 ? ' active' : '') +
                '" data-preset-idx="' + i + '">' + PRESETS[i].label + '</button>';
        }

        var locHTML = '';
        for (var j = 0; j < LOCATIONS.length; j++) {
            locHTML += '<button type="button" class="amap-loc-btn" data-loc-idx="' + j + '">' + LOCATIONS[j].label + '</button>';
        }

        var initialUrl = buildUrl(DEFAULT_STATE);

        panel.innerHTML =
            '<div class="amap-preview-header">' +
                '<div class="amap-header-left">' +
                    '<i class="fas fa-layer-group"></i>' +
                    '<span>高德切片全参数实时预览器</span>' +
                '</div>' +
                '<div class="amap-header-right">' +
                    '<label class="amap-underlay-toggle">' +
                        '<input type="checkbox" class="amap-underlay-chk">' +
                        '<span>叠加卫星底图 (style=6)</span>' +
                    '</label>' +
                '</div>' +
            '</div>' +
            '<div class="amap-preview-controls">' +
                '<div class="amap-url-row">' +
                    '<input type="text" class="amap-url-input" value="' + initialUrl + '" placeholder="输入或编辑高德 appmaptile URL，{x} {y} {z} 为占位符">' +
                    '<button type="button" class="amap-apply-btn">应用 URL</button>' +
                '</div>' +
                '<div class="amap-builder-grid">' +
                    '<label class="amap-field"><span>域名 (host)</span>' +
                        '<select class="amap-sel-host">' +
                            '<option value="webrd01" selected>webrd01 (电子底图)</option>' +
                            '<option value="webrd0{1-4}">webrd0{1-4} (并发)</option>' +
                            '<option value="webst02">webst02 (卫星/分层)</option>' +
                            '<option value="webst0{1-4}">webst0{1-4} (并发)</option>' +
                            '<option value="wprd01">wprd01 (同 webst)</option>' +
                            '<option value="wprd0{1-4}">wprd0{1-4} (并发)</option>' +
                        '</select>' +
                    '</label>' +
                    '<label class="amap-field"><span>样式 (style)</span>' +
                        '<select class="amap-sel-style">' +
                            '<option value="6">6 - 纯卫星影像 (仅webst/wprd)</option>' +
                            '<option value="7">7 - 旧版(webrd) / 无路名(webst)</option>' +
                            '<option value="8" selected>8 - 新版全要素(webrd) / 透明叠加(webst)</option>' +
                            '<option value="9">9 - 去图标纯文字 (仅webst/wprd)</option>' +
                            '<option value="10">10 - 极简去图标无路名 (仅webst/wprd)</option>' +
                        '</select>' +
                    '</label>' +
                    '<label class="amap-field"><span>语言 (lang)</span>' +
                        '<select class="amap-sel-lang">' +
                            '<option value="zh_cn" selected>zh_cn (现代中文·支持ltype)</option>' +
                            '<option value="en">en (纯英文)</option>' +
                            '<option value="zh_en">zh_en (中英双语)</option>' +
                            '<option value="">省略 (旧版中文缓存)</option>' +
                        '</select>' +
                    '</label>' +
                    '<label class="amap-field"><span>高清倍率 (scl)</span>' +
                        '<select class="amap-sel-scl">' +
                            '<option value="" selected>省略 (256×256)</option>' +
                            '<option value="1">1 (256×256)</option>' +
                            '<option value="2">2 (512×512 无注记)</option>' +
                        '</select>' +
                    '</label>' +
                    '<label class="amap-field"><span>size (占位)</span>' +
                        '<select class="amap-sel-size">' +
                            '<option value="1" selected>1</option>' +
                            '<option value="2">2</option>' +
                            '<option value="">省略</option>' +
                        '</select>' +
                    '</label>' +
                    '<label class="amap-field"><span>scale (占位)</span>' +
                        '<select class="amap-sel-scale">' +
                            '<option value="1" selected>1</option>' +
                            '<option value="2">2</option>' +
                            '<option value="">省略</option>' +
                        '</select>' +
                    '</label>' +
                '</div>' +
                '<div class="amap-ltype-box">' +
                    '<div class="amap-ltype-head">' +
                        '<span class="amap-ltype-title">ltype 4-Bit 图层位掩码：</span>' +
                        '<select class="amap-sel-ltype-mode">' +
                            '<option value="omit" selected>省略 ltype (默认全层)</option>' +
                            '<option value="mask">按位勾选 (1~15)</option>' +
                            '<option value="zero">0 (回落等同 7)</option>' +
                        '</select>' +
                        '<code class="amap-ltype-badge">未传 ltype</code>' +
                    '</div>' +
                    '<div class="amap-ltype-bits">' +
                        '<label class="amap-bit-chip"><input type="checkbox" class="amap-bit" data-bit="1" checked><span>+1 地貌/绿地/水系</span></label>' +
                        '<label class="amap-bit-chip"><input type="checkbox" class="amap-bit" data-bit="2" checked><span>+2 路网/地铁线</span></label>' +
                        '<label class="amap-bit-chip"><input type="checkbox" class="amap-bit" data-bit="4" checked><span>+4 注记/POI图标</span></label>' +
                        '<label class="amap-bit-chip"><input type="checkbox" class="amap-bit" data-bit="8" checked><span>+8 建筑轮廓(z≥17)</span></label>' +
                    '</div>' +
                '</div>' +
                '<div class="amap-hint-bar is-ok"></div>' +
                '<div class="amap-presets">' + presetHTML + '</div>' +
                '<div class="amap-loc-bar">' +
                    '<span class="amap-loc-label"><i class="fas fa-location-crosshairs"></i> 快速定位：</span>' +
                    locHTML +
                '</div>' +
            '</div>' +
            '<div class="amap-map-container">' +
                '<div class="amap-zoom-info">Zoom: <span class="amap-zoom-val">15</span> | <span class="amap-tile-meta">256×256</span></div>' +
            '</div>';

        if (firstH2) {
            container.insertBefore(panel, firstH2);
        } else {
            container.prepend(panel);
        }
    }

    /* ---------- 地图初始化与双向同步 ---------- */

    function initMap(container) {
        var mapContainer = container.querySelector('.amap-map-container');
        var urlInput = container.querySelector('.amap-url-input');
        var applyBtn = container.querySelector('.amap-apply-btn');
        var zoomVal = container.querySelector('.amap-zoom-val');
        var tileMeta = container.querySelector('.amap-tile-meta');
        var hintBar = container.querySelector('.amap-hint-bar');
        var underlayChk = container.querySelector('.amap-underlay-chk');

        var selHost = container.querySelector('.amap-sel-host');
        var selStyle = container.querySelector('.amap-sel-style');
        var selLang = container.querySelector('.amap-sel-lang');
        var selScl = container.querySelector('.amap-sel-scl');
        var selSize = container.querySelector('.amap-sel-size');
        var selScale = container.querySelector('.amap-sel-scale');
        var selLtypeMode = container.querySelector('.amap-sel-ltype-mode');
        var ltypeBadge = container.querySelector('.amap-ltype-badge');
        var bitCheckboxes = container.querySelectorAll('.amap-bit');
        var presetBtns = container.querySelectorAll('.amap-preset-btn');
        var locBtns = container.querySelectorAll('.amap-loc-btn');

        var currentState = JSON.parse(JSON.stringify(DEFAULT_STATE));

        function makeSource(url, isHd512) {
            return new ol.source.XYZ({
                url: url,
                crossOrigin: 'anonymous',
                maxZoom: 19,
                tilePixelRatio: isHd512 ? 2 : 1
            });
        }

        try {
            var underlayLayer = new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: SAT_UNDERLAY_URL,
                    crossOrigin: 'anonymous',
                    maxZoom: 18
                }),
                visible: false,
                zIndex: 1
            });

            var mainLayer = new ol.layer.Tile({
                source: makeSource(buildUrl(currentState), false),
                zIndex: 2
            });

            map = new ol.Map({
                target: mapContainer,
                layers: [underlayLayer, mainLayer],
                view: new ol.View({
                    center: ol.proj.fromLonLat([121.4998, 31.2397]),
                    zoom: 15,
                    maxZoom: 19,
                    minZoom: 3
                }),
                controls: ol.control.defaults.defaults({
                    attributionOptions: { collapsible: true }
                })
            });

            function updateHintAndMeta() {
                var z = Math.round(map.getView().getZoom());
                zoomVal.textContent = z;
                tileMeta.textContent = currentState.scl === '2' ? '512×512 (tilePixelRatio=2)' : '256×256';
                var hint = getHintMessage(currentState, z);
                hintBar.className = 'amap-hint-bar is-' + hint.type;
                hintBar.textContent = hint.text;
            }

            function setSelectValue(sel, val) {
                var found = false;
                for (var i = 0; i < sel.options.length; i++) {
                    if (sel.options[i].value === val) { found = true; break; }
                }
                if (!found) {
                    var opt = document.createElement('option');
                    opt.value = val;
                    opt.textContent = val;
                    sel.appendChild(opt);
                }
                sel.value = val;
            }

            function syncControlsFromState(st) {
                setSelectValue(selHost, st.host);
                setSelectValue(selStyle, st.style);
                setSelectValue(selLang, st.lang);
                setSelectValue(selScl, st.scl);
                setSelectValue(selSize, st.size);
                setSelectValue(selScale, st.scale);
                selLtypeMode.value = st.ltypeMode;

                var disabledBits = st.ltypeMode !== 'mask';
                for (var i = 0; i < bitCheckboxes.length; i++) {
                    var b = parseInt(bitCheckboxes[i].dataset.bit, 10);
                    bitCheckboxes[i].checked = Boolean(st.ltypeBits & b);
                    bitCheckboxes[i].disabled = disabledBits;
                }

                if (st.ltypeMode === 'omit') {
                    ltypeBadge.textContent = '未传 ltype';
                } else if (st.ltypeMode === 'zero') {
                    ltypeBadge.textContent = 'ltype=0 (0000 → 等同7)';
                } else {
                    var bin = ('0000' + st.ltypeBits.toString(2)).slice(-4);
                    ltypeBadge.textContent = 'ltype=' + st.ltypeBits + ' (' + bin + ')';
                }
            }

            function highlightMatchingPreset(url) {
                for (var j = 0; j < presetBtns.length; j++) {
                    var idx = parseInt(presetBtns[j].dataset.presetIdx, 10);
                    var presetUrl = buildUrl(PRESETS[idx].state);
                    presetBtns[j].classList.toggle('active', presetUrl === url);
                }
            }

            function applyState(st, optionalUrlOverride) {
                currentState = st;
                syncControlsFromState(st);
                var url = optionalUrlOverride || buildUrl(st);
                urlInput.value = url;
                mainLayer.setSource(makeSource(url, st.scl === '2'));
                highlightMatchingPreset(url);
                updateHintAndMeta();
            }

            function readStateFromControls() {
                var bits = 0;
                for (var i = 0; i < bitCheckboxes.length; i++) {
                    if (bitCheckboxes[i].checked) {
                        bits |= parseInt(bitCheckboxes[i].dataset.bit, 10);
                    }
                }
                // 如果 4 个勾全取消而处于 mask 模式，允许用户切到 zero 或保留至少提示
                var mode = selLtypeMode.value;
                if (mode === 'mask' && bits === 0) {
                    mode = 'zero';
                }
                return {
                    host: selHost.value,
                    style: selStyle.value,
                    lang: selLang.value,
                    scl: selScl.value,
                    size: selSize.value,
                    scale: selScale.value,
                    ltypeMode: mode,
                    ltypeBits: bits || 7
                };
            }

            // 监听表单参数变动
            [selHost, selStyle, selLang, selScl, selSize, selScale, selLtypeMode].forEach(function (el) {
                el.addEventListener('change', function () {
                    applyState(readStateFromControls());
                });
            });

            for (var k = 0; k < bitCheckboxes.length; k++) {
                bitCheckboxes[k].addEventListener('change', function () {
                    if (selLtypeMode.value !== 'mask') {
                        selLtypeMode.value = 'mask';
                    }
                    applyState(readStateFromControls());
                });
            }

            // 卫星底图垫底开关
            underlayChk.addEventListener('change', function () {
                underlayLayer.setVisible(underlayChk.checked);
            });

            // 手动应用 URL
            function applyManualUrl() {
                var raw = urlInput.value.trim();
                if (!raw) return;
                var parsed = parseUrlToState(raw);
                if (parsed) {
                    applyState(parsed, raw);
                } else {
                    mainLayer.setSource(makeSource(raw, raw.indexOf('scl=2') !== -1));
                    highlightMatchingPreset(raw);
                }
            }

            applyBtn.addEventListener('click', applyManualUrl);
            urlInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') applyManualUrl();
            });

            // 预设按钮
            for (var p = 0; p < presetBtns.length; p++) {
                (function (btn) {
                    btn.addEventListener('click', function () {
                        var idx = parseInt(btn.dataset.presetIdx, 10);
                        var preset = PRESETS[idx];
                        underlayChk.checked = Boolean(preset.underlay);
                        underlayLayer.setVisible(Boolean(preset.underlay));
                        if (preset.zoom) {
                            map.getView().setZoom(preset.zoom);
                        }
                        applyState(JSON.parse(JSON.stringify(preset.state)));
                    });
                })(presetBtns[p]);
            }

            // 快捷定位
            for (var l = 0; l < locBtns.length; l++) {
                (function (btn) {
                    btn.addEventListener('click', function () {
                        var idx = parseInt(btn.dataset.locIdx, 10);
                        var loc = LOCATIONS[idx];
                        map.getView().animate({
                            center: ol.proj.fromLonLat(loc.center),
                            zoom: loc.zoom,
                            duration: 350
                        });
                    });
                })(locBtns[l]);
            }

            map.getView().on('change:resolution', updateHintAndMeta);

            syncControlsFromState(currentState);
            updateHintAndMeta();

            setTimeout(function () { map.updateSize(); }, 200);
            resizeObserver = new ResizeObserver(function () { map.updateSize(); });
            resizeObserver.observe(mapContainer);
        } catch (olErr) {
            console.error('[Amap_tiles] OL 地图初始化失败:', olErr);
            showOLFallback(container);
        }
    }
})();

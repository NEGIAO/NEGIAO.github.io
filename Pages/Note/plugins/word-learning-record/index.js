/**
 * word-learning-record 插件
 * 功能：自定义渲染、核心释义遮挡、一键展开/遮挡、存档按需加载
 */
(function () {
    'use strict';

    // ==================== 遮挡配置 ====================
    var MEANING_KEYWORDS = ['中文释义', '词义', '释义', '核心释义'];
    var POS_HEADER_KEYWORDS = ['词性', '词类'];
    var DEFAULT_COLLAPSED = true;

    // ==================== 样式注入 ====================
    function ensureStyleInjected() {
        if (document.getElementById('cn-meaning-mask-style')) return;

        var css = document.createElement('style');
        css.id = 'cn-meaning-mask-style';
        css.textContent = [
            /* 浮动工具栏 */
            '.cn-collapse-toolbar{position:fixed;left:50%;transform:translateX(-50%);bottom:24px;display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;z-index:1100;pointer-events:none}',
            '.cn-collapse-toggle{width:300px;border:2.5px solid var(--border);background:color-mix(in srgb,var(--surface-elevated) 88%,transparent);color:var(--text);border-radius:999px;padding:.5rem .95rem;font-size:.84rem;font-weight:600;line-height:1;cursor:pointer;transition:all .2s ease;box-shadow:0 8px 24px rgba(0,0,0,.24);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);pointer-events:auto}',
            '.cn-collapse-toggle:hover{transform:translateY(-2px);border-color:var(--primary);color:var(--primary);box-shadow:0 12px 28px rgba(0,0,0,.28)}',

            /* 加载提示 */
            '.cn-load-prompt-container{display:none;text-align:center;padding:3rem 1.5rem;margin:2rem 0 0 0;border-top:1px solid var(--border)}',
            '.cn-load-prompt-container.is-visible{display:block;animation:cn-fadeInUp .4s ease}',
            '@keyframes cn-fadeInUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}',
            '.cn-load-prompt-text{font-size:.9rem;color:var(--text-muted);margin-bottom:1rem;line-height:1.5}',
            '.cn-continue-browse-btn{display:inline-flex;align-items:center;justify-content:center;border:2px solid var(--primary);background:transparent;color:var(--primary);border-radius:999px;padding:.65rem 1.8rem;font-size:.95rem;font-weight:600;line-height:1;cursor:pointer;transition:all .25s ease}',
            '.cn-continue-browse-btn:hover{background:var(--primary);color:var(--surface-elevated);transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,.15)}',
            '.cn-continue-browse-btn[disabled]{opacity:.6;cursor:default;transform:none}',

            /* 释义遮挡 */
            '.cn-meaning-cell{vertical-align:top}',
            '.cn-meaning-toggle{display:inline-block;border:1px solid var(--border);background:transparent;color:var(--text-muted);border-radius:999px;font-size:.75rem;padding:.22rem .55rem;margin:0 0 .35rem;cursor:pointer;line-height:1}',
            '.cn-meaning-toggle:hover{border-color:var(--primary);color:var(--primary)}',
            '.cn-meaning-cell.is-collapsed .cn-meaning__content{display:none!important}',

            /* 移动端 */
            '@media(max-width:768px){',
            '.cn-collapse-toolbar{bottom:calc(14px + env(safe-area-inset-bottom));margin-bottom:30px}',
            '.cn-collapse-toggle{width:200px;justify-content:center;min-height:40px;padding:.5rem .8rem;font-size:.8rem;border-width:1px;box-shadow:0 6px 18px rgba(0,0,0,.22)}',
            '.cn-load-prompt-container{padding:2rem 1rem;margin:1rem 0 0 0}',
            '.cn-continue-browse-btn{width:100%;padding:.6rem 1.5rem;font-size:.9rem}',
            '.cn-pos-header.is-mobile-hidden,.cn-pos-cell.is-mobile-hidden{display:none}',
            '}'
        ].join('\n');
        document.head.appendChild(css);
    }

    // ==================== 文本工具 ====================
    function normalizeText(text) {
        return String(text || '').replace(/\s+/g, '').trim();
    }

    function matchKeyword(text, keywords) {
        var n = normalizeText(text);
        return keywords.some(function (k) { return n.includes(k); });
    }

    // ==================== 表格列索引 ====================
    function getColumnIndices(table, matcher) {
        var headers = table.querySelectorAll('thead th, tr:first-child th');
        if (!headers.length) return [];
        var result = [];
        headers.forEach(function (th, i) { if (matcher(th.textContent)) result.push(i); });
        return result;
    }

    // ==================== 单元格遮挡 ====================
    function wrapMeaningCell(cell) {
        if (cell.dataset.cnProcessed) return;
        var html = cell.innerHTML;
        cell.innerHTML = '<button type="button" class="cn-meaning-toggle" aria-expanded="false">展开释义</button>' +
                         '<span class="cn-meaning__content">' + html + '</span>';
        cell.classList.add('cn-meaning-cell');
        cell.dataset.cnProcessed = '1';
        setCollapsed(cell, true);
    }

    function setCollapsed(cell, collapsed) {
        var btn = cell.querySelector('.cn-meaning-toggle');
        if (!btn) return;
        if (collapsed) { cell.classList.add('is-collapsed'); }
        else { cell.classList.remove('is-collapsed'); }
        btn.setAttribute('aria-expanded', String(!collapsed));
        btn.textContent = collapsed ? '展开释义' : '收起释义';
    }

    // ==================== 收集表格单元格 ====================
    function collectTableCells(root, cells) {
        if (!root) return 0;
        var tables = root.querySelectorAll('table');
        var count = 0;

        tables.forEach(function (table) {
            var meaningCols = getColumnIndices(table, function (t) { return matchKeyword(t, MEANING_KEYWORDS); });
            var posCols = getColumnIndices(table, function (t) { return matchKeyword(t, POS_HEADER_KEYWORDS); });
            if (!meaningCols.length) return;

            // 词性列移动端隐藏
            var headers = table.querySelectorAll('thead th, tr:first-child th');
            posCols.forEach(function (i) {
                if (headers[i]) headers[i].classList.add('cn-pos-header', 'is-mobile-hidden');
            });

            var rows = table.querySelectorAll('tbody tr');
            rows.forEach(function (row) {
                var tds = row.querySelectorAll('td');
                meaningCols.forEach(function (i) {
                    if (!tds[i]) return;
                    wrapMeaningCell(tds[i]);
                    cells.push(tds[i]);
                    count++;
                });
                posCols.forEach(function (i) {
                    if (tds[i]) tds[i].classList.add('cn-pos-cell', 'is-mobile-hidden');
                });
            });
        });

        return count;
    }

    // ==================== 一键遮挡按钮 ====================
    function createToolbar(getState, setState) {
        var toolbar = document.createElement('div');
        toolbar.className = 'cn-collapse-toolbar';

        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cn-collapse-toggle';

        function sync() {
            var collapsed = getState();
            btn.setAttribute('aria-pressed', String(collapsed));
            btn.textContent = collapsed ? '一 键 展 开' : '一键遮挡';
        }

        sync();
        btn.addEventListener('click', function () { setState(!getState()); sync(); });
        toolbar.appendChild(btn);
        document.body.appendChild(toolbar);
        activeToolbar = toolbar;

        return { sync: sync };
    }

    // ==================== 初始化遮挡 ====================
    function initMask(container) {
        ensureStyleInjected();

        var cells = [];
        var total = collectTableCells(container, cells);

        console.log('[word-learning] 找到 ' + total + ' 个可遮挡释义单元格');

        if (!cells.length) return null;

        var allCollapsed = DEFAULT_COLLAPSED;

        function setAll(collapsed) {
            cells.forEach(function (c) { setCollapsed(c, collapsed); });
            allCollapsed = collapsed;
        }

        function isAllCollapsed() {
            return !cells.some(function (c) { return !c.classList.contains('is-collapsed'); });
        }

        setAll(DEFAULT_COLLAPSED);

        var toolbar = createToolbar(
            function () { return allCollapsed; },
            function (v) { setAll(v); }
        );

        // 点击委托
        container.addEventListener('click', function (e) {
            var btn = e.target.closest('.cn-meaning-toggle');
            if (!btn) return;

            var cell = btn.closest('.cn-meaning-cell');
            if (!cell) return;

            setCollapsed(cell, !cell.classList.contains('is-collapsed'));
            allCollapsed = isAllCollapsed();
            toolbar.sync();
        });

        // 返回增量收集接口
        return {
            collectCells: function (root) {
                collectTableCells(root, cells);
                setAll(allCollapsed);
                toolbar.sync();
            }
        };
    }

    // ==================== 自定义渲染 ====================

    function extractWordLearningMarkdown(md) {
        var tokens = window.marked.lexer(md);
        var idx = tokens.findIndex(function (t) { return t.type === 'heading' && t.depth === 2; });
        if (idx === -1) return { headerMarkdown: '', bodyMarkdown: md };
        return {
            headerMarkdown: tokens.slice(0, idx).map(function (t) { return t.raw || ''; }).join(''),
            bodyMarkdown: tokens.slice(idx).map(function (t) { return t.raw || ''; }).join('')
        };
    }

    function renderWordLearningMarkdown(md, container) {
        var parts = extractWordLearningMarkdown(md);
        container.innerHTML = '';
        container.classList.add('animate-in');

        if (parts.headerMarkdown.trim()) {
            var headerDiv = document.createElement('div');
            headerDiv.className = 'note-chunk header-chunk';
            headerDiv.innerHTML = window.marked.parse(parts.headerMarkdown);
            container.appendChild(headerDiv);
        }

        var contentDiv = document.createElement('div');
        contentDiv.className = 'note-chunk days-content';
        contentDiv.innerHTML = window.marked.parse(parts.bodyMarkdown);
        container.appendChild(contentDiv);

        return contentDiv;
    }

    // ==================== 存档按需加载 ====================

    function loadArchiveIndex() {
        return fetch('../md/word-learning-archive/index.json')
            .then(function (r) { return r.ok ? r.json() : null; })
            .catch(function () { return null; });
    }

    function createArchiveLoadButton(archiveIndex, contentDiv, mask) {
        if (!archiveIndex || !archiveIndex.archives || !archiveIndex.archives.length) return;

        var idx = 0;
        var archives = archiveIndex.archives;

        function renderPrompt() {
            var remaining = archives.length - idx;
            if (remaining <= 0) return null;

            var div = document.createElement('div');
            div.className = 'cn-load-prompt-container is-visible';
            div.innerHTML =
                '<div class="cn-load-prompt-text">还有 ' + remaining + ' 个月度存档可浏览...</div>' +
                '<button type="button" class="cn-continue-browse-btn">继续浏览</button>';

            div.querySelector('.cn-continue-browse-btn').addEventListener('click', function () {
                var btn = this;
                btn.disabled = true;
                btn.textContent = '加载中...';

                fetch('../md/word-learning-archive/' + archives[idx])
                    .then(function (r) {
                        if (!r.ok) throw new Error('HTTP ' + r.status);
                        return r.text();
                    })
                    .then(function (md) {
                        div.remove();

                        var html = window.marked.parse(md);
                        var archiveDiv = document.createElement('div');
                        archiveDiv.className = 'note-chunk archive-content';
                        archiveDiv.innerHTML = html;
                        contentDiv.appendChild(archiveDiv);

                        if (mask) mask.collectCells(archiveDiv);

                        idx++;
                        var next = renderPrompt();
                        if (next) contentDiv.appendChild(next);

                        if (window.buildNoteTOC) { try { window.buildNoteTOC(); } catch (e) {} }
                    })
                    .catch(function (e) {
                        btn.textContent = '加载失败';
                        btn.disabled = false;
                        console.warn('存档加载失败:', e);
                    });
            });

            return div;
        }

        var first = renderPrompt();
        if (first) contentDiv.appendChild(first);
    }

    // ==================== 插件注册 ====================

    var activeToolbar = null;

    window.registerNotePlugin('word-learning-record', {
        meta: { name: '单词学习遮挡', version: '1.0.0' },

        init: async function (args) {
            var container = args.container;
            var registerCleanup = args.registerCleanup;

            var md = container._originalMarkdown;
            if (!md) {
                console.warn('[word-learning] 未找到 _originalMarkdown');
                return;
            }

            // 1. 自定义渲染（替换通用渲染结果）
            var contentDiv = renderWordLearningMarkdown(md, container);

            // 2. 初始化释义遮挡
            var mask = initMask(container);

            // 3. 加载存档
            loadArchiveIndex().then(function (index) {
                if (index && contentDiv) {
                    createArchiveLoadButton(index, contentDiv, mask);
                }
            });

            // 注册清理
            registerCleanup(function () { destroy(); });
        },

        destroy: function () { destroy(); }
    });

    function destroy() {
        // 移除浮动工具栏
        if (activeToolbar) {
            activeToolbar.remove();
            activeToolbar = null;
        }
        // 移除注入的样式
        var style = document.getElementById('cn-meaning-mask-style');
        if (style) style.remove();
    }
})();

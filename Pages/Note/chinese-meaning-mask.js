(function () {
    'use strict';

    const TARGET_HEADER_KEYWORDS = ['中文释义', '词义', '释义'];
    const EXAMPLE_HEADER_KEYWORDS = ['例句/用法', '例句', '用法'];
    const POS_HEADER_KEYWORDS = ['词性', '词类'];
    const DEFAULT_COLLAPSED = true;
    const MAX_VISIBLE_DATES = 7;
    const DATE_HEADER_REGEX = /\b\d{4}-\d{2}-\d{2}\b/;

    function ensureStyleInjected() {
        if (document.getElementById('cn-meaning-mask-style')) {
            return;
        }

        const style = document.createElement('style');
        style.id = 'cn-meaning-mask-style';
        style.textContent = `
            .cn-collapse-toolbar {
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            bottom: 24px;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            flex-wrap: wrap;
            z-index: 1100;
            pointer-events: none;
            }

            .cn-collapse-toggle {
            width: 300px;
            border: 2.5px solid var(--border);
            background: color-mix(in srgb, var(--surface-elevated) 88%, transparent);
            color: var(--text);
            border-radius: 999px;
            padding: 0.5rem 0.95rem;
            font-size: 0.84rem;
            font-weight: 600;
            line-height: 1;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            pointer-events: auto;
            }

            .cn-collapse-toggle:hover {
            transform: translateY(-2px);
            border-color: var(--primary);
            color: var(--primary);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.28);
            }

            .cn-load-prompt-container {
            display: none;
            text-align: center;
            padding: 3rem 1.5rem;
            margin: 2rem 0 0 0;
            border-top: 1px solid var(--border);
            }

            .cn-load-prompt-container.is-visible {
            display: block;
            animation: fadeInUp 0.4s ease;
            }

            @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(12px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
            }

            .cn-load-prompt-text {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 1rem;
            line-height: 1.5;
            }

            .cn-continue-browse-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--primary);
            background: transparent;
            color: var(--primary);
            border-radius: 999px;
            padding: 0.65rem 1.8rem;
            font-size: 0.95rem;
            font-weight: 600;
            line-height: 1;
            cursor: pointer;
            transition: all 0.25s ease;
            }

            .cn-continue-browse-btn:hover {
            background: var(--primary);
            color: var(--surface-elevated);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            }

            .cn-continue-browse-btn[disabled] {
            opacity: 0.6;
            cursor: default;
            transform: none;
            }

            @media (max-width: 768px) {
            .cn-load-prompt-container {
                padding: 2rem 1rem;
                margin: 1rem 0 0 0;
            }

            .cn-continue-browse-btn {
                width: 100%;
                padding: 0.6rem 1.5rem;
                font-size: 0.9rem;
            }
            }

            .cn-meaning-cell {
            cursor: default;
            position: relative;
            vertical-align: top;
            }

            .cn-meaning-cell .cn-meaning__content {
            display: block;
            transition: filter 0.2s ease, opacity 0.2s ease;
            }

            .cn-meaning-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border);
            background: transparent;
            color: var(--text-muted);
            border-radius: 999px;
            font-size: 0.75rem;
            line-height: 1;
            padding: 0.22rem 0.55rem;
            margin: 0 0 0.35rem;
            cursor: pointer;
            }

            .cn-meaning-toggle:hover {
            border-color: var(--primary);
            color: var(--primary);
            }

            .cn-meaning-cell.is-collapsed .cn-meaning__content {
            display: none;
            }

            .cn-example-cell {
            vertical-align: top;
            }

            .cn-example-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--border);
            background: transparent;
            color: var(--text-muted);
            border-radius: 999px;
            font-size: 0.75rem;
            line-height: 1;
            padding: 0.22rem 0.55rem;
            margin: 0 0 0.35rem;
            cursor: pointer;
            }

            .cn-example-toggle:hover {
            border-color: var(--primary);
            color: var(--primary);
            }

            .cn-example-cell.is-collapsed .cn-example__content {
            display: none;
            }

            @media (max-width: 768px) {
            .cn-collapse-toolbar {
                bottom: calc(14px + env(safe-area-inset-bottom));
                margin-bottom: 30px;
            }

            .cn-collapse-toggle {
                width: 200px;
                justify-content: center;
                min-height: 40px;
                padding: 0.5rem 0.8rem;
                font-size: 0.8rem;
                border-width: 1px;
                box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
            }

            .cn-pos-header.is-mobile-hidden,
            .cn-pos-cell.is-mobile-hidden {
                display: none;
            }
            }
        `;

        document.head.appendChild(style);
    }

    function normalizeText(text) {
        return String(text || '').replace(/\s+/g, '').trim();
    }

    function extractDateValue(text) {
        const match = String(text || '').match(DATE_HEADER_REGEX);
        if (!match) {
            return null;
        }

        return Number(match[0].replace(/-/g, ''));
    }

    function collectDateSections(root) {
        const headings = Array.from(
            root.querySelectorAll('h1, h2, h3, h4, h5, h6')
        ).filter((heading) => DATE_HEADER_REGEX.test(heading.textContent || ''));

        if (!headings.length) {
            return [];
        }

        return headings.map((heading, index) => {
            const nextHeading = headings[index + 1];
            const nodes = [];
            let current = heading;

            while (current && current !== nextHeading) {
                const next = current.nextSibling;
                nodes.push(current);
                current = next;
            }

            return {
                heading: heading,
                nodes: nodes,
                dateValue: extractDateValue(heading.textContent) || 0
            };
        });
    }

    function reorderAndTrimToLatestDates(root, maxDates) {
        if (!root || root.dataset.cnTrimmed === 'true') {
            return null;
        }

        if (!Number.isFinite(maxDates) || maxDates <= 0) {
            return null;
        }

        const sections = collectDateSections(root);
        if (!sections.length) {
            root.dataset.cnTrimmed = 'true';
            return null;
        }

        const prefixNodes = [];
        const firstHeading = sections[0].heading;
        let prefixCursor = root.firstChild;
        while (prefixCursor && prefixCursor !== firstHeading) {
            const next = prefixCursor.nextSibling;
            prefixNodes.push(prefixCursor);
            prefixCursor = next;
        }

        const sortedSections = sections.slice().sort((a, b) => b.dateValue - a.dateValue);
        const visibleSections = sortedSections.slice(0, maxDates);
        const deferredSections = sortedSections.slice(maxDates);

        const visibleFragment = document.createDocumentFragment();
        prefixNodes.forEach((node) => visibleFragment.appendChild(node));
        visibleSections.forEach((section) => {
            section.nodes.forEach((node) => visibleFragment.appendChild(node));
        });

        const deferredFragment = document.createDocumentFragment();
        deferredSections.forEach((section) => {
            section.nodes.forEach((node) => deferredFragment.appendChild(node));
        });

        root.innerHTML = '';
        root.appendChild(visibleFragment);
        root.dataset.cnTrimmed = 'true';

        return deferredFragment.childNodes.length ? deferredFragment : null;
    }

    function isTargetMeaningHeader(headerText) {
        const normalized = normalizeText(headerText);
        return TARGET_HEADER_KEYWORDS.some((keyword) => normalized.includes(keyword));
    }

    function isTargetExampleHeader(headerText) {
        const normalized = normalizeText(headerText);
        return EXAMPLE_HEADER_KEYWORDS.some((keyword) => normalized.includes(keyword));
    }

    function isTargetPosHeader(headerText) {
        const normalized = normalizeText(headerText);
        return POS_HEADER_KEYWORDS.some((keyword) => normalized.includes(keyword));
    }

    function getMeaningColumnIndices(table) {
        const headerCells = table.querySelectorAll('thead th, tr:first-child th');
        if (!headerCells.length) {
            return [];
        }

        const indices = [];
        headerCells.forEach((th, index) => {
            if (isTargetMeaningHeader(th.textContent)) {
                indices.push(index);
            }
        });

        return indices;
    }

    function getExampleColumnIndices(table) {
        const headerCells = table.querySelectorAll('thead th, tr:first-child th');
        if (!headerCells.length) {
            return [];
        }

        const indices = [];
        headerCells.forEach((th, index) => {
            if (isTargetExampleHeader(th.textContent)) {
                indices.push(index);
            }
        });

        return indices;
    }

    function getPosColumnIndices(table) {
        const headerCells = table.querySelectorAll('thead th, tr:first-child th');
        if (!headerCells.length) {
            return [];
        }

        const indices = [];
        headerCells.forEach((th, index) => {
            if (isTargetPosHeader(th.textContent)) {
                indices.push(index);
            }
        });

        return indices;
    }

    function markPosHeaderColumns(table, indices) {
        if (!indices.length) {
            return;
        }

        const headerCells = table.querySelectorAll('thead th, tr:first-child th');
        indices.forEach((index) => {
            const th = headerCells[index];
            if (th) {
                th.classList.add('cn-pos-header', 'is-mobile-hidden');
            }
        });
    }

    function wrapMeaningCell(cell) {
        if (cell.dataset.cnMeaningProcessed === 'true') {
            return;
        }

        const originalHtml = cell.innerHTML;
        cell.innerHTML = `
            <button type="button" class="cn-meaning-toggle" aria-expanded="false">展开释义</button>
            <div class="cn-meaning__content">${originalHtml}</div>
        `;
        cell.classList.add('cn-meaning-cell');
        cell.dataset.cnMeaningProcessed = 'true';
        setMeaningCollapsed(cell, true);
    }

    function setMeaningCollapsed(cell, collapsed) {
        const button = cell.querySelector('.cn-meaning-toggle');
        if (!button) {
            return;
        }

        cell.classList.toggle('is-collapsed', collapsed);
        button.setAttribute('aria-expanded', String(!collapsed));
        button.textContent = collapsed ? '展开释义' : '收起释义';
    }

    function setExampleCollapsed(cell, collapsed) {
        const button = cell.querySelector('.cn-example-toggle');
        if (!button) {
            return;
        }

        cell.classList.toggle('is-collapsed', collapsed);
        button.setAttribute('aria-expanded', String(!collapsed));
        button.textContent = collapsed ? '展开例句' : '收起例句';
    }

    function wrapExampleCell(cell) {
        if (cell.dataset.cnExampleProcessed === 'true') {
            return;
        }

        const originalHtml = cell.innerHTML;
        cell.innerHTML = `
            <button type="button" class="cn-example-toggle" aria-expanded="false">展开例句</button>
            <div class="cn-example__content">${originalHtml}</div>
        `;
        cell.classList.add('cn-example-cell');
        cell.dataset.cnExampleProcessed = 'true';
        setExampleCollapsed(cell, true);
    }

    function createCollapseToggleButton(container, onToggle, initialCollapsed) {
        const toolbar = document.createElement('div');
        toolbar.className = 'cn-collapse-toolbar';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'cn-collapse-toggle';

        function syncButtonState(collapsed) {
            button.setAttribute('aria-pressed', String(collapsed));
            button.textContent = collapsed ? '一 键 展 开' : '一键遮挡';
        }

        syncButtonState(initialCollapsed);

        button.addEventListener('click', () => {
            const nextCollapsed = onToggle();
            syncButtonState(nextCollapsed);
        });

        toolbar.appendChild(button);

        document.body.appendChild(toolbar);

        return {
            sync: syncButtonState,
            toolbar: toolbar
        };
    }

    function createLoadPromptContainer(onLoadAll) {
        if (typeof onLoadAll !== 'function') {
            return null;
        }

        const container = document.createElement('div');
        container.className = 'cn-load-prompt-container';

        const text = document.createElement('div');
        text.className = 'cn-load-prompt-text';
        text.innerHTML = '还有更多单词等待学习...';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'cn-continue-browse-btn';
        button.textContent = '继续浏览';

        button.addEventListener('click', () => {
            const loaded = onLoadAll();
            if (loaded) {
                button.disabled = true;
                button.textContent = '已加载';
            }
        });

        container.appendChild(text);
        container.appendChild(button);

        return {
            container: container,
            button: button,
            show: () => container.classList.add('is-visible'),
            hide: () => container.classList.remove('is-visible')
        };
    }

    function collectTableCells(root, meaningCells, exampleCells) {
        if (!root) {
            return;
        }

        const tables = root.querySelectorAll('table');
        if (!tables.length) {
            return;
        }

        tables.forEach((table) => {
            const meaningColumns = getMeaningColumnIndices(table);
            const exampleColumns = getExampleColumnIndices(table);
            const posColumns = getPosColumnIndices(table);
            if (!meaningColumns.length) {
                if (!exampleColumns.length) {
                    return;
                }
            }

            markPosHeaderColumns(table, posColumns);

            const rows = table.querySelectorAll('tbody tr');
            if (!rows.length) {
                return;
            }

            rows.forEach((row) => {
                const cells = row.querySelectorAll('td');
                meaningColumns.forEach((index) => {
                    const targetCell = cells[index];
                    if (!targetCell) {
                        return;
                    }

                    wrapMeaningCell(targetCell);
                    meaningCells.push(targetCell);
                });

                posColumns.forEach((index) => {
                    const targetCell = cells[index];
                    if (!targetCell) {
                        return;
                    }

                    targetCell.classList.add('cn-pos-cell', 'is-mobile-hidden');
                });

                exampleColumns.forEach((index) => {
                    const targetCell = cells[index];
                    if (!targetCell) {
                        return;
                    }

                    wrapExampleCell(targetCell);
                    exampleCells.push(targetCell);
                });
            });
        });
    }

    function initChineseMeaningMasking(options) {
        const container = options && options.container;
        if (!container) {
            return;
        }

        const maxDates = options && options.maxVisibleDates;
        const contentRoot = container.querySelector('.days-content') || container;
        let deferredContent = reorderAndTrimToLatestDates(
            contentRoot,
            Number.isFinite(maxDates) ? maxDates : MAX_VISIBLE_DATES
        );

        ensureStyleInjected();

        const meaningCells = [];
        const exampleCells = [];

        collectTableCells(container, meaningCells, exampleCells);

        const hasDeferred = deferredContent && deferredContent.childNodes.length > 0;
        if (!meaningCells.length && !exampleCells.length && !hasDeferred) {
            return;
        }

        let allCollapsed = DEFAULT_COLLAPSED;

        function applyAllCollapsedState(collapsed) {
            meaningCells.forEach((cell) => {
                setMeaningCollapsed(cell, collapsed);
            });

            exampleCells.forEach((cell) => {
                setExampleCollapsed(cell, collapsed);
            });

            allCollapsed = collapsed;
            return allCollapsed;
        }

        function computeAllCollapsed() {
            const hasExpandedMeaning = meaningCells.some((cell) => !cell.classList.contains('is-collapsed'));
            const hasExpandedExample = exampleCells.some((cell) => !cell.classList.contains('is-collapsed'));
            return !(hasExpandedMeaning || hasExpandedExample);
        }

        applyAllCollapsedState(DEFAULT_COLLAPSED);

        const collapseToolbar = createCollapseToggleButton(
            container,
            () => applyAllCollapsedState(!allCollapsed),
            allCollapsed
        );

        let loadPrompt = null;
        let scrollListener = null;

        function appendDeferredContent() {
            if (!deferredContent || !deferredContent.childNodes.length) {
                return false;
            }

            collectTableCells(deferredContent, meaningCells, exampleCells);
            
            // 移除提示区域
            if (loadPrompt && loadPrompt.container.parentNode) {
                loadPrompt.container.remove();
            }
            
            contentRoot.appendChild(deferredContent);
            deferredContent = null;

            applyAllCollapsedState(allCollapsed);
            collapseToolbar.sync(allCollapsed);

            // 移除滚动监听
            if (scrollListener) {
                window.removeEventListener('scroll', scrollListener);
                scrollListener = null;
            }

            // 重新构建TOC - 与新加载的内容同步
            if (window.buildNoteTOC && typeof window.buildNoteTOC === 'function') {
                window.buildNoteTOC();
            }

            return true;
        }

        if (hasDeferred) {
            loadPrompt = createLoadPromptContainer(appendDeferredContent);
            
            if (loadPrompt) {
                contentRoot.appendChild(loadPrompt.container);
                
                // 滚动监听：当接近底部时显示提示
                scrollListener = () => {
                    const promptElement = loadPrompt.container;
                    const rect = promptElement.getBoundingClientRect();
                    const isNearBottom = rect.top < window.innerHeight + 200;
                    
                    if (isNearBottom) {
                        loadPrompt.show();
                    } else {
                        loadPrompt.hide();
                    }
                };
                
                window.addEventListener('scroll', scrollListener, { passive: true });
            }
        }

        window.renderAllWordLearningRecords = appendDeferredContent;

        container.addEventListener('click', (event) => {
            const target = event.target;
            if (!target) {
                return;
            }

            const meaningButton = target.closest('.cn-meaning-toggle');
            if (meaningButton) {
                const meaningCell = meaningButton.closest('.cn-meaning-cell');
                if (meaningCell) {
                    const isCollapsed = meaningCell.classList.contains('is-collapsed');
                    setMeaningCollapsed(meaningCell, !isCollapsed);
                    allCollapsed = computeAllCollapsed();
                    collapseToolbar.sync(allCollapsed);
                }
                return;
            }

            const exampleButton = target.closest('.cn-example-toggle');
            if (exampleButton) {
                const exampleCell = exampleButton.closest('.cn-example-cell');
                if (exampleCell) {
                    const isCollapsed = exampleCell.classList.contains('is-collapsed');
                    setExampleCollapsed(exampleCell, !isCollapsed);
                    allCollapsed = computeAllCollapsed();
                    collapseToolbar.sync(allCollapsed);
                }
                return;
            }
        });
    }

    window.initChineseMeaningMasking = initChineseMeaningMasking;
})();

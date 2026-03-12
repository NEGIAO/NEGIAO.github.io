(function () {
    'use strict';

    const STORAGE_KEY = 'note-cn-meaning-mask-enabled';
    const TARGET_HEADER_KEYWORDS = ['中文释义', '词义', '释义'];

    function ensureStyleInjected() {
        if (document.getElementById('cn-meaning-mask-style')) {
            return;
        }

        const style = document.createElement('style');
        style.id = 'cn-meaning-mask-style';
        style.textContent = `
            .cn-mask-toolbar {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-bottom: 1rem;
            }

            .cn-mask-toggle {
                border: 1px solid var(--border);
                background: var(--surface-elevated);
                color: var(--text);
                border-radius: 999px;
                padding: 0.42rem 0.9rem;
                font-size: 0.9rem;
                line-height: 1;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .cn-mask-toggle:hover {
                transform: translateY(-1px);
                border-color: var(--primary);
            }

            .cn-mask-toggle.is-enabled {
                background: rgba(0, 217, 255, 0.12);
                border-color: rgba(0, 217, 255, 0.5);
                color: var(--primary);
            }

            .cn-meaning-cell {
                cursor: pointer;
                position: relative;
            }

            .cn-meaning-cell .cn-meaning__content {
                display: inline;
                transition: filter 0.2s ease, opacity 0.2s ease;
            }

            .cn-meaning-cell.is-masked .cn-meaning__content {
                filter: blur(0.28em);
                opacity: 0.7;
                user-select: none;
            }

            .cn-meaning-cell.is-masked::after {
                content: ' 点击显示';
                font-size: 0.72em;
                color: var(--text-muted);
                margin-left: 0.2em;
            }
        `;

        document.head.appendChild(style);
    }

    function normalizeText(text) {
        return String(text || '').replace(/\s+/g, '').trim();
    }

    function isTargetMeaningHeader(headerText) {
        const normalized = normalizeText(headerText);
        return TARGET_HEADER_KEYWORDS.some((keyword) => normalized.includes(keyword));
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

    function wrapMeaningCell(cell) {
        if (cell.dataset.cnMeaningProcessed === 'true') {
            return;
        }

        const originalHtml = cell.innerHTML;
        cell.innerHTML = `<span class="cn-meaning__content">${originalHtml}</span>`;
        cell.classList.add('cn-meaning-cell');
        cell.dataset.cnMeaningProcessed = 'true';
        cell.title = '点击显示/隐藏中文释义';
    }

    function getMaskDefaultState() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === null) {
            return true;
        }
        return saved === 'true';
    }

    function saveMaskState(enabled) {
        localStorage.setItem(STORAGE_KEY, String(enabled));
    }

    function createToggleButton(container, onChange, enabled) {
        const toolbar = document.createElement('div');
        toolbar.className = 'cn-mask-toolbar';

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'cn-mask-toggle';

        function syncButtonState(isEnabled) {
            button.classList.toggle('is-enabled', isEnabled);
            button.setAttribute('aria-pressed', String(isEnabled));
            button.textContent = isEnabled ? '中文释义遮挡: 开' : '中文释义遮挡: 关';
        }

        syncButtonState(enabled);

        button.addEventListener('click', () => {
            enabled = !enabled;
            syncButtonState(enabled);
            onChange(enabled);
            saveMaskState(enabled);
        });

        toolbar.appendChild(button);

        const firstElement = container.firstElementChild;
        if (firstElement) {
            container.insertBefore(toolbar, firstElement);
        } else {
            container.appendChild(toolbar);
        }
    }

    function initChineseMeaningMasking(options) {
        const container = options && options.container;
        if (!container) {
            return;
        }

        ensureStyleInjected();

        const tables = container.querySelectorAll('table');
        if (!tables.length) {
            return;
        }

        const meaningCells = [];

        tables.forEach((table) => {
            const meaningColumns = getMeaningColumnIndices(table);
            if (!meaningColumns.length) {
                return;
            }

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
            });
        });

        if (!meaningCells.length) {
            return;
        }

        let maskEnabled = getMaskDefaultState();

        function applyMaskState() {
            meaningCells.forEach((cell) => {
                cell.classList.toggle('is-masked', maskEnabled);
            });
        }

        applyMaskState();

        container.addEventListener('click', (event) => {
            const target = event.target;
            if (!target) {
                return;
            }

            const meaningCell = target.closest('.cn-meaning-cell');
            if (!meaningCell || !container.contains(meaningCell)) {
                return;
            }

            if (!maskEnabled) {
                return;
            }

            meaningCell.classList.toggle('is-masked');
        });

        createToggleButton(container, (enabled) => {
            maskEnabled = enabled;
            applyMaskState();
        }, maskEnabled);
    }

    window.initChineseMeaningMasking = initChineseMeaningMasking;
})();

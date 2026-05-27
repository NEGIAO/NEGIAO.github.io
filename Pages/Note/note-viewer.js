(function () {
    'use strict';

    const SAFE_NOTE_NAME_PATTERN = /^[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*$/;

    // 配置将从外部 JSON 文件加载
    let noteConfig = {};

    // 加载外部配置文件
    async function loadNoteConfig() {
        try {
            const response = await fetch('./notes-config.json');
            if (response.ok) {
                const config = await response.json();
                noteConfig = config.notes || {};
                return true;
            }
        } catch (error) {
            console.warn('无法加载笔记配置文件，使用空配置:', error);
        }
        return false;
    }

    function getUrlParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    function getSafeNoteName() {
        const noteName = String(getUrlParam('note') || '').trim();

        if (!noteName) {
            throw new Error('未指定笔记名称。请使用 ?note=笔记名 参数访问。');
        }

        if (!SAFE_NOTE_NAME_PATTERN.test(noteName)) {
            throw new Error('笔记名称包含非法字符。');
        }

        return noteName;
    }

    function updatePageMeta(noteName, config) {
        if (!config) {
            return;
        }

        document.getElementById('page-title').textContent = config.title + ' - NEGIAO';
        document.title = config.title + ' - NEGIAO';

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && config.description) {
            metaDesc.setAttribute('content', config.description);
        }
    }

    function showError(message, errorCode = null) {
        const container = document.getElementById('note-content');
        
        let icon = 'fa-exclamation-triangle';
        let title = '加载失败';
        let subtext = '';
        let showRefresh = false;
        
        if (errorCode === 'NOT_FOUND') {
            icon = 'fa-magnifying-glass';
            title = '找不到笔记';
            subtext = '该笔记文件不存在或已被删除。';
        } else if (errorCode === 'NETWORK_ERROR') {
            icon = 'fa-wifi-slash';
            title = '网络连接失败';
            subtext = '请检查网络连接，然后点击下方按钮重试。';
            showRefresh = true;
        } else if (errorCode === 'LIBRARY_ERROR') {
            icon = 'fa-cube';
            title = '核心组件加载失败';
            subtext = '某些第三方组件加载出错，已启用降级方案。';
            showRefresh = true;
        } else if (errorCode === 'INVALID_PARAM') {
            icon = 'fa-ban';
            title = '参数无效';
            subtext = '请检查 URL 参数是否正确。';
        }

        container.innerHTML = `
            <div class="error-container">
                <i class="fas ${icon}"></i>
                <h2>${title}</h2>
                <p>${message}</p>
                ${subtext ? `<p class="error-subtext">${subtext}</p>` : ''}
                <div class="error-container__actions">
                    <a href="../notes.html" class="btn btn--primary error-container__back-link">
                        <i class="fas fa-arrow-left"></i> 返回笔记列表
                    </a>
                    ${showRefresh ? '<button class="btn btn--outline error-container__refresh-btn" onclick="location.reload()"><i class="fas fa-rotate-right"></i> 刷新重试</button>' : ''}
                </div>
            </div>
        `;
    }

    async function loadMarkdown(noteName) {
        const mdPath = `./md/${noteName}.md`;
        
        try {
            const response = await fetch(mdPath);
            
            if (response.status === 404) {
                throw { code: 'NOT_FOUND', message: `笔记文件 "${noteName}" 不存在。` };
            }
            
            if (!response.ok) {
                throw { code: 'NETWORK_ERROR', message: `HTTP ${response.status}: 无法加载笔记文件。` };
            }
            
            return await response.text();
        } catch (error) {
            if (error.code) {
                throw error;
            }
            
            if (error instanceof TypeError) {
                throw { code: 'NETWORK_ERROR', message: '网络连接失败，请检查网络或稍后重试。' };
            }
            
            throw { code: 'NETWORK_ERROR', message: error.message || '无法加载笔记文件。' };
        }
    }

    function ensureMarkedAvailable() {
        if (!window.marked || typeof window.marked.parse !== 'function' || typeof window.marked.lexer !== 'function') {
            throw new Error('Markdown 解析器未加载。');
        }
    }

    function extractWordLearningMarkdown(md) {
        ensureMarkedAvailable();

        const tokens = window.marked.lexer(md);
        const monthHeadingIndex = tokens.findIndex((token) => token.type === 'heading' && token.depth === 2);

        if (monthHeadingIndex === -1) {
            return {
                headerMarkdown: '',
                bodyMarkdown: md
            };
        }

        return {
            headerMarkdown: tokens.slice(0, monthHeadingIndex).map((token) => token.raw || '').join(''),
            bodyMarkdown: tokens.slice(monthHeadingIndex).map((token) => token.raw || '').join('')
        };
    }

    function renderNormalMarkdown(md, container) {
        ensureMarkedAvailable();
        container.innerHTML = window.marked.parse(md);
        container.classList.add('animate-in');
    }

    function renderWordLearningMarkdown(md, container) {
        const { headerMarkdown, bodyMarkdown } = extractWordLearningMarkdown(md);

        container.innerHTML = '';
        container.classList.add('animate-in');

        if (headerMarkdown.trim()) {
            const headerDiv = document.createElement('div');
            headerDiv.className = 'note-chunk header-chunk';
            headerDiv.innerHTML = window.marked.parse(headerMarkdown);
            container.appendChild(headerDiv);
        }

        const contentDiv = document.createElement('div');
        contentDiv.className = 'note-chunk days-content';
        contentDiv.innerHTML = window.marked.parse(bodyMarkdown);
        container.appendChild(contentDiv);
    }

    function renderMarkdown(md, container, noteName) {
        if (noteName && noteName.includes('word-learning-record')) {
            renderWordLearningMarkdown(md, container);
            return;
        }

        renderNormalMarkdown(md, container);
    }

    function applyHighlight(container) {
        if (!window.hljs || typeof window.hljs.highlightElement !== 'function') {
            return;
        }

        container.querySelectorAll('pre code').forEach((block) => {
            window.hljs.highlightElement(block);
        });
    }

    async function renderMath(container) {
        if (!window.MathJax || typeof window.MathJax.typesetPromise !== 'function') {
            return;
        }

        try {
            await window.MathJax.typesetPromise([container]);
        } catch (error) {
            // 保持页面继续运行，不阻断主渲染流程
        }
    }

    function detectMissingLibraries() {
        const issues = [];
        
        if (typeof window.marked === 'undefined') {
            issues.push('Marked.js 未加载');
        }
        
        if (typeof window.hljs === 'undefined') {
            issues.push('Highlight.js 未加载');
        }
        
        if (typeof window.MathJax === 'undefined') {
            issues.push('MathJax 未加载');
        }
        
        return issues;
    }

    function handleLibraryError(issues) {
        console.warn('库加载警告:', issues);
        
        if (issues.length > 0) {
            showError(
                `以下组件加载失败: ${issues.join(', ')}。部分功能可能受限。`,
                'LIBRARY_ERROR'
            );
            return false;
        }
        
        return true;
    }

    async function init() {
        // 先加载配置文件
        await loadNoteConfig();

        let noteName;

        try {
            noteName = getSafeNoteName();
        } catch (error) {
            showError(error.message, 'INVALID_PARAM');
            return;
        }

        const config = noteConfig[noteName];
        updatePageMeta(noteName, config);

        try {
            const md = await loadMarkdown(noteName);
            const container = document.getElementById('note-content');

            renderMarkdown(md, container, noteName);
            applyHighlight(container);
            
            try {
                await renderMath(container);
            } catch (mathError) {
                console.warn('MathJax 渲染异常，继续执行其他操作:', mathError);
            }

            if (window.initChineseMeaningMasking && noteName.includes('word-learning-record')) {
                try {
                    window.initChineseMeaningMasking({
                        container: container
                    });
                } catch (maskError) {
                    console.warn('单词掩码初始化失败，继续执行:', maskError);
                }
            }

            enhanceCodeBlocks(container);
            initSearch(container);

            if (window.buildNoteTOC) {
                try {
                    window.buildNoteTOC();
                } catch (tocError) {
                    console.warn('TOC 构建失败，继续执行:', tocError);
                }
            }

            // 加载笔记增强插件（如有）
            if (window.loadNotePlugins) {
                try {
                    await window.loadNotePlugins(noteName, container);
                } catch (pluginError) {
                    console.warn('插件加载失败，继续执行:', pluginError);
                }
            }
        } catch (error) {
            if (error.code) {
                showError(error.message, error.code);
            } else {
                showError(error.message || '未知错误，请刷新重试。', 'NETWORK_ERROR');
            }
        }
    }

    function enhanceCodeBlocks(container) {
        const codeBlocks = container.querySelectorAll('pre');

        codeBlocks.forEach((pre, index) => {
            const code = pre.querySelector('code');
            if (!code) {
                return;
            }

            const langClass = Array.from(code.classList).find((cls) => cls.startsWith('language-'));
            const lang = langClass ? langClass.replace('language-', '') : 'text';
            const originalCode = code.textContent;

            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';

            const header = document.createElement('div');
            header.className = 'code-block-header';

            const langLabel = document.createElement('span');
            langLabel.className = 'code-block-lang';
            langLabel.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);

            const copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.className = 'code-block-copy-btn';
            copyBtn.setAttribute('data-code-index', index);
            copyBtn.innerHTML = '<i class="fas fa-copy"></i> 复制';

            copyBtn.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(originalCode);
                    copyBtn.classList.add('copied');
                    copyBtn.innerHTML = '<i class="fas fa-check"></i> 已复制!';

                    setTimeout(() => {
                        copyBtn.classList.remove('copied');
                        copyBtn.innerHTML = '<i class="fas fa-copy"></i> 复制';
                    }, 2000);
                } catch (error) {
                    console.error('复制失败:', error);
                }
            });

            header.appendChild(langLabel);
            header.appendChild(copyBtn);

            wrapper.appendChild(header);
            wrapper.appendChild(pre.cloneNode(true));

            pre.parentNode.replaceChild(wrapper, pre);
        });
    }

    function initSearch(container) {
        const searchInput = document.getElementById('note-search');
        if (!searchInput) {
            return;
        }

        let currentIndex = -1;
        let matches = [];

        function debounce(func, delay) {
            let timeoutId = null;
            return function (...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        }

        function clearHighlights() {
            const highlights = container.querySelectorAll('mark.search-highlight');
            highlights.forEach((mark) => {
                const parent = mark.parentNode;
                while (mark.firstChild) {
                    parent.insertBefore(mark.firstChild, mark);
                }
                parent.removeChild(mark);
            });
        }

        function searchAndHighlight() {
            const query = searchInput.value.trim();
            clearHighlights();
            matches = [];
            currentIndex = -1;

            if (!query) {
                updateNavButtons();
                updateSearchCount();
                return;
            }

            const text = container.innerText;
            const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
            let match;

            while ((match = regex.exec(text)) !== null) {
                matches.push({
                    index: match.index,
                    length: match[0].length,
                    text: match[0]
                });
            }

            if (matches.length > 0) {
                highlightMatches(query);
                goToNextMatch();
            }

            updateNavButtons();
            updateSearchCount();
        }

        function highlightMatches(query) {
            const walker = document.createTreeWalker(
                container,
                NodeFilter.SHOW_TEXT,
                null,
                false
            );

            const nodesToReplace = [];
            let node;

            while ((node = walker.nextNode())) {
                if (node.textContent.toLowerCase().includes(query.toLowerCase())) {
                    nodesToReplace.push(node);
                }
            }

            nodesToReplace.forEach((node) => {
                const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                const html = node.textContent.replace(regex, '<mark class="search-highlight">$1</mark>');

                const fragment = document.createElement('span');
                fragment.innerHTML = html;

                node.parentNode.replaceChild(fragment, node);
            });

            matches = Array.from(container.querySelectorAll('mark.search-highlight'));
        }

        function goToNextMatch() {
            if (matches.length === 0) {
                return;
            }

            currentIndex = (currentIndex + 1) % matches.length;
            scrollToMatch(currentIndex);
        }

        function goToPrevMatch() {
            if (matches.length === 0) {
                return;
            }

            currentIndex = (currentIndex - 1 + matches.length) % matches.length;
            scrollToMatch(currentIndex);
        }

        function scrollToMatch(index) {
            if (index < 0 || index >= matches.length) {
                return;
            }

            matches.forEach((mark) => {
                mark.classList.remove('active');
            });

            const mark = matches[index];
            mark.classList.add('active');

            mark.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function updateNavButtons() {
            const prevBtn = document.getElementById('note-search-prev');
            const nextBtn = document.getElementById('note-search-next');

            if (prevBtn) {
                prevBtn.disabled = matches.length === 0;
            }
            if (nextBtn) {
                nextBtn.disabled = matches.length === 0;
            }
        }

        function updateSearchCount() {
            const countElement = document.getElementById('note-search-count');
            if (countElement) {
                if (matches.length === 0) {
                    countElement.textContent = searchInput.value.trim() ? '未找到' : '';
                } else {
                    countElement.textContent = `${currentIndex + 1}/${matches.length}`;
                }
            }
        }

        searchInput.addEventListener('input', debounce(searchAndHighlight, 300));

        const prevBtn = document.getElementById('note-search-prev');
        if (prevBtn) {
            prevBtn.addEventListener('click', goToPrevMatch);
        }

        const nextBtn = document.getElementById('note-search-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', goToNextMatch);
        }
    }

    function initTocToggle() {
        const toc = document.querySelector('.note-toc');
        const toggleBtn = document.getElementById('toc-toggle-btn');

        if (!toc || !toggleBtn) {
            return;
        }

        const icon = toggleBtn.querySelector('i');
        const isHidden = localStorage.getItem('toc-hidden') === 'true';

        if (isHidden) {
            toc.classList.add('note-toc--hidden');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-list');
        } else {
            icon.classList.remove('fa-list');
            icon.classList.add('fa-times');
        }

        toggleBtn.addEventListener('click', () => {
            toc.classList.toggle('note-toc--hidden');

            if (toc.classList.contains('note-toc--hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-list');
                localStorage.setItem('toc-hidden', 'true');
            } else {
                icon.classList.remove('fa-list');
                icon.classList.add('fa-times');
                localStorage.setItem('toc-hidden', 'false');
            }
        });
    }

    // Global error handler for uncaught errors
    window.addEventListener('error', (event) => {
        console.error('Global error caught:', event.error);
        
        if (event.error && event.error.message) {
            console.error('Error details:', event.error.message);
        }
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
        console.error('Unhandled promise rejection:', event.reason);
    });

    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        init();
        initTocToggle();

        const missingLibs = detectMissingLibraries();
        if (missingLibs.length > 0) {
            console.warn('缺失的库:', missingLibs);
        }
    });
})();

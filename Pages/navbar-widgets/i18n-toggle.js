(function () {
    'use strict';

    var STORAGE_KEY = 'negiao.preferred-lang';
    var SUPPORTED_LANGS = ['zh', 'en'];
    var COMMON_TEXT_PAIRS = [
        ['返回首页', 'Back Home'],
        ['返回索引', 'Back to Index'],
        ['打开菜单', 'Open Menu'],
        ['关闭菜单', 'Close Menu'],
        ['项目展示', 'Projects'],
        ['项目', 'Projects'],
        ['笔记', 'Notes'],
        ['技术笔记', 'Technical Notes'],
        ['课程表', 'Schedule'],
        ['联系我', 'Contact'],
        ['探索项目', 'Explore Projects'],
        ['查看演示', 'View Demo'],
        ['查看词云', 'View Word Cloud'],
        ['查看笔记', 'View Note'],
        ['发送邮件', 'Send Email'],
        ['访问 GitHub', 'Visit GitHub'],
        ['QQ 联系', 'QQ Chat'],
        ['快速导航', 'Quick Links'],
        ['联系方式', 'Contact Info'],
        ['研究专题', 'Research Topics'],
        ['比赛项目', 'Competition Project'],
        ['学习笔记', 'Study Notes'],
        ['数据可视化', 'Data Visualization'],
        ['时空分析', 'Spatiotemporal Analysis'],
        ['地理数据', 'Geospatial Data'],
        ['全栈开发', 'Full-Stack Development'],
        ['技术笔记分享', 'Technical Notes Sharing'],
        ['专注于 WebGIS 开发、数据可视化与GIS', 'Focused on WebGIS development, data visualization, and GIS'],
        ['致力于GIS应用、开发领域的学习。', 'Dedicated to learning GIS applications and development.'],
        ['用 ❤️ 和现代技术构建', 'Built with ❤️ and modern technologies'],
        ['笔记索引', 'Notes Index'],
        ['技术学习心得与实践总结', 'Technical learning notes and practical takeaways'],
        ['每日记录', 'Daily Records'],
        ['项目与工具', 'Projects & Tools'],
        ['技术笔记', 'Technical Notes'],
        ['阅读笔记', 'Read Note'],
        ['开始测试', 'Start Quiz'],
        ['打开编辑器', 'Open Editor'],
        ['打开工具', 'Open Tool'],
        ['查看详情', 'View Details'],
        ['查看项目', 'View Project'],
        ['查看模板', 'View Template'],
        ['加载失败', 'Load failed'],
        ['正在加载笔记内容...', 'Loading note content...'],
        ['切换目录显示', 'Toggle table of contents'],
        ['Toggle Table of Contents', '切换目录显示'],
        ['单词测试', 'Word Quiz'],
        ['单词学习记录', 'Vocabulary Learning Log'],
        ['周迪的学习记录', "Zhou Di's Learning Log"],
        ['二维码解码', 'QR Decoder'],
        ['二维码生成器', 'QR Code Generator'],
        ['Markdown 编辑器', 'Markdown Editor'],
        ['笔记模板', 'Note Template'],
        ['每日课程', 'Daily Schedule'],
        ['实时显示当前课程和下节课安排', 'Shows current and next class in real time'],
        ['请选择正确的中文含义 (答对自动跳转)', 'Choose the correct Chinese meaning (auto-advance on correct answer)'],
        ['请选择正确的中文含义', 'Choose the correct Chinese meaning'],
        ['重新开始', 'Restart'],
        ['下一题', 'Next Question'],
        ['正确', 'Correct'],
        ['错误', 'Incorrect'],
        ['开始测试', 'Start Quiz'],
        ['请先选择一个选项', 'Please choose an option first'],
        ['当前得分', 'Score'],
        ['加载中', 'Loading'],
        ['更新中', 'Updating'],
        ['返回首页 ←', '← Back Home'],
        ['← 返回首页', '← Back Home'],
        ['利川市', 'Lichuan'],
        ['淮安市', 'Huaian'],
        ['荣成市', 'Rongcheng'],
        ['象山县', 'Xiangshan'],
        ['铜仁市', 'Tongren'],
        ['隰县', 'Xi County'],
        ['季节变化', 'Seasonal Variation'],
        ['年内变化', 'Annual Cycle'],
        ['年际变化', 'Interannual Variation'],
        ['地区词云图', 'Regional Word Cloud'],
        ['宝藏小城', 'Treasure City'],
        ['总览', 'Overview'],
        ['大会', 'Conference'],
        ['概览', 'Overview'],
        ['返回', 'Back'],
        ['微信', 'WeChat'],
        ['邮箱', 'Email'],
        ['单词', 'Vocabulary'],
        ['工具', 'Tool'],
        ['模板', 'Template'],
        ['GitHub 项目', 'GitHub Project'],
        ['在线工具', 'Online Tool'],
        ['纯文本模式', 'Plain Text Mode'],
        ['正常模式', 'Normal Mode'],
        ['章', 'Chapter'],
        ['段', 'Section'],
        ['目录', 'Contents']
    ];

    var PAGE_TITLE_MAP = {
        'index.html': {
            zh: 'NEGIAO - 主页',
            en: 'NEGIAO - GitHub Page'
        },
        'Pages/notes.html': {
            zh: '笔记索引 - NEGIAO',
            en: 'Notes Index - NEGIAO'
        },
        'Pages/schedule.html': {
            zh: '课程表 - NEGIAO',
            en: 'Schedule - NEGIAO'
        },
        'Others/decoder.html': {
            zh: 'NEGIAO工具 - 二维码解码',
            en: 'NEGIAO Tools - QR Decoder'
        },
        'Pages/Note/word-quiz.html': {
            zh: '单词测试 - NEGIAO',
            en: 'Word Quiz - NEGIAO'
        },
        'Pages/Note/gallery.html': {
            zh: '笔记画廊 - NEGIAO',
            en: 'Note Gallery - NEGIAO'
        },
        'Pages/Note/markdown_editor.html': {
            zh: 'Markdown 编辑器 - NEGIAO',
            en: 'Markdown Editor - NEGIAO'
        },
        'Pages/Note/note-template.html': {
            zh: '笔记模板 - NEGIAO',
            en: 'Note Template - NEGIAO'
        },
        'Geoscene_宝藏小城/awesome.html': {
            zh: '宝藏小城 - 总览',
            en: 'Treasure City - Overview'
        },
        'Geoscene_宝藏小城/wordcloud.html': {
            zh: '地区词云图 - NEGIAO',
            en: 'Regional Word Cloud - NEGIAO'
        }
    };

    var PAGE_META_MAP = {
        'index.html': {
            description: {
                zh: 'NEGIAO的个人 GitHub 页面 - WebGIS、数据可视化和地理空间技术',
                en: 'NEGIAO\'s personal GitHub page focused on WebGIS, data visualization, and geospatial technologies.'
            }
        },
        'Pages/notes.html': {
            description: {
                zh: 'NEGIAO的技术笔记索引 - WebGIS、数据可视化和前端开发学习心得与实践总结',
                en: 'NEGIAO\'s technical notes index with learning takeaways from WebGIS, data visualization, and frontend development.'
            }
        },
        'Pages/schedule.html': {
            description: {
                zh: 'NEGIAO的日常课表 - 实时显示当前课程和下节课安排',
                en: 'NEGIAO\'s daily schedule, showing the current and next classes in real time.'
            }
        },
        'Others/decoder.html': {
            description: {
                zh: 'NEGIAO工具 - 二维码解码页面',
                en: 'NEGIAO Tools - QR code decoding page.'
            }
        }
    };

    var CITY_TRANSLATIONS = {
        '利川市': 'Lichuan',
        '淮安市': 'Huaian',
        '荣成市': 'Rongcheng',
        '象山县': 'Xiangshan',
        '铜仁市': 'Tongren',
        '隰县': 'Xi County'
    };

    var SECTION_TRANSLATIONS = {
        '季节变化': 'Seasonal Variation',
        '年内变化': 'Annual Cycle',
        '年际变化': 'Interannual Variation'
    };

    var textMap = {
        zh: {},
        en: {}
    };

    COMMON_TEXT_PAIRS.forEach(function (pair) {
        var zhText = pair[0];
        var enText = pair[1];
        textMap.zh[enText] = zhText;
        textMap.en[zhText] = enText;
    });

    // 预编译翻译正则：将全部词条合并为单个正则（按长度降序保证最长优先匹配）。
    // 旧实现对每个文本节点执行 Object.keys().sort() + 逐词 indexOf，
    // 复杂度为 O(文本节点数 × 词条数 × 文本长度)，是大页面 CPU 占用的主要来源之一。
    var compiledPattern = { zh: null, en: null };
    function getCompiledPattern(lang) {
        if (compiledPattern[lang] === null) {
            var keys = Object.keys(textMap[lang]).sort(function (a, b) {
                return b.length - a.length;
            });
            compiledPattern[lang] = keys.length
                ? new RegExp(keys.map(escapeRegExp).join('|'), 'g')
                : false;
        }
        return compiledPattern[lang] || null;
    }

    // 整棵子树跳过的选择器（含 data-no-i18n：笔记正文等用户内容不参与 UI 词条翻译）
    var SKIP_SELECTOR = 'script, style, noscript, code, pre, textarea, svg, canvas, math, .negiao-lang-toggle, [data-no-i18n]';

    var OBSERVE_OPTIONS = {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['title', 'aria-label', 'data-title', 'placeholder', 'alt']
    };

    // 增量翻译队列：超过上限则退化为整页扫描一次
    var MAX_PENDING_ROOTS = 40;

    var state = {
        lang: normalizeLang(readStoredLanguage()),
        observer: null,
        rafId: 0,
        isApplying: false,
        pendingRoots: [],
        pendingFull: false
    };

    function normalizeLang(lang) {
        return lang === 'en' ? 'en' : 'zh';
    }

    function readStoredLanguage() {
        try {
            return window.localStorage.getItem(STORAGE_KEY) || '';
        } catch (error) {
            return '';
        }
    }

    function writeStoredLanguage(lang) {
        try {
            window.localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            // Ignore storage failures in private mode or blocked storage environments.
        }
    }

    function detectDefaultLanguage() {
        var stored = readStoredLanguage();
        if (stored) {
            return normalizeLang(stored);
        }

        var browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        return browserLang.indexOf('en') === 0 ? 'en' : 'zh';
    }

    function getPagePath() {
        var path = (window.location.pathname || '').replace(/\\/g, '/');
        if (!path) {
            return 'index.html';
        }
        var repoMarker = 'NEGIAO.github.io/';
        var markerIndex = path.indexOf(repoMarker);
        if (markerIndex !== -1) {
            path = path.slice(markerIndex + repoMarker.length);
        } else if (path.charAt(0) === '/') {
            path = path.slice(1);
        }
        return path;
    }

    function escapeRegExp(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function translateString(input, lang) {
        if (typeof input !== 'string' || !input) {
            return input;
        }

        var pattern = getCompiledPattern(lang);
        if (!pattern) {
            return input;
        }

        pattern.lastIndex = 0;
        if (!pattern.test(input)) {
            return input;
        }

        var map = textMap[lang];
        pattern.lastIndex = 0;
        return input.replace(pattern, function (matched) {
            return Object.prototype.hasOwnProperty.call(map, matched) ? map[matched] : matched;
        });
    }

    function resolveGeosceneTitle(path, lang) {
        if (path.indexOf('Geoscene_宝藏小城/') === -1) {
            return '';
        }

        var fileName = path.split('/').pop() || '';
        if (fileName === 'awesome.html') {
            return lang === 'en' ? 'Treasure City - Overview' : '宝藏小城 - 总览';
        }
        if (fileName === 'wordcloud.html') {
            return lang === 'en' ? 'Regional Word Cloud - NEGIAO' : '地区词云图 - NEGIAO';
        }

        var cityName = '';
        Object.keys(CITY_TRANSLATIONS).forEach(function (key) {
            if (fileName.indexOf(key) !== -1) {
                cityName = key;
            }
        });

        var sectionName = '';
        Object.keys(SECTION_TRANSLATIONS).forEach(function (key) {
            if (fileName.indexOf(key) !== -1) {
                sectionName = key;
            }
        });

        if (!cityName || !sectionName) {
            return '';
        }

        if (lang === 'en') {
            return CITY_TRANSLATIONS[cityName] + ' - ' + SECTION_TRANSLATIONS[sectionName];
        }

        return cityName + ' - ' + sectionName;
    }

    function resolvePageTitle(path, lang) {
        var fileName = path.split('/').pop() || '';
        var pageKey = path;

        if (PAGE_TITLE_MAP[pageKey]) {
            return PAGE_TITLE_MAP[pageKey][lang];
        }

        var geosceneTitle = resolveGeosceneTitle(path, lang);
        if (geosceneTitle) {
            return geosceneTitle;
        }

        if (fileName === 'note-viewer.html') {
            return translateString(document.title || '', lang);
        }

        return translateString(document.title || '', lang);
    }

    function applyMetaContent(selector, value) {
        if (!value) {
            return;
        }

        document.querySelectorAll(selector).forEach(function (element) {
            // 仅在值变化时写入：无条件 setAttribute 会触发 MutationObserver，
            // 曾导致“翻译→变更→再翻译”的无限循环
            if (element.getAttribute('content') !== value) {
                element.setAttribute('content', value);
            }
        });
    }

    function applyPageMeta(path, lang) {
        var title = resolvePageTitle(path, lang);
        if (title) {
            if (document.title !== title) {
                document.title = title;
            }
            var titleHolder = document.getElementById('page-title');
            if (titleHolder && titleHolder.textContent !== title) {
                titleHolder.textContent = title;
            }
        }

        var meta = PAGE_META_MAP[path];
        if (meta && meta.description && meta.description[lang]) {
            var description = meta.description[lang];
            var descriptionMeta = document.querySelector('meta[name="description"]');
            if (descriptionMeta) {
                descriptionMeta.setAttribute('content', description);
            }
            applyMetaContent('meta[property="og:description"]', description);
            applyMetaContent('meta[property="twitter:description"]', description);
        }

        if (title) {
            applyMetaContent('meta[property="og:title"]', title);
            applyMetaContent('meta[property="twitter:title"]', title);
        }
    }

    function isInsideSkipped(element) {
        return Boolean(element && element.closest && element.closest(SKIP_SELECTOR));
    }

    function translateTextNodes(root, lang) {
        if (!root) {
            return;
        }
        if (root.nodeType === 3) {
            root = root.parentElement;
        }
        if (!root || root.nodeType !== 1 || isInsideSkipped(root)) {
            return;
        }

        // SHOW_ELEMENT + FILTER_REJECT 可整棵跳过被排除的子树（如笔记正文），
        // 避免旧实现对每个文本节点做 closest() 回溯，整体从 O(全页) 降为 O(界面元素)
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (node.nodeType === 1) {
                    return node.matches(SKIP_SELECTOR)
                        ? NodeFilter.FILTER_REJECT
                        : NodeFilter.FILTER_SKIP;
                }
                if (!node.nodeValue || !node.nodeValue.trim()) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        var current = walker.nextNode();
        while (current) {
            var original = current.nodeValue;
            var translated = translateString(original, lang);
            if (translated !== original) {
                current.nodeValue = translated;
            }
            current = walker.nextNode();
        }
    }

    function translateAttributes(root, lang) {
        if (!root) {
            return;
        }
        if (root.nodeType === 3) {
            root = root.parentElement;
        }
        if (!root || root.nodeType !== 1 || isInsideSkipped(root)) {
            return;
        }

        var selectors = '[title], [aria-label], [data-title], [placeholder], img[alt]';
        var elements = [];
        if (root.matches(selectors)) {
            elements.push(root);
        }
        root.querySelectorAll(selectors).forEach(function (element) {
            elements.push(element);
        });

        elements.forEach(function (element) {
            if (isInsideSkipped(element)) {
                return;
            }
            ['title', 'aria-label', 'data-title', 'placeholder', 'alt'].forEach(function (attributeName) {
                if (!element.hasAttribute(attributeName)) {
                    return;
                }
                var value = element.getAttribute(attributeName);
                if (!value) {
                    return;
                }
                var translated = translateString(value, lang);
                if (translated !== value) {
                    element.setAttribute(attributeName, translated);
                }
            });
        });
    }

    function syncToggleButtons(lang) {
        var text = lang === 'en' ? '中文' : 'EN';
        var label = lang === 'en' ? 'Switch to Chinese' : '切换为 English';
        var pressed = String(lang === 'en');

        var buttons = document.querySelectorAll('.negiao-lang-toggle');
        buttons.forEach(function (button) {
            // 仅在值变化时写入，避免每次同步都产生 DOM 变更记录
            if (button.textContent !== text) {
                button.textContent = text;
            }
            if (button.getAttribute('aria-label') !== label) {
                button.setAttribute('aria-label', label);
            }
            if (button.getAttribute('title') !== label) {
                button.setAttribute('title', label);
            }
            if (button.getAttribute('aria-pressed') !== pressed) {
                button.setAttribute('aria-pressed', pressed);
            }
        });
    }

    function createToggleButton(isFloating) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'negiao-lang-toggle' + (isFloating ? ' negiao-lang-toggle--floating' : '');
        button.setAttribute('aria-pressed', 'false');
        button.addEventListener('click', function () {
            setLanguage(state.lang === 'en' ? 'zh' : 'en');
        });
        return button;
    }

    function injectStyles() {
        if (document.getElementById('negiao-lang-toggle-styles')) {
            return;
        }

        var style = document.createElement('style');
        style.id = 'negiao-lang-toggle-styles';
        style.textContent = [
            '.negiao-lang-toggle{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;min-width:4.5rem;height:2.4rem;padding:0 .9rem;border:1px solid rgba(255,255,255,.12);border-radius:9999px;background:rgba(0,217,255,.14);color:var(--text,#fff);font:700 .85rem/1 var(--font-sans,inherit);letter-spacing:.06em;cursor:pointer;box-shadow:0 8px 20px rgba(0,0,0,.18);transition:transform .18s ease,background .18s ease,border-color .18s ease,color .18s ease;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}',
            '.negiao-lang-toggle:hover{transform:translateY(-1px);background:rgba(0,217,255,.22);border-color:rgba(0,217,255,.45)}',
            '.negiao-lang-toggle:focus-visible{outline:2px solid var(--primary,#00d9ff);outline-offset:2px}',
            '.negiao-lang-toggle--floating{position:fixed;right:max(1rem,env(safe-area-inset-right));bottom:max(1rem,env(safe-area-inset-bottom));z-index:1065}',
            '.navbar__container .negiao-lang-toggle--nav{position:absolute;top:50%;transform:translateY(-50%);z-index:1}',
            '.navbar__container .negiao-lang-toggle--nav-alone{right:var(--space-md)}',
            '.navbar__container .negiao-lang-toggle--nav-with-menu{right:3.7rem}',
            '.sidebar__footer .negiao-lang-toggle{margin-top:0.5rem}',
            '@media (max-width:768px){.negiao-lang-toggle{min-width:3.6rem;height:2rem;padding:0 .75rem;font-size:.75rem}.navbar__container .negiao-lang-toggle--nav-alone{right:var(--space-sm)}.navbar__container .negiao-lang-toggle--nav-with-menu{right:4rem}.negiao-lang-toggle--floating{right:max(.75rem,env(safe-area-inset-right));bottom:max(.75rem,env(safe-area-inset-bottom))}}'
        ].join('');
        document.head.appendChild(style);
    }

    function mountButtons() {
        var selectors = ['.sidebar__footer', '.navbar__container'];
        var mounted = false;

        selectors.forEach(function (selector) {
            var container = document.querySelector(selector);
            if (!container) {
                return;
            }
            if (container.querySelector('.negiao-lang-toggle')) {
                mounted = true;
                return;
            }
            var button = createToggleButton(false);
            if (selector === '.navbar__container') {
                button.classList.add('negiao-lang-toggle--nav');
                button.classList.add(container.querySelector('.mobile-menu-toggle') ? 'negiao-lang-toggle--nav-with-menu' : 'negiao-lang-toggle--nav-alone');
            }
            container.appendChild(button);
            mounted = true;
        });

        if (!mounted) {
            var floatingButton = createToggleButton(true);
            document.body.appendChild(floatingButton);
        }
    }

    function translatePage(lang, roots) {
        if (state.isApplying) {
            return;
        }

        state.isApplying = true;

        // 应用期间断开监听：自身写入不再产生变更记录（disconnect 会清空待处理队列），
        // 从根源上杜绝“翻译 → 触发变更 → 再翻译”的无限循环（此前 CPU 打满的主因）
        var wasObserving = Boolean(state.observer);
        if (wasObserving) {
            state.observer.disconnect();
        }

        var docEl = document.documentElement;
        var langAttr = lang === 'en' ? 'en' : 'zh-CN';
        if (docEl.getAttribute('lang') !== langAttr) {
            docEl.setAttribute('lang', langAttr);
        }
        if (docEl.getAttribute('data-lang') !== lang) {
            docEl.setAttribute('data-lang', lang);
        }

        applyPageMeta(getPagePath(), lang);

        if (roots && roots.length) {
            // 增量模式：只翻译发生变更的子树
            roots.forEach(function (node) {
                translateTextNodes(node, lang);
                translateAttributes(node, lang);
            });
        } else {
            var root = document.body || document.documentElement;
            if (root) {
                translateTextNodes(root, lang);
                translateAttributes(root, lang);
            }
        }

        syncToggleButtons(lang);

        if (wasObserving) {
            observeDocument();
        }
        state.isApplying = false;
    }

    // 去重：丢弃已脱离文档的节点、被其他待处理根包含的节点
    function dedupeRoots(list) {
        var out = [];
        for (var i = 0; i < list.length; i++) {
            var node = list[i];
            if (!node) {
                continue;
            }
            if (node.nodeType === 3) {
                node = node.parentElement;
            }
            if (!node || node.nodeType !== 1 || !node.isConnected) {
                continue;
            }
            var covered = false;
            for (var j = 0; j < out.length; j++) {
                if (out[j] === node || out[j].contains(node)) {
                    covered = true;
                    break;
                }
            }
            if (!covered) {
                out.push(node);
            }
        }
        return out;
    }

    function queueRoots(targets) {
        if (state.pendingFull) {
            return;
        }
        for (var i = 0; i < targets.length; i++) {
            if (state.pendingRoots.length >= MAX_PENDING_ROOTS) {
                state.pendingFull = true;
                state.pendingRoots.length = 0;
                return;
            }
            state.pendingRoots.push(targets[i]);
        }
    }

    function scheduleTranslate(lang, targets) {
        if (targets && targets.length) {
            queueRoots(targets);
        } else {
            state.pendingFull = true;
            state.pendingRoots.length = 0;
        }

        if (state.rafId) {
            return;
        }
        state.rafId = requestAnimationFrame(function () {
            state.rafId = 0;
            var roots = state.pendingFull ? null : dedupeRoots(state.pendingRoots);
            state.pendingFull = false;
            state.pendingRoots = [];
            translatePage(state.lang, roots);
        });
    }

    function setLanguage(lang) {
        var normalized = normalizeLang(lang);
        if (state.lang === normalized) {
            syncToggleButtons(normalized);
            return;
        }

        state.lang = normalized;
        writeStoredLanguage(normalized);
        scheduleTranslate(normalized);
    }

    function observeDocument() {
        state.observer.observe(document.documentElement, OBSERVE_OPTIONS);
    }

    function initObserver() {
        if (!('MutationObserver' in window)) {
            return;
        }

        state.observer = new MutationObserver(function (mutations) {
            if (state.isApplying) {
                return;
            }

            // 收集具体变更目标，按子树增量翻译，不再对整页做全量扫描
            var targets = [];
            for (var i = 0; i < mutations.length; i++) {
                var mutation = mutations[i];
                if (mutation.type === 'childList') {
                    for (var j = 0; j < mutation.addedNodes.length; j++) {
                        targets.push(mutation.addedNodes[j]);
                    }
                } else if (mutation.type === 'characterData' || mutation.type === 'attributes') {
                    targets.push(mutation.target);
                }
            }

            if (targets.length) {
                scheduleTranslate(state.lang, targets);
            }
        });

        observeDocument();
    }

    function init() {
        injectStyles();
        mountButtons();
        state.lang = detectDefaultLanguage();
        writeStoredLanguage(state.lang);
        translatePage(state.lang);
        initObserver();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();

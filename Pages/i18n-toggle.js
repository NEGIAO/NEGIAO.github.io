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

    var state = {
        lang: normalizeLang(readStoredLanguage()),
        observer: null,
        rafId: 0,
        isApplying: false
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

        var map = textMap[lang];
        var keys = Object.keys(map).sort(function (a, b) {
            return b.length - a.length;
        });

        var result = input;
        keys.forEach(function (key) {
            if (result.indexOf(key) !== -1) {
                result = result.split(key).join(map[key]);
            }
        });

        return result;
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
            element.setAttribute('content', value);
        });
    }

    function applyPageMeta(path, lang) {
        var title = resolvePageTitle(path, lang);
        if (title) {
            document.title = title;
            var titleHolder = document.getElementById('page-title');
            if (titleHolder) {
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

    function shouldSkipTextNode(node) {
        if (!node || !node.parentElement) {
            return true;
        }

        return Boolean(node.parentElement.closest('script, style, noscript, code, pre, textarea, svg, canvas, math, .negiao-lang-toggle, [data-no-i18n]'));
    }

    function translateTextNodes(root, lang) {
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (!node || !node.nodeValue || !node.nodeValue.trim()) {
                    return NodeFilter.FILTER_REJECT;
                }
                return shouldSkipTextNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
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
        var selectors = '[title], [aria-label], [data-title], [placeholder], img[alt]';
        root.querySelectorAll(selectors).forEach(function (element) {
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
        var buttons = document.querySelectorAll('.negiao-lang-toggle');
        buttons.forEach(function (button) {
            button.textContent = lang === 'en' ? '中文' : 'EN';
            button.setAttribute('aria-label', lang === 'en' ? 'Switch to Chinese' : '切换为 English');
            button.setAttribute('title', lang === 'en' ? 'Switch to Chinese' : '切换为 English');
            button.setAttribute('aria-pressed', String(lang === 'en'));
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
            '.negiao-lang-toggle--floating{position:fixed;right:1rem;bottom:1rem;z-index:1065}',
            '.navbar__container .negiao-lang-toggle,.sidebar__footer .negiao-lang-toggle,.mobile-menu__footer .negiao-lang-toggle{margin-left:.5rem;}',
            '.sidebar__footer .negiao-lang-toggle{margin-top:0.5rem}',
            '.mobile-menu__footer .negiao-lang-toggle{margin-top:0}',
            '@media (max-width:768px){.negiao-lang-toggle--floating{right:.75rem;bottom:.75rem}}'
        ].join('');
        document.head.appendChild(style);
    }

    function mountButtons() {
        var selectors = ['.sidebar__footer', '.navbar__container', '.mobile-menu__footer'];
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
            container.appendChild(button);
            mounted = true;
        });

        if (!mounted) {
            var floatingButton = createToggleButton(true);
            document.body.appendChild(floatingButton);
        }
    }

    function translatePage(lang) {
        if (state.isApplying) {
            return;
        }

        state.isApplying = true;

        var root = document.body || document.documentElement;
        document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
        document.documentElement.setAttribute('data-lang', lang);

        applyPageMeta(getPagePath(), lang);
        if (root) {
            translateTextNodes(root, lang);
            translateAttributes(root, lang);
        }

        syncToggleButtons(lang);
        state.isApplying = false;
    }

    function scheduleTranslate(lang) {
        if (state.rafId) {
            cancelAnimationFrame(state.rafId);
        }
        state.rafId = requestAnimationFrame(function () {
            state.rafId = 0;
            translatePage(lang);
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

    function initObserver() {
        if (!('MutationObserver' in window)) {
            return;
        }

        state.observer = new MutationObserver(function (mutations) {
            if (state.isApplying) {
                return;
            }

            var shouldRefresh = mutations.some(function (mutation) {
                return mutation.type === 'childList' || mutation.type === 'characterData' || mutation.type === 'attributes';
            });

            if (shouldRefresh) {
                scheduleTranslate(state.lang);
            }
        });

        state.observer.observe(document.documentElement, {
            subtree: true,
            childList: true,
            characterData: true,
            attributes: true,
            attributeFilter: ['title', 'aria-label', 'data-title', 'placeholder', 'alt']
        });
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

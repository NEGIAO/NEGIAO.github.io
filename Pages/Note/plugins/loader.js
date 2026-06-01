/**
 * Note Viewer Plugin Loader
 * 为特定 md 文章提供增强功能的插件系统
 *
 * 插件接口：
 *   window.registerNotePlugin(noteName, {
 *       meta: { name, version },             // 可选，插件自描述
 *       init({ container, noteName, basePath, utils, registerCleanup }),
 *       destroy()                             // 可选，资源清理
 *   })
 *
 * 公共工具：
 *   window.NotePluginUtils — loadCSS / loadScript / getPluginPath / safeSelector
 *
 * note-viewer.js 在渲染完成后调用：
 *   window.loadNotePlugins(noteName, container)
 */

(function () {
    'use strict';

    var registry = {};
    var loaded = [];   // 已初始化的插件 { noteName, plugin, basePath }

    // 已知插件目录映射：noteName → 目录名（目录名与 noteName 不同时才需要配置）
    var pluginDirs = {
        'Google_tiles': 'Google_tiles',
        'word-learning-record': 'word-learning-record'
    };

    /* ========================================
     * 公共工具函数
     * ======================================== */

    function getPluginPath(noteName) {
        var dirName = pluginDirs[noteName] || noteName;
        return '../plugins/' + dirName + '/';
    }

    function safeSelector(tag, attr, value) {
        // 防止 Selector Injection：逐个比较而非拼接属性选择器
        var list = document.querySelectorAll(tag);
        for (var i = 0; i < list.length; i++) {
            if (list[i].getAttribute(attr) === value) return list[i];
        }
        return null;
    }

    function loadCSS(href) {
        return new Promise(function (resolve) {
            if (safeSelector('link', 'href', href)) { resolve(true); return; }
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = function () { resolve(true); };
            link.onerror = function () { resolve(false); };
            document.head.appendChild(link);
        });
    }

    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            if (safeSelector('script', 'src', src)) { resolve(); return; }
            var script = document.createElement('script');
            script.src = src;
            script.onload = function () { resolve(); };
            script.onerror = function () { reject(new Error('Failed to load ' + src)); };
            document.head.appendChild(script);
        });
    }

    window.NotePluginUtils = {
        loadCSS: loadCSS,
        loadScript: loadScript,
        getPluginPath: getPluginPath,
        safeSelector: safeSelector
    };

    /* ========================================
     * 插件注册
     * ======================================== */

    window.registerNotePlugin = function (noteName, plugin) {
        if (plugin && typeof plugin.init === 'function') {
            registry[noteName] = plugin;
            console.log('[PluginLoader] 已注册插件: "' + noteName + '"');
        }
    };

    /* ========================================
     * 插件加载与初始化
     * ======================================== */

    window.loadNotePlugins = async function (noteName, container) {
        // 仅对已知插件尝试加载，无插件的笔记直接跳过
        if (!pluginDirs[noteName]) { return; }

        console.log('[PluginLoader] 尝试加载插件: "' + noteName + '"');

        await loadPluginScript(noteName);

        var plugin = registry[noteName];
        if (!plugin) {
            console.warn('[PluginLoader] 插件 "' + noteName + '" 注册失败，跳过');
            return;
        }

        console.log('[PluginLoader] 找到插件 "' + noteName + '"，正在初始化...');

        var dirName = pluginDirs[noteName];
        var basePath = '../plugins/' + dirName + '/';

        // 自动加载插件目录下的 styles.css（如果存在）
        var stylesLoaded = await loadCSS(basePath + 'styles.css');
        if (stylesLoaded) {
            console.log('[PluginLoader] 自动加载 styles.css: "' + noteName + '"');
        }

        // 构建清理回调列表
        var cleanups = [];
        function registerCleanup(fn) {
            if (typeof fn === 'function') cleanups.push(fn);
        }

        try {
            await plugin.init({
                container: container,
                noteName: noteName,
                basePath: basePath,
                utils: window.NotePluginUtils,
                registerCleanup: registerCleanup
            });

            // 记录已加载的插件（含清理回调）
            loaded.push({
                noteName: noteName,
                plugin: plugin,
                basePath: basePath,
                cleanups: cleanups
            });

            console.log('[PluginLoader] 插件 "' + noteName + '" 初始化完成');
        } catch (err) {
            console.warn('[PluginLoader] 插件 "' + noteName + '" 初始化失败:', err);
        }
    };

    /* ========================================
     * 插件销毁（供 SPA 路由切换时调用）
     * ======================================== */

    window.destroyNotePlugin = function (noteName) {
        for (var i = loaded.length - 1; i >= 0; i--) {
            if (loaded[i].noteName !== noteName) continue;

            var entry = loaded[i];

            // 执行插件自身的 destroy
            if (entry.plugin.destroy) {
                try { entry.plugin.destroy(); }
                catch (e) { console.warn('[PluginLoader] destroy 失败:', e); }
            }

            // 执行通过 registerCleanup 注册的清理回调
            entry.cleanups.forEach(function (fn) {
                try { fn(); }
                catch (e) { console.warn('[PluginLoader] 清理回调失败:', e); }
            });

            // 移除插件注入的 CSS（link.href 是绝对路径，用 includes 匹配目录名）
            var dirName = entry.noteName;
            document.querySelectorAll('link[rel="stylesheet"]').forEach(function (link) {
                if (link.href.includes('/plugins/' + dirName + '/')) link.remove();
            });

            // 移除插件注入的 <style id="...">
            // （插件应在 destroy 中自行清理，此处为兜底）

            // 清空 container
            var container = document.getElementById('note-content');
            if (container) container.innerHTML = '';

            loaded.splice(i, 1);
            delete registry[noteName];
            console.log('[PluginLoader] 插件 "' + noteName + '" 已销毁');
            return;
        }
    };

    /* ========================================
     * 内部：动态加载插件脚本
     * ======================================== */

    function loadPluginScript(noteName) {
        return new Promise(function (resolve) {
            if (registry[noteName]) { resolve(); return; }

            // 仅对已知插件目录尝试加载，避免无插件的笔记产生 404
            if (!pluginDirs[noteName]) { resolve(); return; }

            var dirName = pluginDirs[noteName];
            tryLoadScript('../plugins/' + dirName + '/index.js', function (loaded) {
                if (loaded) { resolve(); }
                else {
                    tryLoadScript('../plugins/' + dirName + '.js', function () {
                        resolve();
                    });
                }
            });
        });
    }

    function tryLoadScript(src, callback) {
        var script = document.createElement('script');
        script.src = src;

        script.onload = function () {
            console.log('[PluginLoader] 脚本 "' + src + '" 加载成功');
            callback(true);
        };

        script.onerror = function () {
            console.log('[PluginLoader] 脚本 "' + src + '" 不存在，跳过');
            callback(false);
        };

        document.head.appendChild(script);
    }

    // ==================== 共享工具函数 ====================

    /**
     * TOC 切换按钮初始化（共享）
     * 用于 note-viewer、gallery、note-template 等有侧边 TOC 的页面
     */
    window.initTocToggle = function () {
        var toc = document.querySelector('.note-toc');
        var toggleBtn = document.getElementById('toc-toggle-btn');
        if (!toc || !toggleBtn) return;

        var icon = toggleBtn.querySelector('i');
        var isHidden = localStorage.getItem('toc-hidden') === 'true';

        if (isHidden) {
            toc.classList.add('note-toc--hidden');
            if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-list'); }
        } else {
            if (icon) { icon.classList.remove('fa-list'); icon.classList.add('fa-times'); }
        }

        toggleBtn.addEventListener('click', function () {
            toc.classList.toggle('note-toc--hidden');
            if (toc.classList.contains('note-toc--hidden')) {
                if (icon) { icon.classList.remove('fa-times'); icon.classList.add('fa-list'); }
                localStorage.setItem('toc-hidden', 'true');
            } else {
                if (icon) { icon.classList.remove('fa-list'); icon.classList.add('fa-times'); }
                localStorage.setItem('toc-hidden', 'false');
            }
        });
    };

    /**
     * Markdown 解析工具函数（共享）
     * 用于 gallery、note-template 等需要解析 markdown 的页面
     */
    window.processMarkdown = function (md, callback) {
        requestAnimationFrame(function () {
            var html;
            try {
                if (window.marked) {
                    html = window.marked.parse(md);
                } else if (window.markdownit) {
                    html = window.markdownit().render(md);
                } else {
                    html = md;
                }
                callback(html);
            } catch (e) {
                console.error('Error parsing markdown:', e);
                callback('<p>Error parsing markdown content.</p>');
            }
        });
    };
})();

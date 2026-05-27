/**
 * Note Viewer Plugin Loader
 * 为特定 md 文章提供增强功能的插件系统
 *
 * 插件接口：
 *   window.registerNotePlugin(noteName, { init({ container, noteName }) })
 *
 * note-viewer.js 在渲染完成后调用：
 *   window.loadNotePlugins(noteName, container)
 */

(function () {
    const registry = {};

    /**
     * 注册一个笔记增强插件
     * @param {string} noteName — 对应 md 文件名（不含 .md）
     * @param {{ init: function }} plugin
     */
    window.registerNotePlugin = function (noteName, plugin) {
        if (plugin && typeof plugin.init === 'function') {
            registry[noteName] = plugin;
            console.log(`[PluginLoader] 已注册插件: "${noteName}"`);
        }
    };

    /**
     * 渲染完成后由 note-viewer.js 调用
     * 先尝试动态加载 ./plugins/{noteName}.js，再执行已注册的 init
     */
    window.loadNotePlugins = async function (noteName, container) {
        console.log(`[PluginLoader] 尝试加载插件: "${noteName}"`);

        // 动态加载插件脚本（如果存在）
        await loadPluginScript(noteName);

        const plugin = registry[noteName];
        if (plugin) {
            console.log(`[PluginLoader] 找到插件 "${noteName}"，正在初始化...`);
            try {
                await plugin.init({ container, noteName });
                console.log(`[PluginLoader] 插件 "${noteName}" 初始化完成`);
            } catch (err) {
                console.warn(`[PluginLoader] 插件 "${noteName}" 初始化失败:`, err);
            }
        } else {
            console.log(`[PluginLoader] 未找到插件 "${noteName}"，跳过`);
        }
    };

    /**
     * 动态注入 <script> 加载插件，404 静默忽略
     */
    function loadPluginScript(noteName) {
        return new Promise((resolve) => {
            if (registry[noteName]) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = `./plugins/${noteName}.js`;

            script.onload = function () {
                console.log(`[PluginLoader] 脚本 "${noteName}.js" 加载成功`);
                resolve();
            };

            script.onerror = function () {
                // 插件不存在，静默忽略
                console.log(`[PluginLoader] 脚本 "${noteName}.js" 不存在，跳过`);
                resolve();
            };

            document.head.appendChild(script);
        });
    }
})();

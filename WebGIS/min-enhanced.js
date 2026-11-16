/* --------------------------
   说明：51.la 统计脚本（国内节点，轻量无阻塞）
   V3.7.1 网络瘦身：已下线 51.la 国际 SDK（403/503 异常）、MapMyVisitors 与 Google Analytics（国内不可达挂起 30s），
   释放网络并发槽位与控制台报错。
-------------------------- */
(function load51LaStats() {
    try {
        // 51.la SDK
        (function () {
            var s = document.createElement('script');
            s.charset = 'UTF-8';
            s.id = 'LA_COLLECT';
            s.src = '//sdk.51.la/js-sdk-pro.min.js';
            s.async = true;
            s.onload = function () {
            s.type = 'text/javascript';
                try {
                    if (window.LA && typeof LA.init === 'function') {
                        LA.init({
                            id: '3OVJu4iCpXi3wE8k',
                            ck: '3OVJu4iCpXi3wE8k',
                            autoTrack: true,
                            hashMode: true,
                            // 录屏采集持续消耗运行时性能,学习项目价值低,已关闭
                            screenRecord: false,
                        });
                        console.log('51.la SDK 已加载并初始化。');
                    } else {
                        console.log('51.la SDK 已加载，但 LA.init 不可用。');
                    }
                } catch (e) {
                    console.log('初始化 51.la (国际) 时出错：', e);
                }
            };
            s.onerror = function (e) {
                console.log('加载 51.la (国际) 脚本失败：', e);
            };
            document.head.appendChild(s);
        })();
        
    } catch (err) {
        console.log('加载 51.la 统计脚本时出错：', err);
    }
})();

/* --------------------------
   说明：延迟加载第三方统计脚本（V3.7.1 瘦身：已下线不可达的海外统计服务）
-------------------------- */
function registerDelayedStatsLoader() {
    // 预留扩展桩，所有海外阻塞死链已于 V3.7.1 清理完毕
}
registerDelayedStatsLoader();


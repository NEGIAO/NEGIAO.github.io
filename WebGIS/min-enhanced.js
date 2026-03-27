/* --------------------------
   说明：51.la 统计脚本（立即加载，性能影响小）
-------------------------- */
(function load51LaStats() {
    try {
        // 51.la 国内
        (function () {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = '//js.users.51.la/22001747.js';
            s.async = true;
            s.onload = function () { console.log('51.la (国内) 脚本已加载。'); };
            s.onerror = function (e) { console.log('51.la (国内) 脚本加载失败：', e); };
            (document.body || document.head).appendChild(s);
        })();

        // 51.la 国际 SDK
        (function () {
            var s = document.createElement('script');
            s.charset = 'UTF-8';
            s.id = 'LA_COLLECT';
            s.type = 'text/javascript';
            s.src = '//sdk.51.la/js-sdk-pro.min.js';
            s.async = true;
            s.onload = function () {
                try {
                    if (window.LA && typeof LA.init === 'function') {
                        LA.init({
                            id: '3OVJu4iCpXi3wE8k',
                            ck: '3OVJu4iCpXi3wE8k',
                            autoTrack: true,
                            hashMode: true,
                            screenRecord: true
                        });
                        console.log('51.la (国际) SDK 已加载并初始化。');
                    } else {
                        console.log('51.la SDK 已加载，但 LA.init 不可用。');
                    }
                } catch (e) {
                    console.log('初始化 51.la (国际) 时出错：', e);
                }
            };
            s.onerror = function (e) { console.log('加载 51.la (国际) 脚本失败：', e); };
            document.head.appendChild(s);
        })();
    } catch (err) {
        console.log('加载 51.la 统计脚本时出错：', err);
    }
})();

/* --------------------------
   说明：延迟加载其他第三方统计/展示脚本（Supabase、MapMyVisitors、GA）
-------------------------- */
function registerDelayedStatsLoader() {
    try {
        window.addEventListener('load', function () {
            setTimeout(function () {
                // MapMyVisitors
                try {
                    const mapContainer = document.getElementById('mapmyvisitors-container');
                    if (mapContainer && !document.getElementById('mapmyvisitors')) {
                        const script = document.createElement('script'); script.type = 'text/javascript'; script.id = 'mapmyvisitors'; script.async = true; script.src = 'https://mapmyvisitors.com/map.js?cl=ffffff&w=300&t=tt&d=n-HXgq2Mge1cHPJX6y2jM_UZP-Kfb5kUxv6fYpxnLJ8&co=2d78ad&ct=ffffff&cmo=3acc3a&cmn=ff5353'; script.onerror = function () { console.log('MapMyVisitors 无法加载（国内可能无法访问）。'); }; mapContainer.appendChild(script); console.log('MapMyVisitors script 加载请求已发送（延迟，来自 main-enhanced.js）。');
                    }
                } catch (err) { console.log('插入 MapMyVisitors 脚本出错：', err); }

                // Google Analytics
                try {
                    const gaScript = document.createElement('script'); gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KYJ7Y4LE2N'; gaScript.async = true; gaScript.onerror = function () { console.log('Google Analytics 加载失败或被阻止。'); }; document.head.appendChild(gaScript);
                    window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new Date()); gtag('config', 'G-KYJ7Y4LE2N'); console.log('Google Analytics 已延迟初始化（来自 main-enhanced.js）。');
                } catch (err) { console.log('插入 GA 脚本出错：', err); }

            }, 3000);
        });
    } catch (e) { console.log('注册延迟加载统计脚本时出错：', e); }
}
registerDelayedStatsLoader();
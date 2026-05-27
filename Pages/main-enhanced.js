// NEGIAO.github.io 的增强导航和交互功能
// 目标：把页面常用的增强行为集中维护，便于各页面复用与后续扩展

(function ensureFavicon() {
    // 在 <head> 中确保存在 favicon 和 shortcut icon
    try {
        const head = document.head;
        if (!head) return;

        const targetHref = '/images/icon.webp';
        function upsertLink(relValue) {
            let linkEl = document.querySelector(`link[rel="${relValue}"]`);
            if (!linkEl) {
                linkEl = document.createElement('link');
                linkEl.rel = relValue;
                head.appendChild(linkEl);
            }
            linkEl.href = targetHref;
            linkEl.type = 'image/webp';
            linkEl.sizes = '32x32 192x192 512x512';
        }

        upsertLink('icon');
        upsertLink('shortcut icon');
    } catch (err) {
        console.log('ensureFavicon 错误：', err);
    }
})();

document.addEventListener('DOMContentLoaded', function () {
    /* --------------------------
       模块化初始化顺序（便于维护）+
       1. 页面加载遮罩
       2. 导航栏行为（滚动/高亮）
       3. 移动菜单交互
       4. 锚点与平滑滚动
       5. 视差/动画/卡片交互
       6. 进度条、返回顶部、懒加载等辅助功能
       7. 延迟加载第三方统计（在 window.load 后）
       注：主题切换已移至 navbar-widgets/theme-toggle.js
    -------------------------- */

    /* --------------------------
       1) 加载遮罩处理（loading screen）
    -------------------------- */
    function initLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (!loadingScreen) return;

        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
                setTimeout(() => {
                    if (loadingScreen.parentNode) loadingScreen.parentNode.removeChild(loadingScreen);
                }, 150);
            }, 150);
        });
    }

    /* --------------------------
       1.5) 动态尺寸适配
       根据实际视口大小动态计算 Hero 高度、Avatar 尺寸等，
       通过 CSS 自定义属性注入，实现多设备无断点平滑适配。
    -------------------------- */
    function initDynamicSizing() {
        const hero = document.querySelector('.section--hero');
        const root = document.documentElement;

        function update() {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const vmin = Math.min(vw, vh);

            // Hero：精确视口高度（解决移动端地址栏导致 100vh 不准的问题）
            if (hero) {
                hero.style.height = vh + 'px';
            }

            // Avatar：基于 vmin 平滑缩放，桌面端 ~180-200px，平板 ~160px，手机 ~130-140px
            var avatarSize = Math.round(Math.max(100, Math.min(200, vmin * 0.36)));
            var containerSize = Math.round(avatarSize * 1.12);

            root.style.setProperty('--dynamic-avatar', avatarSize + 'px');
            root.style.setProperty('--dynamic-avatar-container', containerSize + 'px');
        }

        update();
        window.addEventListener('resize', update);
        window.addEventListener('orientationchange', function () {
            setTimeout(update, 100);
        });
    }

    /* --------------------------
       2) 导航栏：滚动后样式 & 隐藏/显示
    -------------------------- */
    function initNavbar() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateNavbar() {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) navbar.classList.add('navbar--scrolled'); else navbar.classList.remove('navbar--scrolled');

            if (Math.abs(currentScrollY - lastScrollY) > 5) {
                if (currentScrollY > lastScrollY && currentScrollY > 200) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
                lastScrollY = currentScrollY;
            }

            ticking = false;
        }

        function requestTick() { if (!ticking) { requestAnimationFrame(updateNavbar); ticking = true; } }
        window.addEventListener('scroll', requestTick, { passive: true });
    }

    /* --------------------------
       3) 移动端菜单交互（带焦点管理与键盘支持）
    -------------------------- */
    function initMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenuToggle || !mobileMenu) return;

        let isMenuOpen = false;

        function setIcon(open) {
            const icon = mobileMenuToggle.querySelector('i');
            if (!icon) return;
            icon.style.transform = 'rotate(180deg)';
            setTimeout(() => { icon.className = open ? 'fas fa-times' : 'fas fa-bars'; icon.style.transform = 'rotate(0deg)'; }, 75);
        }

        function toggleMobileMenu() {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('active', isMenuOpen);
            mobileMenuToggle.setAttribute('aria-expanded', isMenuOpen);
            mobileMenuToggle.classList.toggle('active', isMenuOpen);
            setIcon(isMenuOpen);
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
            if (isMenuOpen) {
                const firstLink = mobileMenu.querySelector('.mobile-menu__link');
                if (firstLink) setTimeout(() => firstLink.focus(), 150);
            }
        }

        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => link.addEventListener('click', () => { if (isMenuOpen) toggleMobileMenu(); }));

        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isMenuOpen) { toggleMobileMenu(); mobileMenuToggle.focus(); } });
        document.addEventListener('click', (e) => { if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) toggleMobileMenu(); });
    }

    /* --------------------------
       4) 锚点平滑滚动与无障碍焦点管理
    -------------------------- */
    function initSmoothAnchors() {
        function easeInOutQuad(t, b, c, d) { t /= d / 2; if (t < 1) return c / 2 * t * t + b; t--; return -c / 2 * (t * (t - 2) - 1) + b; }

        function smoothScrollTo(target, offset = 80) {
            const targetPosition = target.offsetTop - offset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = Math.min(Math.abs(distance) / 2, 400);
            let start = null;
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }
            requestAnimationFrame(animation);
        }

        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                const target = document.querySelector(href);
                if (!target) return;
                e.preventDefault();
                smoothScrollTo(target);
                target.setAttribute('tabindex', '-1');
                setTimeout(() => { target.focus({ preventScroll: true }); target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true }); }, 50);
            });
        });
    }

    /* --------------------------
       5) 视差、入场动画与卡片交互（波纹）
    -------------------------- */
    function initAnimationsAndInteractions() {
        // 视差
        const floatingShapes = document.querySelectorAll('.floating-shapes .shape');
        if (floatingShapes.length > 0) window.addEventListener('scroll', () => { const scrolled = window.pageYOffset; floatingShapes.forEach((shape, index) => { const rate = scrolled * (0.1 + index * 0.05); shape.style.transform = `translateY(${rate}px)`; }); }, { passive: true });

        // 入场动画
        if ('IntersectionObserver' in window) {
            const animationObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate-in'); animationObserver.unobserve(entry.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            const animatedElements = document.querySelectorAll('.card:not(.note-toc), .feature, .hero__title, .hero__subtitle, .tech-badge');
            animatedElements.forEach((el, index) => { el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; const delay = (index % 5) * 0.1; el.style.transition = `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`; animationObserver.observe(el); });
        }

        // 添加 animate-in 样式（如果尚未插入）
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `.animate-in{opacity:1!important;transform:translateY(0)!important;}`;
            document.head.appendChild(style);
        }
    }

    /* --------------------------
       6) 进度条、返回顶部、图片预加载/懒加载
    -------------------------- */
    function initAuxiliaryFeatures() {
        // 返回顶部按钮
        const backToTopButton = document.createElement('button');
        backToTopButton.className = 'back-to-top';
        backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopButton.setAttribute('aria-label', '返回顶部');
        document.body.appendChild(backToTopButton);
        backToTopButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        function updateBackToTop() { if (window.scrollY > 500) backToTopButton.classList.add('visible'); else backToTopButton.classList.remove('visible'); }
        window.addEventListener('scroll', () => requestAnimationFrame(updateBackToTop), { passive: true });

        // 进度条
        (function initProgressBar() {
            if (document.getElementById('scroll-progress')) return;
            const progressBar = document.createElement('div');
            progressBar.id = 'scroll-progress';
            progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:var(--gradient-primary);width:0%;z-index:99999;transition:width 0.1s ease-out;box-shadow:0 0 10px rgba(0,217,255,0.5);';
            document.body.appendChild(progressBar);
            let ticking = false;
            const updateProgress = () => { const scrollTop = window.scrollY || document.documentElement.scrollTop; const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; const scrollPercent = (scrollTop / Math.max(docHeight, 1)) * 100; progressBar.style.width = `${scrollPercent}%`; ticking = false; };
            const requestTick = () => { if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; } };
            window.addEventListener('scroll', requestTick, { passive: true });
        })();

        // 预加载关键图片
        ['/Pages/avatar.webp'].forEach(src => { const img = new Image(); img.src = src; });

        // 懒加载非关键图片（data-src）
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.classList.remove('lazy'); imageObserver.unobserve(img); } }); });
            document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
        }
    }

    /* --------------------------
       7) 延迟加载第三方统计脚本
       说明：集中延迟加载所有第三方统计/展示脚本（MapMyVisitors、GA、51.la 国内与国际 SDK）
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

                    // 51.la 国内
                    try { (function () { var s = document.createElement('script'); s.type = 'text/javascript'; s.src = '//js.users.51.la/22001747.js'; s.async = true; s.onload = function () { console.log('51.la (国内) 脚本已加载（来自 main-enhanced.js）。'); }; s.onerror = function (e) { console.log('51.la (国内) 脚本加载失败：', e); }; (document.body || document.head).appendChild(s); })(); } catch (err) { console.log('插入 51.la(国内) 脚本时出错：', err); }

                    // 51.la 国际 SDK
                    try {
                        (function () {
                            var s = document.createElement('script'); s.charset = 'UTF-8'; s.id = 'LA_COLLECT'; s.type = 'text/javascript'; s.src = '//sdk.51.la/js-sdk-pro.min.js'; s.async = true;
                            s.onload = function () { try { if (window.LA && typeof LA.init === 'function') { LA.init({ id: '3OVJu4iCpXi3wE8k', ck: '3OVJu4iCpXi3wE8k', autoTrack: true, hashMode: true, screenRecord: true }); console.log('51.la (国际) SDK 已加载并初始化（来自 main-enhanced.js）。'); } else { console.log('51.la SDK 已加载，但 LA.init 不可用（来自 main-enhanced.js）。'); } } catch (e) { console.log('初始化 51.la (国际) 时出错：', e); } };
                            s.onerror = function (e) { console.log('加载 51.la (国际) 脚本失败：', e); };
                            document.head.appendChild(s);
                        })();
                    } catch (err) { console.log('插入 51.la(国际) 脚本时出错：', err); }

                }, 3000);
            });
        } catch (e) { console.log('注册延迟加载统计脚本时出错：', e); }
    }

    //自动更新 WebGIS 链接，添加版本参数避免缓存问题
    function updateWebGISLink() {
        // 1. 获取当前时间
        const now = new Date();
        const year = now.getFullYear();
        // 月份从 0 开始，所以要 +1。padStart(2, '0') 保证个位数补零，如 '05'
        const month = String(now.getMonth() + 1).padStart(2, '0'); 
        const day = String(now.getDate()).padStart(2, '0');
        
        // 拼装成 YYYYMMDD 格式 (例如: 20231025)
        const todayStr = `${year}${month}${day}`;
        
        // 2. 获取 a 标签并重写它的 href
        const link = document.getElementById('webgis-link');
        if (link) {
            link.href = `WebGIS/index.html?v=${todayStr}`;
        }
    }

    /* --------------------------
       执行模块化初始化
    -------------------------- */
    initLoadingScreen();
    initDynamicSizing();
    initNavbar();
    initMobileMenu();
    initSmoothAnchors();
    initAnimationsAndInteractions();
    updateWebGISLink();
    initAuxiliaryFeatures();
    registerDelayedStatsLoader();

    // 页面增强脚本已加载
    console.log('🚀 NEGIAO.github.io enhanced features loaded successfully!');
});

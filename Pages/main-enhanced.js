// NEGIAO.github.io 的增强导航和交互功能
// 目标：把页面常用的增强行为集中维护，便于各页面复用与后续扩展

(function ensureFavicon() {
    // 在 <head> 中确保存在 favicon 和 shortcut icon
    try {
        const head = document.head;
        if (!head) return;

        const targetHref = '/images/icon.png';
        function upsertLink(relValue) {
            let linkEl = document.querySelector(`link[rel="${relValue}"]`);
            if (!linkEl) {
                linkEl = document.createElement('link');
                linkEl.rel = relValue;
                head.appendChild(linkEl);
            }
            linkEl.href = targetHref;
            linkEl.type = 'image/png';
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
       7. 代码复制与无障碍增强
       8. 延迟加载第三方统计（在 window.load 后）
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

        // 卡片点击波纹
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function (e) {
                const rect = this.getBoundingClientRect();
                const ripple = document.createElement('span');
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                ripple.style.cssText = `position: absolute; width: ${size}px; height: ${size}px; left: ${x}px; top: ${y}px; background: rgba(0,217,255,0.3); border-radius:50%; transform:scale(0); animation:ripple 0.3s linear; pointer-events:none; z-index:1;`;
                this.style.position = 'relative'; this.style.overflow = 'hidden'; this.appendChild(ripple);
                setTimeout(() => { if (ripple.parentNode) ripple.parentNode.removeChild(ripple); }, 300);
            });
        });

        // 添加波纹关键帧与 animate-in 样式（如果尚未插入）
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `@keyframes ripple{to{transform:scale(4);opacity:0;}} .animate-in{opacity:1!important;transform:translateY(0)!important;}`;
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
        ['/Pages/avatar.jpg'].forEach(src => { const img = new Image(); img.src = src; });

        // 懒加载非关键图片（data-src）
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const img = entry.target; img.src = img.dataset.src; img.classList.remove('lazy'); imageObserver.unobserve(img); } }); });
            document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
        }
    }

    /* --------------------------
       7) 代码块复制与无障碍增强
    -------------------------- */
    function initCodeCopyButtons() {
        function getCodeText(pre) { const code = pre.querySelector('code'); return code ? code.innerText : pre.innerText; }
        async function copyToClipboard(text, button) {
            try {
                if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
                else { const textarea = document.createElement('textarea'); textarea.value = text; textarea.style.position = 'fixed'; textarea.style.left = '-9999px'; textarea.style.top = '-9999px'; document.body.appendChild(textarea); textarea.select(); document.execCommand('copy'); document.body.removeChild(textarea); }
                const originalText = button.textContent; button.textContent = '已复制!'; button.classList.add('copied'); setTimeout(() => { button.textContent = originalText; button.classList.remove('copied'); }, 2000);
            } catch (err) { console.log('复制失败:', err); button.textContent = '复制失败'; setTimeout(() => { button.textContent = '复制'; }, 2000); }
        }

        function addCopyButtons() {
            const noteContent = document.querySelector('.note-content'); if (!noteContent) return;
            noteContent.querySelectorAll('pre').forEach(pre => { if (pre.querySelector('.code-copy-btn')) return; if (!pre.querySelector('code')) return; const button = document.createElement('button'); button.className = 'code-copy-btn'; button.type = 'button'; button.textContent = '复制'; button.setAttribute('aria-label', '复制代码'); button.setAttribute('title', '复制代码到剪贴板'); button.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); const codeText = getCodeText(pre); copyToClipboard(codeText, button); }); pre.appendChild(button); });
        }

        addCopyButtons();
        const observer = new MutationObserver(() => addCopyButtons());
        const noteContent = document.querySelector('.note-content'); if (noteContent) observer.observe(noteContent, { childList: true, subtree: true });
        // 若内容异步渲染，多次尝试
        setTimeout(addCopyButtons, 100); setTimeout(addCopyButtons, 500); setTimeout(addCopyButtons, 1000);
        window.addEventListener('load', () => { setTimeout(addCopyButtons, 100); });
    }

    /* --------------------------
       8) 延迟加载第三方统计脚本
       说明：集中延迟加载所有第三方统计/展示脚本（Supabase、MapMyVisitors、GA、51.la 国内与国际 SDK）
    -------------------------- */
    function registerDelayedStatsLoader() {
        try {
            window.addEventListener('load', function () {
                setTimeout(function () {
                    // Supabase
                    try {
                        const supabaseScript = document.createElement('script');
                        supabaseScript.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
                        supabaseScript.onload = function () {
                            try {
                                const SB_URL = 'https://zifovhnylhlwnviiilbo.supabase.co';
                                const SB_KEY = 'sb_publishable_oMMXVnMuHW0JCYASt4hpcQ_X8d65i0l';
                                const _client = supabase.createClient(SB_URL, SB_KEY);
                                async function startTracking() {
                                    try {
                                        let userIP = null;
                                        try { const ipRes = await fetch('https://api.ipify.org?format=json'); const ipJson = await ipRes.json(); userIP = ipJson.ip; } catch (e) { console.log('无法获取公网IP，Supabase 统计将缺少 IP：', e); }
                                        const path = window.location.pathname; await _client.from('page_views').insert([{ page_url: path, visitor_ip: userIP }]);
                                        const today = new Date(); today.setHours(0, 0, 0, 0); const todayISO = today.toISOString();
                                        const [totalCount, todayCount] = await Promise.all([
                                            _client.from('page_views').select('*', { count: 'exact', head: true }).eq('page_url', path),
                                            userIP ? _client.from('page_views').select('*', { count: 'exact', head: true }).eq('page_url', path).eq('visitor_ip', userIP).gte('created_at', todayISO) : Promise.resolve({ count: 0 })
                                        ]);
                                        const totalEl = document.getElementById('total-pv-val'); const todayEl = document.getElementById('today-personal-val'); if (totalEl) totalEl.innerText = (totalCount && totalCount.count) || 0; if (todayEl) todayEl.innerText = (todayCount && todayCount.count) || 0;
                                    } catch (err) { console.log('Supabase startTracking 错误：', err); }
                                }
                                startTracking(); console.log('Supabase 统计已初始化（延迟加载，来自 main-enhanced.js）。');
                            } catch (e) { console.log('Supabase 初始化内部错误：', e); }
                        };
                        supabaseScript.onerror = function (e) { console.log('加载 Supabase SDK 失败：', e); };
                        document.head.appendChild(supabaseScript);
                    } catch (err) { console.log('插入 Supabase 脚本出错：', err); }

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

    /* --------------------------
       执行模块化初始化
    -------------------------- */
    initLoadingScreen();
    initNavbar();
    initMobileMenu();
    initSmoothAnchors();
    initAnimationsAndInteractions();
    initAuxiliaryFeatures();
    initCodeCopyButtons();
    registerDelayedStatsLoader();

    // 页面增强脚本已加载
    console.log('🚀 NEGIAO.github.io enhanced features loaded successfully!');
});

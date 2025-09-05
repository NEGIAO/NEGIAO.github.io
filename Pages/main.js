// Main JavaScript for index.html
document.addEventListener('DOMContentLoaded', function() {
    // 页面加载完成后隐藏加载屏幕
    window.addEventListener('load', function() {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.visibility = 'hidden';
        }, 500);
    });

    // 设置正确的年份
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // 使用事件委托优化平滑滚动效果
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a[href^="#"]');
        if (target) {
            e.preventDefault();
            const element = document.querySelector(target.getAttribute('href'));
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });

    // 使用requestAnimationFrame优化导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    let lastScrollPosition = 0;
    let scrollTimer = null;

    function handleScroll() {
        if (scrollTimer === null) {
            scrollTimer = window.requestAnimationFrame(function() {
                const currentScrollPosition = window.scrollY;
                if (currentScrollPosition > 10) {
                    navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.boxShadow = 'none';
                }
                
                lastScrollPosition = currentScrollPosition;
                scrollTimer = null;
            });
        }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 实现图片懒加载
    if ('loading' in HTMLImageElement.prototype) {
        // 浏览器支持原生懒加载
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
            img.loading = 'lazy';
        });
    } else {
        // 回退到 Intersection Observer API
        const lazyImages = document.querySelectorAll('img[data-src]');
        if (lazyImages.length > 0) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // 添加动画减少性能优化（对于低端设备）
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        // 移除动画效果，提高性能
        document.documentElement.classList.add('reduced-motion');
    }

    // 防抖函数用于性能优化
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // 优化resize事件处理
    const handleResize = debounce(function() {
        // 这里可以处理任何需要在resize时执行的代码
        // 目前没有特别需要处理的，但保留这个模式以备将来扩展
    }, 100);

    window.addEventListener('resize', handleResize, { passive: true });
    
    // 移动端菜单功能（增强ARIA支持）
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
    
    if (mobileMenuToggle && mobileMenu) {
        let isMenuOpen = false;
        
        // 初始化 ARIA 属性
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        
        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('active', isMenuOpen);
            mobileMenuToggle.innerHTML = isMenuOpen ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
            
            // 更新 ARIA 属性
            mobileMenuToggle.setAttribute('aria-expanded', isMenuOpen.toString());
            mobileMenuToggle.setAttribute('aria-label', isMenuOpen ? '关闭菜单' : '打开菜单');
            
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        }
        
        mobileMenuToggle.addEventListener('click', toggleMenu);
        
        // 点击菜单项关闭菜单
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMenu();
                }
            });
        });
        
        // 点击菜单外部关闭菜单
        document.addEventListener('click', (e) => {
            if (isMenuOpen && 
                !mobileMenu.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // ESC 键关闭菜单（增强可访问性）
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
            }
        });
    }
});

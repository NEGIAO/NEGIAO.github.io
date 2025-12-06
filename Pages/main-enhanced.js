// NEGIAO.github.io 的增强导航和交互功能
(function ensureFavicon() {
    try {
        const head = document.head;
        if (!head) {
            return;
        }

        const targetHref = '/images/icon.png';
        function upsertLink(relValue) {
            let linkEl = document.querySelector(`link[rel="${relValue}"]`);
            if (!linkEl) {
                linkEl = document.createElement('link');
                linkEl.rel = relValue;
                head.appendChild(linkEl);
            }
            linkEl.href = targetHref;
            if (!linkEl.type) {
                linkEl.type = 'image/png';
            }
            if (!linkEl.sizes || linkEl.sizes.value === '') {
                linkEl.sizes = '32x32 192x192 512x512';
            }
        }

        upsertLink('icon');
        upsertLink('shortcut icon');
    } catch (err) {
        console.warn('Failed to apply favicon:', err);
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    // 性能优化的加载屏幕
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.visibility = 'hidden';
                // 动画结束后从 DOM 中移除
                setTimeout(() => {
                    if (loadingScreen.parentNode) {
                        loadingScreen.parentNode.removeChild(loadingScreen);
                    }
                }, 150);
            }, 150);
        });
    }

    // 带有滚动效果的增强导航栏
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        // 添加滚动类以应用样式
        if (currentScrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
        
        // 根据滚动方向隐藏/显示导航栏
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
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });

    // 增强移动端菜单
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('active', isMenuOpen);
        mobileMenuToggle.setAttribute('aria-expanded', isMenuOpen);
        mobileMenuToggle.classList.toggle('active', isMenuOpen);
        
        // 带动画更新图标
        const icon = mobileMenuToggle.querySelector('i');
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                icon.className = isMenuOpen ? 'fas fa-times' : 'fas fa-bars';
                icon.style.transform = 'rotate(0deg)';
            }, 75);
        }
        
        // 菜单打开时防止页面滚动
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        
        // 焦点管理
        if (isMenuOpen) {
            const firstLink = mobileMenu.querySelector('.mobile-menu__link');
            if (firstLink) {
                setTimeout(() => firstLink.focus(), 150);
            }
        }
    }

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        
        // 点击链接时关闭菜单
        const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu__link');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });
        
        // 按下 Escape 键时关闭菜单
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMobileMenu();
                mobileMenuToggle.focus();
            }
        });
        
        // 点击外部时关闭菜单
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                toggleMobileMenu();
            }
        });
    }

    // 增强平滑滚动
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

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // 处理锚点链接
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                smoothScrollTo(target);
                
                // 更新焦点以支持无障碍访问
                target.setAttribute('tabindex', '-1');
                setTimeout(() => {
                    target.focus({ preventScroll: true });
                    target.addEventListener('blur', () => {
                        target.removeAttribute('tabindex');
                    }, { once: true });
                }, 50);
            }
        });
    });

    // 激活导航高亮
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link, .mobile-menu__link');
    
    if ('IntersectionObserver' in window && sections.length > 0) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            rootMargin: '-20% 0px -70% 0px' // 当部分接近顶部时触发
        });

        sections.forEach(section => navObserver.observe(section));
    } else {
        // 旧浏览器或无部分的后备方案
        function updateActiveNav() {
            let current = '';
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', updateActiveNav, { passive: true });
    }

    // 用于动画的 Intersection Observer
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // 动画结束后取消观察以提高性能
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // 观察元素以进行动画
    const animatedElements = document.querySelectorAll('.card:not(.note-toc), .feature, .hero__title, .hero__subtitle, .tech-badge');
    animatedElements.forEach((el, index) => {
        // 添加动画初始样式
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        // 使用取模防止下方元素延迟过长
        // 最大延迟将是 0.1s * 5 = 0.5s
        const delay = (index % 5) * 0.1;
        el.style.transition = `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`;
        animationObserver.observe(el);
    });

    // 增强卡片交互
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // 点击时添加波纹效果
        card.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(0, 217, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.3s linear;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 300);
        });
    });

    // 添加波纹动画关键帧
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // 浮动形状的视差效果
    const floatingShapes = document.querySelectorAll('.floating-shapes .shape');
    if (floatingShapes.length > 0) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            floatingShapes.forEach((shape, index) => {
                const rate = scrolled * (0.1 + index * 0.05);
                shape.style.transform = `translateY(${rate}px)`;
            });
        }, { passive: true });
    }

    // 动态年份更新
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // 性能优化
    // 预加载关键图片
    const criticalImages = ['/Pages/avatar.jpg'];
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // 懒加载非关键图片
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // 增强无障碍访问
    // 跳转链接
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = '跳转到主要内容';
    skipLink.className = 'sr-only';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary);
        color: white;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // 返回顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.setAttribute('aria-label', '返回顶部');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    function updateBackToTop() {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', () => {
        requestAnimationFrame(updateBackToTop);
    }, { passive: true });

    // 滚动进度条功能（添加到主脚本以保持一致性）
    function initProgressBar() {
        // 检查是否已存在
        if (document.getElementById('scroll-progress')) return;

        // 创建进度条元素
        const progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: var(--gradient-primary);
            width: 0%;
            z-index: 99999;
            transition: width 0.1s ease-out;
            box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
        `;
        document.body.appendChild(progressBar);

        // 滚动时更新进度
        let ticking = false;
        
        const updateProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${scrollPercent}%`;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
    }
    
    // 初始化进度条
    initProgressBar();

    console.log('🚀 NEGIAO.github.io enhanced features loaded successfully!');
});

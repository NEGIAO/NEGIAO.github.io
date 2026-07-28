/**
 * 分享按钮 Widget — 零样式注入
 * 创建按钮 DOM，样式完全由 CSS 控制
 */
(function () {
    'use strict';

    function getShareData() {
        var metaDesc = document.querySelector('meta[name="description"]');
        return {
            title: document.title || 'NEGIAO',
            text: metaDesc ? metaDesc.getAttribute('content') : '',
            url: window.location.href
        };
    }

    function showCopied(btn) {
        btn.classList.add('copied');
        var icon = btn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-share-alt', 'fa-share-nodes', 'fa-share');
            icon.classList.add('fa-check');
        }
        setTimeout(function () {
            btn.classList.remove('copied');
            if (icon) {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-share-alt');
            }
        }, 2000);
    }

    function fallbackCopy(text) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
    }

    function createButton() {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'share-note-btn navbar-widget-btn';
        btn.setAttribute('aria-label', '分享本页');
        btn.setAttribute('title', '分享本页');
        btn.innerHTML = '<i class="fas fa-share-alt"></i>';
        return btn;
    }

    function bindButton(btn) {
        if (btn.dataset.nwShareBound === 'true') return;
        btn.dataset.nwShareBound = 'true';
        btn.addEventListener('click', function () {
            var data = getShareData();

            if (navigator.share) {
                navigator.share(data).catch(function () {});
            } else if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(data.url).then(function () {
                    showCopied(btn);
                }).catch(function () {
                    fallbackCopy(data.url);
                    showCopied(btn);
                });
            } else {
                fallbackCopy(data.url);
                showCopied(btn);
            }
        });
    }

    function mount(container) {
        if (!container) return;
        var existing = container.querySelector('.share-note-btn');
        var btn = existing || createButton();
        if (!existing) container.appendChild(btn);
        bindButton(btn);
    }

    window.initShareButton = function () {
        var navbar = document.querySelector('.navbar__container');
        if (navbar) mount(navbar);

        var notesNavbar = document.querySelector('.notes-navbar');
        if (notesNavbar) mount(notesNavbar);

        var viewerNavbar = document.querySelector('.note-viewer-navbar');
        if (viewerNavbar) mount(viewerNavbar);
    };
})();

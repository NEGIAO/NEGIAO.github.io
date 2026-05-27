/**
 * 分享按钮 Widget
 * 点击复制当前页面 URL 到剪贴板，自动挂载到 .navbar__container
 */
(function () {
    'use strict';

    function injectStyles() {
        if (document.getElementById('share-note-btn-styles')) return;

        var style = document.createElement('style');
        style.id = 'share-note-btn-styles';
        style.textContent = [
            '.share-note-btn{',
            'position:absolute;top:50%;transform:translateY(-50%);z-index:1;',
            'background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:var(--radius-full);',
            'width:44px;height:44px;display:flex;align-items:center;justify-content:center;',
            'color:var(--text);cursor:pointer;transition:all var(--transition-fast);',
            '}',
            '.share-note-btn:hover{background:var(--surface-elevated);transform:translateY(-50%) rotate(15deg);}',
            '.share-note-btn.copied{border-color:var(--success,#16a34a);color:var(--success,#16a34a);}'
        ].join('');
        document.head.appendChild(style);
    }

    window.initShareButton = function () {
        var container = document.querySelector('.navbar__container');
        if (!container) return;

        injectStyles();

        var btn = document.createElement('button');
        btn.className = 'share-note-btn';
        btn.type = 'button';
        btn.innerHTML = '<i class="fas fa-share-nodes"></i>';
        btn.setAttribute('aria-label', '分享笔记');
        btn.setAttribute('title', '复制笔记链接');

        btn.addEventListener('click', function () {
            var done = function () {
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.classList.add('copied');
                setTimeout(function () {
                    btn.innerHTML = '<i class="fas fa-share-nodes"></i>';
                    btn.classList.remove('copied');
                }, 1500);
            };

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(window.location.href).then(done).catch(done);
            } else {
                var input = document.createElement('input');
                input.value = window.location.href;
                document.body.appendChild(input);
                input.select();
                document.execCommand('copy');
                document.body.removeChild(input);
                done();
            }
        });

        container.appendChild(btn);
    };
})();

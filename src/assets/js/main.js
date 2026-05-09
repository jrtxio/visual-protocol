/* Visual Protocol — Main JS */

(function () {
    function getPreferredTheme() {
        var stored = localStorage.getItem('vp-theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
    }

    function toggleTheme() {
        var current = document.body.getAttribute('data-theme') || getPreferredTheme();
        var next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('vp-theme', next);
    }

    document.addEventListener('DOMContentLoaded', function () {
        applyTheme(getPreferredTheme());

        var btn = document.getElementById('themeToggle');
        if (btn) btn.addEventListener('click', toggleTheme);
    });

    document.addEventListener('click', function (e) {
        var link = e.target.closest('a[href^="#"]');
        if (!link) return;
        var id = link.getAttribute('href').slice(1);
        var el = document.getElementById(id);
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth' });
        }
    });
})();

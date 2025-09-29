// Common utilities for Visual Protocol

class VisualProtocol {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupEventListeners();
    }

    setupTheme() {
        if (this.theme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', this.theme);
        this.setupTheme();
        
        // Update theme toggle button text
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.textContent = this.theme === 'dark' ? '☀️ 浅色模式' : '🌙 深色模式';
        }
    }

    // Navigate to a protocol page
    navigateToProtocol(protocol) {
        window.location.href = `protocols/${protocol}.html`;
    }

    // Show alert for coming soon features
    showComingSoonAlert(protocol) {
        alert(`${protocol.toUpperCase()}协议学习功能正在开发中...\n请期待后续版本！`);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.visualProtocol = new VisualProtocol();
});

// Export for use in other modules
export default VisualProtocol;
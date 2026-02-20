/* ===================================
   THEME.JS - Dark Mode Management
   =================================== */

/**
 * Toggle dark mode on/off
 */
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
    
    // Refresh Lucide icons if available
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

/**
 * Load dark mode preference from localStorage
 * Call this on page load
 */
function loadDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
    }
}

// Auto-load preference when script loads
loadDarkModePreference();

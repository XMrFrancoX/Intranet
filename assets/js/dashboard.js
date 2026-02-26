/* ===================================
   DASHBOARD.JS - Common Dashboard Functions
   =================================== */

/**
 * Initialize Lucide icons
 */
function initIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

/**
 * Set active navigation item based on current page
 * @param {string} pageName - The name of the current page (e.g., 'panel', 'calificaciones')
 */
function setActiveNav(pageName) {
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to current page button
    const activeBtn = document.querySelector(`[data-page="${pageName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

/**
 * Update page title in header
 * @param {string} title - The title to display
 */
function updatePageTitle(title) {
    const titleElement = document.getElementById('page-title');
    if (titleElement) {
        titleElement.textContent = title;
    }
}

// Initialize icons when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initIcons();
});

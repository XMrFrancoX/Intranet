/* ===================================
   SIDEBAR.JS — Dynamic Role-based Sidebar
   Supports: submenu accordion items, configurable basePath
   =================================== */

const SIDEBAR_CONFIG = {
    alumno: {
        theme: 'alumno',
        borderColor: 'border-blue-50',
        footerBorder: 'border-blue-50',
        hoverBg: 'hover:bg-blue-50',
        hoverText: 'hover:text-blue-600',
        logoutFullPath: '../../alumno/login-alumno.html',
        dashboardPath: 'alumno/dashboard-alumno',
        items: [
            { page: 'panel', icon: 'house', label: 'Panel', url: 'panel.html' },
            { page: 'comunicados', icon: 'megaphone', label: 'Comunicados', url: '../../comunicados/comunicados.html?rol=alumno' },
            { page: 'calificaciones', icon: 'bar-chart-3', label: 'Calificaciones', url: 'calificaciones.html' },
            { page: 'adeudados', icon: 'book-x', label: 'Temas Adeudados', url: 'adeudados.html' },
            { page: 'asistencia', icon: 'clipboard-check', label: 'Asistencia', url: 'asistencia.html' },
            { page: 'notificaciones', icon: 'bell', label: 'Notificaciones', url: 'notificaciones.html' },
            { page: 'asistencia-clases', icon: 'list-checks', label: 'Asistencia Clases', url: 'asistencia-clases.html' },
            { page: 'horario', icon: 'calendar-clock', label: 'Horario', url: 'horario.html' },
        ]
    },
    tutor: {
        theme: 'tutor',
        borderColor: 'border-indigo-50',
        footerBorder: 'border-indigo-50',
        hoverBg: 'hover:bg-indigo-50',
        hoverText: 'hover:text-indigo-600',
        logoutFullPath: '../../tutor/login-tutor.html',
        dashboardPath: 'tutor/dashboard-tutor',
        items: [
            { page: 'panel', icon: 'house', label: 'Panel', url: 'panel.html' },
            { page: 'calificaciones', icon: 'bar-chart-3', label: 'Calificaciones', url: 'calificaciones.html' },
            { page: 'asistencia', icon: 'calendar-check', label: 'Asistencia', url: 'asistencia.html' },
            { page: 'horario', icon: 'calendar-clock', label: 'Horario', url: 'horario.html' },
            { page: 'boletines', icon: 'file-text', label: 'Boletines', url: 'boletines.html' },
            {
                page: 'comunicados',
                icon: 'megaphone',
                label: 'Comunicados',
                submenu: [
                    { page: 'comunicados', icon: 'inbox', label: 'Bandeja', url: '../../comunicados/comunicados.html?rol=tutor' },
                ]
            },
            { page: 'mensajes', icon: 'message-circle', label: 'Mensajes', url: 'mensajes.html' },
            { page: 'justificaciones', icon: 'file-check', label: 'Justificaciones', url: 'justificaciones.html' },
            { page: 'legajo', icon: 'folder-open', label: 'Legajo', url: 'legajo.html' },
        ]
    },
    preceptor: {
        theme: 'preceptor',
        borderColor: 'border-emerald-50',
        footerBorder: 'border-emerald-50',
        hoverBg: 'hover:bg-emerald-50',
        hoverText: 'hover:text-emerald-600',
        logoutFullPath: '../../preceptor/login-preceptor.html',
        dashboardPath: 'preceptor/dashboard-preceptor',
        items: [
            { page: 'panel', icon: 'house', label: 'Panel', url: 'panel.html' },
            { page: 'asistencia', icon: 'clipboard-check', label: 'Asistencia', url: 'asistencia.html' },
            { page: 'alumnos', icon: 'users', label: 'Alumnos', url: 'alumnos.html' },
            { page: 'boletines', icon: 'file-text', label: 'Boletines', url: 'boletines.html' },
            { page: 'conducta', icon: 'shield', label: 'Conducta', url: 'conducta.html' },
            { page: 'legajos', icon: 'folder-open', label: 'Legajos', url: 'legajos.html' },
            { page: 'alertas', icon: 'triangle-alert', label: 'Alertas', url: 'alertas.html' },
            {
                page: 'comunicados',
                icon: 'megaphone',
                label: 'Comunicados',
                submenu: [
                    { page: 'comunicados', icon: 'inbox', label: 'Bandeja', url: '../../comunicados/comunicados.html?rol=preceptor' },
                    { page: 'comunicados-grupos', icon: 'users', label: 'Gestionar Grupos', url: '../../comunicados/grupos.html' },
                ]
            },
            { page: 'reportes', icon: 'bar-chart-2', label: 'Reportes', url: 'reportes.html' },
            { page: 'mensajes', icon: 'message-circle', label: 'Mensajes', url: 'mensajes.html' },
        ]
    },
    secretario: {
        theme: 'secretario',
        borderColor: 'border-cyan-50',
        footerBorder: 'border-cyan-50',
        hoverBg: 'hover:bg-cyan-50',
        hoverText: 'hover:text-cyan-600',
        logoutFullPath: '../../secretario/login-secretario.html',
        dashboardPath: 'secretario/dashboard-secretario',
        items: [
            { page: 'panel', icon: 'house', label: 'Panel', url: 'panel.html' },
            { page: 'gestion-academica', icon: 'graduation-cap', label: 'Gestión Académica', url: 'gestion-academica.html' },
            { page: 'inscripciones', icon: 'user-plus', label: 'Inscripciones', url: 'inscripciones.html' },
            { page: 'legajos', icon: 'folder-open', label: 'Legajos', url: 'legajos.html' },
            { page: 'boletines', icon: 'file-text', label: 'Boletines', url: 'boletines.html' },
            {
                page: 'comunicados',
                icon: 'megaphone',
                label: 'Comunicados',
                submenu: [
                    { page: 'comunicados', icon: 'inbox', label: 'Bandeja', url: '../../comunicados/comunicados.html?rol=secretario' },
                    { page: 'comunicados-grupos', icon: 'users', label: 'Gestionar Grupos', url: '../../comunicados/grupos.html' },
                ]
            },
            { page: 'reportes', icon: 'bar-chart-2', label: 'Reportes', url: 'reportes.html' },
        ]
    },
    admin: {
        theme: 'admin',
        borderColor: 'border-amber-50',
        footerBorder: 'border-amber-50',
        hoverBg: 'hover:bg-amber-50',
        hoverText: 'hover:text-amber-600',
        logoutFullPath: '../../admin/login-admin.html',
        dashboardPath: 'admin/dashboard-admin',
        items: [
            { page: 'panel', icon: 'house', label: 'Panel', url: 'panel.html' },
            { page: 'usuarios', icon: 'users', label: 'Usuarios', url: 'usuarios.html' },
            { page: 'cursos', icon: 'school', label: 'Cursos', url: 'cursos.html' },
            { page: 'gestion-academica', icon: 'graduation-cap', label: 'Gestión Académica', url: 'gestion-academica.html' },
            { page: 'inscripciones', icon: 'user-plus', label: 'Inscripciones', url: 'inscripciones.html' },
            { page: 'asistencia', icon: 'clipboard-check', label: 'Asistencia', url: 'asistencia.html' },
            { page: 'calificaciones', icon: 'bar-chart-3', label: 'Calificaciones', url: 'calificaciones.html' },
            { page: 'boletines', icon: 'file-text', label: 'Boletines', url: 'boletines.html' },
            { page: 'conducta', icon: 'shield', label: 'Conducta', url: 'conducta.html' },
            { page: 'legajos', icon: 'folder-open', label: 'Legajos', url: 'legajos.html' },
            { page: 'alumnos', icon: 'graduation-cap', label: 'Alumnos', url: 'alumnos.html' },
            { page: 'alertas', icon: 'triangle-alert', label: 'Alertas', url: 'alertas.html' },
            {
                page: 'comunicados',
                icon: 'megaphone',
                label: 'Comunicados',
                submenu: [
                    { page: 'comunicados', icon: 'inbox', label: 'Bandeja', url: '../../comunicados/comunicados.html?rol=admin' },
                    { page: 'comunicados-grupos', icon: 'users', label: 'Gestionar Grupos', url: '../../comunicados/grupos.html' },
                ]
            },
            { page: 'reportes', icon: 'bar-chart-2', label: 'Reportes', url: 'reportes.html' },
            { page: 'mensajes', icon: 'message-circle', label: 'Mensajes', url: 'mensajes.html' },
            { page: 'horarios', icon: 'calendar-clock', label: 'Horarios', url: 'horarios.html' },
            { page: 'configuracion', icon: 'settings', label: 'Configuración', url: 'configuracion.html' },
        ]
    }
};

/**
 * Adjust a relative URL when sidebar is loaded from a different folder.
 * @param {string} url - The URL from config (relative to dashboard folder)
 * @param {string} basePath - e.g. '../' when in /comunicados/
 * @param {string} dashboardPath - e.g. 'preceptor/dashboard-preceptor'
 */
function _adjustUrl(url, basePath, dashboardPath) {
    if (!basePath) return url;

    // URLs starting with '../../' are already absolute-ish (e.g. ../../comunicados/...)
    // From /comunicados/, ../../ = parent of parent, but we're only 1 level deep
    // so ../../comunicados/x.html → ../comunicados/x.html
    if (url.startsWith('../../')) {
        return url.replace(/^\.\.\/\.\.\//, basePath);
    }

    // Simple filenames like 'panel.html' are relative to the dashboard folder.
    // From /comunicados/, we need: ../preceptor/dashboard-preceptor/panel.html
    if (!url.startsWith('.') && !url.startsWith('/') && !url.startsWith('http')) {
        return basePath + dashboardPath + '/' + url;
    }

    return url;
}

/**
 * Initializes the sidebar dynamically based on role and active page
 * @param {string} rol - 'alumno' | 'tutor' | 'preceptor' | 'secretario'
 * @param {string} activePage - current page key (e.g., 'panel', 'horario', 'comunicados')
 * @param {string} [basePath=''] - path prefix for URLs (e.g. '../' when called from /comunicados/)
 */
function initSidebar(rol, activePage, basePath) {
    basePath = basePath || '';
    const config = SIDEBAR_CONFIG[rol];
    if (!config) return;

    const aside = document.getElementById('sidebar');
    if (!aside) return;

    aside.className = `w-20 hover:w-72 bg-white dark:bg-slate-800 border-r ${config.borderColor} dark:border-slate-700 flex flex-col h-full z-20 shadow-sm flex-shrink-0 transition-all duration-300 group overflow-hidden`;

    // Only auto-expand accordion for sub-pages like grupos, NOT for bandeja (comunicados)
    const comunicadosSubPages = ['comunicados-grupos'];
    const isInComunicadosSection = comunicadosSubPages.includes(activePage);

    // Build nav items
    const navItems = config.items.map(item => {
        if (item.submenu) {
            // Accordion item
            const isExpanded = isInComunicadosSection && item.page === 'comunicados';
            const adjustedUrl = _adjustUrl(item.submenu[0]?.url || '#', basePath, config.dashboardPath);

            const subItems = item.submenu.map(sub => {
                const subActive = sub.page === activePage ? 'submenu-active' : '';
                const subUrl = _adjustUrl(sub.url, basePath, config.dashboardPath);
                // If onclick and we're already on comunicados page, render as button
                if (sub.onclick && activePage === 'comunicados') {
                    return `<button type="button" data-page="${sub.page}" onclick="${sub.onclick}" class="submenu-item ${subActive} flex items-center gap-3 pl-12 pr-4 py-2.5 text-slate-500 dark:text-slate-400 ${config.hoverBg} dark:hover:bg-slate-700 ${config.hoverText} dark:hover:text-white rounded-xl font-bold transition-all min-w-max text-sm w-full text-left"><i data-lucide="${sub.icon}" class="w-4 h-4 flex-shrink-0"></i><span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">${sub.label}</span></button>`;
                }
                return `<a href="${subUrl}" data-page="${sub.page}" class="submenu-item ${subActive} flex items-center gap-3 pl-12 pr-4 py-2.5 text-slate-500 dark:text-slate-400 ${config.hoverBg} dark:hover:bg-slate-700 ${config.hoverText} dark:hover:text-white rounded-xl font-bold transition-all min-w-max text-sm"><i data-lucide="${sub.icon}" class="w-4 h-4 flex-shrink-0"></i><span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">${sub.label}</span></a>`;
            }).join('');

            return `
            <div class="nav-accordion ${isExpanded ? 'open' : ''}">
                <button type="button" data-page="${item.page}"
                    onclick="toggleSidebarAccordion(this)"
                    class="nav-btn w-full flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 ${config.hoverBg} dark:hover:bg-slate-700 ${config.hoverText} dark:hover:text-white rounded-2xl font-bold transition-all text-left min-w-max">
                    <i data-lucide="${item.icon}" class="w-6 h-6 flex-shrink-0"></i>
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap flex-1">${item.label}</span>
                    <i data-lucide="chevron-down" class="w-4 h-4 flex-shrink-0 accordion-chevron opacity-0 group-hover:opacity-100 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}"></i>
                </button>
                <div class="submenu-wrapper ${isExpanded ? '' : 'hidden'} overflow-hidden pl-0">
                    ${subItems}
                </div>
            </div>`;
        } else {
            // Regular item
            const isActive = item.page === activePage ? 'active' : '';
            const url = _adjustUrl(item.url, basePath, config.dashboardPath);
            return `
            <a href="${url}" data-page="${item.page}"
                class="nav-btn ${isActive} w-full flex items-center gap-4 px-4 py-3 text-slate-500 dark:text-slate-400 ${config.hoverBg} dark:hover:bg-slate-700 ${config.hoverText} dark:hover:text-white rounded-2xl font-bold transition-all text-left min-w-max">
                <i data-lucide="${item.icon}" class="w-6 h-6 flex-shrink-0"></i>
                <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">${item.label}</span>
            </a>`;
        }
    }).join('');

    const logoutUrl = basePath ? _adjustUrl(config.logoutFullPath, basePath, config.dashboardPath) : config.logoutFullPath;
    const helpUrl = basePath ? basePath + 'centro-ayuda.html' : '../../centro-ayuda.html';

    aside.innerHTML = `
        <div class="p-6 flex items-center gap-3 min-w-max">
            <div class="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img src="https://www.philips.edu.ar/favicon.png" alt="Logo" class="w-10 h-10 object-contain">
            </div>
            <h1 class="font-extrabold text-xl text-slate-800 dark:text-slate-100 tracking-tight whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Escuela Philips</h1>
        </div>

        <nav class="flex-1 px-4 space-y-1 overflow-y-auto py-2">
            ${navItems}
        </nav>

        <div class="p-4 border-t ${config.footerBorder} dark:border-slate-700">
            <a href="${logoutUrl}"
                class="w-full flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 rounded-2xl font-bold transition-all text-left min-w-max">
                <i data-lucide="log-out" class="w-6 h-6 flex-shrink-0"></i>
                <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Cerrar Sesión</span>
            </a>
            <a href="${helpUrl}"
                class="w-full flex items-center gap-4 px-4 py-3 text-slate-400 hover:bg-slate-50 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300 rounded-2xl font-bold transition-all text-left min-w-max mt-1">
                <i data-lucide="life-buoy" class="w-6 h-6 flex-shrink-0"></i>
                <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Centro de Ayuda</span>
            </a>
        </div>
    `;

    // Styles for submenu items
    const styleId = 'sidebar-submenu-styles';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        const themeColors = {
            alumno: { bg: '#eff6ff', color: '#2563eb', darkBg: 'rgba(59,130,246,0.15)', darkColor: '#93c5fd' },
            tutor: { bg: '#eef2ff', color: '#4f46e5', darkBg: 'rgba(99,102,241,0.15)', darkColor: '#a5b4fc' },
            preceptor: { bg: '#ecfdf5', color: '#059669', darkBg: 'rgba(16,185,129,0.15)', darkColor: '#6ee7b7' },
            secretario: { bg: '#ecfeff', color: '#0891b2', darkBg: 'rgba(6,182,212,0.15)', darkColor: '#67e8f9' },
            admin: { bg: '#fffbeb', color: '#d97706', darkBg: 'rgba(217,119,6,0.15)', darkColor: '#fbbf24' },
        };
        const tc = themeColors[rol] || themeColors.alumno;
        style.textContent = `
            .submenu-item.submenu-active {
                background: ${tc.bg};
                color: ${tc.color};
                font-weight: 800;
            }
            .dark .submenu-item.submenu-active {
                background: ${tc.darkBg};
                color: ${tc.darkColor};
            }
            .nav-accordion.open .submenu-wrapper {
                display: block !important;
            }
            .accordion-chevron {
                transition: transform 0.25s ease;
            }
            .submenu-wrapper {
                animation: submenuOpen 0.2s ease;
            }
            @keyframes submenuOpen {
                from { opacity: 0; transform: translateY(-4px); }
                to   { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }

    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

/**
 * Toggle a sidebar accordion item open/closed
 */
function toggleSidebarAccordion(btn) {
    const accordion = btn.closest('.nav-accordion');
    const wrapper = accordion.querySelector('.submenu-wrapper');
    const chevron = btn.querySelector('.accordion-chevron');
    const isOpen = accordion.classList.contains('open');

    if (isOpen) {
        accordion.classList.remove('open');
        wrapper.classList.add('hidden');
        if (chevron) chevron.style.transform = '';
    } else {
        accordion.classList.add('open');
        wrapper.classList.remove('hidden');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    }
}

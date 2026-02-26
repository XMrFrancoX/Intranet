/* ===================================
   COMUNICADOS.JS — Role-based Logic
   =================================== */

// ---- CONFIG ----
const ROLES_CONFIG = {
    alumno: {
        label: 'Alumno',
        theme: 'alumno',
        bgClass: 'bg-[#F8FAFC]',
        borderColor: 'border-blue-50',
        hoverBg: 'hover:bg-blue-50',
        hoverText: 'hover:text-blue-600',
        darkHoverBg: 'dark:hover:bg-slate-700',
        darkHoverText: 'dark:hover:text-blue-400',
        headerBg: 'bg-blue-50',
        panelUrl: '../alumno/dashboard-alumno/panel.html',
        loginUrl: '../alumno/login-alumno.html',
        userName: 'Ortiz Ruiz Franco Valentin',
        canRead: true,
        canSign: false,
        canCreate: false,
        canDelete: false,
        canViewFirmas: false
    },
    tutor: {
        label: 'Tutor / Familia',
        theme: 'tutor',
        bgClass: 'bg-[#EEF2FF]',
        borderColor: 'border-indigo-50',
        hoverBg: 'hover:bg-indigo-50',
        hoverText: 'hover:text-indigo-600',
        darkHoverBg: 'dark:hover:bg-slate-700',
        darkHoverText: 'dark:hover:text-indigo-400',
        headerBg: 'bg-indigo-50',
        panelUrl: '../tutor/dashboard-tutor/panel.html',
        loginUrl: '../tutor/login-tutor.html',
        userName: 'Ortiz, María Elena',
        canRead: true,
        canSign: true,
        canCreate: false,
        canDelete: false,
        canViewFirmas: false
    },
    preceptor: {
        label: 'Preceptor',
        theme: 'preceptor',
        bgClass: 'bg-[#F0FDF4]',
        borderColor: 'border-emerald-50',
        hoverBg: 'hover:bg-emerald-50',
        hoverText: 'hover:text-emerald-600',
        darkHoverBg: 'dark:hover:bg-slate-700',
        darkHoverText: 'dark:hover:text-emerald-400',
        headerBg: 'bg-emerald-50',
        panelUrl: '../preceptor/dashboard-preceptor/panel.html',
        loginUrl: '../preceptor/login-preceptor.html',
        userName: 'Fernández, Claudia',
        canRead: true,
        canSign: false,
        canCreate: true,
        canDelete: true,
        canViewFirmas: true,
        autorLabel: 'Preceptoría'
    },
    secretario: {
        label: 'Secretario/a',
        theme: 'secretario',
        bgClass: 'bg-[#ECFEFF]',
        borderColor: 'border-cyan-50',
        hoverBg: 'hover:bg-cyan-50',
        hoverText: 'hover:text-cyan-600',
        darkHoverBg: 'dark:hover:bg-slate-700',
        darkHoverText: 'dark:hover:text-cyan-400',
        headerBg: 'bg-cyan-50',
        panelUrl: '../secretario/dashboard-secretario/panel.html',
        loginUrl: '../secretario/login-secretario.html',
        userName: 'Martínez, Ana',
        canRead: true,
        canSign: false,
        canCreate: true,
        canDelete: true,
        canViewFirmas: true,
        autorLabel: 'Secretaría'
    },
    admin: {
        label: 'Administrador',
        theme: 'admin',
        bgClass: 'bg-[#FFFBF0]',
        borderColor: 'border-amber-50',
        hoverBg: 'hover:bg-amber-50',
        hoverText: 'hover:text-amber-600',
        darkHoverBg: 'dark:hover:bg-slate-700',
        darkHoverText: 'dark:hover:text-amber-400',
        headerBg: 'bg-amber-50',
        panelUrl: '../admin/dashboard-admin/panel.html',
        loginUrl: '../admin/login-admin.html',
        userName: 'Torres, Pablo',
        canRead: true,
        canSign: false,
        canCreate: true,
        canDelete: true,
        canViewFirmas: true,
        showBadge: true,
        autorLabel: 'Dirección'
    },
    profesor: {
        label: 'Profesor',
        theme: 'profesor',
        panelUrl: '../profesor/dashboard-profesor/panel.html',
        loginUrl: '../profesor/login-profesor.html',
        userName: '',
        canRead: false,
        canSign: false,
        canCreate: false,
        canDelete: false,
        canViewFirmas: false
    }
};

const CURSOS = [
    '1° A', '1° B', '2° A', '2° B', '3° A', '3° B',
    '4° A', '4° B', '5° A', '5° B', '6° A', '6° B'
];

// Demo students per course
const ALUMNOS_POR_CURSO = {
    '1° A': [
        { nombre: 'García, Lucas', tutor: 'García, María', firmado: false },
        { nombre: 'López, Valentina', tutor: 'López, Jorge', firmado: true },
        { nombre: 'Martínez, Tomás', tutor: 'Martínez, Sandra', firmado: false },
        { nombre: 'Rodríguez, Camila', tutor: 'Rodríguez, Carlos', firmado: true },
        { nombre: 'Pérez, Mateo', tutor: 'Pérez, Liliana', firmado: false },
    ],
    '1° B': [
        { nombre: 'Fernández, Sofía', tutor: 'Fernández, Ricardo', firmado: true },
        { nombre: 'González, Benjamín', tutor: 'González, Ana', firmado: false },
        { nombre: 'Díaz, Mía', tutor: 'Díaz, Roberto', firmado: true },
        { nombre: 'Ruiz, Thiago', tutor: 'Ruiz, Patricia', firmado: true },
    ],
    '2° A': [
        { nombre: 'Sánchez, Emma', tutor: 'Sánchez, Miguel', firmado: false },
        { nombre: 'Torres, Lautaro', tutor: 'Torres, Gabriela', firmado: true },
        { nombre: 'Ramírez, Isabella', tutor: 'Ramírez, Diego', firmado: false },
        { nombre: 'Flores, Juan', tutor: 'Flores, Mariana', firmado: true },
    ],
    '2° B': [
        { nombre: 'Acosta, Alma', tutor: 'Acosta, Fernando', firmado: true },
        { nombre: 'Herrera, Felipe', tutor: 'Herrera, Victoria', firmado: false },
        { nombre: 'Medina, Catalina', tutor: 'Medina, Andrés', firmado: true },
    ],
    '3° A': [
        { nombre: 'Castro, Joaquín', tutor: 'Castro, Laura', firmado: false },
        { nombre: 'Vargas, Delfina', tutor: 'Vargas, Pablo', firmado: true },
        { nombre: 'Romero, Bautista', tutor: 'Romero, Silvia', firmado: false },
        { nombre: 'Suárez, Olivia', tutor: 'Suárez, Martín', firmado: true },
        { nombre: 'Gómez, Nicolás', tutor: 'Gómez, Carolina', firmado: false },
    ],
    '3° B': [
        { nombre: 'Morales, Emilia', tutor: 'Morales, Héctor', firmado: true },
        { nombre: 'Jiménez, Simón', tutor: 'Jiménez, Natalia', firmado: false },
    ],
    '4° A': [
        { nombre: 'Aguirre, Renata', tutor: 'Aguirre, Sergio', firmado: true },
        { nombre: 'Ortiz, Facundo', tutor: 'Ortiz, Elena', firmado: false },
        { nombre: 'Silva, Antonella', tutor: 'Silva, Gustavo', firmado: true },
    ],
    '4° B': [
        { nombre: 'Rojas, Santino', tutor: 'Rojas, Alejandra', firmado: false },
        { nombre: 'Navarro, Bianca', tutor: 'Navarro, Eduardo', firmado: true },
    ],
    '5° A': [
        { nombre: 'Ríos, Máximo', tutor: 'Ríos, Marcela', firmado: true },
        { nombre: 'Vega, Martina', tutor: 'Vega, Raúl', firmado: false },
        { nombre: 'Cabrera, Salvador', tutor: 'Cabrera, Marta', firmado: true },
    ],
    '5° B': [
        { nombre: 'Molina, Helena', tutor: 'Molina, Javier', firmado: false },
        { nombre: 'Domínguez, León', tutor: 'Domínguez, Teresa', firmado: true },
    ],
    '6° A': [
        { nombre: 'Peralta, Ambar', tutor: 'Peralta, Oscar', firmado: true },
        { nombre: 'Ibáñez, Ciro', tutor: 'Ibáñez, Claudia', firmado: false },
        { nombre: 'Ledesma, Jazmín', tutor: 'Ledesma, Rubén', firmado: true },
        { nombre: 'Carrizo, Dylan', tutor: 'Carrizo, Lorena', firmado: false },
    ],
    '6° B': [
        { nombre: 'Miranda, Pilar', tutor: 'Miranda, Ariel', firmado: true },
        { nombre: 'Paz, Genaro', tutor: 'Paz, Sonia', firmado: false },
        { nombre: 'Escobar, Lola', tutor: 'Escobar, Damián', firmado: true },
    ],
};

// ---- STATE ----
let currentRole = null;
let roleConfig = null;
let comunicados = [];
let selectedFiles = [];
let currentTab = 'todos';
let currentDetailId = null;
let currentSignId = null;
let currentDeleteId = null;
let currentPage = 1;
const ITEMS_PER_PAGE = 10;
const MAX_VISIBLE_PAGES = 5;

// ---- INIT ----
document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    currentRole = params.get('rol') || 'alumno';

    if (!ROLES_CONFIG[currentRole]) {
        currentRole = 'alumno';
    }

    roleConfig = ROLES_CONFIG[currentRole];

    loadComunicados();
    initializeUI();
    initIcons();
});

function loadComunicados() {
    const stored = localStorage.getItem('comunicados_data');
    if (stored) {
        comunicados = JSON.parse(stored);
    } else {
        comunicados = getDefaultComunicados();
        saveComunicados();
    }
}

function saveComunicados() {
    localStorage.setItem('comunicados_data', JSON.stringify(comunicados));
}

function getDefaultComunicados() {
    return [
        {
            id: 1,
            titulo: 'Inicio de clases y actos protocolares',
            contenido: 'Estimadas familias, les informamos el cronograma para el primer día de clases del ciclo lectivo 2026. El acto de apertura se realizará a las 8:00 hs en el patio central. Se solicita asistencia puntual. Los alumnos deberán presentarse con el uniforme completo. Posteriormente se realizará la presentación de los docentes y se entregarán los horarios definitivos de cada curso.',
            tipo: 'institucional',
            destinatarios: 'todos',
            cursos: [],
            fecha: '2026-02-23',
            autor: 'Dirección',
            archivos: ['Cronograma_2026.pdf', 'Horarios_provisorios.xlsx'],
            firmas: {}
        },
        {
            id: 2,
            titulo: 'Reunión de padres - Primer trimestre',
            contenido: 'Se convoca a todos los tutores y familias a la reunión de padres del primer trimestre que se llevará a cabo el día viernes 7 de marzo a las 18:30 hs. Cada curso tendrá asignada un aula para el encuentro con los respectivos docentes. Se ruega confirmar asistencia firmando este comunicado. La reunión es fundamental para establecer los acuerdos pedagógicos y de convivencia del año.',
            tipo: 'institucional',
            destinatarios: 'todos',
            cursos: [],
            fecha: '2026-02-20',
            autor: 'Secretaría',
            archivos: ['Agenda_reunion.pdf'],
            firmas: {}
        },
        {
            id: 3,
            titulo: 'Salida educativa - Museo de Ciencias',
            contenido: 'Informamos que los alumnos de 3° año realizarán una salida educativa al Museo de Ciencias Naturales el día miércoles 12 de marzo. Horario de salida: 9:00 hs desde el colegio. Horario estimado de regreso: 14:00 hs. Se solicita autorización firmada por el tutor/a. Llevar vianda y agua.',
            tipo: 'curso',
            destinatarios: 'cursos',
            cursos: ['3° A', '3° B'],
            fecha: '2026-02-18',
            autor: 'Preceptoría',
            archivos: ['Autorizacion_salida.pdf'],
            firmas: {}
        },
        {
            id: 4,
            titulo: 'Cambio de horario - Educación Física',
            contenido: 'Se informa a los alumnos de 5° año que a partir de la semana del 3 de marzo, las clases de Educación Física se dictarán los días martes y jueves de 14:00 a 15:30 hs, en reemplazo del horario anterior (lunes y miércoles). Se solicita tomar nota del cambio.',
            tipo: 'curso',
            destinatarios: 'cursos',
            cursos: ['5° A', '5° B'],
            fecha: '2026-02-15',
            autor: 'Preceptoría',
            archivos: [],
            firmas: {}
        },
        {
            id: 5,
            titulo: 'Jornada de convivencia institucional',
            contenido: 'Invitamos a toda la comunidad educativa a participar de la Jornada de Convivencia Institucional que se realizará el sábado 15 de marzo de 9:00 a 13:00 hs. Habrá actividades recreativas, talleres y un espacio de encuentro entre familias y docentes. ¡Los esperamos!',
            tipo: 'institucional',
            destinatarios: 'todos',
            cursos: [],
            fecha: '2026-02-12',
            autor: 'Dirección',
            archivos: ['Programa_jornada.pdf', 'Mapa_actividades.jpg'],
            firmas: {}
        }
    ];
}

// ---- UI INITIALIZATION ----
function initializeUI() {
    // Set body theme
    document.body.setAttribute('data-theme', roleConfig.theme || 'alumno');

    // Handle profesor (no access)
    if (!roleConfig.canRead) {
        document.getElementById('no-access-section').classList.remove('hidden');
        document.getElementById('comunicados-section').classList.add('hidden');
        document.getElementById('no-access-back').href = roleConfig.panelUrl;
        document.getElementById('user-name').textContent = '';
        document.getElementById('nav-panel').href = roleConfig.panelUrl;
        document.getElementById('nav-logout').href = roleConfig.loginUrl;
        return;
    }

    // Show main section
    document.getElementById('no-access-section').classList.add('hidden');
    document.getElementById('comunicados-section').classList.remove('hidden');

    // Set user info
    document.getElementById('user-name').textContent = roleConfig.userName;

    // Set navigation links
    document.getElementById('nav-panel').href = roleConfig.panelUrl;
    document.getElementById('nav-logout').href = roleConfig.loginUrl;

    // Show role badge for admin
    if (roleConfig.showBadge) {
        const badge = document.getElementById('role-badge');
        badge.classList.remove('hidden');
        badge.classList.add('flex');
        badge.style.background = 'rgba(217, 119, 6, 0.1)';
        badge.querySelector('.w-6').style.background = '#D97706';
        document.getElementById('role-badge-text').textContent = 'Administrador';
        document.getElementById('role-badge-text').style.color = '#D97706';
    }

    // Show/hide create button
    if (roleConfig.canCreate) {
        document.getElementById('btn-crear').classList.remove('hidden');
    }

    // Show/hide stats and firmas
    if (roleConfig.canViewFirmas) {
        document.getElementById('stats-row').classList.remove('hidden');
        document.getElementById('stats-row').style.display = 'grid';
        document.getElementById('firmas-section').classList.remove('hidden');
        document.getElementById('tabs-container').classList.remove('hidden');
        populateFirmasSelect();
    }

    // Populate cursos checkboxes in create modal
    if (roleConfig.canCreate) {
        populateCursoCheckboxes();
    }

    // Apply theme colors to dynamic elements
    applyThemeColors();

    // Render comunicados
    renderComunicados();
    updateStats();
}

function applyThemeColors() {
    // Background color for body and main
    const main = document.querySelector('main');
    const body = document.body;

    // Remove default bg classes and add role-specific ones
    body.className = body.className.replace(/bg-\[#[A-Fa-f0-9]+\]/g, '');
    main.className = main.className.replace(/bg-\[#[A-Fa-f0-9]+\]/g, '');

    if (roleConfig.bgClass) {
        body.classList.add(roleConfig.bgClass);
        main.classList.add(roleConfig.bgClass);
    }

    // Sidebar border
    const aside = document.querySelector('aside');
    aside.className = aside.className.replace(/border-\w+-50/g, '');
    if (roleConfig.borderColor) {
        aside.classList.add(roleConfig.borderColor);
    }

    // Footer border
    const footerDiv = aside.querySelector('.p-4.border-t');
    if (footerDiv) {
        footerDiv.className = footerDiv.className.replace(/border-\w+-50/g, '');
        if (roleConfig.borderColor) {
            footerDiv.classList.add(roleConfig.borderColor);
        }
    }

    // Header border and button
    const header = document.querySelector('header');
    header.className = header.className.replace(/border-\w+-50/g, '');
    if (roleConfig.borderColor) {
        header.classList.add(roleConfig.borderColor);
    }

    const themeBtn = header.querySelector('button');
    if (themeBtn && roleConfig.headerBg) {
        themeBtn.className = themeBtn.className.replace(/bg-\w+-50/g, '');
        themeBtn.classList.add(roleConfig.headerBg);
    }
}

// ---- RENDER COMUNICADOS ----
function getFilteredComunicados() {
    const searchText = (document.getElementById('search-input').value || '').toLowerCase();

    let filtered = comunicados.filter(c => {
        if (currentTab === 'institucional' && c.tipo !== 'institucional') return false;
        if (currentTab === 'curso' && c.tipo !== 'curso') return false;
        if (searchText) {
            return c.titulo.toLowerCase().includes(searchText) ||
                c.contenido.toLowerCase().includes(searchText) ||
                c.autor.toLowerCase().includes(searchText);
        }
        return true;
    });

    // Sort by date desc
    filtered.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    return filtered;
}

function renderComunicados() {
    const listEl = document.getElementById('comunicados-list');
    const emptyEl = document.getElementById('empty-state');
    const filtered = getFilteredComunicados();

    if (filtered.length === 0) {
        listEl.innerHTML = '';
        emptyEl.classList.remove('hidden');
        renderPagination(0);
        return;
    }

    emptyEl.classList.add('hidden');

    // Pagination
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageItems = filtered.slice(start, end);

    listEl.innerHTML = pageItems.map(c => {
        const isFirmado = c.firmas && c.firmas[currentRole];
        const daysAgo = getDaysAgo(c.fecha);
        const badgeClass = c.tipo === 'institucional' ? 'badge-institucional' : 'badge-curso';
        const badgeText = c.tipo === 'institucional' ? 'Institucional' : `Curso: ${c.cursos.join(', ')}`;

        let actionsHtml = '';

        if (roleConfig.canSign) {
            if (isFirmado) {
                actionsHtml += `<span class="badge badge-firmado"><i data-lucide="check-circle" class="w-3 h-3"></i> Firmado</span>`;
            } else {
                actionsHtml += `<button class="btn-sign" onclick="event.stopPropagation(); openSignModal(${c.id})"><i data-lucide="pen-tool" class="w-3.5 h-3.5"></i> Firmar</button>`;
            }
        }

        if (roleConfig.canDelete) {
            actionsHtml += `<button class="btn-danger" onclick="event.stopPropagation(); openDeleteModal(${c.id})" style="padding: 0.375rem 0.625rem;"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>`;
        }

        return `
            <div class="comunicado-card" onclick="openDetailModal(${c.id})">
                <div class="flex justify-between items-start mb-2">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="badge ${badgeClass}">${badgeText}</span>
                        ${c.archivos.length > 0 ? `<span class="badge" style="background:rgba(139,92,246,0.1); color:#7C3AED;"><i data-lucide="paperclip" class="w-3 h-3"></i> ${c.archivos.length}</span>` : ''}
                    </div>
                    <span class="text-xs text-slate-400 font-bold flex items-center gap-1 flex-shrink-0">
                        <i data-lucide="clock" class="w-3 h-3"></i> ${daysAgo}
                    </span>
                </div>
                <h4 class="text-base font-bold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-blue-600 transition">${c.titulo}</h4>
                <p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">${c.contenido}</p>
                <div class="flex items-center justify-between">
                    <span class="text-xs text-slate-400 font-bold">Por: ${c.autor}</span>
                    <div class="flex items-center gap-2" onclick="event.stopPropagation()">
                        ${actionsHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    renderPagination(totalPages);

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderPagination(totalPages) {
    let paginationEl = document.getElementById('pagination-controls');
    if (!paginationEl) {
        paginationEl = document.createElement('div');
        paginationEl.id = 'pagination-controls';
        const listEl = document.getElementById('comunicados-list');
        listEl.parentNode.insertBefore(paginationEl, listEl.nextSibling);
    }

    if (totalPages <= 1) {
        paginationEl.innerHTML = '';
        return;
    }

    let html = '<div class="pagination">';

    // Prev button
    html += `<button class="pagination-btn ${currentPage === 1 ? 'disabled' : ''}" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">Prev</button>`;

    // Page numbers
    let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
    let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);
    if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
        startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        html += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
    }

    // Next button
    html += `<button class="pagination-btn ${currentPage === totalPages ? 'disabled' : ''}" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">Next</button>`;

    html += '</div>';
    paginationEl.innerHTML = html;
}

function goToPage(page) {
    currentPage = page;
    renderComunicados();
    // Scroll to top of list
    document.querySelector('.flex-1.overflow-y-auto').scrollTop = 0;
}

function getDaysAgo(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'Hoy';
    if (diff === 1) return '1d';
    if (diff < 30) return `${diff}d`;
    if (diff < 365) return `${Math.floor(diff / 30)}m`;
    return `${Math.floor(diff / 365)}a`;
}

function updateStats() {
    if (!roleConfig.canViewFirmas) return;

    document.getElementById('stat-total').textContent = comunicados.length;

    // Count firmas today (demo)
    let firmados = 0;
    let pendientes = 0;
    comunicados.forEach(c => {
        const totalFirmas = Object.keys(c.firmas || {}).length;
        firmados += totalFirmas;
    });

    // Estimate pending (total possible - signed)
    const totalPossible = comunicados.reduce((acc, c) => {
        if (c.destinatarios === 'todos') return acc + 10;
        return acc + c.cursos.reduce((a, curso) => a + (ALUMNOS_POR_CURSO[curso] ? ALUMNOS_POR_CURSO[curso].length : 0), 0);
    }, 0);

    pendientes = Math.max(0, totalPossible - firmados);

    document.getElementById('stat-firmados').textContent = firmados;
    document.getElementById('stat-pendientes').textContent = pendientes;
}

// ---- FILTERS ----
function filterTab(tab) {
    currentTab = tab;
    currentPage = 1;
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });
    renderComunicados();
}

function filterComunicados() {
    currentPage = 1;
    renderComunicados();
}

// ---- MODALS ----
function openModal(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = '';
}

// ---- DETAIL MODAL ----
function openDetailModal(id) {
    const c = comunicados.find(x => x.id === id);
    if (!c) return;

    currentDetailId = id;

    document.getElementById('detail-title').textContent = c.titulo;
    document.getElementById('detail-body').textContent = c.contenido;
    document.getElementById('detail-date').textContent = formatDate(c.fecha);

    const badge = document.getElementById('detail-badge');
    badge.className = `badge ${c.tipo === 'institucional' ? 'badge-institucional' : 'badge-curso'}`;
    badge.textContent = c.tipo === 'institucional' ? 'Institucional' : `Curso: ${c.cursos.join(', ')}`;

    // Destinatarios
    document.getElementById('detail-dest-text').textContent =
        c.destinatarios === 'todos' ? 'Todo el Colegio' : `Cursos: ${c.cursos.join(', ')}`;

    // Attachments
    const attachDiv = document.getElementById('detail-attachments');
    const filesList = document.getElementById('detail-files-list');
    if (c.archivos.length > 0) {
        attachDiv.classList.remove('hidden');
        filesList.innerHTML = c.archivos.map(f => {
            const ext = f.split('.').pop().toUpperCase();
            const colors = {
                PDF: 'bg-red-100 text-red-600',
                XLSX: 'bg-green-100 text-green-600',
                XLS: 'bg-green-100 text-green-600',
                DOC: 'bg-blue-100 text-blue-600',
                DOCX: 'bg-blue-100 text-blue-600',
                JPG: 'bg-purple-100 text-purple-600',
                PNG: 'bg-purple-100 text-purple-600'
            };
            const colorClass = colors[ext] || 'bg-slate-100 text-slate-600';
            return `
                <div class="attachment-item">
                    <div class="attachment-icon ${colorClass}">
                        <i data-lucide="file" class="w-4 h-4"></i>
                    </div>
                    <span class="flex-1">${f}</span>
                    <span class="text-xs text-slate-400 font-bold">${ext}</span>
                </div>
            `;
        }).join('');
    } else {
        attachDiv.classList.add('hidden');
    }

    // Footer actions
    const footer = document.getElementById('detail-footer');
    let footerHtml = '';

    if (roleConfig.canSign) {
        const isFirmado = c.firmas && c.firmas[currentRole];
        if (isFirmado) {
            footerHtml += `<span class="btn-sign signed"><i data-lucide="check-circle" class="w-4 h-4"></i> Ya Firmado</span>`;
        } else {
            footerHtml += `<button class="btn-sign" onclick="closeModal('modal-detail'); openSignModal(${c.id})"><i data-lucide="pen-tool" class="w-4 h-4"></i> Firmar</button>`;
        }
    }

    if (roleConfig.canDelete) {
        footerHtml += `<button class="btn-danger" onclick="closeModal('modal-detail'); openDeleteModal(${c.id})"><i data-lucide="trash-2" class="w-4 h-4"></i> Eliminar</button>`;
    }

    footerHtml += `<button class="btn-secondary" onclick="closeModal('modal-detail')">Cerrar</button>`;
    footer.innerHTML = footerHtml;

    openModal('modal-detail');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return d.toLocaleDateString('es-AR', options);
}

// ---- CREATE MODAL ----
function openCreateModal() {
    document.getElementById('create-title').value = '';
    document.getElementById('create-body').value = '';
    document.getElementById('create-dest').value = 'todos';
    document.getElementById('curso-selector-group').classList.add('hidden');
    selectedFiles = [];
    document.getElementById('file-list').innerHTML = '';
    document.getElementById('file-input').value = '';

    // Uncheck all checkboxes
    document.querySelectorAll('#curso-checkboxes input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
        cb.closest('.curso-checkbox').classList.remove('selected');
    });

    openModal('modal-create');
}

function toggleCursoSelector() {
    const dest = document.getElementById('create-dest').value;
    const group = document.getElementById('curso-selector-group');
    if (dest === 'cursos') {
        group.classList.remove('hidden');
    } else {
        group.classList.add('hidden');
    }
}

function populateCursoCheckboxes() {
    const container = document.getElementById('curso-checkboxes');
    container.innerHTML = CURSOS.map(curso => `
        <label class="curso-checkbox" onclick="this.classList.toggle('selected')">
            <input type="checkbox" value="${curso}"> ${curso}
        </label>
    `).join('');
}

function handleFileSelect(event) {
    const files = Array.from(event.target.files);
    files.forEach(f => {
        if (!selectedFiles.find(sf => sf.name === f.name)) {
            selectedFiles.push(f);
        }
    });
    renderFileList();
}

function renderFileList() {
    const container = document.getElementById('file-list');
    if (selectedFiles.length === 0) {
        container.innerHTML = '';
        return;
    }
    container.innerHTML = selectedFiles.map((f, i) => `
        <span class="file-chip">
            <i data-lucide="file" class="w-3 h-3"></i>
            ${f.name}
            <button onclick="event.stopPropagation(); removeFile(${i})">
                <i data-lucide="x" class="w-3 h-3"></i>
            </button>
        </span>
    `).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function removeFile(index) {
    selectedFiles.splice(index, 1);
    renderFileList();
}

function createComunicado() {
    const titulo = document.getElementById('create-title').value.trim();
    const contenido = document.getElementById('create-body').value.trim();
    const dest = document.getElementById('create-dest').value;

    if (!titulo || !contenido) {
        alert('Por favor completá el título y el contenido del comunicado.');
        return;
    }

    let cursosSelected = [];
    if (dest === 'cursos') {
        cursosSelected = Array.from(document.querySelectorAll('#curso-checkboxes input:checked')).map(cb => cb.value);
        if (cursosSelected.length === 0) {
            alert('Por favor seleccioná al menos un curso.');
            return;
        }
    }

    const newId = comunicados.length > 0 ? Math.max(...comunicados.map(c => c.id)) + 1 : 1;

    const nuevo = {
        id: newId,
        titulo: titulo,
        contenido: contenido,
        tipo: dest === 'todos' ? 'institucional' : 'curso',
        destinatarios: dest,
        cursos: cursosSelected,
        fecha: new Date().toISOString().split('T')[0],
        autor: roleConfig.autorLabel || roleConfig.label,
        archivos: selectedFiles.map(f => f.name),
        firmas: {}
    };

    comunicados.unshift(nuevo);
    saveComunicados();
    closeModal('modal-create');
    renderComunicados();
    updateStats();
    populateFirmasSelect();
}

// ---- SIGN ----
function openSignModal(id) {
    const c = comunicados.find(x => x.id === id);
    if (!c) return;
    currentSignId = id;
    document.getElementById('sign-comunicado-title').textContent = c.titulo;
    openModal('modal-sign');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function confirmSign() {
    if (currentSignId === null) return;

    // Validate password
    const passInput = document.getElementById('sign-password');
    const errorEl = document.getElementById('sign-password-error');
    if (passInput) {
        const password = passInput.value.trim();
        if (!password) {
            if (errorEl) {
                errorEl.textContent = 'Ingresá tu clave para firmar.';
                errorEl.classList.remove('hidden');
            }
            passInput.focus();
            return;
        }
        // Demo: accept any non-empty password (in production, validate against backend)
        if (errorEl) errorEl.classList.add('hidden');
    }

    const c = comunicados.find(x => x.id === currentSignId);
    if (c) {
        if (!c.firmas) c.firmas = {};
        c.firmas[currentRole] = {
            fecha: new Date().toISOString(),
            nombre: roleConfig.userName
        };
        saveComunicados();
    }
    if (passInput) passInput.value = '';
    closeModal('modal-sign');
    currentSignId = null;
    renderComunicados();
    updateStats();
}

// ---- DELETE ----
function openDeleteModal(id) {
    const c = comunicados.find(x => x.id === id);
    if (!c) return;
    currentDeleteId = id;
    document.getElementById('delete-comunicado-title').textContent = c.titulo;
    openModal('modal-delete');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function confirmDelete() {
    if (currentDeleteId === null) return;
    comunicados = comunicados.filter(c => c.id !== currentDeleteId);
    saveComunicados();
    closeModal('modal-delete');
    currentDeleteId = null;
    renderComunicados();
    updateStats();
    populateFirmasSelect();
}

// ---- FIRMAS PANEL ----
function populateFirmasSelect() {
    if (!roleConfig.canViewFirmas) return;
    const select = document.getElementById('firmas-comunicado-select');
    select.innerHTML = '<option value="">Seleccionar comunicado...</option>';
    comunicados.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.titulo;
        select.appendChild(opt);
    });
}

function loadFirmasForComunicado() {
    const select = document.getElementById('firmas-comunicado-select');
    const content = document.getElementById('firmas-content');
    const id = parseInt(select.value);

    if (!id) {
        content.innerHTML = `
            <div class="empty-state">
                <i data-lucide="clipboard-list" class="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600"></i>
                <p class="text-slate-400 dark:text-slate-500 font-bold mt-3">Seleccioná un comunicado para ver el estado de firmas</p>
            </div>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    const c = comunicados.find(x => x.id === id);
    if (!c) return;

    // Determine which courses to show
    let cursosToShow = [];
    if (c.destinatarios === 'todos') {
        cursosToShow = CURSOS;
    } else {
        cursosToShow = c.cursos;
    }

    let html = '';
    cursosToShow.forEach(curso => {
        const alumnos = ALUMNOS_POR_CURSO[curso] || [];
        const firmados = alumnos.filter(a => a.firmado).length;
        const total = alumnos.length;
        const pct = total > 0 ? Math.round((firmados / total) * 100) : 0;
        const cursoId = curso.replace(/[°\s]/g, '');

        html += `
            <div class="border-b border-slate-50 dark:border-slate-700">
                <div class="firmas-curso-header" onclick="toggleCurso('${cursoId}')">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background: var(--role-primary-light);">
                            <i data-lucide="users" class="w-4 h-4" style="color: var(--role-primary);"></i>
                        </div>
                        <div>
                            <p class="font-bold text-sm text-slate-700 dark:text-slate-200">${curso}</p>
                            <p class="text-xs text-slate-400">${firmados}/${total} firmados</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-32">
                            <div class="progress-bar-bg">
                                <div class="progress-bar-fill" style="width: ${pct}%"></div>
                            </div>
                        </div>
                        <span class="text-sm font-extrabold ${pct === 100 ? 'text-green-500' : 'text-amber-500'}">${pct}%</span>
                        <i data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform" id="chevron-${cursoId}"></i>
                    </div>
                </div>
                <div class="hidden" id="curso-detail-${cursoId}">
                    ${alumnos.map(a => `
                        <div class="firmas-alumno-row">
                            <div>
                                <p class="font-bold text-slate-700 dark:text-slate-200">${a.nombre}</p>
                                <p class="text-xs text-slate-400">Tutor: ${a.tutor}</p>
                            </div>
                            <span class="badge ${a.firmado ? 'badge-firmado' : 'badge-pendiente'}">
                                <i data-lucide="${a.firmado ? 'check-circle' : 'clock'}" class="w-3 h-3"></i>
                                ${a.firmado ? 'Firmado' : 'Pendiente'}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    content.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function toggleCurso(cursoId) {
    const detail = document.getElementById(`curso-detail-${cursoId}`);
    const chevron = document.getElementById(`chevron-${cursoId}`);

    if (detail.classList.contains('hidden')) {
        detail.classList.remove('hidden');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    } else {
        detail.classList.add('hidden');
        if (chevron) chevron.style.transform = '';
    }
}

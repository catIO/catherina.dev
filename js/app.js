/**
 * catherina.dev App Store Controller
 */

(function () {
    'use strict';

    // State
    let currentCategory = 'all';
    let searchQuery = '';
    let activeModalApp = null;

    // DOM Elements
    const appsGrid = document.getElementById('apps-grid');
    const appsCountEl = document.getElementById('apps-count');
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const filterBtns = document.querySelectorAll('.category-btn');
    const modalBackdrop = document.getElementById('app-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalContent = document.getElementById('modal-content');
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Theme Management
    function initTheme() {
        const savedTheme = localStorage.getItem('catherina-theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('catherina-theme', next);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Filter & Search Logic
    function getFilteredApps() {
        return APPS_DATA.filter(app => {
            // Category filter
            const matchesCategory = currentCategory === 'all' || app.categoryKey === currentCategory;

            // Search filter
            if (!matchesCategory) return false;
            if (!searchQuery) return true;

            const q = searchQuery.toLowerCase();
            const inTitle = app.title.toLowerCase().includes(q);
            const inSubtitle = app.subtitle.toLowerCase().includes(q);
            const inDesc = app.description.toLowerCase().includes(q);
            const inCategory = app.category.toLowerCase().includes(q);
            const inTech = app.techStack.some(t => t.toLowerCase().includes(q));

            return inTitle || inSubtitle || inDesc || inCategory || inTech;
        });
    }

    // Render Cards
    function renderApps() {
        const filtered = getFilteredApps();

        // Update count label
        if (appsCountEl) {
            const countText = filtered.length === 1 ? '1 application' : `${filtered.length} applications`;
            appsCountEl.textContent = currentCategory === 'all' && !searchQuery
                ? `All Apps (${countText})`
                : `Showing ${countText}`;
        }

        if (filtered.length === 0) {
            appsGrid.innerHTML = `
                <div class="no-results">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <p style="font-size: 1.15rem; font-weight: 600; margin-bottom: 0.5rem; color: var(--text-primary);">No applications found</p>
                    <p>Try refining your search keyword or selecting a different category.</p>
                </div>
            `;
            return;
        }

        appsGrid.innerHTML = filtered.map(app => {
            return `
                <button type="button" class="app-icon-item" data-app-id="${escapeHtml(app.id)}" aria-haspopup="dialog" aria-label="View ${escapeHtml(app.title)} details">
                    <div class="app-icon-box">
                        <img src="${escapeHtml(app.icon)}" alt="${escapeHtml(app.title)} icon" class="app-icon-img" loading="lazy" />
                    </div>
                    <span class="app-icon-label">${escapeHtml(app.title)}</span>
                    <span class="app-icon-sub">${escapeHtml(app.category.split('&')[0].trim())}</span>
                </button>
            `;
        }).join('');

        // Icon click opens modal card with full information
        document.querySelectorAll('.app-icon-item').forEach(item => {
            item.addEventListener('click', () => {
                const appId = item.getAttribute('data-app-id');
                openAppModal(appId);
            });
        });
    }

    // Modal Sheet Management
    function openAppModal(appId, updateHash = true) {
        const aliases = { 
            'practice-timer': 'practice-mate', 
            'practice-koh-pilot': 'koh-pilot', 
            'spot': 'spot-practice',
            'planning-mate': 'practice-planner'
        };
        const targetId = aliases[appId] || appId;
        const app = APPS_DATA.find(a => a.id === targetId);
        if (!app) return;

        activeModalApp = app;

        // Render features list
        const featuresHtml = app.features.map(feat => `
            <li class="modal-feature-item">
                <svg class="modal-feature-check" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>${escapeHtml(feat)}</span>
            </li>
        `).join('');

        // Render tech pills
        const techHtml = app.techStack.map(tech => `
            <span class="modal-tech-pill">${escapeHtml(tech)}</span>
        `).join('');

        modalContent.innerHTML = `
            <div class="modal-header-hero">
                <div class="modal-icon-wrapper">
                    <img src="${escapeHtml(app.icon)}" alt="${escapeHtml(app.title)}" class="modal-icon-img" />
                </div>
                <div class="modal-header-meta">
                    <h2 class="modal-title">${escapeHtml(app.title)}</h2>
                    <p class="modal-subtitle">${escapeHtml(app.subtitle)}</p>
                    <div class="modal-dev-line">
                        Developed by <span style="font-weight: 600; color: var(--text-primary);">Catherina</span> • 
                        <span>${escapeHtml(app.category)}</span>
                    </div>
                    <div class="modal-actions">
                        <a href="${escapeHtml(app.appUrl)}" target="_blank" rel="noopener noreferrer" class="modal-btn-launch">
                            <span>${app.appUrl.includes('github.com') ? 'View on GitHub' : 'Open Application'}</span>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="modal-stats-row">
                <div class="stat-item">
                    <span class="stat-label">Platform</span>
                    <span class="stat-value">${escapeHtml(app.platform)}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Category</span>
                    <span class="stat-value">${escapeHtml(app.category.split('&')[0].trim())}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Status</span>
                    <span class="stat-value">${escapeHtml(app.status)}</span>
                </div>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">About</h3>
                <p class="modal-desc-text">${escapeHtml(app.description)}</p>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Key Features</h3>
                <ul class="modal-features-list">
                    ${featuresHtml}
                </ul>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Technology Stack</h3>
                <div class="modal-tech-pills">
                    ${techHtml}
                </div>
            </div>
        `;

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';

        if (updateHash) {
            window.location.hash = `app=${encodeURIComponent(app.id)}`;
        }

        // Focus close button for accessibility
        if (modalCloseBtn) {
            modalCloseBtn.focus();
        }
    }

    function closeAppModal(updateHash = true) {
        if (!modalBackdrop.classList.contains('active')) return;

        modalBackdrop.classList.remove('active');
        document.body.style.overflow = '';
        activeModalApp = null;

        if (updateHash && window.location.hash.startsWith('#app=')) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    }

    // Hash routing for direct modal sharing
    function checkHashRoute() {
        const hash = window.location.hash;
        if (hash.startsWith('#app=')) {
            const appId = decodeURIComponent(hash.replace('#app=', ''));
            openAppModal(appId, false);
        } else if (activeModalApp) {
            closeAppModal(false);
        }
    }

    // Helpers
    function escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // Event Listeners
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => closeAppModal(true));
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeAppModal(true);
            }
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
            closeAppModal(true);
        }
    });

    window.addEventListener('hashchange', checkHashRoute);

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderApps();
        });
    });

    // Search Input
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            if (searchClear) {
                searchClear.style.display = searchQuery ? 'block' : 'none';
            }
            renderApps();
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            searchClear.style.display = 'none';
            searchInput.focus();
            renderApps();
        });
    }

    // Initialize
    initTheme();
    renderApps();
    checkHashRoute();

})();

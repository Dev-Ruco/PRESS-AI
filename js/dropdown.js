document.addEventListener('DOMContentLoaded', function() {
    // Controle do menu de perfil
    const profileImage = document.querySelector('.profile-image');
    const profileMenu = document.querySelector('.profile-menu');
    const account = document.querySelector('.account');

    if (profileImage && profileMenu && account) {
        // Abrir o menu ao clicar no perfil
        profileImage.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            profileMenu.classList.toggle('active');
        });

        // Fechar o menu quando clicar em QUALQUER lugar da página
        document.addEventListener('click', function(e) {
            if (!account.contains(e.target)) {
                profileMenu.classList.remove('active');
            }
        });

        // Fechar também com a tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                profileMenu.classList.remove('active');
            }
        });
    }

    // Controle do menu mobile
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const mobileOverlay = document.getElementById('mobileOverlay');

    function openMobileMenu() {
        sidebar.classList.add('active');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        sidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle && mobileOverlay && sidebar) {
        // Click no botão do menu
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (sidebar.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });

        // Click no overlay
        mobileOverlay.addEventListener('click', closeMobileMenu);

        // Tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebar.classList.contains('active')) {
                closeMobileMenu();
            }
        });

        // Swipe para fechar
        let touchStartX = 0;
        sidebar.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        sidebar.addEventListener('touchmove', (e) => {
            if (!sidebar.classList.contains('active')) return;
            
            const touchEndX = e.touches[0].clientX;
            const diffX = touchStartX - touchEndX;

            if (diffX > 50) { // Swipe para esquerda
                closeMobileMenu();
            }
        });
    }
});

// Controle do sidebar
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const toggleIcon = sidebarToggle.querySelector('.material-icons');
    
    // Restaurar estado do sidebar
    const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    if (isCollapsed) {
        sidebar.classList.add('collapsed');
        document.body.classList.add('sidebar-collapsed');
        toggleIcon.textContent = 'menu';
    }

    // Toggle do sidebar
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        document.body.classList.toggle('sidebar-collapsed');
        
        // Alternar ícone
        toggleIcon.textContent = sidebar.classList.contains('collapsed') 
            ? 'menu' 
            : 'menu_open';
        
        // Salvar preferência
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });

    // Controle do menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const mobileOverlay = document.getElementById('mobileOverlay');

    if (menuToggle && mobileOverlay) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
        });

        mobileOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            mobileOverlay.classList.remove('active');
        });
    }
}); 
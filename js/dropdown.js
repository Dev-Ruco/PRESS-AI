document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.querySelector('.profile-image');
    const profileMenu = document.querySelector('.profile-menu');
    const account = document.querySelector('.account');

    if (!profileImage || !profileMenu || !account) return;

    // Abrir o menu ao clicar no perfil
    profileImage.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        profileMenu.classList.toggle('active');
    });

    // Fechar o menu quando clicar em QUALQUER lugar da página
    document.addEventListener('click', function(e) {
        // Verifica se o clique foi fora do menu e do ícone do perfil
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
}); 
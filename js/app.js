/**
 * Press AI - Aplicação Principal
 * 
 * Este arquivo contém as funcionalidades principais da aplicação
 */

// Configuração global
const PressAI = {
    // Configurações da aplicação
    config: {
        apiUrl: 'https://api.pressai.com',
        version: '1.0.0',
        debug: true
    },
    
    // Estado da aplicação
    state: {
        isLoading: false,
        currentUser: null,
        isAuthenticated: false
    },
    
    // Inicialização da aplicação
    init() {
        console.log('Inicializando Press AI...');
        
        // Inicializar eventos globais
        this.initEvents();
        
        // Verificar autenticação do usuário
        this.checkAuth();
        
        // Carregar tema e preferências
        this.loadPreferences();
        
        console.log('Press AI inicializado com sucesso!');
    },
    
    // Inicializar eventos globais
    initEvents() {
        // Manipulador de clique para botão de menu
        const menuToggle = document.getElementById('menuToggle');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const sidebar = document.querySelector('.sidebar');
        
        if (menuToggle && mobileOverlay && sidebar) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                mobileOverlay.classList.toggle('active');
            });
            
            mobileOverlay.addEventListener('click', () => {
                sidebar.classList.remove('active');
                mobileOverlay.classList.remove('active');
            });
        }
        
        // Manipulador para botão de novo artigo no header
        const newArticleBtn = document.getElementById('newArticleBtn');
        if (newArticleBtn) {
            newArticleBtn.addEventListener('click', () => {
                window.location.hash = '#/novo-artigo';
            });
        }
        
        // Gerenciar dropdown da conta do usuário
        const accountElement = document.querySelector('.account');
        if (accountElement) {
            accountElement.addEventListener('click', (e) => {
                accountElement.classList.toggle('active');
                e.stopPropagation();
            });
            
            // Fechar dropdown ao clicar fora
            document.addEventListener('click', () => {
                accountElement.classList.remove('active');
            });
        }
    },
    
    // Verificar autenticação do usuário
    checkAuth() {
        // Simular verificação de autenticação
        // Em uma app real, você verificaria tokens, cookies, etc.
        const token = localStorage.getItem('auth_token');
        if (token) {
            this.state.isAuthenticated = true;
            this.state.currentUser = {
                name: 'Usuário Exemplo',
                email: 'usuario@exemplo.com',
                role: 'editor'
            };
            
            this.updateUserInterface();
        }
    },
    
    // Atualizar interface com dados do usuário
    updateUserInterface() {
        if (this.state.isAuthenticated && this.state.currentUser) {
            // Atualizar nome e email na interface
            const nameElement = document.querySelector('.profile-info h4');
            const emailElement = document.querySelector('.profile-info p');
            
            if (nameElement) nameElement.textContent = this.state.currentUser.name;
            if (emailElement) emailElement.textContent = this.state.currentUser.email;
        }
    },
    
    // Carregar preferências do usuário
    loadPreferences() {
        // Carregar tema (claro/escuro)
        const prefersDarkTheme = localStorage.getItem('dark_theme') === 'true';
        if (prefersDarkTheme) {
            document.body.classList.add('dark-theme');
        }
    },
    
    // Função para exibir notificações
    showNotification(message, type = 'info') {
        // Verificar se o componente de notificação está carregado
        if (window.Notification) {
            window.Notification.show(message, type);
        } else {
            // Fallback simples se o componente não estiver disponível
            alert(message);
        }
    },
    
    // Sistema de logging para facilitar depuração
    log(message, level = 'info') {
        if (this.config.debug || level === 'error') {
            const timestamp = new Date().toISOString();
            console[level](`[${timestamp}] ${message}`);
        }
    }
};

// Inicializar aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    PressAI.init();
});

// Expor globalmente
window.PressAI = PressAI; 
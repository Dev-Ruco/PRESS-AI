class App {
    constructor() {
        console.log('Iniciando aplicação...');
        this.initApp();
    }

    async initApp() {
        console.log('Configurando aplicação...');
        // Configura o router
        this.setupRouter();
        
        // Carrega a página inicial
        await this.loadInitialPage();

        // Configura eventos globais
        this.setupGlobalEvents();
    }

    setupRouter() {
        console.log('Configurando router...');
        // Listener para mudanças na hash da URL
        window.addEventListener('hashchange', () => {
            console.log('Hash mudou:', window.location.hash);
            this.handleRoute();
        });
    }

    async loadInitialPage() {
        console.log('Carregando página inicial...');
        // Se não houver hash, carrega o dashboard
        if (!window.location.hash) {
            console.log('Sem hash, carregando dashboard...');
            window.location.hash = '#/dashboard';
        } else {
            // Se houver hash, carrega a página correspondente
            console.log('Hash encontrada:', window.location.hash);
            await this.handleRoute();
        }
    }

    async handleRoute() {
        // Remove o '#/' da hash e obtém o nome da página
        const page = window.location.hash.slice(2) || 'dashboard';
        console.log('Carregando rota para:', page);
        await this.loadPage(page);
        this.updateActiveMenuItem(page);
    }

    async loadPage(page) {
        console.log(`Tentando carregar página: ${page}`);
        const mainContent = document.querySelector('.content-wrapper');
        if (!mainContent) {
            console.error('Elemento content-wrapper não encontrado');
            return;
        }

        try {
            // Alterado de views/ para templates/
            const response = await fetch(`templates/${page}.html`);
            console.log('Status da resposta:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const content = await response.text();
            mainContent.innerHTML = content;
            console.log('Conteúdo inserido no DOM');
            
            // Carrega o script específico da página
            this.loadPageScript(page);
        } catch (error) {
            console.error('Erro detalhado ao carregar página:', error);
            mainContent.innerHTML = `
                <div class="content-container">
                    <div class="content-header">
                        <h1>Erro ao carregar página</h1>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <p>Não foi possível carregar a página solicitada.</p>
                            <p>Erro: ${error.message}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    loadPageScript(pageName) {
        // Remover script anterior se existir
        const oldScript = document.querySelector('script[data-page-script]');
        if (oldScript) {
            oldScript.remove();
        }
        
        // Adicionar o novo script
        const script = document.createElement('script');
        script.src = `js/pages/${pageName}.js`;
        script.setAttribute('data-page-script', pageName);
        script.onerror = () => console.warn(`Script para ${pageName} não encontrado`);
        document.body.appendChild(script);
    }

    updateActiveMenuItem(page) {
        console.log('Atualizando item ativo do menu para:', page);
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#/${page}`) {
                item.classList.add('active');
            }
        });
    }

    setupGlobalEvents() {
        console.log('Configurando eventos globais...');
        // Menu mobile
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

        // Dropdown do perfil
        const accountDropdown = document.querySelector('.account');
        if (accountDropdown) {
            accountDropdown.addEventListener('click', () => {
                const dropdown = document.getElementById('account-dropdown');
                dropdown.classList.toggle('show');

                document.addEventListener('click', function(event) {
                    if (!event.target.closest('.account')) {
                        dropdown.classList.remove('show');
                    }
                }, { once: true });
            });
        }

        // Botão de novo artigo no header
        const newArticleBtn = document.getElementById('newArticleBtn');
        if (newArticleBtn) {
            newArticleBtn.addEventListener('click', () => {
                window.location.hash = '#/novo-artigo';
            });
        }

        // Eventos de clique nos itens do menu
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const href = item.getAttribute('href');
                if (href) {
                    window.location.hash = href;
                }
            });
        });

        console.log('Eventos globais configurados');
    }
}

// Inicia a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado, iniciando aplicação...');
    new App();
}); 
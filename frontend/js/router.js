const router = {
    init() {
        console.log('Inicializando router...');
        
        // Carrega a página inicial (dashboard)
        this.loadPage('dashboard');
        
        // Adiciona listeners aos links do menu
        document.querySelectorAll('.menu-item').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.currentTarget.getAttribute('href').slice(2);
                this.loadPage(page);
            });
        });

        // Adiciona listener para o botão de novo artigo
        const newArticleBtn = document.getElementById('newArticleBtn');
        if (newArticleBtn) {
            newArticleBtn.addEventListener('click', () => {
                this.loadPage('novo-artigo');
            });
        }
    },

    async loadPage(pageName) {
        console.log(`Tentando carregar página: ${pageName}`);
        const mainContent = document.getElementById('main-content');
        if (!mainContent) {
            console.error('Elemento main-content não encontrado');
            return;
        }

        try {
            const response = await fetch(`views/${pageName}.html`);
            console.log('Status da resposta:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const content = await response.text();
            mainContent.innerHTML = content;
            console.log('Conteúdo inserido no DOM');
        } catch (error) {
            console.error('Erro detalhado ao carregar página:', error);
            mainContent.innerHTML = `
                <div class="content-container">
                    <div class="content-header">
                        <h1>Erro ao carregar página</h1>
                    </div>
                    <div class="content-body">
                        <p>Não foi possível carregar o conteúdo da página "${pageName}". Por favor, tente novamente.</p>
                        <p>Erro: ${error.message}</p>
                    </div>
                </div>
            `;
        }
    }
};

// Inicializa o router quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado, iniciando router...');
    router.init();
}); 
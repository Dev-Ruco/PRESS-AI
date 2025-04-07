// Configuração das rotas
const routes = {
    '': 'dashboard',
    'painel': 'dashboard',
    'ultimas': 'noticias',
    'novo-artigo': 'editor',
    'reformular': 'reformulador',
    'transcrever': 'transcricao',
    'gestao': 'gestao',
    'analise': 'analise',
    'integracoes': 'integracoes',
    'normas': 'normas'
};

// Função para carregar templates 
async function loadTemplate(templateName) {
    try {
        const response = await fetch(`templates/${templateName}.html`);
        if (!response.ok) {
            throw new Error(`Falha ao carregar o template: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error('Erro ao carregar template:', error);
        return '<div class="error-message">Não foi possível carregar a página</div>';
    }
}

// Função para renderizar a página com base na rota
async function renderPage(route) {
    const contentWrapper = document.querySelector('.content-wrapper');
    if (!contentWrapper) {
        console.error('Container de conteúdo não encontrado');
        return;
    }

    const templateName = routes[route] || 'dashboard';
    
    // Atualizar menu ativo
    updateActiveMenu(route);
    
    // Carregar e renderizar o template
    const templateContent = await loadTemplate(templateName);
    contentWrapper.innerHTML = templateContent;
    
    // Carregar script específico da página
    loadPageScript(templateName);
}

// Carregar script específico da página 
function loadPageScript(pageName) {
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
    
    // Adicionar evento onload para chamar a função de inicialização apropriada
    script.onload = function() {
        console.log(`Script de ${pageName} carregado. Tentando inicializar...`);
        
        // Chamar a função de inicialização correspondente
        switch(pageName) {
            case 'dashboard':
                if (typeof initDashboard === 'function') initDashboard();
                break;
            case 'noticias':
                if (typeof initNoticias === 'function') initNoticias();
                break;
            case 'reformulador':
                if (typeof initReformulador === 'function') initReformulador();
                break;
            case 'editor':
                if (typeof initEditor === 'function') initEditor();
                break;
            case 'transcricao':
                if (typeof initTranscricao === 'function') initTranscricao();
                break;
            case 'analise':
                if (typeof initAnalise === 'function') initAnalise();
                break;
            case 'gestao':
                if (typeof initGestao === 'function') initGestao();
                break;
            case 'integracoes':
                if (typeof initIntegracoes === 'function') initIntegracoes();
                break;
            case 'normas':
                if (typeof initNormas === 'function') initNormas();
                break;
        }
    };
    
    document.body.appendChild(script);
}

// Atualizar o menu ativo
function updateActiveMenu(route) {
    // Remover classe ativa de todos os itens
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Adicionar classe ativa ao item correspondente à rota atual
    const menuItem = document.querySelector(`.menu-item[href="#/${route}"]`);
    if (menuItem) {
        menuItem.classList.add('active');
    }
}

// Inicializar o roteador
function initRouter() {
    // Lidar com mudanças na URL
    window.addEventListener('hashchange', () => {
        const route = window.location.hash.slice(2) || ''; // Remover '#/'
        renderPage(route);
    });
    
    // Lidar com carregamento inicial
    const initialRoute = window.location.hash.slice(2) || '';
    renderPage(initialRoute);
}

// Iniciar o roteador quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initRouter); 
/**
 * Script para a página de Últimas Notícias
 */

// Dados de exemplo para notícias
const noticiasData = [
    {
        id: 1,
        titulo: "Presidente anuncia medidas económicas para impulsionar crescimento",
        fonte: "Lusa",
        categoria: "Política",
        atualizadoEm: "2025-04-07T11:30:00Z"
    },
    {
        id: 2,
        titulo: "Cientistas descobrem tratamento promissor para doença rara",
        fonte: "DW",
        categoria: "Saúde",
        atualizadoEm: "2025-04-07T10:15:00Z"
    },
    {
        id: 3,
        titulo: "Festival internacional de música anuncia programação completa",
        fonte: "Carta de Moçambique",
        categoria: "Cultura",
        atualizadoEm: "2025-04-07T09:45:00Z"
    },
    {
        id: 4,
        titulo: "Bolsa de valores registra alta histórica após anúncio de fusão",
        fonte: "Lusa",
        categoria: "Economia",
        atualizadoEm: "2025-04-07T08:20:00Z"
    },
    {
        id: 5,
        titulo: "Atleta nacional quebra recorde continental em competição",
        fonte: "DW",
        categoria: "Esportes",
        atualizadoEm: "2025-04-07T07:50:00Z"
    },
    {
        id: 6,
        titulo: "Ministério da Educação anuncia investimentos em escolas rurais",
        fonte: "Lusa",
        categoria: "Educação",
        atualizadoEm: "2025-04-06T22:10:00Z"
    },
    {
        id: 7,
        titulo: "Novas tecnologias para agricultura sustentável são apresentadas em feira",
        fonte: "Carta de Moçambique",
        categoria: "Tecnologia",
        atualizadoEm: "2025-04-06T20:30:00Z"
    },
    {
        id: 8,
        titulo: "Região norte do país registra chuvas acima da média para o período",
        fonte: "DW",
        categoria: "Clima",
        atualizadoEm: "2025-04-06T18:45:00Z"
    },
    {
        id: 9,
        titulo: "Congresso aprova projeto de lei que incentiva energias renováveis",
        fonte: "Lusa",
        categoria: "Política",
        atualizadoEm: "2025-04-06T16:20:00Z"
    },
    {
        id: 10,
        titulo: "Nova exposição de arte contemporânea atrai visitantes de todo o país",
        fonte: "Carta de Moçambique",
        categoria: "Cultura",
        atualizadoEm: "2025-04-06T14:10:00Z"
    }
];

// Armazenamento de dados para fontes
const fontesData = {
    fontes: [
        {
            id: 1,
            titulo: "Lusa - Notícias",
            url: "https://www.lusa.pt/rss",
            categoria: "Geral",
            frequencia: 30,
            status: "ativo",
            ultimaChecagem: "2025-04-07T11:30:00Z"
        },
        {
            id: 2,
            titulo: "DW África",
            url: "https://www.dw.com/pt-002/rss/noticias",
            categoria: "Internacional",
            frequencia: 60,
            status: "ativo",
            ultimaChecagem: "2025-04-07T11:15:00Z"
        },
        {
            id: 3,
            titulo: "Carta de Moçambique",
            url: "https://cartamz.com/index.php/feed",
            categoria: "Política",
            frequencia: 120,
            status: "pausado",
            ultimaChecagem: "2025-04-06T22:45:00Z"
        }
    ],
    configuracoes: {
        notificacoes: true,
        emailNotificacoes: false,
        atualizacaoAutomatica: true,
        formatoDefault: "rss",
        idiomaPrincipal: "pt-BR",
        traducaoAutomatica: true,
        periodoRetencao: 30
    }
};

// Configurações de paginação
const configPaginacao = {
    itensPorPagina: 6,
    paginaAtual: 1
};

// Inicializar a página
function initNoticias() {
    console.log('Página de Últimas Notícias inicializada');
    
    // Renderizar notícias
    renderizarNoticias();
    
    // Configurar filtros
    configurarFiltros();
    
    // Configurar paginação
    configurarPaginacao();
    
    // Configurar navegação por abas
    configurarAbas();
    
    // Configurar interface de fontes
    configurarInterfaceFontes();
    
    // Configurar interface de configurações
    configurarInterfaceConfiguracoes();
}

// Configurar navegação por abas
function configurarAbas() {
    const tabs = document.querySelectorAll('.tab-button');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            ativarAba(tabName);
        });
    });
}

// Ativar uma aba específica
function ativarAba(tabName) {
    // Remover classe active de todas as abas
    document.querySelectorAll('.tab-button').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remover classe active de todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Adicionar classe active na aba selecionada
    const selectedTab = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Adicionar classe active no conteúdo selecionado
    const selectedContent = document.getElementById(`tab-${tabName}`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

// Renderizar notícias na página
function renderizarNoticias() {
    const noticiasLista = document.getElementById('noticiasLista');
    const noticiaTemplate = document.getElementById('noticiaTemplate');
    
    // Limpar lista atual
    noticiasLista.innerHTML = '';
    
    // Filtrar e paginar notícias
    const noticiasFiltradas = filtrarNoticias();
    const noticiasPaginadas = paginarNoticias(noticiasFiltradas);
    
    // Atualizar indicadores de paginação
    atualizarPaginacao(noticiasFiltradas.length);
    
    // Verificar se há notícias para exibir
    if (noticiasPaginadas.length === 0) {
        noticiasLista.innerHTML = '<div class="sem-resultados">Nenhuma notícia encontrada com os filtros aplicados.</div>';
        return;
    }
    
    // Adicionar cada notícia à lista
    noticiasPaginadas.forEach(noticia => {
        // Clonar o template
        const noticiaCard = noticiaTemplate.content.cloneNode(true);
        
        // Formatar data e hora
        const dataObj = new Date(noticia.atualizadoEm);
        const hora = dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        const data = dataObj.toLocaleDateString('pt-BR');
        
        // Preencher os dados
        noticiaCard.querySelector('.noticia-titulo').textContent = noticia.titulo;
        noticiaCard.querySelector('.noticia-categoria').textContent = noticia.categoria;
        noticiaCard.querySelector('.noticia-fonte').textContent = noticia.fonte;
        noticiaCard.querySelector('.noticia-hora').textContent = hora;
        noticiaCard.querySelector('.noticia-data').textContent = data;
        
        // Adicionar evento no botão de reformular
        const btnReformular = noticiaCard.querySelector('.noticia-reformular');
        btnReformular.addEventListener('click', () => {
            // Navegar para a página de reformulação com os dados da notícia
            window.location.hash = `#/reformular?id=${noticia.id}`;
        });
        
        // Adicionar à lista
        noticiasLista.appendChild(noticiaCard);
    });
}

// Filtrar notícias com base nos critérios selecionados
function filtrarNoticias() {
    const categoriaFiltro = document.getElementById('filtroCategoria').value;
    const fonteFiltro = document.getElementById('filtroFonte').value;
    const buscaFiltro = document.getElementById('buscaNoticia').value.toLowerCase();
    
    return noticiasData.filter(noticia => {
        // Filtrar por categoria
        if (categoriaFiltro && noticia.categoria !== categoriaFiltro) {
            return false;
        }
        
        // Filtrar por fonte
        if (fonteFiltro && noticia.fonte !== fonteFiltro) {
            return false;
        }
        
        // Filtrar por texto de busca
        if (buscaFiltro && !noticia.titulo.toLowerCase().includes(buscaFiltro)) {
            return false;
        }
        
        return true;
    });
}

// Paginar notícias
function paginarNoticias(noticias) {
    const inicio = (configPaginacao.paginaAtual - 1) * configPaginacao.itensPorPagina;
    const fim = inicio + configPaginacao.itensPorPagina;
    
    return noticias.slice(inicio, fim);
}

// Atualizar indicadores de paginação
function atualizarPaginacao(totalItens) {
    const totalPaginas = Math.ceil(totalItens / configPaginacao.itensPorPagina);
    
    document.getElementById('paginaAtual').textContent = configPaginacao.paginaAtual;
    document.getElementById('paginaTotal').textContent = totalPaginas;
    
    // Habilitar/desabilitar botões de navegação
    document.getElementById('paginaAnterior').disabled = configPaginacao.paginaAtual <= 1;
    document.getElementById('proximaPagina').disabled = configPaginacao.paginaAtual >= totalPaginas;
}

// Configurar eventos de filtros
function configurarFiltros() {
    const filtros = [
        document.getElementById('filtroCategoria'),
        document.getElementById('filtroFonte'),
        document.getElementById('buscaNoticia')
    ];
    
    // Adicionar evento de change para cada filtro
    filtros.forEach(filtro => {
        if (filtro) {
            filtro.addEventListener('change', () => {
                // Resetar paginação ao filtrar
                configPaginacao.paginaAtual = 1;
                renderizarNoticias();
            });
        }
    });
    
    // Adicionar evento de input para busca (para atualizar em tempo real)
    const buscaInput = document.getElementById('buscaNoticia');
    if (buscaInput) {
        buscaInput.addEventListener('input', () => {
            // Resetar paginação ao buscar
            configPaginacao.paginaAtual = 1;
            renderizarNoticias();
        });
    }
    
    // Adicionar evento para botão de busca
    const buscaBtn = document.querySelector('.busca-btn');
    if (buscaBtn) {
        buscaBtn.addEventListener('click', () => {
            renderizarNoticias();
        });
    }
}

// Configurar eventos de paginação
function configurarPaginacao() {
    const btnAnterior = document.getElementById('paginaAnterior');
    const btnProximo = document.getElementById('proximaPagina');
    
    if (btnAnterior) {
        btnAnterior.addEventListener('click', () => {
            if (configPaginacao.paginaAtual > 1) {
                configPaginacao.paginaAtual--;
                renderizarNoticias();
            }
        });
    }
    
    if (btnProximo) {
        btnProximo.addEventListener('click', () => {
            const noticiasFiltradas = filtrarNoticias();
            const totalPaginas = Math.ceil(noticiasFiltradas.length / configPaginacao.itensPorPagina);
            
            if (configPaginacao.paginaAtual < totalPaginas) {
                configPaginacao.paginaAtual++;
                renderizarNoticias();
            }
        });
    }
}

// ==============================================
// FUNCIONALIDADES PARA GERENCIAR FONTES DE NOTÍCIAS
// ==============================================

// Configurar interface de fontes
function configurarInterfaceFontes() {
    // Carregar fontes na lista
    carregarListaFontes();
    
    // Configurar botão de adicionar fonte
    const btnAdicionarFonte = document.getElementById('btnAdicionarFonte');
    if (btnAdicionarFonte) {
        btnAdicionarFonte.addEventListener('click', () => {
            mostrarFormularioFonte();
        });
    }
    
    // Configurar botões do formulário
    const btnSalvarFonte = document.getElementById('btnSalvarFonte');
    if (btnSalvarFonte) {
        btnSalvarFonte.addEventListener('click', () => {
            salvarFonte();
        });
    }
    
    const btnCancelarFonte = document.getElementById('btnCancelarFonte');
    if (btnCancelarFonte) {
        btnCancelarFonte.addEventListener('click', () => {
            ocultarFormularioFonte();
        });
    }
    
    // Configurar botão de verificar fontes
    const btnVerificarAgora = document.getElementById('btnVerificarAgora');
    if (btnVerificarAgora) {
        btnVerificarAgora.addEventListener('click', () => {
            verificarFontes();
        });
    }
}

// Carregar a lista de fontes
function carregarListaFontes() {
    const fontesLista = document.getElementById('fontesLista');
    if (!fontesLista) return;
    
    // Limpar lista atual
    fontesLista.innerHTML = '';
    
    // Verificar se há fontes
    if (fontesData.fontes.length === 0) {
        fontesLista.innerHTML = `
            <div class="sem-resultados">
                Nenhuma fonte de notícias configurada. Adicione fontes para começar a monitorar.
            </div>
        `;
        return;
    }
    
    // Renderizar cada fonte
    fontesData.fontes.forEach(fonte => {
        const template = document.getElementById('fonteItemTemplate');
        if (!template) return;
        
        // Clonar o template
        const fonteItem = template.content.cloneNode(true);
        
        // Preencher dados
        fonteItem.querySelector('.fonte-titulo').textContent = fonte.titulo;
        fonteItem.querySelector('.fonte-url').textContent = fonte.url;
        fonteItem.querySelector('.fonte-categoria').textContent = fonte.categoria;
        
        // Status
        const statusElement = fonteItem.querySelector('.fonte-status');
        statusElement.textContent = fonte.status.charAt(0).toUpperCase() + fonte.status.slice(1);
        statusElement.classList.add(fonte.status);
        
        // Botões de ação
        const btnEditar = fonteItem.querySelector('.editar-fonte');
        if (btnEditar) {
            btnEditar.addEventListener('click', () => {
                editarFonte(fonte.id);
            });
        }
        
        const btnPausar = fonteItem.querySelector('.pausar-fonte');
        if (btnPausar) {
            // Alterar ícone conforme o status
            const iconElement = btnPausar.querySelector('.material-icons');
            iconElement.textContent = fonte.status === 'ativo' ? 'pause' : 'play_arrow';
            
            btnPausar.addEventListener('click', () => {
                alternarStatusFonte(fonte.id);
            });
        }
        
        const btnExcluir = fonteItem.querySelector('.excluir-fonte');
        if (btnExcluir) {
            btnExcluir.addEventListener('click', () => {
                excluirFonte(fonte.id);
            });
        }
        
        // Adicionar à lista
        fontesLista.appendChild(fonteItem);
    });
}

// Mostrar formulário para adicionar nova fonte
function mostrarFormularioFonte(fonteId = null) {
    const fonteForm = document.getElementById('fonteForm');
    if (!fonteForm) return;
    
    // Resetar formulário
    document.getElementById('fonteTitulo').value = '';
    document.getElementById('fonteUrl').value = '';
    document.getElementById('fonteCategoria').value = 'Geral';
    document.getElementById('fonteFrequencia').value = '30';
    
    // Se for edição, preencher com dados da fonte
    if (fonteId) {
        const fonte = fontesData.fontes.find(f => f.id === fonteId);
        if (fonte) {
            document.getElementById('formTitulo').textContent = 'Editar Fonte';
            document.getElementById('fonteTitulo').value = fonte.titulo;
            document.getElementById('fonteUrl').value = fonte.url;
            document.getElementById('fonteCategoria').value = fonte.categoria;
            document.getElementById('fonteFrequencia').value = fonte.frequencia.toString();
            // Armazenar o ID da fonte sendo editada
            fonteForm.setAttribute('data-id', fonteId);
        }
    } else {
        document.getElementById('formTitulo').textContent = 'Adicionar Nova Fonte';
        fonteForm.removeAttribute('data-id');
    }
    
    // Mostrar formulário
    fonteForm.style.display = 'block';
}

// Ocultar formulário de fonte
function ocultarFormularioFonte() {
    const fonteForm = document.getElementById('fonteForm');
    if (fonteForm) {
        fonteForm.style.display = 'none';
    }
}

// Salvar fonte (nova ou editada)
function salvarFonte() {
    const fonteForm = document.getElementById('fonteForm');
    if (!fonteForm) return;
    
    // Obter valores do formulário
    const titulo = document.getElementById('fonteTitulo').value.trim();
    const url = document.getElementById('fonteUrl').value.trim();
    const categoria = document.getElementById('fonteCategoria').value;
    const frequencia = parseInt(document.getElementById('fonteFrequencia').value);
    
    // Validar campos
    if (!titulo || !url) {
        PressAI?.showNotification('Por favor, preencha todos os campos obrigatórios.', 'error') || 
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Verificar se é uma edição ou nova fonte
    const fonteId = fonteForm.getAttribute('data-id');
    
    if (fonteId) {
        // Editar fonte existente
        const index = fontesData.fontes.findIndex(f => f.id == fonteId);
        if (index !== -1) {
            fontesData.fontes[index] = {
                ...fontesData.fontes[index],
                titulo,
                url,
                categoria,
                frequencia
            };
        }
    } else {
        // Adicionar nova fonte
        const novaFonte = {
            id: Date.now(), // Simples gerador de ID baseado em timestamp
            titulo,
            url,
            categoria,
            frequencia,
            status: 'ativo',
            ultimaChecagem: new Date().toISOString()
        };
        
        fontesData.fontes.push(novaFonte);
    }
    
    // Atualizar lista e ocultar formulário
    carregarListaFontes();
    ocultarFormularioFonte();
    
    // Mostrar feedback
    PressAI?.showNotification('Fonte salva com sucesso!', 'success') || 
    alert('Fonte salva com sucesso!');
}

// Editar fonte existente
function editarFonte(id) {
    mostrarFormularioFonte(id);
}

// Alternar status da fonte (ativar/pausar)
function alternarStatusFonte(id) {
    const fonte = fontesData.fontes.find(f => f.id === id);
    if (!fonte) return;
    
    // Alternar status
    fonte.status = fonte.status === 'ativo' ? 'pausado' : 'ativo';
    
    // Atualizar lista
    carregarListaFontes();
    
    // Mostrar feedback
    const mensagem = fonte.status === 'ativo' ? 'Fonte ativada!' : 'Fonte pausada!';
    PressAI?.showNotification(mensagem, 'success') || 
    alert(mensagem);
}

// Excluir fonte
function excluirFonte(id) {
    // Pedir confirmação
    if (!confirm('Tem certeza que deseja excluir esta fonte?')) return;
    
    // Remover fonte
    fontesData.fontes = fontesData.fontes.filter(f => f.id !== id);
    
    // Atualizar lista
    carregarListaFontes();
    
    // Mostrar feedback
    PressAI?.showNotification('Fonte excluída com sucesso!', 'success') || 
    alert('Fonte excluída com sucesso!');
}

// Verificar todas as fontes manualmente
function verificarFontes() {
    // Mostrar feedback de processamento
    PressAI?.showNotification('Verificando todas as fontes...', 'info') || 
    alert('Verificando todas as fontes...');
    
    // Simular uma verificação (em uma app real, isso seria uma chamada de API)
    setTimeout(() => {
        // Atualizar a data da última verificação para cada fonte ativa
        fontesData.fontes.forEach(fonte => {
            if (fonte.status === 'ativo') {
                fonte.ultimaChecagem = new Date().toISOString();
            }
        });
        
        // Mostrar feedback
        PressAI?.showNotification('Verificação concluída! 12 novas notícias encontradas.', 'success') || 
        alert('Verificação concluída! 12 novas notícias encontradas.');
        
        // Recarregar a lista de notícias
        renderizarNoticias();
    }, 2000);
}

// ==============================================
// FUNCIONALIDADES PARA CONFIGURAÇÕES
// ==============================================

// Configurar interface de configurações
function configurarInterfaceConfiguracoes() {
    // Carregar configurações
    carregarConfiguracoes();
    
    // Configurar botões
    const btnSalvarConfig = document.getElementById('btnSalvarConfiguracoes');
    if (btnSalvarConfig) {
        btnSalvarConfig.addEventListener('click', () => {
            salvarConfiguracoes();
        });
    }
    
    const btnResetarConfig = document.getElementById('btnResetarConfiguracoes');
    if (btnResetarConfig) {
        btnResetarConfig.addEventListener('click', () => {
            resetarConfiguracoes();
        });
    }
    
    const btnLimparCache = document.getElementById('btnLimparCache');
    if (btnLimparCache) {
        btnLimparCache.addEventListener('click', () => {
            limparCache();
        });
    }
}

// Carregar configurações na interface
function carregarConfiguracoes() {
    const config = fontesData.configuracoes;
    
    // Checkboxes
    document.getElementById('configNotificacoes').checked = config.notificacoes;
    document.getElementById('configEmailNotificacoes').checked = config.emailNotificacoes;
    document.getElementById('configAtualizacaoAutomatica').checked = config.atualizacaoAutomatica;
    document.getElementById('configTraducaoAutomatica').checked = config.traducaoAutomatica;
    
    // Selects
    document.getElementById('configFormatoDefault').value = config.formatoDefault;
    document.getElementById('configIdiomaPrincipal').value = config.idiomaPrincipal;
    document.getElementById('configRetencao').value = config.periodoRetencao.toString();
}

// Salvar configurações
function salvarConfiguracoes() {
    // Obter valores da interface
    const config = {
        notificacoes: document.getElementById('configNotificacoes').checked,
        emailNotificacoes: document.getElementById('configEmailNotificacoes').checked,
        atualizacaoAutomatica: document.getElementById('configAtualizacaoAutomatica').checked,
        traducaoAutomatica: document.getElementById('configTraducaoAutomatica').checked,
        formatoDefault: document.getElementById('configFormatoDefault').value,
        idiomaPrincipal: document.getElementById('configIdiomaPrincipal').value,
        periodoRetencao: parseInt(document.getElementById('configRetencao').value)
    };
    
    // Salvar configurações
    fontesData.configuracoes = config;
    
    // Mostrar feedback
    PressAI?.showNotification('Configurações salvas com sucesso!', 'success') || 
    alert('Configurações salvas com sucesso!');
}

// Resetar configurações para padrão
function resetarConfiguracoes() {
    // Pedir confirmação
    if (!confirm('Tem certeza que deseja restaurar todas as configurações para os valores padrão?')) return;
    
    // Restaurar configurações padrão
    fontesData.configuracoes = {
        notificacoes: true,
        emailNotificacoes: false,
        atualizacaoAutomatica: true,
        formatoDefault: "rss",
        idiomaPrincipal: "pt-BR",
        traducaoAutomatica: true,
        periodoRetencao: 30
    };
    
    // Atualizar interface
    carregarConfiguracoes();
    
    // Mostrar feedback
    PressAI?.showNotification('Configurações restauradas para os valores padrão!', 'success') || 
    alert('Configurações restauradas para os valores padrão!');
}

// Limpar cache
function limparCache() {
    // Pedir confirmação
    if (!confirm('Tem certeza que deseja limpar o cache? Isso removerá todas as notícias armazenadas localmente.')) return;
    
    // Simular limpeza de cache (em uma app real, isso removeria dados do localStorage ou IndexedDB)
    setTimeout(() => {
        PressAI?.showNotification('Cache limpo com sucesso!', 'success') || 
        alert('Cache limpo com sucesso!');
    }, 500);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initNoticias);

// Se o script for carregado dinamicamente após o DOM já estar pronto
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initNoticias();
}

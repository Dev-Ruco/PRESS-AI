/**
 * Script para a página de Reformulação de Conteúdo
 */

// Inicializar a página
function initReformulador() {
    console.log('Página de Reformulação inicializada');
    
    // Verificar se há parâmetros na URL (vindo de outra página)
    verificarParametrosURL();
    
    // Configurar eventos dos botões de reformulação
    configurarEventosReformulador();
}

// Verificar parâmetros da URL para pré-carregar conteúdo
function verificarParametrosURL() {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const noticiaId = urlParams.get('id');
    
    if (noticiaId) {
        console.log('ID da notícia recebido:', noticiaId);
        
        // Buscar dados da notícia (simulado)
        const noticia = buscarNoticiaPorId(noticiaId);
        
        if (noticia) {
            // Preencher informações de origem
            preencherInfoOrigem(noticia);
            
            // Simular busca do conteúdo completo
            setTimeout(() => {
                // Aqui seria uma chamada para API
                const conteudoCompleto = gerarConteudoSimulado(noticia);
                document.getElementById('conteudoOriginal').value = conteudoCompleto;
            }, 500);
        }
    }
}

// Buscar notícia por ID (simulado)
function buscarNoticiaPorId(id) {
    // Em uma implementação real, isso seria uma chamada para API
    // Aqui, vamos simular buscando do array noticiasData que pode estar em outro script
    let noticia = null;
    
    try {
        // Verificar se temos acesso ao array de notícias
        if (typeof noticiasData !== 'undefined') {
            noticia = noticiasData.find(n => n.id == id);
        } else {
            // Dados de fallback caso o array noticiasData não esteja disponível
            const noticiasSimuladas = [
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
                }
            ];
            
            noticia = noticiasSimuladas.find(n => n.id == id);
        }
    } catch (error) {
        console.error("Erro ao buscar notícia:", error);
    }
    
    return noticia;
}

// Preencher informações de origem da notícia
function preencherInfoOrigem(noticia) {
    const origemInfo = document.getElementById('origemInfo');
    if (!origemInfo) return;
    
    // Formatar data
    const dataObj = new Date(noticia.atualizadoEm);
    const dataFormatada = dataObj.toLocaleDateString('pt-BR') + ' ' + 
                          dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    
    origemInfo.innerHTML = `
        <div class="origem-titulo">${noticia.titulo}</div>
        <div class="origem-meta">
            <span class="origem-fonte">${noticia.fonte}</span> | 
            <span class="origem-categoria">${noticia.categoria}</span> | 
            <span class="origem-data">${dataFormatada}</span>
        </div>
    `;
}

// Gerar conteúdo simulado para a notícia
function gerarConteudoSimulado(noticia) {
    // Função para simular um texto completo baseado no título da notícia
    const paragrafos = [
        `${noticia.titulo}`,
        `Em uma coletiva de imprensa realizada nesta manhã, fontes oficiais confirmaram os detalhes relacionados a este importante acontecimento. De acordo com especialistas consultados, este desenvolvimento terá impactos significativos nos próximos meses.`,
        `"Este é um momento crucial para entendermos as implicações completas deste cenário", afirmou um especialista no assunto. Diversos analistas têm acompanhado de perto a evolução dos fatos e apontam para tendências que podem se consolidar em breve.`,
        `Estudos recentes indicam que situações similares ocorridas anteriormente resultaram em mudanças substanciais no panorama atual. Os dados preliminares sugerem uma correlação direta entre os eventos recentes e os desdobramentos esperados.`,
        `A expectativa é que novas informações sejam divulgadas nos próximos dias, trazendo maior clareza sobre os próximos passos e possíveis consequências. As autoridades recomendam atenção às atualizações oficiais sobre o tema.`,
    ];
    
    return paragrafos.join('\n\n');
}

// Configurar eventos dos botões e interações de reformulação
function configurarEventosReformulador() {
    // Botão de reformular
    const btnReformular = document.getElementById('btnReformular');
    if (btnReformular) {
        btnReformular.addEventListener('click', () => {
            iniciarReformulacao();
        });
    }
    
    // Botão de copiar
    const btnCopiar = document.getElementById('btnCopiar');
    if (btnCopiar) {
        btnCopiar.addEventListener('click', () => {
            copiarConteudoReformulado();
        });
    }
    
    // Botão de exportar
    const btnExportar = document.getElementById('btnExportar');
    if (btnExportar) {
        btnExportar.addEventListener('click', () => {
            exportarConteudoReformulado();
        });
    }
}

// Iniciar processo de reformulação
function iniciarReformulacao() {
    const conteudoOriginal = document.getElementById('conteudoOriginal').value.trim();
    
    if (!conteudoOriginal) {
        PressAI?.showNotification('Por favor, insira um conteúdo para reformular.', 'error');
        return;
    }
    
    // Obter opções selecionadas
    const estilo = document.querySelector('input[name="estilo"]:checked').value;
    const extensao = document.querySelector('input[name="extensao"]:checked').value;
    const tom = document.querySelector('input[name="tom"]:checked').value;
    const instrucoesAdicionais = document.getElementById('customInstrucoes').value;
    
    // Mostrar feedback de carregamento
    mostrarProcessamento();
    
    // Simular processamento (aqui seria uma chamada para API de IA)
    setTimeout(() => {
        // Gerar conteúdo reformulado (simulado)
        const resultado = simularReformulacao(conteudoOriginal, estilo, extensao, tom, instrucoesAdicionais);
        
        // Exibir resultado
        mostrarResultado(resultado);
    }, 2000);
}

// Mostrar feedback de processamento
function mostrarProcessamento() {
    const areaResultado = document.getElementById('areaResultado');
    if (areaResultado) {
        areaResultado.style.display = 'block';
        
        const conteudoReformulado = document.getElementById('conteudoReformulado');
        if (conteudoReformulado) {
            conteudoReformulado.innerHTML = `
                <div class="processando">
                    <div class="processando-indicador">
                        <div class="spinner"></div>
                    </div>
                    <div class="processando-texto">
                        Reformulando conteúdo...
                    </div>
                </div>
            `;
        }
    }
}

// Mostrar resultado da reformulação
function mostrarResultado(resultado) {
    const conteudoReformulado = document.getElementById('conteudoReformulado');
    if (conteudoReformulado) {
        conteudoReformulado.innerHTML = '';
        
        // Transformar texto com quebras de linha em parágrafos HTML
        const paragrafos = resultado.split('\n\n');
        paragrafos.forEach(paragrafo => {
            const p = document.createElement('p');
            p.textContent = paragrafo;
            conteudoReformulado.appendChild(p);
        });
    }
}

// Simular reformulação do conteúdo
function simularReformulacao(conteudo, estilo, extensao, tom, instrucoes) {
    // Texto base para simular diferentes estilos e tons
    const originalParagrafos = conteudo.split('\n\n');
    const titulo = originalParagrafos[0];
    
    // Prefixos baseados no tom selecionado
    const prefixoTom = {
        'neutro': 'Em uma análise objetiva dos fatos,',
        'persuasivo': 'É impossível ignorar a importância crucial de',
        'educativo': 'É essencial compreender que'
    };
    
    // Sufixos baseados no estilo
    const sufixoEstilo = {
        'formal': 'conforme demonstram os dados e evidências disponíveis.',
        'informal': 'pelo que podemos ver claramente nesta situação.',
        'tecnico': 'de acordo com os parâmetros estabelecidos na análise técnica do cenário.'
    };
    
    // Ajustar quantidade de parágrafos com base na extensão
    let qtdParagrafos = originalParagrafos.length;
    if (extensao === 'resumido') {
        qtdParagrafos = Math.max(2, Math.floor(qtdParagrafos * 0.6));
    } else if (extensao === 'detalhado') {
        qtdParagrafos = Math.floor(qtdParagrafos * 1.5);
    }
    
    // Gerar parágrafos reformulados
    const paragrafosReformulados = [titulo]; // Manter o título
    
    for (let i = 1; i < qtdParagrafos; i++) {
        let paragrafo;
        
        if (i < originalParagrafos.length) {
            // Modificar parágrafo existente
            paragrafo = originalParagrafos[i];
            
            // Adicionar prefixo ao primeiro parágrafo apenas
            if (i === 1) {
                paragrafo = `${prefixoTom[tom]} ${paragrafo.toLowerCase()}`;
            }
            
            // Adicionar sufixo ao último parágrafo
            if (i === qtdParagrafos - 1) {
                paragrafo = `${paragrafo} ${sufixoEstilo[estilo]}`;
            }
        } else {
            // Gerar parágrafos adicionais para textos detalhados
            paragrafo = `Análises complementares indicam a relevância de se considerar múltiplos fatores neste contexto, especialmente quando observamos as tendências recentes do setor. ${sufixoEstilo[estilo]}`;
        }
        
        paragrafosReformulados.push(paragrafo);
    }
    
    // Incorporar instruções adicionais, se houver
    if (instrucoes) {
        paragrafosReformulados.push(`Nota adicional: ${instrucoes}`);
    }
    
    return paragrafosReformulados.join('\n\n');
}

// Copiar conteúdo reformulado para a área de transferência
function copiarConteudoReformulado() {
    const conteudoReformulado = document.getElementById('conteudoReformulado');
    if (!conteudoReformulado) return;
    
    // Criar uma seleção do texto
    const range = document.createRange();
    range.selectNode(conteudoReformulado);
    
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // Copiar para a área de transferência
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        
        // Mostrar feedback
        PressAI?.showNotification('Conteúdo copiado para a área de transferência!', 'success') || 
        alert('Conteúdo copiado para a área de transferência!');
    } catch (err) {
        console.error('Erro ao copiar texto:', err);
        alert('Não foi possível copiar o texto. Por favor, tente novamente.');
    }
}

// Exportar conteúdo reformulado como arquivo de texto
function exportarConteudoReformulado() {
    const conteudoReformulado = document.getElementById('conteudoReformulado');
    if (!conteudoReformulado) return;
    
    // Obter o conteúdo como texto simples
    const texto = conteudoReformulado.innerText;
    
    // Criar um blob com o texto
    const blob = new Blob([texto], { type: 'text/plain' });
    
    // Criar URL do blob
    const url = URL.createObjectURL(blob);
    
    // Criar link para download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conteudo-reformulado.txt';
    
    // Adicionar à página, clicar e remover
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Liberar a URL
    URL.revokeObjectURL(url);
    
    // Mostrar feedback
    PressAI?.showNotification('Arquivo exportado com sucesso!', 'success') || 
    alert('Arquivo exportado com sucesso!');
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initReformulador);

// Se o script for carregado dinamicamente após o DOM já estar pronto
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initReformulador();
}

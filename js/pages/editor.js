/**
 * Script para a página de Editor de Artigos
 */

// Inicializar a página
function initEditor() {
    console.log('Página de Editor inicializada');
    
    // Configurar o editor
    configurarEditor();
    
    // Configurar eventos de botões
    configurarEventosEditor();
}

// Configurar o editor de texto
function configurarEditor() {
    // Verificar se o editor já foi inicializado
    const editorContainer = document.getElementById('editorContainer');
    if (!editorContainer) return;
    
    // Aqui seria a inicialização do editor WYSIWYG
    console.log('Editor WYSIWYG inicializado');
    
    // Exemplo: adicionar eventos básicos de formatação
    const btnBold = document.getElementById('btnBold');
    if (btnBold) {
        btnBold.addEventListener('click', () => {
            document.execCommand('bold', false, null);
        });
    }
    
    const btnItalic = document.getElementById('btnItalic');
    if (btnItalic) {
        btnItalic.addEventListener('click', () => {
            document.execCommand('italic', false, null);
        });
    }
    
    const btnUnderline = document.getElementById('btnUnderline');
    if (btnUnderline) {
        btnUnderline.addEventListener('click', () => {
            document.execCommand('underline', false, null);
        });
    }
}

// Configurar eventos para os botões
function configurarEventosEditor() {
    // Botão de salvar
    const btnSalvar = document.getElementById('btnSalvar');
    if (btnSalvar) {
        btnSalvar.addEventListener('click', () => {
            salvarArtigo();
        });
    }
    
    // Botão de publicar
    const btnPublicar = document.getElementById('btnPublicar');
    if (btnPublicar) {
        btnPublicar.addEventListener('click', () => {
            publicarArtigo();
        });
    }
    
    // Botão de visualizar
    const btnVisualizar = document.getElementById('btnVisualizar');
    if (btnVisualizar) {
        btnVisualizar.addEventListener('click', () => {
            visualizarArtigo();
        });
    }
}

// Salvar o artigo como rascunho
function salvarArtigo() {
    console.log('Salvando artigo como rascunho...');
    
    // Aqui seria a lógica para salvar o artigo
    setTimeout(() => {
        // Simular salvamento bem-sucedido
        PressAI?.showNotification('Artigo salvo com sucesso!', 'success') || 
        alert('Artigo salvo com sucesso!');
    }, 800);
}

// Publicar o artigo
function publicarArtigo() {
    console.log('Publicando artigo...');
    
    // Aqui seria a lógica para publicar o artigo
    setTimeout(() => {
        // Simular publicação bem-sucedida
        PressAI?.showNotification('Artigo publicado com sucesso!', 'success') || 
        alert('Artigo publicado com sucesso!');
    }, 1000);
}

// Visualizar o artigo
function visualizarArtigo() {
    console.log('Visualizando artigo...');
    
    // Aqui seria a lógica para abrir uma visualização do artigo
    const conteudo = document.getElementById('editorContent')?.innerHTML || '';
    
    // Abrir uma janela de visualização
    const previewWindow = window.open('', 'preview', 'width=800,height=600');
    previewWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Visualização do Artigo</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    padding: 20px;
                    max-width: 800px;
                    margin: 0 auto;
                }
                h1 {
                    color: #333;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 10px;
                }
                .content {
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Visualização do Artigo</h1>
            <div class="content">${conteudo}</div>
        </body>
        </html>
    `);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initEditor);

// Se o script for carregado dinamicamente após o DOM já estar pronto
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initEditor();
} 
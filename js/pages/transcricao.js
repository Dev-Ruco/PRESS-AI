// Função de inicialização da página
function initTranscricao() {
    console.log('Inicializando página de transcrição...');
    
    // Configurar eventos
    setupEventListeners();
}

// Configurar eventos da página
function setupEventListeners() {
    // Evento de upload de arquivo
    const audioInput = document.getElementById('audioInput');
    if (audioInput) {
        audioInput.addEventListener('change', handleFileUpload);
    }

    // Evento do botão de transcrição
    const transcribeBtn = document.querySelector('.transcribe-btn');
    if (transcribeBtn) {
        transcribeBtn.addEventListener('click', startTranscription);
    }
}

// Manipular upload de arquivo
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const filePreview = document.getElementById('filePreview');
        if (filePreview) {
            filePreview.textContent = `Arquivo selecionado: ${file.name}`;
        }
    }
}

// Iniciar processo de transcrição
function startTranscription() {
    const fileInput = document.getElementById('audioInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Por favor, selecione um arquivo de áudio ou vídeo.');
        return;
    }

    // Aqui você implementaria a lógica real de transcrição
    console.log('Iniciando transcrição do arquivo:', file.name);
    
    // Simular processamento
    const transcribeBtn = document.querySelector('.transcribe-btn');
    if (transcribeBtn) {
        transcribeBtn.disabled = true;
        transcribeBtn.textContent = 'Processando...';
        
        // Simular tempo de processamento
        setTimeout(() => {
            transcribeBtn.disabled = false;
            transcribeBtn.textContent = 'Transcrever';
            alert('Transcrição concluída!');
        }, 3000);
    }
}

// Selecionar modo de transcrição
function selectMode(element, mode) {
    // Remover classe active de todos os botões
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Adicionar classe active ao botão clicado
    element.classList.add('active');
    
    console.log('Modo selecionado:', mode);
}

// Alternar configurações avançadas
function toggleAdvanced() {
    const advancedSettings = document.getElementById('advancedSettings');
    if (advancedSettings) {
        advancedSettings.style.display = 
            advancedSettings.style.display === 'block' ? 'none' : 'block';
    }
}

// Inicializar a página quando o script for carregado
document.addEventListener('DOMContentLoaded', initTranscricao);

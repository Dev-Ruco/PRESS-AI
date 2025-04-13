// Funções para controle do painel de upload
function toggleUploadMenu() {
    const uploadMenu = document.getElementById('uploadMenu');
    uploadMenu.classList.toggle('show');
}

function handleFileUpload(type) {
    const input = document.createElement('input');
    input.type = 'file';
    
    if (type === 'document') {
        input.accept = '.doc,.docx,.pdf,.txt';
    } else if (type === 'image') {
        input.accept = 'image/*';
    } else if (type === 'audio') {
        input.accept = 'audio/*';
    }
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Aqui você pode adicionar a lógica para processar o arquivo
            console.log('Arquivo selecionado:', file);
        }
    };
    
    input.click();
}

function handleGoogleDrive() {
    // Implementar integração com Google Drive
    console.log('Google Drive selecionado');
}

function handleDropbox() {
    // Implementar integração com Dropbox
    console.log('Dropbox selecionado');
}

function handleAudioRecord() {
    // Implementar gravação de áudio
    console.log('Gravação de áudio iniciada');
}

function handleVideoRecord() {
    // Implementar gravação de vídeo
    console.log('Gravação de vídeo iniciada');
}

// Fechar menu quando clicar fora
document.addEventListener('click', (e) => {
    const uploadMenu = document.getElementById('uploadMenu');
    const uploadBtn = document.querySelector('.upload-btn');
    
    if (!uploadMenu.contains(e.target) && !uploadBtn.contains(e.target)) {
        uploadMenu.classList.remove('show');
    }
});

// Controle da barra de progresso
function updateProgressStep(stepNumber) {
    const steps = document.querySelectorAll('.progress-step');
    const lines = document.querySelectorAll('.progress-line');
    
    steps.forEach((step, index) => {
        if (index < stepNumber) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Inicializa com o primeiro passo ativo
document.addEventListener('DOMContentLoaded', () => {
    updateProgressStep(1);
});

function showTab(tabName) {
    const chatBox = document.querySelector('.chat-box');
    const noticiasLista = document.getElementById('noticiasLista');
    const tabs = document.querySelectorAll('.assistente-tab');

    tabs.forEach(tab => {
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    if (tabName === 'chat') {
        chatBox.style.display = 'flex';
        noticiasLista.style.display = 'none';
    } else if (tabName === 'noticias') {
        chatBox.style.display = 'none';
        noticiasLista.style.display = 'flex';
        // Garante que o chat fique completamente oculto
        chatBox.style.visibility = 'hidden';
        chatBox.style.opacity = '0';
    }
}

// Adiciona evento de clique nas notícias
document.querySelectorAll('.mini-noticia').forEach(noticia => {
    noticia.addEventListener('click', function() {
        // Aqui você pode adicionar a lógica para abrir a notícia completa
        console.log('Notícia clicada:', this.querySelector('.noticia-titulo').textContent);
    });
});

// Inicializa a aba padrão
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.assistente-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            showTab(tab.dataset.tab);
        });
    });
    
    // Mostra a aba ativa por padrão
    const activeTab = document.querySelector('.assistente-tab.active');
    if (activeTab) {
        showTab(activeTab.dataset.tab);
    }
}); 
function toggleUploadMenu() {
    const uploadMenu = document.querySelector('.upload-menu');
    uploadMenu.classList.toggle('active');
}

function handleFileUpload(type) {
    const input = document.createElement('input');
    input.type = 'file';
    
    switch(type) {
        case 'document':
            input.accept = '.pdf,.doc,.docx,.txt';
            break;
        case 'image':
            input.accept = '.jpg,.jpeg,.png';
            break;
        case 'audio':
            input.accept = '.mp3,.wav';
            break;
    }

    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Aqui você pode adicionar a lógica para processar o arquivo
            console.log('Arquivo selecionado:', file.name);
            // Fechar o menu após o upload
            toggleUploadMenu();
        }
    };

    input.click();
}

function handleGoogleDrive() {
    // Aqui você pode adicionar a integração com o Google Drive
    console.log('Integração com Google Drive');
    // Fechar o menu após a seleção
    toggleUploadMenu();
} 
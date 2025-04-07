/**
 * Editor de Texto - Componente reutilizável
 * 
 * Fornece funcionalidade de editor de texto rico para criação e edição de artigos
 */

class TextEditor {
    constructor(containerId, options = {}) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container com ID ${containerId} não encontrado`);
            return;
        }
        
        this.options = {
            placeholder: options.placeholder || 'Comece a escrever aqui...',
            toolbarButtons: options.toolbarButtons || ['bold', 'italic', 'underline', 'h1', 'h2', 'h3', 'quote', 'link', 'image'],
            initialContent: options.initialContent || '',
            onChange: options.onChange || null,
            autosave: options.autosave || false,
            autosaveInterval: options.autosaveInterval || 30000 // 30s
        };
        
        this.content = this.options.initialContent;
        this.editorArea = null;
        this.toolbar = null;
        
        this.init();
    }
    
    init() {
        // Criar estrutura do editor
        this.createEditorStructure();
        
        // Inicializar eventos
        this.initEvents();
        
        // Configurar autosave se necessário
        if (this.options.autosave) {
            this.setupAutosave();
        }
        
        console.log('Editor inicializado com sucesso');
    }
    
    createEditorStructure() {
        // Limpar o container
        this.container.innerHTML = '';
        
        // Criar a barra de ferramentas
        this.toolbar = document.createElement('div');
        this.toolbar.className = 'editor-toolbar';
        this.container.appendChild(this.toolbar);
        
        // Adicionar botões à barra de ferramentas
        this.options.toolbarButtons.forEach(button => {
            const toolButton = document.createElement('button');
            toolButton.className = `toolbar-button ${button}`;
            toolButton.setAttribute('data-command', button);
            
            // Ícone
            const icon = document.createElement('span');
            icon.className = 'material-icons';
            icon.textContent = this.getIconForCommand(button);
            toolButton.appendChild(icon);
            
            this.toolbar.appendChild(toolButton);
        });
        
        // Criar área de edição
        this.editorArea = document.createElement('div');
        this.editorArea.className = 'editor-content';
        this.editorArea.setAttribute('contenteditable', 'true');
        this.editorArea.setAttribute('placeholder', this.options.placeholder);
        this.editorArea.innerHTML = this.content;
        this.container.appendChild(this.editorArea);
    }
    
    initEvents() {
        // Eventos para os botões da barra de ferramentas
        const toolbarButtons = this.toolbar.querySelectorAll('.toolbar-button');
        toolbarButtons.forEach(button => {
            button.addEventListener('click', () => {
                const command = button.getAttribute('data-command');
                this.executeCommand(command);
            });
        });
        
        // Eventos para a área de edição
        this.editorArea.addEventListener('input', () => {
            this.content = this.editorArea.innerHTML;
            if (typeof this.options.onChange === 'function') {
                this.options.onChange(this.content);
            }
        });
    }
    
    executeCommand(command) {
        if (['bold', 'italic', 'underline'].includes(command)) {
            document.execCommand(command, false, null);
        } else if (['h1', 'h2', 'h3'].includes(command)) {
            document.execCommand('formatBlock', false, command);
        } else if (command === 'quote') {
            document.execCommand('formatBlock', false, 'blockquote');
        } else if (command === 'link') {
            const url = prompt('Digite a URL do link:');
            if (url) document.execCommand('createLink', false, url);
        } else if (command === 'image') {
            const url = prompt('Digite a URL da imagem:');
            if (url) document.execCommand('insertImage', false, url);
        }
        
        // Focar de volta no editor
        this.editorArea.focus();
    }
    
    getIconForCommand(command) {
        const iconMap = {
            bold: 'format_bold',
            italic: 'format_italic',
            underline: 'format_underlined',
            h1: 'looks_one',
            h2: 'looks_two',
            h3: 'looks_3',
            quote: 'format_quote',
            link: 'insert_link',
            image: 'image'
        };
        
        return iconMap[command] || 'edit';
    }
    
    getContent() {
        return this.content;
    }
    
    setContent(html) {
        this.content = html;
        if (this.editorArea) {
            this.editorArea.innerHTML = html;
        }
    }
    
    setupAutosave() {
        setInterval(() => {
            console.log('Autosaving content...');
            // Aqui você poderia implementar uma chamada para salvar em API
            localStorage.setItem('editor_autosave', this.content);
        }, this.options.autosaveInterval);
    }
}

// Exportar para uso global
window.TextEditor = TextEditor;

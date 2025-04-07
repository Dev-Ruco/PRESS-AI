/**
 * Script para a página do Painel Editorial (Dashboard)
 */

// Função para inicializar a página do dashboard
function initDashboard() {
    console.log('Painel Editorial inicializado');
    
    // Adicionar eventos aos botões de ação
    setupActionButtons();
    
    // Carregar dados estatísticos
    loadDashboardStats();
}

// Configurar eventos dos botões de ação
function setupActionButtons() {
    const generateButton = document.querySelector('.welcome-actions .primary-action:first-child');
    const reformulateButton = document.querySelector('.welcome-actions .primary-action.outline');
    
    if (generateButton) {
        generateButton.addEventListener('click', () => {
            window.location.hash = '#/novo-artigo';
        });
    }
    
    if (reformulateButton) {
        reformulateButton.addEventListener('click', () => {
            window.location.hash = '#/reformular';
        });
    }
}

// Carregar dados estatísticos do dashboard
function loadDashboardStats() {
    // Aqui você poderia carregar dados reais de uma API
    // Por enquanto, apenas simulamos uma atualização depois de 1 segundo
    setTimeout(() => {
        // Simular atualização dos números
        const statNumbers = document.querySelectorAll('.stat-number');
        if (statNumbers.length > 0) {
            // Animação simples para os números
            statNumbers.forEach(stat => {
                const targetValue = stat.textContent;
                animateNumber(stat, 0, parseInt(targetValue) || 0, 1000);
            });
        }
    }, 1000);
}

// Animar contagem de números
function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initDashboard);

// Se o script for carregado dinamicamente após o DOM já estar pronto
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initDashboard();
}

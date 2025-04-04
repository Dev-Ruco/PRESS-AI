// Gerenciador de Dropdowns
class DropdownManager {
  constructor() {
    this.dropdowns = document.querySelectorAll('[data-dropdown]');
    this.init();
  }

  init() {
    this.dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('button');
      if (button) {
        button.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggleDropdown(dropdown);
        });
      }
    });

    // Fechar dropdowns quando clicar fora
    document.addEventListener('click', () => {
      this.closeAllDropdowns();
    });

    // Fechar dropdowns com tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllDropdowns();
      }
    });
  }

  toggleDropdown(dropdown) {
    const isActive = dropdown.classList.contains('active');
    this.closeAllDropdowns();
    
    if (!isActive) {
      dropdown.classList.add('active');
      const dropdownMenu = dropdown.querySelector('.dropdown');
      if (dropdownMenu) {
        dropdownMenu.setAttribute('aria-hidden', 'false');
      }
    }
  }

  closeAllDropdowns() {
    this.dropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
      const dropdownMenu = dropdown.querySelector('.dropdown');
      if (dropdownMenu) {
        dropdownMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  new DropdownManager();
});

export default DropdownManager; 
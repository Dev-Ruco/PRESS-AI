const routes = {
  '/dashboard': '../Sistema/Paginas/dashboard.html',
  '/novo': '../Sistema/Paginas/novo_artigo.html',
};

async function loadPage(route) {
  const pagePath = routes[route] || routes['/dashboard'];
  const res = await fetch(pagePath);
  const html = await res.text();

  document.getElementById('app').innerHTML = html;
  history.replaceState({}, '', `#${route}`);
  marcarItemAtivo(route);

  // ✅ Carrega JS dinamicamente se for página /novo
  if (route === '/novo') {
    const script = document.createElement("script");
    script.src = "../Sistema/js/novo_artigo.js";
    script.onload = () => {
      if (typeof initNovoArtigoPage === "function") {
        initNovoArtigoPage();
      }
    };
    document.body.appendChild(script);
  }
}

function marcarItemAtivo(route) {
  const links = document.querySelectorAll('.menu-item');
  links.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${route}`);
  });
}

function handleHashChange() {
  const hash = window.location.hash.replace('#', '') || '/dashboard';
  loadPage(hash);
}

window.addEventListener('DOMContentLoaded', handleHashChange);
window.addEventListener('hashchange', handleHashChange);

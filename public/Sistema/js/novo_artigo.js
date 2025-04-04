document.addEventListener("DOMContentLoaded", () => {
  esconderTodosOsPaineis();

  const seletor = document.getElementById("articleTypeSelector");
  if (seletor) {
    seletor.classList.add("show");
  }
});

// 🔁 Mostrar painel por ID
function mostrarPainel(id) {
  esconderTodosOsPaineis();
  const painel = document.getElementById(id);
  if (painel) {
    painel.style.display = "block";
    setTimeout(() => painel.classList.add("show"), 10);
    painel.scrollIntoView({ behavior: "smooth" });
  }

  const sidebar = document.getElementById("painelSidebarNoticias");
  sidebar.style.display = id === "painelReformulacao" ? "block" : "none";
}

// 🔁 Esconde todos os painéis
function esconderTodosOsPaineis() {
  document.querySelectorAll("section[id^='painel'], #uploadSection, #articleTypeSelector, .reformulacao-area").forEach(el => {
    el.style.display = "none";
    el.classList.remove("show");
  });
  const sidebar = document.getElementById("painelSidebarNoticias");
  if (sidebar) sidebar.style.display = "none";
}

// ✅ Iniciar novo artigo
function startNewArticle() {
  esconderTodosOsPaineis();
  mostrarPainel("uploadSection");
}

// ✅ Painel de reformulação
function abrirPainelReformulacaoCompleto() {
  esconderTodosOsPaineis();
  const painel = document.getElementById("painelReformulacao");
  if (painel) {
    painel.style.display = "flex";
    painel.scrollIntoView({ behavior: "smooth" });
  }
  const sidebar = document.getElementById("painelSidebarNoticias");
  if (sidebar) sidebar.style.display = "block";
}

// ✅ Voltar
function voltarParaInicio() {
  esconderTodosOsPaineis();
  const seletor = document.getElementById("articleTypeSelector");
  if (seletor) {
    seletor.style.display = "block";
    setTimeout(() => seletor.classList.add("show"), 10);
  }
}

// ✅ Preenche conteúdo ao carregar link
function carregarArtigo() {
  const url = document.getElementById("linkArtigo").value.trim();
  const textarea = document.getElementById("conteudoOriginal");
  if (url && textarea) {
    textarea.value = `🔗 Artigo carregado de:\n${url}\n\n[Conteúdo carregado aqui...]`;
  }
}

// ✅ Dropdown de upload
function toggleUploadOptions() {
  const options = document.getElementById("uploadOptions");
  if (options) {
    options.style.display = options.style.display === "none" ? "flex" : "none";
  }
}

// ✅ Preview de ficheiros
function handleFileUpload(event, tipo) {
  const previewList = document.getElementById("previewList");
  Array.from(event.target.files).forEach(file => {
    const item = document.createElement("div");
    item.className = "upload-preview-item";
    item.innerHTML = `<span>${tipo}: ${file.name}</span><button onclick="this.parentElement.remove()">✕</button>`;
    previewList.appendChild(item);
  });
  event.target.value = "";
}

// ✅ Reformular a partir de notícia
function carregarParaReformulacao(btn) {
  const li = btn.closest("li");
  const titulo = li.querySelector("strong")?.innerText;
  const fonte = li.querySelector(".fonte-info")?.innerText;
  const textarea = document.getElementById("conteudoOriginal");
  if (textarea && titulo) {
    textarea.value = `📰 ${titulo}\n📍 ${fonte}\n\n[Conteúdo do artigo aqui...]`;
    mostrarPainel("painelReformulacao");
  }
}

// ✅ Cancelar e limpar campos
function cancelarReformulacao() {
  document.getElementById("linkArtigo").value = "";
  document.getElementById("conteudoOriginal").value = "";
  document.getElementById("previewList").innerHTML = "";
  voltarParaInicio();
}

// 🌍 Exportar para o HTML
window.startNewArticle = startNewArticle;
window.abrirPainelReformulacaoCompleto = abrirPainelReformulacaoCompleto;
window.voltarParaInicio = voltarParaInicio;
window.carregarArtigo = carregarArtigo;
window.toggleUploadOptions = toggleUploadOptions;
window.handleFileUpload = handleFileUpload;
window.carregarParaReformulacao = carregarParaReformulacao;
window.cancelarReformulacao = cancelarReformulacao;

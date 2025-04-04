const express = require('express');
const path = require('path');

const app = express();

// Permite o acesso a arquivos dentro de "public/"
app.use(express.static(path.join(__dirname, 'public')));

// Rota específica para servir o novo_artigo.html diretamente
app.get('/Sistema/Paginas/novo_artigo.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Sistema', 'Paginas', 'novo_artigo.html'));
});

// Servindo a página inicial do sistema
app.get('/sistema', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Sistema', 'inicio.html'));
});

// Servindo a página inicial do site
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Site', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(`Sistema disponível em http://localhost:${PORT}/sistema`);
});

const express = require('express');
const path = require('path');

const app = express();

// Permite o acesso a arquivos dentro de "public/"
app.use(express.static(path.join(__dirname, 'public')));

// Servindo a página inicial corretamente
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Site', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


  
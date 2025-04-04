const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname)));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Press AI rodando em http://localhost:${port}`);
}); 
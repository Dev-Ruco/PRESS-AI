const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Servir arquivos estáticos da raiz do projeto
app.use(express.static(__dirname));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para o dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Press AI rodando em http://localhost:${port}`);
  console.log(`Dashboard disponível em http://localhost:${port}/dashboard`);
}); 
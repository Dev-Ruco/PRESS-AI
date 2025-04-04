const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Rota para o dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dashboard.html'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Press AI rodando em http://localhost:${port}`);
  console.log(`Dashboard disponível em http://localhost:${port}/dashboard`);
}); 
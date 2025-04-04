# Press AI - Frontend

Frontend do sistema Press AI desenvolvido com SASS.

## Estrutura do Projeto

```
frontend/
├── css/           # Arquivos CSS compilados
├── scss/          # Arquivos SASS
│   ├── _variables.scss  # Variáveis
│   ├── _reset.scss     # Reset
│   ├── _base.scss      # Estilos base
│   ├── _components.scss # Componentes
│   └── _layout.scss    # Layouts
├── index.html     # Página principal
├── package.json   # Dependências
└── server.js      # Servidor de desenvolvimento
```

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Scripts Disponíveis

- `npm start`: Inicia o servidor
- `npm run sass`: Compila os arquivos SASS em modo de desenvolvimento (watch)
- `npm run sass:build`: Compila os arquivos SASS para produção (minificado) 
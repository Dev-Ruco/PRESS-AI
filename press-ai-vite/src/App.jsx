import React from 'react'
import Menu from './components/Menu'
import './styles/main.css'

function App() {
  return (
    <div className="app-container">
      <Menu />
      <main className="main-content">
        <div className="fade-in">
          <h1>Bem-vindo ao Press AI</h1>
          <p>Seu assistente de criação de conteúdo</p>
        </div>
      </main>
    </div>
  )
}

export default App

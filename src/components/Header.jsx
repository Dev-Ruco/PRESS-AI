import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <i className="fas fa-robot"></i>
        <span>Press AI</span>
      </div>
      
      <div className="header-actions">
        <button className="new-article-btn">
          <i className="fas fa-plus"></i>
          <span>Novo Artigo</span>
        </button>
        
        <div className="profile-dropdown">
          <div className="profile-btn">
            <i className="fas fa-user"></i>
          </div>
          <div className="profile-menu">
            <div className="profile-info">
              <h4>Seu Nome</h4>
              <p>seu.email@exemplo.com</p>
            </div>
            <div className="profile-links">
              <a href="/perfil"><i className="fas fa-user-circle"></i> Perfil</a>
              <a href="/configuracoes"><i className="fas fa-cog"></i> Configurações</a>
              <a href="/logout"><i className="fas fa-sign-out-alt"></i> Sair</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
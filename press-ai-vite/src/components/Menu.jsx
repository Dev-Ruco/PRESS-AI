import React from 'react';
import '../styles/menu.css';

const Menu = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <div className="menu-section">
          <div className="menu-title">Menu Principal</div>
          <a href="/dashboard" className="menu-item active">
            <i className="fas fa-home"></i>
            <span>Dashboard</span>
          </a>
          <a href="/artigos" className="menu-item">
            <i className="fas fa-file-alt"></i>
            <span>Artigos</span>
            <span className="badge">3</span>
          </a>
          <a href="/analytics" className="menu-item">
            <i className="fas fa-chart-bar"></i>
            <span>Analytics</span>
          </a>
        </div>

        <div className="menu-section">
          <div className="menu-title">Configurações</div>
          <a href="/perfil" className="menu-item">
            <i className="fas fa-user"></i>
            <span>Perfil</span>
          </a>
          <a href="/configuracoes" className="menu-item">
            <i className="fas fa-cog"></i>
            <span>Configurações</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu; 
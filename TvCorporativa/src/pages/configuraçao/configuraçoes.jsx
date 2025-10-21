import React from "react";
import "./Configuracoes.css";
import { Search } from "lucide-react";

export default function Configuracoes() {
  return (
    <div className="config-container">
      <header className="config-header">
        <h1 className="logo">V<span>ORTEK</span></h1>
        <div className="header-icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-plus"></i>
          <i className="fas fa-user"></i>
        </div>
      </header>

      <main className="config-content">
        <h2 className="section-title">Tempo de imagem</h2>
        <input type="text" className="input-field" placeholder="Digite o tempo..." />

        <h2 className="section-title">Cadastrar TV</h2>
        <input type="text" className="input-field" placeholder="Digite o nome da TV..." />

        <button className="btn-cadastrar">Cadastrar</button>

        <h2 className="section-title">Pesquisar TV</h2>
        <div className="search-container">
          <input
            type="text"
            className="input-search"
            placeholder="Buscar TV..."
          />
          <Search className="search-icon" size={18} />
        </div>

        <h2 className="list-title">Lista de cadastro</h2>
        <div className="list-header">
          <span>IMG</span>
          <span>PERÍODO</span>
          <span>TVS</span>
          <span>EDITOR</span>
          <span>EXCLUIR</span>
        </div>

        <div className="list-row">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </main>
    </div>
  );
}

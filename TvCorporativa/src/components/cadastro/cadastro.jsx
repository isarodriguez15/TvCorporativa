import React from "react";
import "./CadastroTV.css";
import { FaRegFileAlt, FaEye, FaPlus, FaSignOutAlt, FaSearch } from "react-icons/fa";
import logo from "../../assets/vortek-logo.png"; // ajuste o caminho conforme sua estrutura

const CadastroTV = () => {
  return (
    <div className="pagina-cadastro">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="logo-section">
          <img src={logo} alt="Logo Vortek" />
          <span>VORTEK</span>
        </div>

        <div className="icons-section">
          <FaRegFileAlt className="icon" />
          <FaEye className="icon" />
          <FaPlus className="icon" />
          <FaSignOutAlt className="icon" />
        </div>
      </header>

      {/* ===== FORM ===== */}
      <main className="conteudo">
        <form className="form-cadastro">
          <label>Tempo de imagem</label>
          <input type="text" placeholder="" />

          <label>Cadastrar TV</label>
          <input type="text" placeholder="" />

          <button type="submit">CADASTRAR</button>

          <label>Pesquisar TV</label>
          <div className="pesquisa-container">
            <input type="text" placeholder="" />
            <FaSearch className="icone-pesquisa" />
          </div>
        </form>
      </main>
    </div>
  );
};

export default CadastroTV;
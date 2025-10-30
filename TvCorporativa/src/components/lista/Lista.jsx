import React from "react";
import "./Lista.css"
import Header from "../../components/header/Header";
import senaiLogo from "../../assets/img/senai.png"
import vortekLogo from "../../assets/img/logo.png"

const cards = [
  { id: 1, title: "Refeitório", link: "#" },
  { id: 2, title: "Atendimento", link: "#" },
  { id: 3, title: "Atendimento", link: "#" },
  { id: 4, title: "Atendimento", link: "#" },
  { id: 5, title: "Atendimento", link: "#" },
  { id: 6, title: "Atendimento", link: "#" },
  { id: 7, title: "Atendimento", link: "#" },
  { id: 8, title: "Atendimento", link: "#" },
];

export default function App() {
  return (
    <div className="app">
      {/* Barra superior */}
      <header className="navbar">
        <div className="logo-area">
          <img src={vortekLogo} alt="VORTEK" className="logo-vortek" />
          <span className="logo-text">VORTEK</span>
        </div>
        <div className="navbar-icons">
          <i className="fa-regular fa-file-lines"></i>
          <i className="fa-regular fa-eye"></i>
          <i className="fa-solid fa-plus"></i>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="content">
        {cards.map((card) => (
          <a href={card.link} key={card.id} className="card">
            <img src={senaiLogo} alt="SENAI" className="senai-logo" />
            <p>{card.title}</p>
          </a>
        ))}
      </main>

      {/* Rodapé */}
      <footer className="footer">
        <i className="fa-solid fa-rotate-left"></i>
        <div className="footer-logo">
          <img src={vortekLogo} alt="VORTEK" className="logo-vortek" />
          <span>VORTEK</span>
        </div>
      </footer>
    </div>
  );
}

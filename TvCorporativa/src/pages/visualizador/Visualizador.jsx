import React from "react";

export default function CyberSecurityCard() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">VORTEK</h1>
      </header>

      {/* Main Card */}
      <div className="card">
        <div className="image-section">
          <img
            src="imgvisualizador.png"
            alt="Conselho EVQV"
            className="main-image"
          />
          <div className="overlay-text">
            <p className="subtitle">Curso Superior de Tecnologia em</p>
            <h2 className="title">SEGURANÇA CIBERNÉTICA</h2>
          </div>
          <div className="qr-code">
            <img src="/images/qrcode.png" alt="QR Code" />
          </div>
          <div className="side-banner">
            <p>FACULDADE DA INDÚSTRIA</p>
            <span>VESTIBULAR 2026</span>
          </div>
        </div>

        {/* Footer */}
        <footer className="footer">
          <p>14°</p>
          <p>💲5,34</p>
          <p>🕕6,27</p>
          <p>
            Você não está sozinho, a sua vida tem valor.{" "}
            <span className="date">25/09/2025</span>
          </p>
        </footer>
      </div>
    </div>
  );
}

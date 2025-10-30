import React from "react";
import imageseg from "../../assets/img/imageseg.png"
import "./Visualizador.css"
import Header from "../../components/header/Header";

export default function CyberSecurityCard() {
  return (
    <>
    <Header/>
      <main className="main_visualizador">
        <div className="campo_img">
          <img src={imageseg} alt="SEGURANÇA CIBERNÉTICA" className="main-image" />
          <div className="footer">
            <p>14°</p>
            <p>💲5,34</p>
            <p>🕕6,27</p>
            <p>
              Você não está sozinho, a sua vida tem valor.{" "}
              <span className="date">25/09/2025</span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

// FormNoticia.jsx
import React from "react";
import "./Mensagens.css";

export default function FormNoticia() {
  return (
    <main>
      <div>
        <form>
          <label htmlFor="titulo">TÍTULO:</label>
          <input type="text" id="titulo" name="titulo" required />

          <label htmlFor="mensagem">MENSAGEM:</label>
          <textarea name="mensagem" id="mensagem" rows="3" required></textarea>

          <label htmlFor="categoria">CATEGORIA:</label>
          <input type="text" id="categoria" name="categoria" required />

          <label htmlFor="data_inicio">DATA PARA COMEÇAR A EXIBIR:</label>
          <input type="date" id="data_inicio" name="data_inicio" required />

          <label htmlFor="data_fim">DATA DE PARAR DE EXIBIR:</label>
          <input type="date" id="data_fim" name="data_fim" required />

          <div className="button-container">
            <button type="reset" className="cancelar">
              CANCELAR
            </button>
            <button type="submit" className="confirmar">
              CONFIRMAR
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

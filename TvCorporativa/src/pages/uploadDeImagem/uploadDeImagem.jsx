import React, { useState } from "react";
import "./UploadImagem.css"; // corrigido o import

export default function UploadImagem() {
  const [fileName, setFileName] = useState("Nenhum arquivo selecionado");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName("Nenhum arquivo selecionado");
    }
  };

  return (
    <div>
      {/* Cabeçalho */}
      <header className="header">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Example_logo.png"
            alt="Logo Vortek"
          />
          <strong>VORTEK</strong>
        </div>
        <div className="icons">🔒 ➕ 📁</div>
      </header>

      {/* Container principal */}
      <div className="container">
        <form className="form-grid">
          {/* Upload de imagem */}
          <div>
            <label>Upload de imagem</label>
            <div className="upload-wrapper">
              <label htmlFor="upload" className="upload-display">
                <span>{fileName}</span>
                <button type="button">+</button>
              </label>
              <input
                type="file"
                id="upload"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}










  

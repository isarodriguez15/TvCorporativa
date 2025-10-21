import React, { useState } from "react";
import ".UploadImagem.css";

export default function UploadImagem() {
  const [filename, setFileName] = useState("Nenhum arquivo selecionado");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
        setFileName(event.target.files[0].name);
    }else  {
        setFileName("Nenhum arquivo selecionado");
    }
}; 

return (
    <div>
        {/* cabeçalho */}
    <header className="header">
        <div className="Logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Example_logo.png"
              alt="Logo Vortek"
              />
              <strong>VORTEK</strong>
              </div>
              <div className="icons"> 🔒 ➕ 📁</div> 
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
                                   
)
 









  

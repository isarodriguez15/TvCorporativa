import React from "react";
import "./Header.css";
import logo from "../../assets/img/logo.png"
import { FaRegFileAlt, FaEye, FaPlus, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo Vortek" />
      </div>

      <div className="icons-section">
        <FaRegFileAlt className="icon" />
        <FaEye className="icon" />
        <FaPlus className="icon" />
        <FaSignOutAlt className="icon" />
      </div>
    </header>
  );
};

export default Header;
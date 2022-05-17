import React from "react";
import logo from "../assets/logoSportsee.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" className="header-logo" />
      <nav className="header-nav">
        <a href="#" className="header-nav-link">
          Accueil
        </a>
        <a href="#" className="header-nav-link">
          Profil
        </a>
        <a href="#" className="header-nav-link">
          Réglage
        </a>
        <a href="#" className="header-nav-link">
          Communauté
        </a>
      </nav>
    </header>
  );
};

export default Header;

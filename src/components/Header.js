import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoSportsee.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="" className="header-logo" />
      <nav className="header-nav">
        <Link to="/" className="header-nav-link">
          Accueil
        </Link>
        <Link to="/" className="header-nav-link">
          Profil
        </Link>
        <Link to="/" className="header-nav-link">
          Réglage
        </Link>
        <Link to="/" className="header-nav-link">
          Communauté
        </Link>
      </nav>
    </header>
  );
};

export default Header;

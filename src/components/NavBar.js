import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <NavLink to="/" activeClassName="active-link" className="text-navbar">
          Acceuil
        </NavLink>
        <NavLink
          to="/formation"
          activeClassName="active-link"
          className="text-navbar"
        >
          Formation
        </NavLink>
        <NavLink
          to="/skill"
          activeClassName="active-link"
          className="text-navbar"
        >
          Compétences
        </NavLink>
        <NavLink
          to="/professional"
          activeClassName="active-link"
          className="text-navbar"
        >
          Expérience professionnelle
        </NavLink>
        <NavLink
          to="/realisation"
          activeClassName="active-link"
          className="text-navbar"
        >
          Réalisations
        </NavLink>

        <NavLink
          to="/about"
          activeClassName="active-link"
          className="text-navbar"
        >
          A propos !
        </NavLink>
        <SocialIcon
          url="https://linkedin.com/in/youri-choucoutou-690522142"
          className="icon"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <div className="animation start-home"></div>
      </nav>
    </header>
  );
}

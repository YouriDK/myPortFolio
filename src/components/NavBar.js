import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav>
        <NavLink to="/" className="text-navbar">
          Acceuil
        </NavLink>
        <NavLink to="/formation" className="text-navbar">
          Formation
        </NavLink>
        <NavLink to="/project" className="text-navbar">
          Compétences
        </NavLink>
        <NavLink to="/professional" className="text-navbar">
          Expérience professionnelle
        </NavLink>
        <NavLink to="/realisation" className="text-navbar">
          Réalisations
        </NavLink>
        <NavLink to="/about" className="text-navbar">
          A propos !
        </NavLink>
        <NavLink to="/post" className="text-navbar">
          Post
        </NavLink>{" "}
      </nav>
      <div className="icons">
        <SocialIcon
          url="https://linkedin.com/in/youri-choucoutou-690522142"
          className="icon"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCZTTqJo4YHomMHeTGXjrouA"
          className="icon"
          target="_blank"
          fgColor="#fff"
          style={{ height: 35, width: 35 }}
        />
      </div>
    </header>
  );
}

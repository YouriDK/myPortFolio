import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="navbar" /* Background red 600 [ darkness lvl ] */>
      <div className="header">
        <nav className="flex">
          <NavLink to="/" className="text-navbar">
            Youri
          </NavLink>
          <NavLink to="/post" className="text-navbar">
            Formation
          </NavLink>
          <NavLink to="/project" className="text-navbar">
            Compétences
          </NavLink>
          <NavLink to="/professional" className="text-navbar">
            Expérience professionnelle
          </NavLink>
          <NavLink to="/realisation" className="text-navbar">
            Réalisation
          </NavLink>
          <NavLink to="/about" className="text-navbar">
            A propos !
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://linkedin.com/in/youri-choucoutou-690522142"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCZTTqJo4YHomMHeTGXjrouA"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

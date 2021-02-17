import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import Flag from "react-world-flags";

export default function NavBar(props) {
  const [lang, setLang] = useState("FR");

  function ChangeLang(params) {
    setLang(params);
    props.onChangeLang(params);
  }
  return (
    <header className="navbar">
      {lang === "FR" ? (
        <nav>
          <NavLink
            to="/"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Acceuil
          </NavLink>
          <NavLink
            to="/formation"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Formation
          </NavLink>
          <NavLink
            to="/skill"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Compétences
          </NavLink>
          <NavLink
            to="/professional"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Expérience professionnelle
          </NavLink>
          <NavLink
            to="/realisation"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Réalisations
          </NavLink>

          <SocialIcon
            url="https://linkedin.com/in/youri-choucoutou-690522142"
            className="icon"
            target="_blank"
            fgColor="#fff"
            style={{ height: 42, width: 42 }}
          />

          <Flag onClick={() => ChangeLang("EN")} code="GBR" height="22" />

          <div className="animation start-home"></div>
        </nav>
      ) : (
        <nav>
          <NavLink
            to="/"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Home
          </NavLink>
          <NavLink
            to="/formation"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Education
          </NavLink>
          <NavLink
            to="/skill"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Skills
          </NavLink>
          <NavLink
            to="/professional"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Professionnal experience
          </NavLink>
          <NavLink
            to="/realisation"
            activeClassName="active-link"
            className="text-navbar brygada"
          >
            Realisations
          </NavLink>

          <SocialIcon
            url="https://linkedin.com/in/youri-choucoutou-690522142"
            className="icon"
            target="_blank"
            fgColor="#fff"
            style={{ height: 42, width: 42 }}
          />
          <Flag onClick={() => ChangeLang("FR")} code="FRA" height="25" />
          <div className="animation start-home"></div>
        </nav>
      )}
    </header>
  );
}

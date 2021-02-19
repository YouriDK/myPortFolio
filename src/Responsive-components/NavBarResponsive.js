import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Flag from "react-world-flags";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function NavBarResponsive(props) {
  const [dropdownOpen, setOpen] = useState(false);
  const [selection, setSelection] = useState("Acceuil");
  const [lang, setLang] = useState("FR");

  function ChangeLang(params) {
    setLang(params);
    props.onChangeLang(params);
  }
  const remote = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown
      isOpen={dropdownOpen}
      direction="down"
      toggle={remote}
      className="navbar-responsive"
    >
      <DropdownToggle className="dropdown-title ">{selection}</DropdownToggle>
      {lang === "FR" ? (
        <DropdownMenu className="dropdown-menu">
          <DropdownItem className="dropdownItem">
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Acceuil");
                }
              }}
              to="/"
            >
              Acceuil
            </NavLink>
          </DropdownItem>
          <DropdownItem className="dropdownItem">
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Formation");
                }
              }}
              to="/formation"
            >
              Formation
            </NavLink>
          </DropdownItem>
          <DropdownItem className="dropdownItem">
            {" "}
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Compétences");
                }
              }}
              to="/skill"
            >
              Compétences
            </NavLink>
          </DropdownItem>
          <DropdownItem className="dropdownItem">
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Expérience professionnelle");
                }
              }}
              to="/professional"
            >
              Expérience professionnelle
            </NavLink>
          </DropdownItem>
          <DropdownItem className="dropdownItem">
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Réalisations");
                }
              }}
              to="/realisation"
            >
              Réalisations
            </NavLink>{" "}
          </DropdownItem>
          <DropdownItem>
            {
              <Flag
                onClick={() => ChangeLang("EN")}
                code="GBR"
                height="20"
                className="marginAuto"
              />
            }
          </DropdownItem>
        </DropdownMenu>
      ) : (
        <DropdownMenu className="dropdown-menu">
          <DropdownItem className="dropdownItem">
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Home");
                }
              }}
              to="/"
            >
              Home
            </NavLink>
          </DropdownItem>
          <DropdownItem className="dropdownItem">
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Education");
                }
              }}
              to="/formation"
            >
              Education
            </NavLink>
          </DropdownItem>
          <DropdownItem className="dropdownItem">
            {" "}
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Skills");
                }
              }}
              to="/skill"
            >
              Skills
            </NavLink>
          </DropdownItem>
          <DropdownItem className="dropdownItem">
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Professionnal experience");
                }
              }}
              to="/professional"
            >
              Professionnal experience
            </NavLink>
          </DropdownItem>
          <DropdownItem className="dropdownItem">
            <NavLink
              isActive={(match, location) => {
                if (match) {
                  setSelection("Realisations");
                }
              }}
              to="/realisation"
            >
              Realisations
            </NavLink>{" "}
          </DropdownItem>
          <DropdownItem>
            {
              <Flag
                onClick={() => ChangeLang("FR")}
                code="FRA"
                height="20"
                className="marginAuto"
              />
            }
          </DropdownItem>
        </DropdownMenu>
      )}
    </ButtonDropdown>
  );
}

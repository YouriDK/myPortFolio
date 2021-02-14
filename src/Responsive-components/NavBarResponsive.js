import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function NavBarResponsive() {
  const [dropdownOpen, setOpen] = useState(false);
  const [selection, setSelection] = useState("Acceuil");

  const remote = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown
      isOpen={dropdownOpen}
      direction="down"
      toggle={remote}
      className="navbar-responsive"
    >
      <DropdownToggle className="dropdown-title ">{selection}</DropdownToggle>
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
          <NavLink
            isActive={(match, location) => {
              if (match) {
                setSelection("A propos !");
              }
            }}
            to="/about"
          >
            A propos !{" "}
          </NavLink>
        </DropdownItem>

        {/*  <DropdownItem>
          {" "}
          <SocialIcon
            url="https://linkedin.com/in/youri-choucoutou-690522142"
            className="iconkk"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
      </DropdownItem>*/}
      </DropdownMenu>
    </ButtonDropdown>
  );
}

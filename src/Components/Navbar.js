import React, { useState } from "react";
import logo from "../EO_Logo.png";
import "./Navbar.css";
import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-section">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
          className="nav-btn"
        >
          <svg
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </div>
      </div>
      <div className={toggleMenu ? "nav_menu_mobile" : "nav_menu"}>
        <ul>
          <li>
            <NavHashLink to="/#home">HOME</NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#about" href="#about">
              ABOUT ME
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#work" id="#work">
              MY WORK
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#albums" id="#albums">
              ALBUMS
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#contact" id="#contact">
              CONTACT
            </NavHashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

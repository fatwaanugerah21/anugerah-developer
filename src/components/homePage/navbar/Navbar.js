import React from "react";
import { burgerMenu } from "./burger-menu";
import "./navbar.min.css";
import { Logo } from "../../../logo";
import { Link } from "react-router-dom";

const Navbar = ({ pageYOffset, showMenu }) => {
  const withBackground = pageYOffset >= 200 ? " dark-background stick-top" : "";

  return (
    <div className={"navbar " + withBackground}>
      <div className="navbar-component row">
        <div className="burger-menu btn">
          <Link className="custom-button" onClick={() => showMenu()}>
            {burgerMenu}
          </Link>
        </div>
        <a href="#home">{Logo(false)}</a>
        <ul className="nav-container collapse-on-mobile">
          <li className="nav-item">COLLABORATE</li>
          <li className="nav-item">CALL</li>
          <li className="nav-item">DIRECTION</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

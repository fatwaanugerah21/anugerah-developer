import React from "react";
import { burgerMenu } from "./burger-menu";
import "./navbar.min.css";

const Navbar = ({ pageYOffset }) => {
  const withBackground = pageYOffset >= 200 ? "dark-background stick-top" : "";
  return (
    <div className={"navbar " + withBackground}>
      <div className="navbar-component row">
        <div className="burger-menu">{burgerMenu}</div>
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

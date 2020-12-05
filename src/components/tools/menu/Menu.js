import React from "react";
import "./menu.min.css";
const Menu = ({ showMenu, onClick }) => {
  const display = showMenu ? "" : "hide-menu";

  return (
    <div className={"menu full-size center-child " + display}>
      <h1>Anugerah Developer</h1>
      <span className="btn" onClick={() => onClick()}>
        &times;
      </span>
      <ul>
        <li className="center-child">
          <a onClick={() => onClick()} href="#home">
            Home
          </a>
        </li>
        <li className="center-child">
          <a onClick={() => onClick()} href="#about-us">
            About Us
          </a>
        </li>
        <li className="center-child">
          <a onClick={() => onClick()} href="#flow">
            Work Flow
          </a>
        </li>
        <li className="center-child">
          <a onClick={() => onClick()} href="#plans">
            Plans
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;

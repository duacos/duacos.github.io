import React from "react";
import { ReactComponent as Menu } from "../assets/images/menu.svg";

function Navigation({ toggle, handleClick }) {
  return (
    <React.Fragment>
      <div
        className={
          toggle === true ? "menu-circle menu-circle-click" : "menu-circle"
        }
      ></div>

      <div
        className={
          toggle === true ? "menu-screen menu-screen-click" : "menu-screen"
        }
      >
        <nav>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact me</li>
          </ul>
        </nav>
      </div>
      <div className="menu-btn" onClick={handleClick}>
        <Menu />
      </div>
    </React.Fragment>
  );
}

export default Navigation;

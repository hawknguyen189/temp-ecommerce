import React from "react";
import { Link } from "react-router-dom";

let addDivider = "dropdown-divider";
const NavDropdown = (props) => {
  return (
    <li className={`nav-item dropdown ${props.className}`}>
      {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        className="nav-link dropdown-toggle"
        href={props.path}
        id="navbarDropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.navMenu}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.navList.map((value, index) => {
          if (index === props.navList.length - 1) {
            addDivider = "";
          }
          return (
            <div className="sub-nav" key={index}>
              <Link className="dropdown-item" to={`/${value.navPath}`}>
                {value.navName}
              </Link>
              {/* <a className="dropdown-item" href="#"></a> */}
              <div className={addDivider}></div>
            </div>
          );
        })}
      </div>
    </li>
  );
};

export default NavDropdown;

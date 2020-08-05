import React from "react";
import { Link } from "react-router-dom";

const NavMobileDropdown = (props) => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navMobileDropwdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.navMenu}
      </a>
      <div className="dropdown-menu" aria-labelledby="navMobileDropwdown">
        {props.navList.map((value, index) => {
          return (
            <Link
              className="dropdown-item"
              to={`/${value.navPath}`}
              key={index}
            >
              {value.navName}
            </Link>
          );
        })}
      </div>
    </li>
  );
};

export default NavMobileDropdown;

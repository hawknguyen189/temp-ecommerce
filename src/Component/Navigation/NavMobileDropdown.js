import React from "react";

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
          {props.navList.map((value,index)=>{
              return (
                <a className="dropdown-item" href="#" key={index}>
                  {value}
                </a>
              );
          })}
      </div>
    </li>
  );
};

export default NavMobileDropdown;

import React from "react";
import Navbar from "../Component/Navigation/Navbar";
import NavbarMobile from "../Component/Navigation/NavbarMobile";
const Navigation = () => {
  return (
    <header id="header">
      <Navbar />
      <NavbarMobile></NavbarMobile>
    </header>
  );
};

export default Navigation;

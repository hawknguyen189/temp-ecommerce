import React from "react";
import Contact from "../Component/Footer/Contact";
import StoreInsight from "../Component/Footer/StoreInsight";
import MyAccount from "../Component/Footer/MyAccount";
import Instagram from "../Component/Footer/Instagram";
import Copyright from "../Component/Footer/Copyright";
import "../Component/Footer/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div id="footer" className="container mt-5 mb-5">
        <div className="row">
          <Contact></Contact>
          <StoreInsight></StoreInsight>
          <MyAccount></MyAccount>
          <Instagram></Instagram>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <Copyright></Copyright>
      </div>
    </footer>
  );
};

export default Footer;

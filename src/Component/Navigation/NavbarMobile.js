import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { UsersContext } from "../Context/UsersContext";
import NavMobileDropdown from "./NavMobileDropdown";
import brandLogo from "../../media/logo.png";
import { _debounce } from "../CommonUse/Utils";
import "./Navigation.scss";

const NavbarMobile = () => {
  //use context
  const { itemCount } = useContext(CartContext);
  const { user, setUser, login } = useContext(UsersContext);
  useEffect(() => {
    //have another choice  of using windowScroll hooks instead of this
    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      const navbarMobile = document.getElementsByClassName(
        "navbar-mobile-header"
      )[0].classList;
      document.documentElement.dataset.scroll = window.scrollY;
      if (parseInt(document.documentElement.dataset.scroll) !== 0) {
        navbarMobile.remove("navbar-mobile--top");
        navbarMobile.add("navbar-mobile--not-top");
      } else {
        navbarMobile.remove("navbar-mobile--not-top");
        navbarMobile.add("navbar-mobile--top");
      }
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", _debounce(storeScroll), {
      passive: true,
    });

    // Update scroll position for first time
    storeScroll();
  });
  return (
    <header
      id="headerNavbarMobile"
      className="d-lg-none sticky-top navbar-mobile-header navbar-mobile--top"
    >
      <div className="navbar-mobile container">
        <div tabIndex="0" className="navigation-header row mx-0">
          <div className="col-6 mobile-brand d-flex justify-content-end align-items-center">
            <Link to="/">
              <img
                src={brandLogo}
                className="img-fluid nav-mobile-header"
                alt="brand-logo"
                width="90"
                height="90"
              />
            </Link>
          </div>
          <div className="nav-mobile-icon col-6 d-flex align-items-center justify-content-end">
            <Link to={login ? `/account` : `/login`}>
              <i className="fas fa-user-circle nav-icon pr-4"></i>
            </Link>
            <i className="far fa-heart nav-icon pr-4"></i>
            <Link to="/cart">
              <i className="fas fa-shopping-cart nav-icon pr-4">
                ({itemCount})
              </i>
            </Link>
          </div>
        </div>
        <div id="nav-container">
          <div className="bg"></div>
          <div className="button" tabIndex="0">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </div>
          <div id="nav-content" tabIndex="0">
            <ul>
              <NavMobileDropdown
                navMenu="Home"
                className=""
                navList={["Home 1", "Home 2", "Home 3"]}
                path="#mainBackground"
              ></NavMobileDropdown>

              <NavMobileDropdown
                navMenu="Pages"
                className=""
                navList={["Pages 1", "Pages 2", "Pages 3"]}
                path="#sectionIntroduction"
              ></NavMobileDropdown>

              <NavMobileDropdown
                navMenu="Deals"
                className=""
                navList={["Deal 1", "Deal 2", "Deal 3"]}
                path="#dealSection"
              ></NavMobileDropdown>

              <NavMobileDropdown
                navMenu="Shop"
                className=""
                navList={[
                  { navName: "My Account", navPath: "account" },
                  { navName: "My Cart", navPath: "cart" },
                  { navName: "Check Out", navPath: "checkout" },
                  { navName: "Wishlist", navPath: "wishlist" },
                  { navName: "Shop", navPath: "shop/all" },
                ]}
                path="#storeSection"
              ></NavMobileDropdown>

              <NavMobileDropdown
                navMenu="Blog"
                className=""
                navList={[{ navName: "Blogs", navPath: "blog/all" }]}
                path="#blogSection"
              ></NavMobileDropdown>

              <NavMobileDropdown
                navMenu="Contact"
                className=""
                navList={["Contact 1", "Contact 2", "Contact 3"]}
                path="#footer"
              ></NavMobileDropdown>

              <li className="small">
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
          </div>
          {/* nav contaienr div  */}
        </div>
        {/* nav mobile div */}
      </div>
    </header>
  );
};

export default NavbarMobile;

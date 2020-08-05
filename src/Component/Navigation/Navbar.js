import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import brandLogo from "../../media/treo-bamboo-logo-green.png";
import NavDropdown from "./NavDropdown";
import $ from "jquery";
import { UsersContext } from "../Context/UsersContext";

const Navbar = () => {
  //use context
  const { itemCount } = useContext(CartContext);
  const {user, setUser} = useContext(UsersContext);
  // this is for hover menu
  useEffect(() => {
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
      if (this.matchMedia("(min-width: 768px)").matches) {
        $dropdown.hover(
          function () {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
          },
          function () {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
          }
        );
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });
  });

  return (
    // start off navbar
    <header id="headerNavbar" className="d-none d-lg-block sticky-top">
      <div className="navbar-desktop navbar-light bg-light">
        <div className="row">
          <div className="col-3 d-flex align-items-center justify-content-center">
            <Link to="/">
              <img
                src={brandLogo}
                className="img-fluid"
                alt="brand-logo"
                width="155"
                height="155"
              />
            </Link>
          </div>
          <nav id="navBar" className="navbar navbar-expand-lg col-6">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center d-lg-flex"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-2 nav-pills">
                <NavDropdown
                  navMenu="Home"
                  className=""
                  navList={["Home 1", "Home 2", "Home 3"]}
                  path="#mainBackground"
                ></NavDropdown>
              </ul>
              <ul className="navbar-nav  mr-2 nav-pills">
                <NavDropdown
                  navMenu="Pages"
                  className=""
                  navList={["Pages 1", "Pages 2", "Pages 3"]}
                  path="#sectionIntroduction"
                ></NavDropdown>
              </ul>
              <ul className="navbar-nav mr-2 nav-pills">
                <NavDropdown
                  navMenu="Deals"
                  className=""
                  navList={["Deal 1", "Deal 2", "Deal 3"]}
                  path="#dealSection"
                ></NavDropdown>
              </ul>
              <ul className="navbar-nav mr-2 nav-pills">
                <NavDropdown
                  navMenu="Shop"
                  className=""
                  navList={[
                    { navName: "My Account", navPath: "account" },
                    { navName: "My Cart", navPath: "cart" },
                    { navName: "Check Out", navPath: "checkout" },
                    { navName: "Wishlist", navPath: "wishlist" },
                  ]}
                  path="#storeSection"
                ></NavDropdown>
              </ul>
              <ul className="navbar-nav mr-2 nav-pills">
                <NavDropdown
                  navMenu="Blog"
                  className=""
                  navList={["Blog 1", "Blog 2", "Blog 3"]}
                  path="#blogSection"
                ></NavDropdown>
              </ul>
              <ul className="navbar-nav mr-2 nav-pills">
                <NavDropdown
                  navMenu="Contact"
                  className=""
                  navList={["Contact 1", "Contact 2", "Contact 3"]}
                  path="#footer"
                ></NavDropdown>
              </ul>
              {/* <form className="form-inline my-2 my-lg-0 mr-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
            </div>
          </nav>
          <div className="col-3 d-flex align-items-center justify-content-center">
            <p className="mb-0 mr-2 header-content">Hi {user && <span>{user.email}</span>}</p>
            <Link to={user ? `/account` : `/login`}>
              <i className="fas fa-user-circle nav-icon"></i>
            </Link>
            <i className="far fa-heart nav-icon pl-4"></i>
            <Link to="/cart">
              <i className="fas fa-shopping-cart nav-icon pl-4">
                ({itemCount})
              </i>
            </Link>
          </div>
        </div>
      </div>
      {/* end of navbar-desktop */}
    </header>
  );
};

export default Navbar;

import React from "react";
import "../src/Component/CommonUse/FlixCarousel.css";
// import logo from './logo.svg';
import "./App.css";
import "./Component/CommonUse/Utils.scss";
// import Header from "./Container/Header";
import MainBackground from "./Container/MainBackground";
import Navbar from "./Component/Navigation/Navbar"
import NavbarMobile from "./Component/Navigation/NavbarMobile";
import Introduction from "./Container/Introduction";
import ProductShow from "./Container/ProductShow";
import Delivery from "./Container/Delivery";
import Testimonials from "./Container/Testimonials";
import Blog from "./Container/Blog";
import Subscription from "./Container/Subscription";
import Footer from "./Container/Footer";
function App() {
  return (
    <div className="App">
      <MainBackground />
      <Navbar />
      <NavbarMobile />
      <main>
        <Introduction />
        <ProductShow />
        <Delivery />
        <Testimonials />
        <Blog />
        <Subscription />
      </main>
      <Footer />
    </div>
  );
}

export default App;

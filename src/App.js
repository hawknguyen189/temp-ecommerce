import React from "react";
import "../src/Component/CommonUse/FlixCarousel.css";
// import logo from './logo.svg';
import "./App.css";
import "./Component/CommonUse/Utils.scss";
// import Header from "./Container/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainBackground from "./Container/MainBackground";
import Navbar from "./Component/Navigation/Navbar";
import NavbarMobile from "./Component/Navigation/NavbarMobile";
import Introduction from "./Container/Introduction";
import ProductShow from "./Container/ProductShow";
import Delivery from "./Container/Delivery";
import Testimonials from "./Container/Testimonials";
import Blog from "./Container/Blog";
import Subscription from "./Container/Subscription";
import Footer from "./Container/Footer";
import Cart from "./Container/Cart";
import NotFound from "./Container/NotFound";
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route path="/" component={Navbar} />
        <Route path="/" component={NavbarMobile} />
        <Switch>
          <Route exact path="/">
            <main>
              <MainBackground />
              <Introduction />
              <ProductShow />
              <Delivery />
              <Testimonials />
              <Blog />
              <Subscription />
            </main>
          </Route>
          <Route path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
      {/* <MainBackground />
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
      <Footer /> */}
    </div>
  );
}

export default App;

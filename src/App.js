import React, { useContext, useEffect } from "react";
import "../src/Component/CommonUse/FlixCarousel.css";
// import logo from './logo.svg';
import "./App.css";
import "./Component/CommonUse/Utils.scss";
// import Header from "./Container/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, db } from "./Container/Firebase";
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
import Account from "./Container/Account";
import NotFound from "./Container/NotFound";
import Login from "./Component/Account/Login";
import { UsersContext } from "./Component/Context/UsersContext";

function App() {
  const {login, setLogin, user, setUser} = useContext(UsersContext);
  // console.log("user top ", user);
  // console.log("user context ",UsersContext);
  const updateUser = (collection, uid) => {
    const docRef = db.collection(collection).doc(uid);
    // const getOptions = {
    //   source: "cache",
    // };
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          const userData = doc.data();
          setUser(userData);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        // setUser(authUser);
        // updateUser("users",authUser.uid);
        setLogin(authUser);
      } else {
        //the user is logged out
        setLogin("");
        setUser("");
      }
    });
    // console.log("inside use effect ");
    // console.log("inside user is ", user);
    return () => {
      //any clean up operation will go here
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //  useEffect hook will also be executed after updating the state or props. If you're updating
  // the state or props inside this hook, it would simply go into an infinite loop because of this.
  console.log("user is ", user);
  console.log("login is ", login);
  return (
    <div className="App">
      <Router>
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
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

import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { UsersContext } from "../Component/Context/UsersContext";
import PageTitle from "../Component/CommonUse/PageTitle";
import Login from "../Component/Account/Login";
import Profile from "../Component/Account/Profile";
import { auth, db } from "./Firebase";

const Account = () => {
  const history = useHistory();
  const { user, setUser, login } = useContext(UsersContext);
  const [userinfo, setUserinfo] = useState({
    fname: "",
    lname: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalcode: "",
    country: "",
    autocomplete: "",
  });
  const handleChange = (e) => {
    // e.preventDefault();
    // console.log("test foo ", e.target.name)
    setUserinfo({
      ...userinfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleSignout = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then((auth) => {
        // sign out successfully, redirect to homepage
        history.push("/");
      })
      .catch((e) => alert(e.message));
    setUser(null);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    db.collection("users")
      .doc(login.uid)
      .update({
        ...userinfo,
        timestamp: db.FieldValue.serverTimestamp(),
      })
      .then(function () {
        // console.log("Document successfully updated!");
        alert("Document successfully updated!");
      })
      .catch(function (error) {
        alert("Error updating  document: ", error);
        // console.error("Error updating  document: ", error);
      });
  };

  return (
    <div className="" id="cartPage">
      <PageTitle pageInfo="My Account"></PageTitle>
      {login ? (
        <div className="container mt-3">
          <div className="account-tab">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#accountOverview"
                  role="tab"
                  aria-controls="accountOverview"
                  aria-selected="true"
                >
                  Your Profile
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#order"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Your Orders
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="tab-content mt-3" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="accountOverview"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h6>Welcome back {user.email ? user.email : ""}</h6>

                <Profile
                  handleSignout={handleSignout}
                  handleChange={handleChange}
                  userinfo={userinfo}
                  setUserinfo={setUserinfo}
                  handleUpdate={handleUpdate}
                ></Profile>
              </div>
              <div
                className="tab-pane fade"
                id="order"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                Order history will be here
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login></Login>
      )}
    </div>
  );
};
export default Account;

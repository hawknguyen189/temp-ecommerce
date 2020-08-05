import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { UsersContext } from "../Component/Context/UsersContext";
import PageTitle from "../Component/CommonUse/PageTitle";
import Login from "../Component/Account/Login";
import Profile from "../Component/Account/Profile";
import { auth } from "./Firebase";

const Account = () => {
  const {user, setUser} = useContext(UsersContext);
  const history = useHistory();
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
    const user = auth.currentUser;

    user
      .updateProfile({
        displayName: "Andrew",
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
      .then(function () {
        // Update successful.
        console.log("yay");
        console.log(user);
      })
      .catch(function (error) {
        // An error happened.
        alert(error.message);
      });
  };
  return (
    <div className="" id="cartPage">
      <PageTitle pageInfo="My Account"></PageTitle>
      {user ? (
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
                <h6>Welcome back {user.email}</h6>
                <p>
                  You can{" "}
                  <a onClick={handleUpdate} href="/">
                    add name
                  </a>{" "}
                  here
                </p>
                <Profile
                  handleSignout={handleSignout}
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

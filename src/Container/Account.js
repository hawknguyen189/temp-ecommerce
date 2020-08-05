import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { UsersContext } from "../Component/Context/UsersContext";
import PageTitle from "../Component/CommonUse/PageTitle";
import Login from "../Component/Account/Login";
import { auth } from "./Firebase";

const Account = () => {
  const [user, setUser] = useContext(UsersContext);
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
        <div className="container">
          <h6>Welcome back {user.email}</h6>
          <p>
            You can{" "}
            <a onClick={handleSignout} href="/">
              sign out
            </a>{" "}
            here
          </p>
          <p>
            You can{" "}
            <a onClick={handleUpdate} href="/">
              add name
            </a>{" "}
            here
          </p>
        </div>
      ) : (
        <Login></Login>
      )}
    </div>
  );
};
export default Account;

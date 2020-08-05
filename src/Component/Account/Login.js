import React, { useState } from "react";
import { auth, db } from "../../Container/Firebase";
import { useHistory } from "react-router-dom";
// import { UsersContext } from "../Context/UsersContext";

const Login = () => {
  const history = useHistory();
  //   console.log(history);

  // set up useStaet
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // add update user context function after sign in or register
  const hanldeLogin = (e) => {
    e.preventDefault(); //stop refershing page
    // we do login logic here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // sign in successfully, redirect to homepage
        // listen to log in then push to data layout
        // console.log(auth);
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const hanldeRegister = (e) => {
    e.preventDefault(); //stop refershing page
    // we do registere logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created, loged in then redirect to homepage
        // Add a new document in collection "cities"
        db.collection("users")
          .doc(auth.user.uid)
          .set({
            email: auth.email,
          })
          .then(function (auth) {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="container-fluid login-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="form-control"
                      placeholder="Email address"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="rememberPass"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="rememberPass"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                    onClick={hanldeLogin}
                  >
                    Sign in
                  </button>
                  <button
                    className="btn btn-lg btn-secondary btn-block text-uppercase"
                    type="submit"
                    onClick={hanldeRegister}
                  >
                    Create your account
                  </button>
                  <hr className="my-4" />
                  <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2"></i> Sign in with Google
                  </button>
                  <button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f mr-2"></i> Sign in with
                    Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

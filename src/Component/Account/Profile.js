import React, { useState } from "react";

const Profile = (props) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  //   const [fname, setFname] = useState("");
  //   const [fname, setFname] = useState("");
  //   const [fname, setFname] = useState("");
  return (
    //  <!-- form user info -->
    <div className="card card-outline-secondary">
      <div className="card-header">
        <h3 className="mb-0">Your Information</h3>
      </div>
      <div className="card-body">
        <form className="form" autoComplete="off">
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              First name
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Last name
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Email
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="email"
                value="email@gmail.com"
                disabled
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Phone#
            </label>
            <div className="col-lg-9">
              <input className="form-control" type="number" value="" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Website
            </label>
            <div className="col-lg-9">
              <input className="form-control" type="url" value="" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Time Zone
            </label>
            <div className="col-lg-9">
              <select id="user_time_zone" className="form-control" size="0">
                <option value="Hawaii">(GMT-10:00) Hawaii</option>
                <option value="Alaska">(GMT-09:00) Alaska</option>
                <option value="Pacific Time (US &amp; Canada)">
                  (GMT-08:00) Pacific Time (US &amp; Canada)
                </option>
                <option value="Arizona">(GMT-07:00) Arizona</option>
                <option value="Mountain Time (US &amp; Canada)">
                  (GMT-07:00) Mountain Time (US &amp; Canada)
                </option>
                <option value="Central Time (US &amp; Canada)" defaultValue>
                  (GMT-06:00) Central Time (US &amp; Canada)
                </option>
                <option value="Eastern Time (US &amp; Canada)">
                  (GMT-05:00) Eastern Time (US &amp; Canada)
                </option>
                <option value="Indiana (East)">
                  (GMT-05:00) Indiana (East)
                </option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label"></label>
            <div className="col-lg-9">
              <input
                type="button"
                className="btn btn-primary"
                value="Save Changes"
              />
              <button
                className="btn btn-secondary"
                onClick={props.handleSignout}
              >
                Sign Out
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

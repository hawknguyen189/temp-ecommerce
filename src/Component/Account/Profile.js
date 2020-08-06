import React, { useEffect, useContext } from "react";
import places from "places.js";

import { UsersContext } from "../Context/UsersContext";

const Profile = ({
  handleChange,
  handleSignout,
  handleUpdate,
  userinfo,
  setUserinfo,
}) => {
  const { user } = useContext(UsersContext);
  // add algolia autocomplete address
  useEffect(() => {
    const options = {
      appId: "pl1KDX3VAWUU",
      apiKey: "0d16c71eed86b1bc0d0b341377df9fa1",
      container: document.querySelector("#addressAuto"),
      // ...
    };
    const placesAutocomplete = places(options);
    placesAutocomplete.on("change", (e) => {
      const suggestion = e.suggestion;
      //   console.log(suggestion);
      setUserinfo((userinfo) => ({
        ...userinfo,
        address: suggestion.name,
        city: suggestion.city,
        province: suggestion.administrative,
        postalcode: suggestion.postcode,
        country: suggestion.country,
      }));
    });
    // console.log("places autocomplete ", placesInstance)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
                name="fname"
                type="text"
                onChange={handleChange}
                value={userinfo.fname || ""}
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
                name="lname"
                type="text"
                onChange={handleChange}
                value={userinfo.lname || ""}
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
                name="email"
                type="email"
                value={user.email || ""}
                disabled
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-lg-3 col-form-label form-control-label">
              Phone#
            </label>
            <div className="col-lg-9">
              <input
                className="form-control"
                name="phone"
                type="number"
                onChange={handleChange}
                value={userinfo.phone || ""}
                placeholder="Phone Number"
              />
            </div>
          </div>
          {/* address container */}
          <div className="form-group address-container">
            <div className="row">
              <label className="col-lg-3 col-form-label form-control-label">
                Location Autocomplete
              </label>
              <div className="col-lg-9">
                <input
                  className="form-control"
                  id="addressAuto"
                  name="autocomplete"
                  type="text"
                  onChange={handleChange}
                  value={userinfo.autocomplete || ""}
                  placeholder="Autocomplete Address"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm">
                <label className="col-form-label form-control-label">
                  Address
                </label>
                <div className="">
                  <input
                    className="form-control"
                    id="mainAddress"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={userinfo.address || ""}
                    placeholder="Home Address"
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <label className="col-form-label form-control-label">
                  City
                </label>
                <div className="">
                  <input
                    className="form-control"
                    type="text"
                    name="city"
                    onChange={handleChange}
                    value={userinfo.city || ""}
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <label className="col-form-label form-control-label">
                  State/Province
                </label>
                <div className="">
                  <input
                    className="form-control"
                    type="text"
                    name="province"
                    onChange={handleChange}
                    value={userinfo.province || ""}
                    placeholder="State or Province"
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <label className="col-form-label form-control-label">
                  Postal Code
                </label>
                <div className="">
                  <input
                    className="form-control"
                    name="postalcode"
                    type="text"
                    onChange={handleChange}
                    value={userinfo.postalcode || ""}
                    placeholder="Postal / Zip Code"
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <label className="col-form-label form-control-label">
                  Country
                </label>
                <div className="">
                  <input
                    className="form-control"
                    name="country"
                    type="text"
                    onChange={handleChange}
                    value={userinfo.country || ""}
                    placeholder="Country"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group d-flex justify-content-end">
            <div className="">
              <button className="btn btn-primary mr-3" onClick={handleUpdate}>
                Update Changes
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => handleSignout(e)}
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

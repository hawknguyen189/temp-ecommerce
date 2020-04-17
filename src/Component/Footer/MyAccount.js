import React from "react";

const MyAccount = () => {
  return (
    <div className="col-sm-2 account-info">
      <h3 className="footer-header mb-4">My Account</h3>
      <ul className="list-unstyled insight-list">
        <li className="mb-3">
          <a href="">My Account</a>
        </li>
        <li className="mb-3">
          <a href="">Profile</a>
        </li>
        <li className="mb-3">
          <a href="">Address</a>
        </li>
        <li className="mb-3">
          <a href="">Discount</a>
        </li>
        <li className="mb-3">
          <a href="">Orders History</a>
        </li>
      </ul>
    </div>
  );
};

export default MyAccount;

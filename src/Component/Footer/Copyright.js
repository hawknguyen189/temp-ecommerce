import React from "react";

const Copyright = () => {
  return (
    <div className="row ">
      <div className="col-sm copyright-content">
        Made with <i className="fas fa-fire-alt"></i> by Hoc Nguyen - Copyright ©
        2020 Hoc Nguyen - All Rights Reserved.
      </div>
      <div className="col-sm text-right row policy-content">
        <div className="col-sm">
          <a href="">PRIVACY POLICY</a>
        </div>
        <div className="col-sm">
          <a href="">TERM AND CONDITIONS</a>
        </div>
      </div>
    </div>
  );
};

export default Copyright;

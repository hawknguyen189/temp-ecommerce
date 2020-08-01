import React from "react";
import "./SectionTitle.scss";

const PageTitle = (props) => {
  return (
    <div className="jumbotron cart-bg text-center">
      <div className="container">
        <div className="row">
          <div className="col-sm page-title text-center">{props.pageInfo}</div>
        </div>
        <div className="row">
          <h6 className="col-sm sub-title">welcome to Loop PPE</h6>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;

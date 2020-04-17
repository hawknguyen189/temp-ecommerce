import React from "react";
import "./SectionTitle.scss";

const SectionTitle = props => {
  return (
    <div className="container text-center pt-3 pb-3 mt-4 mb-3 section-title">
      <h1 className="font-weight-bold mt-2">{props.title}</h1>
      <p className="sub-title">{props.desc}</p>
    </div>
  );
};

export default SectionTitle;

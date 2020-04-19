import React from "react";
import ImpressionLogo from "../../media/business-description.png";

const BusinessVision = () => {
  return (
    <section id="sectionIntroduction" className="container-fluid">
      <img
        src={ImpressionLogo}
        alt="business-impression"
        className="mx-auto d-block pb-5 pt-5"
      />
      <div className="row justify-content-center">
        <h4 className="header-content col-sm-5 pb-5 pt-5">
          <p>
            We are <strong>Sustainable Home Supplier</strong> of bamboo & other
            eco-friendly products.
          </p>
          <p>
            <strong>TreO Bamboo</strong> aims to build a sustainable future with
            bamboo materials, specifically through the promotion of these green
            building materials as comfortable, durable, eco-friendly
            alternatives to conventional products.
          </p>
        </h4>
      </div>
    </section>
  );
};

export default BusinessVision;

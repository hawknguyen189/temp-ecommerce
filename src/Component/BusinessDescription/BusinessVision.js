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
          We are <strong>Online Market</strong> of fresh fruits & vegetables.
          You can also find organic & healthy juice, processed food as well as
          gentle skin care at our store.
        </h4>
      </div>
    </section>
  );
};

export default BusinessVision;

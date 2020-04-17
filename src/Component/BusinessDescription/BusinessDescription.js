import React from "react";
import IntroductionWho from "../../media/who.png";
import IntroductionHow from "../../media/how.png";
import IntroductionWhat from "../../media/what.png";

const BusinessDescription = () => {
  return (
    <section className="container-fluid">
      <div className="introduction row justify-content-center pt-5 pb-5">
        <div className="who col-sm-3 text-center pb-3">
          <img src={IntroductionWho} className="img-fluid" alt="" />
          <h6 className="text-content">
            Understanding the sometimes harmful methods of modern agriculture,
            we started a niche for quality organic produce grown.
          </h6>
          <a className="btn btn-outline-info" href="">
            Learn more
          </a>
        </div>
        <div className="how col-sm-3 text-center pb-3">
          <img src={IntroductionHow} className="img-fluid" alt="" />
          <h6 className="text-content">
            We believe it’s the best way to inspire our community to relish in
            the taste of real, seasonal produce and keep connected to the land.
          </h6>
          <a className="btn btn-outline-info" href="">
            Learn more
          </a>
        </div>
        <div className="what col-sm-3 text-center pb-3">
          <img src={IntroductionWhat} className="img-fluid" alt="" />
          <h6 className="text-content">
            We take special care to select and grow specific crop varieties
            where exceptional flavor is the focus, with a determination to bring
            the best-tasting produce.
          </h6>
          <a className="btn btn-outline-info" href="">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessDescription;

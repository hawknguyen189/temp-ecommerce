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
            Understanding the sometimes harmful methods of modern construction
            materials, we started a niche for quality home sustainable products.
          </h6>
          <a className="btn btn-outline-info" href="">
            Learn more
          </a>
        </div>
        <div className="how col-sm-3 text-center pb-3">
          <img src={IntroductionHow} className="img-fluid" alt="" />
          <h6 className="text-content">
            We take special care to select and grow specific bamboo crop that
            it not only provides a sustainable alternative to furnitures and accessories but also to construction materials like timber or steel.
          </h6>
          <a className="btn btn-outline-info" href="">
            Learn more
          </a>
        </div>
        <div className="what col-sm-3 text-center pb-3">
          <img src={IntroductionWhat} className="img-fluid" alt="" />
          <h6 className="text-content">
            Bamboo is a fast-growing, renewable, and easy-to-grow material that
            requires zero chemicals and pesticides. It can be grown all
            throughout the world and has countless uses both in and outside the
            home.
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

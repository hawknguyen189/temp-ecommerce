import React from "react";
import Slider from "../CommonUse/Slider";

const BestSeller = ({ bestseller }) => {
  return (
    <div className="best-seller pt-5">
      <h3 className="shop-heading">Best Sellers</h3>
      {bestseller &&
        bestseller.map((e, index) => {
          return (
            <div key={index} className="container best-seller-list">
              <div className="row bs-intro">
                <div className="col-sm-5 border border-light product-image">
                  <img
                    src={"https:" + e.fields.image[0].fields.file.url}
                    className="img-fluid"
                    alt={e.title}
                  />
                </div>
                <div className="col-sm-7 product-name">
                  <span>{e.fields.productName}</span>
                  <Slider
                    sliderWidth={35}
                    customClass="my-2 best-seller-slider "
                  ></Slider>
                  {[...Array(5)].map((value, index) => {
                    return (
                      <i
                        className={`fas fa-medal testimonial-rating`}
                        key={index}
                      ></i>
                    );
                  })}
                </div>
              </div>
              <div className="row bs-price pt-2">
                <div className="col-sm text-center">
                  {e.fields.discountPrice ? (
                    <p className="detail-price pb-3">
                      <span className="strike-price mr-3">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(e.fields.price)}
                      </span>
                      <span className="discount-price">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(e.fields.discountPrice)}
                      </span>
                    </p>
                  ) : (
                    <p className="detail-price pb-3">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(e.fields.price)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default BestSeller;

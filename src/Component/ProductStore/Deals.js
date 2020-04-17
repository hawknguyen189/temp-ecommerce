import React from "react";
import deals from "./DealsData";
import "./ProductStore.scss";

const Deals = () => {
  return (
    <div id="dealSection" className="container-fluid deal-background deal-of-the-day align-items-center justify-content-center">
      <div className="container">
        <div className="row">
          <div className="product-display col-md-6 d-flex">
            <img
              src={require("../../media/" + deals[0].productImage)}
              className="img-fluid"
              alt="deal-of-the-day"
            />
            <div className="product-price align-self-center position-absolute align-items-center justify-content-center d-flex main-font">
              <a href="" className="text-center text-reset">
                <span>-Only-</span>

                <span>
                  {" "}
                  <span>£</span>
                  {deals[0].productPrice}
                </span>
              </a>
            </div>
          </div>
          <div className="product-display col-md-6 align-self-center main-font">
            <h1 className="font-weight-bolder deal-product-header">
              DEAL OF THE DAY
            </h1>
            <h5 className="pb-4 deal-product-name">{deals[0].productName}</h5>
            <p className="pb-4">{deals[0].productDesc}</p>
            <button className="btn btn-primary add-to-cart align-self-center mb-3">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

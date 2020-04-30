import React from "react";
import "./ProductStore.scss";

const Collection = () => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="row">
          <img
            src={require("../../media/products/" + "loop-bamboo-floor.jpg")}
            alt=""
            className="img-fluid fit-img"
          />
          <span>Bamboo Floor</span>
        </div>
        <div className="row pb-2 ">
          <img
            src={require("../../media/products/" + "foo.jpg")}
            alt=""
            className="img-fluid fit-img"
          />
          <span>Bamboo Solutions</span>
        </div>
      </div>
      <div className="col-sm-8">
        <div className="row pl-3">
          <img
            src={require("../../media/products/" + "loop-bamboo-decking.jpg")}
            alt=""
            className="img-fluid fit-img"
          />
          <span>Sustainable Bambo Decking</span>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <img
              src={require("../../media/products/" +
                "loop-bamboo-countertop.jpg")}
              alt=""
              className="img-fluid fit-img"
            />
            <span>Bamboo Countertop</span>
          </div>
          <div className="col-sm-7">
            <img
              src={require("../../media/products/" +
                "loop-bamboo-accessory.jpg")}
              alt=""
              className="img-fluid fit-img"
            />
            <span>Home Furniture</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collection;

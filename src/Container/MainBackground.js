import React from "react";
import Background from "../Component/MainBackground/Background";
import SlidingProducts from "../Component/MainBackground/SlidingShowData";

let className = "";
const HeaderContent = () => {
  return (
    <div id="mainBackground" className="header-sliding-show jumbotron p-0">
      <div id="headerCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#headerCarousel"
            data-slide-to="0"
            className="active carousel-indicator"
          ></li>
          <li
            data-target="#headerCarousel"
            data-slide-to="1"
            className="carousel-indicator"
          ></li>
          <li
            data-target="#headerCarousel"
            data-slide-to="2"
            className="carousel-indicator"
          ></li>
        </ol>
        <div className="carousel-inner">
          {SlidingProducts.map((value, index) => {
            if (index === 0) {
              className = "carousel-item active";
            } else {
              className = "carousel-item";
            }
            return <Background className={className} sliderData={value} key={index}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;

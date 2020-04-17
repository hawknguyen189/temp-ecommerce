import React from "react";
import "./Background.scss";

const Background = props => {
  return (
    <div className={props.className} data-interval={props.sliderData.intervalTime}>
      <div className="main-background container-fluid  justify-content-center align-items-center">
        <div className="row justify-content-between align-items-center p-4 w-100 container">
          <div className="header-content col-sm-6">
            <h4 className="header-title text-left">{props.sliderData.title}</h4>
            <h1 className="header-heading">{props.sliderData.heading}</h1>
            <span className="header-caption text-left">
              {props.sliderData.caption}
            </span>
          </div>
          {/* <div className="slider-content"></div> */}
          <div className="header-picture col-sm-6">
            <img
              className="img-fluid"
              src={require("../../media/" + props.sliderData.url)}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;

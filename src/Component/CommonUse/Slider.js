import React from "react";
const Slider = ({ sliderWidth,customClass}) => {
  const style = {
    width: `${sliderWidth}%`,
    height: 1,
    backgroundColor: "#e7e5e4",
  };
  return <div style={style} className={customClass}></div>;
};

export default Slider;

import React from "react";

const DeliveryProcess = props => {
  return (
    <div
      className={
        "col-sm mb-5 justify-content-center process-panel " + props.processStep
      }
    >
      <div className="process-visual col-sm">
        {/* <span className="process-icon"></span> */}
        <img
          src={require("../../media/icons/process-spinner.png")}
          alt=""
          className="position-absolute process-icon"
        />
        <i className={props.processIcon}></i>
      </div>
      <div className="process-content col-sm">
        <h5 className="process-title-font">{props.processContent.step}</h5>
        <p className="process-description-font">{props.processContent.description}</p>
      </div>
    </div>
  );
};
export default DeliveryProcess;

import React from "react";
import "./DeliveryBackground.scss";
import DeliveryProcess from "./DeliveryProcess";

const DeliveryBackground = () => {
  return (
    <div className="delivery-background mt-5">
      <div className="row text-center">
        <DeliveryProcess
          processIcon="fas fa-vote-yea process-logo"
          processStep="step-1"
          processContent={{
            step: "Step 1",
            description: "Select Your Products"
          }}
        />
        <DeliveryProcess
          processIcon="fas fa-warehouse process-logo"
          processStep="step-2"
          processContent={{
            step: "Step 2",
            description: "Connect To Nearest Farm"
          }}
        />
        <DeliveryProcess
          processIcon="   fas fa-map-marked-alt process-logo"
          processStep="step-3"
          processContent={{
            step: "Step 3",
            description: "Share Your Location"
          }}
        />
        <DeliveryProcess
          processIcon="fas fa-truck process-logo"
          processStep="step-4"
          processContent={{
            step: "Step 4",
            description: "Deliver Your Product"
          }}
        />
      </div>
      <img
        src={require("../../media/delivery-background.png")}
        alt=""
        className="process-img img-fluid mx-auto d-block"
      />
    </div>
  );
};
export default DeliveryBackground;

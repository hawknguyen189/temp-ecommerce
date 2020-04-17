import React from "react";
import SectionTitle from "../Component/CommonUse/SectionTitle";
import DeliveryBackground from "../Component/Delivery/DeliveryBackground";

const Delivery = () => {
  return (
    <section id="sectionDelivery" className="container mt-5 mb-5 pb-5">
      <div className="row">
        <SectionTitle title="Delivery Process" desc="How To Get Delivered" />
      </div>
      <DeliveryBackground/>
    </section>
  );
};
export default Delivery;

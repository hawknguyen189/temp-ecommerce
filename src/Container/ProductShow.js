import React from "react";
import Collection from "../Component/ProductStore/Collection";
import SectionTitle from "../Component/CommonUse/SectionTitle";

const ProductShow = () => {
  return (
    <section id="sectionProduct" className="store-products container-fluid mb-5">
      <SectionTitle title="OUR PRODUCTS" desc="-Featured Products-" />
      <Collection></Collection>
    </section>
  );
};

export default ProductShow;

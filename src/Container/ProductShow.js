import React from "react";
import Deals from "../Component/ProductStore/Deals";
import SectionTitle from "../Component/CommonUse/SectionTitle";
import FilterBar from "../Component/ProductStore/FilterBar";

const ProductShow = () => {
  return (
    <section
      id="sectionProduct"
      className="store-products container-fluid mb-5"
    >
      <Deals />
      <SectionTitle title="OUR PRODUCTS" desc="-Featured Products-" />
      <FilterBar />
    </section>
  );
};

export default ProductShow;

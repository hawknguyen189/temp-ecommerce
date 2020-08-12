import React from "react";
import Deals from "../Component/ProductStore/Deals";
import SectionTitle from "../Component/CommonUse/SectionTitle";
import FilterBar from "../Component/ProductStore/FilterBar";
// import { ProductsContext } from "../Component/Context/ProductsContext";

const ProductShow = () => {
  return (
    <section
      id="sectionProduct"
      className="store-products container-fluid mb-5"
    >
      <Deals />
      <SectionTitle title="OUR PRODUCTS" desc="-Featured Products-" />
      <FilterBar storeDivision="col-sm-3"/>
    </section>
  );
};

export default ProductShow;

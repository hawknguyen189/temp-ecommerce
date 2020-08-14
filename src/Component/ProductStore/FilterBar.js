import React from "react";
import FilterButton from "../CommonUse/FilterButton";
import StoreProduct from "./StoreProduct";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const FilterBar = ({ storeDivision }) => {
  const { productHome } = useContext(StoreContext);
  return (
    <div id="storeSection">
      <FilterButton />
      <StoreProduct
        storeDivision={storeDivision}
        filteredProducts={productHome}
      />
    </div>
  );
};
export default FilterBar;

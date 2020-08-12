import React from "react";
import FilterButton from "../CommonUse/FilterButton";
import StoreProduct from "./StoreProduct";

const FilterBar = ({ storeDivision }) => {
  return (
    <div id="storeSection">
      <FilterButton />
      <StoreProduct storeDivision={storeDivision} />
    </div>
  );
};
export default FilterBar;

import React from "react";
import FilterButton from "../CommonUse/FilterButton";
import FrontPageProducts from "./FrontPageProducts";
import { StoreContextProvider } from "../CommonUse/StoreContext";

const FilterBar = () => {
  return (
    <StoreContextProvider>
      <div>
        <FilterButton />
        <FrontPageProducts />
      </div>
    </StoreContextProvider>
  );
};
export default FilterBar;

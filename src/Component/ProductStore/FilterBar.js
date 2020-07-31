import React from "react";
import FilterButton from "../CommonUse/FilterButton";
import FrontPageProducts from "./FrontPageProducts";
import { StoreContextProvider } from "../Context/StoreContext";

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

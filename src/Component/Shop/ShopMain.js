import React from "react";
import StoreProduct from "../ProductStore/StoreProduct";

const ShopMain = ({ productData }) => {
  return (
    <div className="col-sm-9" id="mainShop">
      <StoreProduct storeDivision="col-sm-4"></StoreProduct>
    </div>
  );
};

export default ShopMain;

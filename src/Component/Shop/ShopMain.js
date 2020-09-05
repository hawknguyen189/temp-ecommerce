import React from "react";
import StoreProduct from "../ProductStore/StoreProduct";
import { StoreContext } from "../Context/StoreContext";
import { useContext } from "react";

const ShopMain = ({ productData }) => {
  const { productShop } = useContext(StoreContext);
  return (
    <div className="col-sm-9" id="mainShop">
      <StoreProduct
        storeDivision="col-sm-4"
        filteredProducts={productShop}
      ></StoreProduct>
    </div>
  );
};

export default ShopMain;

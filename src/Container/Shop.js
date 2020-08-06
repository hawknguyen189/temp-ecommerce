import React, { useContext } from "react";
import PageTitle from "../Component/CommonUse/PageTitle";
import { ProductsContext } from "../Component/Context/ProductsContext";

const Shop = () => {
  const { productData } = useContext(ProductsContext);
  return (
    <div id="shopPage">
      <PageTitle pageInfo="Shop"></PageTitle>
      <div className="container">
        <div className="row">
          <div className="col-sm-3" id="sidebar"></div>
          <div className="col-sm-9" id="mainShop"></div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

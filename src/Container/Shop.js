import React, { useContext } from "react";
import PageTitle from "../Component/CommonUse/PageTitle";
import ShopSideBar from "../Component/Shop/ShopSideBar"
import ShopMain from "../Component/Shop/ShopMain";
import { ProductsContext } from "../Component/Context/ProductsContext";
import "../Component/Shop/Shop.scss"

const Shop = () => {
  const { productData } = useContext(ProductsContext);
  const { category } = useContext(ProductsContext);
  return (
    <div id="shopPage">
      <PageTitle pageInfo="Shop"></PageTitle>
      <div className="container pt-3">
        <div className="row">
          <ShopSideBar category={category}></ShopSideBar>
          <ShopMain productData={productData}></ShopMain>
        </div>
      </div>
    </div>
  );
};

export default Shop;

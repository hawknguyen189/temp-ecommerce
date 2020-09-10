import React, { useContext } from "react";
import StoreProduct from "../ProductStore/StoreProduct";
import { useRouter } from "../CommonUse/CustomHooks";
import { StoreContext } from "../Context/StoreContext";

const ShopMain = () => {
  const { productShop } = useContext(StoreContext); //use a different var from productData, for filter purpose
  const router = useRouter();
  let productArray = [];
  if (productShop) {
    if (router.query.category.toUpperCase() === "ALL") {
      productArray = [...productShop];
    } else {
      productArray = productShop.filter((e) =>
        e.fields.categories.find(
          (e) => e.fields.title === router.query.category.toUpperCase()
        )
      );
    }
  }
  return (
    <div className="col-sm-9" id="mainShop">
      <StoreProduct
        storeDivision="col-sm-4"
        filteredProducts={productArray}
      ></StoreProduct>
    </div>
  );
};

export default ShopMain;

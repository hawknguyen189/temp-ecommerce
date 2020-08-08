import React, { createContext, useState, useEffect, useMemo } from "react";
// import products from "../ProductStore/ProductsData";
import client from "../../Container/Contentful";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  // let products = [];
  const [productData, setProductData] = useState("");
  const [deal, setDeal] = useState("");
  useEffect(() => {
    // retrieve product data from contenful
    client
      .getEntries({ content_type: "product" })
      .then((response) => {
        console.log("product data ready yeah yeah")
        setProductData(response.items);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    let specialDeal;
    for (const element in productData) {
      const found = productData[element].fields.tags.findIndex(
        (e) => e === "special-deal"
      );
      if (found !== -1) {
        specialDeal = element;
        break;
      }
    }
    let temp;
    if (!specialDeal) {
      temp = productData[0];
    } else {
      temp = productData[specialDeal];
    }
    if (temp) {
      setDeal(temp);
    }
  }, [productData]);
  console.log("product data is ", productData);
  console.log("special deal is ", deal);
  const contextValues = useMemo(
    () => ({
      productData,
      setProductData,
      deal,
      setDeal,
    }),
    [productData, deal]
  );
  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

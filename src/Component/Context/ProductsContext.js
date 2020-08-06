import React, { createContext, useState, useEffect } from "react";
// import products from "../ProductStore/ProductsData";
import client from "../../Container/Contentful";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  // let products = [];
  const [productData, setProductData] = useState({});
  useEffect(() => {
    client
      .getEntries({ content_type: "product" })
      .then((response) => {
        setProductData(response.items);
      })
      .catch(console.error);
  }, []);
  console.log("contentful response is ", productData);

  return (
    <ProductsContext.Provider value={{ productData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

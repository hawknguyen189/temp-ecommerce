import React, { createContext, useState } from "react";
import  products  from "../ProductStore/ProductsData";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [productData] = useState(products);

  return (
    <ProductsContext.Provider value={{ productData }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

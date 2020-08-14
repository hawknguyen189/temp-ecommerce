import React, { useState } from "react";
import { useMemo } from "react";
import { ProductsContext } from "./ProductsContext";
import { useContext } from "react";
import { useEffect } from "react";

const warningObject = {
  get throwWarning() {
    throw new Error("You probably forgot to put <MyProvider>.");
  },
};
const StoreContext = React.createContext(warningObject);
const StoreContextProvider = (props) => {
  const { productData } = useContext(ProductsContext);
  const [productHome, setProductHome] = useState("");
  const [productShop, setProductShop] = useState("");
  useEffect(() => {
    setProductHome(productData);
    setProductShop(productData);
  }, [productData]);
  const contextValues = useMemo(
    () => ({
      productHome,
      setProductHome,
      productShop,
      setProductShop,
    }),
    [productHome, productShop]
  );
  return (
    <StoreContext.Provider value={contextValues}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };

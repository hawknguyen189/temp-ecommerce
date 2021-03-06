import React, { createContext, useState, useEffect, useMemo } from "react";
import client from "../../Container/Contentful";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  // let products = [];
  const [productData, setProductData] = useState("");
  const [deal, setDeal] = useState("");
  const [category, setCategory] = useState([
    "all",
    "new-arrival",
    "mask",
    "glove",
    "gown",
  ]);
  useEffect(() => {
    // retrieve product data from contenful
    client
      .getEntries({ content_type: "product" })
      .then((response) => {
        let productResponse = [...response.items];
        productResponse.forEach((e, index) => {
          const special = e.fields.special;
          let findDiscount;
          if (special) {
            findDiscount = parseInt(
              special
                .find(
                  (element) => element.toUpperCase().includes("SALE") === true
                )
                .toUpperCase()
                .split("SALE")[1]
            );
          }
          if (findDiscount && findDiscount > 0) {
            productResponse[index].fields["discountPrice"] =
              productResponse[index].fields.price * (1 - findDiscount / 100);
          }
        });
        setProductData(productResponse);
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
      category,
      setCategory,
    }),
    [productData, deal, category]
  );
  return (
    <ProductsContext.Provider value={contextValues}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

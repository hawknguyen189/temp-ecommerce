import React from "react";
import products from "./ProductsData";
import { StoreContext } from "../Context/StoreContext";

const FrontPageProducts = () => {
  // eslint-disable-next-line no-unused-vars
  const [tag, setTag] = React.useContext(StoreContext);
  // create filtered products array
  let filteredProducts;
  if (tag.includes("all")) {
    filteredProducts = [...products]; //copy products array
  } else {
    filteredProducts = products.filter((product) => {
      let showProduct = false;
      for (let i = 0; i < tag.length; i++) {
        if (product.tag.includes(tag[i])) {
          showProduct = true;
          break;
        }
      }
      return showProduct === true;
    });
  }
  return (
    <div id="storeSection" className="container mt-3">
      <div className="row product-shelf">
        {filteredProducts.map((product, index) => {
          const productLink = product.productName
            .toLowerCase()
            .replace(/ /g, "-");
          return (
            <div
              className="col-sm-3 pr-2 pl-2 pb-2 pt-2 product-lot"
              key={index}
            >
              <div className="card">
                <div className="product-thumb ">
                  <a href={"#" + productLink} className=" text-center">
                    <img
                      src={require("../../media/products/" +
                        productLink +
                        ".jpg")}
                      alt=""
                      className="card-img-top rounded"
                    />
                  </a>
                </div>
                <div className="product-desc card-body">
                  <a
                    href={"#" + productLink}
                    className="product-name text-center"
                  >
                    <p>{product.productName}</p>
                  </a>
                  <p className="text-center product-price">
                    <span>£</span>
                    {product.productPrice + ".00"}
                  </p>
                  <div className="product-action">
                    <div className="container row justify-content-center">
                      <div className="quick-view d-flex justify-content-center px-2">
                        <a
                          href=""
                          className="rounded-circle d-flex justify-content-center"
                        >
                          <i className="far fa-eye align-self-center"></i>
                        </a>
                      </div>
                      <div className="add-to-cart d-flex justify-content-center px-2">
                        <a
                          href=""
                          className="rounded-circle d-flex justify-content-center"
                        >
                          <i className="fas fa-shopping-cart align-self-center"></i>
                        </a>
                      </div>
                      <div className="add-to-compare d-flex justify-content-center px-2">
                        <a
                          href=""
                          className="rounded-circle d-flex justify-content-center"
                        >
                          <i className="fas fa-balance-scale align-self-center"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrontPageProducts;

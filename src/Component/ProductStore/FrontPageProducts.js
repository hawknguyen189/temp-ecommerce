import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import products from "./ProductsData";
import { StoreContext } from "../Context/StoreContext";
import { ProductsContext } from "../Context/ProductsContext";

const FrontPageProducts = () => {
  //use context
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { productData } = useContext(ProductsContext);
  const [tag, setTag] = React.useContext(StoreContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.sys.id === product.sys.id);
  }; //check this item already in cart

  // eslint-disable-next-line no-unused-vars
  // create filtered products array
  let filteredProducts;
  if (tag.includes("all")) {
    filteredProducts = [...productData]; //copy products array
  } else {
    filteredProducts = productData.filter((product) => {
      let showProduct = false;
      for (let i = 0; i < tag.length; i++) {
        if (product.fields.tags.includes(tag[i])) {
          showProduct = true;
          break;
        }
      }
      return showProduct === true;
    });
  }
  return (
    <div id="storeSection" className="container mt-3">
      {productData && (
        <div className="row product-shelf">
          {filteredProducts.map((product, index) => {
            return (
              <div
                className="col-sm-3 pr-2 pl-2 pb-2 pt-2 product-lot"
                key={index}
              >
                <div className="card">
                  <div className="product-thumb ">
                    <a href={"#"} className=" text-center">
                      <img
                        src={"https:" + product.fields.image[0].fields.file.url}
                        alt=""
                        className="card-img-top rounded product-image"
                      />
                    </a>
                  </div>
                  <div className="product-desc card-body">
                    <a href={"#"} className="product-name text-center">
                      <p>{product.fields.productName}</p>
                    </a>
                    <p className="text-center product-price">
                      <span>£</span>
                      {product.fields.price + ".00"}
                    </p>
                    <div className="product-action">
                      <div className="container row justify-content-center">
                        <div className="quick-view d-flex justify-content-center px-2">
                          <a
                            href="/"
                            className="rounded-circle d-flex justify-content-center"
                          >
                            <i className="far fa-eye align-self-center"></i>
                          </a>
                        </div>
                        <div className="add-to-cart d-flex justify-content-center px-2">
                          {isInCart(product) && (
                            <a
                              href="/"
                              className="rounded-circle d-flex justify-content-center"
                              onClick={(e) => {
                                e.preventDefault();
                                return increase(product);
                              }}
                            >
                              <i className="fas fa-shopping-cart align-self-center"></i>
                            </a>
                          )}

                          {!isInCart(product) && (
                            <a
                              href="/"
                              className="rounded-circle d-flex justify-content-center"
                              onClick={(e) => {
                                e.preventDefault();
                                return addProduct(product);
                              }}
                            >
                              <i className="fas fa-shopping-cart align-self-center"></i>
                            </a>
                          )}
                        </div>
                        <div className="add-to-compare d-flex justify-content-center px-2">
                          <a
                            href="/"
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
      )}
    </div>
  );
};

export default FrontPageProducts;

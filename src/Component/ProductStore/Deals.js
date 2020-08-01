import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
// import deals from "./DealsData";
import products from "./ProductsData";
import "./ProductStore.scss";

const Deals = () => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  let specialDeal;
  for (const element in products) {
    const found = products[element].tag.findIndex((e) => e === "special-deal");
    if (found !== -1) {
      specialDeal = element;
      break;
    }
  }
  let product;
  if (!specialDeal) {
    product = products[0];
  } else {
    product = products[specialDeal];
  }
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  const productLink = product.productName.toLowerCase().replace(/ /g, "-");
  return (
    <div
      id="dealSection"
      className="container-fluid deal-background deal-of-the-day align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row">
          <div className="product-display col-md-6 d-flex">
            <img
              src={require("../../media/products/" + productLink + ".jpg")}
              className="img-fluid"
              alt="deal-of-the-day"
            />
            <div className="product-price align-self-center position-absolute align-items-center justify-content-center d-flex main-font">
              <a href="" className="text-center text-reset">
                <span>-Only-</span>

                <span>
                  {" "}
                  <span>£</span>
                  {product.productPrice}
                </span>
              </a>
            </div>
          </div>
          <div className="product-display col-md-6 align-self-center main-font">
            <h1 className="font-weight-bolder deal-product-header">
              DEAL OF THE DAY
            </h1>
            <h5 className="pb-4 deal-product-name">{product.productName}</h5>
            <p className="pb-4">{product.productDesc}</p>
            {isInCart(product) && (
              <button
                onClick={() => increase(product)}
                className="btn btn-primary add-to-cart align-self-center mb-3"
              >
                Add more
              </button>
            )}

            {!isInCart(product) && (
              <button
                onClick={() => addProduct(product)}
                className="btn btn-primary add-to-cart align-self-center mb-3"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

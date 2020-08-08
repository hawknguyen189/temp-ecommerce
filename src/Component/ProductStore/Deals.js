import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { ProductsContext } from "../Context/ProductsContext";
import "./ProductStore.scss";

const Deals = () => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { deal } = useContext(ProductsContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.sys.id === product.sys.id);
  };
  return (
    <div
      id="dealSection"
      className="container-fluid deal-background deal-of-the-day align-items-center justify-content-center"
    >
      {deal && (
        <div className="container">
          <div className="row">
            <div className="product-display col-md-6 d-flex">
              <img
                src={"https:" + deal.fields.image[0].fields.file.url}
                className="img-fluid"
                alt="deal-of-the-day"
              />
              <div className="product-price align-self-center position-absolute align-items-center justify-content-center d-flex main-font">
                <a href="" className="text-center text-reset">
                  <span>-Only-</span>

                  <span>
                    {" "}
                    <span>£</span>
                    {deal.fields.price}
                  </span>
                </a>
              </div>
            </div>
            <div className="product-display col-md-6 align-self-center main-font">
              <h1 className="font-weight-bolder deal-product-header">
                DEAL OF THE DAY
              </h1>
              <h5 className="pb-4 deal-product-name">{deal.fields.productName}</h5>
              <p className="pb-4">{deal.fields.productDescription}</p>
              {isInCart(deal) && (
                <button
                  onClick={() => increase(deal)}
                  className="btn btn-primary add-to-cart align-self-center mb-3"
                >
                  Add more
                </button>
              )}

              {!isInCart(deal) && (
                <button
                  onClick={() => addProduct(deal)}
                  className="btn btn-primary add-to-cart align-self-center mb-3"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Deals;

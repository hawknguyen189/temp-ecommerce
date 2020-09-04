import React, { useContext } from "react";
import { useRouter } from "../CommonUse/CustomHooks";
import { CartContext } from "../Context/CartContext";
import { useState } from "react";

const ProductDetail = ({ productData }) => {
  const { addProduct, cartItems, increaseQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  let product;
  if (productData) {
    product = productData.find((e) => e.fields.slug === router.query.slug);
  }
  console.log("slug ", product);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.sys.id === product.sys.id);
  }; //check this item already in cart
  return (
    <div className="product-detail col-sm-9">
      {product && (
        <div className="row">
          {/* left col for product image */}
          <div className="col-sm-6 card detail-card">
            <img
              src={"https:" + product.fields.image[0].fields.file.url}
              className="card-img-top"
              alt={product.fields.slug}
            />
            <div className="card-body">
              {/* show product image */}
              <div className="row">
                {product.fields.image.map((e, index) => {
                  return (
                    <img
                      src={"https:" + e.fields.file.url}
                      className="img-thumbnail col-sm-4"
                      alt={e.title}
                      key={index}
                    />
                  );
                })}
              </div>
              {/* end show product image */}
            </div>
          </div>
          {/* end image */}
          <div className="col-sm-6 product-summary">
            <h3>{product.fields.productName}</h3>
            <p>{product.fields.price}</p>
            <p>{product.fields.productDescription}</p>
            <div className="row justify-content-center">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="btn btn-danger btn-sm mb-1"
              >
                <i className="fas fa-minus"></i>
              </button>

              <p className="mx-2 product-quantity">{quantity}</p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="btn btn-primary btn-sm mr-2 mb-1"
              >
                <i className="fas fa-plus"></i>
              </button>
              <div className="add-to-cart d-flex justify-content-center px-2">
                {isInCart(product) && (
                  <a
                    href="/"
                    className="d-flex justify-content-center btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      return increaseQuantity(product, quantity);
                    }}
                  >
                    Add To Cart
                  </a>
                )}

                {!isInCart(product) && (
                  <a
                    href="/"
                    className="d-flex justify-content-center btn btn-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      addProduct(product);
                      return increaseQuantity(product, quantity - 1);
                    }}
                  >
                    Add To Cart
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

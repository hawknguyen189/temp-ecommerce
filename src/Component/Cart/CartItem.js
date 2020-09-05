import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { ProductsContext } from "../Context/ProductsContext";

import { formatNumber } from "../CommonUse/Utils";
// import { productLink } from "../CommonUse/Utils";

const CartItem = ({ product, index, productID }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);
  const { productData } = useContext(ProductsContext);
  // const productPath = productLink(product.productName);
  let productPrice;
  if (productData) {
    const findProduct = productData.find((e) => e.sys.id === product.sys.id)
      .fields;
    if (findProduct.discountPrice) {
      productPrice = findProduct.discountPrice;
    } else {
      productPrice = findProduct.price;
    }
  }
  return (
    <tr>
      <th scope="row">
        <div className="row">
          <p className="col-sm">{index + 1}</p>
          <div className="p-2 text-right col-sm d-flex">
            <button
              onClick={() => removeProduct(product)}
              className="btn btn-danger btn-sm mb-1 align-self-center"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </th>
      <td>
        <div className="row">
          <img
            alt={product.name}
            src={"https:" + product.fields.image[0].fields.file.url}
            className="col-sm-4 img-fluid product-image"
          />
          <p className="mb-1 product-name col-sm-4">
            {product.fields.productName}
          </p>
        </div>
      </td>
      <td>
        <p className="mb-1 product-price text-center">
          Price: {formatNumber(productPrice)}{" "}
        </p>
      </td>
      <td>
        <div className="row justify-content-center">
          {product.quantity === 1 ? (
            <button
              onClick={() => removeProduct(product)}
              className="btn btn-danger btn-sm mb-1"
              width="16px"
            >
              <i className="fas fa-minus"></i>
            </button>
          ) : (
            <button
              onClick={() => decrease(product)}
              className="btn btn-danger btn-sm mb-1"
            >
              <i className="fas fa-minus"></i>
            </button>
          )}

          <p className="mx-2 product-quantity">{product.quantity}</p>
          <button
            onClick={() => increase(product)}
            className="btn btn-primary btn-sm mr-2 mb-1"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </td>
      <td>
        <p className="sub-total text-center">
          {formatNumber(product.quantity * productPrice)}
        </p>
      </td>
    </tr>
  );
};

export default CartItem;

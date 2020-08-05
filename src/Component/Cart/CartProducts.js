import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

import CartItem from "./CartItem";

const CartProducts = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-main container mt-5 mb-5">
      <table className="table table-striped cart-table">
        <thead>
          <tr className="">
            <th scope="col" style={{ width: "10%" }}>
              #
            </th>
            <th className="text-center" scope="col" style={{ width: "30%" }}>
              Product
            </th>
            <th className="text-center" scope="col" style={{ width: "20%" }}>
              Price
            </th>
            <th className="text-center" scope="col" style={{ width: "20%" }}>
              Quantity
            </th>
            <th className="text-center" scope="col" style={{ width: "20%" }}>
              Subtotal
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product, index) => (
            <CartItem
              key={product.id}
              product={product}
              index={index}
              productID={product.id}
            />
          ))}
        </tbody>
      </table>
      <div className="container input-group mb-3 cart-coupon">
        <div className="row">
          {/* <label for="coupon code">Coupon:</label> */}
          <input
            type="text"
            className="form-control col-sm rounded-pill"
            placeholder="Coupon code"
            aria-label="Couponcode"
            aria-describedby="basic-addon1"
          />
          <div className="input-group-prepend col-sm">
            <button
              className="btn btn-primary rounded"
              type="button"
              id="btnCoupon"
            >
              Add Coupon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;

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
    </div>
  );
};

export default CartProducts;

import React, { useContext } from "react";

import CartProducts from "../Component/Cart/CartProducts";
import { CartContext } from "../Component/Context/CartContext";
import { formatNumber } from "../Component/CommonUse/Utils";
import { Link } from "react-router-dom";
import PageTitle from "../Component/CommonUse/PageTitle";

const Cart = () => {
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);
  return (
    <div className="" id="cartPage">
      <PageTitle pageInfo="Cart"></PageTitle>
      {cartItems.length > 0 ? (
        <CartProducts />
      ) : (
        <div className="p-3 text-center text-muted">Your cart is empty</div>
      )}

      {checkout && (
        <div className="p-3 text-center text-success">
          <p>Checkout successfull</p>
          <Link to="/" className="btn btn-outline-success btn-sm">
            BUY MORE
          </Link>
        </div>
      )}
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
      <div className="container cart-checkout">
        <div className="row justify-content-end">
          {cartItems.length > 0 && (
            <div className="col-sm-6 p-3">
              <div className="card card-body">
                <h2 className="mb-5">Cart totals</h2>
                <div className="row">
                  <p className="col-sm cart-total">Total Items</p>
                  <h4 className="col-sm">{itemCount}</h4>
                </div>
                <div className="row">
                  <p className="col-sm cart-total">Total Payment</p>
                  <h4 className="col-sm">{formatNumber(total)}</h4>
                </div>

                <hr className="my-4" />
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mb-2"
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    CLEAR
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* end row */}
      </div>
    </div>
  );
};
export default Cart;

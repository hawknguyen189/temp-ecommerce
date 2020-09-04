import React, { createContext, useReducer, useContext } from "react";
// import { CartReducer, sumItems } from "./CartReducer";
import { ProductsContext } from "./ProductsContext";
import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const CartContextProvider = ({ children }) => {
  const { productData } = useContext(ProductsContext);

  const Storage = useCallback((cartItems) => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  }, []);

  const sumItems = useCallback(
    (cartItems) => {
      Storage(cartItems);
      console.log("get product data inside sumitems ", productData);
      let itemCount = cartItems.reduce(
        (accu, product) => accu + product.quantity,
        0
      );
      let total = cartItems
        .reduce((sub, product) => {
          let productPrice = 0;
          if (productData) {
            productPrice = productData.find((e) => e.sys.id === product.sys.id)
              .fields.price;
          }
          console.log("find price?", productPrice);
          console.log("find quantity?", product.quantity);
          return sub + productPrice * product.quantity;
        }, 0)
        .toFixed(2);
      console.log("total?", total);
      return { itemCount, total };
    },
    [productData]
  );

  const CartReducer = useCallback(
    (state, action) => {
      switch (action.type) {
        case "INITIATE_DATA": //to run update useReducer state only after fetching productData
          console.log("inside reducer to initite data");
          return {
            ...state,
            ...sumItems(state.cartItems),
          };
        case "ADD_ITEM":
          if (
            !state.cartItems.find(
              (item) => item.sys.id === action.payload.sys.id
            )
          ) {
            state.cartItems.push({
              ...action.payload,
              quantity: 1,
            });
          }

          return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...state.cartItems],
          };
        case "REMOVE_ITEM":
          return {
            ...state,
            ...sumItems(
              state.cartItems.filter(
                (item) => item.sys.id !== action.payload.sys.id
              )
            ),
            cartItems: [
              ...state.cartItems.filter(
                (item) => item.sys.id !== action.payload.sys.id
              ),
            ],
          };
        case "INCREASE":
          state.cartItems[
            state.cartItems.findIndex(
              (item) => item.sys.id === action.payload.sys.id
            )
          ].quantity++;
          return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...state.cartItems],
          };
        case "INCREASE_QUANTITY":
          state.cartItems[
            state.cartItems.findIndex(
              (item) => item.sys.id === action.payload.sys.id
            )
          ].quantity += action.payload.addingQuantity;
          console.log("inside increase ", state);
          return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...state.cartItems],
          };
        case "DECREASE":
          state.cartItems[
            state.cartItems.findIndex(
              (item) => item.sys.id === action.payload.sys.id
            )
          ].quantity--;
          return {
            ...state,
            ...sumItems(state.cartItems),
            cartItems: [...state.cartItems],
          };
        case "CHECKOUT":
          return {
            cartItems: [],
            checkout: true,
            ...sumItems([]),
          };
        case "CLEAR":
          console.log("do clear");
          return {
            cartItems: [],
            ...sumItems([]),
          };
        default:
          return state;
      }
    },
    [productData]
  );

  const initialState = {
    cartItems: storage, //cartItems retrieves data from localStorage
    ...sumItems(storage),
    checkout: false,
  };
  console.log("inside cart context ", initialState);
  // const memoizedReducer = React.useCallback(CartReducer, []);
  const [state, dispatch] = useReducer(CartReducer, initialState);
  // Reducers specify how the application's state changes in response to actions sent to the store.
  // Remember that actions only describe what happened, but don't describe how the application's state changes.

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };
  const increaseQuantity = (payload, quantity) => {
    payload = {
      ...payload,
      addingQuantity: quantity,
    };
    dispatch({ type: "INCREASE_QUANTITY", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const addProduct = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    console.log("CHECKOUT", state);
    dispatch({ type: "CHECKOUT" });
  };

  useEffect(() => {
    // use to re-update useReduder state after fetching productData (total)
    console.log("initiating data");
    dispatch({ type: "INITIATE_DATA", productData });
  }, [productData]);

  const contextValues = {
    removeProduct,
    addProduct,
    increase,
    increaseQuantity,
    decrease,
    clearCart,
    handleCheckout,
    ...state,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

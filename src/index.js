import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import ProductsContextProvider from "./Component/Context/ProductsContext";
import CartContextProvider from "./Component/Context/CartContext";
import UsersContextProvider from "./Component/Context/UsersContext";
import { StoreContextProvider } from "./Component/Context/StoreContext";
ReactDOM.render(
  <HelmetProvider>
    <ProductsContextProvider>
      <UsersContextProvider>
        <CartContextProvider>
          <StoreContextProvider>
            <App />
          </StoreContextProvider>
        </CartContextProvider>
      </UsersContextProvider>
    </ProductsContextProvider>
  </HelmetProvider>,

  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems, products) => {
  Storage(cartItems);
  console.log("reducer ", products);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((sub, product) => {
      let productPrice=0;
      if (products) {
        productPrice = products.find((e) => e.sys.id === product.sys.id)
          .fields.price;
      }
      console.log("find price?", productPrice);
      console.log("find quantity?", product.quantity);
      console.log("sub?", sub);
      return sub + productPrice * product.quantity;
    }, 0)
    .toFixed(2);
  console.log("total?", total);

  console.log("total?", total);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.cartItems.find((item) => item.sys.id === action.payload.sys.id)
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
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};

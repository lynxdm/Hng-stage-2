const reducer = (state, action) => {
  const { cart } = state;
  const { type, payload } = action;

  if (type === "ADD_TO_CART") {
    let cartList;
    const { id } = payload;
    const oldItem = cart.find((item) => item.id === id) || null;

    if (!oldItem) {
      cartList = [...cart, { ...payload, quantity: 1 }];
      return { ...state, cart: cartList };
    } else {
      return { ...state };
    }
  }

  if (type === "INCREASE_QUANTITY") {
    let cartList = cart.map((item) => {
      if (item.id === payload) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    return { ...state, cart: cartList };
  }

  if (type === "DECREASE_QUANTITY") {
    let cartList = cart
      .map((item) => {
        if (item.id === payload) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter((item) => item !== null);

    return { ...state, cart: cartList };
  }

  if (type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
};

export default reducer;

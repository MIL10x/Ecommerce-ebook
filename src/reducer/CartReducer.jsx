export const CartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartlist: payload.products, total: payload.total };
    case "REMOVE_FROM_CART":
      return { ...state, cartlist: payload.products, total: payload.total };
    case "CLEAR_CART":
      return { ...state, cartlist: payload.products, total: payload.total };
    default:
      throw new "cart is empty"();
  }
};

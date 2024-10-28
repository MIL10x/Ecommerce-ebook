import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const InstialState = {
  cartlist: [],
  total: 0,
};
const CartContext = createContext(InstialState);

export const CartProvoider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, InstialState);

  function addCart(product) {
    const updatedcart = state.cartlist.concat(product);
    const updatetotal = state.total + product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedcart,
        total: updatetotal,
      },
    });
  }
  function removeCart(product) {
    const updatedcart = state.cartlist.filter((obj) => obj.id !== product.id);
    const updatetotal = state.total - product.price;
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedcart,
        total: updatetotal,
      },
    });
  }
  function ClearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }

  const value = {
    cartlist: state.cartlist,
    addCart,
    ClearCart,
    removeCart,
    total: state.total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const CartUse = () => {
  const context = useContext(CartContext);
  return context;
};

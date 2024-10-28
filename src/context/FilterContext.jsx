import { createContext, useContext, useReducer } from "react";
import { FilterReduce } from "../reducer";

const IntialState = {
  productList: [],
  sortby: null,
  Ratings: null,
  Best_seller: false,
  Instock: false,
};
const FilterContext = createContext(IntialState);

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReduce, IntialState);
  function intalize(product) {
    dispatch({
      type: "ProductList",
      payload: {
        products: product,
      },
    });
  }
  function Bestseller(product) {
    return state.Best_seller
      ? product.filter((item) => item.best_seller === true)
      : product;
  }
  function instck(product) {
    return state.Instock
      ? product.filter((item) => item.in_stock === true)
      : product;
  }
  function rating(product) {
    if (state.Ratings === "4above") {
      return product.filter((item) => item.rating >= 4);
    }
    if (state.Ratings === "3above") {
      return product.filter((item) => item.rating >= 3);
    }
    if (state.Ratings === "2above") {
      return product.filter((item) => item.rating >= 2);
    }
    if (state.Ratings === "1above") {
      return product.filter((item) => item.rating >= 1);
    }
    return product;
  }
  function sorrt(product) {
    if (state.sortby === "Lowtohigh") {
      return product.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.sortby === "hightolow") {
      return product.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return product;
  }
  const updatedfilterproduct = rating(
    instck(Bestseller(sorrt(state.productList)))
  );
  const value = {
    state,
    dispatch,
    productList: updatedfilterproduct,
    intalize,
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
export const usecart = () => {
  const context = useContext(FilterContext);
  return context;
};

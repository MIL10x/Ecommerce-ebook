export const FilterReduce = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ProductList":
      return { productList: payload.products };
    case "Ratings":
      return { ...state, Ratings: payload.rate };
    case "Sortby":
      return { ...state, sortby: payload.sorter };
    case "bestseller":
      return { ...state, Best_seller: payload.bstslr };
    case "Instock":
      return { ...state, Instock: payload.instk };
    case "CLearFilter":
      return {
        ...state,
        sortby: null,
        Ratings: null,
        Best_seller: false,
        Instock: false,
      };
    default:
      throw "its not working";
  }
};

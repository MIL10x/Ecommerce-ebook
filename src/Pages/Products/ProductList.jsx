import { useState, useEffect } from "react";
import { ProductCard } from "../../Components/index";
import { useLocation } from "react-router";
import usetitle from "../../hooks/usetitle";
import { usecart } from "../../context";
// import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const API_KEY = import.meta.env.VITE_REACT_APP_HOST;
  console.log(API_KEY);
  const { productList, intalize, state, dispatch } = usecart();
  const [open, setopen] = useState(false);
  const search = useLocation().search;
  // const[searchparams] = useSearchParams()
  const searchterm = new URLSearchParams(search).get("q");

  usetitle("productList");
  useEffect(() => {
    const filterProducts = (products, searchterm) => {
      if (searchterm) {
        const lowerCaseName = searchterm.toLowerCase();
        const filtered = products.filter((product) =>
          product.name.toLowerCase().includes(lowerCaseName)
        );
        return filtered;
      } else {
        return products;
      }
    };

    filterProducts();
    const inproduct = async () => {
      const response = await fetch(`${API_KEY}/products`);
      var data = await response.json();
      data = filterProducts(data, searchterm);
      intalize(data);
    };
    inproduct();
  }, [searchterm]);
  return (
    <div>
      <div className=" w-full h-5 flex justify-between items-center p-10 ">
        <p className="text-2xl">ALL Ebooks({productList.length})</p>
        <button
          className="flex gap-5 items-center"
          onClick={() => setopen(!open)}
        >
          <p className="text-2xl">Filter</p>
          <i className="bi bi-list text-gray-700 text-3xl"></i>
        </button>
      </div>
      <div className="container mx-auto flex gap-5 flex-wrap ">
        {productList.map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
      {open && (
        <div className="z-10 absolute hidden md:flex md:flex-col top-0 left-0 h-full bg-white w-[15%] transition-all transform duration-100">
          <div className="flex justify-between p-2 px-4 border-b-2">
            <p>FILTERS</p>
            <button onClick={() => setopen(false)}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="px-5 py-2">
            <p className="text-xl font-Pop">Sort by</p>
            <div className="p-2">
              <div className="flex gap-2 items-center">
                <input
                  onClick={() =>
                    dispatch({
                      type: "Sortby",
                      payload: { sorter: "Lowtohigh" },
                    })
                  }
                  type="radio"
                  name="price"
                  value="Lowtohigh"
                  id="p1"
                />
                <label htmlFor="p1">price - Low to High</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  onClick={() =>
                    dispatch({
                      type: "Sortby",
                      payload: { sorter: "hightolow" },
                    })
                  }
                  type="radio"
                  name="price"
                  value="hightolove"
                  id="p2"
                />
                <label htmlFor="p2">price - High to Low</label>
              </div>
            </div>
          </div>
          <div className="px-5 py-2">
            <p className="text-xl font-Pop">Rating</p>
            <div className="p-2">
              <div className="flex gap-2 items-center">
                <input
                  onClick={() =>
                    dispatch({ type: "Ratings", payload: { rate: "4above" } })
                  }
                  type="radio"
                  name="star"
                  value="4"
                  id="s1"
                />
                <label htmlFor="s1">4 Stars & above</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  onClick={() =>
                    dispatch({ type: "Ratings", payload: { rate: "3above" } })
                  }
                  type="radio"
                  name="star"
                  value="3"
                  id="s2"
                />
                <label htmlFor="s2">3 Stars & Above</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  onClick={() =>
                    dispatch({ type: "Ratings", payload: { rate: "2above" } })
                  }
                  type="radio"
                  name="star"
                  value="2"
                  id="s3"
                />
                <label htmlFor="s3">2 Stars & Above</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  onClick={() =>
                    dispatch({ type: "Ratings", payload: { rate: "1above" } })
                  }
                  type="radio"
                  name="star"
                  value="1"
                  id="s4"
                />
                <label htmlFor="s4">1 Stars & Above</label>
              </div>
            </div>
          </div>
          <div className="px-5 py-2">
            <p className="text-xl font-Pop">Other Filters</p>
            <div className="p-2">
              <div className="flex gap-2 items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "bestseller",
                      payload: { bstslr: !state.Best_seller },
                    })
                  }
                  checked={state.Best_seller || false}
                  type="checkbox"
                  name="best"
                  value="bestsell"
                  id="o1"
                />
                <label htmlFor="o1">Best Seller Only</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "Instock",
                      payload: { instk: !state.Instock },
                    })
                  }
                  checked={state.Instock || false}
                  type="checkbox"
                  name="Instock"
                  value="instock"
                  id="o2"
                />
                <label htmlFor="o2">INSTOCK Only</label>
              </div>
              <button
                onClick={() => dispatch({ type: "CLearFilter" })}
                className="p-2 font-Pop border-2 border-gray-500 rounded-xl mt-5 hover:border-none hover:bg-blue-500 hover:text-white duration-150"
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;

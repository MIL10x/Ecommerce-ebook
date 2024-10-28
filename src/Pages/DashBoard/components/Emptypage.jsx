import React from "react";
import { Link } from "react-router-dom";

const Emptypage = () => {
  return (
    <div className="flex flex-col gap-7 mt-10">
      <i className="bi bi-cart2 text-green-600 text-9xl"></i>
      <p className="text-xl">
        Oops! Your order dashboard looks empty! Add eBooks to your cart from our
        store collection.
      </p>
      <div className=" w-full flex justify-center">
        <Link
          to={"/productlist"}
          className="bg-blue-700 p-3 rounded-lg  text-white"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Emptypage;

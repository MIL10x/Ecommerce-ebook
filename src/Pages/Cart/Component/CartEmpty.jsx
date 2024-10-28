import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className=" w-96 h-auto border-2 border-gray-300 rounded-2xl p-5 mt-5 flex flex-col gap-5">
      <i className="bi bi-cart-check text-9xl text-red-500"></i>
      <p>Cart is empty,so kindly go to shoping zone,make some cart</p>
      <div className="w-full flex justify-center">
        <Link
          to={"/productlist"}
          className="bg-blue-500 p-3 rounded-xl font-semibold text-white"
        >
          Shop to click here
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;

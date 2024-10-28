import React from "react";
import { Link } from "react-router-dom";

const OrderFail = () => {
  return (
    <div>
      <i className="bi bi-x-circle text-8xl  text-red-600 "></i>
      <p className="text-xl pt-5">payment failed,please try again!</p>
      <div className="py-8">
        <p>your order is not confirmed.</p>
        <p>connet Bookshell@example.com for support</p>
      </div>
      <p className="pb-5">Payment ID : xyz_123456789</p>
      <Link
        to={"/productlist"}
        className="p-3 bg-red-600 text-white rounded-xl "
      >
        Check Cart Again
        <span>
          <i className="bi bi-cart text-white"></i>
        </span>
      </Link>
    </div>
  );
};

export default OrderFail;

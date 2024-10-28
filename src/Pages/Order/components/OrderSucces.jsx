import React from "react";
import { Link } from "react-router-dom";

const OrderSucces = ({ state }) => {
  return (
    <div>
      <i className="bi bi-check-all text-9xl text-green-600"></i>
      <p className="text-3xl">
        Thank you {state.data.user.name} for the order!
      </p>
      <p className="text-lg">Your orderId is {state.data.id}</p>
      <div className="py-5">
        <p>your order is confirmed.</p>
        <p>please check your mail({state.data.email}) for the eBook</p>
      </div>
      <p className="pb-5">Payment ID : xyz_123456789</p>
      <Link to={"/"} className="p-3 bg-green-600 text-white rounded-xl ">
        Continue Shopping
        <span>
          <i className="bi bi-cart text-white"></i>
        </span>
      </Link>
    </div>
  );
};

export default OrderSucces;

import React from "react";
import usetitle from "../../hooks/usetitle";
import OrderFail from "./components/OrderFail";
import OrderSucces from "./components/OrderSucces";
import { useLocation } from "react-router-dom";

const OrderPage = () => {
  const { state } = useLocation();

  usetitle("order-page");
  return (
    <div className=" container mx-auto h-auto w-[500px] border-2 rounded-2xl p-10 text-center">
      {state.status ? <OrderSucces state={state} /> : <OrderFail />}
    </div>
  );
};

export default OrderPage;

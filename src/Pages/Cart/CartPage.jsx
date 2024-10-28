import React, { useEffect } from "react";
import usetitle from "../../hooks/usetitle";
import CartEmpty from "./Component/CartEmpty";
import CartList from "./Component/CartList";
import { CartUse } from "../../context";

const CartPage = () => {
  const { cartlist, ClearCart } = CartUse();
  usetitle("Cart");

  useEffect(() => {
    ClearCart;
  }, [cartlist.length === 0]);

  return (
    <div className="container relative mx-auto w-full text-center flex flex-col justify-center items-center">
      <p className="text-3xl font-medium font-Pop">Cart</p>
      {cartlist.length ? <CartList /> : <CartEmpty />}
    </div>
  );
};

export default CartPage;

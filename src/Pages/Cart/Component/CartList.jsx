import CartCard from "./CartCard";
import { useState } from "react";
import { CartUse } from "../../../context";
import CheckPopup from "./CheckPopup";

const CartList = () => {
  const [openpopup, setopenpopup] = useState(false);
  const { cartlist, total } = CartUse();
  console.log(cartlist);

  return (
    <div className="p-5">
      <p className="text-2xl text-blue-500 underline font-Pop">Cart List</p>
      <div className="flex flex-col border-t-2 border-b-2 border-gray-500 rounded-xl w-full min-h-96 mt-5 p-5">
        {cartlist.map((obj, index) => (
          <CartCard product={obj} key={index} />
        ))}
      </div>
      <p className="text-lg font-Pop mt-5">Total:{total}</p>
      <button
        onClick={() => {
          setopenpopup(true);
        }}
        className="bg-blue-500 p-2 rounded-xl text-lg font-Pop mt-5 text-white"
      >
        Proceed to pay
      </button>
      <div>
        {openpopup && (
          <CheckPopup setopenpopup={setopenpopup} openpopup={openpopup} />
        )}
      </div>
    </div>
  );
};

export default CartList;

import React, { useEffect, useState } from "react";
import { CartUse } from "../../../context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckPopup = ({ setopenpopup, openpopup }) => {
  const API_KEY = import.meta.env.VITE_REACT_APP_HOST;
  const { total, cartlist, ClearCart } = CartUse();
  const email = JSON.parse(sessionStorage.getItem("email"));

  const handleChange = (e) => {
    const { name, value } = e.target;
  };
  const [userdetails, setuserdetails] = useState([]);
  const navigate = useNavigate();
  const handlecart = async (e) => {
    e.preventDefault();
    ClearCart();
    try {
      const cartdata = {
        cartdt: cartlist,
        total: total,
        email: email,
        quintity: cartlist.length,
        user: {
          name: e.target.Name.value,
          email: e.target.Email.value,
        },
      };
      const response = await fetch(`${API_KEY}/productload`, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(cartdata),
      });
      const data = await response.json();
      console.log(data);
      navigate("/Orderpage", { state: { status: true, data: data } });
    } catch (error) {
      navigate("/Orderpage", { state: { status: false } });
    }
  };

  useEffect(() => {
    const userdetail = async () => {
      const response = await fetch(`${API_KEY}/register`);
      if (!response.ok) {
        throw { message: response.status };
      }
      try {
        const userdetail = await response.json();
        const userrequire = userdetail.filter((obj) => obj.email === email);
        setuserdetails(userrequire);
      } catch (error) {
        toast.error(error.message);
      }
    };
    userdetail();
  }, [email]);

  return (
    <div className="absolute overflow-y-auto top-10 left-[38%] rounded-xl text-white h-auto w-96 p-5 bg-gray-500">
      <div className="flex flex-col gap-2 items-start">
        <div className="w-full flex justify-between">
          <p className="text-gray-900">Card Payment</p>
          <button onClick={() => setopenpopup(false)} className="text-white">
            X
          </button>
        </div>
        {userdetails.map((obj, index) => (
          <form key={index} className="p-4 md:p-5" onSubmit={handlecart}>
            <div className="grid gap-4 mb-4 grid-cols-2 text-start">
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor={`name-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="Name"
                  id={`name-${index}`}
                  value={obj.Name}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor={`cardnumber-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Card Number
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="cardnumber"
                  id={`cardnumber-${index}`}
                  value={openpopup ? "14000568932262" : ""}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor={`email-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="Email"
                  id={`email-${index}`}
                  value={obj.email}
                  className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor={`expirydate-${index}`}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Expiry Date
                </label>
                <div className="flex gap-5">
                  <input
                    onChange={handleChange}
                    type="number"
                    name="month"
                    id={`expiryMonth-${index}`}
                    value={openpopup ? "03" : ""}
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-32 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                  <input
                    type="number"
                    onChange={handleChange}
                    name="year"
                    id={`expiryYear-${index}`}
                    value={openpopup ? "26" : ""}
                    className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-32 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    required
                  />
                </div>
              </div>
              <p className="w-full text-center py-5 text-3xl font-pop text-gray-900">
                Total: {total}
              </p>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Pay
            </button>
          </form>
        ))}
      </div>
    </div>
  );
};

export default CheckPopup;

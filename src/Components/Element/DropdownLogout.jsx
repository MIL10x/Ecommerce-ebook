import React from "react";
import { Link } from "react-router-dom";

const DropdownLogout = () => {
  return (
    <div className="flex flex-col bg-blue-400 text-white  dark:text-white dark:bg-blue-950 justify-center absolute top-20 right-5 p-3 rounded-xl z-10">
      <Link
        to={"/productlist"}
        className="hover:bg-white hover:text-black hover:dark:bg-blue-800 hover:dark:text-white p-2 px-3 rounded-xl duration-75"
      >
        All eBooks
      </Link>
      <Link
        to={"/login"}
        className="hover:bg-white hover:text-black hover:dark:bg-blue-800 hover:dark:text-white p-2 px-3 rounded-xl duration-75"
      >
        Login
      </Link>
      <Link
        to={"/register"}
        className="hover:bg-white hover:text-black hover:dark:bg-blue-800 hover:dark:text-white p-2 px-3 rounded-xl duration-75"
      >
        Register
      </Link>
    </div>
  );
};

export default DropdownLogout;

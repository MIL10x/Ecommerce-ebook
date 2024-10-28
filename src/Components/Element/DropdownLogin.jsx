import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DropdownLogin = () => {
  const email = JSON.parse(sessionStorage.getItem("email"));
  const navigate = useNavigate();
  const name = short();
  function short() {
    if (email) {
      const [localPart] = email.split("@");
      if (localPart.length > 10) {
        const shortLocalPart = localPart.slice(0, 10) + "....";
        return `${shortLocalPart}`;
      }
      return email;
    }
  }
  const handlelogout = () => {
    sessionStorage.removeItem("email");
    navigate("/");
  };
  return (
    <div className="flex flex-col bg-blue-400 text-white  dark:text-white dark:bg-blue-950 justify-center absolute top-20 right-5 p-3 rounded-xl z-10">
      <p className="hover:bg-white hover:text-black hover:dark:bg-blue-800 hover:dark:text-white p-2 px-3 rounded-xl duration-75">
        {email ? name : ""}
      </p>
      <Link
        to={"/productlist"}
        className="hover:bg-white hover:text-black hover:dark:bg-blue-800 hover:dark:text-white p-2 px-3 rounded-xl duration-75"
      >
        All eBooks
      </Link>
      <Link
        to={"/dashboard"}
        className="hover:bg-white hover:text-black hover:dark:bg-blue-800 hover:dark:text-white p-2 px-3 rounded-xl duration-75"
      >
        Dashboard
      </Link>
      <div
        onClick={handlelogout}
        className="hover:bg-white hover:text-black hover:dark:bg-blue-800 hover:dark:text-white p-2 px-3 rounded-xl duration-75"
      >
        Logout
      </div>
    </div>
  );
};

export default DropdownLogin;

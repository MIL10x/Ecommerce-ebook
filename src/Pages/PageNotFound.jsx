import React from "react";
import pagenotfound from "../assets/PNF.png";
import { Link } from "react-router-dom";
import usetitle from "../hooks/usetitle";

const PageNotFound = () => {
  usetitle("page not found");
  return (
    <div className="text-center container mx-auto flex flex-col items-center gap-10 justify-center">
      <p className="text-5xl font-Pop mt-10">OOPS! Page Not Found</p>
      <img src={pagenotfound} className="size-[700px]" alt="" />
      <div>
        <Link
          to={"/"}
          className="bg-blue-500 p-5 text-white rounded-xl dark:bg-blue-900 "
        >
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

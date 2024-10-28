import React, { useState, useEffect } from "react";
import usetitle from "../../hooks/usetitle";
import Emptypage from "./components/Emptypage";
import DashBoardCard from "./components/DashBoardCard";

const Dashboard = () => {
  const API_KEY = import.meta.env.VITE_REACT_APP_HOST;
  usetitle("dashBoard");
  const [detail, setDetails] = useState([]);
  const [dashBoardCart, setDashBoardCart] = useState([]);

  useEffect(() => {
    const fetchCartDetails = async () => {
      const response = await fetch(`${API_KEY}/productload`);
      const data = await response.json();

      setDetails(data);

      const email = JSON.parse(sessionStorage.getItem("email"));
      const userCarts = data.filter((obj) => obj.email === email);
      const combinedCart = userCarts.flatMap((obj) => obj.cartdt);

      setDashBoardCart(combinedCart);
    };
    fetchCartDetails();
  }, []);

  return (
    <div className="container mx-auto text-center">
      <p className="text-2xl text-blue-500 underline">Dashboard</p>
      <div className="flex flex-col border-2 rounded-lg mt-10 p-5 w-full gap-5 justify-center items-center">
        {dashBoardCart.length ? (
          dashBoardCart.map((item, index) => (
            <DashBoardCard key={index} detail={item} />
          ))
        ) : (
          <Emptypage />
        )}
      </div>
    </div>
  );
};

export default Dashboard;

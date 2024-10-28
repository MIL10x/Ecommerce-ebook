import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Context, CartProvoider } from "./context/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollUp } from "./Components/index.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvoider>
        <Context>
          <ScrollUp />
          <ToastContainer position="bottom-center" closeButton={false} />
          <App />
        </Context>
      </CartProvoider>
    </BrowserRouter>
  </StrictMode>
);

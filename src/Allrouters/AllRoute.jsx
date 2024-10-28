import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  PageNotFound,
  ProductDetail,
  CartPage,
  HomePage,
  OrderPage,
  Dashboard,
  ProductList,
} from "../Pages/index";
const AllRoute = () => {
  return (
    <main className="min-h-[90vh] container mx-auto my-10 p-5">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/productlist/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/OrderPage" element={<OrderPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default AllRoute;

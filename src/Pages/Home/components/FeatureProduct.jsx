import { useEffect, useState } from "react";
import { ProductCard } from "../../../Components/index";
import { usecart } from "../../../context";
const FeatureProduct = () => {
  const API_KEY = import.meta.env.VITE_REACT_APP_HOST;
  const { productList, intalize } = usecart();
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const inproduct = async () => {
      const response = await fetch(`${API_KEY}/feature_Product`);
      const data = await response.json();
      intalize(data);
    };
    inproduct();
  }, []);
  return (
    <div className="flex flex-col gap-6 items-center m-12">
      <p className="text-3xl font-semibold">Feature Product</p>
      <div
        id={product.id}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        {productList.map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;

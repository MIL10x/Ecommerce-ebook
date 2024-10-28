import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Ratings from "./Products/component/Ratings";
import usetitle from "../hooks/usetitle";
const imageImports = import.meta.glob("../assets/edupic/*.jpg");
import { CartUse } from "../context";

const ProductDetail = () => {
  const API_KEY = import.meta.env.VITE_REACT_APP_HOST;
  const { addCart, cartlist, removeCart } = CartUse();
  const [change, setchange] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const param = useParams();
  const [product, setproduct] = useState({});
  const {
    id,
    name,
    poster,
    overview,
    price,
    best_seller,
    in_stock,
    rating,
    size,
  } = product;
  usetitle(name);
  useEffect(() => {
    const loadImage = async () => {
      const imagePath = `../assets/edupic/${poster}.jpg`;
      const imageImportFunction = imageImports[imagePath];
      if (imageImportFunction) {
        const imageModule = await imageImportFunction();
        setImageSrc(imageModule.default);
      }
    };
    loadImage();
  }, [poster]);
  useEffect(() => {
    const usfetch = async () => {
      const response = await fetch(`${API_KEY}/products/${param.id}`);
      const data = await response.json();
      setproduct(data);
    };
    usfetch();
  }, []);
  useEffect(() => {
    const incart = cartlist.find((item) => item.id === id);
    setchange(incart);
  }, [cartlist, id]);
  return (
    <div>
      <p className="text-center w-full text-2xl font-semibold">{name}</p>
      <div className="grid md:grid-cols-2 gap-5 container mx-auto p-5 mt-5">
        <img className="bg-black" src={imageSrc} alt="" />
        <div>
          <p className="text-4xl font-semibold">Price:{price}</p>
          <div className="flex gap-2 py-3">
            {best_seller && (
              <p className="bg-green-300 text-white text-xl p-2 rounded-2xl">
                best selling
              </p>
            )}
            {in_stock ? (
              <p className="bg-blue-400 text-white text-md p-2 rounded-2xl">
                in stock
              </p>
            ) : (
              <p className="bg-red-400 text-white text-md p-2 rounded-2xl">
                out of stock
              </p>
            )}
          </div>
          <p className="bg-green-100 text-green-500 text-center rounded-xl w-10">
            {size}MB
          </p>
          <Ratings key={id} ratings={rating} />
          <p className="text-justify">
            <span className="font-bold text-xl ">Overview: </span>
            {overview}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            harum maiores. Commodi aut quam doloribus ea magnam consequatur
            molestiae voluptas animi quaerat labore pariatur debitis placeat
            numquam, distinctio voluptatem porro ex reiciendis aperiam mollitia
            quae qui. Quam quo obcaecati nobis, cumque assumenda rem, deleniti
            odio ea eligendi ullam dicta voluptas?
          </p>
          {!change && (
            <button
              onClick={() => {
                addCart(product);
              }}
              className={`bg-blue-500 p-2 text-white rounded-lg mt-7 ${
                in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={in_stock ? "" : "disabled"}
              S
            >
              Add to Cart
            </button>
          )}
          {change && (
            <button
              onClick={() => removeCart(product)}
              className={`bg-red-500 p-2 text-white rounded-lg mt-7${
                in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={in_stock ? "" : "disabled"}
            >
              Remove from cart"
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Ratings from "../../Pages/Products/component/Ratings";
import { CartUse } from "../../context";
const imageImports = import.meta.glob("../../assets/edupic/*.jpg");

const ProductCard = ({ products }) => {
  const { id, name, overview, poster, price, best_seller, rating, in_stock } =
    products;
  console.log(in_stock);
  const [imageSrc, setImageSrc] = useState("");
  const [change, setchange] = useState(false);
  const { addCart, removeCart, cartlist } = CartUse();

  useEffect(() => {
    const loadImage = async () => {
      const imagePath = `../../assets/edupic/${poster}.jpg`;
      const imageImportFunction = imageImports[imagePath];
      if (imageImportFunction) {
        const imageModule = await imageImportFunction();
        setImageSrc(imageModule.default);
      }
    };

    loadImage();
  }, [poster]);
  useEffect(() => {
    const incart = cartlist.find((item) => item.id === id);
    setchange(incart);
  }, [cartlist, id]);
  return (
    <div className="h-auto w-80 flex flex-col gap-5 border-2  rounded-lg  justify-center">
      <div className="relative">
        <Link to={`/productlist/${id}`}>
          <img src={imageSrc} className="h-48 w-full rounded-t-lg" alt="" />
        </Link>
        {best_seller && (
          <p className="absolute top-3 left-3 bg-orange-500 text-white p-1 rounded-lg text-xs">
            best seller
          </p>
        )}
      </div>
      <div className="px-5 pb-5">
        <p className="text-2xl font-Pop font-semibold">{name}</p>
        <p>{overview}</p>
        <p className="text-xl font-bold py-2">Price:{price}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <Ratings ratings={rating} />
          </div>
          {!change && (
            <button
              onClick={() => addCart(products)}
              className={`bg-blue-500 p-2 text-white rounded-lg mt-7 ${
                in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={in_stock ? "" : "disabled"}
            >
              Add to Cart
            </button>
          )}
          {change && (
            <button
              onClick={() => removeCart(products)}
              className={`bg-red-500 p-2 text-white rounded-lg mt-7${
                in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={in_stock ? "" : "disabled"}
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

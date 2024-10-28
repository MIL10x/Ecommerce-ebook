import React from "react";
import { useState, useEffect } from "react";
const imageImports = import.meta.glob("../../../assets/edupic/*.jpg");
import { CartUse } from "../../../context";

const CartCard = ({ product }) => {
  const { removeCart } = CartUse();
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    const loadImage = async () => {
      const imagePath = `../../../assets/edupic/${product.poster}.jpg`;

      const imageImportFunction = imageImports[imagePath];
      if (imageImportFunction) {
        const imageModule = await imageImportFunction();
        setImageSrc(imageModule.default);
      }
    };

    loadImage();
  }, [product.poster]);
  return (
    <div className="grid grid-cols-2 bg-gray-300 rounded-xl h-20 px-3 w-[700px] m-3">
      <div className="flex gap-5 items-center ">
        <img src={imageSrc} className=" bg-black rounded-lg h-16 w-16" alt="" />
        <div className="flex flex-col items-start">
          <p className="font-Pop text-lg">{product.name}</p>
          <p className="font-Pop text-md">Price:${product.price}</p>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={() => removeCart(product)}
          className="bg-blue-500 p-2 h-10 font-Pop text-white rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CartCard;

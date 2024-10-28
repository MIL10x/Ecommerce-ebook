import React from "react";
import { useEffect, useState } from "react";
const imageImports = import.meta.glob("../../../assets/edupic/*.jpg");

const DashBoardCard = ({ detail }) => {
  const date = new Date();
  const [imageSrc, setImageSrc] = useState("");
  useEffect(() => {
    const loadImage = async () => {
      const imagePath = `../../../assets/edupic/${detail.poster}.jpg`;
      const imageImportFunction = imageImports[imagePath];
      if (imageImportFunction) {
        const imageModule = await imageImportFunction();
        setImageSrc(imageModule.default);
      }
    };

    loadImage();
  }, [detail.poster]);
  return (
    <div className="flex flex-col gap-10 flex-wrap w-full h-auto ">
      <div
        key={detail.id}
        className="w-full h-auto flex justify-between bg-slate-300 text-black  items-center gap-4 py-4 px-7 rounded-lg "
      >
        <div className="flex gap-5 items-center">
          <img
            src={imageSrc}
            className="h-36 w-36 rounded-lg bg-black "
            alt=""
          />
          <div className="text-start flex flex-col gap-2 ">
            <p className="text-2xl font-bold">{detail.name}</p>
            <p className="text-black w-80 text-justify">{detail.overview}</p>
            <p className="text-black w-80 text-justify text-xl">
              Price: {detail.price}
            </p>
          </div>
        </div>
        <div className="text-black ">
          <p className="flex gap-2">
            <span>{date.getDate()}</span>/<span>{date.getMonth()}</span>/
            <span>{date.getFullYear()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoardCard;

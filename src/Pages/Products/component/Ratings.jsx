import React from "react";

const Ratings = ({ ratings }) => {
  let ArrayRating = Array(5).fill(false);
  for (var i = 0; i < ratings; i++) {
    ArrayRating[i] = true;
  }
  return (
    <>
      {ArrayRating.map((value, index) =>
        value ? (
          <i key={index} className="bi bi-star-fill text-orange-400 "></i>
        ) : (
          <i key={index} className="bi bi-star text-orange-400 "></i>
        )
      )}
    </>
  );
};

export default Ratings;

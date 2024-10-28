import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Ensure correct import

const Search = ({ setsearch, search }) => {
  const navigate = useNavigate();
  const refer = useRef();

  // Updated function to receive event parameter
  const searchbutton = (event) => {
    event.preventDefault();
    const searchValue = refer.current ? refer.current.value : "";
    navigate(`/productlist?q=${searchValue}`);
    setsearch(!search);
  };

  return (
    <>
      <form onSubmit={searchbutton}>
        <div className="flex w-full bg-blue-500 dark:bg-slate-900 p-5 h-32 items-center gap-3 justify-center">
          {" "}
          <input
            className="w-[90%] h-12 rounded-xl px-5 outline-none text-black"
            type="text"
            name="searchvalue"
            placeholder="search..."
            ref={refer}
          />
          <button
            className="bg-slate-900 p-3 text-white rounded-2xl"
            type="submit" // Change button type to submit
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;

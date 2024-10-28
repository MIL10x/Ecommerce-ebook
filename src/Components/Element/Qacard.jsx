import React, { useState } from "react";

const Qacard = () => {
  const [open, setopen] = useState();
  return (
    <>
      <div className="border-b-2 w-full h-auto">
        <div className="flex justify-between p-5">
          <p>Why Should I use CodeBook?</p>
          <button onClick={() => setopen(!open)}>
            {open ? (
              <i className="bi bi-chevron-up"></i>
            ) : (
              <i className="bi bi-chevron-down"></i>
            )}
          </button>
        </div>
      </div>
      {open && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magni
          architecto quisquam nesciunt? Impedit ad mollitia sint amet deleniti
          molestiae.quisquam nesciunt? Impedit ad mollitia sint amet deleniti
          molestiae.
        </p>
      )}
    </>
  );
};

export default Qacard;

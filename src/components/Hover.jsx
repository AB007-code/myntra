import React from "react";

const Hover = ({ activeCategory }) => {
  if (!activeCategory) return null;
  return (
    <>
      <div className="flex border justify-center z-10 ">
        <div className="w-full border h-100 bg-white">{activeCategory}</div>
      </div>
    </>
  );
};

export default Hover;

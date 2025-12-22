import React from "react";

const Hover = ({ activeCategory }) => {
  //   if (!activeCategory) return null;
  console.log(activeCategory);
  return (
    <>
      <div className="flex justify-center z-0">
        <div className="w-full h-100 bg-white">{activeCategory}</div>
      </div>
    </>
  );
};

export default Hover;

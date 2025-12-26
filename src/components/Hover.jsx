import React from "react";

const Hover = ({ activeCategory }) => {
  //   if (!activeCategory) return null;
  //   console.log(activeCategory);
  return (
    <>
      <div className="flex justify-center z-0 ">
        <div className="w-full h-110 bg-white flex justify-between flex-wrap">
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
        </div>
      </div>
    </>
  );
};

export default Hover;

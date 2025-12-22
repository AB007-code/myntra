import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Hover from "./Hover";

const arr = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ", "STUDIO"];
const Navbar = () => {
  const [isTrue, setTrue] = useState(false);
  const [enter, isEnter] = useState(false);
  const [item, setItem] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const enterMouse = (str) => {
    isEnter(true);
    setItem(str);
    // console.log(activeCategory);
    setActiveCategory(str);
  };

  const leaveMouse = () => {
    isEnter(false);
    setItem("");
    // setActiveCategory("");
  };

  return (
    <>
      <div className="h-20">
        <div className="h-20 flex justify-center shadow-xl fixed w-full bg-white">
          <div className="lg:w-1/9 md:w-1/10 flex justify-center flex-wrap content-center">
            <img src={logo} className="lg:h-3/5 lg:w-2/4 md:h-3/5 md:w-3/5" />
          </div>
          <div className="lg:w-2/3 h-full flex md:w-2/5 relative">
            {arr.map((ele) => (
              <div
                onMouseEnter={() => enterMouse(ele)}
                onMouseLeave={() => leaveMouse()}
                key={ele}
                className="flex border cursor-pointer flex-wrap  content-center justify-center size-19 font-bold lg:text-sm md:text-xs text-gray-700"
              >
                {ele}

                <div
                  className={`fixed left-8/100 top-19.5 lg:h-100 lg:w-84/100 z-50 ${
                    enter && item == ele ? "visible" : "invisible"
                  }`}
                >
                  <Hover activeCategory={activeCategory} />
                </div>
              </div>
            ))}
          </div>
          <div className="lg:w-2/5 md:w-2/5 h-full px-2 grid place-items-center">
            <div
              className={`h-9 w-full border border-gray-400 rounded-2xl flex ${
                isTrue ? "bg-white" : "bg-gray-300"
              }`}
            >
              <div className=" h-full w-1/6 grid place-items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
              </div>
              <div className="w-5/6">
                <input
                  className="h-full w-full rounded-e-2xl text-sm outline-0"
                  placeholder="Search for products,brands and more"
                  onFocus={() => setTrue(true)}
                  onBlur={() => setTrue(false)}
                />
              </div>
            </div>
          </div>
          <div className="w-1/5 px-4 h-full grid grid-cols-3 lg:gap-5 md:gap-4 place-items-center">
            <div className="col-span-1">
              <div className="flex justify-center">
                <UserIcon className="lg:h-5 lg:w-5 md:h-4 md:w-4 text-gray-600" />
              </div>
              <div className="text-xs font-bold">Profile</div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center">
                <HeartIcon className="lg:h-5 lg:w-5 md:h-4 md:w-4 text-gray-600" />
              </div>
              <div className="text-xs font-bold">Wishlist</div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center">
                <ShoppingBagIcon className="lg:h-5 lg:w-5 md:h-4 md:w-4 text-gray-600" />
              </div>
              <div className="text-xs font-bold">Bag</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

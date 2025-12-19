import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const arr = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ", "STUDIO"];
const Navbar = () => {
  const [isTrue, setTrue] = useState(false);

  return (
    <>
      <div className="border-b h-20 flex justify-center">
        <div className="w-1/9 flex justify-center flex-wrap content-center">
          <img src={logo} className="h-3/5 w-2/4" />
        </div>
        <div className="w-2/3 h-full flex">
          {arr.map((ele) => (
            <div
              key={ele}
              className="flex flex-wrap content-center justify-center size-19 font-extrabold text-xs text-gray-700"
            >
              {ele}
            </div>
          ))}
        </div>
        <div className="w-2/5 h-full px-2 grid place-items-center">
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
        <div className="w-1/5 px-4 h-full grid grid-cols-3 gap-1 place-items-center">
          <div>
            <div className="flex justify-center">
              <UserIcon className="h-5 w-5 text-gray-600" />
            </div>
            <div className="text-xs font-bold">Profile</div>
          </div>
          <div>
            <div className="flex justify-center">
              <HeartIcon className="h-5 w-5 text-gray-600" />
            </div>
            <div className="text-xs font-bold">Wishlist</div>
          </div>
          <div>
            <div className="flex justify-center">
              <ShoppingBagIcon className="h-5 w-5 text-gray-600" />
            </div>
            <div className="text-xs font-bold">Bag</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

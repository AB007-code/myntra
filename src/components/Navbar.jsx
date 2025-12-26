import React, { useRef, useState } from "react";
import logo from "../assets/logo.png";
import "../App.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Hover from "./Hover";
import data from "../Data.json";

const arr = ["MEN", "WOMEN", "KIDS", "HOME", "BEAUTY", "GENZ", "STUDIO"];
const Navbar = () => {
  //   console.log(data);
  const [isTrue, setTrue] = useState(false);
  const [enter, isEnter] = useState(false);
  const [item, setItem] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [color, setColor] = useState("white");
  //   const [profile, setProfile] = useState(false);
  let timer = useRef(null);
  const enterMouse = (str) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setItem(str);
      for (let key in data) {
        if (key == str) {
          setActiveCategory(data[key]);
        }
      }

      if (str == "MEN") {
        setColor("#EE5F73");
      } else if (str == "WOMEN") {
        setColor("#FB56C1");
      } else if (str == "KIDS") {
        setColor("#F26A10");
      } else if (str == "BEAUTY") {
        setColor("#0DB7AF");
      } else if (str == "HOME") {
        setColor("#F2C210");
      } else if (str == "GENZ") {
        setColor("#0DB7AF");
      }
    }, 200);

    console.log(color);
    isEnter(true);
  };

  const leaveMouse = () => {
    isEnter(false);
    setColor("white");
    setItem("");
  };

  //   const enterProfileMouse = () => {
  //     setProfile(true);
  //   };
  //   const leaveProfileMouse = () => {
  //     setProfile(false);
  //   };
  return (
    <>
      <div className="h-20 relative">
        <div className="h-20 flex justify-center shadow-md fixed w-full bg-white">
          <div className="lg:w-1/9 md:w-1/10 flex justify-center flex-wrap content-center">
            <img src={logo} className="lg:h-3/5 lg:w-2/4 md:h-3/5 md:w-3/5" />
          </div>
          <div className="lg:w-2/3 h-full flex md:w-2/4 justify-between flex-wrap content-end-safe">
            {arr.map((ele) => (
              <div
                style={{
                  borderBottom:
                    enter && item === ele ? `3px solid ${color}` : "none",
                }}
                onMouseEnter={() => enterMouse(ele)}
                onMouseLeave={() => leaveMouse()}
                key={ele}
                className="cursor-pointer  lg:h-12 lg:w-1/7 md:w-1/7 px-1 md:h-12 flex justify-center font-bold lg:text-sm md:text-xs text-gray-700"
              >
                {ele}

                <div
                  className={`absolute left-8/100 top-20 lg:h-100 w-84/100 z-50 ${
                    enter && item == ele ? "visible" : "invisible"
                  }`}
                >
                  <Hover activeCategory={activeCategory} />
                </div>
              </div>
            ))}
            {enter && (
              <div className="absolute top-20 left-0 h-screen w-full z-0 bg-black/40 opacity-50"></div>
            )}
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
          <div className="w-1/5 px-4 h-full grid grid-cols-3 lg:gap-5 md:gap-4 place-items-center ">
            <div
              className="col-span-1 h-full content-center hoverCard"
              //   onMouseEnter={enterProfileMouse}
              //   onMouseLeave={leaveProfileMouse}
            >
              <div className="flex justify-center">
                <UserIcon className="lg:h-5 lg:w-5 md:h-4 md:w-4 text-gray-600" />
              </div>
              <div className="text-xs font-bold">Profile</div>
              {/* {profile &&  */}

              <div className="absolute top-19 bg-white lg:right-4 md:right-5 lg:w-[22%] md:w-[24%] h-110 z-70 shadow-lg hoverProfile">
                {
                  <div className="h-full">
                    <div className="flex justify-center">
                      <div className="border-t-4 border-amber-300 w-1/5 "></div>{" "}
                    </div>
                    <div className="h-full px-5 py-3">
                      <div className="h-full grid grid-rows-3">
                        <div className="col-span-full  flex flex-col flex-wrap content-start">
                          <p className="lg:text-[14px] md:text-[12px] text-[#3e4152] not-italic font-bold">
                            Welcome
                          </p>
                          <div>
                            <p className="text-[rgb(40, 44, 63)] lg:text-[14px] md:text-[11px] font-normal">
                              To access account and manage orders
                            </p>
                          </div>

                          <div>
                            <button className="border mb-6 mt-4 cursor-pointer border-gray-300 px-4 py-2 lg:text-sm md:text-xs text-[#FF3F6C] font-bold hover:border-red-500">
                              LOGIN / SIGNUP
                            </button>
                          </div>
                          <div className="w-full">
                            <hr className=" border-gray-300" />
                          </div>
                        </div>

                        <div className="col-span-full flex flex-col justify-between">
                          <div>
                            <ul className="text-[14px]">
                              <li className="hover:font-bold cursor-pointer">
                                Orders
                              </li>
                              <li className="hover:font-bold my-1 cursor-pointer">
                                Wishlist
                              </li>
                              <li className="hover:font-bold cursor-pointer">
                                Gift Cards
                              </li>
                              <li className="hover:font-bold my-1 cursor-pointer">
                                Contact Us
                              </li>
                              <li className="hover:font-bold cursor-pointer">
                                Myntra Insider
                              </li>
                            </ul>
                          </div>
                          <div>
                            <hr className=" border-gray-300" />
                          </div>
                        </div>

                        <div className="col-span-full mt-2">
                          <ul className="text-[14px]">
                            <li className="hover:font-bold cursor-pointer">
                              Myntra Credit
                            </li>
                            <li className="hover:font-bold  my-1 cursor-pointer">
                              Coupons
                            </li>
                            <li className="hover:font-bold cursor-pointer">
                              Saved Cards
                            </li>
                            <li className="hover:font-bold  my-1 cursor-pointer">
                              Saved VPA
                            </li>
                            <li className="hover:font-bold cursor-pointer">
                              Saved Addresses
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>

              {/* } */}
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

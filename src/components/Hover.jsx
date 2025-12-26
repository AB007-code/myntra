import React from "react";

const Card = ({ str }) => {
  switch (str.name) {
    case "MEN":
      return (
        <div className="w-full lg:h-110 md:h-110 bg-white flex justify-between flex-wrap">
          <div className="w-1/5 px-6 pt-2 mb-3 flex flex-col justify-start flex-wrap">
            <div>
              <div className="text-[#EE5F73] mb-1">Topwear</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str.Topwear).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>
            <div className="w-[80%] cursor-auto flex flex-col justify-center h-4">
              <hr className="border-gray-300" />
            </div>

            <div>
              <div className="text-[#EE5F73] mb-1">Indian & Festive Wear</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str["Indian & Festive Wear"]).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="w-1/5 bg-[#FBFBFB] px-6 pt-2 flex flex-col justify-start">
            <div>
              <div className="text-[#EE5F73] mb-1">Bottomwear</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str.Bottomwear).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>

            <div className="w-[80%] cursor-auto flex flex-col justify-center h-4">
              <hr className="border-gray-300" />
            </div>

            <div>
              <div className="text-[#EE5F73] mb-1">Innerwear & Sleepwear</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str["Innerwear & Sleepwear"]).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>

            <div className="w-[80%] cursor-auto flex flex-col justify-center h-4">
              <hr className="border-gray-300" />
            </div>

            <div>
              <div className="text-[#EE5F73] mb-1">Plus Size</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str["Plus Size"]).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Footwear */}
          <div className="w-1/5 px-6 pt-2 mb-3 flex flex-col justify-start">
            <div>
              <div className="text-[#EE5F73] mb-1">Footwear</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str.Footwear).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>

            <div className="w-[80%] cursor-auto flex flex-col justify-center h-4">
              <hr className="border-gray-300" />
            </div>

            <div>
              <div className="text-[#EE5F73] mb-1">
                Personal Care & Grooming
              </div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str["Personal Care & Grooming"]).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>

            <div className="w-[80%] cursor-auto flex flex-col justify-center h-4">
              <hr className="border-gray-300" />
            </div>

            <div>
              <div className="text-[#EE5F73] mb-2">Sunglasses & Frames</div>
            </div>

            <div className="w-[80%] cursor-auto flex flex-col justify-center h-4">
              <hr className="border-gray-300" />
            </div>

            <div>
              <div className="text-[#EE5F73] mb-2">Watches</div>
            </div>
          </div>

          {/*Sports & Active Wear */}
          <div className="w-1/5 bg-[#FBFBFB] px-6 pt-2  flex flex-col flex-wrap justify-start">
            <div>
              <div className="text-[#EE5F73] mb-2">Sports & Active Wear</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str["Sports & Active Wear"]).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>

            <div className="w-[80%] cursor-auto flex flex-col justify-center h-4">
              <hr className="border-gray-300" />
            </div>

            <div>
              <div className="text-[#EE5F73] mb-2">Gadgets</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str["Gadgets"]).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>
          </div>

          <div className="w-1/5 px-6 pt-2 mb-3 flex flex-col justify-start">
            <div>
              <div className="text-[#EE5F73] mb-1">Fashion Accessories</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str.Accessories).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>
            <div className="w-[80%] cursor-auto flex flex-col justify-center h-4">
              <hr className="border-gray-300" />
            </div>

            <div>
              <div className="text-[#EE5F73] mb-1">Bags & Luggage</div>
              <ul className="m-0 text-sm font-light">
                {Object.keys(str["Bags & Luggage"]).map((ele, i) =>
                  i % 2 == 0 ? (
                    <li className="text-black hover:font-bold">{ele}</li>
                  ) : (
                    <li className="text-black my-1 hover:font-bold">{ele}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      );
    case "WOMEN":
      return (
        <div className="w-full h-110 bg-white flex justify-between flex-wrap">
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
        </div>
      );

    case "KIDS":
      return (
        <div className="w-full h-110 bg-white flex justify-between flex-wrap">
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
        </div>
      );
    case "HOME":
      return (
        <div className="w-full h-110 bg-white flex justify-between flex-wrap">
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
        </div>
      );

    case "BEAUTY":
      return (
        <div className="w-full h-110 bg-white flex justify-between flex-wrap">
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
        </div>
      );
    case "STUDIO":
      return (
        <div className="w-full h-110 bg-white flex justify-between flex-wrap">
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
        </div>
      );
    case "GENZ":
      return (
        <div className="w-full h-110 bg-white flex justify-between flex-wrap">
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
          <div className="border w-1/5 bg-[#FBFBFB]"></div>
          <div className="border w-1/5"></div>
        </div>
      );
    default:
      return "";
  }
};

const Hover = ({ activeCategory }) => {
  console.log(activeCategory);
  return (
    <>
      <div className="flex justify-center z-0 md:touch-auto md:overflow-auto md:h-full lg:h-110">
        <div className="w-full lg:h-110 md:h-110 bg-white flex justify-between flex-wrap content-start">
          <Card str={activeCategory} />
        </div>
      </div>
    </>
  );
};

export default Hover;

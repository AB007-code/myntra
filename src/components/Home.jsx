// import React, { useRef, useState } from "react";

// const Home = () => {
//   const [value, setValue] = useState(null);
//   const [debounce, setDebounce] = useState(0);
//   const [val, setVal] = useState("");
//   const [throt, setThrot] = useState(0);
//   let mouseTimer = useRef(null);
//   let inputTimer = useRef(null);
//   let throttleTime = useRef(0);

//   function throttle(cb, delay) {
//     let now = Date.now();
//     if (now - throttleTime.current >= delay) {
//       throttleTime.current = now;
//       cb();
//     }
//   }

//   function debounc(cb, delay, timer) {
//     console.log(timer);
//     if (timer.current) {
//       clearTimeout(timer.current);
//     }
//     timer.current = setTimeout(() => {
//       cb();
//     }, delay);
//   }

//   const mouseHandel = () => {
//     setValue((prev) => prev + 1);
//     debounc(
//       () => {
//         setDebounce((prev) => prev + 1);
//       },
//       200,
//       mouseTimer
//     );
//     throttle(() => {
//       setThrot((prev) => prev + 1);
//     }, 2000);
//     console.log(val);
//   };

//   const clickHandel = (e) => {
//     debounc(
//       () => {
//         setVal(e.target.value);
//         console.log(val);
//       },
//       500,
//       inputTimer
//     );
//   };
//   return (
//     <>
//       <div className="border h-screen" onMouseMove={mouseHandel}>
//         Home
//         {<div>{value}</div>}
//         {<div>Throttle Value:-{throt}</div>}
//         {
//           <div className="border">
//             {debounce} <input onChange={clickHandel} className="border" />
//             <div>Debouncing Value:-{val}</div>
//           </div>
//         }
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import banner from "../assets/banner.png";
import logo from "../assets/logo.png";
const Home = () => {
  console.log(banner);
  return (
    <>
      <div className="h-400 z-80">
        <div>
          <div
            className="w-full h-[220px] bg-no-repeat bg-fit bg-center flex items-center justify-around flex-wrap content-center"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <h1 className="text-[60px]  font-bold">Flat 300/- OFF</h1>
            <div className="h-30 flex flex-col justify-center">
              <div className="text-[25px] font-semibold">
                On Your 1<span className="text-[14px]">st</span> Purchase
              </div>
              <div className="flex justify-center flex-wrap content-center">
                <div className="flex flex-col justify-center text-[25px] font-semibold">
                  Via
                </div>
                <div className="mx-2">
                  <div className="flex justify-center ">
                    <img src={logo} className="h-9 w-9 object-fit " />
                  </div>
                  <div className="text-xs m-0 font-semibold">Myntra</div>
                </div>{" "}
                <div className="flex flex-col justify-center text-[25px] font-semibold">
                  {" "}
                  App!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

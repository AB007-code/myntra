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

const Home = () => {
  return (
    <>
      <div className="h-400 z-80">Home</div>
    </>
  );
};

export default Home;

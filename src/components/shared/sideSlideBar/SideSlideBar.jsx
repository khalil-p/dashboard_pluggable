import React from "react";
import DropDown from "../dropDown/DropDown.jsx";
function SideSlideBar({ right }) {
  return (
    <div
      className=" flex flex-col justify-between absolute transition-all bg-[#eff3f6] overflow-scroll overflow-y-auto overflow-x-hidden px-4 py-4 top-[40px] z-50 h-[500px] shadow-2xl"
      style={{ right: `${right}px` }}
    >
      <div>
        <DropDown />
        </div>
        <div className="w-full bg-sky-100 p-3 rounded-lg font-semibold text-[#4e4b4b] hover:text-[#5879e6]">
          <button className="w-full">Apply</button>
        </div>
     
    </div>
  );
}

export default SideSlideBar;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import PolicyNavBar from "./PolicyNavBar";
import StatusInfoNav from "./StatusInfoNav.jsx";
import Path from "../../shared/Path.jsx";
import DatePickerCalendar from "../../shared/datePickerCalendar/DatePickerCalendar.jsx";
import CascadingDropDown from "../../shared/cascadingDropdown/CascadingDropDown.jsx";
import { BsFilterLeft } from "react-icons/bs";
import SideSlideBar from "../../shared/sideSlideBar/SideSlideBar.jsx";
function PolicyProposalStatus() {
  const [sideBarMargin, setSideBarMargin] = useState(-400);
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const handleSiderBar = () => {
    if(!sideBarOpen) {
      setSideBarMargin(-5)
      setSideBarOpen(true)
    }else if(sideBarOpen) {
      setSideBarMargin(-400)
      setSideBarOpen(false)
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <Path />
      <div
        className="bg-white p-4 border border-extraLightGray
        text-subHeading rounded-md flex flex-col justify-between gap-2 items-start"
      >
        <div className="flex gap-2 w-full justify-between relative">
          <h1 className="font-semibold text-[#7a7070] ">
            Policy Insurance (NOP/premium)
          </h1>
          <div className="text-sm justify-end flex items-center gap-4">
            <DatePickerCalendar />
            <button
              class="cursor-pointer p-1.5 rounded-xl hover:bg-slate-100 border border-gray text-[#5879e6]"
              onClick={handleSiderBar}
            >
              <BsFilterLeft size={20} />
            </button>
            <SideSlideBar right={sideBarMargin} />
          </div>
        </div>
        <div className="flex gap-4">
          <PolicyNavBar />
          <CascadingDropDown />
        </div>
      </div>
      <StatusInfoNav />
      <Outlet />
    </div>
  );
}

export default PolicyProposalStatus;

import React from "react";
import { Outlet } from "react-router-dom";
import PolicyNavBar from "./PolicyNavBar";
import StatusInfoNav from "./StatusInfoNav.jsx";
import Path from "../../shared/Path.jsx";
import DatePickerCalendar from "../../shared/datePickerCalendar/DatePickerCalendar.jsx";
import CascadingDropDown from "../../shared/cascadingDropdown/CascadingDropDown.jsx";
import { BsFilterLeft } from "react-icons/bs";
function PolicyProposalStatus() {
  return (
    <div className="flex flex-col gap-2">
      <Path />
      <div
        className="bg-white p-4 border border-extraLightGray
        text-subHeading rounded-md flex flex-col justify-between gap-2 items-start"
      >
        <div className="flex gap-2 w-full justify-between">
          <h1 className="font-semibold text-[#7a7070] ">
            Policy Insurance (NOP/premium)
          </h1>
          <div className="text-sm justify-end flex items-center gap-4">
            <DatePickerCalendar />
            <button class="cursor-pointer p-1.5 rounded-xl hover:bg-slate-100 border border-gray text-[#5879e6]">
              <BsFilterLeft size={20} />
            </button>
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

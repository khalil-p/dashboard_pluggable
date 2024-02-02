import React from "react";
import { Outlet } from "react-router-dom";
import PolicyNavBar from "./PolicyNavBar";
import StatusInfoNav from "./StatusInfoNav.jsx";
import Path from "../../shared/Path.jsx";
import DatePickerCalendar from "../../shared/datePickerCalendar/DatePickerCalendar.jsx";
function PolicyProposalStatus() {
  return (
    <div className="flex flex-col gap-2">
      <Path />
      <div
        className="bg-white p-4 border border-extraLightGray
        text-subHeading rounded-md flex justify-between gap-4 items-start"
      >
        <h1 className="font-semibold text-[#7a7070]">
          Policy Insurance (NOP/premium)
        </h1>
        <div className="text-sm justify-end flex items-center">
          <DatePickerCalendar />
        </div>
      </div>
      <PolicyNavBar />
      <StatusInfoNav />
      <Outlet />
    </div>
  );
}

export default PolicyProposalStatus;

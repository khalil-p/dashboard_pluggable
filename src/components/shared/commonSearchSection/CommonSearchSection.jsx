import React, { useState } from "react";
import ContentHeading from "../contentHeading/ContentHeading";
import DatePickerCalendar from "../datePickerCalendar/DatePickerCalendar";
import { BsFilterLeft } from "react-icons/bs";
import SideSlideBar from "../sideSlideBar/SideSlideBar";

function CommonSearchSection({ contentHeading }) {
  const [sideBarMargin, setSideBarMargin] = useState(-400);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const handleSiderBar = () => {
    if (!sideBarOpen) {
      setSideBarMargin(-5);
      setSideBarOpen(true);
    } else if (sideBarOpen) {
      setSideBarMargin(-400);
      setSideBarOpen(false);
    }
  };
  return (
    <>
      <div className="flex gap-2 w-full justify-between relative">
        <ContentHeading contentHeading={contentHeading} />
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
    </>
  );
}

export default CommonSearchSection;

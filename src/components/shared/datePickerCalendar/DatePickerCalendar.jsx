import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import './datePickerCustomStyle.css'
const DatePickerCalendar = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="w-max flex gap-1 items-center">
      {/* <span className="text-sm font-medium text-body dark:text-gray px-[0.7px]">
        Select Date Range :
      </span> */}
      <div className="w-[15rem]" >
        <Datepicker
          separator={" To "}
          //   primaryColor={"fuchsia"}
          value={value}
          onChange={handleValueChange}
          showShortcuts={true}
          //   inputClassName= "focus:outline-none py-2.5 pl-4 pr-14"
          inputClassName="w-full py-1.5 pl-4 focus:outline-none rounded-md focus:ring-0 font-normal dark:bg-green-900 dark:placeholder:text-green-100 border-gray-300 border"
          // containerClassName="relative mt-8"
          // popoverDirection="up"
          // minDate={new Date("2023-01-05")}
          // maxDate={new Date("2023-01-30")}
        />
      </div>
    </div>
  );
};
export default DatePickerCalendar;

import React from "react";
import { CiSearch } from "react-icons/ci";
function SearchInputBox({
  placeholder,
  height,
  width,
  iconFontSize,
  Value,
  onchange,
  setFiltering
}) {
  return (
    <>
      <div className="relative">
        <CiSearch
          fontSize={iconFontSize}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder={placeholder}
          className={`text-sm focus:outline-none active:outline-none h-${height} w-[${width}rem] border-gray-300 border rounded-lg px-3 pl-10`}
          value={Value}
          onChange={(e)=>setFiltering(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchInputBox;

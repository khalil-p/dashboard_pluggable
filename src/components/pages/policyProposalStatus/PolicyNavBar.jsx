import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { policiesOf } from "./policiesOf.jsx";
import Select from "react-select";
import { useLocation } from "react-router-dom";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    width: "11rem",
    maxWidth: "11rem",
    border: "none",
    //   borderColor: '#9e9e9e',
    minHeight: "30px",
    height: "30px",
    //   boxShadow: state.isFocused ? null : null,
    fontSize: "0.85rem",
    outline: 0, // Removes the blue outlin
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "30px",
  }),
  menu: (provided) => ({
    ...provided,
    padding: "5px", // Adjust padding as needed
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "12px", // Adjust font size as needed
  }),
};
function PolicyNavBar() {
    const path = useLocation();
    console.log("Current Location..",path);
  const [defaultValue, setDefaultValue] = useState(null);
  const navigate = useNavigate();
  const options = policiesOf.map((item) => ({
    value: item.path,
    label: (
      <div className="flex items-center gap-2">
        <img className="w-5" alt={item.name} src={item.img} />
        <span>{item.name}</span>
      </div>
    ),
  }));

  const onhandleChange = (selectedOption) => {
    navigate(selectedOption.value);
  };
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm ml-1 font-semibold">Select Policy Type :</p>
      <div>
        <Select
          maxMenuHeight={100}
          className="border border-gray-300 rounded-md"
          styles={customStyles}
          options={options}
          onChange={onhandleChange}
          defaultValue={options.map((i,index)=>{
            console.log("default value in select",i.value);
                if(path.pathname.includes(i.value)) {
                    console.log(i);
                    return i;
                }
          })}
          placeholder="Select Policy Type"
        />
      </div>
    </div>
  );
}

export default PolicyNavBar;

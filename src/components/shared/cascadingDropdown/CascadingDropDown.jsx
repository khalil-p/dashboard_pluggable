import React, { useEffect, useState } from "react";
import Select from "react-select";
import HorizontalScroll from "../horizontalScroll/HorizontalScroll";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    border: "none",
    width: "10rem",
    maxWidth: "10rem",
    minHeight: "30px",
    height: "30px",
    fontSize: "0.85rem",
    outline: 0, // Removes the blue outlin
    zIndex:1000,
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
    padding: "5px",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "12px",
  }),
};

const countries = [
  { id: "1", name: "INDIA" },
  { id: "2", name: "USA" },
];

const states = [
  { id: "1", countryId: "1", name: "Maharashtra" },
  { id: "2", countryId: "1", name: "Uttar Pradesh" },
  { id: "3", countryId: "2", name: "Texas" },
  { id: "4", countryId: "2", name: "California" },
];

function CascadingDropDown() {
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);
  useEffect(() => {
    // Set countryOptions inside the useEffect
    setCountryOptions(
      countries.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    );
  }, []);

  const handleCountry = (id) => {
    console.log("id", id);
    // setStateOptions (states.filter((x) => x.countryId === id.value))
    const dt = states.filter((x) => x.countryId === id.value);
    setStateOptions(dt.map((item) => ({ value: item.name, label: item.name })));
    // console.log("dt",dt);
    // setStateOptions(dt);
    console.log(stateOptions);
    console.log(countryOptions);
  };
  return (
    // <div className="border border-extraLightGray p-2 rounded-lg bg-[#fff]">

    <div className="flex flex-col gap-1">
      <p className="text-sm ml-1 font-semibold">Employee :</p>
      <div
        className="flex gap-2"
        style={{ maxWidth: "calc(100vw - 540px)" }}
      >
        {console.log("sdfsdf", stateOptions)}
        <HorizontalScroll>
          <Select
            id="ddlCountries"
            maxMenuHeight={100}
            className="border border-gray-300 rounded-md"
            styles={customStyles}
            options={countryOptions} // Use countryOptions here
            placeholder="Select Country"
            onChange={handleCountry}
          />
          <Select
            id="ddlStates"
            maxMenuHeight={100}
            className="border border-gray-300 rounded-md"
            styles={customStyles}
            options={stateOptions} // Use countryOptions here
            placeholder="Select State"
          />
          <Select
            id="ddlStates"
            maxMenuHeight={100}
            className="border border-gray-300 rounded-md"
            styles={customStyles}
            options={stateOptions} // Use countryOptions here
            placeholder="Select State"
          />
          <Select
            id="ddlStates"
            maxMenuHeight={100}
            className="border border-gray-300 rounded-md"
            styles={customStyles}
            options={stateOptions} // Use countryOptions here
            placeholder="Select State"
          />
          <Select
            id="ddlStates"
            maxMenuHeight={100}
            className="border border-gray-300 rounded-md"
            styles={customStyles}
            options={stateOptions} // Use countryOptions here
            placeholder="Select State"
          />
        </HorizontalScroll>
      </div>
    </div>
  );
}

export default CascadingDropDown;

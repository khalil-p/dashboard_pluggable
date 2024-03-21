import React from "react";
import Background from "../../../shared/background/Background";
import BackgroundParentDiv from "../../../shared/BackgroundParentDiv";
import CommonSearchSection from "../../../shared/commonSearchSection/CommonSearchSection";
import Path from "../../../shared/Path";
import CascadingDropDown from "../../../shared/cascadingDropdown/CascadingDropDown";
import MainTable from "../../../shared/mainTable/MainTable";
function CarVehicleInspection() {
  const contentHeading = "Car Inspection Status";
  return (
    <BackgroundParentDiv>
      <Path path={contentHeading} />
      <Background>
        <CommonSearchSection contentHeading={contentHeading} />
        <CascadingDropDown />
      </Background>
      <MainTable/>
    </BackgroundParentDiv>
  );
}

export default CarVehicleInspection;

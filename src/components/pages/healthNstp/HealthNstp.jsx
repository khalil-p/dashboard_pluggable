import React from "react";
import Background from "../../shared/background/Background";
import BackgroundParentDiv from "../../shared/BackgroundParentDiv";
import CommonSearchSection from "../../shared/commonSearchSection/CommonSearchSection";
import Path from "../../shared/Path";
import CascadingDropDown from "../../shared/cascadingDropdown/CascadingDropDown";
import MainTable from "../../shared/mainTable/MainTable";
function HealthNstp() {
  const contentHeading = "Health NSTP Cases Status";
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

export default HealthNstp;

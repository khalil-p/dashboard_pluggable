import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import PolicyNavBar from "./PolicyNavBar";
import StatusInfoNav from "./StatusInfoNav.jsx";
import Path from "../../shared/Path.jsx";
import CascadingDropDown from "../../shared/cascadingDropdown/CascadingDropDown.jsx";
import Background from "../../shared/background/Background.jsx";
import BackgroundParentDiv from "../../shared/BackgroundParentDiv.jsx";
import CommonSearchSection from "../../shared/commonSearchSection/CommonSearchSection.jsx";
function PolicyProposalStatus() {
  const contentHeading = "Policy Insurance (NOP/premium)";
  return (
    <BackgroundParentDiv>
      <Path path={contentHeading} />
      <Background>
        <CommonSearchSection contentHeading={contentHeading}/>
        <div className="flex gap-4">
          <PolicyNavBar />
          <CascadingDropDown />
        </div>
      </Background>
      <StatusInfoNav />
      <Outlet />
    </BackgroundParentDiv>
  );
}

export default PolicyProposalStatus;

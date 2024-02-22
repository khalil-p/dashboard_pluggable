import React, {useContext } from "react";
import { statusInfo } from "./statusInfo.js";
import { useLocation } from "react-router-dom";
import HorizontalScroll from "../../shared/horizontalScroll/HorizontalScroll.jsx";
import { commonConetxt} from "../../../lib/contexts/sharedContexts.js";
function StatusInfoNav() {
  const { pathname } = useLocation();
  const {currentStatusInfo, setCurrentStatusInfo} = useContext(commonConetxt)
  return (
      <HorizontalScroll>
        {statusInfo.map((item) => {
          return (
            pathname.includes(item.statusOf) &&
            item.info.map((infoItem) => {
              return (
                <div
                  className="flex flex-row gap-2 border-[0.5px] border-slate-300 rounded-xl p-2 bg-[#fff] text-sm cursor-pointer"
                  key={infoItem.info}
                  onClick={() => setCurrentStatusInfo(infoItem.info)}
                >
                  <p className="w-max">{infoItem.info}</p>
                  <span>{infoItem.count}</span>
                </div>
              );
            })
          );
        })}
      </HorizontalScroll>
  );
}

export default StatusInfoNav;

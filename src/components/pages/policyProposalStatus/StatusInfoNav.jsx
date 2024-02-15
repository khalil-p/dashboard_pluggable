import React from "react";
import { statusInfo } from "./statusInfo.js";
import { useLocation } from "react-router-dom";
import HorizontalScroll from "../../shared/horizontalScroll/HorizontalScroll.jsx";

function StatusInfoNav() {
  const { pathname } = useLocation();

  return (
    <HorizontalScroll>
      {statusInfo.map((item) => {
        return (
          pathname.includes(item.statusOf) &&
          item.info.map((infoItem) => {
            return (
              <div
                className="flex flex-row gap-2 border-[0.5px] border-slate-300 rounded-xl p-2 bg-[#fff] text-sm"
                key={infoItem.info}
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

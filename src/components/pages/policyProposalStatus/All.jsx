import React, { useContext, useEffect, useState } from "react";
import MainTable from "./MainTable";
import { statusInfo } from "./statusInfo.js";
import { commonConetxt } from "../../../lib/contexts/sharedContexts.js";
function All() {
  const [allTableColumn, setAllTableColumn] = useState([]);
  const [allMainTableColumn, setAllMainTableColumn] = useState([]);
  const { currentStatusInfo, setCurrentStatusInfo,tableData, setTableData } = useContext(commonConetxt);
  useEffect(() => {
    statusInfo.forEach((i) => {
      if (i.statusOf === "all") {
        // setAllTableColumn(i.info[0].tableColumn);
        i.info.forEach(async(i) => {
          if (i.info === currentStatusInfo) {
            setAllTableColumn(i.tableColumn);
            console.log("i.tableData ....",i.tableData);
          await  setTableData(i.tableData)
          }
        });
      }
    });
  }, [currentStatusInfo]);
  useEffect(() => {
    const a = [];
    allTableColumn.forEach((i) => {
      a.push({
        header: i,
        accessorKey: i.toLowerCase().replace(/ /g, "_"),
        footer: i,
      });
    });
    setAllMainTableColumn(a);
    {
      console.log("currentStatusInfo :", currentStatusInfo);
    }
  }, [allTableColumn, currentStatusInfo]);
  return (
    <>
      {console.log("from all component", allTableColumn)}

      {console.log("AAAA from all component", allMainTableColumn)}
      {console.log("Table data from All....",tableData)}
      {console.log("Table data length from All....",tableData.length)}
      <MainTable columns={allMainTableColumn} dashboardData={tableData}/>
    </>
  );
}

export default All;

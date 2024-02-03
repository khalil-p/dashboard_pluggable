import React from "react";
import { FiDownload } from "react-icons/fi";
import * as XLSX from "xlsx/xlsx.mjs";
function DownloadButton({data = [],fileName}) {
  return (
    <button
      onClick={() => {
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xls` : "data.xlsx");
      }}
      className="cursor-pointer p-2 rounded-xl hover:bg-slate-100 border border-gray text-[#5879e6]"
    >
      <FiDownload />
    </button>
  );
}

export default DownloadButton;

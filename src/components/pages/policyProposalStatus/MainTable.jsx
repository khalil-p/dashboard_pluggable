import React, {useMemo, useState, useContext } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { TiArrowUnsorted } from "react-icons/ti";
import { BiLastPage } from "react-icons/bi";
import { BiFirstPage } from "react-icons/bi";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import mData from "./accets/MOCK_DATA.json";
import SearchInputBox from "../../shared/searchInput/SearchInputBox";
import DownloadButton from "../../shared/buttons/DownloadButton";
import { sideBarContext } from "../../../lib/contexts/sideBarContext";
import { zoomContext } from "../../../lib/contexts/commonContexts";
import ZoomButton from "../../shared/buttons/ZoomButton";
import Table from "./Table";

function MainTable() {
  const {isZoomed,setIsZoomed} = useContext(zoomContext)
    const {expanded} = useContext(sideBarContext)
    const data = useMemo(() => mData, []);
    const columns = [
      {
        header: "ID",
        accessorKey: "id",
        footer: "ID",
      },
      {
        header: "Trace ID",
        accessorKey: "trace_id",
        footer: "Trace ID",
      },
      {
        header: "Section",
        accessorKey: "section",
        footer: "section",
      },
      {
        header: "Customer Name",
        accessorKey: "customer_name",
        footer: "Customer Name",
      },
      {
        header: "Mobile No.",
        accessorKey: "mobile_no",
        footer: "section",
      },
      {
        header: "Email",
        accessorKey: "email",
        footer: "Email",
      },
      {
        header: "Updated At",
        accessorKey: "updated_at",
        footer: "Updated At",
      },
      {
        header: "Action",
        accessorKey: "action",
        footer: "Action",
      },
    ];
  
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting: sorting,
        globalFilter: filtering,
      },
      onSortingChange: setSorting,
      onColumnFiltersChange: setFiltering,
    });
  return (
    <div className="p-4 bg-[#fff] rounded-sm border-[1px] border-slate-200">
    <div className="mb-4 flex justify-between items-center ">
      <SearchInputBox
        placeholder="Search..."
        height={2}
        width={15}
        iconFontSize={20}
        value={filtering}
        setFiltering={setFiltering}
      />
      <div className="flex gap-2">
        <DownloadButton data={data} fileName={"b2c"} />
        <Table/>
        <ZoomButton onclick={()=>setIsZoomed(true)}/>
      </div>
    </div>
    <div className={`flex flex-col overflow-y-auto overflow-x-auto  max-h-[calc(100vh-395px)] ${expanded ? "w-[calc(100vw-327px)]" : "w-full"}  bg-white`}>
      <table className=" rounded table-fixed  ">
        <thead className="h-12 bg-white ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-left border-t border-extraLightGray dark:border-darkGray bg-white  sticky top-[-2px]"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 text-sm h-10 undefined
                            font-semibold text-subHeading/50 dark:text-gray text-[#343a4080]"
                >
                  <div className="flex items-center gap-1 select-none">
                    <span className="w-max">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {/* {
                        {asc:<IoMdArrowDropup className="inline"/>, desc:<IoMdArrowDropdown className="inline"/>}[header.column.getIsSorted() ?? null]
                      } */}
                      {header.column.getIsSorted() ? (
                        {
                          asc: (
                            <>
                              &nbsp;{<IoMdArrowDropup className="inline" />}
                            </>
                          ),
                          desc: (
                            <>
                              &nbsp;
                              {<IoMdArrowDropdown className="inline" />}
                            </>
                          ),
                        }[header.column.getIsSorted() ?? null]
                      ) : (
                        <>&nbsp;{<TiArrowUnsorted className="inline" />}</>
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="overflow-y-auto bg-white">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-slate-200">
              {row.getVisibleCells().map((cell) => (
                <td
                  className="px-4 py-0 h-10 flex-1"
                  style={{ overflowWrap: "anywhere" }}
                  key={cell.id}
                >
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="flex justify-between px-10 items-center">
      <div className="text-sm pt-5 pb-5">
        Entries {table.getState().pagination.pageSize} of&nbsp;
        {table.getFilteredRowModel().rows.length}
      </div>
      <div className="text-sm pt-5 pb-5 flex justify-center gap-3">
        <button
          className={!table.getCanPreviousPage() ? "text-slate-300" : ""}
          onClick={() => table.setPageIndex(0)}
        >
          <BiFirstPage className="inline" /> First
        </button>
        <button
          className={table.getCanPreviousPage() ? "" : "text-slate-300"}
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <GrFormPrevious className="inline" /> Prev
        </button>
        <button
          className={table.getCanNextPage() ? "" : "text-slate-300"}
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next <GrFormNext className="inline" />
        </button>
        <button
          className={!table.getCanNextPage() ? "text-slate-300" : ""}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last <BiLastPage className="inline" />
        </button>
      </div>
      <div className="text-sm pt-5 pb-5">
        <span>
          {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <span className="ml-5">
          Page&nbsp;&nbsp;
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border-2 p-1 rounded w-12 bg-transparent hover:outline-none focus:outline-none"
            min="0"
            max={table.getPageCount()}
          />
        </span>
        <span className="ml-5">
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="p-1 bg-transparent focus:outline-none border-2 rounded"
          >
            {[10, 20, 30].map((pageSize) => {
              return (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              );
            })}
          </select>
        </span>
      </div>
    </div>
  </div>
  )
}

export default MainTable
import React, { useMemo } from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import mData from './accets/MOCK_DATA.json'
function Table() {
    const data = useMemo(() => mData, [])
    const columns = [
        {
            header: 'ID',
            accessorKey: 'id',
            footer: 'ID'
        },
        {
            header: 'Trace ID',
            accessorKey: 'trace_id',
            footer: 'Trace ID'
        },
        {
            header: 'Section',
            accessorKey: 'section',
            footer: 'section'
        },
        {
            header: 'Customer Name',
            accessorKey: 'customer_name',
            footer: 'Customer Name'
        },
        {
            header: 'Mobile No.',
            accessorKey: 'mobile_no',
            footer: 'section'
        },
        {
            header: 'Email',
            accessorKey: 'email',
            footer: 'Email'
        },
        {
            header: 'Updated At',
            accessorKey: 'updated_at',
            footer: 'Updated At'
        },
        {
            header: 'Action',
            accessorKey: 'action',
            footer: 'Action'
        }
    ]
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() })
    return (
        <div className="flex flex-col w-full overflow-y-auto overflow-x-auto max-h-[calc(100vh-395px)] w-[45rem] border-[1px] border-slate-200">
            <table className=" rounded table-fixed">
                <thead className="h-12 bg-white ">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr
                            key={headerGroup.id}
                            className="text-left border-t border-extraLightGray dark:border-darkGray bg-white  sticky top-[-2px]"
                        >
                          
                                {headerGroup.headers.map((header) => (
                                    <th
                                        key={header.id}
                                        className="px-4 text-sm h-10  undefined
                                font-semibold text-subHeading/50  dark:text-gray"
                                    >
                                        <div className="flex items-center gap-1 select-none">
                                            <span className='w-max'>
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </span>
                                        </div>
                                    </th>
                                ))}
                           
                        </tr>
                    ))}
                </thead>

                <tbody className="h-60 overflow-y-auto">
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td style={{overflowWrap:'anywhere'}} key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table

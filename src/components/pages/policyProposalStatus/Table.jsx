import React, { useMemo } from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'
import mData from './accets/MOCK_DATA.json'
function Table() {
    // {
    //     "id": 1,
    //     "trace_id": "58d3:e374:5715:966a:c7b6:8fd3:1aae:79d6/26",
    //     "section": "Jetta",
    //     "customer_name": "Amalita",
    //     "mobile_no": "801-984-3842",
    //     "emial": "agarlett0@amazon.de",
    //     "updated_at": "5/2/2023",
    //     "action": "Pendiqing"
    // }
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
        <div className="flex flex-col w-full overflow-y-auto max-h-[calc(100vh-395px)]">
            <table class="w-full rounded">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
                        ))}
                    </tr>
                ))}

                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table

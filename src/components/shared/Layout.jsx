import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'

export default function Layout() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen">
            <Sidebar />
            <div className="p-4">
                <div>Header</div>
                <div>{<Outlet />}</div>
                <div>Footer</div>
            </div>
        </div>
    )
}

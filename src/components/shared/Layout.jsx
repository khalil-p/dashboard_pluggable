import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Footer from './footer/Footer'
export default function Layout() {
    return (
        <div className="h-screen w-full flex gap-4 bg-[#f6fbff] ">
            <Sidebar />
            <div className="h-screen w-screen flex flex-col">
                <Header className="sticky top-0" />
                <div className="h-screen overflow-x-hidden  pr-4 flex-1 py-4 overflow-y-scroll">
                    {<Outlet />}
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

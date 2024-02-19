import React, {useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import Footer from './footer/Footer'
import { sideBarContext } from '../../lib/contexts/sideBarContext'
export default function Layout() {
    const {expanded} = useContext(sideBarContext)
    return (
        <div className={`h-screen w-full flex ${expanded ? "gap-4" : "gap-0"} bg-[#eff3f6]`}>
            <Sidebar />
            <div className="h-screen w-screen flex flex-col">
                <Header className="sticky top-0" />
                <div className={`h-screen overflow-x-hidden pr-4 flex-1 pb-4 overflow-y-scroll transition-all ${expanded ? "w-[calc(100vw-291px)]" : "w-[calc(100vw-100px)]"}`}>
                    {<Outlet />}
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import classNames from 'classnames'
import logo from '../../../assets/images/logo1.png'
import { DASHBOARD_SIDEBAR_LINKS } from '../../../lib/constants/navigation'
import { Link, useLocation } from 'react-router-dom'

const linkClases =
    'flex items-center gap-2 font-light pl-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-netral-600 rounded-sm text-base'
function Sidebar() {
    return (
        <>
            <div className="bg-neutral-900 p-3 flex flex-col text-white z-[999] max-w-72 w-72 ">
                <div className="flex items-center justify-center px-1 pb-3">
                    <img className="w-12" src={logo} alt="" />
                </div>
                <div className="flex-1 py-8 flex flex-col gap-0.5 overflow-scroll scrollbar ">
                    {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLinks key={item.key} item={item} />
                    ))}
                </div>
                <div>Buttom Part</div>
            </div>
        </>
    )
}

function SidebarLinks({ item }) {
    const { pathname } = useLocation()
    return (
        <>
            <Link
                to={item.path}
                className={classNames(
                    pathname === item.path ? 'text-white bg-neutral-700' : 'text-neutral-400',
                    linkClases
                )}
            >
                <span className="text-xl">{item.icon}</span>
                {item.label}
            </Link>
        </>
    )
}

export default Sidebar

import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import logo from '../../../assets/images/fyntune.png'
import { DASHBOARD_SIDEBAR_LINKS } from '../../../lib/constants/navigation'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { LuChevronFirst } from 'react-icons/lu'
import { LuChevronLast } from 'react-icons/lu'
import Submenu from './Submenu'
import { commonConetxt } from '../../../lib/contexts/sharedContexts'
const linkClases =
    'flex items-center font-semibold text-sm py-2 hover:bg-white hover:no-underline hover:rounded-xl hover:text-[#5879e6] active:bg-netral-600 rounded-sm text-base focus:outline-none w-fit'
function Sidebar() {
    const { expanded, setExpanded } = useContext(commonConetxt)

    return (
        <>
            <div className="p-3 flex flex-col text-white z-30 max-w-[16rem]">
                <div className="flex items-center justify-start px-2 pb-3 h-12 max-h-12 overflow-hidden gap-2 text-[#4e4b4b]">
                    <button
                        className="cursor-pointer p-2 rounded-xl hover:bg-slate-100 border border-gray text-[#5879e6] bg-[#fff]"
                        onClick={() => setExpanded((curr) => !curr)}
                    >
                        {expanded ? <LuChevronFirst /> : <LuChevronLast />}
                    </button>

                    <img className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`} src={logo} alt="" />
                </div>
                <div
                    className={`overflow-x-hidden ${expanded ? 'pr-4' : 'pr-2'} pb-4 flex-1 flex flex-col gap-0.5 overflow-scroll overflow-y-auto w-fit`}
                >
                    {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                        <SidebarLinks key={item.key} item={item} />
                    ))}
                </div>
                <div className={classNames('text-red-500 cursor-pointer px-3', linkClases)}>
                    <span className="text-xl">
                        <RiLogoutCircleLine />
                    </span>
                    <p className={`overflow-hidden transition-all ${expanded ? 'w-fit' : 'w-0'} `}>Logout</p>
                </div>
            </div>
        </>
    )
}

function SidebarLinks({ item }) {
    const { expanded } = useContext(commonConetxt)
    const { pathname } = useLocation()
    const [subMenuOpen, setSubMenuOpen] = useState(false)
    return (
        <>
            <div>
                <Link
                    to={item.path}
                    className={classNames(
                        pathname === item.path
                            ? // ? "text-sky-500 bg-white rounded-xl"
                              'text-[#5879e6] bg-[#FFFFFF] rounded-xl'
                            : `text-[#4e4b4b]`,
                        'px-3',
                        linkClases
                    )}
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                >
                    <div
                        // className={`flex items-center gap-2 overflow-hidden overflow-ellipsis whitespace-nowrap ${
                        //   expanded ? "w-64" : "w-6"
                        // }`}
                        className={`flex items-center overflow-hidden overflow-ellipsis whitespace-nowrap ${
                            expanded ? 'gap-2' : 'gap-0'
                        }`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className={`overflow-hidden transition-all ${expanded ? 'w-[100%]' : 'w-0'}`}>
                            {item.label}
                        </span>
                    </div>
                </Link>
                <motion.div
                    className="hidden"
                    animate={
                        { x: 100 } && subMenuOpen
                            ? {
                                  display: 'block'
                              }
                            : {
                                  display: 'none'
                              }
                    }
                >
                    {item.hasSubMenu && <Submenu mainMenuName={item.label} />}
                </motion.div>
            </div>
        </>
    )
}

export default Sidebar

import React from 'react'
import { statusInfo } from './statusInfo.js'
import { useLocation } from 'react-router-dom'
function StatusInfoNav() {
    const { pathname } = useLocation()
    return (
        <div className="flex flex-row gap-4 overflow-x-scroll scrollbar w-[45rem] px-4 mt-8 ">
            {statusInfo.map((item) => {
                return (
                    pathname.includes(item.statusOf) &&
                    item.info.map((infoItem) => {
                        return (
                            <div className="flex flex-row gap-2 border-[0.5px] border-slate-300 rounded-xl p-2 bg-[#fff]" key={infoItem.info}>
                                <p className="w-max">{infoItem.info}</p>
                                <span>{infoItem.count}</span>
                            </div>
                        )
                    })
                )
            })}
        </div>
    )
}

export default StatusInfoNav

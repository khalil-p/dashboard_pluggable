import React from 'react'
import { useNavigate } from 'react-router-dom'
import { proposalNavImgs } from './accets/images/exportImg.jsx'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import DatePickerReact from './DatePickerReact.jsx'

const policiesOf = [
    { name: 'All', path: 'status/all', img: proposalNavImgs.allImg },
    { name: 'Car', path: 'car', img: proposalNavImgs.carProposalImg },
    { name: 'Bike', path: 'bike', img: proposalNavImgs.bikeProposalImg },
    { name: 'Health', path: 'health', img: proposalNavImgs.healthNstpImg },
    { name: 'Renewal', path: 'renewal', img: proposalNavImgs.renewalImg },
    { name: 'Super Topup', path: 'super_topup', img: proposalNavImgs.superTopupImg },
    { name: 'Term', path: 'term', img: proposalNavImgs.termProposal }
]

function PolicyNavBar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <>
            <div className="text-sm justify-end flex items-center">
                <p className="font-semibold">Select Date Range</p>
                <div className="flex text-left ml-5">
                    <div className="flex">
                        From :
                        <div className="ml-3">
                            <DatePickerReact />
                        </div>
                    </div>
                    <div className="flex policy_proposal_to_date ml-3">
                        To :
                        <div className="ml-3">
                            <DatePickerReact />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                {policiesOf.map((item) => {
                    return (
                        <div
                            className={classNames(
                                pathname.replace(/[_/]/g, '').includes(item.name.replace(' ', '').toLocaleLowerCase())
                                    ? 'border-2 border-slate-200 shadow-md'
                                    : 'border-none',
                                'w-[6.5rem] transition-all delay-75 border-2 border-gray-400 rounded-xl flex flex-col items-center gap-2 mt-8 pt-2 pb-2'
                            )}
                            onClick={() => navigate(`/policy_proposal_status/${item.path}`)}
                        >
                            <img className="w-11" alt={item.name} src={item.img} />
                            <p className="text-sm">{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PolicyNavBar

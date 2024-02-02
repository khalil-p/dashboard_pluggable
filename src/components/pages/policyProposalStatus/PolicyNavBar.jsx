import React from 'react'
import { useNavigate } from 'react-router-dom'
import { proposalNavImgs } from './accets/images/exportImg.jsx'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { Navigate } from "react-router-dom";
import Select from 'react-select'

const policiesOf = [
    { name: 'All', path: 'status/all', img: proposalNavImgs.allImg },
    { name: 'Car', path: 'car', img: proposalNavImgs.carProposalImg },
    { name: 'Bike', path: 'bike', img: proposalNavImgs.bikeProposalImg },
    { name: 'Health', path: 'health', img: proposalNavImgs.healthNstpImg },
    { name: 'Renewal', path: 'renewal', img: proposalNavImgs.renewalImg },
    { name: 'Super Topup', path: 'super_topup', img: proposalNavImgs.superTopupImg },
    { name: 'Term', path: 'term', img: proposalNavImgs.termProposal }
]

const options = policiesOf.map((item) => {
    ({
    value: item.name,
    label: (
      <div className='flex items-center'  onClick={() =>  <Navigate to={`/policy_proposal_status/${item.path}`} replace={true} /> }>
        <img className="w-8" alt={item.name} src={item.img} />
        <span>{item.name}</span>
      </div>
    ),
  })});

function PolicyNavBar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        <>
            <div>
                <Select options={options}/>
            </div>
            <div className="flex">
                {policiesOf.map((item) => {
                    return (
                        <div
                            className={classNames(
                                pathname.replace(/[_/]/g, '').includes(item.name.replace(' ', '').toLocaleLowerCase())
                                    ? 'border-2 bg-white border-slate-200 shadow-md'
                                    : 'border-none opacity-75',
                                'w-[6.5rem] transition-opacity delay-75 border-2 border-gray-400 rounded-xl flex flex-col items-center gap-2 pt-2 pb-2'
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

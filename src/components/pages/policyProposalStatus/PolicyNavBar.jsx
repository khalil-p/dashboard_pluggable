import React from 'react'
import { useNavigate } from 'react-router-dom'
import { proposalNavImgs } from './accets/images/exportImg.jsx'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

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
    const {pathname} = useLocation();
    return (
        <div className="flex">
            {policiesOf.map((item) => {
                return (
                    <div
                        className={classNames(pathname.replace(/[_/]/g, '').includes(item.name.replace(' ','').toLocaleLowerCase()) ? "border-2 border-slate-200 shadow-md" : "border-none", "w-[6.5rem] flex flex-col items-center gap-2 mt-8")} 
                        onClick={() => navigate(`/policy_proposal_status/${item.path}`)}
                    >
                        <img className='w-11' alt={item.name} src={item.img} />
                        <p className='text-sm'>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default PolicyNavBar

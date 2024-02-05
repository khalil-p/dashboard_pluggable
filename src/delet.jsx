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


function PolicyNavBar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const options = policiesOf.map((item) => ({
        value: item.name,
        label: (
          <div className="flex items-center"  >
            <img className="w-8" alt={item.name} src={item.img}/>
            <span>{item.name}</span>
          </div>
        ),
      }));
    
    return (
        <>
            <div>
                <Select options={options}/>
            </div>
        </>
    )
}

export default PolicyNavBar



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { policiesOf } from './policiesOf.jsx'; // Make sure to provide the correct path

function PolicyNavBar() {
    const navigate = useNavigate();
    const options = policiesOf.map((item) => ({
        value: item.path, // Use the path as the value
        label: (
            <div className="flex items-center gap-2">
                <img className="w-6" alt={item.name} src={item.img} />
                <span>{item.name}</span>
            </div>
        ),
    }));

    const handleSelectChange = (selectedOption) => {
        navigate(selectedOption.value);
    };

    return (
        <>
            <div>
                <Select options={options} onChange={handleSelectChange} />
            </div>
        </>
    );
}

export default PolicyNavBar;
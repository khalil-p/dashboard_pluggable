import React from 'react'
import { Outlet } from 'react-router-dom'
import PolicyNavBar from './PolicyNavBar'
import StatusInfoNav from './StatusInfoNav.jsx'
function PolicyProposalStatus() {
    return (
        <div>
            <h1 className='font-bold'>Policy Insurance (NOP/premium)</h1>
            <PolicyNavBar />
            <StatusInfoNav/>
            <div><Outlet /></div>
           
        </div>
    )
}

export default PolicyProposalStatus

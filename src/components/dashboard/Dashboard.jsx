import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div><p>Dashboard</p><Link to="/policy-proposal" className="underline">Go to policy proposal</Link></div>
  )
}

export default Dashboard
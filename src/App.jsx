import React from 'react';
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/profile/Profile";
import LostLeads from "./components/pages/loastLeads/LostLeads";
import PolicyProposalStatus from "./components/pages/policyProposalStatus/PolicyProposalStatus";
import All from "./components/pages/policyProposalStatus/All";
import SuperTopUp from "./components/pages/policyProposalStatus/SuperTopUp";
import Term from "./components/pages/policyProposalStatus/Term";
import Bike from "./components/pages/policyProposalStatus/Bike";
import Car from "./components/pages/policyProposalStatus/Car";
import Health from "./components/pages/policyProposalStatus/Health";
import Renewal from "./components/pages/policyProposalStatus/Renewal";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/policy_proposal_status/" element={<PolicyProposalStatus/>}>
            <Route path="/policy_proposal_status/status/all" element={<All/>} />
            <Route path="/policy_proposal_status/bike" element={<Bike/>} />
            <Route path="/policy_proposal_status/car" element={<Car/>} />
            <Route path="/policy_proposal_status/health" element={<Health/>} />
            <Route path="/policy_proposal_status/renewal" element={<Renewal/>} />
            <Route path="/policy_proposal_status/super_topup" element={<SuperTopUp/>} />
            <Route path="/policy_proposal_status/term" element={<Term/>} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route path="lost" element={<LostLeads />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

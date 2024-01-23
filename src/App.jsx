import './App.css';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from "./components/dashboard/Dashboard";
import PolicyProposal from './components/policy_proposal/PolicyProposal';
import Login from './components/login/Login';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='policy-proposal' element={<PolicyProposal />} />
                </Route>
                <Route path='login' element={<Login/>}/>
            </Routes>
        </Router>
    )
}

export default App

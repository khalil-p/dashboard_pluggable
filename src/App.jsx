import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Login from "./components/pages/login/Login";
import Profile from "./components/pages/profile/Profile";
import LostLeads from "./components/pages/loastLeads/LostLeads";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="lost" element={<LostLeads />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

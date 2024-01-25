import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/profile" className="underline">
        Go to profile page
      </Link>
    </div>
  );
}

export default Dashboard;

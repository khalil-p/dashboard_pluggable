import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Background from "../../shared/background/Background";
import PolicyCount from "./PolicyCount";
import PieChartDb from "../../shared/charts/PieChartDb";
import CustomPieChartDb from "../../shared/charts/CustomPieChartDb";
const upcomingRenewalList = [
  {
    when: "Today",
    count: 0,
  },
  {
    when: "Next 7 days",
    count: 0,
  },
  {
    when: "Next 15 days",
    count: 0,
  },
  {
    when: "Next 30 days",
    count: 0,
  },
];
const expiredRenewalList = [
  {
    when: "Yesturday",
    count: 0,
  },
  {
    when: "Last 7 days",
    count: 0,
  },
  {
    when: "Last 15 days",
    count: 0,
  },
  {
    when: "Last 30 days",
    count: 0,
  },
];
function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/profile" className="underline">
        Go to profile page
      </Link>
      <Background>
        <div className="flex justify-between w-[100%]">
          <div className="flex gap-2 flex-col">
            <Heading heading={"Upcoming Renewals"} />
            <div className="grid grid-cols-2 gap-4 this_div">
              {upcomingRenewalList.map((item) => {
                return <PolicyCount {...item} />;
              })}
            </div>
          </div>
          <div className="flex gap-2 flex-col">
            <Heading heading={"Expired Renewals"} />
            <div className="grid grid-cols-2 gap-4 this_div">
              {expiredRenewalList.map((item) => {
                return <PolicyCount {...item} />;
              })}
            </div>
          </div>
          <div>
            {/* <PieChartDb /> */}
            <CustomPieChartDb />
          </div>
        </div>
      </Background>
    </div>
  );
}

export default Dashboard;

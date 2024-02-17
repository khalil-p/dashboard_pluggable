import React from "react";
import Heading from "./Heading";
import Background from "../../shared/background/Background";
import PolicyCount from "./PolicyCount";
import BarChartDb from "../../shared/charts/BarChartDb";
import PieChartDb from "../../shared/charts/PieChartDb";
import LineChartDb from "../../shared/charts/LineChartDb";
import DatePickerCalendar from "../../shared/datePickerCalendar/DatePickerCalendar";
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

const productsForBarChart = [
  "All",
  "Car",
  "Bike",
  "Health",
  "Term",
  "Super Topup",
  "Commercial Vehicle",
  "Endowment",
];
function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <div className="flex justify-between">
        <div className="flex-1">
          <Background>
            <div className="flex gap-10 justify-between w-[100%]">
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
            </div>
          </Background>
        </div>
        <Background>
          <div>
            <div>
              <p className="font-semibold pb-2">Search</p>
            </div>
            <div className="text-sm justify-end flex items-center gap-4">
              <DatePickerCalendar />
            </div>
          </div>
        </Background>
      </div>

      <div className="flex flex-row">
        <div className="flex-1">
          <Background>
            <Heading heading={"Policy Issuance (NOP / Premium)"} />
            <div className="h-60 w-[100%]">
              <PieChartDb />
            </div>
          </Background>
        </div>
        <div className="flex-1">
          <Background>
            <div className="h-[16.8rem] w-[100%]">
              <LineChartDb />
            </div>
          </Background>
        </div>
      </div>
      <div className="flex-1">
        <Background>
          <Heading heading={"Policy / Proposal Status (Current Month)"} />
          <div className="flex gap-2">
            {productsForBarChart.map((i) => (
              <a
                href=""
                className="text-sm text-[#7a7070] hover:text-[#5879e6]"
              >
                {i}
              </a>
            ))}
          </div>
          <div className="h-60 w-[100%]">
            <BarChartDb />
          </div>
        </Background>
      </div>
    </div>
  );
}

export default Dashboard;

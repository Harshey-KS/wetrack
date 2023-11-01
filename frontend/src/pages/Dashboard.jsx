import React, { useState } from "react";
import PublicHolidays from "../components/PublicHolidays";
import { Calendar } from "../components/ui/calendar";
import PieCards from "../components/PieCards";
import BarChart from "../components/BarChart";
import { UserData } from "../Data";
import Tasks from "../components/Tasks";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Leaves Taken",
        data: UserData.map((data) => data.leavesTakenBar),
        backgroundColor: ["#5932EA"],
        hoverBackgroundColor: ["#BAE6FD"],
        barPercentage: 1,
        borderRadius: 11,
      },
    ],
  });

  return (
    <div className="h-full w-full p-2 flex-col ml-2">
      {/* 1 */}
      <PieCards />
      {/* 2 */}
      <div className="flex">
        <div className="flex-col m-2 ml-8">
          <BarChart chartData={userData} className="m-2" />
          <div className="flex">
            <Calendar
              selected={date}
              onSelect={setDate}
              className="bg-white h-fit w-fit rounded-2xl bigShadow mt-3"
            />
            <Tasks />
          </div>
        </div>
        <PublicHolidays />
      </div>
    </div>
  );
};

export default Dashboard;

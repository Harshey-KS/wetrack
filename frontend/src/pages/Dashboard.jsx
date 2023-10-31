import React, { useState } from "react";
import PublicHolidays from "../components/PublicHolidays";
import { Calendar } from "../components/ui/calendar";
import { Button } from "../components/ui/button";
import PieCards from "../components/PieCards";
import BarChart from "../components/BarChart";
import { UserData } from "../Data";

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
    <div className="h-full w-full flex-col gap-4">
      {/* <PieCards /> */}
      {/* <Calendar
        selected={date}
        onSelect={setDate}
        className="bg-white h-fit rounded-2xl bigShadow"
      /> */}
      {/* <PublicHolidays /> */}
      <BarChart chartData={userData} />
    </div>
  );
};

export default Dashboard;

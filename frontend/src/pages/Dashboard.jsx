import React, { useState } from "react";
import PublicHolidays from "../components/PublicHolidays";
import { Calendar } from "../components/ui/calendar";
import { Button } from "../components/ui/button";
import PieCards from "../components/PieCards";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="h-full w-full flex gap-4">
      <PieCards />
      {/* <Calendar
        selected={date}
        onSelect={setDate}
        className="bg-white h-fit rounded-2xl bigShadow"
      /> */}
      {/* <PublicHolidays /> */}
    </div>
  );
};

export default Dashboard;

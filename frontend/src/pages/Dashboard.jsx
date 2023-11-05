import React, { useEffect, useState } from "react";
import PublicHolidays from "../components/PublicHolidays";
import { Calendar } from "../components/ui/calendar";
import PieCards from "../components/PieCards";
import BarChart from "../components/BarChart";
import { UserData } from "../Data";
import Tasks from "../components/Tasks";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import format from "date-fns/format";
import { group } from "../helperFunctions";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [teacher, setTeacher] = useState([]);
  const [leaveRecords, setLeaveRecords] = useState();
  const { user } = useAuthContext();
  const [chartData, setChartData] = useState([]);
  const [barData, setBarData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Leaves Taken",
        data: chartData?.map((data) => data.leaves),
        backgroundColor: ["#5932EA"],
        hoverBackgroundColor: ["#BAE6FD"],
        barPercentage: 1,
        borderRadius: 11,
      },
    ],
  });
  const fetchData = async () => {
    let res = await axios.get(`leave-records/${user?.id}`);
    if (res?.data) {
      setLeaveRecords(res?.data);
    }
    res = await axios.get(`teachers/${user?.id}`);
    setTeacher(res?.data);
  };

  useEffect(() => {
    if (user?.id) fetchData();
  }, [user]);

  useEffect(() => {
    const entries = group(leaveRecords || [], (item) =>
      format(new Date(item?.dateOfLeave), "MMM")
    );
    const e = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]?.map((month) => ({
      leaves: entries[month] ? entries[month]?.length : 0,
      month,
    }));

    setBarData((prev) => ({
      ...prev,
      datasets: [
        {
          ...prev.datasets[0],
          data: e?.map((data) => data?.leaves),
        },
      ],
    }));
  }, [leaveRecords]);

  return (
    <div className="h-full w-full p-2 flex-col ml-2">
      {/* 1 */}
      <PieCards
        leaves={{
          sick: leaveRecords?.filter((e) => e.leaveType === "Sick").length,
          annual: leaveRecords?.length,
          casual: leaveRecords?.filter((e) => e.leaveType === "Casual").length,
        }}
      />
      {/* 2 */}
      <div className="flex">
        <div className="flex-col m-2 ml-8">
          <BarChart chartData={barData} className="m-2" />
          <div className="flex">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="bg-white h-fit w-fit rounded-2xl bigShadow mt-3"
            />
            <Tasks portion={teacher?.classes} />
          </div>
        </div>
        <PublicHolidays />
      </div>
    </div>
  );
};

export default Dashboard;

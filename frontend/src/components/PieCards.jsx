import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsFillArrowUpRightCircleFill, BsThreeDots } from "react-icons/bs";

const pieCards = [
  {
    remaining: 3,
    typeOfLeave: "Monthly Leaves Remaining",
    title: "Total Monthly Leaves",
    color: "text-[#FF9085]",
    total: 5,
  },
  {
    remaining: 10,
    typeOfLeave: "Sick Leaves Remaining",
    title: "Total Sick Leaves",
    color: "text-[#FFC444]",
    total: 25,
  },
  {
    remaining: 23,
    typeOfLeave: "Annual Leaves Remaining",
    title: "Total Annual Leaves",
    color: "text-[#57D9AD]",
    total: 30,
  },
];

const PieCards = () => {
  return (
    <div className="flex w-full justify-around m-4">
      {pieCards?.map((card) => (
        <div className="bg-white rounded-xl h-36 w-64 p-2 bigShadow ">
          {/* 1 */}
          <div className="flex justify-between">
            <div className="font-semibold text-[#54548C] text-sm">
              {card.typeOfLeave}
            </div>
            <div className=" text-gray-400">
              <BsThreeDots className="font-bold text-xl" />
            </div>
          </div>
          {/* 2 */}
          <div className="flex p-2 justify-around mt-1 ">
            <div className="flex-col px-2 mt-4">
              <div className="text-black font-bold text-left text-lg py-0">
                {card.total}
              </div>
              <div
                className={`text-xs ${card.color} text-left -my-1 mx-0 font-medium`}
              >
                {card.title}
              </div>
            </div>
            <div className="h-16 w-16 mb-3 font-bold text-lg">
              <CircularProgressbar
                value={(card.remaining / card.total) * 100}
                text={`${card.remaining}`}
                styles={buildStyles({
                  pathColor: `${card.color.substring(
                    6,
                    card.color.length - 1
                  )}`,
                  textColor: "black",
                  trailColor: "#F1F1FC",
                })}
              />
            </div>
          </div>
          {/* 3 */}
          <div className={`${card.color}`}>
            <BsFillArrowUpRightCircleFill className="h-4 w-4" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default PieCards;

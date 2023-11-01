import React from "react";

const publicColor = "#6674BB";
const festivalColor = "#FFBF00";
const bankColor = "#FF784D";

const publicHolidays = [
  {
    name: "Republic Day",
    date: "26th January",
    color: publicColor,
  },
  {
    name: "Dussehra",
    date: "12th October",
    color: festivalColor,
  },
  {
    name: "Bank Day",
    date: "18th November",
    color: bankColor,
  },
];

export default function PublicHolidays() {
  return (
    <div className="flex flex-col-reverse w-full h-full mt-2 ml-1">
      <div className="flex flex-col bg-white w-[16rem] h-[22rem] rounded-2xl  bigShadow  ">
        <div className="text-[var(--primary2)] font-[600] text-md mt-1 pt-1">
          Public Holidays
        </div>
        <div className="flex-col p-px mt-5 overflow-y-auto">
          {publicHolidays.map((holiday) => (
            <div className="flex flex-col px-3 border-b-[#C7C9CF] border-[1px] border-transparent hover:bg-zinc-200 duration-300 cursor-pointer hover:rounded-md hover:shadow hover:w-full">
              <div className="flex justify-between p-0 ">
                <div className="w-1">
                  <svg className="mt-1 h-3 w-3 svg-icon" viewBox="0 0 20 20">
                    <path
                      fill={holiday.color || "red"}
                      d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625"
                    ></path>
                  </svg>
                </div>
                <div className="text-[14px] text-left mb-1 font-semibold flex-col flex gap-1 w-1/2 truncate">
                  {holiday.date}
                  <p className=" -mt-1.5 text-[11px] text-[color:var(--text2)] text-left my-0.5 pb-0.5 pt-0">
                    Monday
                  </p>
                </div>
                <div className="text-[13px] w-1/3  px-0 text-right font-base text-[#514D4D]">
                  {holiday.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

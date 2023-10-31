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
    <div className="flex flex-col-reverse w-full h-full mt-2 ml-5">
      <div className="flex flex-col bg-white w-[15rem] h-[22rem] rounded-2xl  bigShadow ">
        <div className="text-[var(--primary2)] font-[600] text-md mt-1 pt-1">
          Public Holidays
        </div>
        <div className="flex flex-row justify-end p-4">
          <div className="bg-[var(--primary3)] flex px-3 py-1.5 rounded-md shadowBig  border-1 border-gray-300	">
            <div className="text-[color:var(--primary2)] font-medium text-xs ">
              This Month
            </div>
            <div>
              <svg
                className="svg-icon w-4 pt-1  -mt-0.5 h-4"
                stroke="currentColor"
                strokeWidth={0.2}
                color="black"
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-col mt-2 p-px">
          {publicHolidays.map((holiday) => (
            <div className="flex flex-col px-3 border-b-[#C7C9CF] border-[1px] border-transparent hover:bg-zinc-200 hover:rounded-md hover:shadow hover:font-bold hover:w-full">
              <div className="flex gap-2 p-0 m-0.5">
                <div>
                  <svg className="mt-1 h-3 w-3 svg-icon" viewBox="0 0 20 20">
                    <path
                      fill={holiday.color || "red"}
                      d="M9.875,0.625C4.697,0.625,0.5,4.822,0.5,10s4.197,9.375,9.375,9.375S19.25,15.178,19.25,10S15.053,0.625,9.875,0.625"
                    ></path>
                  </svg>
                </div>
                <div className="text-[14px] pb-0 font-semibold mr-2 ml-0">
                  {holiday.date}
                </div>
                <div className="flex justify-end">
                  <div className="text-[13px] mx-1 px-0 font-base text-[#514D4D]">
                    {holiday.name}
                  </div>
                </div>
              </div>
              <div className="mx-5 -mt-1.5 text-[11px] text-[color:var(--text2)] text-left my-0.5 pb-0.5 pt-0">
                Monday
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

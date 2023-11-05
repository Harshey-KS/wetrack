import React, { useState } from "react";

const DropdownComponent = () => {
  const [selectedOption, setSelectedOption] = useState("Leave Type");

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="p-3 flex gap-16 justify-around items-center">
      <div>
        <label
          htmlFor="leaveType"
          className="text-[16px]  text-gray-500 font-bold w-24 h-2 mr-8"
        >
          Select Leave Type:
        </label>
      </div>
      <div>
        <select
          id="leaveType"
          value={selectedOption}
          onChange={handleSelect}
          className="  p-1 border h-8 mr-16  border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Leave Type" disabled hidden>
            Leave Type
          </option>
          <option value="sick leave">Sick Leave</option>
          <option value="earned leave">Earned Leave</option>
          <option value="casual leave">Casual Leave</option>
        </select>
      </div>
    </div>
  );
};

export default DropdownComponent;

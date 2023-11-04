import React from "react";
import Heading from "../components/Heading";
import LightBlue from "../components/LightBlue";

const Teachers = [
  "Prof.Reeta Koshy",
  "Prof.Sunil Ghane",
  "Prof.Sudhir Dhage",
  "Prof.Jyoti Ramteke",
  "Swapnali Kurhade",
];

const Department = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading title="Department of Computer Engineering" />
      <div>
        {Teachers.map((teacher) => (
          <LightBlue title={teacher} />
        ))}
      </div>
      {/* <LightBlue title="Prof.Reeta Koshy" />
      <LightBlue title="Prof.Sunil Ghane" />
      <LightBlue title="Prof.Sudhir Dhage" />
      <LightBlue title="Prof.Swapnali Kurhade" />
      <LightBlue title="Prof.Jyoti Ramteke" /> */}
    </div>
  );
};

export default Department;

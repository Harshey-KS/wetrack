import React from "react";
import Heading from "../components/Heading";
import LightBlue from "../components/LightBlue";

const Department = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading title="Department of Computer Engineering" />
      <LightBlue title="Prof.Reeta Koshy" />
      <LightBlue title="Prof.Sunil Ghane" />
      <LightBlue title="Prof.Sudhir Dhage" />
      <LightBlue title="Prof.Swapnali Kurhade" />
      <LightBlue title="Prof.Jyoti Ramteke" />
    </div>
  );
};

export default Department;

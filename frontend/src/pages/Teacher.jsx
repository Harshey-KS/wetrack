import React from "react";
import Heading from "../components/Heading";
import LightBlue from "../components/LightBlue";

const Classes = [
  "TE COMPS A",
  "FE COMPS D",
  "SE COMPS B",
  "BE COMPS",
  "FE COMPS C",
];

const Teacher = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Heading title="Prof.Reeta Koshy" />
      <div>
        {Classes.map((c) => (
          <LightBlue title={c} />
        ))}
      </div>
    </div>
  );
};

export default Teacher;

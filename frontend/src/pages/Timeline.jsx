import React from "react";
import Heading from "../components/Heading";
import Cards from "../components/Cards";

const cards = [
  {
    class: "TE COMPS A",
    list: ["ISE 1 16th August", "MSE October"],
  },
  {
    class: "SE EXTC F",
    list: ["ISE 2- Nov"],
  },
  {
    class: "FE CSE E",
    list: ["Quiz 3"],
  },
];

const Timeline = () => {
  return (
    <div className="flex flex-col">
      <Heading title={"Timeline"} />
      <Cards cards={cards} />
    </div>
  );
};

export default Timeline;

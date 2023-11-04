import React from "react";
import Heading from "../components/Heading";
import Cards from "../components/Cards";

const cards = [
  {
    class: "TE COMPS A",
    list: ["HTML", "CSS "],
  },
  {
    class: "SE EXTC F",
    list: ["CSS"],
  },
  {
    class: "FE CSE E",
    list: ["JavaScript"],
  },
];

const Portion = () => {
  return (
    <div className="flex flex-col">
      <Heading title={"Portion"} />
      <Cards cards={cards} />
    </div>
  );
};

export default Portion;

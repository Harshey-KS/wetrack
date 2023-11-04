import React from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";

const Cards = ({ cards }) => {
  return (
    <div className="flex justify-around m-4 mt-14">
      {cards?.map((card) => (
        <div className="bg-white rounded-xl w-52 h-64 overflow-hidden bigShadow flex flex-col justify-between">
          <div>
            <div className="bg-[#5932EA] h-10 text-white font-medium p-2 shadow-md shadow-indigo-500/40 ">
              {card.class}
            </div>
            <ul className="text-[#5C5F65] mt-2 w-full px-4">
              {card.list?.map((p) => (
                <li className="flex m-1 items-center w-full">
                  <BsFillCircleFill className="h-2 w-2 mr-3" />
                  <p className="break-all w-5/6 text-left">{p}</p>
                </li>
              ))}
            </ul>
          </div>
          <CgAddR className="self-end m-2 font-bold h-5 w-5 cursor-pointer text-[#5C5F65] hover:text-zinc-400 duration-200" />
        </div>
      ))}
    </div>
  );
};
export default Cards;

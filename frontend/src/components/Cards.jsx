import React, { useState } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const Cards = ({ cards, updatePortion, setTeacher }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newClass, setNewClass] = useState({ className: "", portion: [] });
  return (
    <div className="grid mt-14 grid-cols-3 gap-4">
      {cards?.map((card) => (
        <div className="bg-white rounded-xl w-52 h-64 overflow-hidden bigShadow flex flex-col justify-between">
          <div>
            <div className="bg-[#5932EA] h-10 text-white font-medium p-2 shadow-md shadow-indigo-500/40 ">
              {card.className}
            </div>
            <ul className="text-[#5C5F65] mt-2 w-full px-4">
              {card.portionCovered?.map((p) => (
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
      <CgAddR
        onClick={() => setModalOpen(true)}
        className="self-end m-2 font-bold h-5 w-5 cursor-pointer text-[#5C5F65] hover:text-zinc-400 duration-200"
      />
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Class</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <label>Class Name: </label>
            <input
              type="text"
              onChange={(e) =>
                // setTeacher((prev) => ({
                //   ...prev,
                //   classes: [
                //     ...prev.classes,
                //     {
                //       className: e.target.value,
                //       portion: [],
                //     }
                //   ],
                // }))
                setNewClass((prev) => ({ ...prev, className: e.target.value }))
              }
              placeholder="Class name"
            />

            <button
              onClick={() => {
                setTeacher((prev) => ({
                  ...prev,
                  classes: [...prev.classes, newClass],
                }));
                updatePortion();
              }}
            >
              Add Class
            </button>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Cards;

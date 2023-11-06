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
import { BsPencilSquare } from "react-icons/bs";
import { Cross } from "lucide-react";

const Cards = ({ cards, updatePortion, setTeacher }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [newClass, setNewClass] = useState({ className: "", portion: [] });
  const [editable, setEditable] = useState(null);

  console.log(editable);
  return (
    <div className="grid mt-14 grid-cols-3 gap-4">
      {cards?.map((card) => (
        <div className="bg-white rounded-xl w-52 h-64 overflow-hidden bigShadow flex flex-col justify-between">
          <div>
            <div
              contentEditable={card._id === editable?._id}
              onInput={(e) =>
                setEditable((prev) => ({
                  ...prev,
                  className: e?.target?.textContent,
                }))
              }
              className="bg-[#5932EA] h-10 text-white font-medium p-2 shadow-md shadow-indigo-500/40"
              autoFocus
            >
              {card.className}
            </div>
            <ul className="text-[#5C5F65] mt-2 w-full px-4">
              {editable?._id === card?._id
                ? editable?.portionCovered?.map((p, i) => (
                    <li className="flex m-1 h-4 items-center w-full">
                      <BsFillCircleFill className="h-2 w-2 mr-3" />
                      <p
                        className="break-all w-5/6 text-left"
                        contentEditable
                        onInput={(e) => {
                          const t = e?.currentTarget?.textContent;
                          console.log(t);
                          setEditable((prev) => ({
                            ...prev,
                            portionCovered: prev.portionCovered?.map(
                              (text, index) => {
                                console.log(t);
                                if (i === index) return t || "";
                                else return text;
                              }
                            ),
                          }));
                        }}
                      >
                        {card.portionCovered[i]}
                      </p>
                      <button
                        onClick={() =>
                          setEditable((prev) => ({
                            ...prev,
                            portionCovered: prev.portionCovered?.filter(
                              (text, index) => i !== index
                            ),
                          }))
                        }
                      >
                        X
                      </button>
                    </li>
                  ))
                : card.portionCovered?.map((p) => (
                    <li className="flex m-1 items-center w-full">
                      <BsFillCircleFill className="h-2 w-2 mr-3" />
                      <p className="break-all w-5/6 text-left">{p}</p>
                    </li>
                  ))}
              {editable?._id === card._id && (
                <li>
                  <CgAddR
                    onClick={() =>
                      setEditable((prev) => ({
                        ...prev,
                        portionCovered: [...prev.portionCovered, ""],
                      }))
                    }
                    className="self-end font-bold h-5 w-5 cursor-pointer text-[#5C5F65] hover:text-zinc-400 duration-200"
                  />
                </li>
              )}
            </ul>
          </div>
          {editable?._id !== card._id ? (
            <BsPencilSquare
              onClick={() => {
                setEditable(card);
              }}
              className="self-end m-2 font-bold h-5 w-5 cursor-pointer text-[#5C5F65] hover:text-zinc-400 duration-200"
            />
          ) : (
            <>
              <button
                onClick={async () => {
                  await updatePortion([
                    ...cards?.map((e) => {
                      if (e._id === editable?._id) return editable;
                      return e;
                    }),
                  ]);
                  setEditable(null);
                }}
              >
                Done
              </button>
            </>
          )}
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
                updatePortion([...cards, newClass]);
                setModalOpen(false);
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

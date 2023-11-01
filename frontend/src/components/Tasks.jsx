import React from "react";

const tasks = [
  {
    title: "ISE 1- SE Comps A",
  },
  {
    title: "Quiz- FE CSE A",
  },
  {
    title: "Lab Eval- TE Comps",
  },
];

const Tasks = () => {
  return (
    <div className="flex-col ml-20 mt-7">
      {tasks.map((task) => (
        <div className="bg-[#5932EA] m-4 rounded-xl py-2 px-4 hover:bg-[#54548C] cursor-pointer hover:font-bold text-white font-medium text-sm bottomShadow">
          {task.title}
        </div>
      ))}
    </div>
  );
};
export default Tasks;

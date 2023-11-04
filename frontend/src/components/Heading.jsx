import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="bg-white flex self-center justify-center shadowLittle w-1/2 rounded-2xl mt-4 text-lg font-bold text-[#5932EA] pt-2 h-[3rem]">
      {title}
    </div>
  );
};
export default Heading;

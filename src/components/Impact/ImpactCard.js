import React from "react";
import { MdPerson } from "react-icons/md";

const ImpactCard = () => {
  return (
    <div className="flex space-x-4 justify-between lg:space-x-12 ">
      <div className="flex flex-col items-center space-y-2">
        <div className="inline-flex items-start justify-start px-4 py-1 border rounded-full border-black self-start">
          <p className="text-sm font-semibold">2020</p>
        </div>
        <div className="w-0.5 lg:hidden bg-[#EBEBEB] h-full"></div>
      </div>
      <div className="flex-col items-center hidden lg:flex">
        <MdPerson className="text-[#404040] text-2xl mt-1 pb-3 box-content" />
        <div className="w-0.5 bg-[#EBEBEB] hidden lg:block h-full"></div>
      </div>
      <div className="flex flex-col lg:flex-row lg:w-[80%] space-y-6 lg:space-y-0 mb-10">
        <div className="inline-flex flex-col space-y-4 items-start justify-start lg:w-[40%] ">
          <div className="inline-flex gap-x-4 items-center">
            <MdPerson className="text-[#404040] text-2xl pb-3 box-content lg:hidden" />
            <p className="text-2xl font-semibold text-gray-900">Individual</p>
          </div>

          <p className="w-full text-base leading-relaxed text-gray-500">
            A member of the Class of 1988 donated fifty thousand Naira to
            support the graduate assistantship programme in 2021.
          </p>
          <div className="inline-flex md:space-x-4 space-x-2 items-start justify-start">
            <p className="text-xs font-medium text-gray-400">05 Jan, 2022</p>
            <p className="text-xs font-medium text-gray-400">|</p>
            <p className="text-xs font-medium text-gray-400">
              Completion status 100%
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] bg-[#B7E6FFF0] self-start h-[258px] border border-blue-200 border-opacity-95"></div>
      </div>
    </div>
  );
};

export default ImpactCard;

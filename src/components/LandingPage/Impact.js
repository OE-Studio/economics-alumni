import React from "react";
import { MdPerson, MdExpand } from "react-icons/md";

function ImpactCard() {
  return (
    <div className="flex justify-between flex-col lg:flex-row space-y-4 lg:space-y-0">
      <div className="flex space-x-4 lg:space-x-12 lg:w-[40%]">
      <div className="inline-flex items-start justify-start px-4 py-2 border rounded-full border-black self-start">
        <p className="text-base font-semibold">2020</p>
      </div>
      <div className="flex flex-col items-center">
        <MdPerson className="text-[#404040]" />
        <div className="w-0.5 bg-[#EBEBEB] h-full"></div>
      </div>
      <div className="inline-flex flex-col space-y-4 items-start justify-start lg:mb-10">
        <p className="text-2xl font-semibold text-gray-900">Individual</p>
        <p className="w-full text-base leading-relaxed text-gray-500">
          A member of the Class of 1988 donated fifty thousand Naira to support
          the graduate assistantship programme in 2021.
        </p>
        <div className="inline-flex space-x-4 items-start justify-start">
          <p className="text-xs font-medium text-gray-400">05 Jan, 2022</p>
          <p className="text-xs font-medium text-gray-400">|</p>
          <p className="text-xs font-medium text-gray-400">
            Completion status 100%
          </p>
        </div>
      </div>
      </div>
      <div className="w-full lg:w-1/2 bg-[#B7E6FFF0] self-start h-[258px] border rounded-2xl border-blue-200 border-opacity-95"></div>
    </div>
  );
}

function Impact() {
  return (
    <section className="container mx-auto p-4 pt-16 md:p-10 lg:p-20  space-y-12 lg:space-y-12 lg:pt-36">
      <p className="text-4xl font-bold">
        <span className="text-[#D0D0D0]">Track out recent </span>
        <br className="hidden lg:block" />
        impacts
      </p>
      <ImpactCard/>
      <ImpactCard/>
      <ImpactCard/>
      <ImpactCard/>

      <div className="flex justify-center">
      <div className="inline-flex items-center space-x-4 justify-center px-10 py-5 border rounded-lg border-black mx-auto self-center">
        <MdExpand/>
      <p class=" text-base font-bold">Track all impact</p>
      </div>
      </div>
    </section>
  );
}

export default Impact;

import React from "react";
import { RiSearchLine} from "react-icons/ri";

import ImpactCard from "./ImpactCard";





const ImpactList = () => {
  

  return (
    <section className="p-4 md:p-10 lg:px-20 pb-16 lg:pb-20 container mx-auto relative">
     <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-6">
        <p className="text-base font-semibold self-start lg:self-auto">Recent Impacts</p>
        <div className="border border-[#EDEDED] p-2 px-4 focus-within:border-[#7152ff] flex items-center space-x-4  w-full md:w-auto">
          <input
            type="search"
            placeholder="Search impacts title date or description..."
            className="w-full md:w-[350px] focus:outline-none placeholder:text-[#ABABAB] placeholder:font-medium font-medium"
          />
          <div className="w-0.5 h-full bg-[#f0f0f0]" />
          <RiSearchLine className="bg-[#F1F6FA] text-[#1C1B1F] p-2 box-content" />
        </div>
      </div>
      <div className="flex flex-col gap-y-8 mt-10 md:mt-16">
      <ImpactCard/>
      <ImpactCard/>
      <ImpactCard/>
      <ImpactCard/>
      </div>
    </section>
  );
};

export default ImpactList;

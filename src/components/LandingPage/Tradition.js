import React from "react";

import {
  MdMilitaryTech,
  MdAutoAwesome,
  MdBusinessCenter,
  MdFrontHand,
} from "react-icons/md";

const Tradition = () => {
  return (
    <section className="p-4 py-16 md:p-10 lg:px-20 lg:py-20 container mx-auto flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-between lg:pb-36 2xl:pb-60">
      <div className="flex flex-col space-y-9 lg:w-1/2 font-inter ">
        <p className="text-3xl md:text-4xl font-bold">
          <span className="text-[#D0D0D0]">We are known for: </span>
          <br className="hidden lg:block" />
          Leadership, Excellence, <br className="hidden lg:block" />
          Partnership and Impact.
        </p>
        <div className="flex flex-wrap gap-y-6">
          <div className="w-1/2 space-y-6">
            <div className="inline-flex items-center justify-center  p-3 bg-white shadow rounded-2xl">
              <MdMilitaryTech className="text-[#33B8FF] text-4xl" />
            </div>
            <p className="text-2xl font-semibold">Leadership</p>
            <p className="text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at
              bibendum sed tincidunt purus,{" "}
            </p>
          </div>
          <div className="w-1/2 space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 p-3.5 bg-white shadow rounded-2xl">
              <MdAutoAwesome className="text-[#FF6E1C] text-4xl" />
            </div>
            <p className="text-2xl font-semibold">Excellence</p>
            <p className="text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at
              bibendum sed tincidunt purus,{" "}
            </p>
          </div>
          <div className="w-1/2 space-y-6">
            <div className="inline-flex items-center justify-center p-3.5 bg-white shadow rounded-2xl box">
              <MdBusinessCenter className="text-[#64B300] text-4xl" />
            </div>
            <p className="text-2xl font-semibold">Partnership</p>
            <p className="text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at
              bibendum sed tincidunt purus,{" "}
            </p>
          </div>
          <div className="w-1/2 space-y-6">
            <div className="inline-flex items-center justify-center p-3.5 bg-white shadow rounded-2xl box">
              <MdFrontHand className="text-[#9747FF] text-4xl" />
            </div>
            <p className="text-2xl font-semibold">Impact</p>
            <p className="text-base leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at
              bibendum sed tincidunt purus,{" "}
            </p>
          </div>
        </div>

        {/* <button className="lg:self-start py-4 lg:px-10 bg-[#0075B3] text-lg font-semibold text-white">
          Find out more
        </button> */}
      </div>

      <div className="lg:w-[40%] bg-[#F8FCFF]"></div>
    </section>
  );
};

export default Tradition;

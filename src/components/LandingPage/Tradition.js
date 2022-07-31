import React from "react";

import {
  MdMilitaryTech,
  MdAutoAwesome,
  MdBusinessCenter,
  MdFrontHand,
} from "react-icons/md";

import tradition from "../../assets/image/tradition.png"

const Tradition = () => {
  return (
    <section className="p-4 py-16 md:p-10 lg:px-20 lg:py-20 container mx-auto lg:pb-36 2xl:pb-60 space-y-10">
      <p className="text-3xl md:text-4xl lg:text-[60px] lg:w-[70%] font-bold" style={{lineHeight: "105%"}}>
          <span className="text-[#D0D0D0]">We are known for: </span>Leadership, Excellence, 
          Partnership and Impact.
        </p>
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-between">
      <div className="flex flex-col space-y-9 lg:w-1/2 font-inter ">
        <div className="flex flex-wrap gap-10">
          <div className="md:w-[45%] space-y-4">
            <div className="inline-flex items-center justify-center  p-3 bg-[#EEF8FD]">
              <MdMilitaryTech className="text-[#33B8FF] text-4xl" />
            </div>
            <p className="text-2xl font-semibold">Leadership</p>
            <p className="text-sm leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at
              bibendum sed tincidunt purus,{" "}
            </p>
          </div>
          <div className="md:w-[45%] space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 p-3.5 bg-[#FFF5F0]">
              <MdAutoAwesome className="text-[#FF6E1C] text-4xl" />
            </div>
            <p className="text-2xl font-semibold">Excellence</p>
            <p className="text-sm leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at
              bibendum sed tincidunt purus,{" "}
            </p>
          </div>
          <div className="md:w-[45%] space-y-4">
            <div className="inline-flex items-center justify-center p-3.5 bg-[#F4FFE5] ">
              <MdBusinessCenter className="text-[#64B300] text-4xl" />
            </div>
            <p className="text-2xl font-semibold">Partnership</p>
            <p className="text-sm leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at
              bibendum sed tincidunt purus,{" "}
            </p>
          </div>
          <div className="md:w-[45%] space-y-4">
            <div className="inline-flex items-center justify-center p-3.5 bg-[#F6F0FF]">
              <MdFrontHand className="text-[#9747FF] text-4xl" />
            </div>
            <p className="text-2xl font-semibold">Impact</p>
            <p className="text-sm leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at
              bibendum sed tincidunt purus,{" "}
            </p>
          </div>
        </div>

        {/* <button className="lg:self-start py-4 lg:px-10 bg-[#0075B3] text-lg font-semibold text-white">
          Find out more
        </button> */}
      </div>

      <div className="lg:w-[40%] bg-[#dff1ff]">
      <img src={tradition} alt="" />
      </div>
      </div>
    </section>
  );
};

export default Tradition;

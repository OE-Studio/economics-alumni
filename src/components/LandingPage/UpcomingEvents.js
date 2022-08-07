import React from "react";
import "./UpcomingEvents.css";

import {
  MdOutlinePinDrop,
  MdOutlineAlarm,
  MdOutlineDateRange,
} from "react-icons/md";

function UpcomingEvents() {
  return (
    <div className="bg-[#F8FCFF] lg:pt-36 pt-20 font-inter">
      <section className="container mx-auto p-4 md:p-10 lg:p-20  space-y-12 lg:space-y-12 ">
        <p className="text-4xl lg:text-[64px] leading-[105%] font-bold ">
          <span className="text-[#D0D0D0]">Our upcoming </span>
          <br className="hidden lg:block" />
          events
        </p>
        <div className="flex flex-wrap lg:flex-nowrap overflow-scroll w-auto md:gap-[25px] gap-[1%] flex-col md:flex-row space-y-6 md:space-y-0">
          <div className="md:w-[330px] lg:w-[340px] bg-white shadow-2xl shadow-[#0000000F] p-[22px] space-y-[24px] lg:space-y-[60px]">
            <div className="space-y-[24px]">
              <div className="h-[146px] bg-[#F0F8FF] border border-[#007DF0]"></div>
              <div className="space-y-[12px]">
                <p className="transform text-xs font-medium text-gray-400 uppercase">
                  Event title
                </p>
                <p className="transform lg:text-[18px] xl:text-2xl font-medium leading-tight text-gray-600">
                  The event title comes here and truncates when it is longer
                  than this character...
                </p>
              </div>
            </div>
            <div className="space-y-[14px]">
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlineDateRange className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlineAlarm className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlinePinDrop className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <button className="bg-[#007DF0] text-white uppercase w-full p-3 font-medium">
Button Text
              </button>
            </div>
          </div>
          <div className="md:w-[330px] lg:w-[340px] bg-white shadow-2xl shadow-[#0000000F] p-[22px] space-y-[24px] lg:space-y-[60px] flex flex-col justify-between">
            <div className="space-y-[40px]">
              <div className="h-[64px] w-[64px] rounded-full bg-[#F0F8FF] border-[2.41px] border-[#007DF0]"></div>
              <div className="space-y-[12px]">
                <p className="transform text-xs font-medium text-gray-400 uppercase">
                  Event title
                </p>
                <p className="transform lg:text-[18px] xl:text-2xl font-medium leading-tight text-gray-600">
                  The event title comes here and truncates when it is longer
                  than this character...
                </p>
              </div>
            </div>
            <div className="space-y-[14px]">
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlineDateRange className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlineAlarm className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlinePinDrop className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <button className="bg-[#007DF0] text-white uppercase w-full p-3 font-medium">
Button Text
              </button>
            </div>
          </div>

          <div className="md:w-[330px] lg:w-[340px] bg-white shadow-2xl shadow-[#0000000F] p-[22px] space-y-[24px] lg:space-y-[60px] flex flex-col justify-between">
            <div className="space-y-[40px]">
              <div className="space-y-[12px]">
                <p className="transform text-xs font-medium text-gray-400 uppercase">
                  Event title
                </p>
                <p className="transform lg:text-[18px] xl:text-2xl font-medium leading-tight text-gray-600">
                  The event title comes here and truncates when it is longer
                  than this character...
                </p>
              </div>
              <div className="flex -space-x-[19px]">
              <div className="h-[64px] w-[64px] rounded-full bg-[#F0F8FF] border-[2.41px] border-[#007DF0]"></div>
              <div className="h-[64px] w-[64px] rounded-full bg-[#F0F8FF] border-[2.41px] border-[#007DF0]"></div>
              <div className="h-[64px] w-[64px] rounded-full bg-[#F0F8FF] border-[2.41px] border-[#007DF0]"></div>
              <div className="h-[64px] w-[64px] rounded-full bg-[#F0F8FF] border-[2.41px] border-[#007DF0]"></div>
              </div>
            </div>
            <div className="space-y-[14px]">
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlineDateRange className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlineAlarm className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <div className="border-b border-[#CAEDFF] py-2 flex items-center space-x-2 ">
                <MdOutlinePinDrop className="text-[#007DF0]" />
                <div className="h-[20px] w-[1px] bg-[#4b8cad]" />
              </div>
              <button className="bg-[#007DF0] text-white uppercase w-full p-3 font-medium">
Button Text
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpcomingEvents;

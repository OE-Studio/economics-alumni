import React from "react";
import { HiUserGroup } from "react-icons/hi";
import {
  MdEventNote,
  MdFrontHand,
} from "react-icons/md";


function Update() {
  return (
    <section className="container mx-auto p-4 md:p-10 lg:px-20 lg:pt-0 w-screen">
      <div className=" flex flex-col md:flex-row bg-[#F8FCFF] rounded-lg w-full justify-between  lg:px-20 lg:py-20 p-10 px-11 space-y-16 lg:space-y-0">
        <div className="flex space-x-6 lg:space-x-8  ">
          <MdEventNote className="text-[#FB9600] bg-white p-4 shadow-lg rounded-xl text-2xl box-content aspect-square" />
          <div className="flex flex-col">
            <p className=" text-5xl 2xl:text-7xl leading-none">1986</p>
            <p className="lg:text-lg leading-none text-gray-400">
              Year established
            </p>
          </div>
        </div>

        <div className="flex space-x-6  lg:space-x-8 ">
          <HiUserGroup className="text-[#FB9600] bg-white p-4 shadow-lg rounded-xl text-2xl box-content aspect-square" />
          <div className="flex flex-col">
            <p className="text-5xl 2xl:text-7xl leading-none">1000+</p>
            <p className="lg:text-lg leading-none text-gray-400">
              Members
            </p>
          </div>
        </div>

        <div className="flex space-x-6 lg:space-x-8">
          <MdFrontHand className="text-[#FB9600] bg-white p-4 shadow-lg rounded-xl text-2xl box-content aspect-square" />
          <div className="flex flex-col">
            <p className="text-5xl 2xl:text-7xl leading-none">50+</p>
            <p className="lg:text-lg leading-none text-gray-400">
              Impact
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Update;
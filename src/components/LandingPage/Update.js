import React from "react";
import { HiUserGroup } from "react-icons/hi";
import {
  MdEventNote,
} from "react-icons/md";
import FootPrintUpdate from "../icons/FootPrintUpdate";


function Update() {
  return (
    <section className="container mx-auto pt-0 p-4 md:p-6 md:pt-0 lg:px-20 pb-10 lg:pt-0 w-screen">
      <div className=" flex flex-col md:flex-row bg-[#F8FCFF]  w-full justify-between shadow-2xl shadow-[#0000000F]  lg:px-20 lg:py-20 p-10 px-11 space-y-16 md:space-y-0">
        <div className="flex space-x-6 lg:space-x-8  " data-aos="fade-up" data-aos-delay="100">
          <MdEventNote className="text-[#FB9600] bg-white p-4 shadow-xl shadow-[#0000000D] text-2xl box-content aspect-square" />
          <div className="flex flex-col">
            <p className=" text-5xl md:text-4xl lg:text-5xl 2xl:text-7xl leading-none">1958</p>
            <p className="lg:text-lg leading-none text-gray-400">
              Year established
            </p>
          </div>
        </div>

        <div className="flex space-x-6  lg:space-x-8 " data-aos="fade-up" data-aos-delay="200">
          <HiUserGroup className="text-[#FB9600] bg-white p-4 shadow-xl shadow-[#0000000D]  text-2xl box-content aspect-square" />
          <div className="flex flex-col">
            <p className="text-5xl md:text-4xl lg:text-5xl 2xl:text-7xl leading-none">1000+</p>
            <p className="lg:text-lg leading-none text-gray-400">
              Members
            </p>
          </div>
        </div>

        <div className="flex space-x-6 lg:space-x-8" data-aos="fade-up" data-aos-delay="300">
          <FootPrintUpdate className="text-[#FB9600] bg-white p-4 shadow-xl shadow-[#0000000D] text-2xl box-content aspect-square" />
          <div className="flex flex-col">
            <p className="text-5xl md:text-4xl lg:text-5xl 2xl:text-7xl leading-none">17+</p>
            <p className="lg:text-lg leading-none text-gray-400">
              Footprint
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Update;
import React from "react";
import { RiSearchLine, RiLandscapeFill } from "react-icons/ri";

function NewsletterCard() {
  return (
    <div className="border w-full  md:w-[48%] lg:w-[23.3%] font-inter">
      <div className="flex items-center justify-center overflow-hidden h-[180px]">
        <RiLandscapeFill className="bg-[#F8F8F8] box-content text-3xl p-4" />
      </div>
      <div className="flex flex-col space-y-20 p-3.5 bg-[#F8F8F8]">
        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-300">15/08/2022</p>
          <p className="text-sm font-medium">
            New letter header and Tilte comes here </p>
          <p className="text-xs font-medium">Short descrption comes here (if any)...</p>
        </div>
        <p className="text-sm font-semibold text-blue-600 uppercase">
          Download
        </p>
      </div>
    </div>
  );
}

const NewsletterList = () => {
  return (
    <section className="p-4 md:p-10 lg:px-20 pb-16 lg:pb-20 container mx-auto">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-6">
        <p className="text-base font-semibold self-start lg:self-auto">Recent Newsletter</p>
        <div className="border border-[#EDEDED] p-2 px-4 focus-within:border-[#7152ff] flex items-center space-x-4  w-full md:w-auto">
          <input
            type="search"
            placeholder="Search newsletter title date or description..."
            className="w-full md:w-[350px] focus:outline-none placeholder:text-[#ABABAB] placeholder:font-medium font-medium"
          />
          <div className="w-0.5 h-full bg-[#f0f0f0]" />
          <RiSearchLine className="bg-[#F1F6FA] text-[#1C1B1F] p-2 box-content" />
        </div>
      </div>
      <div className="flex flex-wrap gap-[25px] mt-10 md:mt-20">
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
        <NewsletterCard />
      </div>
    </section>
  );
};

export default NewsletterList;

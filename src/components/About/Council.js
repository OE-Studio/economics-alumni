import React from "react";

import { council } from "../../assets/council";

function CouncilMember({ image, name }) {
  return (
    <div className="w-[180px] lg:w-[200px] shadow-xl shadow-[#0000000D]">
      <img src={image} alt="" />
      <div className="bg-white p-6">
        <p className=" md:text-lg lg:text-xl font-light">{name}</p>
      </div>
    </div>
  );
}

const Council = () => {
  return (
    <section className="mt-10 p-4 md:p-10 lg:px-16 pb-0 md:pb-0 container mx-auto" id="coucilMember">
      <div className="space-y-5">
        <p className="text-4xl lg:text-[48px] leading-[105%] font-bold">
          <span className="text-[#D0D0D0]">Members of the </span>
          <br className="hidden lg:block" />
          Interim Alumni Council
        </p>

        <p className="text-base leading-relaxed text-gray-500 hidden lg:block">
          The following are the members of the Interim Council of the UI Eco
          Alumni:
        </p>

        <hr className="w-full h-0.5 bg-gray-100" />
      </div>

      <div className="h-6 lg:h-10"></div>

      <div className="flex flex-wrap gap-[20px] lg:gap-[36px]">
        {council.map((councilMember, index) => {
          return (
            <CouncilMember
              name={councilMember.name}
              image={councilMember.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Council;

import React from "react";
import director from "../../assets/image/director.png";

function Director() {
  return (
    <div className="">
      <section className="container mx-auto p-4 md:px-10 lg:px-20 lg:py-10 w-full space-y-6 lg:space-y-20">
      <p className="text-4xl font-bold">
          <span className="text-[#D0D0D0]">Welcome address from </span>
          <br className="hidden lg:block" />
          the chairman
        </p>
        <div className="flex flex-col lg:flex-row items-center rounded-xl shadow-2xl overflow-hidden">
          <div className="lg:w-[45%]">
            <img src={director} alt="" className="w-full" />
          </div>
          <div className="director-detail-container mx-auto text-center md:text-left p-5 lg:w-1/2">
            <div className="p-5 lg:p-0 space-y-6 md:space-y-6">
              <p className="text-2xl md:text-4xl">Dr Ayo Teriba</p>
              <p className="">Chairman Economics Alumni, UI</p>
              <hr />
              <p className="text-sm leading-relaxed text-gray-800">
              I and members of the Interim Council of UI Eco Alumni are pleased to accept the responsibility to do the groundwork needed to get much esteemed alumni from all class sets better connected and well informed of the situation with the facilities, students, and staff of our highly treasured Economics Department as we approach our maiden Homecoming/Reunion where we will all elect the Council. 
              </p>
              <button className="inline-flex items-center justify-center px-10 py-4 bg-[#0075B3] rounded-lg text-white font-campton">Read More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Director;

import React from "react";
import director from "../../assets/image/director.png";
import {Link} from "react-router-dom"

function Director() {
  return (
    <div className="">
      <section className="container mx-auto p-4 md:px-10 lg:px-20 lg:py-10 w-full space-y-6 lg:space-y-20">
        <p className="text-4xl lg:text-[64px] leading-[105%] font-bold" data-aos="fade-up" data-aos-delay="100">
          <span className="text-[#D0D0D0]">Welcome address from </span>
          <br className="hidden lg:block" />
          the chairman
        </p>
        <div className="flex flex-col lg:flex-row items-center shadow-2xl shadow-[#00000008] overflow-hidden">
          <div className="lg:w-[45%]">
            <img src={director} alt="" className="w-full" />
          </div>
          <div className="director-detail-container mx-auto text-left md:text-left p-5 lg:w-1/2">
            <div className="p-5 lg:p-0 space-y-6 md:space-y-6">
              <p className="text-2xl md:text-4xl">Dr Ayo Teriba</p>
              <p className="text-[#6C6C6C]">Chairman Economics Alumni, UI</p>
              <hr />
              <p className="text-sm leading-relaxed text-[#737373]">
                I and members of the Interim Council of UI Eco Alumni are pleased to accept the responsibility to do the groundwork needed to get much esteemed alumni from all class sets better connected and well informed of the situation with the facilities, students, and staff of our highly treasured Economics Department as we approach our maiden Homecoming/Reunion where we will all elect the Council.
              </p>
              <Link to="/about" className="flex lg:inline-flex items-center justify-center px-10 py-3 bg-[#0075B3] text-white font-campton">Read More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Director;

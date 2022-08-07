import React from "react";

import { Outlet } from "react-router-dom";
import {} from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";

import SideBar from "./SideBar";
import MobileNav from "./MobileNav";
const Dashboard = () => {
  return (
    <>
      {/* Sidebar */}
      <SideBar />
      {/* Main Dashboard */}
      <section className="md:ml-[100px] lg:ml-[284px] font-inter">
        <MobileNav />
        {/* Top Section */}
        <div className="hidden md:flex p-[20px] md:p-0 md:px-[40px] lg:px-[60px] md:h-[96px] w-full  justify-between items-center border-b">
          <p className="text-base font-medium">Admin panel</p>
          <div className="h-[32px] w-[32px] bg-[#F9F9F9] flex items-center justify-center">
            <MdOutlinePerson className="text-xl" />
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default Dashboard;

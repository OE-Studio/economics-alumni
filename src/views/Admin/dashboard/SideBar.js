import React from "react";
import logo from "../../../assets/image/logo.svg";
import logoPortraitTab from "../../../assets/dashboard-assets/logoOnly.png";
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineSpaceDashboard,
  MdOutlineFilterHdr,
  MdOutlineFeed,
  MdOutlineVolunteerActivism,
  MdOutlineBadge,
  MdOutlineLogout,
  MdOutlineCalendarToday,
} from "react-icons/md";

const links = [
  {
    name: "Overview",
    to: "/dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    name: "Images",
    to: "/dashboard/images",
    icon: <MdOutlineFilterHdr />,
  },
  {
    name: `Newsletter`,
    to: "/dashboard/newsletter",
    icon: <MdOutlineFeed />,
  },
  {
    name: "Footprints",
    to: "/dashboard/impacts",
    icon: <MdOutlineVolunteerActivism />,
  },
  {
    name: "Upcoming events",
    to: "/dashboard/events",
    icon: <MdOutlineCalendarToday />,
  },
  {
    name: "Members",
    to: "/dashboard/members",
    icon: <MdOutlineBadge />,
  },
];

function SideLinks({ to, name, icon }) {
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const active = to !== "#" && location[2] === to.split("/")[2];
  const tabBg = active && "bg-[#F3F3F3]"
  return (
    <Link to={to} className={`w-full flex ${tabBg}  items-center justify-between lg:pl-[40px] `}>
      <div className="flex md:flex-col lg:flex-row items-center justify-center py-[10px] md:w-[90%] lg:w-auto">
        <div className="h-[24px] w-[24px] self-center flex items-center justify-center text-2xl box-content md:my-[10px] lg:my-0">
          {icon}
        </div>
        <p className="text-[10px] lg:text-base font-medium ml-[12px] text-center leading-tight">{name}</p>
      </div>
     {active && <div className="w-[6px] block lg:h-[44px] md:h-[80px] bg-black" />}
    </Link>
  );
}

const SideBar = () => {
  return (
    <section className="fixed md:w-[100px]  lg:w-[284px] top-0 h-full left-0 border hidden md:block font-inter bg-[#f9f9f9] border-[#c3c3c3] z-50">
      <Link to="/dashboard" className="lg:px-[40px] pt-[18px] pb-[53px]  block w-full ">
        <div className="lg:border p-2">
        <img src={logo} alt="" className=" hidden lg:block " />
        <img src={logoPortraitTab} alt="" className=" lg:hidden " />
        </div>
      </Link>

      <div>
        {links.map((link, index) => {
          return (
            <SideLinks
              key={index}
              name={link.name}
              to={link.to}
              icon={link.icon}
            />
          );
        })}
      </div>


      <div className="flex items-center lg:pl-[40px] py-[10px] md:mt-[20vh] lg:mt-[30vh] 2xl:mt-[50vh]">
      <div className="flex md:flex-col lg:flex-row items-center justify-center py-[10px] md:w-[80%] lg:w-auto">
        <div className="h-[24px] w-[24px] flex items-center justify-center text-2xl box-content md:my-[10px] lg:my-0">
          <MdOutlineLogout/>
        </div>
        <p className="text-[10px] lg:text-base font-medium ml-[12px] text-center">Logout</p>
      </div>
      </div>
    </section>
  );
};

export default SideBar;

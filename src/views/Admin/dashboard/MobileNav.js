import React from "react";
import logo from "../../../assets/image/logo.svg";
// eslint-disable-next-line
import { Link, useLocation } from "react-router-dom";
import {
  MdOutlineSpaceDashboard,
  MdOutlineFilterHdr,
  MdOutlineFeed,
  MdOutlineVolunteerActivism,
  MdOutlineBadge,
  MdOutlinePerson,
  MdOutlineMenu,
  MdOutlineCalendarToday,
  // eslint-disable-next-line
  MdOutlineLogout,
} from "react-icons/md";

// eslint-disable-next-line
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
    name: "Images",
    to: "/dashboard/impact",
    icon: <MdOutlineVolunteerActivism />,
  },
  {
    name: "Upcoming events",
    to: "/dashboard/events",
    icon: <MdOutlineCalendarToday />,
  },
  {
    name: "Members",
    to: "/dashboard/impact",
    icon: <MdOutlineBadge />,
  },
];

const MobileNav = () => {
  return (
    <div className="md:hidden p-[20px] flex justify-between items-center bg-white sticky top-0">
        <div className="border p-2 w-[50%]">
        <img src={logo} alt=""  className=""/>
        </div>
        <div className="flex space-x-[24px]">
            <div className="h-[32px] w-[32px] bg-[#F9F9F9] flex items-center justify-center">
            <MdOutlinePerson className="text-xl"/>
            </div>
            <div className="h-[32px] w-[32px] bg-[#F9F9F9] flex items-center justify-center">
            <MdOutlineMenu className="text-xl"/>
            </div>
        </div>
    </div>
  )
}

export default MobileNav
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
  MdClose,
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

function SideLinks({ to, name, icon, toggleMenu }) {
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const active = to !== "#" && location[2] === to.split("/")[2];
  const tabBg = active && "";
  return (
    <Link
      to={to}
      className={`flex ${tabBg}  items-center justify-between lg:pl-[40px] px-4 `}
      onClick={toggleMenu}
    >
      <div className="flex md:flex-col lg:flex-row items-center justify-center py-[10px] md:w-[90%] lg:w-auto text-[#242424]">
        <div className="h-[24px] w-[24px] self-center flex items-center justify-center text-2xl box-content md:my-[10px] lg:my-0">
          {icon}
        </div>
        <p className=" text-base font-medium ml-[12px] text-center leading-tight">
          {name}
        </p>
      </div>
      {active && (
        <div className="w-[6px] block lg:h-[44px] md:h-[80px] bg-black" />
      )}
    </Link>
  );
}

const MobileNav = () => {

  const [menu, setMenu] = React.useState(false)

  const toggleMenu = ()=>{
    setMenu(!menu)
  }

  return (
    <div className="md:hidden p-[20px] flex justify-between items-center bg-white sticky top-0 h-[12vh] z-50">
      <div className="border p-2 w-[50%] ">
        <img src={logo} alt="" className="" />
      </div>
      <div className="flex space-x-[24px]">
        <div className="h-[32px] w-[32px] bg-[#F9F9F9] flex items-center justify-center">
          <MdOutlinePerson className="text-xl" />
        </div>
        <div className="h-[32px] w-[32px] bg-[#F9F9F9] flex items-center justify-center" onClick={toggleMenu}>
          {menu ? <MdClose className="text-xl" /> : <MdOutlineMenu className="text-xl" />}
        </div>
      </div>

      
        {menu && <div className="flex flex-col space-y-5 absolute w-[100vw] top-[12vh] bg-white pb-5 pr-4 
        z-50">
          {links.map((link, index) => {
            return (
              <SideLinks
                key={index}
                name={link.name}
                to={link.to}
                icon={link.icon}
                toggleMenu={toggleMenu}
              />
            );
          })}
        </div>}
      
    </div>
  );
};

export default MobileNav;

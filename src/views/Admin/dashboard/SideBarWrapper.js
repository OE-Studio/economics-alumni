import React from "react";
// import BellIcon from './assets/bellIcon.svg'
import { RiCloseLine } from "react-icons/ri";

const SideBarWrapper = ({ toggleNotification, toggle, children }) => {
  const notificationClass = toggle
    ? " left-0 fixed"
    : " -right-0 fixed hidden";
  return (
    <div
      className={`transition duration-1000 ease-in-out ${notificationClass} z-30  w-full  lg:w-screen md:h-screen bg-[#545050ae] backdrop-blur-[5px] bg-white top-0`}
    >
      <div className="lg:w-124 md:w-[80vw] md:h-[70vh] lg:h-[75vh] mt-[3vh] overflow-y-scroll bg-white md:pb-10 pb-20 px-8 mx-auto">
        <div className="w-full h-20 2xl:h-32 flex items-center sticky top-0 right-0 bg-white">
          <div className="flex items-center justify-end relative w-full">
            <div
              className="flex items-center justify-center cursor-pointer p-2 bg-indigo-50 rounded-lg"
              onClick={toggleNotification}
            >
              <RiCloseLine className="text-lg" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SideBarWrapper;
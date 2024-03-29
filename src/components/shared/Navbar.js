// import logo from "../../assets/image/logoHeader.svg";
import logoImpact from "../../assets/image/logoImpactNew.svg";
import logoMain from "../../assets/image/logoMain.svg";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HiMenu, HiX } from "react-icons/hi";
import "./navbar.css";

const links = [
  {
    name: "Impact",
    to: "/impact",
  },
  {
    name: "About us",
    to: "/about",
  },
  {
    name: "Gallery",
    to: "/gallery",
  },
  {
    name: "Newsletter",
    to: "/newsletter",
  },
  {
    name: "Give",
    to: "/give",
  },
];

function NavLink(props) {
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const navTextColor =
    location[1] === "impact" ? `lg:text-black` : `lg:text-white`;
  const indicatorColor =
    location[1] === "impact" ? `bg-[#000]` : `bg-[#ECD844]`;

  const navClassName =
    location[1] === props.to.split("/")[1]
      ? `nav-link text-3xl py-5 px-4 lg:px-0 lg:py-0 lg:text-sm ${navTextColor}  active-nav-link block`
      : `nav-link text-3xl border-b  py-5 px-4 lg:px-0 lg:py-0 lg:text-sm ${navTextColor} block`;

  return (
    <li className="flex flex-col items-center mt-3 lg:mt-0">
      <Link to={props.to} className={navClassName} onClick={props.clickHandler}>
        {props.name}
      </Link>
      <div className="lg:hidden bg-gray-100 w-full h-0.5 mt-2"/>
      {location[1] === props.to.split("/")[1] && (
        <div
          className={`hidden lg:inline-block ${indicatorColor} w-1.5 h-1.5 rounded-full -mt-2`}
        ></div>
      )}
    </li>
  );
}

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const { pathname } = useLocation();
  const location = pathname.split("/");
  const portalBGColor =
    location[1] === "impact" ? `bg-[#0075B3]` : `bg-[#ECD844]`;
  const textColor = location[1] === "impact" ? `text-white` : `text-[#004A71]`;

  const clickHandler = () => {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      navToggle ? setNavToggle(false) : setNavToggle(true);
    }
  };

  React.useEffect(() => {
    navToggle
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [navToggle]);

  const navTextColor = location[1] === "impact" ? `text-black` : `text-white`;
  const navMenuContainer = navToggle
    ? "nav-menu-container  active-nav-menu bg-white lg:bg-transparent"
    : "nav-menu-container  gap-4 bg-white lg:bg-transparent";
  return (
    <section className="p-4 md:px-10 lg:px-20 container mx-auto">
      <nav className="flex py-4 justify-between items-center relative z-20">
        <Link to="/" className="inline-block w-[60%] lg:w-auto">
          <img
            src={location[1] === "impact" ? logoImpact : logoMain}
            alt=""
            className="z-30  md:w-1/3 lg:w-52"
          />
        </Link>

        <HiMenu
          style={{
            fontSize: "24px",
            textColor: "white",
          }}
          className={`nav-toggle-icon text-2xl text-white lg:hidden ${navTextColor}`}
          onClick={clickHandler}
        />


        <ul className={navMenuContainer}>
        <HiX
            className={`nav-toggle-icon text-2xl text-black lg:hidden self-end p-10`}
            onClick={clickHandler}
          />

          {links.map((link, index) => {
            return (
              <NavLink
                key={index}
                name={link.name}
                to={link.to}
                clickHandler={clickHandler}
              />
            );
          })}
          <Link to='/register'
            className={`ml-3 flex w-[95%] mx-auto mt-2 lg:w-auto items-center justify-center px-6 py-6 lg:py-3 ${portalBGColor} self-center`}
            onClick={clickHandler}
          >
            <p className={`lg:text-sm font-semibold ${textColor} font-campton`}>
              Register
            </p>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

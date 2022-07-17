import logo from "../../assets/image/logoHeader.svg";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import "./navbar.css";

const links = [
  {
    name: "About us",
    to: "/about-us",
  },
  {
    name: "Contact Us",
    to: "/contact-us",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Events",
    to: "/events",
  },
  {
    name: "Gallery",
    to: "/gallery",
  },
];

function NavLink(props) {
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const navClassName =
    location[1] === props.to.split("/")[1]
      ? "nav-link  active-nav-link"
      : "nav-link text-white";

  return (
    <li>
      <Link to={props.to} className={navClassName} onClick={props.clickHandler}>
        {props.name}
      </Link>
    </li>
  );
}

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const clickHandler = () => {
    setNavToggle(!navToggle);
  };

  const navMenuContainer = navToggle
    ? "nav-menu-container active-nav-menu bg-white lg:bg-transparent"
    : "nav-menu-container bg-white lg:bg-transparent";
  return (
    <section className="p-4 md:px-10 lg:px-20 container mx-auto">
      <nav className="flex p-4 justify-between items-center relative z-20">
        <Link to="/">
          <img src={logo} alt="" className="z-30 w-2/3  md:w-1/3 lg:w-52" />
        </Link>

        <HiMenu
          style={{
            fontSize: "24px",
            textColor: "white"
          }}
          className="nav-toggle-icon text-white lg:hidden"
          onClick={clickHandler}
        />

        <ul className={navMenuContainer}>
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
          <div
            className="inline-flex items-center justify-center px-6 pt-3.5 pb-3 bg-yellow-300 rounded-lg"
            clickHandler={clickHandler}
          >
            <p className="text-sm font-bold text-blue-900">Alumni Portal</p>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

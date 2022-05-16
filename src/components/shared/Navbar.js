import logo from "../../assets/image/logo.svg";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import "./navbar.css"

const links = [
  {
    name: "About",
    to: "/about",
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

  {
    name: "Alumni Portal",
    to: "/portal",
  },
];

function NavLink(props) {
  const { pathname } = useLocation();
  const location = pathname.split("/");

  const navClassName =
    location[1] === props.to.split("/")[1]
      ? "nav-link  active-nav-link"
      : "nav-link ";

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
    setNavToggle(!navToggle)
  };

  const navMenuContainer = navToggle
    ? "nav-menu-container active-nav-menu bg-white"
    : "nav-menu-container bg-white";
  return (
    <section className="p-4 md:px-10 lg:px-20 container mx-auto">
      <nav className="flex p-4 justify-between items-center relative z-20">
        <Link to="/">
          <img src={logo} alt="" className="w-1/2 md:w-1/3 lg:w-52"/>
        </Link>

        <HiMenu
          style={{
            fontSize: "24px",
          }}
          className="nav-toggle-icon lg:hidden"
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
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

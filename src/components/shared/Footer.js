import React from "react";
import logo from "../../assets/image/footerLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="bg-[#747474]">

    <section className="container mx-auto p-4 py-10 md:p-10 lg:p-16 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
      <Link to="/">
        <img src={logo} alt="" className="w-1/2 md:w-1/3 lg:w-52 mx-auto" />
      </Link>

      <div className="inline-flex space-x-14 items-center justify-center">
        <p className="text-lg font-medium leading-relaxed text-center text-white lg:text-left">
          All rigths resrvered
        </p>
        <p className="text-lg font-medium leading-relaxed text-center text-white">
          ©2022
        </p>
      </div>
    </section>
      </div>
  );
};

export default Footer;

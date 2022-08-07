import React from "react";
import logo from "../../assets/image/footerLogo.svg";
import { Link } from "react-router-dom";
import globe from "../../assets/image/globeFooter.svg";
import facebook from "../../assets/image/SocialMedia/facebook.svg";
import instagram from "../../assets/image/SocialMedia/instagram.svg";
import linkedin from "../../assets/image/SocialMedia/linkedin.svg";
import twitter from "../../assets/image/SocialMedia/twitter.svg";
import telegram from "../../assets/image/SocialMedia/telegram.svg";

const Footer = () => {
  return (
    <div className="bg-[#747474] relative overflow-hidden font-inter ">
      <img src={globe} alt="" className="absolute top-[80%]" />
      <section className="container mx-auto p-4 py-10 md:p-10 lg:p-16 pb-60 md:pb-48 lg:pb-0 space-y-[58px]">
        <div>
          <div className="flex flex-col gap-[58px] lg:gap-0 md:flex-row flex-wrap lg:justify-between lg:items-center">
            <div className="space-y-4">
              <p className="text-lg font-medium text-[#b5b5b5]">
                Connect with us
              </p>
              <div className="flex space-x-[19px]">
                <a href="/#">
                  <img src={facebook} alt="" />
                </a>
                <a href="/#">
                  <img src={instagram} alt="" />
                </a>
                <a href="/#">
                  <img src={linkedin} alt="" />
                </a>
                <a href="/#">
                  <img src={twitter} alt="" />
                </a>
                <a href="/#">
                  <img src={telegram} alt="" />
                </a>
              </div>
              <p className="text-2xl font-semibold text-gray-400">
                (+234)816 190 4403
              </p>
            </div>
            <div>
              <div className="inline-flex gap-[32px] md:gap-[20px] lg:gap-0 xl:gap-12 items-center flex-wrap lg:justify-center">
                <Link
                  to="/impact"
                  className=" w-[78px] md:text-sm font-medium text-gray-400"
                >
                  Impact
                </Link>
                <Link
                  to="/about"
                  className=" w-[78px] md:text-sm font-medium text-gray-400"
                >
                  About us
                </Link>
                <Link
                  to="/gallery"
                  className=" w-[78px] md:text-sm font-medium text-gray-400"
                >
                  Gallery
                </Link>
                <Link
                  to="/newsletter"
                  className=" w-[78px] md:text-sm font-medium text-gray-400"
                >
                  Newsletter
                </Link>
                <Link
                  to="/give"
                  className=" w-[78px] md:text-sm font-medium text-gray-400"
                >
                  Give
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center px-6 py-3 bg-gray-400"
                >
                  <p className="text-sm font-bold text-gray-500">
                    Alumni Registration
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between md:space-y-0">
          <Link to="/" className="w-1/2  lg:w-52">
            <img src={logo} alt="" className="" />
          </Link>

          <div className="inline-flex lg:space-x-14 items-center justify-center">
            <p className=" font-medium leading-relaxed text-center text-gray-300">
              All rigths resrvered
            </p>
            <p className=" font-medium leading-relaxed text-center text-gray-300">
              ©2022
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

import React from "react";
import gallery from "../../assets/image/gallery.svg";
import registration from "../../assets/image/registration.svg";
import newsletter from "../../assets/image/newsletter.png";
import { Link } from "react-router-dom"


import { MdNorthEast } from "react-icons/md";

const Actions = () => {
  return (
    <section className="container mx-auto p-4 pt-16 md:p-10 lg:p-20  space-y-12 lg:space-y-12 lg:pt-36">
      <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row justify-between">
        <div className="flex flex-col galleryGrad shadow justify-between lg:w-[35%]">
          <div className="p-10 lg:p-16  lg:pb-0 space-y-6">
            <p className=" text-4xl font-bold text-white">See our gallery</p>
            <p className=" text-base font-medium leading-relaxed text-white">
              Past events, organised workshops, and strategic meetings. See all
              our events in pictures.{" "}
            </p>

            <Link to="/gallery" className="font-bold text-[#ECD844] uppercase inline-flex items-center border-b-2 border-yellow-300">
              Gallery
              <span className="ml-2">
                <MdNorthEast className="font-bold" />
              </span>
            </Link>
          </div>
          <div className="-mb-[10%] w-full relative">
            <img src={gallery} alt="" className="" />
          </div>
        </div>

        <div className="flex flex-col lg:w-[63%] space-y-10">
          <div className="flex  registrationGrad shadow  w-full justify between md:flex-row flex-col">
            <div className="flex flex-col md:w-[56%] p-10 lg:p-12 lg:pr-0 space-y-6">
              <p className="text-3xl font-bold text-white">
                Alumni registration
              </p>
              <p className="text-base font-medium leading-relaxed text-white">
                The UI ECO Alumni is updating records of each alumnus of the UI
                department of Economics. If you have not registered, please take
                a few minutes to do so.
              </p>
              <p className=" font-bold text-[#ECD844] uppercase inline-flex items-center self-start border-b-2 border-yellow-300">
                Register
                <span className="ml-2">
                  <MdNorthEast className="font-bold" />
                </span>
              </p>
            </div>
            <div className="md:w-[44%]">
              <img src={registration} alt="" />
            </div>
          </div>

          <div className="flex  newsletterGrad shadow  w-full justify between md:flex-row flex-col">
            <div className="md:w-[44%] -mb-1 self-end ">
              <img src={newsletter} alt="" className="w-full" />
            </div>
            <div className="flex flex-col md:w-[56%] p-10 lg:p-6 lg:pr-6 space-y-6">
              <p className="text-4xl font-bold">Our newsletter</p>
              <p className="text-base font-medium leading-relaxed text-gray-700">
                Be informed of the University of Ibadan, newsworthy events,
                activities, achievements of the department, its current
                students, and its alumni.
              </p>
              <Link to="/newsletter" className="font-bold text-[#9747FF] uppercase inline-flex items-center self-start border-b-2 border-[#9747FF]">
                newsletter
                <span className="ml-2">
                  <MdNorthEast className="font-bold" />
                </span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;

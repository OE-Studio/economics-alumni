import React from "react";
import hero from "../../assets/image/heroImg.svg";

const Hero = () => {
  return (
    <section className="p-4 md:p-10 lg:px-16 container mx-auto font-campton">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex flex-col space-y-9 w-full lg:w-1/2">
          <p className="text-4xl lg:text-5xl font-semibold text-center lg:text-left  lg:leading-tight">
            Economic <br />
            Department, UI <br />
            Alumni & Friends.{" "}
          </p>
          <p className="w-3/4 mx-auto text-lg font-book leading-relaxed text-center lg:text-left lg:mx-0 text-gray-500">
            Sustaining an enduring legacy of leadership & excellence.{" "}
          </p>
          <button className="lg:self-start py-4 lg:px-10 bg-[#0075B3] text-lg font-semibold text-white">
            Find out more
          </button>
        </div>

        <div>
            <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

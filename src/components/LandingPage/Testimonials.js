import React from "react";
import yellow from "../../assets/image/yellow.svg"

const Testimonials = () => {
  return (
    <section className="bg-[#F9F9F9] font-campton relative">

      <div className="container mx-auto p-4 md:p-10 lg:p-16 relative">
      <img src={yellow} alt=""  className="absolute w-2/12 md:w-4/12 lg:w-fit top-0 -translate-y-1/2"/>
        <p className="text-4xl lg:text-5xl font-semibold mx-auto leading-10 text-center w-9/12 md:w-2/3">
          Hear from our Alumni what they have to say
        </p>
        <div className="h-24"></div>
        <div className="flex flex-wrap gap-8">
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
          <div className="w-full md:w-4.5/10 lg:w-31% h-60 rounded-lg bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

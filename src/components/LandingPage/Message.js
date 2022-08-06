import React from "react";

const Message = () => {
  return (
    <section className=" bg-[#EDD250] font-campton relative">
        <div className="h-1/5 absolute z-0 bottom-0 w-full bg-white"></div>
      <div className="container mx-auto p-4 py-16 md:p-10 lg:p-16 relative z-10 ">
        <div className="flex flex-col lg:flex-row lg:justify-between space-y-20 lg:space-y-0">
          <div className="flex flex-col space-y-6 w-full lg:w-1/2">
            <p className="text-4xl font-medium text-center lg:text-left">
              A message from <br />
              the alumni body
            </p>
            <p className="text-2xl font-light leading-9 text-center lg:text-left lg:w-3/4">
              The Rise app simplifies saving and growing your money in dollars
              for relocation and travel.
            </p>
            <button className="lg:self-start py-4 lg:px-10 bg-[#0075B3] text-lg font-semibold text-white">
              Find out more
            </button>
          </div>
          <div className="shadow rounded-lg w-full lg:w-7/12 bg-white lg:mt-32" style={{height: 600,}} ></div>
        </div>
      </div>
    </section>
  );
};

export default Message;

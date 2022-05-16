import React from "react";
import tradition from "../../assets/image/tradition.svg"

const Tradition = () => {
  return (
    <section className="p-4 py-16 md:p-10 lg:px-16 lg:py-20 container mx-auto font-campton flex flex-col lg:flex-row-reverse space-y-10 lg:space-y-0 ">
      <div className="flex flex-col space-y-9 lg:w-1/2 ">
        <p class="text-4xl lg:text-5xl font-semibold  text-center lg:text-left">
          A rich tradition of excellence and leadership{" "}
        </p>
        <p class="text-2xl font-light leading-9 text-center text-gray-500 lg:text-left">
          The path of least resistance detracts creativity, but we choose to be
          a trailblazer in economic research across the African continent and
          beyond. In our quest for excellence, we are constantly raising the bar
          and advancing the frontiers of knowledge.{" "}
        </p>
        <button className="lg:self-start py-4 lg:px-10 bg-[#0075B3] text-lg font-semibold text-white">
          Find out more
        </button>
      </div>

      <div className="lg:w-1/2">

          <img src={tradition} alt="" />
      </div>
    </section>
  );
};

export default Tradition;

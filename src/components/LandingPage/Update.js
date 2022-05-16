import React from "react";
// import pattern from "../../assets/image/updatePattern.svg";

const Update = () => {
  return (
    <section className="container mx-auto bg-[#EDD250] pattern1 bg-[url('./assets/image/updatePattern.svg)] font-campton lg:bg-none">
      {/* <img src={pattern} alt="" /> */}
      <div className="m-4 md:m-10 lg:mx-20 lg:my-10 bg-none lg:bg-[#EDD250] lg:bg-[url('../../assets/image/updatePattern.svg)] pattern2">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-20 lg:space-y-0 p-10">
          <div class="inline-flex flex-col space-y-4 items-center">
            <p class="text-7xl font-medium">1958</p>
            <p class="text-2xl font-medium leading-snug">Year established</p>
          </div>

          <div class="inline-flex flex-col space-y-4 items-center justify-start">
            <p class="text-7xl font-medium">10,000+</p>
            <p class="text-2xl font-medium leading-snug">
              Alumni across the world
            </p>
          </div>

          <div class="inline-flex flex-col space-y-4 items-center justify-end w-64 h-32">
            <p class="text-7xl font-medium">5,000+</p>
            <p class="text-2xl font-medium leading-7 text-center">
              Impactful projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;

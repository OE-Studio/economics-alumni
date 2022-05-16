import React from 'react'
import image from "../../assets/image/projects.svg"

const Projects = () => {
  return (
<section className="p-4 py-16 md:p-10 lg:px-16 lg:py-20 container mx-auto font-campton flex flex-col lg:flex-row space-y-10 lg:space-y-0 justify-between items-center">
      <div className="flex flex-col space-y-9 w-full lg:w-5/12">
        <p class="text-4xl lg:text-5xl font-semibold  text-center lg:text-left">
        See our past and current projects and how we are making impacting
        </p>
        <p class="text-xl tracking-wide font-light text-center lg:text-left text-gray-500">
        Thinking of how to get a statement of account for your visa application, Rise got you covered. Simply shoot us an email or call our customer care to get yours within 3 to 5 business days.
        </p>
        <button className="lg:self-start py-4 lg:px-10 bg-[#0075B3] text-lg font-semibold text-white">
          Find out more
        </button>
      </div>

      <div className="w-full lg:w-1/2">
          <img src={image} alt="" />
      </div>
    </section>
  )
}

export default Projects
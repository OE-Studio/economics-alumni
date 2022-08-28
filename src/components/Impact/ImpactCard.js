import React from "react";
import { MdPerson, MdGroup } from "react-icons/md";

const ImpactCard = ({impactType,
  impactSetYear,
  description,
  imageUrl,
  date,
  completionStatus, year}) => {
  const delay = Math.random() * 100
  return (
    <div className="flex space-x-4  lg:space-x-4 " data-aos="fade-up" data-aos-delay={delay.toString()}>
      <div className="flex flex-col items-center space-y-2">
        <div className="inline-flex items-start justify-start px-4 py-1 border rounded-full border-black self-start">
          <p className="text-sm font-semibold">{year}</p>
        </div>
        <div className="w-0.5 lg:hidden bg-[#EBEBEB] h-full"></div>
      </div>
      <div className="flex-col items-center hidden lg:flex">
      {impactType.toLowerCase() === "individual" &&<MdPerson className="text-[#404040] text-2xl mt-1 pb-3 box-content" />}
      {impactType.toLowerCase() === "set of" &&<MdGroup className="text-[#404040] text-2xl mt-1 pb-3 box-content" />}
        <div className="w-0.5 bg-[#EBEBEB] hidden lg:block h-full"></div>
      </div>
      <div className="flex flex-col lg:flex-row lg:w-[80%] space-y-6 lg:space-y-0 lg:space-x-10 mb-10">
        <div className="inline-flex flex-col space-y-4 items-start justify-start lg:w-[60%] ">
          <div className="inline-flex gap-x-4 items-center">
          {impactType.toLowerCase() === "individual" &&<MdPerson className="text-[rgb(64,64,64)] text-2xl pb-3 box-content lg:hidden" />}
          {impactType.toLowerCase() === "set of" &&<MdGroup className="text-[rgb(64,64,64)] text-2xl pb-3 box-content lg:hidden" />}
           {impactType.toLowerCase() === "individual" && <p className="text-2xl font-semibold text-gray-900">Individual</p>}
           {impactType.toLowerCase() === "set of" && <p className="text-2xl font-semibold text-gray-900">Set of {impactSetYear}</p>}
          </div>

          <p className="w-full text-2xl leading-relaxed text-gray-500">
            {description}
          </p>
          <div className="inline-flex md:space-x-4 space-x-2 items-start justify-start">
            
            
          </div>
        </div>
        {imageUrl && <div className="w-full lg:w-[30%]  self-start overflow-hidden">
          <img src={imageUrl} alt="" />
          </div>}
      </div>
    </div>
  );
};

export default ImpactCard;

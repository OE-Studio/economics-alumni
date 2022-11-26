import React from "react";

const DepartmentalNeedsComp = ({ need, index }) => {
  return (
    <div
      className="flex lg:items-center gap-6 py-10 lg:gap-8"
    >
      <div className="flex items-center justify-center  h-full ">
        <p className="text-sm font-bold pt-2">{index}.</p>
      </div>
      <div
        className="px-10"
      >
        <p className="text-xl font-medium leading-9">{need}. Reach out to the Alumni
          Secretariat on 08161904403
        </p>
      </div>
    </div>
  );
};


const deptNeeds=[
    {
        need:"Join us on the journey to impact, as we shape lives and make learning and living easier and more enjoyable"

},  {
    need:"Join us on the journey to impact, as we shape lives and make learning and living easier and more enjoyable"

},]


const DepartmentalNeeds = () => {
  return (
    <div className="container mx-auto p-4 py-10">
      <p className="text-2xl lg:text-center font-semibold uppercase">
        Departmental needs
      </p>
      <div className="divide-y lg:w-[60%] flex flex-col  lg:mx-auto">

        {deptNeeds.map((need,index)=>{
            return(
                <DepartmentalNeedsComp
                need={need.need}
                index={index+1}
                key={index}
                />
                
            )
        })}
       
      </div>
    </div>
  );
};

export default DepartmentalNeeds;

import React from "react";
import { RiSearchLine} from "react-icons/ri";
import { format } from "date-fns";
import { useSelector } from "react-redux";

import ImpactCard from "./ImpactCard";
import EmptyField from "../../views/Admin/dashboard/EmptyField";


const ImpactList = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const data = useSelector((state) => state.impact);
  let dataList;


  const renderList = (List) => {
    dataList = List.map((item, index, list) => {
      let date = format(Date.parse(item.impactDate), "dd/MM/yyyy");
      let year = format(Date.parse(item.impactDate), "yyyy")
      return (
        <ImpactCard
          impactType={item.impactType}
          impactSetYear={item.impactSetYear}
          description={item.description}
          imageUrl={item.imageURL}
          date={date}
          year={year}
        />
      );
    });
  };


  // Empty States
  if (data.status === "idle") {
    dataList = <EmptyField />;
  } else if (data.status === "pending") {
    dataList = <EmptyField />;
  }

  // Populate
  if (data.status === "fulfilled") {
    let allPublishedData = data.item.filter(
      // eslint-disable-next-line
      (item) => item.status === "publish"
    );

    let allResearch = allPublishedData.sort((a,b)=>{
      return Number(format(Date.parse(b.impactDate), "yyyy")) - Number(format(Date.parse(a.impactDate), "yyyy"))



    }).filter(
      // eslint-disable-next-line
      (item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
      }
    );

    if (allResearch.length === 0) {
      dataList = <EmptyField />;
    }

    if (allResearch.length > 0) {
      renderList(allResearch);
    }
  }

  return (
    <section className="p-4 md:p-10 lg:px-20 pb-16 lg:pb-20 container mx-auto relative">
     <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-6">
        <p className="text-base font-semibold self-start lg:self-auto">Recent Footprints</p>
        <div className="border border-[#EDEDED] p-2 px-4 focus-within:border-[#7152ff] flex items-center space-x-4  w-full md:w-auto">
          <input
            type="search"
            placeholder="Search footprints title date or description..."
            className="w-full md:w-[350px] focus:outline-none placeholder:text-[#ABABAB] placeholder:font-medium font-medium"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div className="w-0.5 h-full bg-[#f0f0f0]" />
          <RiSearchLine className="bg-[#F1F6FA] text-[#1C1B1F] p-2 box-content" />
        </div>
      </div>
      <div className="flex flex-col gap-y-8 mt-10 md:mt-16">
        {dataList}
      {/* <ImpactCard/>
      <ImpactCard/>
      <ImpactCard/>
      <ImpactCard/> */}
      </div>
    </section>
  );
};

export default ImpactList;

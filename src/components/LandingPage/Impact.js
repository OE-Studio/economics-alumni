import React from "react";
import { MdExpand } from "react-icons/md";
import ImpactCard from "../Impact/ImpactCard";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import { format } from "date-fns";
import EmptyField from "../../views/Admin/dashboard/EmptyField";

function Impact() {



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
    }).slice(0, 3)
    

    if (allResearch.length === 0) {
      dataList = <EmptyField />;
    }

    if (allResearch.length > 0) {
      renderList(allResearch);
    }
  }




  return (
    <section className="container mx-auto p-4 pt-16 md:p-10 lg:p-20  space-y-0 lg:space-y-12 lg:pt-36">
      <p className="text-4xl font-bold">
        <span className="text-[#D0D0D0]">Track our recent </span>
        <br className="hidden lg:block" />
        footprints
      </p>
      <div className="h-10"/>
      {dataList}

      <div className="flex justify-center">
        <Link to="/impact" className="inline-flex items-center space-x-4 justify-center px-7 py-3 border border-black mx-auto self-center">
          <MdExpand />
          <p className=" text-base font-bold cursor-pointer">
            Track all footprints
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Impact;

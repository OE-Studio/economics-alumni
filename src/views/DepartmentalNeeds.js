import React from "react";
import { useSelector } from "react-redux";
import EmptyField from "./Admin/dashboard/EmptyField";


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





const DepartmentalNeeds = () => {
// eslint-disable-next-line 
  const [searchTerm, setSearchTerm] = React.useState("");
  const data = useSelector((state) => state.give);
  let dataList;

  const renderList = (List) => {
    dataList = List.map((item, index, list) => {

      return (
        <DepartmentalNeedsComp
          title={item.title}
          need={item.description}
           index={index+1}
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

    let allResearch = allPublishedData.reverse().filter(
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
    <div className="container mx-auto p-4 py-10">
      <p className="text-2xl lg:text-center font-semibold uppercase">
        Departmental needs
      </p>
      <div className="divide-y lg:w-[60%] flex flex-col  lg:mx-auto">

        {dataList}
       
      </div>
    </div>
  );
};

export default DepartmentalNeeds;

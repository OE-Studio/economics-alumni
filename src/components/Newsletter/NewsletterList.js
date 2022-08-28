import React from "react";
import { RiSearchLine, RiLandscapeFill } from "react-icons/ri";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import EmptyField from "../../views/Admin/dashboard/EmptyField";

function NewsletterCard({
  title, description, imageURL, newsletterURL, date
}) {
  return (
    <div className="border w-full  md:w-[48%] lg:w-[23.3%] font-inter">
      <div className="flex items-center justify-center overflow-hidden h-[180px] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${imageURL})` }}>
       {!imageURL && <RiLandscapeFill className="bg-[#F8F8F8] box-content text-3xl p-4" />}
      </div>
      <div className="flex flex-col space-y-20 p-3.5 bg-[#F8F8F8]">
        <div className="space-y-3">
          <p className="text-xs font-semibold text-gray-300">{date}</p>
          <p className="text-sm font-medium">
            {title} </p>
          <p className="text-xs font-medium">{description
              .substring(0, 100)
              .padEnd(103, description.length > 103 ? "..." : "")}</p>
        </div>
        <a href={newsletterURL} target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-600 uppercase">
          Download
        </a>
      </div>
    </div>
  );
}

const NewsletterList = () => {


  const [searchTerm, setSearchTerm] = React.useState("");
  const data = useSelector((state) => state.newsletter);
  let dataList;

  const renderList = (List) => {
    dataList = List.map((item, index, list) => {
      let date = format(Date.parse(item.created_at), "dd/MM/yyyy");
      return (
        <NewsletterCard
          title={item.title}
          description={item.description}
          imageURL={item.imageURL}
          newsletterURL={item.newsletterURL}
          cardid={item.uuid}
          date={date}
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
    <section className="p-4 md:p-10 lg:px-20 pb-16 lg:pb-20 container mx-auto">
      <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-y-6">
        <p className="text-base font-semibold self-start lg:self-auto">Recent Newsletter</p>
        <div className="border border-[#EDEDED] p-2 px-4 focus-within:border-[#7152ff] flex items-center space-x-4  w-full md:w-auto">
          <input
            type="search"
            placeholder="Search newsletter title date or description..."
            className="w-full md:w-[350px] focus:outline-none placeholder:text-[#ABABAB] placeholder:font-medium font-medium"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <div className="w-0.5 h-full bg-[#f0f0f0]" />
          <RiSearchLine className="bg-[#F1F6FA] text-[#1C1B1F] p-2 box-content" />
        </div>
      </div>
      <div className="flex flex-wrap gap-[25px] mt-10 md:mt-20">
        {dataList}
      </div>
    </section>
  );
};

export default NewsletterList;

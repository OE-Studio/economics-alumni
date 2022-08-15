import React from "react";
import { Link} from "react-router-dom";
import {
  MdOutlineFilterHdr,
  MdOutlineFeed,
  MdOutlineVolunteerActivism,
  MdOutlineBadge,
  MdOutlineHistory,
  MdBolt,
} from "react-icons/md";
import { RiSunCloudyLine } from "react-icons/ri";
import CompCard from "../../CompCard";
import { useSelector } from "react-redux";
import EmptyField from "../EmptyField";
import { format } from "date-fns";

import { RiFileLine } from "react-icons/ri";

const RecentUploadProp = ({ title, author, date, description, last }) => {
  return (
    <div
      className={`space-x-6 flex ${!last && "border-b"} mx-4 py-4`}
      onClick={() => {}}
    >
      <div className="bg-[#ecffcc] p-1.5 rounded-full self-start">
        <RiFileLine className="text-[#69a700] text-xl" />
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between w-full">
        <div className="space-y-1.5">
          <p className="text-base font-medium text-gray-700">{title}</p>
          <p className="text-sm leading-none text-gray-400">
            {description
              .substring(0, 100)
              .padEnd(103, description.length > 103 ? "..." : "")}
          </p>
        </div>
        <div className="flex md:flex-col md:items-end justify-between">
          <p className="text-xs font-medium text-gray-500">
            {author} / {date}
          </p>
        </div>
      </div>
    </div>
  );
};

const DashHome = () => {
  // 
  let recentList;
  const data = useSelector((state) => state);

  let dataArray; 

  const renderList = (List) => {
    recentList = List.map((trainings, index, list) => {
      let date = format(Date.parse(trainings.created_at), "dd/MM/yyyy");

      
      return (
        <RecentUploadProp
          title={trainings.title}
          author="Admin"
          date={date}
          description={trainings.description}
          id={trainings.uuid}
          key={index}
          last={index === list.length - 1}
        />
      );
    });
  };

  if (
    data.event.status === "idle" ||
    data.image.status === "idle" ||
    data.member.status === "idle" ||
    data.newsletter.status === "idle" ||
    data.impact.status === "idle"
  ) {
recentList = <EmptyField />;
  } else if (
    data.event.status === "pending" ||
    data.image.status === "pending" ||
    data.member.status === "pending" ||
    data.newsletter.status === "pending" ||
    data.impact.status === "pending"
  ) {
    // eslint-disable-next-line
    recentList = <EmptyField />;
  }

  if (
    data.event.status === "fulfilled" ||
    data.image.status === "fulfilled" ||
    data.member.status === "fulfilled" ||
    data.newsletter.status === "fulfilled" ||
    data.impact.status === "fulfilled"
  ) {
    let allData = [
      ...data.event.item,
      ...data.image.item,
      ...data.member.item,
      ...data.newsletter.item,
      ...data.impact.item,
    ];

    dataArray = [...allData];

    const byDate = (a, b) => {
      return (
        parseInt(Date.parse(a.created_at)) - parseInt(Date.parse(b.created_at))
      );
    };

    dataArray = allData.sort(byDate).reverse().slice(0, 3);


    renderList(dataArray)
  }
  return (
    <div className="mb-10">
      
      {/* Broad Overview */}
      <section className="md:mt-[36px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        <div className="bg-[#F9F9F9] p-[20px]">
          <div className="flex items-center space-x-[12px]">
            <p className="text-base font-medium">Welcome, Oyeleye</p>
            <div className="h-[24px] w-[24px] items-center justify-center flex">
              <RiSunCloudyLine />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[36px] lg:mt[58px]">
            <div className="p-[18px] lg:p-[26px] flex bg-grey-0 col-span-1 justify-between">
              <div className="space-y-[12px]">
                <p className="text-4xl">{data.image.item.length}</p>
                <p className="text-[12px] md:text-base font-medium text-grey-200">
                  Images
                </p>
              </div>
              <div className="h-[24px] w-[24px] items-center justify-center flex">
                <MdOutlineFilterHdr />
              </div>
            </div>
            <div className="p-[18px] lg:p-[26px] flex bg-grey-0 col-span-1 justify-between">
              <div className="space-y-[12px]">
                <p className="text-4xl">{data.newsletter.item.length}</p>
                <p className="text-[12px] md:text-base font-medium text-grey-200">
                  Newsletter
                </p>
              </div>
              <div className="h-[24px] w-[24px] items-center justify-center flex">
                <MdOutlineFeed />
              </div>
            </div>
            <div className="p-[18px] lg:p-[26px] flex bg-grey-0 col-span-1 justify-between">
              <div className="space-y-[12px]">
                <p className="text-4xl">{data.impact.item.length}</p>
                <p className="text-[12px] md:text-base font-medium text-grey-200">
                  Impact
                </p>
              </div>
              <div className="h-[24px] w-[24px] items-center justify-center flex">
                <MdOutlineVolunteerActivism />
              </div>
            </div>
            <div className="p-[18px] lg:p-[26px] flex bg-grey-0 col-span-1 justify-between">
              <div className="space-y-[12px]">
                <p className="text-4xl">{data.member.item.length}</p>
                <p className="text-[12px] md:text-base font-medium text-grey-200">
                  Members
                </p>
              </div>
              <div className="h-[24px] w-[24px] items-center justify-center flex">
                <MdOutlineBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mt-[36px] md:mt-[48px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        <div className="flex items-center space-x-[12px]">
          <div className="h-[32px] w-[32px] flex items-center justify-center">
            <MdBolt className="text-xl" />
          </div>
          <p className="text-base font-semibold">Quick actions</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] md:gap-[36px] mt-[36px] lg:mt[58px]">
          <Link
            to="/dashboard/images"
            className="p-5 border border-grey-100 flex space-x-[16px]"
          >
            <div className="h-[48px] w-[48px] flex items-center bg-grey-50 justify-center">
              <MdOutlineFilterHdr className="text-xl" />
            </div>
            <div className="space-y-2">
              <p className="text-base font-medium">Images</p>
              <p className="text-sm font-medium leading-tight text-grey-200">
                Show events and meetings{" "}
              </p>
            </div>
          </Link>
          <Link
            to="/dashboard/newsletter"
            className="p-5 border border-grey-100 flex space-x-[16px]"
          >
            <div className="h-[48px] w-[48px] flex items-center bg-grey-50 justify-center">
              <MdOutlineFeed className="text-xl" />
            </div>
            <div className="space-y-2">
              <p className="text-base font-medium">Newsletter</p>
              <p className="text-sm font-medium leading-tight text-grey-200">
                Share news and events{" "}
              </p>
            </div>
          </Link>
          <Link
            to="/dashboard/impacts"
            className="p-5 border border-grey-100 flex space-x-[16px]"
          >
            <div className="h-[48px] w-[48px] flex items-center bg-grey-50 justify-center">
              <MdOutlineFilterHdr className="text-xl" />
            </div>
            <div className="space-y-2">
              <p className="text-base font-medium">Impact</p>
              <p className="text-sm font-medium leading-tight text-grey-200">
              Share recent impact{" "}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* History */}

      <section className="mt-[36px] md:mt-[48px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        <div className="flex items-center space-x-[12px]">
          <div className="h-[32px] w-[32px] flex items-center justify-center">
            <MdOutlineHistory className="text-xl" />
          </div>
          <p className="text-base font-semibold">Recent uploads</p>
        </div>
        <div className="mt-[24px] md:mt-[36px] border border-grey-100 divide-y-[1px] divide-grey-100">
          <CompCard
            type="image"
            title="Title of Images"
            subTitle="Description comes here..."
            date="28/07/2022"
          />
          <CompCard
            type="newsletter"
            title="Title of newsletter"
            subTitle="Description comes here..."
            date="28/07/2022"
          />
          <CompCard
            type="impact"
            title="Title of Impact"
            subTitle="Description comes here..."
            date="28/07/2022"
          />
          <CompCard
            type="member"
            title="Members name"
            subTitle="ogunsleye123@gmail.com"
            date="28/07/2022"
          />
        </div>
      </section>
    </div>
  );
};

export default DashHome;

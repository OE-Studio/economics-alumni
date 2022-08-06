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



const DashHome = () => {
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
                <p className="text-4xl">50k</p>
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
                <p className="text-4xl">50k</p>
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
                <p className="text-4xl">50k</p>
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
                <p className="text-4xl">50k</p>
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
            to="/images"
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
            to="/dashboard/newsletter"
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

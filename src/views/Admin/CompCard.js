import {
    MdOutlineFilterHdr,
    MdOutlineFeed,
    MdOutlineVolunteerActivism,
    MdOutlineBadge,
  } from "react-icons/md";

const CompCard = ({ type, title, subTitle, date }) => {
    return (
      <div className="p-5 flex space-x-[16px]">
        <div className="h-[48px] w-[48px] flex items-center bg-grey-50 justify-center">
          {type === "image" && <MdOutlineFilterHdr className="text-xl" />}
          {type === "newsletter" && <MdOutlineFeed className="text-xl" />}
          {type === "impact" && (
            <MdOutlineVolunteerActivism className="text-xl" />
          )}
          {type === "member" && <MdOutlineBadge className="text-xl" />}
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full lg:space-y-0 space-y-2">
          <div className="space-y-2 ">
            <p className="text-base font-medium">{title}</p>
            <p className="text-sm font-medium leading-tight text-grey-200">
              Description comes here...{" "}
            </p>
          </div>
  
          <p className="text-[12px] md:text-sm font-medium leading-tight md:self-end text-grey-200">
            {date}
          </p>
        </div>
      </div>
    );
  };


  export default CompCard
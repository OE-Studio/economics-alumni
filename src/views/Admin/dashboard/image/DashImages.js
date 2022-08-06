import React from "react";
import axios from "axios";

import {
  MdPublic,
  MdOutlineAssignment,
  MdOutlineSearch,
  MdOutlineDelete,
  MdOutlineFolderOpen,
  MdOutlineHistory,
  MdBolt,
} from "react-icons/md";
import UploadButton from "../../UploadButton";

// const baseURL = "http://localhost:3001";
const baseURL = "https://htprtp.herokuapp.com";

const SelectAllButton = ({ onChangeHandler, checkHandler }) => {
  return (
    <div className="flex border space-x-2.5 px-4 py-3 md:py-2  items-center group-checked:bg-[#ECECEC]">
      <input
        type="checkbox"
        name="select_all"
        id="select_all"
        className="group placeholder:text-[#737373] placeholder:font-medium"
        onChange={onChangeHandler}
        checked={checkHandler}
      />
      <label
        htmlFor="select_all"
        className="text-base font-medium text-[#737373]  peer-checked:bg-[#ECECEC]"
      >
        Select All
      </label>
    </div>
  );
};

const DashImages = () => {
  const [tab, setTab] = React.useState("publish");
  const [searchTerm, setSearchTerm] = React.useState("");

  //   Tabs
  const tabActiveClass =
    " flex items-center space-x-4 p-4 border-b-2 border-grey-500 cursor-pointer hover:bg-[#f5f5f5] ";
  const tabInactiveClass =
    "flex items-center space-x-4 p-4 cursor-pointer hover:bg-[#f5f5f5]";

  // Select all
  const [isCheckAllPublish, setIsCheckAllPublish] = React.useState(false);
  const [isCheckAllDraft, setIsCheckAllDraft] = React.useState(false);
  const [isCheckAllArchive, setIsCheckAllArchive] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState([]);

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const publishSelectAll = (e) => {
    setIsCheckAllPublish(!isCheckAllPublish);
    setIsCheck();
    //   publishedImage
    //     .slice(
    //       publishListStart,
    //       publishedImage.length < publishListEnd
    //         ? publishedImage.length
    //         : publishListEnd
    //     )
    //     .map((li) => li.uuid)
    if (isCheckAllPublish) {
      setIsCheck([]);
    }
  };

  const archiveSelectAll = (e) => {
    setIsCheckAllArchive(!isCheckAllArchive);
    setIsCheck();
    //   archivedImage
    //     .slice(
    //       archiveListStart,
    //       archivedImage.length < archiveListEnd
    //         ? archivedImage.length
    //         : archiveListEnd
    //     )
    //     .map((li) => li.uuid)
    if (isCheckAllArchive) {
      setIsCheck([]);
    }
  };

  const draftSelectAll = (e) => {
    setIsCheckAllDraft(!isCheckAllDraft);
    setIsCheck();
    //   draftedImage
    //     .slice(
    //       draftListStart,
    //       draftedImage.length < draftListEnd
    //         ? draftedImage.length
    //         : draftListEnd
    //     )
    //     .map((li) => li.uuid)
    if (isCheckAllDraft) {
      setIsCheck([]);
    }
  };

  const archiveAll = () => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/image/archive-multiple`,
      method: "POST",
      data: {
        ids: isCheck,
        status: "archive",
      },
    };

    axios(options).then((result) => {
      if (result.status !== 200) {
        window.alert("Error updating");
      }

      if (result.status === 200) {
        window.location.reload();
      }
    });
  };

  const deleteAll = () => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/image/delete-many`,
      method: "POST",
      data: {
        ids: isCheck,
      },
    };

    axios(options).then((result) => {
      if (result.status !== 200) {
        window.alert("Error updating");
      }

      if (result.status === 200) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="mb-10">
      {/* First Tab */}
      <section className="md:mt-[36px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        {tab}
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <p className="text-4xl">Images</p>
            <div className="inline-flex items-start justify-start px-2 py-0.5 bg-black rounded-full">
              <p className="text-sm font-medium leading-tight text-white">
                300
              </p>
            </div>
          </div>
          <UploadButton customStyle="hidden md:inline-flex" />
        </div>
      </section>

      {/* Second Tab */}
      <section className="mt-[36px] md:mt-[48px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        <div className="flex items-stretch flex-wrap gap-[16px]">
          <div className="flex border space-x-2.5 px-4 py-3 md:py-2 focus-within:border-grey-500 items-center md:w-[280px] w-full">
            <div className="h-[24px] w-[24px] flex items-center justify-center">
              <MdOutlineSearch className="text-xl text-grey-500" />
            </div>
            <input
              type="search"
              placeholder="Search image"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="text-base placeholder:text-[#737373] focus:outline-none p-0 w-full placeholder:font-medium"
            />
          </div>
          <div className="placeholder:text-[#737373] ">
            {tab === "publish" && (
              <SelectAllButton
                onChangeHandler={publishSelectAll}
                checkHandler={isCheckAllPublish}
              />
            )}
            {tab === "draft" && (
              <SelectAllButton
                onChangeHandler={draftSelectAll}
                checkHandler={isCheckAllDraft}
              />
            )}
            {tab === "archive" && (
              <SelectAllButton
                onChangeHandler={archiveSelectAll}
                checkHandler={isCheckAllArchive}
              />
            )}
          </div>
          <UploadButton customStyle="inline-flex md:hidden" />
          {(isCheckAllArchive || isCheckAllDraft || isCheckAllPublish) && (
            <div className="gap-5 items-center flex flex-wrap 2xl:hidden">
              {tab !== "archive" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2"
                  onClick={() => {
                    archiveAll();
                  }}
                >
                  <MdOutlineFolderOpen className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Archive all</p>
                </div>
              )}
              {tab !== "draft" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2"
                  onClick={() => {
                    archiveAll();
                  }}
                >
                  <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Move to Draft</p>
                </div>
              )}
              {tab !== "publish" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2"
                  onClick={() => {
                    archiveAll();
                  }}
                >
                  <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Publish all</p>
                </div>
              )}

              <div
                className="flex items-center space-x-4 bg-[#F9F2F2] text-[#F90000] px-4 py-2"
                onClick={() => {}}
              >
                <MdOutlineDelete className=" text-xl" />
                <p className="text-base">Delete all</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Third Tab */}
      <section className="mt-[36px] md:mt-[48px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        <div className="w-full overflow-x-hidden lg:flex lg:justify-between lg:items-center border-b">
          <div className="flex space-x-5 overflow-x-auto">
            <div
              className={
                tab === "publish"
                  ? tabActiveClass.toString()
                  : tabInactiveClass.toString()
              }
              onClick={() => {
                setTab("publish");
              }}
            >
              <MdPublic className="text-[#9b9fa2] text-xl" />
              <p className="text-base text-gray-700">Published</p>
              <div className="px-2 py-1 bg-white border rounded-full border-grey-100">
                <p className="text-xs font-medium text-grey-200">
                  {/* {publishedImage.length} */}
                  2000
                </p>
              </div>
            </div>
            <div
              className={
                tab === "draft"
                  ? tabActiveClass.toString()
                  : tabInactiveClass.toString()
              }
              onClick={() => {
                setTab("draft");
              }}
            >
              <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
              <p className="text-base text-gray-700">Draft</p>
              <div className="px-2 py-1 bg-white border rounded-full border-grey-100">
                <p className="text-xs font-medium text-grey-200">
                  {/* {draftedImage.length} */}
                  200
                </p>
              </div>
            </div>
            <div
              className={
                tab === "archive"
                  ? tabActiveClass.toString()
                  : tabInactiveClass.toString()
              }
              onClick={() => {
                setTab("archive");
              }}
            >
              <MdOutlineFolderOpen className="text-[#9b9fa2] text-xl" />
              <p className="text-base text-gray-700">Archive</p>
              <div className="px-2 py-1 bg-white border rounded-full border-grey-100">
                <p className="text-xs font-medium text-grey-200">
                  {/* {archivedImage.length} */}
                  2000
                </p>
              </div>
            </div>
          </div>
          {(isCheckAllArchive || isCheckAllDraft || isCheckAllPublish) && (
            <div className="gap-5 items-center hidden flex-wrap 2xl:flex">
              {tab !== "archive" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2"
                  onClick={() => {
                    archiveAll();
                  }}
                >
                  <MdOutlineFolderOpen className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Archive all</p>
                </div>
              )}
              {tab !== "draft" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2"
                  onClick={() => {
                    archiveAll();
                  }}
                >
                  <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Move to Draft</p>
                </div>
              )}
              {tab !== "publish" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2"
                  onClick={() => {
                    archiveAll();
                  }}
                >
                  <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Publish all</p>
                </div>
              )}

              <div
                className="flex items-center space-x-4 bg-[#F9F2F2] text-[#F90000] px-4 py-2"
                onClick={() => {}}
              >
                <MdOutlineDelete className=" text-xl" />
                <p className="text-base">Delete all</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DashImages;

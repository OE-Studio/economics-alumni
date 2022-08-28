import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { format } from "date-fns";

import {
  MdPublic,
  MdOutlineAssignment,
  MdOutlineSearch,
  MdOutlineDelete,
  MdOutlineFolderOpen,
} from "react-icons/md";

import {
  RiMoreFill,
  RiEdit2Line,
  RiImageLine,
} from "react-icons/ri";

import UploadButton from "../../UploadButton";
import SideBarWrapper from "../SideBarWrapper";
import ImageForm from "./ImageForm";
import ImageFormEdit from "./ImageFormEdit";
import EmptyField from "../EmptyField";
import Pagination from "../Pagination";


// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";


const ImageCard = ({
  title,
  author,
  date,
  description,
  imageURL,
  id,
  last,
  toggleEditNotification,
  setEditId,
  handleClick,
  isChecked,
}) => {
  const [toggle, setToggle] = React.useState(false);

  const popUp = React.useRef(null);

  const updateStatus = () => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/image/update-status`,
      method: "POST",
      data: {
        uuid: id,
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
  const deleteImage = () => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/image/delete/${id}`,
      method: "DELETE",
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
    <div className="w-full md:w-[48%] lg:w-[48%] xl:w-[32%] 2xl:w-[380px] relative">
      <div className=" absolute z-10 p-5">
        <input
          id={id}
          type="checkbox"
          onChange={handleClick}
          checked={isChecked}
        />
      </div>
      <div className="p-2.5 border space-y-4">

        {!imageURL && (
          <div className="flex p-6 items-center justify-center md:h-32 lg:h-40 2xl:h-64 bg-[#f2f2f2]">
            <div className="bg-white p-6 rounded-full">
              <RiImageLine className="text-[#acacac] text-3xl font-bold" />
            </div>
          </div>
        )}
        {imageURL && (
          <div
            className="md:h-32 lg:h-40 2xl:h-64 bg-cover hover:bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${imageURL.toString()})` }}
          >
            {/* <img src={imageURL} alt="" /> */}
          </div>
        )}
        <div className="border">
          <p className="p-4 border-b text-xs font-medium text-gray-500">
            {title}
          </p>
          <p className="p-4 text-xs font-medium text-gray-500">{description}</p>
        </div>
        <div className="flex md:items-end justify-between">
          <p className="text-xs font-medium text-gray-500">
            {author} / {date}
          </p>
          <div className=" py-1.5 px-1 cursor-pointer relative">
            <RiMoreFill
              className="editPopup text-xl text-[#737373]"
              onClick={() => {
                setToggle(!toggle);
              }}
            />

            {toggle && (
              <div
                className={`editPopup absolute bg-white shadow-xl flex flex-col right-0 rounded-lg p-2 space-y-1.5 z-10 ${last && "bottom-10"
                  }`}
                ref={popUp}
              >
                <div
                  className="flex space-x-2 p-2.5 items-center pr-4 lg:pr-6 hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    toggleEditNotification();
                    setEditId(id);
                    setToggle(false);
                  }}
                >
                  <RiEdit2Line />
                  <p>Edit</p>
                </div>
                <div
                  className="flex space-x-2 p-2.5 items-center pr-4 lg:pr-6 hover:bg-gray-100 rounded-lg"
                  onClick={() => {
                    updateStatus();
                    setToggle(false);
                  }}
                >
                  <MdOutlineFolderOpen />
                  <p>Archive</p>
                </div>
                <div
                  className="flex space-x-2 p-2.5 items-center text-red-500 bg-[#F9F2F2] pr-4 lg:pr-6 hover:bg-red-500 hover:text-white rounded-lg"
                  onClick={() => {
                    deleteImage();
                    setToggle(false);
                  }}
                >
                  <MdOutlineDelete />
                  <p>Delete</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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


  const [toggleEdit, setToggleEdit] = React.useState(false);
  const toggleEditNotification = () => {
    setToggleEdit(!toggleEdit);
  };


  const [draftListStart, setDraftListStart] = React.useState(0);
  const [draftListEnd, setDraftListEnd] = React.useState(0);
  const [publishListStart, setPublishListStart] = React.useState(0);
  const [publishListEnd, setPublishListEnd] = React.useState(0);
  const [archiveListStart, setArchiveListStart] = React.useState(0);
  const [archiveListEnd, setArchiveListEnd] = React.useState(0);
  // eslint-disable-next-line
  const [editId, setEditId] = React.useState("");

  const [tab, setTab] = React.useState("publish");
  const [searchTerm, setSearchTerm] = React.useState("");

  const Images = useSelector((state) => state.image);
  let imageList;

  let publishedImage = [];
  let draftedImage = [];
  let archivedImage = [];

  if (Images.status === "fulfilled") {

    let allImages = Images.item.filter(
      // eslint-disable-next-line
      (item) => {
        if (searchTerm === "") {
          return item;
        } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
          return item;
        }
      });


    publishedImage = allImages.filter(
      (training) => training.status === "publish"
    );
    draftedImage = allImages.filter(
      (training) => training.status === "draft"
    );
    archivedImage = allImages.filter(
      (training) => training.status === "archive"
    );
  }

  if (Images.status === "idle" || Images.status === "pending") {
    imageList = <EmptyField />;
  } else if (Images.status === "fulfilled") {
    if (Images.item.length === 0) {
      imageList = <EmptyField />;
    }

    const renderList = (List) => {
      imageList = List.map((trainings, index, list) => {
        let date = format(Date.parse(trainings.created_at), "dd/MM/yyyy");
       
        return (
          <ImageCard
            title={trainings.title}
            author="Admin"
            date={date}
            description={trainings.description}
            id={trainings.uuid}
            key={index}
            toggleEditNotification={toggleEditNotification}
            setEditId={setEditId}
            imageURL={trainings.documentURL}
            last={index === list.length - 1}
            handleClick={handleClick}
            isChecked={isCheck.includes(trainings.uuid)}
          />
        );
      });
    };
    if (Images.item.length !== 0) {
      if (tab === "publish") {
        if (publishedImage.length === 0) {
          imageList = <EmptyField />;
        } else {
          renderList(
            publishedImage.slice(
              publishListStart,
              publishedImage.length < publishListEnd
                ? publishedImage.length
                : publishListEnd
            )
          );
        }
      }

      if (tab === "draft") {
        if (draftedImage.length === 0) {
          imageList = <EmptyField />;
        } else {
          renderList(
            draftedImage.slice(
              draftListStart,
              draftedImage.length < draftListEnd
                ? draftedImage.length
                : draftListEnd
            )
          );
        }
      }

      if (tab === "archive") {
        if (archivedImage.length === 0) {
          imageList = <EmptyField />;
        } else {
          // archiveListStart
          renderList(
            archivedImage.slice(
              archiveListStart,
              archivedImage.length < archiveListEnd
                ? archivedImage.length
                : archiveListEnd
            )
          );
        }
      }
    }
  } else if (Images.status === "failed") {
    imageList = <EmptyField />;
  }



  // ACTION FUNCTIONS

  const publishSelectAll = (e) => {
    setIsCheckAllPublish(!isCheckAllPublish);
    setIsCheck(
      publishedImage
        .slice(
          publishListStart,
          publishedImage.length < publishListEnd
            ? publishedImage.length
            : publishListEnd
        )
        .map((li) => li.uuid)
    );

    if (isCheckAllPublish) {
      setIsCheck([]);
    }
  };

  const archiveSelectAll = (e) => {

    setIsCheckAllArchive(!isCheckAllArchive);
    setIsCheck(
      archivedImage
        .slice(
          archiveListStart,
          archivedImage.length < archiveListEnd
            ? archivedImage.length
            : archiveListEnd
        )
        .map((li) => li.uuid)
    );

    if (isCheckAllArchive) {
      setIsCheck([]);
    }
  };

  const draftSelectAll = (e) => {
    setIsCheckAllDraft(!isCheckAllDraft);
    setIsCheck(
      draftedImage
        .slice(
          draftListStart,
          draftedImage.length < draftListEnd
            ? draftedImage.length
            : draftListEnd
        )
        .map((li) => li.uuid)
    );

    if (isCheckAllDraft) {
      setIsCheck([]);
    }
  };

  const archiveAll = (status) => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/image/archive-multiple`,
      method: "POST",
      data: {
        ids: isCheck,
        status: status,
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

  // eslint-disable-next-line
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

  // Form Overlay
  const [toggle, setToggle] = React.useState(false);
  const toggleNotification = () => {
    setToggle(!toggle);
  };


  return (
    <div className="mb-10 relative">

      {/* CREATE FORMS */}
      <SideBarWrapper toggleNotification={toggleNotification} toggle={toggle}>
        <ImageForm />
      </SideBarWrapper>

      <SideBarWrapper toggleNotification={toggleEditNotification} toggle={toggleEdit}>
        <ImageFormEdit currentImage={Images.item.filter((image) => image.uuid === editId)}/>
      </SideBarWrapper>


      {/* First Tab */}
      <section className="md:mt-[36px] lg:mt-[24px]  p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <p className="text-4xl">Images</p>
            <div className="inline-flex items-start justify-start px-2 py-0.5 bg-black rounded-full">
              <p className="text-sm font-medium leading-tight text-white">
              {Images.item.length}
              </p>
            </div>
          </div>
          <UploadButton customStyle="hidden md:inline-flex" clickHandler={() => { toggleNotification() }} />
        </div>
      </section>

      {/* Second Tab */}
      <section className="mt-[36px] md:mt-[48px] lg:mt-[24px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
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

          <UploadButton customStyle="inline-flex md:hidden" clickHandler={() => { toggleNotification() }} />

          {(isCheckAllArchive || isCheckAllDraft || isCheckAllPublish) && (
            <div className="gap-5 items-center flex flex-wrap 2xl:hidden">
              {tab !== "archive" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2 cursor-pointer"
                  onClick={() => {
                    archiveAll("archive");
                  }}
                >
                  <MdOutlineFolderOpen className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Archive all</p>
                </div>
              )}
              {tab !== "draft" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2 cursor-pointer"
                  onClick={() => {
                    archiveAll("draft");
                  }}
                >
                  <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Move to Draft</p>
                </div>
              )}
              {tab !== "publish" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2 cursor-pointer"
                  onClick={() => {
                    archiveAll("publish");
                  }}
                >
                  <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Publish all</p>
                </div>
              )}

              <div
                className="flex items-center space-x-4 bg-[#F9F2F2] text-[#F90000] px-4 py-2"
                onClick={() => { }}
              >
                <MdOutlineDelete className=" text-xl" />
                <p className="text-base">Delete all</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Third Tab */}
      <section className="mt-[36px] md:mt-[48px] lg:mt-[24px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
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
                  {publishedImage.length}
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
                  {draftedImage.length}
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
                  {archivedImage.length}
                </p>
              </div>
            </div>
          </div>
          {(isCheckAllArchive || isCheckAllDraft || isCheckAllPublish) && (
            <div className="gap-5 items-center hidden flex-wrap 2xl:flex">
              {tab !== "archive" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2 cursor-pointer"
                  onClick={() => {
                    archiveAll("archive");
                  }}
                >
                  <MdOutlineFolderOpen className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Archive all</p>
                </div>
              )}
              {tab !== "draft" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2 cursor-pointer"
                  onClick={() => {
                    archiveAll("draft");
                  }}
                >
                  <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Move to Draft</p>
                </div>
              )}
              {tab !== "publish" && (
                <div
                  className="flex space-x-4 items-center bg-[#f4f4f4] text-[#404040] px-4 py-2 cursor-pointer"
                  onClick={() => {
                    archiveAll("publish");
                  }}
                >
                  <MdOutlineAssignment className="text-[#9b9fa2] text-xl" />
                  <p className="text-base text-gray-700">Publish all</p>
                </div>
              )}

              <div
                className="flex items-center space-x-4 bg-[#F9F2F2] text-[#F90000] px-4 py-2"
                onClick={() => { }}
              >
                <MdOutlineDelete className=" text-xl" />
                <p className="text-base">Delete all</p>
              </div>
            </div>
          )}
        </div>
      </section>


      {/* Table */}
      <div className=" p-[20px]  md:p-0 md:px-[40px] lg:px-[60px]">
        {/* Table Content */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row flex-wrap gap-[20px] mt-[30px]">{imageList}</div>
        </div>
        <div></div>

        {/* Pagination */}
        {tab === "draft" && (
          <Pagination
            list={draftedImage}
            setlistStart={setDraftListStart}
            setlistEnd={setDraftListEnd}
          />
        )}

        {tab === "publish" && (
          <Pagination
            list={publishedImage}
            setlistStart={setPublishListStart}
            setlistEnd={setPublishListEnd}
          />
        )}

        {tab === "archive" && (
          <Pagination
            list={archivedImage}
            setlistStart={setArchiveListStart}
            setlistEnd={setArchiveListEnd}
          />
        )}
      </div>

    </div>
  );
};

export default DashImages;

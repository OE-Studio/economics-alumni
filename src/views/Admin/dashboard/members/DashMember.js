import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { CSVLink } from "react-csv";

import {
  MdOutlineSearch,
  MdOutlineDelete,
  MdOutlineFileDownload,
} from "react-icons/md";

import UploadButton from "../../UploadButton";
import SideBarWrapper from "../SideBarWrapper";
import CreateForm from "./CreateForm";
import EmptyField from "../EmptyField";
import Pagination from "../Pagination";
import EditForm from "./EditForm.js";

// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

const tableHeaders = [
  {
    lable: "FullName",
    customStyle: "w-[203px] pl-4",
  },
  {
    lable: "Dep. Degree",
    customStyle: "w-[140px] justify-center",
  },
  {
    lable: "Alias",
    customStyle: "w-[140px] justify-center",
  },
  {
    lable: "Work",
    customStyle: "w-[140px] justify-center",
  },
  {
    lable: "Title",
    customStyle: "w-[140px] justify-center",
  },
  {
    lable: "Address",
    customStyle: "w-[240px] justify-center",
  },
  {
    lable: "Phone Number",
    customStyle: "w-[140px] justify-center",
  },
  {
    lable: "email",
    customStyle: "w-[140px] justify-center",
  },
  {
    lable: "Grad year.",
    customStyle: "w-[140px] justify-center",
  },
  {
    lable: "Part of set’s whatsapp",
    customStyle: "w-[140px] justify-center text-center",
  },
  {
    lable: "Admin in set’s whatsapp",
    customStyle: "w-[140px] justify-center text-center",
  },
];

const NewsletterComp = ({
  fullName,
  degree,
  alias,
  workplace,
  position,
  address,
  phoneNumber,
  emailAddress,
  yearGraduated,
  isGroupPresent,
  isAdmin,
  id,
  toggleEditNotification,
  setEditId,
  handleClick,
  isChecked,
}) => {
  // eslint-disable-next-line
  const updateStatus = (status) => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/newsletter/update-status`,
      method: "POST",
      data: {
        uuid: id,
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
  const deleteEntry = () => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/newsletter/delete/${id}`,
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

  const tableValues = [
    {
      lable: fullName,
      customStyle: "w-[203px] pl-10",
    },
    {
      lable: degree,
      customStyle: "w-[140px] justify-center",
    },
    {
      lable: alias,
      customStyle: "w-[140px] justify-center",
    },
    {
      lable: workplace,
      customStyle: "w-[140px] justify-center",
    },
    {
      lable: position,
      customStyle: "w-[140px] justify-center",
    },
    {
      lable: address,
      customStyle: "w-[240px] justify-center",
    },
    {
      lable: phoneNumber,
      customStyle: "w-[140px] justify-center",
    },
    {
      lable: emailAddress,
      customStyle: "w-[140px] justify-center",
    },
    {
      lable: yearGraduated,
      customStyle: "w-[140px] justify-center",
    },
    {
      lable: isGroupPresent,
      customStyle: "w-[140px] justify-center text-center",
    },
    {
      lable: isAdmin,
      customStyle: "w-[140px] justify-center text-center",
    },
  ];

  return (
    <div
      className={`flex w-fit h-12 border-b divide-x-[1px] relative divide-gray-300 bg-gray-50`}
    >
      <div className=" absolute top-1/2 -translate-y-1/2 ml-4">
        <input
          id={id}
          type="checkbox"
          onChange={handleClick}
          checked={isChecked}
        />
      </div>

      {tableValues.map((header, index) => {
        return (
          <div
            className={`inline-flex items-center ${header.customStyle}  bg-gray-50 `}
            key={index}
            onClick={() => {
              toggleEditNotification();
              setEditId(id);
            }}
          >
            <p className="text-sm font-bold text-gray-500">{header.lable}</p>
          </div>
        );
      })}
    </div>
  );
};

const DashMember = () => {
  // Select all

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

  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(0);

  // eslint-disable-next-line
  const [editId, setEditId] = React.useState("");

  const [searchTerm, setSearchTerm] = React.useState("");

  const loadedData = useSelector((state) => state.member);
  let loadedDataList;

  let allData = [];

  if (loadedData.status === "fulfilled") {
    allData = loadedData.item.filter(
      // eslint-disable-next-line
      (item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.fullName.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
      }
    );
  }

  if (loadedData.status === "idle" || loadedData.status === "pending") {
    loadedDataList = <EmptyField />;
  } else if (loadedData.status === "fulfilled") {
    if (loadedData.item.length === 0) {
      loadedDataList = <EmptyField />;
    }

    const renderList = (List) => {
      loadedDataList = List.map((trainings, index, list) => {
        return (
          <NewsletterComp
            fullName={trainings.fullName}
            degree={trainings.degree}
            alias={trainings.alias}
            workplace={trainings.workplace}
            position={trainings.position}
            address={trainings.address}
            phoneNumber={trainings.phoneNumber}
            emailAddress={trainings.emailAddress}
            yearGraduated={trainings.yearGraduated}
            isGroupPresent={trainings.isGroupPresent}
            isAdmin={trainings.isAdmin}
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

    if (loadedData.item.length !== 0) {
      renderList(
        allData.slice(
          listStart,
          allData.length < listEnd ? allData.length : listEnd
        )
      );
    }
  } else if (loadedData.status === "failed") {
    loadedDataList = <EmptyField />;
  }

  // ACTION FUNCTIONS

  
  const deleteAll = () => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/member/delete-many`,
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

  let headers = [
    { label: "Full name", key: "fullName" },
    { label: "Degree earned in the Department", key: "degree" },
    { label: "Alias while in school", key: "alias" },
    { label: "Current work place", key: "workplace" },
    { label: "Position or title", key: "position" },
    { label: "Contact address", key: "address" },
    { label: "Phone number", key: "phoneNumber" },
    { label: "Email address", key: "emailAddress" },
    { label: "Graduation year", key: "yearGraduated" },
    { label: "Are you in your set’s whatsapp group?", key: "isGroupPresent" },
    {
      label: "Are you an “Admin” in your set’s whatsapp group?",
      key: "isAdmin",
    },
  ];

  return (
    <div className="mb-10 relative">
      {/* CREATE FORMS */}
      <SideBarWrapper
        toggleNotification={toggleNotification}
        toggle={toggle}
        setToggle={setToggle}
      >
        <CreateForm
          currentImage={loadedData.item.filter(
            (research) => research.uuid === editId
          )}
        />
      </SideBarWrapper>

      <SideBarWrapper
        toggleNotification={toggleEditNotification}
        toggle={toggleEdit}
      >
        <EditForm
          currentImage={loadedData.item.filter(
            (research) => research.uuid === editId
          )}
          toggleNotification={toggleEditNotification}
        />
      </SideBarWrapper>

      {/* First Tab */}
      <section className="md:mt-[36px] lg:mt-[24px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        <div className="flex justify-between">
          <div className="flex items-center space-x-3">
            <p className="text-4xl">Members</p>
            <div className="inline-flex items-start justify-start px-2 py-0.5 bg-black rounded-full">
              <p className="text-sm font-medium leading-tight text-white">
                {loadedData.item.length}
              </p>
            </div>
          </div>
          <UploadButton
            customStyle="hidden md:inline-flex"
            clickHandler={() => {
              toggleNotification();
            }}
          />

          <CSVLink data={allData} headers={headers}>
            <div
              className={`hidden md:inline-flex space-x-3 items-center justify-start p-2.5 border border-grey-100 cursor-pointer text-[#737373] font-medium`}
            >
              <div className="h-[24px] w-[24px] flex items-center justify-center">
                <MdOutlineFileDownload className="text-xl text-grey-200" />
              </div>
              <p className="text-base font-medium">Download Data</p>
            </div>
          </CSVLink>
        </div>
      </section>

      {/* Second Tab */}
      <section className="mt-[36px] md:mt-[48px] lg:mt-[24px] p-[20px] md:p-0 md:px-[40px] lg:px-[60px]">
        <div className="flex items-stretch flex-wrap gap-[16px] justify-between">
          <div className="flex border space-x-2.5 px-4 py-3 md:py-2 focus-within:border-grey-500 items-center md:w-[280px] w-full">
            <div className="h-[24px] w-[24px] flex items-center justify-center">
              <MdOutlineSearch className="text-xl text-grey-500" />
            </div>
            <input
              type="search"
              placeholder="Search member"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="text-base placeholder:text-[#737373] focus:outline-none p-0 w-full placeholder:font-medium"
            />
          </div>
          <div className="placeholder:text-[#737373] "></div>

          {/* <UploadButton
            customStyle=""
            clickHandler={() => {
              toggleNotification();
            }}
          /> */}

          <CSVLink data={allData} headers={headers}>
            <div
              className={`inline-flex md:hidden space-x-3 items-center justify-start p-2.5 border border-grey-100 cursor-pointer text-[#737373] font-medium`}
            >
              <div className="h-[24px] w-[24px] flex items-center justify-center">
                <MdOutlineFileDownload className="text-xl text-grey-200" />
              </div>
              <p className="text-base font-medium">Download Data</p>
            </div>
          </CSVLink>

          <div className="gap-5 items-center flex flex-wrap 2xl:hidden">
            <div
              className="flex items-center space-x-4 bg-[#F9F2F2] text-[#F90000] px-4 py-2"
              onClick={() => { deleteAll()}}
            >
              <MdOutlineDelete className=" text-xl" />
              <p className="text-base">Delete all</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table */}
      <div className=" p-[20px]  md:p-0 md:mx-[40px] lg:mx-[60px] lg:p-1 mt-[30px] w-full overflow-scroll">
        {/* Table Header */}
        <div className="flex w-fit h-12 border border-gray-300 -ml-[1px] divide-x-[1px] divide-gray-300 bg-gray-50">
          {tableHeaders.map((header, index) => {
            return (
              <div
                className={`inline-flex items-center ${header.customStyle}  bg-gray-50`}
                key={index}
              >
                <p className="text-sm font-bold text-gray-500 uppercase">
                  {header.lable}
                </p>
              </div>
            );
          })}
        </div>

        {/* Table Content */}
        <div className=" pb-10 ">{loadedDataList}</div>
      </div>
      {/* Pagination */}
      <div className="p-[20px]  md:p-0 md:px-[40px] lg:px-[60px]">
        <Pagination
          list={allData}
          setlistStart={setListStart}
          setlistEnd={setListEnd}
        />
      </div>
    </div>
  );
};

export default DashMember;

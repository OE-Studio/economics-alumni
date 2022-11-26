import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";


import {
  MdPublic,
  MdOutlineFilterHdr,
  MdOutlineFeed,
  MdVerified,
  MdError,
  MdSchedule,
  MdOutlineCalendarToday,
} from "react-icons/md";

import {
  RiAddLine, RiSubtractLine,
} from "react-icons/ri";

// const baseURL = "http://localhost.:3001";
const baseURL = "https://uieaa.herokuapp.com";

const CreateForm = () => {
  const [documentName, setDocumentName] = useState();

  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    fileImage: "",
    eventTime: "",
    eventDate: "",
    eventLocation: "",
    buttonLabel: "",
    buttonLink: ""
  });

  const [error, setError] = useState("");
  const [image, setImage] = useState(false);
  const [message, setMessage] = useState(true);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = (item_id, e) => {
    let copiedShopCart = { ...formDetails };
    copiedShopCart[item_id] = e;

    setFormDetails((formDetails) => ({
      ...copiedShopCart,
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("enter press here! ");
    }

  };

  const uploadDocument = (result) => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/event/upload-event`,
      method: "POST",
      data: result,
    };

    axios(options)
      .then((result) => {
        console.log(result);
        if (result.status !== 200) {
          setError("Failed! Try Again");
          setTimeout(() => {
            setMessage(false);
          }, 3000);
        }

        if (result.status === 200 && !result.data.success) {
          setError(result.data.message);
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
          }, 3000);
          return;
        }

        if (result.status === 200 && result.data.success) {
          if (result.data.newEvent.status === "draft") {
            setSuccess("Event drafted successfully");
          }

          if (result.data.newEvent.status === "publish") {
            setSuccess("Event uploaded successfully");
          }
          setLoading(false);
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
            window.location.reload();
          }, 3000);
          return;
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };


  const upload = (status) => {
    setLoading(true);
    const { title, description, fileImage, eventTime, eventDate, eventLocation, buttonLabel, buttonLink } = formDetails;
    const data = new FormData();
    data.append("file", fileImage);
    data.append("title", title);
    data.append("description", description);
    data.append("eventTime", eventTime);
    data.append("eventDate", eventDate);
    data.append("eventLocation", eventLocation);
    data.append("buttonLabel", buttonLabel);
    data.append("buttonLink", buttonLink);
    data.append("status", status);
    uploadDocument(data);
  };

  // let status = "draft";


  // WIFI
  const [internet, setInternet] = React.useState(true)

  React.useEffect(() => {
    window.navigator.onLine ? setInternet(true) : setInternet(false)
  }, [internet])
  const [button, setButton] = useState(true);



  return (
    <div className="p-3 full lg:p-4 space-y-4">
      <p className="text-2xl font-semibold text-[#404040]">New Event</p>

      <form
        className="space-y-[24px] w-full"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          let activeElementAction =
            document.activeElement.getAttribute("formaction");
          if (activeElementAction === "publish") {
            upload("publish");
          }
          if (activeElementAction === "draft") {
            upload("draft");
          }
        }}
      >



        <label
          htmlFor="fileImage"
          className="flex items-center justify-center p-4 md:h-32 lg:h-40 2xl:h-64 bg-grey-50 border border-[#ECECEC] bg-cover hover:bg-contain bg-center bg-no-repeat"
          id="display-image"
        >
          <input
            required
            type="file"
            id="fileImage"
            name="documentImage"
            // value={formDetails.file}
            className="hidden"
            onChange={(e) => {
              let fileExt = e.target.files[0].type.split("/")[1];
              if (
                fileExt !== "jpg" &&
                fileExt !== "jpeg" &&
                fileExt !== "png"
              ) {
                e.target.value = "";
                return setDocumentName("Invalid Image type");
              }
              setDocumentName(e.target.files[0].name);
              handleClick("fileImage", e.target.files[0]);

              // READ IMAGE FILE
              const reader = new FileReader();
              reader.addEventListener("load", () => {
                const uploaded_image = reader.result;
                document.querySelector(
                  "#display-image"
                ).style.backgroundImage = `url(${uploaded_image})`;
              });
              reader.readAsDataURL(e.target.files[0]);
              setImage(true);
            }}
          />

          {!image && (
            <div className="flex flex-col items-center space-y-[10px] md:space-y-[20px]">
              <div className="h-[64px] w-[64px] rounded-full flex items-center justify-center bg-white">
                <MdOutlineFilterHdr className="text-xl text-grey-500" />
              </div>
              <p className="text-sm font-medium leading-tight text-gray-400">
                Tap to upload image
              </p>
            </div>
          )}
        </label>



        <div className="flex flex-col space-y-3 w-full">
          <p className="text-sm font-medium leading-tight  text-gray-400">
            Event title here
          </p>

          <input
            required
            name="documentTitle"
            type="text"
            value={formDetails.title}
            className="text-base text-gray-600 bg-transparent 
            focus:outline-grey-100
            focus:outline-1
            focus:bg-transparent border p-3 border-[#ECECEC]  rounded-none focus:rounded-none focus:border-0"
            placeholder=""
            onKeyPress={(e) => handleKeyPress(e)}
            onChange={(e) => {
              handleClick("title", e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col space-y-3 w-full">
          <p className="text-sm font-medium leading-tight  text-gray-400">
            Date of Event
          </p>
          <label
            htmlFor="pickDate"
            className="  flex justify-between items-center border relative"
          >
            <input
              type="date"
              id="pickDate"
              className="text-base 
            font-semibold text-left bg-white focus:bg-transparent  rounded-none focus:rounded-none focus:border-0 focus:outline-none w-full py-3 px-5"
              value={formDetails.eventDate}
              onChange={(e) => {
                handleClick("eventDate", e.target.value);
                console.log(formDetails.eventDate)
              }}
              style={{
                "&::WebkitCalendarPickerIndicator": {
                  display: "none",
                  "-webkit-appearance": "none",
                },
              }}
            />

            <div className=" flex items-center justify-center absolute right-4 bg-white h-full z-10 pointer-events-none">
              <MdOutlineCalendarToday className="text-2xl text-grey-200" />
            </div>
          </label>
        </div>

        <div className="flex flex-col space-y-3 w-full">
          <p className="text-sm font-medium leading-tight  text-gray-400">
            Time of Event
          </p>
          <label
            htmlFor="pickTime"
            className="  flex justify-between items-center border relative"
          >

            <input
              type="time"
              id="pickTime"
              className="text-base 
            font-semibold text-left bg-white focus:bg-transparent  rounded-none focus:rounded-none focus:border-0 focus:outline-none w-full py-3 px-5"
              value={formDetails.eventTime || format(Date.now(), "yyy-MM-dd")}
              onChange={(e) => {
                handleClick("eventTime", e.target.value);
              }}
              style={{
                "&::WebkitCalendarPickerIndicator": {
                  display: "none",
                  "-webkit-appearance": "none",
                },
              }}
            />

            <div className=" flex items-center justify-center absolute right-4 bg-white h-full z-10 pointer-events-none">
              <MdSchedule className="text-2xl text-grey-200" />
            </div>
          </label>
        </div>

        <div className="flex flex-col space-y-3 w-full">
          <p className="text-sm font-medium leading-tight  text-gray-400">
            Location
          </p>
          <textarea
            required
            placeholder=""
            id="eventLocation"
            name="eventLocation"
            value={formDetails.eventLocation}
            rows="4"
            cols="50"
            className="text-base text-gray-600 bg-transparent 
            focus:outline-grey-100
            focus:outline-1
            focus:bg-transparent border p-3 border-[#ECECEC]  rounded-none focus:rounded-none focus:border-0 resize-none"
            // defaultValue="Document Description."
            onChange={(e) => {
              handleClick("eventLocation", e.target.value);
            }}
          />
        </div>

        <div className="border border-gray-200 text-gray-600 w-full">
          {!button && <div className="flex space-x-2.5 items-center justify-center p-4 border-b border-gray-200 text-black bg-[#ECECEC] cursor-pointer" onClick={() => {
            setButton(true)
          }}>
            <RiAddLine className="text-xl " />
            <p> Add button</p>
          </div>}

          {button && <div className="flex space-x-2.5 items-center justify-center p-4 border-b border-gray-200 text-black bg-[#ECECEC] cursor-pointer" onClick={() => {
            let copiedShopCart = { ...formDetails };
            copiedShopCart.buttonLabel = "";
            copiedShopCart.buttonLink = "";
            setFormDetails((formDetails) => ({
              ...copiedShopCart,
            }));
            setButton(false)
          }}>
            <RiSubtractLine className="text-xl " />
            <p> Remove button</p>
          </div>}
          {button && <div className="p-4 space-y-4 w-full">
            <div className="flex space-x-2.5 items-center justify-start border border-gray-200 w-full ">
              <p className="p-4 border-r text-sm border-gray-200 w-1/3">Button Name</p>
              <input
                name="buttonLabel"
                type="text"
                value={formDetails.buttonLabel}
                className="text-base text-gray-600 bg-transparent focus:outline-transparent focus:bg-transparent"
                placeholder=""
                id="buttonLabel"
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={(e) => {
                  handleClick("buttonLabel", e.target.value);
                }}
              />
            </div>
            <div className="flex space-x-2.5 items-center justify-start border  border-gray-200 w-full ">
              <p className="p-4 border-r border-gray-200 w-1/3 text-sm">Button Link</p>
              <input
                name="buttonLink"
                id="buttonLink"
                type="text"
                value={formDetails.buttonLink}
                className="text-base text-gray-600 bg-transparent focus:outline-transparent focus:bg-transparent"
                placeholder=""
                onKeyPress={(e) => handleKeyPress(e)}
                onChange={(e) => {
                  handleClick("buttonLink", e.target.value);
                }}
              />
            </div>
          </div>}
        </div>

        <p className="text-sm">{documentName}</p>

        {message && success && (
          <div className=" bg-[#64B300] flex text-white font-semibold space-x-4 p-4 items center left-1/2 -translate-x-1/2 fixed top-[2vh] md:top-[70vh] lg:top-[75vh] mt-[18px] z-90 w-full  lg:w-124 md:w-[80vw]">
            <MdVerified className="text-xl" />
            <span>{success}</span>
          </div>
        )}
        {message && error && (
          <div className=" bg-[#b30000] flex text-white font-semibold space-x-4 p-4 items center left-1/2 -translate-x-1/2 fixed top-[2vh] md:top-[72vh] lg:top-[77vh] mt-[18px] z-90 w-full  lg:w-124 md:w-[80vw]">
            <MdError className="text-xl" />
            <span>{error}</span>
          </div>
        )}

        <button
          disabled={loading}
          type="submit"
          className="flex items-center justify-between px-8 py-4 bg-black shadow w-full disabled:opacity-50 disabled:cursor-not-allowed"
          formAction="publish"
        >
          <p className="text-base font-bold text-white">{loading ? <span className="basic" /> : "Publish"}</p>
          <MdPublic className="text-xl text-white" />
        </button>
        <button
          disabled={loading}
          type="submit"
          formAction="draft"
          className="flex items-center justify-between px-8 py-4 bg-white shadow border  border-black w-full text-[#404040] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <p className="text-base font-bold">Save as draft</p>
          <MdOutlineFeed className="text-xl " />
        </button>
      </form>
    </div>
  );
};

export default CreateForm;

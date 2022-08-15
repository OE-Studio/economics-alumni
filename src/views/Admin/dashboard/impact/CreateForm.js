import React, { useState } from "react";
import axios from "axios";


import {
  MdPublic,
  MdOutlineFilterHdr,
  MdOutlineFeed,
  MdVerified,
  MdError,
  MdExpandMore,
  MdExpandLess,
  MdOutlineCalendarToday,
} from "react-icons/md";


// const baseURL = "http://localhost.:3001";
const baseURL = "https://uieaa.herokuapp.com";

const CreateForm = () => {
  const [documentName, setDocumentName] = useState();
  const [impactType, setImpactType] = useState("Individual");
  const [typeDropdown, setTypeDropdown] = useState(false);
  const [formDetails, setFormDetails] = useState({
    impactType: "Individual",
    impactSetYear: "",
    description: "",
    impactDate: "",
    impactImage: "",
    
  });
  const [error, setError] = useState("");
  const [image, setImage] = useState(false);
  const [message, setMessage] = useState(true);
  const [success, setSuccess] = useState("");

  const handleClick = (item_id, e) => {
    let copiedShopCart = { ...formDetails };
    copiedShopCart[item_id] = e;
    setFormDetails((formDetails) => ({
      ...copiedShopCart,
    }));
  };


  const uploadDocument = (result) => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/impact/upload-impact`,
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
          if (result.data.newImpact.status === "draft") {
            setSuccess("Image drafted successfully");
          }

          if (result.data.newImpact.status === "publish") {
            setSuccess("Impact uploaded successfully");
          }

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
    const { impactType,impactSetYear, description, impactDate, impactImage } = formDetails;
    const data = new FormData();
    data.append("file", impactImage);
    data.append("description", description);
    data.append("impactType", impactType);
    data.append("impactSetYear", impactSetYear);
    data.append("impactDate", impactDate);
    data.append("status", status);
    uploadDocument(data);
  };

  // let status = "draft";

  // WIFI
  const [internet, setInternet] = React.useState(true);

  React.useEffect(() => {
    window.navigator.onLine ? setInternet(true) : setInternet(false);
  }, [internet]);

  
  return (
    <div className="p-3 full lg:p-4 space-y-4">
      <p className="text-2xl font-semibold text-[#404040]">New Impact</p>

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
        <div className="flex flex-col space-y-3 w-full">
          <p className="text-sm font-medium leading-tight  text-gray-400">
            Type
          </p>

          <div>
            <div className="custom-select relative w-full border py-3 px-5 border-[#ECECEC]">
              <div
                className="flex justify-between items-center"
                onClick={() => {
                  setTypeDropdown(!typeDropdown);
                }}
              >
                <p>{impactType}</p>
                <div className="h-[24px] w-[24px] flex items-center justify-center">
                  {!typeDropdown && <MdExpandMore className="text-xl" />}

                  {typeDropdown && <MdExpandLess className="text-xl" />}
                </div>
              </div>

              {typeDropdown && (
                <div
                  className={`absolute bg-white shadow-xl flex flex-col top-full right-0 space-y-1.5 z-20 divide-y w-full`}
                >
                  <p
                    className="p-4"
                    onClick={() => {
                      handleClick("impactType", "Individual");
                      setImpactType("Individual");
                      setTypeDropdown(!typeDropdown);
                    }}
                  >
                    Individual
                  </p>
                  <p
                    className="p-4"
                    onClick={() => {
                      handleClick("impactType", "Set of");
                      setImpactType("Set of");
                      setTypeDropdown(!typeDropdown);
                    }}
                  >
                    Set of
                  </p>
                </div>
              )}
            </div>
            {impactType === "Set of" && (
              <div className="bg-grey-50 p-3 px-5 flex justify-between items-center border border-t-0">
                <div>
                  <p className="text-xs font-medium text-grey-200">
                    Enter year of set
                  </p>
                  <input
                    className="text-base font-semibold 
                    bg-transparent
                    focus:bg-transparent  rounded-none focus:rounded-none focus:border-0 focus:outline-none w-full"
                    placeholder="2000"
                    onChange={(e) => {
                      handleClick("impactSetYear", e.target.value);
                    }}
                  />
                </div>
                <div className="h-[24px] w-[24px] flex items-center justify-center">
                  <MdOutlineCalendarToday className="text-2xl text-grey-200" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-3 w-full">
          <p className="text-sm font-medium leading-tight  text-gray-400">
            Date
          </p>
          <label
            htmlFor="pickDate"
            className="  flex justify-between items-center border relative"
          >
            <input
              type="date"
              id="pickDate"
              className="text-base 
            font-semibold text-left bg-white focus:bg-transparent  rounded-none focus:rounded-none focus:border-0 focus:outline-none w-full p-3 px-5"
              value={formDetails.impactDate}
              onChange={(e) => {
                handleClick("impactDate", e.target.value);
              }}
              style={{
                "&::-webkit-calendar-picker-indicator": {
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
            Description of Impact
          </p>
          <textarea
            required
            placeholder=""
            id="documentDescription"
            name="documentDescription"
            value={formDetails.description}
            rows="4"
            cols="50"
            className="text-base text-gray-600 bg-transparent 
            focus:outline-grey-100
            focus:outline-1
            focus:bg-transparent border p-3 border-[#ECECEC]  rounded-none focus:rounded-none focus:border-0 resize-none"
            // defaultValue="Document Description."
            onChange={(e) => {
              handleClick("description", e.target.value);
            }}
          />
        </div>

        <label
          htmlFor="impactImage"
          className="flex items-center justify-center p-4 md:h-32 lg:h-40 2xl:h-64 bg-grey-50 border border-[#ECECEC] bg-cover hover:bg-contain bg-center bg-no-repeat"
          id="display-image"
        >
          <input
            required
            type="file"
            id="impactImage"
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
              handleClick("impactImage", e.target.files[0]);

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
          type="submit"
          className="flex items-center justify-between px-8 py-4 bg-black shadow  w-full"
          formAction="publish"
        >
          <p className="text-base font-bold text-white">Publish</p>
          <MdPublic className="text-xl text-white" />
        </button>
        <button
          type="submit"
          formAction="draft"
          className="flex items-center justify-between px-8 py-4 bg-white shadow border  border-black w-full text-[#404040]"
        >
          <p className="text-base font-bold">Save as draft</p>
          <MdOutlineFeed className="text-xl " />
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
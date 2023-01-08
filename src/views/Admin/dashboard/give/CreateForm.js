import React, { useState } from "react";
import axios from "axios";


import {
  MdPublic,
  MdOutlineFeed,
  MdVerified,
  MdError,
} from "react-icons/md";



// const baseURL = "http://localhost.:3001";
const baseURL = "https://uieaa.herokuapp.com";

const CreateForm = () => {
  

  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState("");

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
      url: `${baseURL}/give/upload-give-request`,
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
          }, 2000);
          return;
        }

        if (result.status === 200 && result.data.success) {
          if (result.data.newEvent.status === "draft") {
            setSuccess("Request drafted successfully");
          }

          if (result.data.newEvent.status === "publish") {
            setSuccess("Request uploaded successfully");
          }
          setLoading(false);
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
            window.location.reload();
          }, 2000);
          return;
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };


  const upload = (status) => {
    setLoading(true);
    const { title, description } = formDetails;
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("status", status);
    uploadDocument(data);
  };



  // WIFI
  const [internet, setInternet] = React.useState(true)

  React.useEffect(() => {
    window.navigator.onLine ? setInternet(true) : setInternet(false)
  }, [internet])



  return (
    <div className="p-3 full lg:p-4 space-y-4">
      <p className="text-2xl font-semibold text-[#404040]">New Request</p>

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
          Request title
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
          Request description
          </p>
          <textarea
            required
            placeholder=""
            id="requestDescription"
            name="requestDescription"
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

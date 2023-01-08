import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  MdPublic,
  MdOutlineFeed,
  MdVerified,
  MdError,
} from "react-icons/md";




// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

const EditForm = ({ currentImage }) => {
  


  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState("");
  
  const [message, setMessage] = useState(true);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    let copiedShopCart = { ...formDetails };
    if (currentImage.length > 0) {
      
      copiedShopCart.title = currentImage[0].title;
      copiedShopCart.description = currentImage[0].description;      
      setFormDetails((formDetails) => ({
        ...copiedShopCart,
      }));
    }

    // eslint-disable-next-line
  }, [currentImage]);

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

  const updateDocument = (result) => {
    const options = {
      headers: { 'Content-Type': undefined },
      url: `${baseURL}/give/update-give-request`,
      method: "POST",
      data: result,
    };

    axios(options).then((result) => {
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
        return
      }


      if (result.status === 200 && result.data.success) {
        setSuccess("Request updated successfully");
        window.location.reload();
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 3000);
        return
      }
    }).catch((error) => {
      console.log(error.response.data);
    });
  };

  const upload = (status) => {
    const { title, description,  } = formDetails;
    console.log(formDetails)
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("status", status);
    data.append("uuid", currentImage[0].uuid);
    updateDocument(data);
  };


  
 

  return (
    <div className="p-3 full lg:p-4 space-y-4">
      <p className="text-2xl font-semibold text-gray-700">Edit Request</p>

      <form
        action=""
        className="space-y-4 w-full"
        encType="multipart/form-data"
      >


        

        <div className="flex flex-col space-y-3 w-full">
          <p className="text-sm font-medium leading-tight  text-gray-400">
            Request Title
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
            Request Description
          </p>
          <textarea
            required
            placeholder=""
            id="eventLocation"
            name="eventLocation"
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
          type="submit"
          className="flex items-center justify-between px-8 py-4 bg-black shadow w-full"
          onClick={(e) => {
            e.preventDefault();
            upload("publish");
          }}
        >
         <p className="text-base font-bold text-white">Publish</p>
          <MdPublic className="text-xl text-white" />
        </button>
        <button
          type="submit"
          className="flex items-center justify-between px-8 py-4 bg-white shadow border  border-black w-full text-[#404040]"
          onClick={(e) => {
            e.preventDefault();
            upload("draft");
          }}
        >
           <p className="text-base font-bold">Save as draft</p>
          <MdOutlineFeed className="text-xl " />
        </button>
      </form>
    </div>
  );
};

export default EditForm;

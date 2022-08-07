import React, { useState } from "react";
import axios from "axios";


import {
  MdPublic,
  MdOutlineFilterHdr,
  MdOutlineFeed,
  MdVerified,
  MdError,
} from "react-icons/md";

// const baseURL = "http://localhost:3001";
const baseURL = "https://htprtp.herokuapp.com";

const ImageForm = () => {
  const [documentName, setDocumentName] = useState();
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    file: "",
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("enter press here! ");
    }
  };

  const uploadDocument = (result) => {
    const options = {
      headers: { "Content-Type": undefined },
      url: `${baseURL}/image/upload-image`,
      method: "POST",
      data: result,
    };

    axios(options)
      .then((result) => {
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
          if (result.data.newResearch.status === "draft") {
            setSuccess("Image drafted successfully");
          }

          if (result.data.newResearch.status === "publish") {
            setSuccess("Image uploaded successfully");
          }

          setMessage(true);
          setTimeout(() => {
            setMessage(false);
          }, 3000);
          return;
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const publishResearch = () => {
    let status = "publish";
    const { title, description, file } = formDetails;
    const data = new FormData();
    data.append("document", file);
    data.append("title", title);
    data.append("description", description);
    data.append("status", status);
    // uploadDocument({ title, description, data, status });
    uploadDocument(data);
  };
  const draftResearch = () => {
    let status = "draft";
    const { title, description, file } = formDetails;
    const data = new FormData();
    data.append("document", file);
    data.append("title", title);
    data.append("description", description);
    data.append("status", status);
    // uploadDocument({ title, description, data, status });
    uploadDocument(data);
  };


   // WIFI
   const [internet, setInternet] = React.useState(true)

   React.useEffect(() => {
     window.navigator.onLine ? setInternet(true) : setInternet(false)
   }, [internet])

  return (
    <div className="p-3 full lg:p-4 space-y-4">
      <p className="text-2xl font-semibold text-[#404040]">New Image</p>

      <form
        className="space-y-[24px] w-full"
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault();
          let activeElementAction =
            document.activeElement.getAttribute("formaction");
          if (activeElementAction === "publish") {
            publishResearch();
          }
          if (activeElementAction === "draft") {
            draftResearch();
          }
        }}
      >
        <label
          htmlFor="file"
          className="flex items-center justify-center p-4 md:h-32 lg:h-40 2xl:h-64 bg-grey-50 border border-[#ECECEC] bg-cover hover:bg-contain bg-center bg-no-repeat"
          id="display-image"
        >
          <input
            required
            type="file"
            id="file"
            name="document"
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
              handleClick("file", e.target.files[0]);

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
            Image title here
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
            Image description
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

        <p className="text-sm">{documentName}</p>

        {message && success && (
          <div className=" bg-[#64B300] flex text-white font-semibold space-x-4 p-4 items center left-1/2 -translate-x-1/2 fixed top-[2vh] md:top-[70vh] lg:top-[75vh] mt-[18px] z-90 w-full  lg:w-124 md:w-[80vw]">
            <MdVerified className="text-xl" />
            <span>{success}</span>
          </div>
        )}
        {message && error && (
          <div className=" bg-[#b30000] flex text-white font-semibold space-x-4 p-4 items center left-1/2 -translate-x-1/2 fixed top-[2vh] md:top-[70vh] lg:top-[75vh] mt-[18px] z-90 w-full  lg:w-124 md:w-[80vw]">
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

export default ImageForm;

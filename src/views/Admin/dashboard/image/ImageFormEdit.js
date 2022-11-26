import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  RiFileLine,
  RiAddLine,
  RiFileTextLine,
  RiGlobalLine,
  RiDraftLine,
  RiInformationLine,
  RiImageLine
} from "react-icons/ri";

// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

const ImageForm = ({ currentImage }) => {
  const [documentName, setDocumentName] = useState();

  const [imageURL, setImageURL] = useState("");

  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    file: "",
  });
  const [error, setError] = useState("");
  const [image, setImage] = useState(true);
  const [message, setMessage] = useState(true);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let copiedShopCart = { ...formDetails };
    if (currentImage.length > 0) {
      setImageURL(currentImage[0].documentURL);
      copiedShopCart.title = currentImage[0].title;
      copiedShopCart.description = currentImage[0].description;
      copiedShopCart.file = "";
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
      url: `${baseURL}/image/update-image`,
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
        setLoading(false);
        setTimeout(() => {
          setMessage(false);
        }, 1500);
        return
      }


      if (result.status === 200 && result.data.success) {
        setSuccess("Image updated successfully");
        setLoading(false);
        setMessage(true);
        setTimeout(() => {
          window.location.reload();
          setMessage(false);
        }, 1500);
        return
      }
    }).catch((error) => {
      console.log(error.response.data);
    });
  };

  const publishResearch = () => {
    let status = "publish";
    const { title, description, file } = formDetails;
    const data = new FormData();
    data.append("uuid", currentImage[0].uuid);
    data.append("document", file);
    data.append("title", title);
    data.append("description", description);
    data.append("status", status);
    // uploadDocument({ title, description, data, status });
    updateDocument(data);
  };
  const draftResearch = () => {
    let status = "draft";
    const { title, description, file } = formDetails;
    const data = new FormData();
    data.append("uuid", currentImage[0].uuid);
    data.append("document", file);
    data.append("title", title);
    data.append("description", description);
    data.append("status", status);
    // uploadDocument({ title, description, data, status });
    updateDocument(data);
  };

  return (
    <div className="p-3 full lg:p-4 space-y-4">
      <p className="text-2xl font-semibold text-gray-700">New Image</p>

      {!image && <div className="flex p-6 items-center justify-center md:h-32 lg:h-40 2xl:h-64 bg-[#f2f2f2] rounded-lg">
        <div className="bg-white p-6 rounded-full">
          <RiImageLine className="text-[#acacac] text-3xl font-bold" />
        </div>
      </div>}

      {image && <div className="flex items-center justify-center md:h-32 lg:h-40 2xl:h-64 bg-[#f2f2f2] rounded-lg bg-cover hover:bg-contain bg-center bg-no-repeat" id="display-image-edit" style={{ backgroundImage: `url(${imageURL.toString()})` }}>
      </div>}

      <form
        action=""
        className="space-y-4 w-full"
        encType="multipart/form-data"
      >
        <div className="flex space-x-2.5 items-center justify-start p-4 border rounded border-gray-200 w-full focus-within:border-blue-500">
          <RiFileLine className="text-lg text-[#737373]" />
          <input
            name="documentTitle"
            type="text"
            value={formDetails.title}
            className="text-base text-gray-600 bg-transparent focus:outline-transparent focus:bg-transparent"
            placeholder="Image title here"
            onKeyPress={(e) => handleKeyPress(e)}
            onChange={(e) => {
              handleClick("title", e.target.value);
            }}
          />
        </div>
        <div className="flex space-x-2.5 justify-start p-4 border rounded border-gray-200 w-full">
          <RiFileTextLine className="text-lg text-[#737373] inline-block" />
          <textarea
            placeholder="Image Description"
            id="documentDescription"
            name="documentDescription"
            value={formDetails.description}
            rows="4"
            cols="50"
            className="text-lg text-[#737373] focus:outline-transparent"
            // defaultValue="Document Description."
            onChange={(e) => {
              handleClick("description", e.target.value);
            }}
          />
        </div>

        <div className="p-4 border rounded border-gray-200 w-full">
          <input
            required
            type="file"
            id="file-image-edit"
            name="document"
            // value={formDetails.file}
            className="hidden"
            onChange={(e) => {
              let fileExt = e.target.files[0].type.split("/")[1]
              if (fileExt !== "jpg" && fileExt !== 'jpeg' && fileExt !== 'png') {
                e.target.value = "";
                return setDocumentName("Invalid Image type");
              }
              setDocumentName(e.target.files[0].name);
              handleClick("file", e.target.files[0]);

              // READ IMAGE FILE
              const reader = new FileReader();
              reader.addEventListener("load", () => {
                const uploaded_image = reader.result;
                document.querySelector("#display-image-edit").style.backgroundImage = `url(${uploaded_image})`;
              });
              reader.readAsDataURL(e.target.files[0]);
              setImage(true)

            }}
          />

          <label
            htmlFor="file-image-edit"
            className="flex items-center justify-center space-x-2.5 cursor-pointer"
          >
            <RiAddLine className="text-xl text-gray-500" />
            <p className="text-base text-gray-400">Upload Image</p>
          </label>
        </div>

        <p className="text-sm">{documentName}</p>


        {message && success && (
          <div className=" bg-green-100 flex text-green-500 font-semibold space-x-4 p-4 items center rounded-lg">
            <RiInformationLine className="text-xl" />
            <span>{success}</span>
          </div>
        )}
        {message && error && (
          <div className=" bg-red-100 dark:bg-white flex text-red-500 font-semibold space-x-4 p-4 items center rounded-lg">
            <RiInformationLine className="text-xl" />
            <span>{error}</span>
          </div>
        )}



        <button
        disabled={loading}
          type="submit"
          className="flex items-center justify-between px-8 py-4 bg-blue-500 shadow rounded w-full disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={(e) => {
            e.preventDefault();
            publishResearch();
          }}
        >
          <p className="text-base font-bold text-white">{loading ? <span className="basic" /> : "Publish Image"}</p>
          <RiGlobalLine className="text-xl text-white" />
        </button>
        <button
        disabled={loading}
          type="submit"
          className="flex items-center justify-between px-8 py-4 bg-white shadow border rounded border-blue-500 w-full text-[#404040] disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={(e) => {
            e.preventDefault();
            draftResearch();
          }}
        >
          <p className="text-base font-bold">Save as draft</p>
          <RiDraftLine className="text-xl " />
        </button>
      </form>
    </div>
  );
};

export default ImageForm;

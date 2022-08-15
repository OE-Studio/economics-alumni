import React, { useState } from "react";
import axios from "axios";


import {
  MdVerified,
  MdError,
} from "react-icons/md";



// const baseURL = "http://localhost.:3001";
const baseURL = "https://uieaa.herokuapp.com";


const fields = [
  {
    label: "Full name",
    placeholder: "",
    name: "fullName"
  },
  {
    label: "Degree earned in the Department",
    placeholder: "",
    name: "degree"
  },
  {
    label: "Alias while in school",
    placeholder: "",
    name: "alias"
  },
  {
    label: "Current work place",
    placeholder: "",
    name: "workplace"
  },
  {
    label: "Position or title",
    placeholder: "",
    name: "position"
  },
  {
    label: "Contact address",
    placeholder: "",
    name: "address"
  },
  {
    label: "Phone number",
    placeholder: "",
    name: "phoneNumber"
  },
  {
    label: "Email address",
    placeholder: "",
    name: "emailAddress"
  },
  {
    label: "Graduation year",
    placeholder: "",
    name: "yearGraduated"
  },
  {
    label: "Are you in your set’s whatsapp group?",
    placeholder: "",
    name: "isGroupPresent"
  },
  {
    label: "Are you an “Admin” in your set’s whatsapp group?",
    placeholder: "",
    name: "isAdmin"
  },
];

function InputComponent({ label, placeholder, name, handleClick }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full">
      <p className="text-sm font-semibold leading-tight text-gray-500 lg:w-[30%]">{label}</p>
      <input
        name={name}
        type="text"
        onChange={e => {
          handleClick(name, e.target.value)
        }}
        placeholder={placeholder}
        className="bg-white p-4 w-full lg:w-[60%] placeholder:text-[12px]"
      />
    </div>
  );
}


const CreateForm = () => {
  // eslint-disable-next-line
  const [documentName, setDocumentName] = useState();
  const [formDetails, setFormDetails] = useState({
    fullName: "",
    degree: "",
    alias: "",
    workplace: "",
    position: "",
    address: "",
    phoneNumber: "",
    emailAddress: "",
    yearGraduated: "",
    isGroupPresent: "",
    isAdmin: "",
  });
  const [error, setError] = useState("");
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
      url: `${baseURL}/newsletter/upload-newsletter`,
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
          if (result.data.newNewsletter.status === "draft") {
            setSuccess("Image drafted successfully");
          }

          if (result.data.newNewsletter.status === "publish") {
            setSuccess("Newsletter uploaded successfully");
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


  const upload = (status) => {
    const { title, description, fileImage, fileDocument } = formDetails;
    const data = new FormData();
    data.append("file", fileImage);
    data.append("file", fileDocument);
    data.append("title", title);
    data.append("description", description);
    data.append("status", status);
    uploadDocument(data);
  };

  // let status = "draft";


  // WIFI
  const [internet, setInternet] = React.useState(true)

  React.useEffect(() => {
    window.navigator.onLine ? setInternet(true) : setInternet(false)
  }, [internet])

  return (
    <div className="p-3 full lg:p-4 space-y-4">
      <p className="text-2xl font-semibold text-[#404040]">New Newsletter</p>

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




        {fields.map((field, index) => {
          return (
            <InputComponent
              label={field.label}
              placeholder={field.placeholder}
              name={field.name}
              handleClick={handleClick}
            />
          );
        })}
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 lg:justify-between">
          <div className="inline-flex items-center justify-center lg:w-[45%] h-14  pt-5 pb-4 border border-gray-300">
            <p className="text-base font-semibold text-gray-500 uppercase">
              Delete
            </p>
          </div>
          <div className="inline-flex items-center justify-center lg:w-[45%]  h-14  pt-5 pb-4 bg-blue-600">
            <p className="text-base font-semibold text-white uppercase">
              Edit
            </p>
          </div>
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
      </form>
    </div>
  );
};

export default CreateForm;

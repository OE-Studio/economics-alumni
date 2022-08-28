import React, { useState, useEffect } from "react";
import axios from "axios";


import {
  
  MdVerified,
  MdError,
} from "react-icons/md";


// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

const fields = [
  {
    label: "Full name",
    placeholder: "Firstname Lastname",
    name: "fullName",
    type: "text"
  },
  {
    label: "Degree earned in the Department",
    placeholder: "BSc, MSc, MBA",
    name: "degree",
    type: "text"
  },
  {
    label: "Alias while in school",
    placeholder: "Nickname",
    name: "alias",
    type: "text"
  },
  {
    label: "Current work place",
    placeholder: "",
    name: "workplace",
    type: "text"
  },
  {
    label: "Position or title",
    placeholder: "",
    name: "position",
    type: "text"
  },
  {
    label: "Contact address",
    placeholder: "",
    name: "address",
    type: "text"
  },
  {
    label: "Phone number",
    placeholder: "",
    name: "phoneNumber",
    type: "text"
  },
  {
    label: "Email address",
    placeholder: "",
    name: "emailAddress",
    type: "email"
  },
  {
    label: "Graduation year",
    placeholder: "B.Sc 1988, MBA 1998",
    name: "yearGraduated",
    type: "numeric"
  },
  {
    label: "Are you in your set’s whatsapp group?",
    placeholder: "Yes or No",
    name: "isGroupPresent",
    type: "text"
  },
  {
    label: "Are you an “Admin” in your set’s whatsapp group?",
    placeholder: "Yes or No",
    name: "isAdmin",
    type: "text"
  },
];

function InputComponent({ label, placeholder, name, handleClick, formDetails }) {
  return (
    <div className="flex flex-col space-y-2 lg:space-y-0 lg:items-center lg:flex-row lg:justify-between w-full">
      <p className="text-sm font-semibold leading-tight text-gray-500 lg:w-[30%]">{label}</p>
      <input
        required
        name={name}
        type="text"
        value={formDetails[name]}
        onChange={e => {
          handleClick(name, e.target.value)
        }}
        placeholder={placeholder}
        className="bg-white p-4 w-full lg:w-[60%] placeholder:text-[12px]"
      />
    </div>
  );
}

const EditForm = ({ currentImage, toggleNotification }) => {


  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    fileImage: "",
    fileDocument: ""
  });

  const [error, setError] = useState("");

  const [message, setMessage] = useState(true);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    let copiedShopCart = { ...formDetails };
    if (currentImage.length > 0) {


      copiedShopCart.fullName = currentImage[0].fullName;
      copiedShopCart.degree = currentImage[0].degree;
      copiedShopCart.alias = currentImage[0].alias;
      copiedShopCart.workplace = currentImage[0].workplace;
      copiedShopCart.position = currentImage[0].position;
      copiedShopCart.address = currentImage[0].address;
      copiedShopCart.phoneNumber = currentImage[0].phoneNumber
      copiedShopCart.emailAddress = currentImage[0].emailAddress
      copiedShopCart.yearGraduated = currentImage[0].yearGraduated
      copiedShopCart.isGroupPresent = currentImage[0].isGroupPresent
      copiedShopCart.isAdmin = currentImage[0].isAdmin




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


  const updateDocument = (result) => {
    const options = {
      headers: { 'Content-Type': undefined },
      url: `${baseURL}/newsletter/update-newsletter`,
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
        setSuccess("Newsletter updated successfully");
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

  // eslint-disable-next-line
  const upload = (status) => {
    const { title, description, fileImage, fileDocument } = formDetails;
    console.log(formDetails)
    const data = new FormData();
    data.append("file", fileImage);
    data.append("file", fileDocument);
    data.append("title", title);
    data.append("description", description);
    data.append("status", status);
    data.append("uuid", currentImage[0].uuid);
    updateDocument(data);
  };



  return (
    <section className="p-4 pb-0 md:pb-0 font-inter">
      <div className="bg-[#F8F8F8] space-y-5 p-4 lg:p-4 lg:mx-auto">
        {fields.map((field, index) => {
          return (
            <InputComponent
              key={index}
              label={field.label}
              placeholder={field.placeholder}
              name={field.name}
              handleClick={handleClick}
              formDetails={formDetails}
            />
          );
        })}
        {message && success && (
          <div className=" bg-[#64B300] flex text-white font-semibold space-x-4 p-4 items center mt-[18px] z-90 w-full  lg:w-124 md:w-[80vw]">
            <MdVerified className="text-xl" />
            <span>{success}</span>
          </div>
        )}
        {message && error && (
          <div className=" bg-[#b30000] flex text-white font-semibold space-x-4 p-4 items center  mt-[18px] z-90 w-full  lg:w-124 md:w-[80vw]">
            <MdError className="text-xl" />
            <span>{error}</span>
          </div>
        )}

        <hr />
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 justify-end">

          <div className="inline-flex items-center justify-end  py-2  px-8 bg-blue-600"
            onClick={() => {
              toggleNotification()
            }}

          >
            <p className="text-base font-semibold text-white uppercase">
              Close
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditForm;

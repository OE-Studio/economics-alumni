import React, { useState } from "react";
import axios from "axios";
import {
  MdVerified,
  MdError,
} from "react-icons/md";


function InputComponent({ label, placeholder, name, handleClick }) {
  return (
    <div className="flex flex-col space-y-2 lg:space-y-0 lg:items-center lg:flex-row lg:justify-between w-full">
      <p className="text-sm font-semibold leading-tight text-gray-500 lg:w-[30%]">{label}</p>
      <input
        required
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


// const baseURL = "http://localhost:3001";
const baseURL = "https://uieaa.herokuapp.com";

const RegistrationForm = () => {

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





  const uploadDocument = (data) => {
    const options = {
      headers: {
        "Content-Type": 'application/json',
      },
      url: `${baseURL}/member/upload-member`,
      method: "POST",
      data: data,
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
          console.log("here")
          setError(result.data.message);
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
            setError("")
          }, 3000);
          return;
        }

        if (result.status === 200 && result.data.success) {

          setSuccess("Member uploaded successfully");
          setMessage(true);
          setTimeout(() => {
            setMessage(false);
            setSuccess("")
          }, 3000);
          return;
        }
      })
      .catch((error) => {
        if (!error.response.data) {
          setMessage(true);
          setError("Check your Internet & Try Again");
          setTimeout(() => {
            setMessage(false);
            setError("")
          }, 3000);

          return;
        }

        console.log(!error.response.data);
      });
  };


  const upload = () => {

    // const data = new FormData();
    // const { fullName,
    //   degree,
    //   alias,
    //   workplace,
    //   position,
    //   address,
    //   phoneNumber,
    //   emailAddress,
    //   yearGraduated,
    //   isGroupPresent,
    //   isAdmin, } = formDetails;

    // data.append("fullName", fullName);
    // data.append("degree", degree);
    // data.append("alias", alias);
    // data.append("workplace", workplace);
    // data.append("position", position);
    // data.append("address", address);
    // data.append("phoneNumber", phoneNumber);
    // data.append("emailAddress", emailAddress);
    // data.append("yearGraduated", yearGraduated);
    // data.append("isGroupPresent", isGroupPresent);
    // data.append("isAdmin", isAdmin);

    // Loop Data append
    // for (var key in formDetails) {
    //   data.append(key, formDetails[key]);
    // }

    uploadDocument({ ...formDetails });
  };


  return (
    <section className="my-10 p-4 md:p-10 lg:px-16 pb-0 md:pb-0 container mx-auto font-inter">
      <div className="bg-[#F8F8F8] space-y-5 p-4 lg:p-10 lg:w-[60%] lg:mx-auto">
        {fields.map((field, index) => {
          return (
            <InputComponent
              key={index}
              label={field.label}
              placeholder={field.placeholder}
              name={field.name}
              handleClick={handleClick}
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
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 lg:justify-between">
          <div className="inline-flex items-center justify-center lg:w-[45%] h-14  pt-5 pb-4 border border-gray-300" onClick={() => {
            window.location.reload()
          }}>
            <p className="text-base font-semibold text-gray-500 uppercase">
              Clear all answers
            </p>
          </div>
          <div className="inline-flex items-center justify-center lg:w-[45%]  h-14  pt-5 pb-4 bg-blue-600"
            onClick={() => {
              upload()
            }}

          >
            <p className="text-base font-semibold text-white uppercase">
              Submit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;

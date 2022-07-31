import React from "react";

function InputComponent({ label, placeholder }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full">
      <p className="text-base font-semibold text-gray-500 lg:w-[30%]">{label}</p>
      <input
        type="text"
        placeholder="Search Image title date or description..."
        className="bg-white p-4 w-full lg:w-[60%] placeholder:text-[12px]"
      />
    </div>
  );
}

const fields = [
  {
    label: "Full name",
    placeholder: "",
  },
  {
    label: "Degree earned in the Department",
    placeholder: "",
  },
  {
    label: "Alias while in school",
    placeholder: "",
  },
  {
    label: "Current work place",
    placeholder: "",
  },
  {
    label: "Position or title",
    placeholder: "",
  },
  {
    label: "Contatct address",
    placeholder: "",
  },
  {
    label: "Phone number",
    placeholder: "",
  },
  {
    label: "Email address",
    placeholder: "",
  },
  {
    label: "Graduation year",
    placeholder: "",
  },
  {
    label: "Are you in your set’s whatsapp group?",
    placeholder: "",
  },
  {
    label: "Are you in an “Admin” in your set’s whatsapp group?",
    placeholder: "",
  },
];

const RegistrationForm = () => {
  return (
    <section className="my-10 p-4 md:p-10 lg:px-16 pb-0 md:pb-0 container mx-auto font-inter">
      <div className="bg-[#F8F8F8] space-y-5 p-4 lg:p-10 lg:w-[60%] lg:mx-auto">
        {fields.map((field, index) => {
          return (
            <InputComponent
              label={field.label}
              placeholder={field.placeholder}
            />
          );
        })}
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 lg:justify-between">
          <div className="inline-flex items-center justify-center lg:w-[45%] h-14 px-14 pt-5 pb-4 border border-gray-300">
            <p className="text-base font-semibold text-gray-500 uppercase">
              Clear all answers
            </p>
          </div>
          <div className="inline-flex items-center justify-center lg:w-[45%]  h-14 px-28 pt-5 pb-4 bg-blue-600">
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

import React from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const PastExperienceBox = ({
  yearOfExp,
  designation,
  occupation,
  country,
  handleDelete,
  handleEdit,
}) => {
  const data = [
    {
      title: "Total Years Of Experience",
      value: yearOfExp,
    },
    {
      title: "Designation",
      value: designation,
    },
    {
      title: "Occupation",
      value: occupation,
    },
    {
      title: "Country",
      value: country,
    },
  ];

  return (
    <div className="bg-gray-400 bg-opacity-70 p-4 pr-20 rounded-xl relative flex flex-wrap items-center justify-center gap-y-3">
      <div className="absolute top-2 right-2 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => handleEdit()}
          className="border-none bg-transparent texl-4xl flex flex-wrap items-center justify-center"
        >
          <MdEdit />
        </button>
        <button
          onClick={() => handleDelete()}
          className=" text-3xl flex flex-wrap items-center justify-center"
        >
          <MdDeleteForever />
        </button>
      </div>

      {data.map((item, id) => (
        <div
          key={id}
          className="w-1/2 flex items-center justify-between gap-2 px-5"
        >
          <p className="text-xl font-semibold text-black">{item.title}:</p>
          <p className="text-xl text-gray-700">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

const WorkExperienceForm = ({
  selectForm,
  formData,
  handleInputChange,
  workErrors,
  validateWork,
  setSelectForm,
  setFormData,
  setSubmitAttemptedWork,
}) => {
  return (
    <div className="w-full h-fit">
      <div
        onClick={() => setSelectForm("work-experience")}
        className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
      >
        Work Experience
        <span className="text-black">
          {selectForm === "work-experience" ? (
            <GoArrowDownRight size={30} />
          ) : (
            <GoArrowUpRight size={30} />
          )}
        </span>
      </div>

      {selectForm === "work-experience" && (
        <form action="post" className="w-full mt-6">
          <div className="mt-4">
            <div className="mb-3">
              <label
                for="workexperience"
                className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
              >
                Do you have work experience?
                <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="workexperience001"
                    type="radio"
                    name="workexperience"
                    className="hidden"
                    value="yes"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        workexperience: e.target.value,
                      })
                    }
                  />
                  <label
                    for="workexperience001"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Yes
                  </label>
                </div>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="workexperience002"
                    type="radio"
                    name="workexperience"
                    className="hidden"
                    value="no"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        workexperience: e.target.value,
                        workexperience1: "",
                        occupation: "",
                        employmentHistory: "",
                        workCountry: "",
                      });
                    }}
                  />
                  <label
                    for="workexperience002"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    NO
                  </label>
                </div>
              </div>
              {workErrors.workexperience && (
                <p className="text-red-500">{workErrors.workexperience}</p>
              )}
            </div>
          </div>
          {formData.workexperience === "yes" && (
            <>
              <div className="font-semibold text-lg mb-4">
                {" "}
                Work Experience *
              </div>

              <PastExperienceBox
                yearOfExp={3}
                occupation={"Manager"}
                country={"Nepal"}
                designation={"Senior"}
              />

              <div className="flex mt-6 items-center justify-between w-full">
                <div className="w-[45%] flex flex-col items-center justify-center">
                  <div className="mb-3 w-full">
                    <label
                      for="workexperience"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Total Number of Work Experience
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="workexperience"
                      name="workexperience1"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {workErrors.workexperience1 && (
                      <p className="text-red-500">
                        {workErrors.workexperience1}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-3">
                    <label
                      for="occupation"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Occupation<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {workErrors.occupation && (
                      <p className="text-red-500">{workErrors.occupation}</p>
                    )}
                  </div>
                </div>
                <div className="w-[45%] flex flex-col items-center justify-center">
                  <div className="w-full mb-3">
                    <label
                      for="Employment"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Employment History <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="Employment"
                      name="employmentHistory"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {workErrors.employmentHistory && (
                      <p className="text-red-500">
                        {workErrors.employmentHistory}
                      </p>
                    )}
                  </div>
                  <div className="w-full mb-3">
                    <label
                      for="workCountry"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Country<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="workCountry"
                      name="workCountry"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {workErrors.workCountry && (
                      <p className="text-red-500">{workErrors.workCountry}</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="w-full flex items-center justify-center mb-10 mt-10">
            <button
              className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
              type="button"
              onClick={() => {
                setSubmitAttemptedWork(true);
                // setSelectForm('english');
                if (validateWork(true)) {
                  setSelectForm("english");
                }
              }}
            >
              Next
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default WorkExperienceForm;

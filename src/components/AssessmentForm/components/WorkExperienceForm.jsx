import React, { useState, useEffect, useMemo } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import Select from "react-select";
import countryList from "react-select-country-list";

const PastExperienceBox = ({
  index,
  yearOfExp,
  designation,
  occupation,
  country,
  formVisible,
  setCurrentForm,
  setFormVisible,
  setWorkExperiences,
  setSelectedWork,
}) => {
  const handleDelete = (id) => {
    setWorkExperiences((prev) => prev.filter((_, index) => index !== id));
    setSelectedWork((prev) => Math.max(prev - 1, 0));
  };

  const handleEdit = (id) => {
    if (formVisible) {
      toast.error("Please save your form details before editing.");
    } else {
      setWorkExperiences((prev) => prev.filter((_, index) => index !== id));
      setSelectedWork((prev) => Math.max(prev - 1, 0));
      setCurrentForm({
        yearsOfExp: yearOfExp,
        occupation: occupation,
        employmentHistory: designation,
        country: country,
      });
      setFormVisible(true);
    }
  };

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
    <div
      key={index}
      className="bg-gray-400 bg-opacity-70 p-4 pr-20 rounded-xl relative flex flex-wrap items-center justify-center gap-y-3 mb-5"
    >
      <div className="absolute top-2 right-2 flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => handleEdit(index)}
          className="border-none bg-transparent texl-4xl flex flex-wrap items-center justify-center"
        >
          <MdEdit />
        </button>
        <button
          type="button"
          onClick={() => handleDelete(index)}
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
  setSelectForm,
  setFormData,
}) => {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [selectedWork, setSelectedWork] = useState(0);
  const [workErrors, setWorkErrors] = useState({ workExperiences: [] });
  const [formVisible, setFormVisible] = useState(false);
  const [submitAttemptedWork, setSubmitAttemptedWork] = useState(false);
  const [currentForm, setCurrentForm] = useState({
    yearsOfExp: "",
    occupation: "",
    employmentHistory: "",
    country: "",
  });

  useEffect(() => {
    if (workExperiences.length === 0) {
      setFormVisible(true);
    }
  }, [workExperiences]);

  useEffect(() => {
    if (formData.workexperience1 === "yes") {
      setFormVisible(true);
    }
  }, [formData, setFormVisible]);

  useEffect(() => {
    if (formData.workexperience1 === "no") {
      setFormVisible(false);
    }
  }, [formData, setFormVisible]);

  useEffect(() => {
    if (submitAttemptedWork) {
      validateWork(true);
    }
  }, [formData, submitAttemptedWork]);

  const handleAddWork = () => {
    if (formVisible) {
      toast.error("Please save details before adding New Experience");
    } else {
      setFormVisible(true);
    }
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "1px solid #01997E" : "1px solid black",
      boxShadow: state.isFocused ? "0 0 0 1px #01997E" : "none",
      "&:hover": {
        border: state.isFocused ? "1px solid #01997E" : "1px solid black",
      },
      borderRadius: "0.375rem",
      padding: "0.375rem",
      backgroundColor: "white",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f0f0f0" : "white",
      color: "#333",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.375rem",
      zIndex: 2,
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#6B7280",
    }),
  };

  const countries = useMemo(() => countryList().getData(), []);

  const handleSelectChange = (selectedOption) => {
    setCurrentForm((prev) => ({
      ...prev,
      country: selectedOption.label,
    }));
  };

  const validateFormFields = () => {
    const { yearsOfExp, occupation, employmentHistory, country } = currentForm;
    if (
      yearsOfExp.trim() !== "" &&
      occupation.trim() !== "" &&
      employmentHistory.trim() !== "" &&
      country.trim() !== ""
    ) {
      return true;
    }
  };

  const handleSave = () => {
    if (validateFormFields()) {
      setWorkExperiences((prev) => [...prev, currentForm]);
      setCurrentForm({
        yearsOfExp: "",
        occupation: "",
        employmentHistory: "",
        country: "",
      });
      setFormVisible(false);
    } else {
      toast.error("Please fill out all fields before saving.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setCurrentFrom(prev => {
  //     ...prev,
  //     [name]: value,
  //   })
  //   // setWorkExperiences((prevWorkExperiences) => {
  //   //   if (selectedWork >= prevWorkExperiences.length) {
  //   //     return prevWorkExperiences;
  //   //   }

  //   //   const updatedWorkExperiences = [...prevWorkExperiences];
  //   //   updatedWorkExperiences[selectedWork] = {
  //   //     ...updatedWorkExperiences[selectedWork],
  //   //     [name]: value,
  //   //   };
  //   //   return updatedWorkExperiences;
  //   // });
  // };

  const validateWork = (showErrors = false) => {
    let tempWorkErrors = {};
    if (!formData.workexperience1)
      tempWorkErrors.workexperience1 = "Work experience is required";
    //   if (formData.workexperience1 === "yes") {
    //     if (!workExperiences[selectedWork]?.yearsOfExp)
    //       tempWorkErrors.workExperiences[selectedWork].yearsOfExp =
    //         "Total Number of Work Experience is required";
    //     if (!workExperiences[selectedWork]?.occupation)
    //       tempWorkErrors.workExperiences[selectedWork].occupation =
    //         "Occupation is required";
    //     if (!workExperiences[selectedWork]?.employmentHistory)
    //       tempWorkErrors.workExperiences[selectedWork].employmentHistory =
    //         "Employment History is required";
    //     if (!workExperiences[selectedWork]?.country)
    //       tempWorkErrors.workExperiences[selectedWork].country =
    //         "Country is required";
    //   }
    if (showErrors) {
      setWorkErrors(tempWorkErrors);
    }
    return Object.keys(tempWorkErrors).length === 0;
  };

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
                    checked={formData.workexperience1 === "yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        workexperience1: e.target.value,
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
                    checked={formData.workexperience1 === "no"}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        workexperience1: e.target.value,

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
              {workErrors.workexperience1 && (
                <p className="text-red-500">{workErrors.workexperience1}</p>
              )}
            </div>
          </div>
          {formData.workexperience1 === "yes" && (
            <>
              <div className="font-semibold text-lg mb-4">
                {" "}
                Work Experience *
              </div>

              {workExperiences.map((item, id) => (
                <PastExperienceBox
                  key={id}
                  index={id}
                  setSelectedWork={setSelectedWork}
                  setWorkExperiences={setWorkExperiences}
                  yearOfExp={item.yearsOfExp}
                  formVisible={formVisible}
                  setCurrentForm={setCurrentForm}
                  setFormVisible={setFormVisible}
                  designation={item.employmentHistory}
                  occupation={item.occupation}
                  country={item.country}
                />
              ))}
              {workExperiences.length !== 0 && (
                <div className="w-full flex ">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
                    type="button"
                    onClick={handleAddWork}
                  >
                    Add Experience +
                  </button>
                </div>
              )}
              {formVisible && (
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
                        id="yearsOfExp"
                        name="yearsOfExp"
                        value={currentForm.yearsOfExp}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {/* {workErrors.workExperiences[selectedWork]?.yearsOfExp && (
                        <p className="text-red-500">
                          {workErrors.workExperiences[selectedWork]?.yearsOfExp}
                        </p>
                      )} */}
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
                        value={currentForm.occupation}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {/* {workErrors.workExperiences[selectedWork].occupation && (
                        <p className="text-red-500">
                          {workErrors.workExperiences[selectedWork].occupation}
                        </p>
                      )} */}
                    </div>
                  </div>
                  <div className="w-[45%] flex flex-col items-center justify-center">
                    <div className="w-full mb-3">
                      <label
                        for="Employment"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Designation <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="Employment"
                        name="employmentHistory"
                        value={currentForm.employmentHistory}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {/* {workErrors.workExperiences[selectedWork]
                        .employmentHistory && (
                        <p className="text-red-500">
                          {
                            workErrors.workExperiences[selectedWork]
                              .employmentHistory
                          }
                        </p>
                      )} */}
                    </div>
                    <div className="mb-3 w-full">
                      <label
                        for="workCountry"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Country<span className="text-red-400">*</span>
                      </label>
                      <Select
                        options={countries}
                        value={countries.find(
                          (option) => option.label === currentForm.country
                        )}
                        onChange={(selectedOption) =>
                          handleSelectChange(selectedOption, "nationality")
                        }
                        styles={customStyles}
                        className="w-full"
                      />
                      {/* {workErrors.workExperiences[selectedWork].country  && (
                  <p className="text-red-500">{workErrors.workExperiences[selectedWork].country }</p>
                )} */}
                    </div>
                  </div>
                </div>
              )}

              <div className="w-full flex mb-10 mt-10 justify-between">
                {formVisible && (
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
                    type="button"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                )}
                {formVisible && (
                  <button
                    className="bg-black flex gap-2 text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
                    type="button"
                    onClick={() => {
                      setFormVisible(false);
                    }}
                  >
                    Delete <MdDeleteForever style={{ alignSelf: "center" }} />
                  </button>
                )}
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
                if (formVisible) {
                  toast.error("Please save your form Details");
                }
                if (
                  formData.workexperience1 === "yes" &&
                  workExperiences.length < 1
                ) {
                  toast.error("Please Add Experience");
                }
                if (validateWork(true) && !formVisible) {
                  if (
                    workExperiences.length >= 1 ||
                    formData.workexperience1 === "no"
                  )
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

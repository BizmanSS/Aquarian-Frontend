import React, { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import Select from "react-select";
import countryList from "react-select-country-list";
import SearchableDropdown from "../../SearchableDropdown/SearchableDropdown";

const PastExperienceBox = ({
  index,
  startDate,
  endDate,
  designation,
  occupation,
  typeOfJob,
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
      toast.error("Please save your form details before editing.", {
        position: "top-center",
      });
    } else {
      setWorkExperiences((prev) => prev.filter((_, index) => index !== id));
      setSelectedWork((prev) => Math.max(prev - 1, 0));
      setCurrentForm({
        startDates: startDate,
        endDates: endDate,
        typeOfJob: typeOfJob,
        occupation: occupation,
        employmentHistory: designation,
        country: country,
      });
      setFormVisible(true);
    }
  };

  const data = [
    {
      title: "Start Date",
      value: startDate?.toLocaleDateString(), // Formatting the date for display
    },
    {
      title: "End Date",
      value: endDate?.toLocaleDateString(),
    },
    {
      title: "Designation",
      value: designation,
    },
    {
      title: "Type Of Job",
      value: typeOfJob,
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
      className="bg-gray-400 bg-opacity-70 p-4 pr-20 rounded-xl relative flex flex-col md:flex-wrap md:flex-row gap-y-3 mb-5"
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
        <div key={id} className="grid md:w-1/2 grid-cols-2 gap-2 px-5">
          <p className="md:text-xl font-semibold text-black">{item.title}:</p>
          <p className="md:text-xl text-gray-700">{item.value}</p>
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
  nextform,
  scrollRef,
}) => {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [selectedWork, setSelectedWork] = useState(0);
  const [workErrors, setWorkErrors] = useState({ workExperiences: [] });
  const [formVisible, setFormVisible] = useState(false);
  const [submitAttemptedWork, setSubmitAttemptedWork] = useState(false);
  const [currentDate] = useState(new Date());
  const [currentForm, setCurrentForm] = useState({
    startDates: null,
    endDates: null,
    occupation: "",
    typeOfJob: "",
    employmentHistory: "",
    country: "",
  });

  useEffect(() => {
    if (workExperiences.length === 0 || formData.workexperience1 === "yes") {
      setFormVisible(true);
    }
  }, [workExperiences, formData]);

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

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      workExperiences,
    }));
  }, [workExperiences]);

  const handleAddWork = () => {
    if (formVisible) {
      toast.error("Please save details before adding New Experience", {
        position: "top-center",
      });
    } else {
      setFormVisible(true);
    }
  };

  const handleNext = () => {
    setSubmitAttemptedWork(true);

    if (formVisible) {
      toast.error("Please save or delete your form Details", {
        position: "top-center",
      });
    }
    if (formData.workexperience1 === "yes" && workExperiences.length < 1) {
      toast.error("Please Add Experience", {
        position: "top-center",
      });
    }
    if (validateWork(true) && !formVisible) {
      if (workExperiences.length >= 1 || formData.workexperience1 === "no")
        setSelectForm(nextform);
    }

    const element = scrollRef.current;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition + 70, // Adjust the offset here (100px)
      behavior: "smooth",
    });
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
    const {
      startDates,
      endDates,
      occupation,
      typeOfJob,
      employmentHistory,
      country,
    } = currentForm;
    if (
      startDates &&
      occupation.trim() !== "" &&
      employmentHistory.trim() !== "" &&
      country.trim() !== "" &&
      typeOfJob &&
      endDates
    ) {
      return true;
    }
  };

  const handleSave = () => {
    if (validateFormFields()) {
      setWorkExperiences((prev) => [...prev, currentForm]);
      setCurrentForm({
        startDates: null,
        endDates: null,
        occupation: "",
        typeOfJob: "",
        employmentHistory: "",
        country: "",
      });
      setFormVisible(false);
    } else {
      toast.error("Please fill out all fields before saving.", {
        position: "top-center",
      });
    }
  };

  const handleStartDateChange = (date) => {
    if (date > currentDate) {
      toast.error("Start Date cannot be greater than the current date", {
        position: "top-center",
      });
      return;
    }

    if (date && currentForm.endDates && date > currentForm.endDates) {
      toast.error("Start Date cannot be greater than End Date", {
        position: "top-center",
      });
      return;
    }
    setCurrentForm((prev) => ({
      ...prev,
      startDates: date,
    }));
  };

  const handleEndDateChange = (date) => {
    if (date && currentForm.startDates && date < currentForm.startDates) {
      toast.error("End Date cannot be earlier than Start Date", {
        position: "top-center",
      });
      return;
    }
    setCurrentForm((prev) => ({
      ...prev,
      endDates: date,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateWork = (showErrors = false) => {
    let tempWorkErrors = {};
    if (!formData.workexperience1)
      tempWorkErrors.workexperience1 = "Work experience is required";
    if (formData.workexperience1 === "yes" && !formData.yearsOfExp)
      tempWorkErrors.yearsOfExp =
        "Total years of paid Work experience is required";
    if (showErrors) {
      setWorkErrors(tempWorkErrors);
    }
    return Object.keys(tempWorkErrors).length === 0;
  };

  return (
    <div className="w-full h-fit">
      <div
        id="workExperience"
        onClick={() => {
          if (formData.workexperience1) setSelectForm("work-experience");
        }}
        className="text-base md:text-xl font-semibold tracking-[5px] md:tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
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
          <div className="mb-3 mt-4">
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
                      startDates: null,
                      endDates: null,
                      occupation: "",
                      typeOfJob: "",
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
          {formData.workexperience1 === "yes" && (
            <>
              <div className="mb-3 w-[45%]">
                <label
                  for="workexperience"
                  className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  Total Years of paid Work Experience
                  <span className="text-red-400">*</span>
                </label>
                <select
                  id="yearsOfExp"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      yearsOfExp: e.target.value,
                    })
                  }
                  name="yearsOfExp"
                  value={formData.yearsOfExp}
                  className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                >
                  <option value="" selected>
                    Select
                  </option>
                  <option className="text-black" value="1">
                    1
                  </option>
                  <option className="text-black" value="2">
                    2
                  </option>
                  <option className="text-black" value="3">
                    3
                  </option>
                  <option className="text-black" value="4">
                    4
                  </option>
                  <option className="text-black" value="5">
                    5
                  </option>
                  <option className="text-black" value="6">
                    6
                  </option>
                  <option className="text-black" value="7">
                    7
                  </option>
                  <option className="text-black" value="8">
                    8
                  </option>
                  <option className="text-black" value="9">
                    9
                  </option>
                  <option className="text-black" value="10 or more">
                    10 or more
                  </option>
                </select>
              </div>
              {workErrors.yearsOfExp && (
                <p className="text-red-500">{workErrors.yearsOfExp}</p>
              )}
              {workExperiences.map((item, id) => (
                <PastExperienceBox
                  key={id}
                  index={id}
                  setSelectedWork={setSelectedWork}
                  setWorkExperiences={setWorkExperiences}
                  startDate={item.startDates}
                  endDate={item.endDates}
                  formVisible={formVisible}
                  setCurrentForm={setCurrentForm}
                  setFormVisible={setFormVisible}
                  designation={item.employmentHistory}
                  occupation={item.occupation}
                  typeOfJob={item.typeOfJob}
                  country={item.country}
                />
              ))}
              {workExperiences.length !== 0 && (
                <div className="w-full flex ">
                  <button
                    className="bg-black text-[#01F9E1] md:px-16 md:py-3 px-5 py-2 rounded-lg md:text-xl mb-3"
                    type="button"
                    onClick={handleAddWork}
                  >
                    Add Previous Job +
                  </button>
                </div>
              )}
              {workExperiences.length === 0 && (
                <div className="font-semibold text-lg mb-4">
                  Current (or more recent) Job
                  <span className="text-red-400">*</span>
                </div>
              )}
              {workExperiences.length !== 0 && (
                <div className="font-semibold text-lg mb-4">
                  Previous Work Experience
                  <span className="text-red-400">*</span>
                </div>
              )}

              {formVisible && (
                <div
                  className="w-full md:grid grid-cols-2"
                  style={{ columnGap: "10%" }}
                >
                  <div className="w-full mb-3 flex gap-[10%] justify-between">
                    <div className="w-full block">
                      <label
                        htmlFor="startdate"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Start Date
                        <span className="text-red-400">*</span>
                      </label>
                      <DatePicker
                        selected={currentForm.startDates}
                        onChange={handleStartDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Start Date"
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                    </div>
                    <div className="w-full block">
                      <label
                        htmlFor="enddate"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        End Date
                        <span className="text-red-400">*</span>
                      </label>
                      <DatePicker
                        selected={currentForm.endDates}
                        onChange={handleEndDateChange}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select End Date"
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full mb-3">
                    <label
                      for="typeOfJob"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Type of Job <span className="text-red-400">*</span>
                    </label>

                    <select
                      id="typeOfJob"
                      onChange={handleInputChange}
                      name="typeOfJob"
                      value={currentForm.typeOfJob}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option
                        className="text-black"
                        value="Full Time Job with more than 30hrs/week"
                      >
                        Full Time Job with more than 30hrs/week
                      </option>
                      <option className="text-black" value="Part Time Job">
                        Part Time Job
                      </option>
                    </select>
                  </div>
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
                    {/* <SearchableDropdown
                      apiEndpoint={`${process.env.REACT_APP_API}/occupations`}
                      id="occupation"
                      name="occupation"
                      value={currentForm.occupation}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    /> */}
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
                  </div>
                </div>
              )}

              <div className="w-full flex mb-10 mt-10 justify-between">
                {formVisible && (
                  <button
                    className="bg-black text-[#01F9E1] md:px-16 md:py-3 px-5 py-2 rounded-lg md:text-xl"
                    type="button"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                )}

                {formVisible && workExperiences.length !== 0 && (
                  <button
                    className="bg-black flex gap-2 text-[#01F9E1] md:px-16 md:py-3 px-5 py-2 rounded-lg md:text-xl"
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
              onClick={handleNext}
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

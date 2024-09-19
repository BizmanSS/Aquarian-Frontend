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
      className="recent-education-details"
    >
      <div className="absolute top-2 right-2 flex flex-wrap items-center justify-center gap-2">

      <button
          type="button"
          onClick={() => handleDelete(index)}
          className="  text-2xl flex flex-wrap items-center justify-center text-red-500"
        >
          <MdDeleteForever />
        </button>
        <button
          type="button"
          onClick={() => handleEdit(index)}
          className="border-none bg-transparent texl-4xl flex flex-wrap items-center justify-center"
        >
          <MdEdit />
        </button>
       
      </div>

      {data.map((item, id) => (
        <div key={id} className="recent-education-details-container">
          <p className="recent-education-details-key">{item.title}</p>
          <span className="colon">:</span>
          <p className="recent-education-details-value">{item.value}</p>
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
  const disabled = !formData.startDates;
  const [currentForm, setCurrentForm] = useState({
    startDates: null,
    endDates: null,
    occupation: "",
    typeOfJob: "",
    employmentHistory: "",
    country: "",
  });

  useEffect(() => {
    if (workExperiences.length === 0) {
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
    setCurrentForm((prev) => ({
      ...prev,
      startDates: date,
    }));
  };

  const handleEndDateChange = (date) => {
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
        className="PI-heading-container"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M12.582 0.304688C13.4108 0.304688 14.2057 0.633928 14.7917 1.21998C15.3778 1.80603 15.707 2.60089 15.707 3.42969H18.832C19.3846 3.42969 19.9145 3.64918 20.3052 4.03988C20.6959 4.43058 20.9154 4.96049 20.9154 5.51302V16.9714C20.9154 17.5239 20.6959 18.0538 20.3052 18.4445C19.9145 18.8352 19.3846 19.0547 18.832 19.0547H2.16536C1.61283 19.0547 1.08293 18.8352 0.692225 18.4445C0.301525 18.0538 0.0820313 17.5239 0.0820312 16.9714V5.51302C0.0820312 4.96049 0.301525 4.43058 0.692225 4.03988C1.08293 3.64918 1.61283 3.42969 2.16536 3.42969H5.29037C5.29037 2.60089 5.61961 1.80603 6.20566 1.21998C6.79171 0.633928 7.58656 0.304688 8.41537 0.304688H12.582ZM9.45703 9.67969H2.16536V16.9714H18.832V9.67969H11.5404V10.7214C11.5401 10.9869 11.4384 11.2422 11.2561 11.4353C11.0739 11.6283 10.8248 11.7445 10.5597 11.7601C10.2947 11.7756 10.0337 11.6894 9.83012 11.519C9.62653 11.3486 9.49568 11.1069 9.46432 10.8432L9.45703 10.7214V9.67969ZM18.832 5.51302H2.16536V7.59635H18.832V5.51302ZM12.582 2.38802H8.41537C8.16023 2.38805 7.91397 2.48172 7.72331 2.65127C7.53265 2.82081 7.41084 3.05443 7.38099 3.30781L7.3737 3.42969H13.6237C13.6237 3.17455 13.53 2.92829 13.3605 2.73763C13.1909 2.54697 12.9573 2.42516 12.7039 2.39531L12.582 2.38802Z" fill="#222222"/>
</svg>
        Work Experience
      </div>

      {selectForm === "work-experience" && (
        <form action="post" className="w-full mt-6 PI-form">
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
              <div className="mb-3 w-full md:w-[45%]">
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
                    className="text-[#009889] rounded-lg text-xl font-semibold mb-3"
                    type="button"
                    onClick={handleAddWork}
                  >
                    + Add Previous Job 
                  </button>
                </div>
              )}
             
            

              {formVisible && (
                <div
                  className="education-form-layout"
                
                >
                  <div className='mb-3 w-full text-black font-semibold ed-head'>{workExperiences.length == 0 ? "Current (or more recent) Job" : "Previous Job: " }</div>
               
                    <div className="mb-3 w-full form-input">
                      <label
                        htmlFor="startdate"
                        className="block styled"
                      >
                        *Start Date
                       
                      </label>
                      <DatePicker
                        selected={currentForm.startDates}
                        onChange={handleStartDateChange}
                        maxDate={new Date()}
                        onFocus={(e) => e.target.blur()}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Start Date"
                        shouldCloseOnSelect
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                    </div>
                    <div className="mb-3 w-full form-input">
                      <label
                        htmlFor="enddate"
                        className="block styled"
                      >
                        *End Date
                        
                      </label>
                      <DatePicker
                        selected={currentForm.endDates}
                        onChange={handleEndDateChange}
                        disabled={!currentForm.startDates}
                        minDate={currentForm.startDates}
                        onFocus={(e) => e.target.blur()}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select End Date"
                        shouldCloseOnSelect
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        className={`w-full rounded-md border ${
                          !currentForm.startDates
                            ? " border-gray-300 cursor-not-allowed"
                            : " border-black cursor-pointer"
                        } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md`}
                      />
                    </div>
                  
                  <div className="mb-3 w-full form-input">
                    <label
                      for="typeOfJob"
                      className="block styled"
                    >
                      *Type of Job 
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
                  <div className="mb-3 w-full form-input">
                    <label
                      for="Employment"
                      className="block styled"
                    >
                      *Designation 
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
                  <div className="mb-3 w-full form-input">
                    <label
                      for="occupation"
                      className="block styled"
                    >
                      *Occupation
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
                  <div className="mb-3 w-full form-input">
                    <label
                      for="workCountry"
                      className=" block styled special-field-label-adjust"
                    >
                      *Country
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

                  <div className="delete-save-btn">
                {formVisible && (
                  <button
                    className="education-save-btn"
                    type="button"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                )}

                {formVisible && workExperiences.length !== 0 && (
                  <button
                    className="delete-btn"
                    type="button"
                    onClick={() => {
                      setFormVisible(false);
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
                </div>
              )}

              
            </>
          )}

          <div className="w-full flex items-center justify-end mb-10 mt-10">
            <button
              className="assessment-next-step-btn"
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

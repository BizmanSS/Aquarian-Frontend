import React, { useState, useEffect, useMemo } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import Select from "react-select";
import countryList from "react-select-country-list";
import SearchableDropdown from "../../SearchableDropdown/SearchableDropdown";
import { educationOptions } from "../data/formSelectOptions";

const PastExperienceBox = ({
  index,
  levelOfEducation,
  startDate,
  endDate,
  field,
  board,
  country,
  formVisible,
  setCurrentForm,
  setFormVisible,
  seteducationExperiences,
  setSelectededucation,
}) => {
  const handleDelete = (id) => {
    seteducationExperiences((prev) => prev.filter((_, index) => index !== id));
    setSelectededucation((prev) => Math.max(prev - 1, 0));
  };

  const handleEdit = (id) => {
    if (formVisible) {
      toast.error("Please save your form details before editing.", {
        position: "top-center",
      });
    } else {
      seteducationExperiences((prev) =>
        prev.filter((_, index) => index !== id)
      );
      setSelectededucation((prev) => Math.max(prev - 1, 0));
      setCurrentForm({
        levelOfEducation: levelOfEducation,
        startDates: startDate,
        endDates: endDate,
        board: board,
        field: field,
        country: country,
      });
      setFormVisible(true);
    }
  };

  const data = [
    {
      title: "Level of Education",
      value: levelOfEducation,
    },
    {
      title: "Start Date",
      value: startDate?.toLocaleDateString(), // Formatting the date for display
    },
    {
      title: "End Date",
      value: endDate?.toLocaleDateString(),
    },
    {
      title: "Field / Stream",
      value: field,
    },
    {
      title: "Board / University",
      value: board,
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
const EducationDetails = ({
  selectForm,
  formData,
  setSelectForm,
  setFormData,
  nextform,
  scrollRef,
}) => {
  const [educationExperiences, seteducationExperiences] = useState([]);
  const [selectededucation, setSelectededucation] = useState(0);
  const [educationErrors, seteducationErrors] = useState({
    educationExperiences: [],
  });
  const [formVisible, setFormVisible] = useState(false);
  const [submitAttemptededucation, setSubmitAttemptededucation] =
    useState(false);

  const [currentForm, setCurrentForm] = useState({
    levelOfEducation: "",
    startDates: null,
    endDates: null,
    field: "",
    board: "",
    country: "",
  });

  useEffect(() => {
    if (educationExperiences.length === 0) {
      setFormVisible(true);
    }
  }, [educationExperiences, formData]);

  useEffect(() => {
    if (formData.educationExperience1 === "no") {
      setFormVisible(false);
    }
  }, [formData, setFormVisible]);

  useEffect(() => {
    if (submitAttemptededucation) {
      validateEducation(true);
    }
  }, [formData, submitAttemptededucation]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      educationExperiences,
    }));
  }, [educationExperiences]);

  const handleAddeducation = () => {
    if (formVisible) {
      toast.error("Please save details before adding New Experience", {
        position: "top-center",
      });
    } else {
      setFormVisible(true);
    }
  };

  const handleNext = () => {
    setSubmitAttemptededucation(true);

    if (formVisible) {
      toast.error("Please save or delete your form Details", {
        position: "top-center",
      });
    }
    if (
      formData.educationExperience1 === "yes" &&
      educationExperiences.length < 1
    ) {
      toast.error("Please Add Experience", {
        position: "top-center",
      });
    }
    if (validateEducation(true) && !formVisible) {
      if (
        educationExperiences.length >= 1 ||
        formData.educationExperience1 === "no"
      )
        console.log("hello");
      setSelectForm(nextform);
    }

    const element = scrollRef.current;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: elementPosition + 70, // Adjust the offset here (100px)
      behavior: "smooth",
    });

    setSubmitAttemptededucation(false);
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
    const { startDates, levelOfEducation, endDates, field, board, country } =
      currentForm;
    if (
      levelOfEducation.trim() !== "" &&
      startDates &&
      field.trim() !== "" &&
      board.trim() !== "" &&
      country.trim() !== "" &&
      endDates
    ) {
      return true;
    }
  };

  const handleSave = () => {
    if (validateFormFields()) {
      seteducationExperiences((prev) => [...prev, currentForm]);
      setCurrentForm({
        levelOfEducation: "",
        startDates: null,
        endDates: null,
        field: "",
        board: "",
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

  const validateEducation = (showErrors = false) => {
    let tempeducationErrors = {};
    if (!formData.educationExperience1)
      tempeducationErrors.educationExperience1 =
        "Education experience is required";
    if (
      formData.highestEducational === "" &&
      formData.educationExperience1 === "yes"
    )
      tempeducationErrors.highestEducational =
        "Highest Educational Qualifications is required";
    if (showErrors) {
      seteducationErrors(tempeducationErrors);
    }
    return Object.keys(tempeducationErrors).length === 0;
  };

  return (
    <div className="w-full h-fit">
      <div
        id="educationExperience"
        onClick={() => {
          if (formData.educationExperience1)
            setSelectForm("education-experience");
        }}
        className="PI-heading-container"
      >
        Education & Training
      
      </div>

      {selectForm === "education-experience" && (
        <form action="post" className="w-full PI-form mt-6">
          <div className="mb-3 mt-4">
            <label
              for="educationexperience"
              className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
            >
              Have you gained any post secondary education or training?
              <span className="text-red-400">*</span>
            </label>
            <div className="flex items-center justify-start gap-6">
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="educationexperience001"
                  type="radio"
                  name="educationexperience"
                  className="hidden"
                  value="yes"
                  checked={formData.educationExperience1 === "yes"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      educationExperience1: e.target.value,
                    })
                  }
                />
                <label
                  for="educationexperience001"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                  Yes
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="educationexperience002"
                  type="radio"
                  name="educationexperience"
                  className="hidden"
                  value="no"
                  checked={formData.educationExperience1 === "no"}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      educationExperience1: e.target.value,
                      levelOfEducation: "",
                      startDates: null,
                      endDates: null,
                      field: "",
                      board: "",
                      educationCountry: "",
                    });
                  }}
                />
                <label
                  for="educationexperience002"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                  No
                </label>
              </div>
            </div>
            {educationErrors.educationExperience1 && (
              <p className="text-red-500">
                {educationErrors.educationExperience1}
              </p>
            )}
          </div>
          {formData.educationExperience1 === "yes" && (
            <>
              <div className="mb-3 w-full">
                <label
                  for="highestEducational"
                  className="font-semibold text-lg block mb-2"
                >
                  Highest Educational Qualifications
                  <span className="text-red-400">*</span>
                </label>

                <select
                  id="highestEducational"
                  name="highestEducational"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      highestEducational: e.target.value,
                    })
                  }
                  value={formData.highestEducational}
                  className="w-full block mb-4 lg:w-[45%] rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                >
                  <option value="" selected>
                    Select
                  </option>
                  {educationOptions.map((item, id) => (
                    <option key={id} className="text-black" value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                {educationErrors.highestEducational && (
                  <p className="text-red-500 mb-4 -mt-2">
                    {educationErrors.highestEducational}
                  </p>
                )}
              </div>
              {educationExperiences.map((item, id) => (
                <PastExperienceBox
                  key={id}
                  index={id}
                  setSelectededucation={setSelectededucation}
                  seteducationExperiences={seteducationExperiences}
                  startDate={item.startDates}
                  endDate={item.endDates}
                  formVisible={formVisible}
                  setCurrentForm={setCurrentForm}
                  setFormVisible={setFormVisible}
                  levelOfEducation={item.levelOfEducation}
                  board={item.board}
                  field={item.field}
                  country={item.country}
                />
              ))}
              {educationExperiences.length !== 0 && (
                <div className="w-full flex ">
                  <button
                    className="bg-black text-[#01F9E1] md:px-16 md:py-3 px-5 py-2 rounded-lg md:text-xl mb-3"
                    type="button"
                    onClick={handleAddeducation}
                  >
                    Add Previous Education +
                  </button>
                </div>
              )}
              {educationExperiences.length === 0 && (
                <div className="font-semibold text-lg mb-4">
                  Current (or more recent) Education
                  <span className="text-red-400">*</span>
                </div>
              )}
              {educationExperiences.length !== 0 && (
                <div className="font-semibold text-lg mb-4">
                  Previous Education Qualification
                  <span className="text-red-400">*</span>
                </div>
              )}

              {formVisible && (
                <div
                  className="w-full md:grid grid-cols-2"
                  style={{ columnGap: "10%" }}
                >
                  <div className="mb-3 w-full">
                    <label
                      for="levelOfEducation"
                      className="font-semibold text-lg block mb-2"
                    >
                      Level of Education
                      <span className="text-red-400">*</span>
                    </label>

                    <select
                      id="levelOfEducation"
                      name="levelOfEducation"
                      value={formData.levelOfEducation}
                      onChange={handleInputChange}
                      className="w-full block mb-4 rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option
                        value="Less than secondary school (High school)"
                        className="text-black"
                      >
                        Less than secondary school (High school)
                      </option>
                      <option
                        value="Secondary diploma (High school graduation)"
                        className="text-black"
                      >
                        Secondary diploma (High school graduation)
                      </option>
                      <option
                        value="One-year post-secondary program"
                        className="text-black"
                      >
                        One-year post-secondary program
                      </option>
                      <option
                        value="Two-year post-secondary program"
                        className="text-black"
                      >
                        Two-year post-secondary program
                      </option>
                      <option
                        value="Bachelor's degree (three or more year post-secondary program)"
                        className="text-black"
                      >
                        Bachelor's degree (three or more year post-secondary
                        program)
                      </option>
                      <option
                        value="Two or more post-secondary programs. One must be for a program of three or more years"
                        className="text-black"
                      >
                        Two or more post-secondary programs. One must be for a
                        program of three or more years
                      </option>
                      <option
                        value="Master's degree, or professional degree needed to practice in a licensed profession"
                        className="text-black"
                      >
                        Master's degree, or professional degree needed to
                        practice in a licensed profession
                      </option>
                      <option
                        value="Doctoral level university degree (ph.d.)"
                        className="text-black"
                      >
                        Doctoral level university degree (ph.d.)
                      </option>
                    </select>
                  </div>
                  <div className="w-full mb-3 md:flex md:gap-[10%] justify-between">
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
                        maxDate={new Date()}
                        dateFormat="dd/MM/yyyy"
                        onFocus={(e) => e.target.blur()}
                        placeholderText="Select Start Date"
                        shouldCloseOnSelect
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
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
                        disabled={!currentForm.startDates}
                        minDate={currentForm.startDates}
                        dateFormat="dd/MM/yyyy"
                        onFocus={(e) => e.target.blur()}
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
                  </div>
                  <div className="w-full mb-3">
                    <label
                      for="Board"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Board / University <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="Board"
                      name="board"
                      value={currentForm.board}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                  </div>
                  <div className="w-full mb-3">
                    <label
                      for="field"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Field / Stream<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="field"
                      name="field"
                      value={currentForm.field}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    <SearchableDropdown
                      apiEndpoint={`${process.env.REACT_APP_API}/study_fields`}
                      id="field"
                      name="field"
                      value={currentForm.field}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                  </div>
                  <div className="mb-3 w-full">
                    <label
                      for="educationCountry"
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

                {formVisible && educationExperiences.length !== 0 && (
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

          <div className="w-full flex items-center justify-end mb-10">
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

export default EducationDetails;

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
import "./EducationDetails.css";

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
      className="recent-education-details"
    >
      <div className="absolute top-2 right-2 flex flex-wrap items-center justify-center gap-2">
      <button
          type="button"
          onClick={() => handleDelete(index)}
          className=" text-2xl flex flex-wrap items-center justify-center text-red-500"
        >
          <MdDeleteForever />
        </button>
        <button
          type="button"
          onClick={() => handleEdit(index)}
          className="border-none bg-transparent texl-5xl flex flex-wrap items-center justify-center text-green-600 mr-3"
        >
          <MdEdit />
        </button>
      
      </div>

      {data.map((item, id) => (
        <div key={id} className="recent-education-details-container">
          <p className="recent-education-details-key">{item.title}</p><span className="colon">:</span>
          <p className="recent-education-details-value">{item.value}</p>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="18"
          viewBox="0 0 24 18"
          fill="none"
        >
          <path
            d="M13.1704 0.558602C13.5891 0.298185 14.1016 0.252352 14.5537 0.424227L14.7016 0.489852L22.4558 4.40756C22.7835 4.57428 23.0424 4.85052 23.1876 5.18829C23.3328 5.52606 23.3551 5.90402 23.2506 6.25652C22.8444 7.64298 22.8891 8.22527 23.1548 8.88256C23.4048 9.50235 23.2589 10.2805 22.6756 10.7378L22.5433 10.8315L11.8308 17.6117C11.3819 17.8961 10.81 17.9399 10.3131 17.6971L6.31311 15.7232L4.64227 14.8846L3.45477 14.2784L2.72977 13.8982L2.35477 13.694L2.0829 13.5378C1.0204 12.8971 0.689149 11.5951 0.695399 10.6003C0.699566 9.58881 1.04748 8.32527 2.01311 7.63152L2.32561 7.41589L3.21936 6.83152L5.34957 5.4711L13.1704 0.558602ZM20.8694 7.72318L11.835 13.4419C11.7621 13.4888 11.685 13.5284 11.6069 13.5617C11.4923 13.9867 11.4527 14.2919 11.4569 14.5753C11.4589 14.7451 11.4777 14.9169 11.5141 15.1138L11.5579 15.319L21.0871 9.28777C20.9509 8.86855 20.8772 8.43158 20.8683 7.99089L20.8694 7.72318ZM2.91832 9.7961C2.82427 10.0566 2.77702 10.3317 2.77873 10.6086C2.77561 11.3086 3.02561 11.6742 3.15894 11.7544L3.47977 11.9367L4.13186 12.2836L5.97561 13.2242L9.38706 14.9232C9.37872 14.8182 9.37386 14.7129 9.37248 14.6076C9.36973 14.1153 9.43279 13.6248 9.55998 13.1492L2.91832 9.79506V9.7961ZM20.2694 5.63777L14.0246 2.48152L6.9829 6.90235L4.69332 8.35964L10.9704 11.5263L20.2694 5.63777ZM13.1412 4.23152C13.2597 4.00525 13.4571 3.83038 13.696 3.74012C13.9349 3.64986 14.1986 3.6505 14.4371 3.74194L14.5475 3.79193L16.735 4.93777C16.9714 5.06052 17.1519 5.26921 17.2392 5.52093C17.3265 5.77264 17.314 6.04824 17.2044 6.29105C17.0947 6.53386 16.8962 6.72541 16.6496 6.82633C16.403 6.92725 16.1272 6.92985 15.8787 6.8336L15.7683 6.7836L13.5808 5.63777C13.4596 5.57431 13.3521 5.4876 13.2644 5.38258C13.1767 5.27756 13.1105 5.15629 13.0697 5.0257C13.0289 4.89511 13.0142 4.75776 13.0265 4.6215C13.0387 4.48523 13.0777 4.35271 13.1412 4.23152Z"
            fill="black"
          />
        </svg>
        Education & Training
      </div>

      {selectForm === "education-experience" && (
        <form action="post" className="w-full mt-6 PI-form">
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
              <div className="mb-3 w-full form-input">
                <label for="highestEducational" className="styled">
                  *Highest Educational Qualifications
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
                  className="highest-education-qualifications"
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
                    className="text-[#009889] rounded-lg text-xl font-semibold mb-3"
                    type="button"
                    onClick={handleAddeducation}
                  >
                   + Add Previous Education 
                  </button>
                </div>
              )}
              {educationExperiences.length === 0 && (
                <div className="font-semibold text-lg mb-4 text-black mt-8">
                  *Educational Qualification
                </div>
              )}
              
              
             

              {formVisible && (
                <div className="education-form-layout">
                  <div className="mb-3 w-full text-black font-semibold ed-head">
                  {educationExperiences.length === 0 ?
                    "Current (or more recent) Education" : "Previous Education"}
                  </div>
                  <div className="mb-3 w-full form-input">
                    <label for="levelOfEducation" className="block styled">
                      *Level of Education
                    </label>

                    <select
                      id="levelOfEducation"
                      name="levelOfEducation"
                      
                      onChange={handleInputChange}
                      className="w-full block mb-4 rounded-md border border-black bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option value="" disabled selected >
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
                  <div className="w-full mb-3 form-input">
                    <label htmlFor="startdate" className="block styled">
                      *Start Date
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

                  <div className="w-full mb-3 form-input">
                    <label htmlFor="enddate" className=" block styled">
                      *End Date
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

                  <div className="w-full mb-3 form-input">
                    <label for="field" className=" block styled special-field-label-adjust">
                      *Field / Stream
                    </label>
                    <SearchableDropdown
                      apiEndpoint={`${process.env.REACT_APP_API}/study_fields`}
                      name="field"
                      value={currentForm.field}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                  </div>

                  <div className="w-full mb-3 form-input">
                    <label for="Board" className=" block styled">
                      *Board / University
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

                  <div className="mb-3 w-full form-input">
                    <label for="educationCountry" className=" block styled special-field-label-adjust">
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

{formVisible && educationExperiences.length !== 0 && (
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

export default EducationDetails;

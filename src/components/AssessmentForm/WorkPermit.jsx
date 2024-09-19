import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";

import './WorkPermit.css'

import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
// import SearchableDropdown from "../SearchableDropdown/SearchableDropdown";
// import { FaPlus } from "react-icons/fa";
// import { RiDeleteBin6Line } from "react-icons/ri";
import { ageOptions, maritalStatusOptions } from "./data/formSelectOptions";
import WorkExperienceForm from "./components/WorkExperienceForm";

const WorkPermit = ({ selectedForm, formType, element, workPermitRef }) => {
  const [selectForm, setSelectForm] = useState("PersonalInformation");
  const options = useMemo(() => countryList().getData(), []);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitAttemptedEducation, setSubmitAttemptedEducation] =
    useState(false);
  const [errors, setErrors] = useState({});
  const [eduErrors, setEduErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    nationality: "",
    age: "",
    maritalStatus: "",
    isSpouseinCanada: "",
    statusOfWife: "",
    region: "",
    status: "",
    EducationLevel: "",
    englishTest: "",
    children: "",
    haveLmiaJoboffer: "",
    requireLmiaJoboffer: "",
    nocCodeonLmia: "",
    workexperience1: "",
    yearsOfExp: "",
    workExperiences: {
      startDates: null,
      endDates: null,
      occupation: "",
      typeOfJob: "",
      employmentHistory: "",
      country: "",
    },
    otherInformation: "",
  });

  const validate = (showErrors = false) => {
    let tempErrors = {};
    if (!formData.firstname) tempErrors.firstname = "First Name is required";
    if (!formData.lastname) tempErrors.lastname = "Last Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else {
      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Invalid email format";
      }
    }
    if (!formData.phone) {
      tempErrors.phone = "Phone Number is required";
    }
    if (!formData.maritalStatus)
      tempErrors.maritalStatus = "Marital Status is required";
    if (formData.age === "") tempErrors.age = "Age is required";
    if (!formData.nationality)
      tempErrors.nationality = "Nationality is required";
    if (formData.region === "") tempErrors.region = "Region is required";
    if (formData.region === "In Canada" && formData.status === "") {
      tempErrors.status = "Current status in Canada is required";
    }
    if (formData.EducationLevel === "")
      tempErrors.EducationLevel = "Please specify Your Level of Education";
    if (!formData.children)
      tempErrors.children = "Please specify if you have any children under 22";

    if (formData.maritalStatus === "married" && !formData.isSpouseinCanada) {
      tempErrors.isSpouseinCanada =
        "Please specify if your spouse is in Canada";
    }
    if (
      formData.maritalStatus === "married" &&
      formData.isSpouseinCanada === "yes" &&
      formData.statusOfWife === ""
    ) {
      tempErrors.statusOfWife = "Please specify the status of your wife";
    }

    if (!formData.englishTest) {
      tempErrors.englishTest =
        "Please specify if you have taken an English test";
    }

    if (showErrors) {
      setErrors(tempErrors);
    }
    return Object.keys(tempErrors).length === 0;
  };

  const validateEducation = (showErrors = false) => {
    const newErrors = {};

    if (!formData.haveLmiaJoboffer) {
      newErrors.haveLmiaJoboffer =
        "Please specify if you have an LMIA job offer";
    }

    if (formData.haveLmiaJoboffer === "no") {
      if (!formData.requireLmiaJoboffer) {
        newErrors.requireLmiaJoboffer =
          "Please specify if an LMIA job offer is required";
      }
    }
    if (formData.haveLmiaJoboffer === "yes") {
      if (!formData.nocCodeonLmia) {
        newErrors.nocCodeonLmia = "Please provide the NOC code on the LMIA";
      }
    }

    if (showErrors) {
      setEduErrors(newErrors);
    }
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (submitAttempted) {
      validate(true);
    }
  }, [formData, submitAttempted]);

  useEffect(() => {
    if (submitAttemptedEducation) {
      validateEducation(true);
    }
  }, [formData, submitAttemptedEducation]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleNameChange = (event) => {
    if (/^[a-zA-Z]*$/.test(event.target.value)) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevState) => ({
      ...prevState,
      phone: phone,
    }));
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      nationality: selectedOption.label,
    }));
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

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/work_permit_form`,
        JSON.stringify(formData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        toast.success("You have successfully submited your form!", {
          position: "top-center",
        });
        setSelectForm("PersonalInformation");
        window.scrollTo({
          top: element,
          behavior: "smooth",
        });
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          nationality: "",
          age: "",
          maritalStatus: "",
          isSpouseinCanada: "",
          statusOfWife: "",
          region: "",
          status: "",
          EducationLevel: "",
          englishTest: "",
          children: "",
          haveLmiaJoboffer: "",
          requireLmiaJoboffer: "",
          nocCodeonLmia: "",
          workexperience1: "",
          yearsOfExp: "",
          workExperiences: {
            startDates: null,
            endDates: null,
            occupation: "",
            typeOfJob: "",
            employmentHistory: "",
            country: "",
          },
          otherInformation: "",
        });
      }
    } catch (error) {
      toast.error("Internal server errror!", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      {selectedForm.workPermit && (
        <>
          <div className="w-full flex flex-col items-start justify-center lg:px-20 md:px-10 px-2 gap-4 mb-10">
            <div
              ref={workPermitRef}
              className="block text-2xl font-medium text-[#07074D] py-2"
            >
              {formType} Eligibility Evaluation Form
            </div>

            <div
              onClick={() => {
                if (
                  formData.firstname ||
                  formData.lastname ||
                  formData.email ||
                  formData.phone ||
                  formData.maritalStatus ||
                  formData.age ||
                  formData.nationality ||
                  formData.region ||
                  formData.children
                )
                  setSelectForm("PersonalInformation");
              }}
              // id='personalInformation'
              id="PersonalInformation"
              className="PI-heading-container"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.4995 0C5.60758 0 0 5.60758 0 12.4995C0 19.3924 5.60758 24.999 12.4995 24.999C19.3915 24.999 24.999 19.3915 24.999 12.4995C25 5.60758 19.3924 0 12.4995 0ZM12.4995 23.2955C9.93319 23.2975 7.45091 22.3809 5.50183 20.7114C6.59873 18.4907 8.95116 16.6343 11.7699 16.2661C12.0083 16.3094 12.2505 16.3382 12.4995 16.3382C12.8216 16.3382 13.1359 16.2988 13.4397 16.2267C16.194 16.4911 18.5484 18.3801 19.7914 20.4432C17.8063 22.2776 15.2025 23.2962 12.4995 23.2955ZM9.65872 11.2238C9.65872 9.34147 10.9306 7.81484 12.4995 7.81484C14.0684 7.81484 15.3403 9.34147 15.3403 11.2238C15.3403 12.7937 14.4549 14.1127 13.2513 14.5087C13.0956 14.5001 12.9417 14.4886 12.7841 14.4886C12.4726 14.4886 12.163 14.5107 11.8545 14.5414C10.597 14.1905 9.65872 12.8398 9.65872 11.2238ZM20.9844 19.1598C19.8039 17.4101 17.91 15.745 15.5932 14.9596C16.4834 14.0252 17.0448 12.6985 17.0448 11.2238C17.0448 8.40415 15.0058 6.11036 12.4995 6.11036C9.99327 6.11036 7.95424 8.40415 7.95424 11.2238C7.95424 12.76 8.56278 14.1377 9.51932 15.0759C7.30533 15.8787 5.38358 17.4495 4.23669 19.4405C2.59869 17.4989 1.70155 15.0398 1.70448 12.4995C1.70448 6.5372 6.53817 1.70448 12.4995 1.70448C18.4609 1.70448 23.2946 6.53817 23.2946 12.4995C23.2965 14.9164 22.4826 17.2632 20.9844 19.1598Z"
                  fill="black"
                />
              </svg>
              Personal Information{" "}
            </div>
            {selectForm === "PersonalInformation" && (
              <form action="post" className="w-full PI-form">
                <div className=" PI-form-layout-work">
                  <div className="mb-3 w-full form-input">
                    <label
                      for="firstname"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      onChange={handleNameChange}
                      value={formData.firstname}
                      maxLength={50}
                      placeholder="Enter your first name"
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {errors.firstname && (
                      <p className="text-red-500">{errors.firstname}</p>
                    )}
                  </div>
                  <div className="w-full mb-3 form-input">
                    <label
                      for="lastname"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      onChange={handleNameChange}
                      placeholder="Enter your last name"
                      value={formData.lastname}
                      maxLength={50}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {errors.lastname && (
                      <p className="text-red-500">{errors.lastname}</p>
                    )}
                  </div>
                  <div className="w-full mb-3 form-input">
                    <label
                      for="email"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      value={formData.email}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                  <div className="mb-3 w-full form-input">
                    <label
                      for="nationality"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled special-field-label-adjust"
                    >
                      *Nationality
                    </label>
                    <Select
                      options={options}
                      value={options.find(
                        (option) => option.label === formData.nationality
                      )}
                      onChange={handleSelectChange}
                      styles={customStyles}
                      className="w-full"
                    />
                    {errors.nationality && (
                      <p className="text-red-500">{errors.nationality}</p>
                    )}
                  </div>

                  <div className="w-full mb-3 form-input">
                    <label
                      for="age"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *Age
                    </label>
                    <select
                      id="age"
                      onChange={handleInputChange}
                      name="age"
                      value={formData.age}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option value="" selected>
                        Select
                      </option>
                      {ageOptions.map((option) => (
                        <option
                          key={option.value}
                          className="text-black"
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.age && <p className="text-red-500">{errors.age}</p>}
                  </div>

                  <div className="mb-3 w-full form-input">
                    <label
                      for="martial-status"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *Martial Status
                    </label>

                    <select
                      id="martial-status"
                      onChange={handleInputChange}
                      name="maritalStatus"
                      value={formData.maritalStatus}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option value="" selected>
                        Select
                      </option>
                      {maritalStatusOptions.map((option) => (
                        <option
                          key={option.value}
                          className="text-black"
                          value={option.value}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.maritalStatus && (
                      <p className="text-red-500">{errors.maritalStatus}</p>
                    )}
                  </div>

    
                  <div className="mb-3 w-full form-input">
                    <label
                      htmlFor="phone"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled special-field-label-adjust"
                    >
                      *Phone Number
                    </label>
                    <div className="flex">
                      <PhoneInput
                        country={"in"}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        enableSearch={true} // Allows searching within the dropdown
                        disableDropdown={false}
                        inputProps={{
                          name: "phone",
                          id: "phone",
                          required: true,
                          autoFocus: false,
                        }}
                        inputStyle={{
                          width: "100%",
                          borderRadius: "0.375rem",
                          border: "1px solid black",
                          backgroundColor: "white",
                          padding: "1.5rem 3rem",
                          fontSize: "1rem",
                          fontWeight: "500",
                          color: "#6B7280",
                          outline: "none",
                        }}
                        containerStyle={{
                          width: "100%",
                        }}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div className="mb-3 w-full form-input">
                    <label className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled">
                      *Highest level of education?
                      
                    </label>
                    <select
                      id="EducationLevel"
                      onChange={handleInputChange}
                      name="EducationLevel"
                      value={formData.EducationLevel}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option
                        className="text-black"
                        value="Secondary School (Class 10th)"
                      >
                        Secondary School (Class 10th)
                      </option>
                      <option
                        className="text-black"
                        value="Senior Secondary diploma (high school)(Class 12th)"
                      >
                        Senior Secondary diploma (high school)(Class 12th)
                      </option>
                      <option
                        className="text-black"
                        value="One-year diploma or certificate  (Post Secondary)"
                      >
                        One-year diploma or certificate (Post Secondary)
                      </option>
                      <option
                        className="text-black"
                        value="Two-year degree, diploma of certificate  (Post Secondary)"
                      >
                        Two-year degree, diploma of certificate (Post Secondary)
                      </option>
                      <option
                        className="text-black"
                        value="Bachelor's degree for 3yrs or more"
                      >
                        Bachelor's degree for 3yrs or more
                      </option>
                      <option
                        className="text-black"
                        value="Post Graduate Diploma/Certificate for 1yr or more"
                      >
                        Post Graduate Diploma/Certificate for 1yr or more
                      </option>
                      <option
                        className="text-black"
                        value="Master's degree for 1 yr or more"
                      >
                        Master's degree for 1 yr or more
                      </option>
                      <option
                        className="text-black"
                        value="Doctoral level university degree/Ph.D."
                      >
                        Doctoral level university degree/Ph.D.
                      </option>
                    </select>

                    {errors.EducationLevel && (
                      <p className="text-red-500">{errors.EducationLevel}</p>
                    )}
                  </div>

                  <div className="mb-3 w-full form-input">
                    <label
                      for="live"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *Country of Residence
                    </label>
                    <select
                      id="live"
                      onChange={handleInputChange}
                      name="region"
                      value={formData.region}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option className="text-black" value="In Canada">
                        In Canada
                      </option>
                      <option className="text-black" value="Outside Canada">
                        Outside Canada
                      </option>
                    </select>

                    {errors.region && (
                      <p className="text-red-500">{errors.region}</p>
                    )}
                  </div>

                  {formData.region === "In Canada" && (
                    <div className="w-full mb-3 form-input">
                      <label className="mb-2 block text-base font-medium text-[#07074D] styled">
                        *What is your current status in Canada?
                        
                      </label>
                      <select
                        id="status"
                        onChange={handleInputChange}
                        name="status"
                        value={formData.status}
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      >
                        <option value="" selected>
                          Select
                        </option>
                        <option className="text-black" value="Student PSWP">
                          Student PSWP
                        </option>
                        <option className="text-black" value="Tourist">
                          Tourist
                        </option>
                        <option className="text-black" value="Business">
                          Business
                        </option>
                        <option className="text-black" value="Dependent">
                          Dependent
                        </option>
                        <option className="text-black" value="Asylum">
                          Asylum
                        </option>
                        <option className="text-black" value="TRV">
                          TRV
                        </option>
                      </select>

                      {errors.status && (
                        <p className="text-red-500">{errors.status}</p>
                      )}
                    </div>
                  )}


                  </div>

                  <div className="checkbox-container">

  <div className="spouse">
                  {formData.maritalStatus === "married" && (
                    <div className="mb-3">
                      <label
                        for="children"
                        className="mb-4 block text-base font-medium text-[#07074D]"
                      >
                        *Is your spouse with you in canada?
                       
                      </label>
                      <div className="flex items-center justify-start gap-6">
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="wpspouse1"
                            type="radio"
                            name="isSpouseinCanada"
                            className="hidden"
                            checked={formData.isSpouseinCanada === "yes"}
                            onClick={handleInputChange}
                            value="yes"
                          />
                          <label
                            for="wpspouse1"
                            className="flex items-center cursor-pointer"
                          >
                            <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="wpspouse2"
                            type="radio"
                            name="isSpouseinCanada"
                            className="hidden"
                            onClick={handleInputChange}
                            value="no"
                            checked={formData.isSpouseinCanada === "no"}
                          />
                          <label
                            for="wpspouse2"
                            className="flex items-center cursor-pointer"
                          >
                            <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                            NO
                          </label>
                        </div>
                      </div>
                      {errors.isSpouseinCanada && (
                        <p className="text-red-500">
                          {errors.isSpouseinCanada}
                        </p>
                      )}
                    </div>
                  )}

{formData.maritalStatus === "married" &&
                    formData.isSpouseinCanada === "yes" && (
                      <div className="mb-3 w-full form-input wife-status-canada">
                        <label
                          for="children"
                          className="mb-4  block text-base font-medium text-[#07074D] styled"
                        >
                          *On what status is your wife in Canada?
                          
                        </label>
                        <select
                          id="statusOfWife"
                          onChange={handleInputChange}
                          name="statusOfWife"
                          value={formData.statusOfWife}
                          className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                        >
                          <option value="" selected>
                            Select
                          </option>
                          <option className="text-black" value="PR">
                            Permanent Resident
                          </option>
                          <option className="text-black" value="Citizen">
                            Citizen
                          </option>
                          <option className="text-black" value="Student PSWP">
                            Student PSWP
                          </option>
                          <option className="text-black" value="Tourist">
                            Tourist
                          </option>
                          <option className="text-black" value="Business">
                            Business
                          </option>
                          <option className="text-black" value="Dependent">
                            Dependent
                          </option>
                          <option className="text-black" value="Asylum">
                            Asylum
                          </option>
                          <option className="text-black" value="TRV">
                            TRV
                          </option>
                        </select>
                        {errors.statusOfWife && (
                          <p className="text-red-500">{errors.statusOfWife}</p>
                        )}
                      </div>
                    )}
</div>
                  <div>
                    <label
                      for="children"
                      className="mb-4 block text-base font-medium text-[#07074D]"
                    >
                      *Have you appeared for any english launguage program?
                      
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="wpspouse7"
                          type="radio"
                          name="englishTest"
                          className="hidden"
                          value="yes"
                          checked={formData.englishTest === "yes"}
                          onClick={handleInputChange}
                        />
                        <label
                          for="wpspouse7"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="wpspouse8"
                          type="radio"
                          name="englishTest"
                          className="hidden"
                          value="no"
                          checked={formData.englishTest === "no"}
                          onClick={handleInputChange}
                        />
                        <label
                          for="wpspouse8"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {errors.englishTest && (
                      <p className="text-red-500">{errors.englishTest}</p>
                    )}
                  </div>

                  <div>
                    <label
                      for="children"
                      className="mb-4 block text-base font-medium text-[#07074D]"
                    >
                      *Do you have any children under the age of 22 ?
                     
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio1"
                          type="radio"
                          name="children"
                          className="hidden"
                          value="yes"
                          checked={formData.children === "yes"}
                          onChange={handleInputChange}
                        />
                        <label
                          for="radio1"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio2"
                          type="radio"
                          name="children"
                          className="hidden"
                          value="no"
                          onChange={(e) => {
                            handleInputChange(e);
                          }}
                          checked={formData.children === "no"}
                        />
                        <label
                          for="radio2"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {errors.children && (
                      <p className="text-red-500">{errors.children}</p>
                    )}
                  </div>


                </div>

                <div className="w-full flex items-center justify-end mb-10 mt-6">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl assessment-next-step-btn"
                    type="button"
                    onClick={() => {
                      setSubmitAttempted(true);
                      // setSelectForm('Education');
                      if (validate(true)) {
                        setSelectForm("Education");
                      }
                      const element = workPermitRef.current;
                      const elementPosition =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;

                      window.scrollTo({
                        top: elementPosition - 100, // Adjust the offset here (100px)
                        behavior: "smooth",
                      });
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {/* education section */}
            <div
              id="education"
              onClick={() => {
                if (formData.haveLmiaJoboffer) setSelectForm("Education");
              }}
              className="PI-heading-container"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
  <path d="M12.582 0.125C13.4108 0.125 14.2057 0.45424 14.7917 1.04029C15.3778 1.62634 15.707 2.4212 15.707 3.25H18.832C19.3846 3.25 19.9145 3.46949 20.3052 3.86019C20.6959 4.25089 20.9154 4.7808 20.9154 5.33333V16.7917C20.9154 17.3442 20.6959 17.8741 20.3052 18.2648C19.9145 18.6555 19.3846 18.875 18.832 18.875H2.16536C1.61283 18.875 1.08293 18.6555 0.692225 18.2648C0.301525 17.8741 0.0820313 17.3442 0.0820312 16.7917V5.33333C0.0820312 4.7808 0.301525 4.25089 0.692225 3.86019C1.08293 3.46949 1.61283 3.25 2.16536 3.25H5.29037C5.29037 2.4212 5.61961 1.62634 6.20566 1.04029C6.79171 0.45424 7.58656 0.125 8.41537 0.125H12.582ZM9.45703 9.5H2.16536V16.7917H18.832V9.5H11.5404V10.5417C11.5401 10.8072 11.4384 11.0625 11.2561 11.2556C11.0739 11.4487 10.8248 11.5648 10.5597 11.5804C10.2947 11.5959 10.0337 11.5097 9.83012 11.3393C9.62653 11.1689 9.49568 10.9272 9.46432 10.6635L9.45703 10.5417V9.5ZM18.832 5.33333H2.16536V7.41667H18.832V5.33333ZM12.582 2.20833H8.41537C8.16023 2.20837 7.91397 2.30204 7.72331 2.47158C7.53265 2.64112 7.41084 2.87474 7.38099 3.12812L7.3737 3.25H13.6237C13.6237 2.99486 13.53 2.74861 13.3605 2.55795C13.1909 2.36728 12.9573 2.24548 12.7039 2.21562L12.582 2.20833Z" fill="#222222"/>
</svg>
              Work Permit Requirements
             
            </div>
            {selectForm === "Education" && (
              <form action="post" className="w-full PI-form">
                <div className="mb-3">
                  <label className="mb-4 block text-base font-medium text-[#07074D]">
                    Do you have an LMIA or job offer from Canada?
                    <span className="text-red-400">*</span>
                  </label>
                  <div className="flex items-center justify-start gap-6">
                    <div className="flex items-center mr-4 mb-4">
                      <input
                        id="educationqualification1"
                        type="radio"
                        name="haveLmiaJoboffer"
                        className="hidden"
                        onClick={handleInputChange}
                        value="yes"
                        checked={formData.haveLmiaJoboffer === "yes"}
                      />
                      <label
                        for="educationqualification1"
                        className="flex items-center cursor-pointer"
                      >
                        <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mb-4">
                      <input
                        id="educationqualification2"
                        type="radio"
                        name="haveLmiaJoboffer"
                        className="hidden"
                        onClick={handleInputChange}
                        value="no"
                        checked={formData.haveLmiaJoboffer === "no"}
                      />
                      <label
                        for="educationqualification2"
                        className="flex items-center cursor-pointer"
                      >
                        <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                        NO
                      </label>
                    </div>
                  </div>
                  {eduErrors.haveLmiaJoboffer && (
                    <p className="text-red-500">{eduErrors.haveLmiaJoboffer}</p>
                  )}
                </div>

                {formData.haveLmiaJoboffer === "no" && (
                  <div className="flex items-center justify-between w-full">
                    <div className=" flex flex-col items-center justify-center">
                      <div className="mb-3">
                        <label className="mb-4 block text-base font-medium text-[#07074D]">
                          Do you require an LMIA or Job offer?
                          <span className="text-red-400">*</span>
                        </label>
                        <div className="flex items-center justify-start gap-6">
                          <div className="flex items-center mr-4 mb-4">
                            <input
                              id="workpermitqualification1"
                              type="radio"
                              name="requireLmiaJoboffer"
                              className="hidden"
                              onChange={handleInputChange}
                              value="yes"
                              checked={formData.requireLmiaJoboffer === "yes"}
                            />
                            <label
                              for="workpermitqualification1"
                              className="flex items-center cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center mr-4 mb-4">
                            <input
                              id="workpermitqualification2"
                              type="radio"
                              name="requireLmiaJoboffer"
                              className="hidden"
                              onChange={handleInputChange}
                              value="no"
                              checked={formData.requireLmiaJoboffer === "no"}
                            />
                            <label
                              for="workpermitqualification2"
                              className="flex items-center cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                              NO
                            </label>
                          </div>
                        </div>
                        {eduErrors.requireLmiaJoboffer && (
                          <p className="text-red-500">
                            {eduErrors.requireLmiaJoboffer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {formData.haveLmiaJoboffer === "yes" && (
                  <div className="items-start justify-center">
                    <div className="w-full mb-3 LMIA-input">
                      <label
                        for="stream"
                        className="mb-2 block text-base font-medium text-[#07074D]"
                      >
                        *Please mention the NOC code mentioned on your LMIA?
                       
                      </label>
                      <input
                        type="text"
                        id="stream"
                        name="nocCodeonLmia"
                        onChange={handleInputChange}
                        value={formData.nocCodeonLmia}
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {eduErrors.nocCodeonLmia && (
                        <p className="text-red-500">
                          {eduErrors.nocCodeonLmia}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                <div className="w-full flex items-center justify-end mb-10 mt-10">
                  <button
                    className="assessment-next-step-btn"
                    type="button"
                    onClick={() => {
                      setSubmitAttemptedEducation(true);
                      // setSelectForm('work-experience');
                      if (validateEducation(true)) {
                        //setSelectForm("work-experience");
                        setSelectForm("work-experience");
                      }
                      const element = workPermitRef.current;
                      const elementPosition =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;

                      window.scrollTo({
                        top: elementPosition, // Adjust the offset here (100px)
                        behavior: "smooth",
                      });
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            <WorkExperienceForm
              selectForm={selectForm}
              formData={formData}
              setFormData={setFormData}
              setSelectForm={setSelectForm}
              nextform={"other"}
              scrollRef={workPermitRef}
            />

            <div
              id="other"
              onClick={() => {
                if (
                  (formData.workexperience1 === "yes" &&
                    formData.workExperiences &&
                    formData.workExperiences.length > 0) ||
                  formData.workexperience1 === "no"
                ) {
                  setSelectForm("other");
                }
              }}
              className="PI-heading-container"
            >
           <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
  <path d="M11.8959 3.93195H1.10176C0.875857 3.93195 0.65921 4.02169 0.499474 4.18143C0.339739 4.34116 0.25 4.55781 0.25 4.78371C0.25 5.00961 0.339739 5.22626 0.499474 5.38599C0.65921 5.54573 0.875857 5.63547 1.10176 5.63547H11.8959C12.1218 5.63547 12.3385 5.54573 12.4982 5.38599C12.6579 5.22626 12.7477 5.00961 12.7477 4.78371C12.7477 4.55781 12.6579 4.34116 12.4982 4.18143C12.3385 4.02169 12.1218 3.93195 11.8959 3.93195ZM11.8959 0.523071H1.10176C0.875857 0.523071 0.65921 0.61281 0.499474 0.772545C0.339739 0.932281 0.25 1.14893 0.25 1.37483C0.25 1.60073 0.339739 1.81738 0.499474 1.97711C0.65921 2.13685 0.875857 2.22659 1.10176 2.22659H11.8959C12.1218 2.22659 12.3385 2.13685 12.4982 1.97711C12.6579 1.81738 12.7477 1.60073 12.7477 1.37483C12.7477 1.14893 12.6579 0.932281 12.4982 0.772545C12.3385 0.61281 12.1218 0.523071 11.8959 0.523071ZM11.8959 7.34083H1.10176C0.875857 7.34083 0.65921 7.43057 0.499474 7.59031C0.339739 7.75004 0.25 7.96669 0.25 8.19259C0.25 8.41849 0.339739 8.63514 0.499474 8.79487C0.65921 8.95461 0.875857 9.04435 1.10176 9.04435H11.8959C12.1218 9.04435 12.3385 8.95461 12.4982 8.79487C12.6579 8.63514 12.7477 8.41849 12.7477 8.19259C12.7477 7.96669 12.6579 7.75004 12.4982 7.59031C12.3385 7.43057 12.1218 7.34083 11.8959 7.34083Z" fill="#222221"/>
</svg>
              Other
              
            </div>
            {selectForm === "other" && (
              <form action="post" className="w-full PI-form">
                <div className="mt-4">
                  <div className="flex flex-col items-start justify-center comment-section-adjust">
                    <label
                      for="comments"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Any information you would like to share (Optional)
                    </label>
                    <input
                      type="text"
                      name="otherInformation"
                      id="comments"
                      placeholder="Any information you would like to share, please mention"
                      value={formData.otherInformation}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full flex items-center justify-end mb-10 mt-10">
                  <button
                    className="assessment-next-step-btn"
                    type="button"
                    onClick={() => {
                      handleFormSubmit();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default WorkPermit;

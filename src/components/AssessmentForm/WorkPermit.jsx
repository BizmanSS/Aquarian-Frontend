import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
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
  const [submitAttemptedWork, setSubmitAttemptedWork] = useState(false);

  const [errors, setErrors] = useState({});
  const [eduErrors, setEduErrors] = useState({});
  const [workErrors, setWorkErrors] = useState({});

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
    workexperiences: [
      {
        workexperience: "",
        employmentHistory: "",
        workCountry: "",
        occupation: "",
      },
    ],
    workexperience1: "",

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

  const validateWork = (showErrors = false) => {
    const newErrors = {};

    if (!formData.workexperience1) {
      newErrors.workexperience1 = "Work Experience/Qualification is required";
    }

    if (formData.workexperience1 === "yes") {
      formData.workexperiences.forEach((qualification, index) => {
        if (!qualification.workexperience) {
          newErrors[`workexperience-${index}`] =
            "Total Number of Work Experience is required";
        }
        if (!qualification.employmentHistory) {
          newErrors[`employmentHistory-${index}`] =
            "Employment History is required";
        }

        if (!qualification.occupation) {
          newErrors[`occupation-${index}`] = "Field/Stream is required";
        }
        if (!qualification.workCountry) {
          newErrors[`workCountry-${index}`] = "Country is required";
        }
      });
    }

    if (showErrors) {
      setWorkErrors(newErrors);
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

  useEffect(() => {
    if (submitAttemptedWork) {
      validateWork(true);
    }
  }, [formData, submitAttemptedWork]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
      nationality: selectedOption.value,
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
        toast.success("You have successfully submited your form!");
      }
    } catch (error) {
      toast.error("Internal server errror!");
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
              className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
            >
              Personal Information{" "}
              <span className="text-black">
                {selectForm === "PersonalInformation" ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === "PersonalInformation" && (
              <form action="post" className="w-full">
                <div
                  className="w-full md:grid grid-cols-2"
                  style={{ columnGap: "10%" }}
                >
                  <div className="w-[100%] mb-3">
                    <label
                      for="firstname"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      First Name<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      onChange={handleInputChange}
                      value={formData.firstname}
                      maxLength={50}
                      placeholder="Enter your first name"
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {errors.firstname && (
                      <p className="text-red-500">{errors.firstname}</p>
                    )}
                  </div>
                  <div className="w-[100%] mb-3">
                    <label
                      for="lastname"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Last Name<span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      value={formData.lastname}
                      maxLength={50}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {errors.lastname && (
                      <p className="text-red-500">{errors.lastname}</p>
                    )}
                  </div>
                  <div className="w-[100%] mb-3">
                    <label
                      for="email"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Email Address<span className="text-red-400">*</span>
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
                  <div className="w-[100%] mb-3">
                    <label
                      htmlFor="phone"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Phone Number<span className="text-red-400">*</span>
                    </label>
                    <div className="flex">
                      <PhoneInput
                        country={"in"}
                        value={formData.phone}
                        onChange={handlePhoneChange}
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
                  <div className="w-[100%] mb-3">
                    <label
                      for="nationality"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Nationality<span className="text-red-400">*</span>
                    </label>
                    <Select
                      options={options}
                      value={options.find(
                        (option) => option.value === formData.nationality
                      )}
                      onChange={handleSelectChange}
                      styles={customStyles}
                      className="w-full"
                    />
                    {errors.nationality && (
                      <p className="text-red-500">{errors.nationality}</p>
                    )}
                  </div>
                  <div className="w-[100%] mb-3">
                    <label
                      for="age"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Age<span className="text-red-400">*</span>
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
                  <div className="w-[100%] mb-3">
                    <label
                      for="martial-status"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Martial Status<span className="text-red-400">*</span>
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
                  {formData.maritalStatus === "married" && (
                    <div className="mb-3">
                      <label
                        for="children"
                        className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Is your spouse with you in canada?
                        <span className="text-red-400">*</span>
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
                      <div className="mb-3">
                        <label
                          for="children"
                          className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
                        >
                          On what status is your wife in Canada?
                          <span className="text-red-400">*</span>
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
                  <div className="w-[100%] mb-3">
                    <label
                      for="live"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Where do you currently live ?
                      <span className="text-red-400">*</span>
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
                    <div className="w-full mb-3">
                      <label className="mb-2 ml-2 block text-base font-medium text-[#07074D]">
                        What is your current status in Canada?
                        <span className="text-red-400">*</span>
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
                  <div className="w-[100%] mb-3">
                    <label className="mb-2 ml-2 block text-base font-medium text-[#07074D]">
                      What is your highest level of education?
                      <span className="text-red-400">*</span>
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
                  <div>
                    <label
                      for="children"
                      className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Have you appeared for any enlglish launguage program?
                      <span className="text-red-400">*</span>
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
                      className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Do you have any children under the age of 22 ?
                      <span className="text-red-400">*</span>
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

                <div className="w-full flex items-center justify-center mb-10 mt-6">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
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
              className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
            >
              Work Permit Requirements
              <span className="text-black">
                {selectForm === "Education" ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === "Education" && (
              <form action="post" className="w-full">
                <div className="mb-3">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
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
                        <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
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
                    <div className="w-full mb-3 md:w-[50%]">
                      <label
                        for="stream"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Please mention the NOC code mentioned on your LMIA?
                        <span className="text-red-400">*</span>
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
                <div className="w-full flex items-center justify-center mb-10 mt-10">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
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
                if (validateWork(true)) {
                  setSelectForm("other");
                }
              }}
              className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
            >
              Other
              <span className="text-black">
                {selectForm === "other" ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === "other" && (
              <form action="post" className="w-full">
                <div className="mt-4">
                  <div className="flex flex-col items-start justify-center">
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

                <div className="w-full flex items-center justify-center mb-10 mt-10">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
                    type="button"
                    onClick={() => {
                      handleFormSubmit();
                      setSelectForm("PersonalInformation");
                      window.scrollTo({
                        top: element,
                        behavior: "smooth",
                      });
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

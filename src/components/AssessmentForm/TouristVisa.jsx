import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import { ageOptions, maritalStatusOptions } from "./data/formSelectOptions";
import FinancialForm from "./components/FinancialForm";

const TouristVisa = ({ selectedForm, formType, element, touristVisaRef }) => {
  const [selectForm, setSelectForm] = useState("PersonalInformation");
  const options = useMemo(() => countryList().getData(), []);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitAttemptedFinancial, setSubmitAttemptedFinancial] =
    useState(false);
  const [errors, setErrors] = useState({});
  const [errorsFinancial, setErrorsFinancial] = useState({});
  const [currentDate] = useState(new Date());
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    nationality: "",
    age: "",
    maritalStatus: "",
    spouseTravelling: "",
    children: "",
    childrenTravelling: "",
    region: "",
    EducationLevel: "",
    occupation: "",
    occupationType: "",
    workExperience: "",
    yearlyIncome: "",
    regularITR: "",
    sponsorInCanada: "",
    visaRefused: "",
    visaApplied: "",
    visaAppliedCountry: "",
    visaAppliedDate: "",
    otherInformation: "",
  });

  const handleVisaDate = (date) => {
    if (date > currentDate) {
      toast.error("Date cannot be greater than the current date", {
        position: "top-center",
      });
      return;
    }
    setFormData((prev) => ({
      ...prev,
      visaAppliedDate: date,
    }));
  };
  const handleVisaCountryChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      visaAppliedCountry: selectedOption.label,
    }));
  };

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
    if (!formData.nationality)
      tempErrors.nationality = "Nationality is required";
    if (formData.age === "") tempErrors.age = "Age is required";
    if (!formData.maritalStatus)
      tempErrors.maritalStatus = "Marital Status is required";
    if (formData.maritalStatus === "married" && !formData.spouseTravelling) {
      tempErrors.spouseTravelling =
        "Please specify if your spouse is Travelling with you in Canada";
    }
    if (!formData.children)
      tempErrors.children = "Please specify if you have any children under 22";
    if (formData.children === "yes") {
      if (!formData.childrenTravelling) {
        tempErrors.childrenTravelling =
          "Please specify if your children is Travelling with you or not";
      }
    }

    if (!formData.region)
      tempErrors.region = "Please Specify your country where do you Live";

    if (showErrors) {
      setErrors(tempErrors);
    }
    return Object.keys(tempErrors).length === 0;
  };

  const validateFinancial = (showErrors = false) => {
    let tempErrorsFinancial = {};
    if (!formData.EducationLevel)
      tempErrorsFinancial.EducationLevel =
        "Please Specify your highest level of education";
    if (!formData.occupation)
      tempErrorsFinancial.occupation = "Occupation is required";
    if (!formData.occupationType)
      tempErrorsFinancial.occupationType = "Type of Occupation is required";
    if (!formData.workExperience)
      tempErrorsFinancial.workExperience = "Work Experience is required";
    if (!formData.yearlyIncome)
      tempErrorsFinancial.yearlyIncome = "Yearly Income is required";
    if (!formData.regularITR)
      tempErrorsFinancial.regularITR = "Please Specify your status of ITR";
    if (!formData.sponsorInCanada)
      tempErrorsFinancial.sponsorInCanada = "Sponsorship status is required";
    if (!formData.visaRefused) {
      tempErrorsFinancial.visaRefused =
        "Please specify if your visa has been refused before.";
    }
    if (formData.visaRefused === "yes") {
      if (!formData.visaApplied) {
        tempErrorsFinancial.visaApplied =
          "Please specify Refused Visa Category.";
      }
      if (!formData.visaAppliedCountry) {
        tempErrorsFinancial.visaAppliedCountry =
          "Please specify Refused Visa Applied Country.";
      }
      if (!formData.visaAppliedDate) {
        tempErrorsFinancial.visaAppliedDate =
          "Please specify Refused Visa Applied Dates.";
      }
    }
    if (showErrors) {
      setErrorsFinancial(tempErrorsFinancial);
    }
    return Object.keys(tempErrorsFinancial).length === 0;
  };

  useEffect(() => {
    if (submitAttempted) {
      validate(true);
    }
  }, [submitAttempted]);

  useEffect(() => {
    if (submitAttemptedFinancial) {
      validateFinancial(true);
    }
  }, [submitAttemptedFinancial]);

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
  const handleRegionChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      region: selectedOption.label,
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
        `${process.env.REACT_APP_API}/tourist_visa_form`,
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
      }
    } catch (error) {
      toast.error("Internal server errror!", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      {selectedForm.touristVisa && (
        <>
          <div className="w-full flex flex-col items-start justify-center lg:px-20 md:px-10 px-2 gap-4 mb-10">
            <div
              ref={touristVisaRef}
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
              className="text-base md:text-xl font-semibold tracking-[5px] md:tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
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
                        for="spouseStatus"
                        className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Will your spouse be travelling with you to Canada ?
                        <span className="text-red-400">*</span>
                      </label>
                      <div className="flex items-center justify-start gap-6">
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="wpspouse3"
                            type="radio"
                            name="spouseTravelling"
                            className="hidden"
                            value="yes"
                            checked={formData.spouseTravelling === "yes"}
                            onChange={handleInputChange}
                          />
                          <label
                            for="wpspouse3"
                            className="flex items-center cursor-pointer"
                          >
                            <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                            Yes
                          </label>
                        </div>

                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="wpspouse4"
                            type="radio"
                            name="spouseTravelling"
                            className="hidden"
                            value="no"
                            checked={formData.spouseTravelling === "no"}
                            onChange={handleInputChange}
                          />
                          <label
                            for="wpspouse4"
                            className="flex items-center cursor-pointer"
                          >
                            <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                            NO
                          </label>
                        </div>
                      </div>
                      {errors.spouseTravelling && (
                        <p className="text-red-500">
                          {errors.spouseTravelling}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="w-full mb-3">
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
                  {formData.children === "yes" && (
                    <div className="w-full mb-3">
                      <label
                        for="childrenTravelling"
                        className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Will your children be travelling with you?
                        <span className="text-red-400">*</span>
                      </label>
                      <div className="flex items-center justify-start gap-6">
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="radio001"
                            type="radio"
                            name="childrenTravelling"
                            className="hidden"
                            value="yes"
                            checked={formData.childrenTravelling === "yes"}
                            onChange={handleInputChange}
                          />
                          <label
                            for="radio001"
                            className="flex items-center cursor-pointer"
                          >
                            <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                            Yes
                          </label>
                        </div>
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="radio002"
                            type="radio"
                            name="childrenTravelling"
                            className="hidden"
                            value="no"
                            onChange={(e) => {
                              handleInputChange(e);
                            }}
                            checked={formData.childrenTravelling === "no"}
                          />
                          <label
                            for="radio002"
                            className="flex items-center cursor-pointer"
                          >
                            <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                            No
                          </label>
                        </div>
                      </div>
                      {errors.childrenTravelling && (
                        <p className="text-red-500">
                          {errors.childrenTravelling}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="w-[100%] mb-3">
                    <label
                      for="live"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Where do you currently live?
                      <span className="text-red-400">*</span>
                    </label>

                    <Select
                      options={options}
                      value={options.find(
                        (option) => option.label === formData.region
                      )}
                      onChange={handleRegionChange}
                      styles={customStyles}
                      className="w-full"
                    />
                    {errors.region && (
                      <p className="text-red-500">{errors.region}</p>
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
                        setSelectForm("financial");
                      }
                      const element = touristVisaRef.current;
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
            <FinancialForm
              selectForm={selectForm}
              formData={formData}
              setFormData={setFormData}
              setSelectForm={setSelectForm}
              nextform={"other"}
              scrollRef={touristVisaRef}
              errors={errorsFinancial}
              options={options}
              Select={Select}
              handleInputChange={handleInputChange}
              handleVisaCountryChange={handleVisaCountryChange}
              handleVisaDate={handleVisaDate}
              customStyles={customStyles}
              validateFinancial={validateFinancial}
              setSubmitAttemptedFinancial={setSubmitAttemptedFinancial}
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
              className="text-base md:text-xl font-semibold tracking-[5px] md:tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
            >
              Other Information
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
                      setFormData({
                        firstname: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        nationality: "",
                        age: "",
                        maritalStatus: "",
                        spouseTravelling: "",
                        children: "",
                        childrenTravelling: "",
                        region: "",
                        EducationLevel: "",
                        occupation: "",
                        occupationType: "",
                        workExperience: "",
                        yearlyIncome: "",
                        regularITR: "",
                        sponsorInCanada: "",
                        visaRefused: "",
                        visaApplied: "",
                        visaAppliedCountry: "",
                        visaAppliedDate: "",
                        otherInformation: "",
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

export default TouristVisa;

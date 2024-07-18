import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TouristVisa = ({ selectedForm }) => {
  const [selectForm, setSelectForm] = useState("PersonalInformation");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitAttemptedEducation, setSubmitAttemptedEducation] =
    useState(false);
  const [submitAttemptedOther, setSubmitAttemptedOther] = useState(false);

  const [errors, setErrors] = useState({});
  const [eduErrors, setEduErrors] = useState({});
  const [othersErrors, setOthersErrors] = useState({});

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    maritalStatus: "",
    age: "",
    nationality: "",
    region: "",
    spouseTravelling: "",
    children: "",
    childrenTravelling: "",
    educationlevel: "",
    occupationlevel: "",
    occupationtype: "",
    workExperience: "",
    yearlyincome: "",
    incometaxreturns: "",
    relativesponsor: "",
    visarefused: "",
    otherInformation: "",
  });
  // console.log(formData);

  const validate = (showErrors = false) => {
    let tempErrors = {};
    if (!formData.firstname) tempErrors.firstname = "First Name is required";
    if (!formData.lastname) tempErrors.lastname = "Last Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    if (!formData.maritalStatus)
      tempErrors.maritalStatus = "Marital Status is required";
    if (!formData.age) tempErrors.age = "Age is required";
    if (!formData.nationality)
      tempErrors.nationality = "Nationality is required";
    if (!formData.region) tempErrors.region = "Region is required";
    if (
      (formData.maritalStatus === "married" ||
        formData.maritalStatus === "commonnlaw") &&
      !formData.spouseTravelling
    )
      tempErrors.spouseTravelling =
        "Please specify if your spouse will be travelling with you";
    if (!formData.children)
      tempErrors.children = "Please specify if you have any children under 22";
    if (!formData.childrenTravelling)
      tempErrors.childrenTravelling =
        "Please specify if your children is travelling";
    if (showErrors) {
      setErrors(tempErrors);
    }
    return Object.keys(tempErrors).length === 0;
  };

  const validateEducation = (showErrors = false) => {
    const newErrors = {};

    if (!formData.educationlevel) {
      newErrors.educationlevel =
        "Please enter your highest level of education.";
    }

    if (!formData.occupationlevel) {
      newErrors.occupationlevel = "Please enter your occupation.";
    }

    if (!formData.occupationtype) {
      newErrors.occupationtype = "Please select the type of your occupation.";
    }

    if (!formData.workExperience) {
      newErrors.workExperience = "Please enter your years of work experience.";
    }

    if (!formData.yearlyincome) {
      newErrors.yearlyincome = "Please enter your yearly income.";
    }

    if (!formData.incometaxreturns) {
      newErrors.incometaxreturns =
        "Please indicate if you have been filing your income tax returns.";
    }

    if (!formData.relativesponsor) {
      newErrors.relativesponsor =
        "Please indicate if you have any relatives or friends in Canada who can sponsor you.";
    }

    if (!formData.visarefused) {
      newErrors.visarefused =
        "Please indicate if you have ever been refused a visa for any country.";
    }

    if (showErrors) {
      setEduErrors(newErrors);
    }
    return Object.keys(newErrors).length === 0;
  };

  const validateOthers = (showErrors = false) => {
    const newErrors = {};
    if (!formData.otherInformation)
      newErrors.otherInformation = "Additional information is required";

    if (showErrors) {
      setOthersErrors(newErrors);
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
    if (submitAttemptedOther) {
      validateOthers(true);
    }
  }, [formData, submitAttemptedOther]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
      console.log(response);
      if (response.status === 200) {
        const data = response.data;
        toast.success("You have successfully submited your form!");
        console.log("Successfully submited form", data.message);
      }
    } catch (error) {
      console.log("Error during form submission", error);
      toast.error("Internal server errror!");
    }
  };

  return (
    <>
      {selectedForm.touristVisa && (
        <>
          <div className="w-full flex flex-col items-start justify-center px-4 lg:px-20 gap-4 mb-10">
            <div className="text-3xl font-semibold">Choose Your Form</div>
            <div className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between">
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
                <div className="flex items-center justify-between w-full">
                  <div className="w-[45%] flex flex-col items-start justify-center">
                    <div className="mb-3 w-full">
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
                        placeholder="Enter your first name"
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {errors.firstname && (
                        <p className="text-red-500">{errors.firstname}</p>
                      )}
                    </div>
                    <div className="w-full mb-3">
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
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}
                    </div>
                    <div className="mb-3 w-full">
                      <label
                        for="phone"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Telephone<span className="text-red-400">*</span>
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                      )}
                    </div>
                    <div className="mb-3 w-full">
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
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option className="text-black" value="married">
                          Married/Common Law
                        </option>
                        <option className="text-black" value="unmarried">
                          Never Married/Single
                        </option>
                        <option className="text-black" value="divorced">
                          Divorced/Seperated
                        </option>
                        <option className="text-black" value="widowed">
                          Widowed
                        </option>
                        <option className="text-black" value="seperated">
                          Legally Seperated
                        </option>
                        <option className="text-black" value="anulledmarriage">
                          Anulled Marriage
                        </option>
                      </select>
                      {errors.maritalStatus && (
                        <p className="text-red-500">{errors.maritalStatus}</p>
                      )}
                    </div>
                    <div className="mt-4">
                      <div className="mb-3 w-full">
                        <label
                          for="children"
                          className="mb-4 block text-base font-medium text-[#07074D]"
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
                      </div>
                      {errors.children && (
                        <p className="text-red-500 -mt-4 mb-4">
                          {errors.children}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-[45%] flex flex-col items-center justify-center">
                    <div className="w-full mb-3">
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
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {errors.lastname && (
                        <p className="text-red-500">{errors.lastname}</p>
                      )}
                    </div>
                    <div className="w-full mb-3">
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
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option className="text-black" value="17_or_less">
                          17 years of age or less
                        </option>
                        <option className="text-black" value="18">
                          18 years of age
                        </option>
                        <option className="text-black" value="19">
                          19 years of age
                        </option>
                        <option className="text-black" value="20_to_29">
                          20 to 29 years of age
                        </option>
                        <option className="text-black" value="30">
                          30 years of age
                        </option>
                        <option className="text-black" value="31">
                          31 years of age
                        </option>
                        <option className="text-black" value="32">
                          32 years of age
                        </option>
                        <option className="text-black" value="33">
                          33 years of age
                        </option>
                        <option className="text-black" value="34">
                          34 years of age
                        </option>
                        <option className="text-black" value="35">
                          35 years of age
                        </option>
                        <option className="text-black" value="36">
                          36 years of age
                        </option>
                        <option className="text-black" value="37">
                          37 years of age
                        </option>
                        <option className="text-black" value="38">
                          38 years of age
                        </option>
                        <option className="text-black" value="39">
                          39 years of age
                        </option>
                        <option className="text-black" value="40">
                          40 years of age
                        </option>
                        <option className="text-black" value="41">
                          41 years of age
                        </option>
                        <option className="text-black" value="42">
                          42 years of age
                        </option>
                        <option className="text-black" value="43">
                          43 years of age
                        </option>
                        <option className="text-black" value="44">
                          44 years of age
                        </option>
                        <option className="text-black" value="45">
                          45 years of age
                        </option>
                        <option className="text-black" value="45_or_more">
                          45 years of age or more
                        </option>
                      </select>
                      {errors.age && (
                        <p className="text-red-500">{errors.age}</p>
                      )}
                    </div>
                    <div className="mb-3 w-full">
                      <label
                        for="nationality"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Nationality<span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        id="nationality"
                        onChange={handleInputChange}
                        placeholder="Enter your nationality"
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {errors.nationality && (
                        <p className="text-red-500">{errors.nationality}</p>
                      )}
                    </div>
                    <div className="mb-3 w-full">
                      <label
                        for="live"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Where do you currently live ?
                        <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="live"
                        onChange={handleInputChange}
                        placeholder="Enter your region"
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {errors.region && (
                        <p className="text-red-500">{errors.region}</p>
                      )}
                    </div>
                    <div className="mb-3 w-full">
                      <label
                        for="children"
                        className="mb-4 block text-base font-medium text-[#07074D]"
                      >
                        Will your children be travelling with you?
                        <span className="text-red-400">*</span>
                      </label>
                      <div className="flex items-center justify-start gap-6">
                        <div className="flex items-center mr-4 mb-4">
                          <input
                            id="wpspouse3"
                            type="radio"
                            name="childrenTravelling"
                            className="hidden"
                            onChange={handleInputChange}
                            value="yes"
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
                            name="childrenTravelling"
                            className="hidden"
                            onChange={handleInputChange}
                            value="no"
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
                      {errors.childrenTravelling && (
                        <p className="text-red-500">
                          {errors.childrenTravelling}
                        </p>
                      )}
                    </div>
                  </div>
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
                          id="wpspouse5"
                          type="radio"
                          name="spouseTravelling"
                          className="hidden"
                          value="yes"
                          onChange={handleInputChange}
                        />
                        <label
                          for="wpspouse5"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>

                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="wpspouse6"
                          type="radio"
                          name="spouseTravelling"
                          className="hidden"
                          value="no"
                          onChange={handleInputChange}
                        />
                        <label
                          for="wpspouse6"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {errors.spouseTravelling && (
                      <p className="text-red-500">{errors.spouseTravelling}</p>
                    )}
                  </div>
                )}

                <div className="w-full flex items-center justify-center mb-10">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
                    type="button"
                    onClick={() => {
                      setSubmitAttempted(true);
                      // setSelectForm('Education');
                      if (validate(true)) {
                        setSelectForm("Education");
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            <div className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between">
              Education, Work and Financial Information
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
                <div className="font-semibold text-lg mb-4">
                  {" "}
                  Educational Qualifications *
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-20">
                  <div className="mb-3 w-full">
                    <label
                      for="educationlevel"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      What is your highest level of education?
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="educationlevel"
                      id="educationlevel"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {eduErrors.educationlevel && (
                      <p className="text-red-500">{eduErrors.educationlevel}</p>
                    )}
                  </div>
                  <div className="mb-3 w-full">
                    <label
                      for="occupationlevel"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      What is your occupation?
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="occupationlevel"
                      id="occupationlevel"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {eduErrors.occupationlevel && (
                      <p className="text-red-500">
                        {eduErrors.occupationlevel}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                      What is the type of your occupation?
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="occupationtype1"
                          type="radio"
                          name="occupationtype"
                          className="hidden"
                          value="ownedBusiness"
                          onChange={handleInputChange}
                        />
                        <label
                          for="occupationtype1"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Owned Business
                        </label>
                      </div>
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="occupationtype2"
                          type="radio"
                          name="occupationtype"
                          className="hidden"
                          value="serviceEmployee"
                          onChange={handleInputChange}
                        />
                        <label
                          for="occupationtype2"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Service Employee
                        </label>
                      </div>
                    </div>
                    {eduErrors.occupationtype && (
                      <p className="text-red-500">{eduErrors.occupationtype}</p>
                    )}
                  </div>
                  <div className="mb-3 w-full">
                    <label
                      for="wplevel"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      How many years of work experience you have?
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="workExperience"
                      id="wplevel"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {eduErrors.workExperience && (
                      <p className="text-red-500">{eduErrors.workExperience}</p>
                    )}
                  </div>
                  <div className="mb-3 w-full">
                    <label
                      for="yearlyincome"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      What is your yearly income?
                      <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="yearlyincome"
                      id="yearlyincome"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {eduErrors.yearlyincome && (
                      <p className="text-red-500">{eduErrors.yearlyincome}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                      Have you been regularly filing your Income Tax returns?
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="incometaxreturns1"
                          type="radio"
                          name="incometaxreturns"
                          className="hidden"
                          value="yes"
                          onChange={handleInputChange}
                        />
                        <label
                          for="incometaxreturns1"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="incometaxreturns2"
                          type="radio"
                          name="incometaxreturns"
                          className="hidden"
                          value="no"
                          onChange={handleInputChange}
                        />
                        <label
                          for="incometaxreturns2"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          No
                        </label>
                      </div>
                    </div>
                    {eduErrors.incometaxreturns && (
                      <p className="text-red-500">
                        {eduErrors.incometaxreturns}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                      Do you have any relatives or friends in Canada who can
                      sponsor you?
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="relativesponsor1"
                          type="radio"
                          name="relativesponsor"
                          className="hidden"
                          value="yes"
                          onChange={handleInputChange}
                        />
                        <label
                          for="relativesponsor1"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="relativesponsor2"
                          type="radio"
                          name="relativesponsor"
                          className="hidden"
                          value="no"
                          onChange={handleInputChange}
                        />
                        <label
                          for="relativesponsor2"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          No
                        </label>
                      </div>
                    </div>
                    {eduErrors.relativesponsor && (
                      <p className="text-red-500">
                        {eduErrors.relativesponsor}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                      Have you ever been refused visa for any country?
                      <span className="text-red-400">*</span>
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="visarefused1"
                          type="radio"
                          name="visarefused"
                          className="hidden"
                          value="yes"
                          onChange={handleInputChange}
                        />
                        <label
                          for="visarefused1"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="visarefused2"
                          type="radio"
                          name="visarefused"
                          className="hidden"
                          value="no"
                          onChange={handleInputChange}
                        />
                        <label
                          for="visarefused2"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          No
                        </label>
                      </div>
                    </div>
                    {eduErrors.visarefused && (
                      <p className="text-red-500">{eduErrors.visarefused}</p>
                    )}
                  </div>
                </div>
                {/* {formData.education && (
                  <div className='flex items-center justify-between w-full'>
                    <div className='w-[45%] flex flex-col items-center justify-center'>
                      <div className='mb-3 w-full'>
                        <label
                          for='passingyear'
                          className='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                        >
                          Year of Passing<span className='text-red-400'>*</span>
                        </label>
                        <input
                          type='text'
                          id='passingyear'
                          className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        />
                      </div>
                      <div className='w-full mb-3'>
                        <label
                          for='board'
                          className='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                        >
                          Board / University
                          <span className='text-red-400'>*</span>
                        </label>
                        <input
                          type='text'
                          id='board'
                          className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        />
                      </div>
                    </div>
                    <div className='w-[45%] flex flex-col items-center justify-center'>
                      <div className='w-full mb-3'>
                        <label
                          for='stream'
                          className='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                        >
                          Field / Stream<span className='text-red-400'>*</span>
                        </label>
                        <input
                          type='text'
                          id='stream'
                          className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        />
                      </div>
                      <div className='w-full mb-3'>
                        <label
                          for='country'
                          className='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                        >
                          Country<span className='text-red-400'>*</span>
                        </label>
                        <input
                          type='text'
                          id='country'
                          className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        />
                      </div>
                    </div>
                  </div>
                )} */}
                <div className="w-full flex items-center justify-center mb-10 mt-10">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
                    type="button"
                    onClick={() => {
                      setSubmitAttemptedEducation(true);
                      // setSelectForm('other');
                      if (validateEducation(true)) {
                        setSelectForm("other");
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            <div className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between">
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
                      Any information you would like to share, please mention
                    </label>
                    <input
                      type="text"
                      name="otherInformation"
                      id="comments"
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {othersErrors.otherInformation && (
                      <p className="text-red-500">
                        {othersErrors.otherInformation}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full flex items-center justify-center mb-10 mt-10">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
                    type="button"
                    onClick={() => {
                      setSubmitAttemptedOther(true);
                      if (validateOthers(true)) {
                        handleFormSubmit();
                        setSelectForm("PersonalInformation");
                        setFormData({
                          firstname: "",
                          lastname: "",
                          email: "",
                          phone: "",
                          maritalStatus: "",
                          age: "",
                          nationality: "",
                          region: "",
                          spouseTravelling: "",
                          children: "",
                          educationqualification: "",
                          educationqualification1: "",
                          childrenTravelling: "",
                          educationlevel: "",
                          occupationlevel: "",
                          occupationtype: "",
                          workExperience: "",
                          yearlyincome: "",
                          incometaxreturns: "",
                          relativesponsor: "",
                          visarefused: "",
                          otherInformation: "",
                        });
                        window.scrollTo(0, 0);
                      }
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

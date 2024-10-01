import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import SearchableDropdown from "../SearchableDropdown/SearchableDropdown";
import { countries, years } from "./FreeAssessment";
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import PhoneInput from "react-phone-input-2";
import WorkExperienceForm from "./components/WorkExperienceForm";
import EducationDetails from "./components/EducationDetails";
import './PermanentImmigration.css'


const PermanentImigration = ({
  selectedForm,
  formType,
  element,
  personalInfoRef,
}) => {
  const [selectForm, setSelectForm] = useState("PersonalInformation");

  const [selectedExam, setSelectedExam] = useState("IELTS");
  const [selectedExamFrench, setSelectedExamFrench] = useState("TCF");

  // const navigate = useNavigation();
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitAttemptedEducation, setSubmitAttemptedEducation] =
    useState(false);
  const [submitAttemptedWork, setSubmitAttemptedWork] = useState(false);
  const [submitAttemptedTest, setSubmitAttemptedTest] = useState(false);
  const [submitAttemptedOther, setSubmitAttemptedOther] = useState(false);

  const [errors, setErrors] = useState({});
  const [eduErrors, setEduErrors] = useState({});
  const [workErrors, setWorkErrors] = useState({});
  const [languageErrors, setLanguageErrors] = useState({});
  const [othersErrors, setOthersErrors] = useState({});

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    nationality: "",
    age: "",
    maritalStatus: "",
    spouseTravelling: "",
    region: "",
    children: "",
    educationExperience1: "",
    highestEducational: "",
    educationExperiences: {
      levelOfEducation: "",
      startDates: null,
      endDates: null,
      field: "",
      board: "",
      country: "",
    },
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
    englishTest: "",
    frenchTest: "",
    englishTestType: "",
    frenchTestType: "",
    englishTestResult: {
      reading: "",
      writing: "",
      listening: "",
      speaking: "",
    },
    frenchTestResult: {
      reading: "",
      writing: "",
      listening: "",
      speaking: "",
    },
    futureTestEnglish: "",
    futureTestFrench: "",
    certificateofNomination: "",
    canadianjobOffer: "",
    relativesinCanada: "",
    otherInformation: "",
  });

  const validateLanguageTests = (showErrors = false) => {
    const newErrors = {};

    if (formData.englishTest === "no" && formData.frenchTest === "no") {
      if (!formData.futureTestEnglish) {
        newErrors.futureTestEnglish = "Required fields cannot be empty";
      }
      if (!formData.futureTestFrench) {
        newErrors.futureTestFrench = "Required fields cannot be empty";
      }
    }
    if (!formData.englishTest || !formData.frenchTest) {
      if (!formData.englishTest) {
        newErrors.englishTest = "English test is required";
      }
      if (!formData.frenchTest) {
        newErrors.frenchTest = "French test is required";
      }
    }
    if (formData.frenchTest === "yes") {
      if (formData.frenchTest) {
        if (!formData.frenchTestType) {
          newErrors.frenchTestType = "French test cannot be empty";
        }
        if (!formData.frenchTestResult.reading) {
          newErrors.frenchReading = "French test reading result is required";
        }
        if (!formData.frenchTestResult.writing) {
          newErrors.frenchWriting = "French test writing result is required";
        }
        if (!formData.frenchTestResult.listening) {
          newErrors.frenchListening =
            "French test listening result is required";
        }
        if (!formData.frenchTestResult.speaking) {
          newErrors.frenchSpeaking = "French test speaking result is required";
        }
      }
    }
    if (formData.englishTest === "yes") {
      if (formData.englishTest) {
        if (!formData.englishTestType) {
          newErrors.englishTestType = "English test cannot be empty";
        }
        if (!formData.englishTestResult.reading) {
          newErrors.englishReading = "English test reading result is required";
        }
        if (!formData.englishTestResult.writing) {
          newErrors.englishWriting = "English test writing result is required";
        }
        if (!formData.englishTestResult.listening) {
          newErrors.englishListening =
            "English test listening result is required";
        }
        if (!formData.englishTestResult.speaking) {
          newErrors.englishSpeaking =
            "English test speaking result is required";
        }
      }
    }

    if (showErrors) {
      setLanguageErrors(newErrors);
    }

    return Object.keys(newErrors).length === 0;
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
      tempErrors.phone = "Phone is required";
    } else if (formData.phone.length > 20) {
      tempErrors.phone = "Phone number cannot exceed 20 digits";
    }

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
    if (showErrors) {
      setErrors(tempErrors);
    }
    return Object.keys(tempErrors).length === 0;
  };
  const handlePhoneChange = (phone) => {
    setFormData((prevState) => ({
      ...prevState,
      phone: phone,
    }));
  };

  const validateOthers = (showErrors = false) => {
    const newErrors = {};

    if (!formData.certificateofNomination)
      newErrors.certificateofNomination =
        "Certificate of nomination is required";

    if (!formData.canadianjobOffer)
      newErrors.canadianjobOffer =
        "Valid job offer from a Canadian employer is required";

    if (!formData.relativesinCanada)
      newErrors.relativesinCanada =
        "Information about relatives in Canada is required";

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
    if (submitAttemptedTest) {
      validateLanguageTests(true);
    }
  }, [formData, submitAttemptedTest]);

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
  const handleNameChange = (event) => {
    if (/^[a-zA-Z]*$/.test(event.target.value)) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleFormSubmit = async () => {

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/permanent_immigration_form`,
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
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          nationality: "",
          age: "",
          maritalStatus: "",
          spouseTravelling: "",
          region: "",
          children: "",
          educationExperience1: "",
          highestEducational: "",
          educationExperiences: {
            levelOfEducation: "",
            startDates: null,
            endDates: null,
            field: "",
            board: "",
            country: "",
          },
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
          englishTest: "",
          frenchTest: "",
          englishTestType: "",
          frenchTestType: "",
          englishTestResult: {
            reading: "",
            writing: "",
            listening: "",
            speaking: "",
          },
          frenchTestResult: {
            reading: "",
            writing: "",
            listening: "",
            speaking: "",
          },
          futureTestEnglish: "",
          futureTestFrench: "",
          certificateofNomination: "",
          canadianjobOffer: "",
          relativesinCanada: "",
          otherInformation: "",
        });
        window.scrollTo({
          top: element,
          behavior: "smooth",
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
      {selectedForm.permanentImmigration && (
        <>
          <div className="w-full flex flex-col items-start justify-center px-4 lg:px-20 gap-4 mb-10">
            <div
              ref={personalInfoRef}
              className=" ml-2 block text-2xl font-medium text-[#07074D] py-2"
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
                  formData.spouseTravelling ||
                  formData.children
                )
                  setSelectForm("PersonalInformation");
              }}
              // id='personalInformation'
              id="PersonalInformation"
              className="PI-heading-container"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.4995 0C5.60758 0 0 5.60758 0 12.4995C0 19.3924 5.60758 24.999 12.4995 24.999C19.3915 24.999 24.999 19.3915 24.999 12.4995C25 5.60758 19.3924 0 12.4995 0ZM12.4995 23.2955C9.93319 23.2975 7.45091 22.3809 5.50183 20.7114C6.59873 18.4907 8.95116 16.6343 11.7699 16.2661C12.0083 16.3094 12.2505 16.3382 12.4995 16.3382C12.8216 16.3382 13.1359 16.2988 13.4397 16.2267C16.194 16.4911 18.5484 18.3801 19.7914 20.4432C17.8063 22.2776 15.2025 23.2962 12.4995 23.2955ZM9.65872 11.2238C9.65872 9.34147 10.9306 7.81484 12.4995 7.81484C14.0684 7.81484 15.3403 9.34147 15.3403 11.2238C15.3403 12.7937 14.4549 14.1127 13.2513 14.5087C13.0956 14.5001 12.9417 14.4886 12.7841 14.4886C12.4726 14.4886 12.163 14.5107 11.8545 14.5414C10.597 14.1905 9.65872 12.8398 9.65872 11.2238ZM20.9844 19.1598C19.8039 17.4101 17.91 15.745 15.5932 14.9596C16.4834 14.0252 17.0448 12.6985 17.0448 11.2238C17.0448 8.40415 15.0058 6.11036 12.4995 6.11036C9.99327 6.11036 7.95424 8.40415 7.95424 11.2238C7.95424 12.76 8.56278 14.1377 9.51932 15.0759C7.30533 15.8787 5.38358 17.4495 4.23669 19.4405C2.59869 17.4989 1.70155 15.0398 1.70448 12.4995C1.70448 6.5372 6.53817 1.70448 12.4995 1.70448C18.4609 1.70448 23.2946 6.53817 23.2946 12.4995C23.2965 14.9164 22.4826 17.2632 20.9844 19.1598Z" fill="black"/>
              </svg>
              Personal Information{" "}
            
            </div>
            {selectForm === "PersonalInformation" && (
              <form action="post" className="w-full PI-form">
                <div
                  className=" PI-form-layout"
                >
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
                      placeholder="Enter your first name"
                      value={formData.firstname}
                      maxLength={50}
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
                      maxLength={320}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="mb-3 w-full form-input">
                    <label
                      for="live"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *Where do you currently live ?
                      
                    </label>
                    <select
                      name="region"
                      id="live"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option selected>Select</option>
                      {countries.map((country, index) => (
                        <option
                          key={index}
                          className="text-black"
                          value={country}
                        >
                          {country}
                        </option>
                      ))}
                    </select>
                    {/* <input
                        type='text'
                        name='region'
                        id='live'
                        onChange={handleInputChange}
                        placeholder='Enter your region'
                        className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      /> */}
                    {errors.region && (
                      <p className="text-red-500">{errors.region}</p>
                    )}
                  </div>

                  <div className="mb-3 w-full form-input">
                    <label
                      for="nationality"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *Nationality
                    </label>
                    <select
                      name="nationality"
                      id="nationality"
                      value={formData.nationality}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option selected>Select</option>
                      {countries.map((country, index) => (
                        <option
                          key={index}
                          className="text-black"
                          value={country}
                        >
                          {country}
                        </option>
                      ))}
                    </select>
                    {/* <input
                        type='text'
                        name='nationality'
                        id='nationality'
                        onChange={handleInputChange}
                        placeholder='Enter your nationality'
                        className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      /> */}
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
                      <option selected>Select</option>
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
                      <option selected>Select</option>
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
                  
                  <div className="w-full mb-3 form-input">
                    <label
                      for="phone"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                    >
                      *Phone Number
                    </label>
                    <div className="flex">
                      <PhoneInput
                        country={"in"}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        enableSearch={true} // Allows searching within the dropdown
                        disableDropdown={false} // Keeps the dropdown active so users can select or manually type if present
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

                  <div className="mb-3 full ">
                    <label
                      for="children"
                      className="mb-4 block text-base font-medium text-[#07074D] "
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
                          onChange={(e) => {
                            handleInputChange(e);
                          }}
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
                          checked={formData.children === "no"}
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
                    {errors.children && (
                      <p className="text-red-500">{errors.children}</p>
                    )}
                  </div>
                  
                  <div className= "mb-3 full ">
                  {formData.maritalStatus === "married" && (
                    <div className="mb-3 w-full">
                      <label
                        for="spouseStatus"
                        className="mb-4 block text-base font-medium text-[#07074D]"
                      >
                        *Will your spouse be travelling with you to Canada ?
                       
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
                  </div>

                </div>

                <div className="w-full flex items-center justify-end mb-10">
                  <button
                    className="assessment-next-step-btn"
                    type="button"
                    onClick={() => {
                      setSubmitAttempted(true);

                      // setSelectForm('Education');
                      if (validate(true)) {
                        setSelectForm("education-experience");

                        // redirect('#others');
                      }
                      const element = personalInfoRef.current;
                      const elementPosition =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;

                      window.scrollTo({
                        top: elementPosition - 100, // Adjust the offset here (100px)
                        behavior: "smooth",
                      });
                    }}
                  >
                    Next step
                  </button>
                </div>
              </form>
            )}

            <EducationDetails
              selectForm={selectForm}
              formData={formData}
              setFormData={setFormData}
              setSelectForm={setSelectForm}
              nextform={"work-experience"}
              scrollRef={personalInfoRef}
            />
            <WorkExperienceForm
              selectForm={selectForm}
              formData={formData}
              setFormData={setFormData}
              setSelectForm={setSelectForm}
              nextform={"english"}
              scrollRef={personalInfoRef}
            />
            <div
              id="test"
              onClick={() => {
                if (formData.englishTest || formData.frenchTest)
                  setSelectForm("english");
              }}
              className="PI-heading-container"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00056 0.589844C6.2455 0.589876 6.4819 0.6798 6.66493 0.842559C6.84797 1.00532 6.96491 1.22959 6.99356 1.47284L7.00056 1.58984V2.58984H11.0006C11.2554 2.59038 11.5003 2.68815 11.6855 2.8632C11.8706 3.03825 11.982 3.27737 11.9968 3.53174C12.0116 3.7861 11.9287 4.03653 11.7651 4.23187C11.6016 4.42722 11.3696 4.55275 11.1166 4.58284L11.0006 4.58984H9.94556C9.72256 6.62184 8.82956 8.57984 7.40056 10.2778C7.92356 10.7318 8.50256 11.1558 9.13556 11.5438L9.52156 11.7718L11.5886 7.17984C11.6631 7.01421 11.7812 6.87199 11.9305 6.76845C12.0797 6.66491 12.2542 6.60396 12.4355 6.59214C12.6167 6.58032 12.7977 6.61807 12.9591 6.70135C13.1205 6.78463 13.2562 6.91029 13.3516 7.06484L13.4116 7.17984L17.9116 17.1798C18.0164 17.4125 18.0283 17.6765 17.9449 17.9177C17.8614 18.1589 17.6889 18.359 17.4626 18.4772C17.2364 18.5953 16.9735 18.6224 16.7279 18.553C16.4823 18.4836 16.2725 18.3229 16.1416 18.1038L16.0886 17.9998L15.0036 15.5898H9.99656L8.91256 17.9998C8.80836 18.2332 8.61879 18.4177 8.38278 18.5157C8.14677 18.6136 7.88221 18.6175 7.64343 18.5265C7.40464 18.4355 7.20975 18.2566 7.09875 18.0264C6.98776 17.7963 6.96908 17.5323 7.04656 17.2888L7.08856 17.1788L8.69856 13.6028C7.73265 13.0711 6.82734 12.4361 5.99856 11.7088C4.71156 12.8448 3.15056 13.8068 1.37156 14.5188C1.12531 14.6174 0.850001 14.614 0.606204 14.5096C0.362406 14.4051 0.17009 14.2081 0.0715623 13.9618C-0.0269656 13.7156 -0.0236343 13.4403 0.0808234 13.1965C0.185281 12.9527 0.382309 12.7604 0.628562 12.6618C2.18556 12.0388 3.51556 11.2208 4.60056 10.2798C3.75619 9.28702 3.08728 8.1575 2.62256 6.93984C2.52947 6.69147 2.53886 6.41629 2.64866 6.17483C2.75846 5.93338 2.95969 5.74543 3.20806 5.65234C3.45644 5.55925 3.73162 5.56864 3.97307 5.67844C4.21453 5.78825 4.40247 5.98947 4.49556 6.23784C4.85514 7.17811 5.36327 8.05458 6.00056 8.83384C6.98956 7.60684 7.62556 6.25784 7.87756 4.90284L7.92856 4.58984H1.00056C0.745683 4.58956 0.50053 4.49196 0.315194 4.317C0.129858 4.14203 0.0183272 3.90289 0.00339008 3.64845C-0.011547 3.39401 0.0712368 3.14346 0.234827 2.94801C0.398417 2.75256 0.630466 2.62695 0.883562 2.59684L1.00056 2.58984H5.00056V1.58984C5.00056 1.32463 5.10592 1.07027 5.29346 0.882737C5.48099 0.695201 5.73535 0.589844 6.00056 0.589844ZM14.1036 13.5898L12.5006 10.0268L10.8986 13.5898H14.1036Z" fill="#222222"/>
</svg>
              English / French Language Skills
              
            </div>
            {selectForm === "english" && (
              <form action="post" className="w-full PI-form">
                <div className="mt-4">
                  <div className="mb-3">
                    <div className="font-semibold text-lg">
                      {" "}
                      In the last two years have you taken English or French
                      language test?
                    </div>
                    <div className="flex items-start justify-start gap-20 english-french-test-taken">
                      {" "}
                      <div className="flex flex-col">
                        {" "}
                        <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] mt-4">
                          English<span className="text-red-400">*</span>
                        </label>
                        <div className="flex items-center justify-start gap-6">
                          <div className="flex items-center mr-4 mb-4">
                            <input
                              id="radio11"
                              type="radio"
                              name="englishTest"
                              className="hidden"
                              value="yes"
                              onChange={handleInputChange}
                              checked={formData.englishTest === "yes"}
                            />
                            <label
                              for="radio11"
                              className="flex items-center cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center mr-4 mb-4">
                            <input
                              id="radio12"
                              type="radio"
                              name="englishTest"
                              className="hidden"
                              value="no"
                              onChange={handleInputChange}
                              checked={formData.englishTest === "no"}
                            />
                            <label
                              for="radio12"
                              className="flex items-center cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                              NO
                            </label>
                          </div>
                        </div>

                        {languageErrors.englishTest && (
                          <p className="text-red-500">
                            {languageErrors.englishTest}
                          </p>
                        )}

                      </div>
                      <div className="flex flex-col">
                        <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] mt-4">
                          French<span className="text-red-400">*</span>
                        </label>
                        <div className="flex items-center justify-start gap-6">
                          <div className="flex items-center mr-4 mb-4">
                            <input
                              id="radio13"
                              type="radio"
                              name="frenchTest"
                              value="yes"
                              className="hidden"
                              onChange={handleInputChange}
                              checked={formData.frenchTest === "yes"}
                            />
                            <label
                              for="radio13"
                              className="flex items-center cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                              Yes
                            </label>
                          </div>
                          <div className="flex items-center mr-4 mb-4">
                            <input
                              id="radio14"
                              type="radio"
                              name="frenchTest"
                              className="hidden"
                              value="no"
                              onChange={handleInputChange}
                              checked={formData.frenchTest === "no"}
                            />
                            <label
                              for="radio14"
                              className="flex items-center cursor-pointer"
                            >
                              <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                              NO
                            </label>
                          </div>
                        </div>
                        {languageErrors.frenchTest && (
                          <p className="text-red-500">
                            {languageErrors.frenchTest}
                          </p>
                        )}
                      </div>
                    </div>

                   
                    <div className="test-main-contanier">

                        {formData.englishTest === "yes" && (
                           <div className="english-test-container">
                          <>
                            <div className="english-test-heading form-input">
                            <label
                                    for="countries"
                                    className=" mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                  >
                                    *English Test
                                  </label>
                              <select
                                id="countries"
                                // defaultValue={'IELTS'}
                                // value={selectedExam}
                                name="englishTestType"
                                onChange={(e) => {
                                  setSelectedExam(e.target.value);
                                  handleInputChange(e);
                                }}
                                value={formData.englishTestType}
                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"

                                style={{ 
                                  width: '182px'
                                }}
                              >
<option value="" disabled selected>
                                  Select
                                </option>
                                <option className="text-black" value="IELTS">
                                  IELTS (English)
                                </option>
                                <option className="text-black" value="CELPIP">
                                  CELPIP (English)
                                </option>
                                <option className="text-black" value="PTE">
                                  PTE (English)
                                </option>
                              </select>
                            </div>

                            <div className="english-test-options">
                            {selectedExam === "IELTS" && (
                              <>
                                <div className="flex flex-col items-start justify-center 11 form-input">
                                  <label
                                    for="reading"
                                    className="text-[#07074D] styled"
                                  >
                                    *Reading
                                  </label>

                                  <select
                                    id="reading"
                                    className=" "
                                    name="reading"
                                    value={formData.englishTestResult.reading}
                                    onChange={(e) => {
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          reading: e.target.value,
                                        },
                                      });
                                    }}

                                    disabled = {formData.englishTestType === ""}
                                  >
                                    <option disabled selected value="">
                                      Reading
                                    </option>
                                    <option className=" text-black" value="10">
                                      8-9
                                    </option>
                                    <option className="text-black" value="9">
                                      7-7.5
                                    </option>
                                    <option className="text-black" value="8">
                                      6.5
                                    </option>
                                    <option className="text-black" value="7">
                                      6
                                    </option>
                                    <option className="text-black" value="6">
                                      5-5.5
                                    </option>
                                    <option className="text-black" value="5">
                                      4-4.5
                                    </option>
                                    <option className="text-black" value="4">
                                      3.5
                                    </option>
                                  </select>

                                  {languageErrors.englishReading && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishReading}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "IELTS" && (
                              <>
                                <div className="flex flex-col items-start justify-center 12 form-input">
                                  <label
                                    for="writing"
                                    className="text-[#07074D] styled"
                                  >
                                    *Writing
                                  </label>

                                  <select
                                    id="writing"
                                    className=" "
                                    placeholder="Writing"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          writing: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.writing}
                                    name="writing"
                                    disabled = {formData.englishTestType === ""}
                                  >
                                    <option disabled selected value="">
                                      Writing
                                    </option>
                                    <option className="text-black" value="10">
                                      7.5-9
                                    </option>
                                    <option className="text-black" value="9">
                                      7
                                    </option>
                                    <option className="text-black" value="8">
                                      6.5
                                    </option>
                                    <option className="text-black" value="7">
                                      6
                                    </option>
                                    <option className="text-black" value="6">
                                      5.5
                                    </option>
                                    <option className="text-black" value="5">
                                      5
                                    </option>
                                    <option className="text-black" value="4">
                                      4-4.5
                                    </option>
                                  </select>

                                  {languageErrors.englishWriting && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishWriting}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "IELTS" && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center 13 form-input">
                                  <label
                                    for="listening"
                                    className="text-[#07074D] styled"
                                  >
                                    *Listening
                                  </label>

                                  <select
                                    id="listening"
                                    className=" "
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          listening: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.listening}
                                    name="listening"

                                    disabled = {formData.englishTestType === ""}
                                  >
                                    <option disabled selected value="">
                                      Listening
                                    </option>
                                    <option className="text-black" value="10">
                                      8.5-9
                                    </option>
                                    <option className="text-black" value="9">
                                      8
                                    </option>
                                    <option className="text-black" value="8">
                                      7.5
                                    </option>
                                    <option className="text-black" value="7">
                                      6-7
                                    </option>
                                    <option className="text-black" value="6">
                                      5.5
                                    </option>
                                    <option className="text-black" value="5">
                                      5
                                    </option>
                                    <option className="text-black" value="4">
                                      4.5
                                    </option>
                                  </select>

                                  {languageErrors.englishListening && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishListening}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "IELTS" && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center 14 form-input">
                                  <label
                                    for="speaking"
                                    className="text-[#07074D] styled"
                                  >
                                    *Speaking
                                  </label>

                                  <select
                                    id="speaking"
                                    className=" "
                                    placeholder="Speaking"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          speaking: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.speaking}
                                    name="speaking"

                                    disabled = {formData.englishTestType === ""}
                                  >
                                    <option disabled selected value="">
                                      Speaking
                                    </option>
                                    <option className="text-black" value="10">
                                      7.5-9
                                    </option>
                                    <option className="text-black" value="9">
                                      7
                                    </option>
                                    <option className="text-black" value="8">
                                      6.5
                                    </option>
                                    <option className="text-black" value="7">
                                      6
                                    </option>
                                    <option className="text-black" value="6">
                                      5.5
                                    </option>
                                    <option className="text-black" value="5">
                                      5
                                    </option>
                                    <option className="text-black" value="4">
                                      4-4.5
                                    </option>
                                  </select>

                                  {languageErrors.englishSpeaking && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishSpeaking}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "CELPIP" && (
                              <>
                                <div className="flex flex-col items-start justify-center 21 form-input">
                                  <label
                                    for="reading"
                                    className="  text-[#07074D] styled"
                                  >
                                    *Reading
                                  </label>

                                  <select
                                    id="reading"
                                    className=" "
                                    name="reading"
                                    onChange={(e) => {
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          reading: e.target.value,
                                        },
                                      });
                                    }}
                                    value={formData.englishTestResult.reading}
                                  >
                                    <option disabled selected value="">
                                      Reading
                                    </option>
                                    <option className="text-black" value="10">
                                      10
                                    </option>
                                    <option className="text-black" value="9">
                                      9
                                    </option>
                                    <option className="text-black" value="8">
                                      8
                                    </option>
                                    <option className="text-black" value="7">
                                      7
                                    </option>
                                    <option className="text-black" value="6">
                                      6
                                    </option>
                                    <option className="text-black" value="5">
                                      5
                                    </option>
                                    <option className="text-black" value="4">
                                      4
                                    </option>
                                    <option className="text-black" value="3">
                                      3
                                    </option>
                                  </select>

                                  {languageErrors.englishReading && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishReading}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "CELPIP" && (
                              <>
                                <div className="flex flex-col items-start justify-center 22 form-input">
                                  <label
                                    for="writing"
                                    className="text-[#07074D] styled"
                                  >
                                    *Writing
                                  </label>

                                  <select
                                    id="writing"
                                    className=" "
                                    placeholder="Writing"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          writing: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.writing}
                                    name="writing"
                                  >
                                    <option disabled selected value="">
                                      Writing
                                    </option>
                                    <option className="text-black" value="10">
                                      10
                                    </option>
                                    <option className="text-black" value="9">
                                      9
                                    </option>
                                    <option className="text-black" value="8">
                                      8
                                    </option>
                                    <option className="text-black" value="7">
                                      7
                                    </option>
                                    <option className="text-black" value="6">
                                      6
                                    </option>
                                    <option className="text-black" value="5">
                                      5
                                    </option>
                                    <option className="text-black" value="4">
                                      4
                                    </option>
                                    <option className="text-black" value="3">
                                      3
                                    </option>
                                  </select>

                                  {languageErrors.englishWriting && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishWriting}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "CELPIP"  && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center 23 form-input">
                                  <label
                                    for="listening"
                                    className=" text-[#07074D] styled"
                                  >
                                    *Listening
                                  </label>

                                  <select
                                    id="listening"
                                    className=" "
                                    placeholder="Listening"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          listening: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.listening}
                                    name="listening"
                                  >
                                    <option disabled selected value="">
                                      Listening
                                    </option>
                                    <option className="text-black" value="10">
                                      10
                                    </option>
                                    <option className="text-black" value="9">
                                      9
                                    </option>
                                    <option className="text-black" value="8">
                                      8
                                    </option>
                                    <option className="text-black" value="7">
                                      7
                                    </option>
                                    <option className="text-black" value="6">
                                      6
                                    </option>
                                    <option className="text-black" value="5">
                                      5
                                    </option>
                                    <option className="text-black" value="4">
                                      4
                                    </option>
                                    <option className="text-black" value="3">
                                      3
                                    </option>
                                  </select>

                                  {languageErrors.englishListening && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishListening}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "CELPIP"   && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center 24 form-input">
                                  <label
                                    for="speaking"
                                    className="text-[#07074D] styled"
                                  >
                                    *Speaking
                                  </label>

                                  <select
                                    id="speaking"
                                    className=" "
                                    placeholder="Speaking"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          speaking: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.speaking}
                                    name="speaking"
                                  >
                                    <option disabled selected value="">
                                      Speaking
                                    </option>
                                    <option className="text-black" value="10">
                                      10
                                    </option>
                                    <option className="text-black" value="9">
                                      9
                                    </option>
                                    <option className="text-black" value="8">
                                      8
                                    </option>
                                    <option className="text-black" value="7">
                                      7
                                    </option>
                                    <option className="text-black" value="6">
                                      6
                                    </option>
                                    <option className="text-black" value="5">
                                      5
                                    </option>
                                    <option className="text-black" value="4">
                                      4
                                    </option>
                                    <option className="text-black" value="3">
                                      3
                                    </option>
                                  </select>

                                  {languageErrors.englishSpeaking && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishSpeaking}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}

                            {selectedExam === "PTE"  && (
                              <>
                                <div className="flex flex-col items-start justify-center form-input">
                                  <label
                                    for="reading"
                                    className="  text-[#07074D] styled"
                                  >
                                    *Reading
                                  </label>

                                  <select
                                    id="reading"
                                    className=" "
                                    name="reading"
                                    onChange={(e) => {
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          reading: e.target.value,
                                        },
                                      });
                                    }}
                                    value={formData.englishTestResult.reading}
                                  >
                                    <option disabled selected value="">
                                      Reading
                                    </option>
                                    <option className="text-black" value="10">
                                      88-90
                                    </option>
                                    <option className="text-black" value="9">
                                      78-87
                                    </option>
                                    <option className="text-black" value="8">
                                      69-77
                                    </option>
                                    <option className="text-black" value="7">
                                      60-68
                                    </option>
                                    <option className="text-black" value="6">
                                      51-59
                                    </option>
                                    <option className="text-black" value="5">
                                      42-50
                                    </option>
                                    <option className="text-black" value="4">
                                      33-41
                                    </option>
                                    <option className="text-black" value="3">
                                      24-32
                                    </option>
                                  </select>

                                  {languageErrors.englishReading && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishReading}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "PTE"   && (
                              <>
                                <div className="flex flex-col items-start justify-center form-input">
                                  <label
                                    for="writing"
                                    className="text-[#07074D] styled"
                                  >
                                    *Writing
                                  </label>

                                  <select
                                    id="writing"
                                    className=" "
                                    placeholder="Writing"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          writing: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.writing}
                                    name="writing"
                                  >
                                    <option disabled selected value="">
                                      Writing
                                    </option>
                                    <option className="text-black" value="10">
                                      90
                                    </option>
                                    <option className="text-black" value="9">
                                      88-89
                                    </option>
                                    <option className="text-black" value="8">
                                      79-87
                                    </option>
                                    <option className="text-black" value="7">
                                      69-78
                                    </option>
                                    <option className="text-black" value="6">
                                      60-68
                                    </option>
                                    <option className="text-black" value="5">
                                      51-59
                                    </option>
                                    <option className="text-black" value="4">
                                      41-50
                                    </option>
                                    <option className="text-black" value="3">
                                      32-40
                                    </option>
                                  </select>

                                  {languageErrors.englishWriting && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishWriting}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "PTE"  && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center form-input">
                                  <label
                                    for="listening"
                                    className="text-[#07074D] styled"
                                  >
                                    *Listening
                                  </label>

                                  <select
                                    id="listening"
                                    className=" "
                                    placeholder="Listening"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          listening: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.listening}
                                    name="listening"
                                  >
                                    <option disabled selected value="">
                                      Listening
                                    </option>
                                    <option className="text-black" value="10">
                                      88-90
                                    </option>
                                    <option className="text-black" value="9">
                                      82-88
                                    </option>
                                    <option className="text-black" value="8">
                                      71-81
                                    </option>
                                    <option className="text-black" value="7">
                                      60-70
                                    </option>
                                    <option className="text-black" value="6">
                                      50-59
                                    </option>
                                    <option className="text-black" value="5">
                                      39-49
                                    </option>
                                    <option className="text-black" value="4">
                                      28-38
                                    </option>
                                    <option className="text-black" value="3">
                                      18-27
                                    </option>
                                  </select>

                                  {languageErrors.englishListening && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishListening}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                            {selectedExam === "PTE" && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center form-input">
                                  <label
                                    for="speaking"
                                    className="text-[#07074D] styled"
                                  >
                                    *Speaking
                                  </label>

                                  <select
                                    id="speaking"
                                    className=" "
                                    placeholder="Speaking"
                                    onChange={(e) =>
                                      setFormData({
                                        ...formData,
                                        englishTestResult: {
                                          ...formData.englishTestResult,
                                          speaking: e.target.value,
                                        },
                                      })
                                    }
                                    value={formData.englishTestResult.speaking}
                                    name="speaking"
                                  >
                                    <option disabled selected value="">
                                      Speaking
                                    </option>
                                    <option className="text-black" value="10">
                                      89-90
                                    </option>
                                    <option className="text-black" value="9">
                                      84-88
                                    </option>
                                    <option className="text-black" value="8">
                                      76-83
                                    </option>
                                    <option className="text-black" value="7">
                                      68-75
                                    </option>
                                    <option className="text-black" value="6">
                                      59-67
                                    </option>
                                    <option className="text-black" value="5">
                                      51-58
                                    </option>
                                    <option className="text-black" value="4">
                                      42-50
                                    </option>
                                    <option className="text-black" value="3">
                                      34-41
                                    </option>
                                  </select>

                                  {languageErrors.englishSpeaking && (
                                    <p className="text-red-500 text-[10px]">
                                      {languageErrors.englishSpeaking}
                                    </p>
                                  )}
                                </div>
                              </>
                            )}
                          </div>

                            {languageErrors.englishTestType && (
                              <p className="text-red-500 -mt-10">
                                {languageErrors.englishTestType}
                              </p>
                            )}
                          </>
                          </div>
                        )}


                        {formData.frenchTest === "yes" && (
                          <div className="french-test-container">
                          <>
                            {" "}
                            <div className="french-test-heading form-input">
                            <label
                                    for="exams"
                                    className="flex flex-col mb-2 ml-2 text-base font-medium text-[#07074D] styled"
                                  >
                                    *French Test
                                  </label>
                              <select
                                id="exams"
                                name="frenchTestType"
                                onChange={(e) => {
                                  setSelectedExamFrench(e.target.value);
                                  handleInputChange(e);
                                }}
                                value={formData.frenchTestType}
                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"

                                style={{ 
                                  width: '182px'
                                }}

                                
                              >
                                <option value="" selected>
                                  Select
                                </option>
                                <option className="text-black" value="TCF">
                                  TCF (French)
                                </option>
                                <option className="text-black" value="TEF">
                                  TEF (French)
                                </option>
                              </select>
                            </div>

            
                            <div className="french-test-options">
                              {selectedExamFrench === "TCF" && (
                                <>
                                  <div className="flex flex-col items-start justify-center form-input">
                                    <label
                                      for="reading"
                                      className=" mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                    >
                                      *Reading
                                    </label>

                                    <select
                                      id="reading"
                                      className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                                      name="reading"
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          frenchTestResult: {
                                            ...formData.frenchTestResult,
                                            reading: e.target.value,
                                          },
                                        })
                                      }
                                      value={formData.frenchTestResult.reading}

                                      disabled = {formData.frenchTestType === ""}
                                    >
                                      <option disabled selected value="">
                                        Reading
                                      </option>
                                      <option className="text-black" value="10">
                                        549-699
                                      </option>
                                      <option className="text-black" value="9">
                                        524-548
                                      </option>
                                      <option className="text-black" value="8">
                                        499-523
                                      </option>
                                      <option className="text-black" value="7">
                                        453-498
                                      </option>
                                      <option className="text-black" value="6">
                                        406-452
                                      </option>
                                      <option className="text-black" value="5">
                                        375-405
                                      </option>
                                      <option className="text-black" value="4">
                                        342-374
                                      </option>
                                    </select>

                                    {languageErrors.frenchReading && (
                                      <p className="text-red-500 text-[10px]">
                                        {languageErrors.frenchReading}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                              {selectedExamFrench === "TCF" && (
                                <>
                                  <div className="flex flex-col items-start justify-center form-input">
                                    <label
                                      for="writing"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                    >
                                      *Writing
                                    </label>

                                    <select
                                      id="writing"
                                      className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                                      placeholder="Writing"
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          frenchTestResult: {
                                            ...formData.frenchTestResult,
                                            writing: e.target.value,
                                          },
                                        })
                                      }
                                      value={formData.frenchTestResult.writing}
                                      name="writing"

                                      disabled = {formData.frenchTestType === ""}
                                    >
                                      <option disabled selected value="">
                                        Writing
                                      </option>
                                      <option className="text-black" value="10">
                                        16-20
                                      </option>
                                      <option className="text-black" value="9">
                                        14-15
                                      </option>
                                      <option className="text-black" value="8">
                                        12-13
                                      </option>
                                      <option className="text-black" value="7">
                                        10-11
                                      </option>
                                      <option className="text-black" value="6">
                                        7-9
                                      </option>
                                      <option className="text-black" value="5">
                                        6-6
                                      </option>
                                      <option className="text-black" value="4">
                                        4-5
                                      </option>
                                    </select>

                                    {languageErrors.frenchWriting && (
                                      <p className="text-red-500 text-[10px]">
                                        {languageErrors.frenchWriting}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                              {selectedExamFrench === "TCF" && (
                                <>
                                  {" "}
                                  <div className="flex flex-col items-start justify-center form-input">
                                    <label
                                      for="listening"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                    >
                                      *Listening
                                    </label>

                                    <select
                                      id="listening"
                                      className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                                      placeholder="Listening"
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          frenchTestResult: {
                                            ...formData.frenchTestResult,
                                            listening: e.target.value,
                                          },
                                        })
                                      }
                                      value={
                                        formData.frenchTestResult.listening
                                      }
                                      name="listening"

                                      disabled = {formData.frenchTestType === ""}
                                    >
                                      <option disabled selected value="">
                                        Listening
                                      </option>
                                      <option className="text-black" value="10">
                                        549-699
                                      </option>
                                      <option className="text-black" value="9">
                                        523-548
                                      </option>
                                      <option className="text-black" value="8">
                                        503-522
                                      </option>
                                      <option className="text-black" value="7">
                                        458-502
                                      </option>
                                      <option className="text-black" value="6">
                                        406-452
                                      </option>
                                      <option className="text-black" value="5">
                                        375-405
                                      </option>
                                      <option className="text-black" value="4">
                                        342-374
                                      </option>
                                    </select>

                                    {languageErrors.frenchListening && (
                                      <p className="text-red-500 text-[10px]">
                                        {languageErrors.frenchListening}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                              {selectedExamFrench === "TCF" && (
                                <>
                                  {" "}
                                  <div className="flex flex-col items-start justify-center form-input">
                                    <label
                                      for="speaking"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                    >
                                      *Speaking
                                    </label>

                                    <select
                                      id="speaking"
                                      className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                                      placeholder="Speaking"
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          frenchTestResult: {
                                            ...formData.frenchTestResult,
                                            speaking: e.target.value,
                                          },
                                        })
                                      }
                                      value={formData.frenchTestResult.speaking}
                                      name="speaking"

                                      disabled = {formData.frenchTestType === ""}
                                    >
                                      <option disabled selected value="">
                                        Speaking
                                      </option>
                                      <option className="text-black" value="10">
                                        16-20
                                      </option>
                                      <option className="text-black" value="9">
                                        14-15
                                      </option>
                                      <option className="text-black" value="8">
                                        12-13
                                      </option>
                                      <option className="text-black" value="7">
                                        10-11
                                      </option>
                                      <option className="text-black" value="6">
                                        7-9
                                      </option>
                                      <option className="text-black" value="5">
                                        6-6
                                      </option>
                                      <option className="text-black" value="4">
                                        4-5
                                      </option>
                                    </select>

                                    {languageErrors.frenchSpeaking && (
                                      <p className="text-red-500 text-[10px]">
                                        {languageErrors.frenchSpeaking}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                              {selectedExamFrench === "TEF" && (
                                <>
                                  <div className="flex flex-col items-start justify-center form-input">
                                    <label
                                      for="reading"
                                      className=" mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                    >
                                      *Reading
                                    </label>

                                    <select
                                      id="reading"
                                      className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                                      name="reading"
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          frenchTestResult: {
                                            ...formData.frenchTestResult,
                                            reading: e.target.value,
                                          },
                                        })
                                      }
                                      value={formData.frenchTestResult.reading}
                                    >
                                      <option disabled selected value="">
                                        Reading
                                      </option>
                                      <option className="text-black" value="10">
                                        263-300
                                      </option>
                                      <option className="text-black" value="9">
                                        248-262
                                      </option>
                                      <option className="text-black" value="8">
                                        233-247
                                      </option>
                                      <option className="text-black" value="7">
                                        207-232
                                      </option>
                                      <option className="text-black" value="6">
                                        181-206
                                      </option>
                                      <option className="text-black" value="5">
                                        151-180
                                      </option>
                                      <option className="text-black" value="4">
                                        121-150
                                      </option>
                                    </select>

                                    {languageErrors.frenchReading && (
                                      <p className="text-red-500 text-[10px]">
                                        {languageErrors.frenchReading}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                              {selectedExamFrench === "TEF" && (
                                <>
                                  <div className="flex flex-col items-start justify-center form-input">
                                    <label
                                      for="writing"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                    >
                                      *Writing
                                    </label>

                                    <select
                                      id="writing"
                                      className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                                      placeholder="Writing"
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          frenchTestResult: {
                                            ...formData.frenchTestResult,
                                            writing: e.target.value,
                                          },
                                        })
                                      }
                                      value={formData.frenchTestResult.writing}
                                      name="writing"
                                    >
                                      <option disabled selected value="">
                                        Writing
                                      </option>
                                      <option className="text-black" value="10">
                                        393-450
                                      </option>
                                      <option className="text-black" value="9">
                                        371-392
                                      </option>
                                      <option className="text-black" value="8">
                                        349-370
                                      </option>
                                      <option className="text-black" value="7">
                                        310-348
                                      </option>
                                      <option className="text-black" value="6">
                                        271-309
                                      </option>
                                      <option className="text-black" value="5">
                                        226-270
                                      </option>
                                      <option className="text-black" value="4">
                                        181-225
                                      </option>
                                    </select>

                                    {languageErrors.frenchWriting && (
                                      <p className="text-red-500 text-[10px]">
                                        {languageErrors.frenchWriting}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                              {selectedExamFrench === "TEF" && (
                                <>
                                  {" "}
                                  <div className="flex flex-col items-start justify-center form-input">
                                    <label
                                      for="listening"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                    >
                                      *Listening
                                    </label>

                                    <select
                                      id="listening"
                                      className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                                      placeholder="Listening"
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          frenchTestResult: {
                                            ...formData.frenchTestResult,
                                            listening: e.target.value,
                                          },
                                        })
                                      }
                                      value={
                                        formData.frenchTestResult.listening
                                      }
                                      name="listening"
                                    >
                                      <option disabled selected value="">
                                        Listening
                                      </option>
                                      <option className="text-black" value="10">
                                        316-360
                                      </option>
                                      <option className="text-black" value="9">
                                        298-315
                                      </option>
                                      <option className="text-black" value="8">
                                        280-297
                                      </option>
                                      <option className="text-black" value="7">
                                        249-279
                                      </option>
                                      <option className="text-black" value="6">
                                        217-248
                                      </option>
                                      <option className="text-black" value="5">
                                        181-216
                                      </option>
                                      <option className="text-black" value="4">
                                        145-180
                                      </option>
                                    </select>

                                    {languageErrors.frenchListening && (
                                      <p className="text-red-500 text-[10px]">
                                        {languageErrors.frenchListening}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                              {selectedExamFrench === "TEF" && (
                                <>
                                  {" "}
                                  <div className="flex flex-col items-start justify-center form-input">
                                    <label
                                      for="speaking"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                                    >
                                      *Speaking
                                    </label>

                                    <select
                                      id="speaking"
                                      className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                                      placeholder="Speaking"
                                      onChange={(e) =>
                                        setFormData({
                                          ...formData,
                                          frenchTestResult: {
                                            ...formData.frenchTestResult,
                                            speaking: e.target.value,
                                          },
                                        })
                                      }
                                      value={formData.frenchTestResult.speaking}
                                      name="speaking"
                                    >
                                      <option disabled selected value="">
                                        Speaking
                                      </option>
                                      <option className="text-black" value="10">
                                        393-450
                                      </option>
                                      <option className="text-black" value="9">
                                        371-392
                                      </option>
                                      <option className="text-black" value="8">
                                        349-370
                                      </option>
                                      <option className="text-black" value="7">
                                        310-348
                                      </option>
                                      <option className="text-black" value="6">
                                        271-309
                                      </option>
                                      <option className="text-black" value="5">
                                        226-270
                                      </option>
                                      <option className="text-black" value="4">
                                        181-225
                                      </option>
                                    </select>

                                    {languageErrors.frenchSpeaking && (
                                      <p className="text-red-500 text-[10px]">
                                        {languageErrors.frenchSpeaking}
                                      </p>
                                    )}
                                  </div>
                                </>
                              )}
                            </div>
                       

                            {languageErrors.frenchTestType && (
                              <p className="text-red-500 -mt-10">
                                {languageErrors.frenchTestType}
                              </p>
                            )}
                          </>
                          
</div>
                        )}


                    </div>

                  </div>
                </div>
                {formData.englishTest === "no" &&
                  formData.frenchTest === "no" && (
                    <div className="">
                      <div className="mb-3">
                        <div className="font-semibold text-lg">
                          {" "}
                          Do you wish to take the English or French Language
                          test in the near future?
                        </div>
                        <div className="flex items-start justify-start gap-20 english-french-test-taken">
                          {" "}
                          <div className="flex flex-col">
                            {" "}
                            <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] mt-4">
                              *English
                            </label>
                            <div className="flex items-center justify-start gap-6">
                              <div className="flex items-center mr-4 mb-4">
                                <input
                                  id="radio31"
                                  type="radio"
                                  name="futureTestEnglish"
                                  className="hidden"
                                  value="yes"
                                  onChange={handleInputChange}
                                  checked={formData.futureTestEnglish === "yes"}
                                />
                                <label
                                  for="radio31"
                                  className="flex items-center cursor-pointer"
                                >
                                  <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                                  Yes
                                </label>
                              </div>
                              <div className="flex items-center mr-4 mb-4">
                                <input
                                  id="radio32"
                                  type="radio"
                                  name="futureTestEnglish"
                                  className="hidden"
                                  value="no"
                                  onChange={handleInputChange}
                                  checked={formData.futureTestEnglish === "no"}
                                />
                                <label
                                  for="radio32"
                                  className="flex items-center cursor-pointer"
                                >
                                  <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                                  NO
                                </label>
                              </div>
                            </div>
                            {languageErrors.futureTestEnglish && (
                              <p className="text-red-500">
                                {languageErrors.futureTestEnglish}
                              </p>
                            )}
                          </div>
                          <div className="flex flex-col">
                            <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] mt-4">
                              *French
                            </label>
                            <div className="flex items-center justify-start gap-6">
                              <div className="flex items-center mr-4 mb-4">
                                <input
                                  id="radio33"
                                  type="radio"
                                  name="futureTestFrench"
                                  className="hidden"
                                  value="yes"
                                  onChange={handleInputChange}
                                  checked={formData.futureTestFrench === "yes"}
                                />
                                <label
                                  for="radio33"
                                  className="flex items-center cursor-pointer"
                                >
                                  <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                                  Yes
                                </label>
                              </div>
                              <div className="flex items-center mr-4 mb-4">
                                <input
                                  id="radio34"
                                  type="radio"
                                  name="futureTestFrench"
                                  className="hidden"
                                  value="no"
                                  onChange={handleInputChange}
                                  checked={formData.futureTestFrench === "no"}
                                />
                                <label
                                  for="radio34"
                                  className="flex items-center cursor-pointer"
                                >
                                  <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                                  NO
                                </label>
                              </div>
                            </div>
                            {languageErrors.futureTestFrench && (
                              <p className="text-red-500">
                                {languageErrors.futureTestFrench}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                <div className="w-full flex items-center justify-end mb-10 mt-10">
                  <button
                    className="assessment-next-step-btn"
                    type="button"
                    onClick={() => {
                      setSubmitAttemptedTest(true);
                      if (validateLanguageTests(true)) {
                        setSelectForm("other");
                      }
                      const element = personalInfoRef.current;
                      const elementPosition =
                        element.getBoundingClientRect().top +
                        window.pageYOffset;

                      window.scrollTo({
                        top: elementPosition + 120, // Adjust the offset here (100px)
                        behavior: "smooth",
                      });
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            <div
              id="other"
              onClick={() => {
                if (
                  formData.certificateofNomination ||
                  formData.canadianjobOffer ||
                  formData.relativesinCanada ||
                  formData.otherInformation
                )
                  setSelectForm("other");
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
                  <div className="mb-3">
                    <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                      Do you have a certificate of nomination from a Canadian
                      province or territory?
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio15"
                          type="radio"
                          name="certificateofNomination"
                          value="yes"
                          className="hidden"
                          onChange={handleInputChange}
                          checked={formData.certificateofNomination === "yes"}
                        />
                        <label
                          for="radio15"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>

                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio16"
                          type="radio"
                          name="certificateofNomination"
                          value="no"
                          className="hidden"
                          onChange={handleInputChange}
                          checked={formData.certificateofNomination === "no"}
                        />
                        <label
                          for="radio16"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {othersErrors.certificateofNomination && (
                      <p className="text-red-500 -mt-3">
                        {othersErrors.certificateofNomination}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                      Do you have a valid job offer from a Canadian employer?
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio17"
                          type="radio"
                          name="canadianjobOffer"
                          value="yes"
                          className="hidden"
                          onChange={handleInputChange}
                          checked={formData.canadianjobOffer === "yes"}
                        />
                        <label
                          for="radio17"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio18"
                          type="radio"
                          name="canadianjobOffer"
                          value="no"
                          className="hidden"
                          onChange={handleInputChange}
                          checked={formData.canadianjobOffer === "no"}
                        />
                        <label
                          for="radio18"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {othersErrors.canadianjobOffer && (
                      <p className="text-red-500 -mt-3">
                        {othersErrors.canadianjobOffer}
                      </p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                      Do you or your Spouse/Common-Law Partner have any family
                      members and or extended relatives living in Canada?
                    </label>
                    <div className="flex items-center justify-start gap-6">
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio19"
                          type="radio"
                          name="relativesinCanada"
                          value="yes"
                          className="hidden"
                          onChange={handleInputChange}
                          checked={formData.relativesinCanada === "yes"}
                        />
                        <label
                          for="radio19"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          Yes
                        </label>
                      </div>
                      <div className="flex items-center mr-4 mb-4">
                        <input
                          id="radio20"
                          type="radio"
                          name="relativesinCanada"
                          value="no"
                          className="hidden"
                          onChange={handleInputChange}
                          checked={formData.relativesinCanada === "no"}
                        />
                        <label
                          for="radio20"
                          className="flex items-center cursor-pointer"
                        >
                          <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {othersErrors.relativesinCanada && (
                      <p className="text-red-500 -mt-3">
                        {othersErrors.relativesinCanada}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-center comment-section-adjust">
                    <label
                      for="comments"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Any information you would like to share, please mention
                    </label>
                    <input
                      type="text"
                      id="comments"
                      name="otherInformation"
                      onChange={handleInputChange}
                      maxLength={500}
                      value={formData.otherInformation}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full flex items-center justify-end mb-10 mt-10">
                  <button
                    className="assessment-next-step-btn"
                    type="button"
                    onClick={() => {
                      setSubmitAttemptedOther(true);
                      if (validateOthers(true)) {
                        handleFormSubmit();
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

export default PermanentImigration;

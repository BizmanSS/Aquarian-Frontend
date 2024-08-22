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
                  <div className="w-full mb-3">
                    <label
                      for="phone"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Phone Number<span className="text-red-400">*</span>
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
                  <div className="mb-3 w-full">
                    <label
                      for="nationality"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Nationality<span className="text-red-400">*</span>
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
                  {formData.maritalStatus === "married" && (
                    <div className="mb-3 w-full">
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

                  <div className="mb-3 w-full">
                    <label
                      for="live"
                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                    >
                      Where do you currently live ?
                      <span className="text-red-400">*</span>
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

                  <div className="mb-3 full">
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
                </div>

                <div className="w-full flex items-center justify-center mb-10">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
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
                    Next
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
              className="text-base md:text-xl font-semibold tracking-[5px] md:tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
            >
              English / French Language Skills
              <span className="text-black">
                {selectForm === "english" ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === "english" && (
              <form action="post" className="w-full">
                <div className="mt-4">
                  <div className="mb-3">
                    <div className="font-semibold text-lg">
                      {" "}
                      In the last two years have you taken English or French
                      language test?
                    </div>
                    <div className="flex items-start justify-start gap-20">
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

                    {(formData.englishTest === "yes" ||
                      formData.frenchTest === "yes") && (
                      <div className="font-semibold text-lg mt-6">
                        {" "}
                        Test Results *
                      </div>
                    )}
                    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
                      <div className="flex w-full  md:w-[40%] flex-col md:items-start items-center justify-center mt-9 gap-12">
                        {formData.englishTest === "yes" && (
                          <>
                            <div className="flex items-center justify-center gap-5 w-[80%]">
                              <span className="text-[16px] font-semibold">
                                English Test
                              </span>
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
                              >
                                <option value="" selected>
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
                            {languageErrors.englishTestType && (
                              <p className="text-red-500 -mt-10">
                                {languageErrors.englishTestType}
                              </p>
                            )}
                          </>
                        )}
                        {formData.frenchTest === "yes" && (
                          <>
                            {" "}
                            <div className="flex items-center justify-center gap-5 w-[80%]">
                              <span className="text-[16px] font-semibold">
                                French Test
                              </span>
                              <select
                                id="exams"
                                name="frenchTestType"
                                onChange={(e) => {
                                  setSelectedExamFrench(e.target.value);
                                  handleInputChange(e);
                                }}
                                value={formData.frenchTestType}
                                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
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
                            {languageErrors.frenchTestType && (
                              <p className="text-red-500 -mt-10">
                                {languageErrors.frenchTestType}
                              </p>
                            )}
                          </>
                        )}
                      </div>
                      <div className="flex w-full md:w-[60%] flex-col items-center justify-center gap-5">
                        {formData.englishTest === "yes" && (
                          <div className="flex items-center justify-center gap-5">
                            {selectedExam === "IELTS" && (
                              <>
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="reading"
                                    className=" mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Reading
                                  </label>

                                  <select
                                    id="reading"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="writing"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Writing
                                  </label>

                                  <select
                                    id="writing"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="listening"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Listening
                                  </label>

                                  <select
                                    id="listening"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="speaking"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Speaking
                                  </label>

                                  <select
                                    id="speaking"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="reading"
                                    className=" mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Reading
                                  </label>

                                  <select
                                    id="reading"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="writing"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Writing
                                  </label>

                                  <select
                                    id="writing"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                            {selectedExam === "CELPIP" && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="listening"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Listening
                                  </label>

                                  <select
                                    id="listening"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                            {selectedExam === "CELPIP" && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="speaking"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Speaking
                                  </label>

                                  <select
                                    id="speaking"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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

                            {selectedExam === "PTE" && (
                              <>
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="reading"
                                    className=" mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Reading
                                  </label>

                                  <select
                                    id="reading"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                            {selectedExam === "PTE" && (
                              <>
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="writing"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Writing
                                  </label>

                                  <select
                                    id="writing"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                            {selectedExam === "PTE" && (
                              <>
                                {" "}
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="listening"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Listening
                                  </label>

                                  <select
                                    id="listening"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                                <div className="flex flex-col items-start justify-center">
                                  <label
                                    for="speaking"
                                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                  >
                                    Speaking
                                  </label>

                                  <select
                                    id="speaking"
                                    className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
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
                        )}
                        {formData.frenchTest === "yes" && (
                          <div className="flex items-center justify-center gap-5">
                            <div className="flex items-center justify-center gap-5">
                              {selectedExamFrench === "TCF" && (
                                <>
                                  <div className="flex flex-col items-start justify-center">
                                    <label
                                      for="reading"
                                      className=" mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                    >
                                      Reading
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
                                  <div className="flex flex-col items-start justify-center">
                                    <label
                                      for="writing"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                    >
                                      Writing
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
                                  <div className="flex flex-col items-start justify-center">
                                    <label
                                      for="listening"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                    >
                                      Listening
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
                                  <div className="flex flex-col items-start justify-center">
                                    <label
                                      for="speaking"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                    >
                                      Speaking
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
                                  <div className="flex flex-col items-start justify-center">
                                    <label
                                      for="reading"
                                      className=" mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                    >
                                      Reading
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
                                  <div className="flex flex-col items-start justify-center">
                                    <label
                                      for="writing"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                    >
                                      Writing
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
                                  <div className="flex flex-col items-start justify-center">
                                    <label
                                      for="listening"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                    >
                                      Listening
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
                                  <div className="flex flex-col items-start justify-center">
                                    <label
                                      for="speaking"
                                      className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                                    >
                                      Speaking
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
                          </div>
                        )}
                      </div>
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
                        <div className="flex items-start justify-start gap-20">
                          {" "}
                          <div className="flex flex-col">
                            {" "}
                            <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] mt-4">
                              English<span className="text-red-400">*</span>
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
                              French<span className="text-red-400">*</span>
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
                <div className="w-full flex items-center justify-center mb-10 mt-10">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
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
              className="text-base md:text-xl font-semibold tracking-[5px] md:tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
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
                  <div className="flex flex-col items-start justify-center">
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

                <div className="w-full flex items-center justify-center mb-10 mt-10">
                  <button
                    className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
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

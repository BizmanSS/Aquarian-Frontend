import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PersonalInformation from "./components/PersonalInformation";
import EducationDetails from "./components/EducationDetails";
import WorkExperienceForm from "./components/WorkExperienceForm";
import EnglishSkillsForm from "./components/EnglishSkillsForm";
import PriorHistoryForm from "./components/PriorHistoryForm";
import AdditionalSectionForm from "./components/AdditionalSectionForm";

const StudyPermit = ({ selectedForm, studyPermitRef, element, formType }) => {
  const [selectForm, setSelectForm] = useState("PersonalInformation");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitAttemptedEducation, setSubmitAttemptedEducation] =
    useState(false);

  const [submitAttemptedTest, setSubmitAttemptedTest] = useState(false);
  const [submitAttemptedOther, setSubmitAttemptedOther] = useState(false);
  const [submitAttemptedPriorHistory, setSubmitAttemptedPriorHistory] =
    useState(false);
  const [errors, setErrors] = useState({});
  const [eduErrors, setEduErrors] = useState({});

  const [languageErrors, setLanguageErrors] = useState({});
  const [priorHistoryErrors, setPriorHistoryErrors] = useState({});
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
    educationqualification: "",
    educationqualification1: "",
    passingyear: "",
    board: "",
    stream: "",
    country: "",
    workexperience1: "",
    englishTest: "",
    englishTestType: "",
    englishMedium: "",
    englishTestResult: {
      reading: "",
      writing: "",
      listening: "",
      speaking: "",
    },
    futureTestEnglish: "",
    gapsAfterStudy: "",
    counselledBefore: "",
    visaRefused: "",
    collegeAbroad: "",
    fieldOfStudy: "",
    intrestedCollege: "",
    otherInformation: "",
  });

  const validatePriorHistory = (showErrors = false) => {
    const newErrors = {};

    if (!formData.counselledBefore) {
      newErrors.counselledBefore =
        "Please indicate if you have received counseling before.";
    }

    if (!formData.gapsAfterStudy) {
      newErrors.gapsAfterStudy =
        "Please provide information about any gaps in your study history.";
    }

    if (!formData.collegeAbroad) {
      newErrors.collegeAbroad =
        "Please provide information about your study experience abroad.";
    }
    if (!formData.visaRefused) {
      newErrors.visaRefused =
        "Please spevify if your visa has been refused before.";
    }

    if (!formData.fieldOfStudy) {
      newErrors.fieldOfStudy = "Please specify your field of study.";
    }

    if (!formData.intrestedCollege) {
      newErrors.intrestedCollege =
        "Please indicate the college you are interested in.";
    }
    if (showErrors) {
      setPriorHistoryErrors(newErrors);
    }
    return Object.keys(newErrors).length === 0;
  };

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

    if (!formData.englishTest) {
      newErrors.englishTest = "English test is required";
    }

    if (formData.englishTest === "no") {
      if (!formData.futureTestEnglish) {
        newErrors.futureTestEnglish = "Required fields cannot be empty";
      }
      if (!formData.englishMedium) {
        newErrors.englishMedium = "Required fields cannot be empty";
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
    // if (!formData.children)
    //   tempErrors.children = 'Please specify if you have any children under 22';
    if (showErrors) {
      setErrors(tempErrors);
    }
    return Object.keys(tempErrors).length === 0;
  };

  const validateEducation = (showErrors = false) => {
    const newErrors = {};
    if (!formData.educationqualification)
      newErrors.educationqualification =
        "Educational qualification is required";
    if (formData.educationqualification1 === "yes") {
      if (!formData.passingyear)
        newErrors.passingyear = "Year of passing is required";
      if (!formData.board) newErrors.board = "Board/University is required";
      if (!formData.stream) newErrors.stream = "Field/Stream is required";
      if (!formData.country) newErrors.country = "Country is required";
    }
    if (!formData.educationqualification1)
      newErrors.educationqualification1 = "This field is required";
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
    if (submitAttemptedTest) {
      validateLanguageTests(true);
    }
  }, [formData, submitAttemptedTest]);

  useEffect(() => {
    if (submitAttemptedOther) {
      validateOthers(true);
    }
  }, [formData, submitAttemptedOther]);

  useEffect(() => {
    if (submitAttemptedPriorHistory) {
      validatePriorHistory(true);
    }
  }, [formData, submitAttemptedPriorHistory]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      nationality: selectedOption.label,
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData((prevState) => ({
      ...prevState,
      phone: phone,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/study_permit_form`,
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
      {selectedForm.studyPermit && (
        <div className="w-full flex flex-col items-start justify-center lg:px-20 md:px-10 px-2 gap-4 mb-10">
          <div
            ref={studyPermitRef}
            className="block text-2xl font-medium text-[#07074D] py-2"
          >
            {formType} Eligibility Evaluation Form
          </div>

          <PersonalInformation
            formData={formData}
            selectForm={selectForm}
            handleInputChange={handleInputChange}
            errors={errors}
            setSubmitAttempted={setSubmitAttempted}
            validate={validate}
            setSelectForm={setSelectForm}
            handleSelectChange={handleSelectChange}
            handlePhoneChange={handlePhoneChange}
            scrollRef={studyPermitRef}
          />

          <EducationDetails
            formData={formData}
            selectForm={selectForm}
            handleInputChange={handleInputChange}
            eduErrors={eduErrors}
            setSubmitAttempted={setSubmitAttempted}
            validateEducation={validateEducation}
            setSelectForm={setSelectForm}
            setFormData={setFormData}
            setSubmitAttemptedEducation={setSubmitAttemptedEducation}
            handleSelectChange={handleSelectChange}
            scrollRef={studyPermitRef}
          />

          <WorkExperienceForm
            selectForm={selectForm}
            formData={formData}
            setFormData={setFormData}
            setSelectForm={setSelectForm}
            nextform={"english"}
            scrollRef={studyPermitRef}
          />

          <EnglishSkillsForm
            selectForm={selectForm}
            formData={formData}
            handleInputChange={handleInputChange}
            languageErrors={languageErrors}
            validateLanguageTests={validateLanguageTests}
            setSelectForm={setSelectForm}
            setFormData={setFormData}
            setSubmitAttemptedTest={setSubmitAttemptedTest}
            scrollRef={studyPermitRef}
          />

          <PriorHistoryForm
            selectForm={selectForm}
            handleInputChange={handleInputChange}
            priorHistoryErrors={priorHistoryErrors}
            validatePriorHistory={validatePriorHistory}
            setSelectForm={setSelectForm}
            setSubmitAttemptedPriorHistory={setSubmitAttemptedPriorHistory}
            scrollRef={studyPermitRef}
          />

          <AdditionalSectionForm
            selectForm={selectForm}
            handleInputChange={handleInputChange}
            othersErrors={othersErrors}
            setSubmitAttemptedOther={setSubmitAttemptedOther}
            validateOthers={validateOthers}
            handleFormSubmit={handleFormSubmit}
            setSelectForm={setSelectForm}
            setFormData={setFormData}
          />
        </div>
      )}
    </>
  );
};

export default StudyPermit;

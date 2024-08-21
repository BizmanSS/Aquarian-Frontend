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

const StudyPermit = ({ selectedForm, studyPermitRef, formType }) => {
  const [selectForm, setSelectForm] = useState("PersonalInformation");
  const [selectedExam, setSelectedExam] = useState("IELTS");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [currentDate] = useState(new Date());
  const [submitAttemptedTest, setSubmitAttemptedTest] = useState(false);
  const [submitAttemptedPriorHistory, setSubmitAttemptedPriorHistory] =
    useState(false);
  const [errors, setErrors] = useState({});
  const [languageErrors, setLanguageErrors] = useState({});
  const [priorHistoryErrors, setPriorHistoryErrors] = useState({});
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
    educationExperience1: "",
    highestEducational: "",
    educationExperiences: {
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
    englishTestType: "",
    englishTestResult: {
      reading: "",
      writing: "",
      listening: "",
      speaking: "",
    },
    futureTestEnglish: "",
    examPlanning: "",
    examPlanningDate: "",
    englishMedium: "",
    class10: "",
    class12: "",
    graduation: "",
    gapsAfterStudy: "",
    gapStartDate: "",
    gapEndDate: "",
    counselledBefore: "",
    collegeAbroad: "",
    visaRefused: "",
    visaApplied: "",
    visaAppliedCountry: "",
    visaAppliedDate: "",
    intrestedCollege: "",
    fieldOfStudy: "",
    otherInformation: "",
  });

  const validatePriorHistory = (showErrors = false) => {
    const newErrors = {};
    if (!formData.gapsAfterStudy) {
      newErrors.gapsAfterStudy =
        "Please provide information about any gaps in your study history.";
    }
    if (formData.gapsAfterStudy === "yes") {
      if (!formData.gapStartDate) {
        newErrors.gapStartDate = "Gap dates are Required.";
      }
      if (!formData.gapEndDate) {
        newErrors.gapEndDate = "Gap dates are Required.";
      }
    }
    if (!formData.counselledBefore) {
      newErrors.counselledBefore =
        "Please indicate if you have received counseling before.";
    }
    if (!formData.collegeAbroad) {
      newErrors.collegeAbroad =
        "Please provide information about your study experience abroad.";
    }
    if (!formData.visaRefused) {
      newErrors.visaRefused =
        "Please specify if your visa has been refused before.";
    }
    if (formData.visaRefused === "yes") {
      if (!formData.visaApplied) {
        newErrors.visaApplied = "Please specify Refused Visa Category.";
      }
      if (!formData.visaAppliedCountry) {
        newErrors.visaAppliedCountry =
          "Please specify Refused Visa Applied Country.";
      }
      if (!formData.visaAppliedDate) {
        newErrors.visaAppliedDate =
          "Please specify Refused Visa Applied Dates.";
      }
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

    if (!formData.englishTest) {
      newErrors.englishTest = "English test is required";
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
    if (formData.englishTest === "no") {
      if (!formData.futureTestEnglish) {
        newErrors.futureTestEnglish = "Required fields cannot be empty";
      }
      if (formData.futureTestEnglish === "yes") {
        if (!formData.examPlanning) {
          newErrors.examPlanning = "Required fields cannot be empty";
        }
        if (!formData.examPlanningDate) {
          newErrors.examPlanningDate = "Required fields cannot be empty";
        }
      }
      if (formData.futureTestEnglish === "no") {
        if (!formData.englishMedium) {
          newErrors.englishMedium = "Required fields cannot be empty";
        }
        if (formData.englishMedium === "yes") {
          if (!formData.class10) {
            newErrors.class10 = "Required fields cannot be empty";
          }
          if (!formData.class12) {
            newErrors.class12 = "Required fields cannot be empty";
          }
          if (!formData.graduation) {
            newErrors.graduation = "Required fields cannot be empty";
          }
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
    if (showErrors) {
      setErrors(tempErrors);
    }
    return Object.keys(tempErrors).length === 0;
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
  const handleRegionChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      region: selectedOption.label,
    }));
  };
  const handleVisaCountryChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      visaAppliedCountry: selectedOption.label,
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

  const handleDateChange = (date) => {
    if (date < currentDate) {
      toast.error("Date cannot be less than the current date", {
        position: "top-center",
      });
      return;
    }
    setFormData((prev) => ({
      ...prev,
      examPlanningDate: date,
    }));
  };
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
            selectForm={selectForm}
            formData={formData}
            setFormData={setFormData}
            setSelectForm={setSelectForm}
            nextform={"education-experience"}
            scrollRef={studyPermitRef}
            handleInputChange={handleInputChange}
            errors={errors}
            setSubmitAttempted={setSubmitAttempted}
            validate={validate}
            handleSelectChange={handleSelectChange}
            handleRegionChange={handleRegionChange}
            handlePhoneChange={handlePhoneChange}
          />

          <EducationDetails
            selectForm={selectForm}
            formData={formData}
            setFormData={setFormData}
            setSelectForm={setSelectForm}
            nextform={"work-experience"}
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
            setFormData={setFormData}
            setSelectForm={setSelectForm}
            scrollRef={studyPermitRef}
            selectedExam={selectedExam}
            setSelectedExam={setSelectedExam}
            handleInputChange={handleInputChange}
            languageErrors={languageErrors}
            validateLanguageTests={validateLanguageTests}
            setSubmitAttemptedTest={setSubmitAttemptedTest}
            handleDateChange={handleDateChange}
          />

          <PriorHistoryForm
            selectForm={selectForm}
            formData={formData}
            setFormData={setFormData}
            setSelectForm={setSelectForm}
            scrollRef={studyPermitRef}
            handleInputChange={handleInputChange}
            priorHistoryErrors={priorHistoryErrors}
            validatePriorHistory={validatePriorHistory}
            handleVisaCountryChange={handleVisaCountryChange}
            setSubmitAttemptedPriorHistory={setSubmitAttemptedPriorHistory}
            handleVisaDate={handleVisaDate}
          />

          <AdditionalSectionForm
            selectForm={selectForm}
            formData={formData}
            setFormData={setFormData}
            setSelectForm={setSelectForm}
            scrollRef={studyPermitRef}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      )}
    </>
  );
};

export default StudyPermit;

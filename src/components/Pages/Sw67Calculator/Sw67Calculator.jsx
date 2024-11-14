import React, { useState, useEffect } from "react";
import CLB_Calculation from "./CLB_Calculation.jsx";
import "./Sw67Calculator.css";

import FinalScoreSw67 from "./FinalScoreSw67.jsx";

const ageData = [
  {
    value: "age-under-18",
    age: "Under 18",
    points: 0,
  },
  {
    value: "age-18-35",
    age: "18-35",
    points: 12,
  },
  {
    value: "age-36",
    age: "36",
    points: 11,
  },
  {
    value: "age-37",
    age: "37",
    points: 10,
  },
  {
    value: "age-38",
    age: "38",
    points: 9,
  },
  {
    value: "age-39",
    age: "39",
    points: 8,
  },
  {
    value: "age-40",
    age: "40",
    points: 7,
  },
  {
    value: "age-41",
    age: "41",
    points: 6,
  },
  {
    value: "age-42",
    age: "42",
    points: 5,
  },
  {
    value: "age-43",
    age: "43",
    points: 4,
  },
  {
    value: "age-44",
    age: "44",
    points: 3,
  },
  {
    value: "age-45",
    age: "45",
    points: 2,
  },
  {
    value: "age-46",
    age: "46",
    points: 1,
  },
  {
    value: "age-above-47",
    age: "47 or above",
    points: 0,
  },
];

const educationData = [
  {
    value: "phd",
    college: "Doctoral level university degree (Ph.D.)",
    points: 25,
  },
  {
    value: "masters-degree",
    college: "Master's degree",
    points: 23,
  },
  {
    value: "bachlors-degree",
    college: "Bachelors degree three or more years",
    points: 21,
  },
  {
    value: "professional-degree-licensed-profession",
    college: "Prefessional degree needed to practice in licensed profession",
    points: 23,
  },
  {
    value: "two-or-more-canadian-post-secondary-degrees-or-diplomas",
    college:
      "Two or more Canadian post-secondary degrees or diplomas or equal (at least one must be for a program of at least three years)",
    points: 22,
  },
  {
    value: "canadian-post-secondary-degree-or-diploma-three-years",
    college:
      "Bachelor's degree OR  a three or more year program at a university, college, trade or technical school, or other institute",
    points: 21,
  },
  {
    value: "canadian-post-secondary-degree-or-diploma-two-year",
    college:
      "Two-year program at a university, college, trade or technical school, or other institute",
    points: 19,
  },
  {
    value: "canadian-post-secondary-degree-or-diploma-one-year",
    college:
      "One-year degree, diploma or certificate from  a university, college, trade or technical school, or other institute",
    points: 15,
  },
  {
    value: "highSchoolGraduation",
    college: "Secondary diploma (high school graduation)",
    points: 5,
  },
  {
    value: "highSchool",
    college: "Less than secondary school (high school)",
    points: 0,
  },
];

const experienceData = [
  {
    value: "we-1-year",
    experience: "1 year",
    points: 9,
  },
  {
    value: "we-2-3-years",
    experience: "2 - 3 years",
    points: 11,
  },
  {
    value: "we-4-5 years",
    experience: "4 - 5 years",
    points: 13,
  },
  {
    value: "we-6-or-more",
    experience: "6 or more years",
    points: 15,
  },
];

let arrangedEmploymentSeparatePoints= 10;

const workedInCanadaPoints = 10;
const studiedInCanadaPoints = 5;
const bloodRelativeInCanadaPoints = 5;
const arrangedEmploymentPoints = 5;
const spouseProficientInLanguagePoints = 5;
const spouseStudiedInCanadaPoints = 5;
const spouseCanadianWorkExperiencePoints = 5;

export default function Sw67Calculator() {
  const [formData, setFormData] = useState({
    age: "",
    education: "",
    experience: "",
    // reading: "",
    // writing: "",
    // listening: "",
    // speaking: "",
    frenchSkill: null,
    workedInCanada: null,
    studiedInCanada: null,
    bloodRelativeInCanada: null,
    arrangedEmployment: null,
    married: null,
    spouseProficientInLanguage: null,
    spouseCanadianWorkExperience: null,
    spouseStudiedInCanada: null,
  });

  const [errors, setErrors] = useState({});
  const [score, setScore] = useState(0);
  const [validatedCLB, isValidatedCLB] = useState(false);

  const [ageScore, setAgeScore] = useState(0);
  const [educationScore, setEducationScore] = useState(0);
  const [arrangedEmploymentScore, setArrangedEmploymentScore] = useState(0);

  const [workScore, setWorkScore] = useState(0);
  const [workedInCanadaScore, setWorkedInCanadaScore] = useState(0);
  const [studiedInCanadaScore, setStudiedInCanadaScore] = useState(0);
  const [bloodRelativeInCanadaScore, setBloodRelativeInCanadaScore] =
    useState(0);

  const [arrangedEmploymentSeparateScore, setArrangedEmploymentSeparateScore] = useState(0);
  const [spouseProficientInLanguageScore, setSpouseProficientInLanguageScore] =
    useState(0);
  const [spouseStudiedInCanadaScore, setSpouseStudiedInCanadaScore] =
    useState(0);
  const [
    spouseCanadianWorkExperienceScore,
    setSpouseCanadianWorkExperienceScore,
  ] = useState(0);

  const [clb5InAllScore, setClb5InAllScore] = useState(0);
  const [clbScore, setClbScore] = useState(0);
  const [isCLBScoreCalculated, setIsCLBScoreCalculated] = useState(false);

  const [adaptabilityScore, setadaptabilityScore] = useState(0);

  const handleCLBCalculationComplete = (isCalculated, clbScorePrimary, clbScoreSecondary) => {
    setIsCLBScoreCalculated(isCalculated);

    if(clbScorePrimary >= 5){
      isValidatedCLB(true);
    }

    if(clbScorePrimary < 5){
      isValidatedCLB(false);
    }
   

    if (clbScoreSecondary >= 5) {
      setClbScore(4);
      
    } else {
      setClbScore(0);
    }

    if (clbScorePrimary >= 9) {
      setClb5InAllScore(6 * 4);
    } else if (clbScorePrimary === 8) {
      setClb5InAllScore(5 * 4);
    } else if (clbScorePrimary === 7) {
      setClb5InAllScore(4 * 4);
    } else if (clbScorePrimary <= 7) {
      setClb5InAllScore(0);
    }
  };

  useEffect(() => {
    if (isCLBScoreCalculated === true)
      setErrors((prevErrors) => ({
        ...prevErrors,
        clb: "",
      }));
  }, [isCLBScoreCalculated]);

  useEffect(() => {
    // Scroll to the top of the form  on component mount (including refresh)
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

 

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    console.log("handlechange ", name, value);

    // Convert value for radio buttons
    const newValue = type === "radio" ? value === "true" : value;

    // Create the updated form data
    const updatedFormData = {
      ...formData,
      [name]: newValue,
    };

    // Update form data
    setFormData(updatedFormData);

    // Clear errors
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    // Now use updatedFormData instead of formData in switch cases
    switch (name) {
      case "age":
        setAgeScore(ageData.find((item) => item.value === value).points);
        break;
      case "education":
        setEducationScore(
          educationData.find((item) => item.value === value).points
        );
        break;
      case "experience":
        setWorkScore(
          experienceData.find((item) => item.value === value).points
        );
        break;
        case "frenchSkill":      // actually this if for arranged employment separate question
        setArrangedEmploymentSeparateScore(
            updatedFormData.frenchSkill === true ? arrangedEmploymentSeparatePoints : 0
          );
          break;
      case "workedInCanada":
        setWorkedInCanadaScore(
          updatedFormData.workedInCanada === true ? workedInCanadaPoints : 0
        );
        break;
      case "studiedInCanada":
        setStudiedInCanadaScore(
          updatedFormData.studiedInCanada === true ? studiedInCanadaPoints : 0
        );
        break;
      case "bloodRelativeInCanada":
        setBloodRelativeInCanadaScore(
          updatedFormData.bloodRelativeInCanada === true
            ? bloodRelativeInCanadaPoints
            : 0
        );
        break;
      case "arrangedEmployment":
        setArrangedEmploymentScore(
          updatedFormData.arrangedEmployment === true
            ? arrangedEmploymentPoints
            : 0
        );
        break;
      case "spouseProficientInLanguage":
        setSpouseProficientInLanguageScore(
          updatedFormData.spouseProficientInLanguage === true
            ? spouseProficientInLanguagePoints
            : 0
        );
        break;
      case "spouseStudiedInCanada":
        setSpouseStudiedInCanadaScore(
          updatedFormData.spouseStudiedInCanada === true
            ? spouseStudiedInCanadaPoints
            : 0
        );
        break;
      case "spouseCanadianWorkExperience":
        setSpouseCanadianWorkExperienceScore(
          updatedFormData.spouseCanadianWorkExperience === true
            ? spouseCanadianWorkExperiencePoints
            : 0
        );
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.age) newErrors.age = "Please select your age.";
    if (!formData.education)
      newErrors.education = "Please select your education.";
    if (!formData.experience)
      newErrors.experience = "Please select your work experience.";
    // if (!formData.reading)
    //   newErrors.reading = "Please select your Reading skill.";
    // if (!formData.writing)
    //   newErrors.writing = "Please select your Writing skill.";
    // if (!formData.speaking)
    //   newErrors.speaking = "Please select your Speaking skill.";
    // if (!formData.listening)
    //   newErrors.listening = "Please select your Listening skill.";
    if (isCLBScoreCalculated === false)
      newErrors.clb = "This field is required.";

    if (formData.frenchSkill === null)
      newErrors.frenchSkill = "This field is required.";

    if (formData.workedInCanada === null)
      newErrors.workedInCanada = "This field is required.";
    if (formData.studiedInCanada === null)
      newErrors.studiedInCanada = "This field is required.";
    if (formData.bloodRelativeInCanada === null)
      newErrors.bloodRelativeInCanada = "This field is required.";
    if (formData.arrangedEmployment === null)
      newErrors.arrangedEmployment = "This field is required.";
    if (formData.married === null)
      newErrors.married = "This field is required.";
    if (
      formData.married !== null &&
      formData.married === true &&
      formData.spouseProficientInLanguage === null
    )
      newErrors.spouseProficientInLanguage = "This field is required.";
    if (
      formData.married !== null &&
      formData.married === true &&
      formData.spouseStudiedInCanada === null
    )
      newErrors.spouseStudiedInCanada = "This field is required.";
    if (
      formData.married !== null &&
      formData.married === true &&
      formData.spouseCanadianWorkExperience === null
    )
      newErrors.spouseCanadianWorkExperience = "This field is required.";

    setErrors(newErrors);
   

    // Scroll to the first error field
    const firstErrorField = Object.keys(newErrors).find(
      (key) => newErrors[key]
    );
    console.log("erro ",firstErrorField);
    if (firstErrorField !== undefined) {
      document.getElementById(firstErrorField).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      document.getElementById(firstErrorField).focus();
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form :", formData);

      

    // Check if CLB score is calculated before submitting

    if (validateForm()) {
      console.log("Form Submitted:", formData);
      console.log(
        ageScore,
        educationScore,
        workScore,
        workedInCanadaScore,
        studiedInCanadaScore,
        bloodRelativeInCanadaScore,
        arrangedEmploymentScore,
        spouseProficientInLanguageScore,
        spouseStudiedInCanadaScore,
        spouseCanadianWorkExperienceScore,
        clb5InAllScore,
        clbScore
      );
      setScore(

          clb5InAllScore + clbScore+
        educationScore+
          workScore+
          ageScore+
          Math.max(
            0,
            Math.min(
              10,
              workedInCanadaScore +
                studiedInCanadaScore +
                bloodRelativeInCanadaScore +
                arrangedEmploymentScore +
                spouseProficientInLanguageScore +
                spouseStudiedInCanadaScore +
                spouseCanadianWorkExperienceScore
            )
          )
      );
      // console.log("score ",clb5InAllScore , clbScore,
      //   educationScore,
      //     workScore,
      //     ageScore,
      //     adaptabilityScore)

      console.log(
        "Add ",
        Math.max(
          0,
          Math.min(
            10,
            workedInCanadaScore +
              studiedInCanadaScore +
              bloodRelativeInCanadaScore +
              arrangedEmploymentScore +
              spouseProficientInLanguageScore +
              spouseStudiedInCanadaScore +
              spouseCanadianWorkExperienceScore
          )
        )
      );

      setadaptabilityScore(
        Math.max(
          0,
          Math.min(
            10,
            workedInCanadaScore +
              studiedInCanadaScore +
              bloodRelativeInCanadaScore +
              arrangedEmploymentScore +
              spouseProficientInLanguageScore +
              spouseStudiedInCanadaScore +
              spouseCanadianWorkExperienceScore
          )
        )
      );

   
    }
  };

  useEffect(()=>{
    // Scroll to the showresult element
    const showResultElement = document.getElementById("finalScore");
    if (showResultElement) {
      const scrollPosition = showResultElement.offsetTop - 100;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
 },[handleSubmit])

  return (
    <div
      style={{
        background: "",
      }}
    >
      <div className="pages-content-wrapper">
        <div className="pages-content-div fixing-calculator-width mt-5">
          <div class="pages-content-text-wrapper calculator-width-fix">
            <div class="pages-header">
              67 Point Calculator Canada: Factors Influencing Your Score
            </div>
            <div class="pages-paragraph space-fix intro-size-fix">
              The 67 point calculator is the evaluation tool used to determine
              your eligibility as an immigration applicant for Canada’s
              permanent residency (PR) program. This tool is used to evaluate
              those applicants who have applied for Canada PR under the Express
              Entry system.
              <div className="mt-5">
                The Express Entry system is an application process facilitated
                by the government of Canada. It is only for skilled workers who
                want to permanently relocate to Canada, and live and work
                there.This is where the 67 point calculator comes into play. Out
                of all the people who apply for PR through Express Entry, only a
                few are selected. They are invited to apply for PR based on how
                many points they score on the 67 point calculator.
              </div>
              <div className="mt-5">
                Hence, the ‘67 point calculator Canada’ is one of the most
                looked-up topics on the internet by aspiring immigrants. If you
                are here on this page, you are one of them too!
              </div>
            </div>
            <div className="sw67Calculator" id="sw67Calculator">
              <form onSubmit={handleSubmit}>
                <div className="form-width">
                  <div className="sw67-age label-style">
                    <label htmlFor="age">*Your Age </label>
                    <select
                      id="age"
                      value={formData.age}
                      onChange={handleChange}
                      name="age"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {ageData.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.age}
                        </option>
                      ))}
                    </select>
                    {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
                  </div>

                  <div className="sw67-education label-style">
                    <label htmlFor="education">*Your Education </label>
                    <select
                      id="education"
                      value={formData.education}
                      onChange={handleChange}
                      name="education"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {educationData.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.college}
                        </option>
                      ))}
                    </select>
                    {errors.education && (
                      <p style={{ color: "red" }}>{errors.education}</p>
                    )}
                  </div>

                  <div className="sw67-experience label-style">
                    <label htmlFor="experience">*Your Work Experience </label>
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      name="experience"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {experienceData.map((item, index) => (
                        <option key={index} value={item.value}>
                          {item.experience}
                        </option>
                      ))}
                    </select>
                    {errors.experience && (
                      <p style={{ color: "red" }}>{errors.experience}</p>
                    )}
                  </div>

                  <div className="sw67-languageSkills label-style">
                    <div className="mb-3">*Language Skills</div>
                    <div id="clb">
                      <CLB_Calculation
                        onCalculationComplete={handleCLBCalculationComplete}
                      />
                      {errors.clb && (
                        <p style={{ color: "red" }}>{errors.clb}</p>
                      )}
                    </div>
                  </div>

                 
                  <div className="sw67-frenchSkill px-3" id="frenchSkill">
                  <h1 className=" font-bold mt-2 mb-10 text-[21px] px-2">Arranged Employment</h1>
                    <p className="px-3">
                      *Do you have a job offer of atleast 1 year from a Canadian employer in an occupation listed in TEER category 0, 1, 2 or 3 of the NOC?
                    </p>

                    <div className="sw67-frenchSkillYes px-3" >
                      <input
                        type="radio"
                        name="frenchSkill"
                        id="frenchSkillYes"
                        onChange={handleChange}
                        value="true"
                        checked={formData.frenchSkill === true}
                      />
                      <label htmlFor="frenchSkillYes">Yes</label>
                    </div>

                    <div className="sw67-frenchSkillNo px-3">
                      <input
                        type="radio"
                        name="frenchSkill"
                        id="frenchSkillNo"
                        onChange={handleChange}
                        value="false"
                        checked={formData.frenchSkill === false}
                      />
                      <label htmlFor="frenchSkillNo">No</label>
                    </div>

                    {errors.frenchSkill && (
                      <p style={{ color: "red" }}>{errors.frenchSkill}</p>
                    )}
                  </div>

                  <div className="adaptability-section">

                  <h1 className=" font-bold p-4 text-[21px]">Adaptability</h1>

                  <div className="sw67-workedInCanada" id="workedInCanada">
                    <p>*Have you worked in Canada for 1 or more years?</p>

                    <div className="sw67-workedInCanadaYes">
                      <input
                        type="radio"
                        name="workedInCanada"
                        value="true"
                        checked={formData.workedInCanada === true}
                        onChange={handleChange}
                        id="workedInCanadaYes"
                      />
                      <label htmlFor="workInCanadaYes">Yes</label>
                    </div>

                    <div className="sw67-workedInCanadaNo">
                      <input
                        type="radio"
                        name="workedInCanada"
                        value="false"
                        checked={formData.workedInCanada === false}
                        onChange={handleChange}
                        id="workedInCanadaNo"
                      />
                      <label htmlFor="workedInCanadaNo">No</label>
                    </div>

                    {errors.workedInCanada && (
                      <p style={{ color: "red" }}>{errors.workedInCanada}</p>
                    )}
                  </div>

                  <div className="sw67-studiedInCanada" id="studiedInCanada">
                    <p>*Have you studied in Canada for 2 or more years?</p>

                    <div className="sw67-studiedInCanadaYes">
                      <input
                        type="radio"
                        name="studiedInCanada"
                        value="true"
                        checked={formData.studiedInCanada === true}
                        onChange={handleChange}
                        id="studiedInCanadaYes"
                      />
                      <label htmlFor="studiedInCanadaYes">Yes</label>
                    </div>

                    <div className="sw67-studiedInCanadaNo">
                      <input
                        type="radio"
                        name="studiedInCanada"
                        value="false"
                        checked={formData.studiedInCanada === false}
                        onChange={handleChange}
                        id="studiedInCanadaNo"
                      />
                      <label htmlFor="studiedInCanadaNo">No</label>
                    </div>

                    {errors.studiedInCanada && (
                      <p style={{ color: "red" }}>{errors.studiedInCanada}</p>
                    )}
                  </div>

                  <div
                    className="sw67-bloodRelativeInCanada"
                    id="bloodRelativeInCanada"
                  >
                    <p>
                      *Do you have a blood relative in Canada on a PR visa/is a
                      citizen?
                    </p>

                    <div className="sw67-bloodRelativeInCanadaYes">
                      <input
                        type="radio"
                        name="bloodRelativeInCanada"
                        value="true"
                        checked={formData.bloodRelativeInCanada === true}
                        onChange={handleChange}
                        id="bloodRelativeInCanadaYes"
                      />
                      <label htmlFor="bloodRelativeInCanadaYes">Yes</label>
                    </div>

                    <div className="sw67-bloodRelativeInCanadaNo">
                      <input
                        type="radio"
                        name="bloodRelativeInCanada"
                        value="false"
                        checked={formData.bloodRelativeInCanada === false}
                        onChange={handleChange}
                        id="bloodRelativeInCanadaNo"
                      />
                      <label htmlFor="bloodRelativeInCanadaNo">No</label>
                    </div>

                    {errors.bloodRelativeInCanada && (
                      <p style={{ color: "red" }}>
                        {errors.bloodRelativeInCanada}
                      </p>
                    )}
                  </div>

                  <div
                    className="sw67-arrangedEmployment"
                    id="arrangedEmployment"
                  >
                    <p>*Do you have an arranged employment in Canada?</p>

                    <div className="sw67-arrangedEmploymentYes">
                      <input
                        type="radio"
                        name="arrangedEmployment"
                        value="true"
                        checked={formData.arrangedEmployment === true}
                        onChange={handleChange}
                        id="arrangedEmploymentYes"
                      />
                      <label htmlFor="arrangedEmploymentYes">Yes</label>
                    </div>

                    <div className="sw67-arrangedEmploymentNo">
                      <input
                        type="radio"
                        name="arrangedEmployment"
                        value="false"
                        checked={formData.arrangedEmployment === false}
                        onChange={handleChange}
                        id="arrangedEmploymentNo"
                      />
                      <label htmlFor="arrangedEmploymentNo">No</label>
                    </div>

                    {errors.arrangedEmployment && (
                      <p style={{ color: "red" }}>
                        {errors.arrangedEmployment}
                      </p>
                    )}
                  </div>

                  <div className="sw67-married" id="married">
                    <p>*Are you married??</p>

                    <div className="sw67-marriedYes">
                      <input
                        type="radio"
                        name="married"
                        value="true"
                        checked={formData.married === true}
                        onChange={handleChange}
                        id="marriedYes"
                      />
                      <label htmlFor="marriedYes">Yes</label>
                    </div>

                    <div className="sw67-marriedNo">
                      <input
                        type="radio"
                        name="married"
                        value="false"
                        checked={formData.married === false}
                        onChange={handleChange}
                        id="marriedNo"
                      />
                      <label htmlFor="marriedNo">No</label>
                    </div>

                    {errors.married && (
                      <p style={{ color: "red" }}>{errors.married}</p>
                    )}
                  </div>

                  {formData.married === true && (
                    <>
                      <div
                        className="sw67-spouseProficientInLanguage"
                        id="spouseProficientInLanguage"
                      >
                        <p>
                          *Is your spouse/partner proficient in English/French?
                        </p>

                        <div className="sw67-spouseProficientInLanguageYes">
                          <input
                            type="radio"
                            name="spouseProficientInLanguage"
                            value="true"
                            checked={
                              formData.spouseProficientInLanguage === true
                            }
                            onChange={handleChange}
                            id="spouseProficientInLanguageYes"
                          />
                          <label htmlFor="spouseProficientInLanguageYes">
                            Yes
                          </label>
                        </div>

                        <div className="sw67-spouseProficientInLanguageNo">
                          <input
                            type="radio"
                            name="spouseProficientInLanguage"
                            value="false"
                            checked={
                              formData.spouseProficientInLanguage === false
                            }
                            onChange={handleChange}
                            id="spouseProficientInLanguageNo"
                          />
                          <label htmlFor="spouseProficientInLanguageNo">
                            No
                          </label>
                        </div>

                        {errors.spouseProficientInLanguage && (
                          <p style={{ color: "red" }}>
                            {errors.spouseProficientInLanguage}
                          </p>
                        )}
                      </div>

                      <div
                        className="sw67-spouseCanadianWorkExperience"
                        id="spouseCanadianWorkExperience"
                      >
                        <p>
                          *Is your spouse/partner proficient in English/French?
                        </p>

                        <div className="sw67-spouseCanadianWorkExperienceYes">
                          <input
                            type="radio"
                            name="spouseCanadianWorkExperience"
                            value="true"
                            checked={
                              formData.spouseCanadianWorkExperience === true
                            }
                            onChange={handleChange}
                            id="spouseCanadianWorkExperienceYes"
                          />
                          <label htmlFor="spouseCanadianWorkExperienceYes">
                            Yes
                          </label>
                        </div>

                        <div className="sw67-spouseCanadianWorkExperienceNo">
                          <input
                            type="radio"
                            name="spouseCanadianWorkExperience"
                            value="false"
                            checked={
                              formData.spouseCanadianWorkExperience === false
                            }
                            onChange={handleChange}
                            id="spouseCanadianWorkExperienceNo"
                          />
                          <label htmlFor="spouseCanadianWorkExperienceNo">
                            No
                          </label>
                        </div>

                        {errors.spouseCanadianWorkExperience && (
                          <p style={{ color: "red" }}>
                            {errors.spouseCanadianWorkExperience}
                          </p>
                        )}
                      </div>

                      <div
                        className="sw67-spouseStudiedInCanada"
                        id="spouseStudiedInCanada"
                      >
                        <p>
                          *Has your spouse/partner studied in Canada for 2 or
                          more years?
                        </p>

                        <div className="sw67-spouseStudiedInCanadaYes">
                          <input
                            type="radio"
                            name="spouseStudiedInCanada"
                            value="true"
                            checked={formData.spouseStudiedInCanada === true}
                            onChange={handleChange}
                            id="spouseStudiedInCanadaYes"
                          />
                          <label htmlFor="spouseStudiedInCanadaYes">Yes</label>
                        </div>

                        <div className="sw67-spouseStudiedInCanadaNo">
                          <input
                            type="radio"
                            name="spouseStudiedInCanada"
                            value="false"
                            checked={formData.spouseStudiedInCanada === false}
                            onChange={handleChange}
                            id="spouseStudiedInCanadaNo"
                          />
                          <label htmlFor="spouseStudiedInCanadaNo">No</label>
                        </div>

                        {errors.spouseStudiedInCanada && (
                          <p style={{ color: "red" }}>
                            {errors.spouseStudiedInCanada}
                          </p>
                        )}
                      </div>
                    </>
                  )}

</div>

                  <button type="submit" className="sw67-submit-btn">
                    Calculate Your Score
                  </button>

                  {score > 0 && (
                    <div className="mt-5" id="finalScore">
                      <FinalScoreSw67
                        isValidatedCLB={validatedCLB}
                        score={score}
                        languageScore={clb5InAllScore + clbScore}
                        arrangedScore={arrangedEmploymentSeparatePoints}
                        educationScore={educationScore}
                        workScore={workScore}
                        ageScore={ageScore}
                        adaptabilityScore={adaptabilityScore}
                      />
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

const AdditionalSectionForm = ({
  handleInputChange,
  selectForm,
  formData,
  handleFormSubmit,
  setSelectForm,
  setFormData,
}) => {
  return (
    <div className="w-full h-fit">
      <div
        id="other"
        onClick={() => {
          if (formData.otherInformation) setSelectForm("other");
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
        <form action="post" className="w-full mt-6">
          <div className="mt-4">
            <div className="flex flex-col items-start justify-center">
              <label
                for="comments"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
              >
                Do you want to provide any other information ?
              </label>
              <input
                type="text"
                name="otherInformation"
                value={formData.otherInformation}
                id="comments"
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
                window.scrollTo(0, 0);
              }}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdditionalSectionForm;

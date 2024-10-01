import React from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import SearchableDropdown from "../../SearchableDropdown/SearchableDropdown";
import DatePicker from "react-datepicker";
import './FinancialForm.css'

function FinancialForm({

  selectForm,
  formData,
  setSelectForm,
  setFormData,
  nextform,
  scrollRef,
  errors,
  handleInputChange,
  handleVisaCountryChange,
  customStyles,
  options,
  Select,
  validateFinancial,
  setSubmitAttemptedFinancial,
}) {
  const handleVisaDate = (date) => {
    setFormData((prev) => ({
      ...prev,
      visaAppliedDate: date,
    }));
  };
  return (
    <>
      <div
        id="financial"
        onClick={() => {
          if (
            formData.EducationLevel ||
            formData.occupation ||
            formData.occupationType ||
            formData.workExperience ||
            formData.yearlyIncome ||
            formData.regularITR ||
            formData.sponsorInCanada ||
            formData.visaRefused
          )
            setSelectForm("financial");
        }}
        className="PI-heading-container"
      >
        Education, Work and Financial Information
       
      </div>
      {selectForm === "financial" && (
        <form action="post" className="w-full PI-form p-5">
          <div
            className="PI-form-layout-financial"
          >
            <div className="w-full mb-3 form-input">
              <label className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled">
                *What is your highest level of education?
                
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
            <div className="w-full mb-3 form-input">
              <label
                for="occupation"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
              >
                *What is your occupation?
               
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
              {/* <SearchableDropdown
                apiEndpoint={`${process.env.REACT_APP_API}/occupations`}
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              /> */}
              {errors.occupation && (
                <p className="text-red-500">{errors.occupation}</p>
              )}
            </div>
           
            <div className="w-full mb-3 form-input">
              <label className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled">
                *How many years of work experience you have?
                
              </label>
              <select
                id="workExperience"
                onChange={handleInputChange}
                name="workExperience"
                value={formData.workExperience}
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              >
                <option value="" selected>
                  Select
                </option>
                <option className="text-black" value="1">
                  1
                </option>
                <option className="text-black" value="2">
                  2
                </option>
                <option className="text-black" value="3">
                  3
                </option>
                <option className="text-black" value="4">
                  4
                </option>
                <option className="text-black" value="5">
                  5
                </option>
                <option className="text-black" value="6">
                  6
                </option>
                <option className="text-black" value="7">
                  7
                </option>
                <option className="text-black" value="8">
                  8
                </option>
                <option className="text-black" value="9">
                  9
                </option>
                <option className="text-black" value="10 or more">
                  10 or more
                </option>
              </select>

              {errors.workExperience && (
                <p className="text-red-500">{errors.workExperience}</p>
              )}
            </div>
            <div className="w-full mb-3 form-input">
              <label className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled">
                *What is your yearly Income?
               
              </label>
              <select
                id="yearlyIncome"
                onChange={handleInputChange}
                name="yearlyIncome"
                value={formData.yearlyIncome}
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              >
                <option value="" selected>
                  Select
                </option>
                <option className="text-black" value="Less than 1 Lakh">
                  Less than 1 Lakh
                </option>
                <option className="text-black" value="1 Lakh - 3 Lakh">
                  1 Lakh - 3 Lakh
                </option>
                <option className="text-black" value="3 Lakh - 5 Lakh">
                  3 Lakh - 5 Lakh
                </option>
                <option className="text-black" value="5 Lakh - 7 Lakh">
                  5 Lakh - 7 Lakh
                </option>
                <option className="text-black" value="7 Lakh - 10 Lakh">
                  7 Lakh - 10 Lakh
                </option>
                <option className="text-black" value="10 Lakh - 15 Lakh">
                  10 Lakh - 15 Lakh
                </option>
                <option className="text-black" value="15 Lakh - 20 Lakh">
                  15 Lakh - 20 Lakh
                </option>
                <option className="text-black" value="20 Lakh - 30 Lakh">
                  20 Lakh - 30 Lakh
                </option>
                <option className="text-black" value="30 Lakh - 50 Lakh">
                  30 Lakh - 50 Lakh
                </option>
                <option className="text-black" value="50 lakh and more">
                  50 lakh and more
                </option>
              </select>

              {errors.yearlyIncome && (
                <p className="text-red-500">{errors.yearlyIncome}</p>
              )}
            </div>

            </div>

            <div className="checkbox-container">

            <div className="w-full mb-3 form-input">
              <label
                for="regularITR"
                className="mb-4 block text-base font-medium text-[#07074D]"
              >
                *Have you been regularly filing your Income Tax returns?
                
              </label>
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="regularITR001"
                    type="radio"
                    name="regularITR"
                    className="hidden"
                    value="yes"
                    checked={formData.regularITR === "yes"}
                    onChange={handleInputChange}
                  />
                  <label
                    for="regularITR001"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Yes
                  </label>
                </div>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="regularITR002"
                    type="radio"
                    name="regularITR"
                    className="hidden"
                    value="no"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    checked={formData.regularITR === "no"}
                  />
                  <label
                    for="regularITR002"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    No
                  </label>
                </div>
              </div>
              {errors.regularITR && (
                <p className="text-red-500">{errors.regularITR}</p>
              )}
            </div>
            <div className="w-full mb-3 form-input">
              <label
                for="sponsorInCanada"
                className="mb-4 block text-base font-medium text-[#07074D]"
              >
                *Do you have any relatives or friends in Canada who can sponsor
                you?
               
              </label>
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="sponsorInCanada001"
                    type="radio"
                    name="sponsorInCanada"
                    className="hidden"
                    value="yes"
                    checked={formData.sponsorInCanada === "yes"}
                    onChange={handleInputChange}
                  />
                  <label
                    for="sponsorInCanada001"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Yes
                  </label>
                </div>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="sponsorInCanada002"
                    type="radio"
                    name="sponsorInCanada"
                    className="hidden"
                    value="no"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    checked={formData.sponsorInCanada === "no"}
                  />
                  <label
                    for="sponsorInCanada002"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    No
                  </label>
                </div>
              </div>
              {errors.sponsorInCanada && (
                <p className="text-red-500">{errors.sponsorInCanada}</p>
              )}
            </div>
            <div className="w-full mb-3">
              <label
                for="occupationType"
                className="mb-4 block text-base font-medium text-[#07074D]"
              >
                *What is the type of your occupation?
               
              </label>
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="occupationType001"
                    type="radio"
                    name="occupationType"
                    className="hidden"
                    value="Owned Business"
                    checked={formData.occupationType === "Owned Business"}
                    onChange={handleInputChange}
                  />
                  <label
                    for="occupationType001"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Owned Business
                  </label>
                </div>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="occupationType002"
                    type="radio"
                    name="occupationType"
                    className="hidden"
                    value="Service Employee"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    checked={formData.occupationType === "Service Employee"}
                  />
                  <label
                    for="occupationType002"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Service Employee
                  </label>
                </div>
              </div>
              {errors.occupationType && (
                <p className="text-red-500">{errors.occupationType}</p>
              )}
            </div>

            <div className="mb-3 w-full form-input">
              <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                *Have you ever been refused visa for any country?
                
              </label>
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="visarefused1"
                    type="radio"
                    name="visaRefused"
                    className="hidden"
                    checked={formData.visaRefused === "yes"}
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
                    name="visaRefused"
                    className="hidden"
                    value="no"
                    checked={formData.visaRefused === "no"}
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
              {errors.visaRefused && (
                <p className="text-red-500">{errors.visaRefused}</p>
              )}
            </div>

            <div className="visa-refused-container">
            {formData.visaRefused === "yes" && (
              <div className="mb-3 w-full">
                <label
                  for="visaApplied"
                  className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  *Visa Applied Category
                </label>
                <input
                  type="text"
                  name="visaApplied"
                  onChange={handleInputChange}
                  value={formData.visaApplied}
                  id="visaApplied"
                  placeholder="Please specify your Applied Visa Category"
                  className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {errors.visaApplied && (
                  <p className="text-red-500">{errors.visaApplied}</p>
                )}
              </div>
            )}
            {formData.visaRefused === "yes" && (
              <div className="mb-3 w-full">
                <label
                  for="visaAppliedCountry"
                  className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  *Visa Applied for Which Country{" "}
               
                </label>
                <Select
                  options={options}
                  value={options.find(
                    (option) => option.label === formData.visaAppliedCountry
                  )}
                  onChange={handleVisaCountryChange}
                  styles={customStyles}
                  className="w-full"
                />

                {errors.visaAppliedCountry && (
                  <p className="text-red-500">{errors.visaAppliedCountry}</p>
                )}
              </div>
            )}
            {formData.visaRefused === "yes" && (
              <div className="mb-3 w-full">
                <label
                  for="visaAppliedDate"
                  className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  *Visa Applied Date
                </label>
                <DatePicker
                  selected={formData.visaAppliedDate}
                  onChange={handleVisaDate}
                  maxDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  onFocus={(e) => e.target.blur()}
                  placeholderText="Select Date"
                  shouldCloseOnSelect
                  showYearDropdown
                  showMonthDropdown
                  dropdownMode="select"
                  className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {errors.visaAppliedDate && (
                  <p className="text-red-500">{errors.visaAppliedDate}</p>
                )}
              </div>
            )}
            </div>

            </div>

         
          <div className="w-full flex items-center justify-end mb-10 mt-6">
            <button
              className="assessment-next-step-btn"
              type="button"
              onClick={() => {
                setSubmitAttemptedFinancial(true);
                // setSelectForm('Education');
                if (validateFinancial(true)) {
                  setSelectForm(nextform);
                }
                const element = scrollRef.current;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;

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
    </>
  );
}

export default FinancialForm;

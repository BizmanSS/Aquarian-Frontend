import React from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import SearchableDropdown from "../../SearchableDropdown/SearchableDropdown";
import DatePicker from "react-datepicker";
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
        className="text-base md:text-xl font-semibold tracking-[5px] md:tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
      >
        Education, Work and Financial Information
        <span className="text-black">
          {selectForm === "financial" ? (
            <GoArrowDownRight size={30} />
          ) : (
            <GoArrowUpRight size={30} />
          )}
        </span>
      </div>
      {selectForm === "financial" && (
        <form action="post" className="w-full">
          <div
            className="w-full md:grid grid-cols-2"
            style={{ columnGap: "10%" }}
          >
            <div className="w-full mb-3">
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
            <div className="w-full mb-3">
              <label
                for="occupation"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
              >
                What is your occupation?
                <span className="text-red-400">*</span>
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
            <div className="w-full mb-3">
              <label
                for="occupationType"
                className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
              >
                What is the type of your occupation?
                <span className="text-red-400">*</span>
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
            <div className="w-full mb-3">
              <label className="mb-2 ml-2 block text-base font-medium text-[#07074D]">
                How many years of work experience you have?
                <span className="text-red-400">*</span>
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
            <div className="w-full mb-3">
              <label className="mb-2 ml-2 block text-base font-medium text-[#07074D]">
                What is your yearly Income?
                <span className="text-red-400">*</span>
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
            <div className="w-full mb-3">
              <label
                for="regularITR"
                className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
              >
                Have you been regularly filing your Income Tax returns?
                <span className="text-red-400">*</span>
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
            <div className="w-full mb-3">
              <label
                for="sponsorInCanada"
                className="mb-4 ml-2 block text-base font-medium text-[#07074D]"
              >
                Do you have any relatives or friends in Canada who can sponsor
                you?
                <span className="text-red-400">*</span>
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
            <div className="mb-3 w-full">
              <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                Have you ever been refused visa for any country?
                <span className="text-red-400">*</span>
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
            {formData.visaRefused === "yes" && (
              <div className="mb-3 w-full">
                <label
                  for="visaApplied"
                  className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  Visa Applied Category <span className="text-red-400">*</span>
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
                  Visa Applied for Which Country{" "}
                  <span className="text-red-400">*</span>
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
                  Visa Applied Date <span className="text-red-400">*</span>
                </label>
                <DatePicker
                  selected={formData.visaAppliedDate}
                  onChange={handleVisaDate}
                  maxDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Date"
                  className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {errors.visaAppliedDate && (
                  <p className="text-red-500">{errors.visaAppliedDate}</p>
                )}
              </div>
            )}
          </div>
          <div className="w-full flex items-center justify-center mb-10 mt-6">
            <button
              className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
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

import React, { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import Select from "react-select";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";
const PriorHistoryForm = ({
  selectForm,
  formData,
  setFormData,
  setSelectForm,
  scrollRef,
  handleInputChange,
  priorHistoryErrors,
  handleVisaCountryChange,
  validatePriorHistory,
  setSubmitAttemptedPriorHistory,
}) => {
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
  const options = useMemo(() => countryList().getData(), []);

  const handleStartDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      gapStartDate: date,
    }));
  };

  const handleEndDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      gapEndDate: date,
    }));
  };
  const handleVisaDate = (date) => {
    setFormData((prev) => ({
      ...prev,
      visaAppliedDate: date,
    }));
  };
  return (
    <div className="w-full h-fit">
      <div
        id="prior-history"
        onClick={() => {
          if (
            formData.gapsAfterStudy ||
            formData.counselledBefore ||
            formData.collegeAbroad ||
            formData.visaRefused ||
            formData.intrestedCollege ||
            formData.fieldOfStudy
          )
            setSelectForm("prior-history");
        }}
        className="text-base md:text-xl font-semibold tracking-[5px] md:tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
      >
        Prior History
        <span className="text-black">
          {selectForm === "prior-history" ? (
            <GoArrowDownRight size={30} />
          ) : (
            <GoArrowUpRight size={30} />
          )}
        </span>
      </div>
      {selectForm === "prior-history" && (
        <form action="post" className="w-full mt-6">
          <div
            className="w-full md:grid grid-cols-2"
            style={{ columnGap: "10%" }}
          >
            <div className="mb-3 w-full">
              <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                Do you have any gaps after your studies?
                <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="studygap1"
                    type="radio"
                    name="gapsAfterStudy"
                    className="hidden"
                    value="yes"
                    checked={formData.gapsAfterStudy === "yes"}
                    onChange={handleInputChange}
                  />
                  <label
                    for="studygap1"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Yes
                  </label>
                </div>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="studygap2"
                    type="radio"
                    name="gapsAfterStudy"
                    className="hidden"
                    value="no"
                    checked={formData.gapsAfterStudy === "no"}
                    onChange={handleInputChange}
                  />
                  <label
                    for="studygap2"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    No
                  </label>
                </div>
              </div>
              {priorHistoryErrors.gapsAfterStudy && (
                <p className="text-red-500">
                  {priorHistoryErrors.gapsAfterStudy}
                </p>
              )}
            </div>
            {formData.gapsAfterStudy === "yes" && (
              <div className="w-full mb-3 md:flex md:gap-[10%] justify-between">
                <div className="w-full block">
                  <label
                    htmlFor="gapStartDate"
                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                  >
                    Gap Start Date
                    <span className="text-red-400">*</span>
                  </label>
                  <DatePicker
                    selected={formData.gapStartDate}
                    onChange={handleStartDateChange}
                    maxDate={new Date()}
                    onFocus={(e) => e.target.blur()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select Start Date"
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {priorHistoryErrors.gapStartDate && (
                    <p className="text-red-500">
                      {priorHistoryErrors.gapStartDate}
                    </p>
                  )}
                </div>
                <div className="w-full block">
                  <label
                    htmlFor="gapEndDate"
                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                  >
                    Gap End Date
                    <span className="text-red-400">*</span>
                  </label>
                  <DatePicker
                    selected={formData.gapEndDate}
                    onChange={handleEndDateChange}
                    dateFormat="dd/MM/yyyy"
                    onFocus={(e) => e.target.blur()}
                    disabled={!formData.gapStartDate}
                    minDate={formData.gapStartDate}
                    placeholderText="Select End Date"
                    className={`w-full rounded-md border ${
                      !formData.gapStartDate
                        ? " border-gray-300 cursor-not-allowed"
                        : " border-black cursor-pointer"
                    } bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md`}
                  />
                  {priorHistoryErrors.gapEndDate && (
                    <p className="text-red-500">
                      {priorHistoryErrors.gapEndDate}
                    </p>
                  )}
                </div>
              </div>
            )}
            <div className="mb-3 w-full">
              <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                Have you been counselled for study abroad before?
                <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="counselled1"
                    type="radio"
                    name="counselledBefore"
                    className="hidden"
                    checked={formData.counselledBefore === "yes"}
                    value="yes"
                    onChange={handleInputChange}
                  />
                  <label
                    for="counselled1"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Yes
                  </label>
                </div>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="counselled2"
                    type="radio"
                    name="counselledBefore"
                    className="hidden"
                    checked={formData.counselledBefore === "no"}
                    value="no"
                    onChange={handleInputChange}
                  />
                  <label
                    for="counselled2"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    No
                  </label>
                </div>
              </div>
              {priorHistoryErrors.counselledBefore && (
                <p className="text-red-500">
                  {priorHistoryErrors.counselledBefore}
                </p>
              )}
            </div>
            <div className="mb-3 w-full">
              <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                Have you taken admission in any college/university abroad ?
                <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center justify-start gap-6">
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="admisions1"
                    type="radio"
                    name="collegeAbroad"
                    className="hidden"
                    checked={formData.collegeAbroad === "yes"}
                    value="yes"
                    onChange={handleInputChange}
                  />
                  <label
                    for="admisions1"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Yes
                  </label>
                </div>
                <div className="flex items-center mr-4 mb-4">
                  <input
                    id="admisions2"
                    type="radio"
                    name="collegeAbroad"
                    className="hidden"
                    checked={formData.collegeAbroad === "no"}
                    value="no"
                    onChange={handleInputChange}
                  />
                  <label
                    for="admisions2"
                    className="flex items-center cursor-pointer"
                  >
                    <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    No
                  </label>
                </div>
              </div>
              {priorHistoryErrors.collegeAbroad && (
                <p className="text-red-500">
                  {priorHistoryErrors.collegeAbroad}
                </p>
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
              {priorHistoryErrors.visaRefused && (
                <p className="text-red-500">{priorHistoryErrors.visaRefused}</p>
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
                {priorHistoryErrors.visaApplied && (
                  <p className="text-red-500">
                    {priorHistoryErrors.visaApplied}
                  </p>
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

                {priorHistoryErrors.visaAppliedCountry && (
                  <p className="text-red-500">
                    {priorHistoryErrors.visaAppliedCountry}
                  </p>
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
                  onFocus={(e) => e.target.blur()}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Applied Visa Date"
                  className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {priorHistoryErrors.visaAppliedDate && (
                  <p className="text-red-500">
                    {priorHistoryErrors.visaAppliedDate}
                  </p>
                )}
              </div>
            )}
            <div className="flex flex-col items-start justify-end">
              <label
                for="intrestedCollege"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
              >
                Please suggest the name of the university or College that you
                may be interested in Studying in Canada{" "}
                <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="intrestedCollege"
                onChange={handleInputChange}
                value={formData.intrestedCollege}
                id="intrestedCollege"
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
              {priorHistoryErrors.intrestedCollege && (
                <p className="text-red-500">
                  {priorHistoryErrors.intrestedCollege}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start justify-end">
              <label
                for="fieldOfStudy"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
              >
                Course or field of study <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fieldOfStudy"
                onChange={handleInputChange}
                id="fieldOfStudy"
                value={formData.fieldOfStudy}
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
              {priorHistoryErrors.fieldOfStudy && (
                <p className="text-red-500">
                  {priorHistoryErrors.fieldOfStudy}
                </p>
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-center mb-10 mt-10">
            <button
              className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
              type="button"
              onClick={() => {
                setSubmitAttemptedPriorHistory(true);
                // setSelectForm('priorhistory');
                if (validatePriorHistory(true)) {
                  setSelectForm("other");
                }
                const element = scrollRef.current;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                  top: elementPosition + 140, // Adjust the offset here (100px)
                  behavior: "smooth",
                });
              }}
            >
              Next
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PriorHistoryForm;

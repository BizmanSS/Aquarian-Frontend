import React, { useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import Select from "react-select";
import countryList from "react-select-country-list";
import { toast } from "react-toastify";
import './PriorHistoryForm.css';

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
        className="PI-heading-container"
      >

<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M11.8959 3.93195H1.10176C0.875857 3.93195 0.65921 4.02169 0.499474 4.18143C0.339739 4.34116 0.25 4.55781 0.25 4.78371C0.25 5.00961 0.339739 5.22626 0.499474 5.38599C0.65921 5.54573 0.875857 5.63547 1.10176 5.63547H11.8959C12.1218 5.63547 12.3385 5.54573 12.4982 5.38599C12.6579 5.22626 12.7477 5.00961 12.7477 4.78371C12.7477 4.55781 12.6579 4.34116 12.4982 4.18143C12.3385 4.02169 12.1218 3.93195 11.8959 3.93195ZM11.8959 0.523071H1.10176C0.875857 0.523071 0.65921 0.61281 0.499474 0.772545C0.339739 0.932281 0.25 1.14893 0.25 1.37483C0.25 1.60073 0.339739 1.81738 0.499474 1.97711C0.65921 2.13685 0.875857 2.22659 1.10176 2.22659H11.8959C12.1218 2.22659 12.3385 2.13685 12.4982 1.97711C12.6579 1.81738 12.7477 1.60073 12.7477 1.37483C12.7477 1.14893 12.6579 0.932281 12.4982 0.772545C12.3385 0.61281 12.1218 0.523071 11.8959 0.523071ZM11.8959 7.34083H1.10176C0.875857 7.34083 0.65921 7.43057 0.499474 7.59031C0.339739 7.75004 0.25 7.96669 0.25 8.19259C0.25 8.41849 0.339739 8.63514 0.499474 8.79487C0.65921 8.95461 0.875857 9.04435 1.10176 9.04435H11.8959C12.1218 9.04435 12.3385 8.95461 12.4982 8.79487C12.6579 8.63514 12.7477 8.41849 12.7477 8.19259C12.7477 7.96669 12.6579 7.75004 12.4982 7.59031C12.3385 7.43057 12.1218 7.34083 11.8959 7.34083Z" fill="#222221"></path></svg>

        Prior History
      
      </div>
      {selectForm === "prior-history" && (
        <form action="post" className="w-full mt-6 PI-form">
          <div
            className="w-full p-8"
          >
           <div className="prior-history-container">
           <div className="form-input">
              <label
                for="intrestedCollege"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
              >
                 *Name of the interested College / University{" "}
                
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
            <div className="form-input">
              <label
                for="fieldOfStudy"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
              >
                *Course or field of study 
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

            <div className="mb-3 w-full mt-5">
              <label className="mb-4 block text-base font-medium text-[#07074D]">
                *Do you have any gaps after your studies?
               
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
              <div className="gap-date mb-5 mt-5">
                <div className="w-full block form-input">
                  <label
                    htmlFor="gapStartDate"
                    className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                  >
                    *Gap Start Date
                    
                  </label>
                  <DatePicker
                    selected={formData.gapStartDate}
                    onChange={handleStartDateChange}
                    maxDate={new Date()}
                    onFocus={(e) => e.target.blur()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select Start Date"
                    shouldCloseOnSelect
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {priorHistoryErrors.gapStartDate && (
                    <p className="text-red-500">
                      {priorHistoryErrors.gapStartDate}
                    </p>
                  )}
                </div>
                <div className="w-full block form-input">
                  <label
                    htmlFor="gapEndDate"
                    className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                  >
                    *Gap End Date
                    
                  </label>
                  <DatePicker
                    selected={formData.gapEndDate}
                    onChange={handleEndDateChange}
                    dateFormat="dd/MM/yyyy"
                    onFocus={(e) => e.target.blur()}
                    disabled={!formData.gapStartDate}
                    minDate={formData.gapStartDate}
                    placeholderText="Select End Date"
                    shouldCloseOnSelect
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
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
              <label className="mb-4 block text-base font-medium text-[#07074D]">
                *Have you been counselled for study abroad before?
                
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
              <label className="mb-4 block text-base font-medium text-[#07074D]">
                *Have you taken admission in any college/university abroad ?
          
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
              <label className="mb-4 block text-base font-medium text-[#07074D]">
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
              {priorHistoryErrors.visaRefused && (
                <p className="text-red-500">{priorHistoryErrors.visaRefused}</p>
              )}
            </div>
            {formData.visaRefused === "yes" && (

              <div className="visa-refused-country">
              <div className="mb-3 w-full form-input">
                <label
                  for="visaApplied"
                  className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled "
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
                {priorHistoryErrors.visaApplied && (
                  <p className="text-red-500">
                    {priorHistoryErrors.visaApplied}
                  </p>
                )}
              </div>

              <div className="mb-3 w-full form-input">
                <label
                  for="visaAppliedCountry"
                  className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled special-field-label-adjust"
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

                {priorHistoryErrors.visaAppliedCountry && (
                  <p className="text-red-500">
                    {priorHistoryErrors.visaAppliedCountry}
                  </p>
                )}
              </div>

              <div className="mb-3 w-full form-input">
                <label
                  for="visaAppliedDate"
                  className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                >
                  *Visa Applied Date
                </label>
                <DatePicker
                  selected={formData.visaAppliedDate}
                  onChange={handleVisaDate}
                  maxDate={new Date()}
                  onFocus={(e) => e.target.blur()}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select Applied Visa Date"
                  shouldCloseOnSelect
                  showYearDropdown
                  showMonthDropdown
                  dropdownMode="select"
                  className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {priorHistoryErrors.visaAppliedDate && (
                  <p className="text-red-500">
                    {priorHistoryErrors.visaAppliedDate}
                  </p>
                )}
              </div>   

              </div>
            )}
           
      
          
          </div>

          <div className="w-full flex items-center justify-end mb-10 mt-10">
            <button
              className="assessment-next-step-btn"
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

import React, { useMemo } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { educationOptions } from "../data/formSelectOptions";
import countryList from "react-select-country-list";
import Select from "react-select";

const EducationDetails = ({
  formData,
  selectForm,
  handleInputChange,
  eduErrors,
  validateEducation,
  setSelectForm,
  setFormData,
  setSubmitAttemptedEducation,
  handleSelectChange,
  scrollRef,
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

  const countries = useMemo(() => countryList().getData(), []);

  return (
    <div className="w-full h-fit">
      <div className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between">
        Education & Training
        <span className="text-black">
          {selectForm === "Education" ? (
            <GoArrowDownRight size={30} />
          ) : (
            <GoArrowUpRight size={30} />
          )}
        </span>
      </div>
      {selectForm === "Education" && (
        <form action="post" className="w-full mt-6">
          <div className="mb-3">
            <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
              Have you gained any post secondary education or training?
              <span className="text-red-400">*</span>
            </label>
            <div className="flex items-center justify-start gap-6">
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="educationqualification1"
                  type="radio"
                  name="educationqualification1"
                  className="hidden"
                  value="yes"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFormData({
                      ...formData,
                      educationqualification1: e.target.value,
                    });
                  }}
                />
                <label
                  for="educationqualification1"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                  Yes
                </label>
              </div>
              <div className="flex items-center mr-4 mb-4">
                <input
                  id="educationqualification2"
                  type="radio"
                  name="educationqualification1"
                  className="hidden"
                  value="no"
                  onChange={(e) => {
                    handleInputChange(e);
                    setFormData({
                      ...formData,
                      educationqualification1: e.target.value,
                      passingyear: "",
                      board: "",
                      stream: "",
                      country: "",
                    });
                  }}
                />
                <label
                  for="educationqualification2"
                  className="flex items-center cursor-pointer"
                >
                  <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                  NO
                </label>
              </div>
            </div>
            {eduErrors.educationqualification1 && (
              <p className="text-red-500">
                {eduErrors.educationqualification1}
              </p>
            )}
          </div>

          {formData.educationqualification1 === "yes" && (
            <>
              <label
                for="educationqualification"
                className="font-semibold text-lg mb-4"
              >
                {" "}
                Educational Qualifications *
              </label>

              <select
                id="educationqualification"
                name="educationqualification"
                onChange={handleInputChange}
                className="w-full block mb-4 lg:w-[45%] rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              >
                <option disabled selected>
                  Select
                </option>
                {educationOptions.map((item, id) => (
                  <option key={id} className="text-black" value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
              {eduErrors.educationqualification && (
                <p className="text-red-500 mb-4 -mt-2">
                  {eduErrors.educationqualification}
                </p>
              )}
            </>
          )}

          {formData.educationqualification1 === "yes" && (
            <div className="flex items-center justify-between w-full">
              <div className="w-[45%] flex flex-col items-center justify-center">
                <div className="mb-3 w-full">
                  <label
                    for="passingyear"
                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                  >
                    Year of Passing<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="passingyear"
                    name="passingyear"
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {eduErrors.passingyear && (
                    <p className="text-red-500">{eduErrors.passingyear}</p>
                  )}
                </div>

                <div className="w-full mb-3">
                  <label
                    for="board"
                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                  >
                    Board / University
                    <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="board"
                    name="board"
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {eduErrors.board && (
                    <p className="text-red-500">{eduErrors.board}</p>
                  )}
                </div>
              </div>
              <div className="w-[45%] flex flex-col items-center justify-center">
                <div className="w-full mb-3">
                  <label
                    for="stream"
                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                  >
                    Field / Stream<span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="stream"
                    name="stream"
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {eduErrors.stream && (
                    <p className="text-red-500">{eduErrors.stream}</p>
                  )}
                </div>

                <div className="w-full mb-3">
                  <label
                    for="country"
                    className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                  >
                    Country<span className="text-red-400">*</span>
                  </label>
                  {/* <input
                          type='text'
                          id='country'
                          name='country'
                          onChange={handleInputChange}
                          className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        /> */}
                  <Select
                    options={countries}
                    value={countries.find(
                      (option) => option.value === formData.country
                    )}
                    onChange={(selectedOption) =>
                      handleSelectChange(selectedOption, "country")
                    }
                    styles={customStyles}
                    className="w-full"
                  />
                  {eduErrors.country && (
                    <p className="text-red-500">{eduErrors.country}</p>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="w-full flex items-center justify-center mb-10 mt-10">
            <button
              className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
              type="button"
              onClick={() => {
                setSubmitAttemptedEducation(true);
                // setSelectForm('work-experience');
                // if (validateEducation(true)) {
                setSelectForm("work-experience");
                // }
                const element = scrollRef.current;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                  top: elementPosition, // Adjust the offset here (100px)
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

export default EducationDetails;

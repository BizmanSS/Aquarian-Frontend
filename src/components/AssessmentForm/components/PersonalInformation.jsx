import React, { useMemo } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import countryList from "react-select-country-list";
import { maritalStatusOptions, ageOptions } from "../data/formSelectOptions";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";

const PersonalInformation = ({
  formData,
  selectForm,
  handleInputChange,
  errors,
  setSubmitAttempted,
  validate,
  setSelectForm,
  handleSelectChange,
  handlePhoneChange,
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

  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="w-full h-fit">
      <div className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between">
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
        <form action="post" className="w-full mt-6">
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
                onChange={handleInputChange}
                placeholder="Enter your first name"
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
                onChange={handleInputChange}
                placeholder="Enter your last name"
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
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-3 w-full">
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
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
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
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              >
                <option disabled selected>
                  Select
                </option>
                {ageOptions.map((option) => (
                  <option
                    key={option.value}
                    className="text-black"
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.age && <p className="text-red-500">{errors.age}</p>}
            </div>
            <div className="mb-3 w-full">
              <label
                for="nationality"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
              >
                Nationality<span className="text-red-400">*</span>
              </label>
              <Select
                options={options}
                value={options.find(
                  (option) => option.label === formData.nationality
                )}
                onChange={handleSelectChange}
                styles={customStyles}
                className="w-full"
              />
              {errors.nationality && (
                <p className="text-red-500">{errors.nationality}</p>
              )}
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
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              >
                <option disabled selected>
                  Select
                </option>
                {maritalStatusOptions.map((option) => (
                  <option
                    key={option.value}
                    className="text-black"
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.maritalStatus && (
                <p className="text-red-500">{errors.maritalStatus}</p>
              )}
            </div>
            {formData.maritalStatus === "married" && (
              <div className="mb-3">
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
                  <p className="text-red-500">{errors.spouseTravelling}</p>
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
              <input
                type="text"
                name="region"
                id="live"
                onChange={handleInputChange}
                placeholder="Enter your region"
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
              {errors.region && <p className="text-red-500">{errors.region}</p>}
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-5 mb-10">
            <button
              className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
              type="button"
              onClick={() => {
                setSubmitAttempted(true);
                if (validate(true)) {
                  setSelectForm("Education");
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
    </div>
  );
};

export default PersonalInformation;

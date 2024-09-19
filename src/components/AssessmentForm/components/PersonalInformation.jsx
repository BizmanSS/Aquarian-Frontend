import React, { useMemo } from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import countryList from "react-select-country-list";
import { maritalStatusOptions, ageOptions } from "../data/formSelectOptions";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";

import "./PersonalInformation.css";

const PersonalInformation = ({
  selectForm,
  formData,
  setFormData,
  setSelectForm,
  nextform,
  scrollRef,
  handleInputChange,
  errors,
  setSubmitAttempted,
  validate,
  handleSelectChange,
  handleRegionChange,
  handlePhoneChange,
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
  const handleNameChange = (event) => {
    if (/^[a-zA-Z]*$/.test(event.target.value)) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="w-full h-fit">
      <div
        onClick={() => {
          if (
            formData.firstname ||
            formData.lastname ||
            formData.email ||
            formData.phone ||
            formData.maritalStatus ||
            formData.age ||
            formData.nationality ||
            formData.region
          )
            setSelectForm("PersonalInformation");
        }}
        // id='personalInformation'
        id="PersonalInformation"
        className="PI-heading-container"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M12.4995 0C5.60758 0 0 5.60758 0 12.4995C0 19.3924 5.60758 24.999 12.4995 24.999C19.3915 24.999 24.999 19.3915 24.999 12.4995C25 5.60758 19.3924 0 12.4995 0ZM12.4995 23.2955C9.93319 23.2975 7.45091 22.3809 5.50183 20.7114C6.59873 18.4907 8.95116 16.6343 11.7699 16.2661C12.0083 16.3094 12.2505 16.3382 12.4995 16.3382C12.8216 16.3382 13.1359 16.2988 13.4397 16.2267C16.194 16.4911 18.5484 18.3801 19.7914 20.4432C17.8063 22.2776 15.2025 23.2962 12.4995 23.2955ZM9.65872 11.2238C9.65872 9.34147 10.9306 7.81484 12.4995 7.81484C14.0684 7.81484 15.3403 9.34147 15.3403 11.2238C15.3403 12.7937 14.4549 14.1127 13.2513 14.5087C13.0956 14.5001 12.9417 14.4886 12.7841 14.4886C12.4726 14.4886 12.163 14.5107 11.8545 14.5414C10.597 14.1905 9.65872 12.8398 9.65872 11.2238ZM20.9844 19.1598C19.8039 17.4101 17.91 15.745 15.5932 14.9596C16.4834 14.0252 17.0448 12.6985 17.0448 11.2238C17.0448 8.40415 15.0058 6.11036 12.4995 6.11036C9.99327 6.11036 7.95424 8.40415 7.95424 11.2238C7.95424 12.76 8.56278 14.1377 9.51932 15.0759C7.30533 15.8787 5.38358 17.4495 4.23669 19.4405C2.59869 17.4989 1.70155 15.0398 1.70448 12.4995C1.70448 6.5372 6.53817 1.70448 12.4995 1.70448C18.4609 1.70448 23.2946 6.53817 23.2946 12.4995C23.2965 14.9164 22.4826 17.2632 20.9844 19.1598Z"
            fill="black"
          ></path>
        </svg>
        Personal Information{" "}
      </div>
      {selectForm === "PersonalInformation" && (
        <form action="post" className="w-full PI-form">
          <div className=" PI-form-layout-study">
            <div className="mb-3 w-full form-input">
              <label
                for="firstname"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
              >
                *First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={handleNameChange}
                value={formData.firstname}
                maxLength={50}
                placeholder="Enter your first name"
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
              {errors.firstname && (
                <p className="text-red-500">{errors.firstname}</p>
              )}
            </div>
            <div className="mb-3 w-full form-input">
              <label
                for="lastname"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
              >
                *Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                onChange={handleNameChange}
                value={formData.lastname}
                placeholder="Enter your last name"
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
              {errors.lastname && (
                <p className="text-red-500">{errors.lastname}</p>
              )}
            </div>
            <div className="mb-3 w-full form-input">
              <label
                for="email"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
              >
                *Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-3 w-full form-input">
              <label
                for="phone"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled special-field-label-adjust"
              >
                *Phone Number
              </label>
              <div className="flex">
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  enableSearch={true} // Allows searching within the dropdown
                  disableDropdown={false}
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
            <div className="mb-3 w-full form-input">
              <label
                for="nationality"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled special-field-label-adjust"
              >
                *Nationality
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
            <div className="mb-3 w-full form-input">
              <label
                for="age"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
              >
                *Age
              </label>
              <select
                id="age"
                onChange={handleInputChange}
                name="age"
                value={formData.age}
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              >
                <option value="" selected>
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
            <div className="mb-3 w-full form-input">
              <label
                for="martial-status"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
              >
                *Martial Status
              </label>

              <select
                id="martial-status"
                onChange={handleInputChange}
                value={formData.maritalStatus}
                name="maritalStatus"
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              >
                <option value="" selected>
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

            <div className="mb-3 w-full form-input">
              <label
                for="live"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled special-field-label-adjust"
              >
                *Where do you currently live ?
              </label>
              <Select
                options={options}
                value={options.find(
                  (option) => option.label === formData.region
                )}
                onChange={handleRegionChange}
                styles={customStyles}
                className="w-full"
              />
              {errors.region && <p className="text-red-500">{errors.region}</p>}
            </div>

            {formData.maritalStatus === "married" && (
              <div className="mb-3">
                <label
                  for="spouseStatus"
                  className="mb-4 block text-base font-medium text-[#07074D]"
                >
                  *Will your spouse be travelling with you to Canada ?
                </label>
                <div className="flex items-center justify-start gap-6">
                  <div className="flex items-center mr-4 mb-4">
                    <input
                      id="wpspouse3"
                      type="radio"
                      name="spouseTravelling"
                      className="hidden"
                      value="yes"
                      checked={formData.spouseTravelling === "yes"}
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
                      checked={formData.spouseTravelling === "no"}
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
          </div>

          <div className="w-full flex items-center justify-end mt-5 mb-10">
            <button
              className="assessment-next-step-btn"
              type="button"
              onClick={() => {
                setSubmitAttempted(true);
                if (validate(true)) {
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
    </div>
  );
};

export default PersonalInformation;

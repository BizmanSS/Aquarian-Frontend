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
          <div className="flex items-center justify-between w-full">
            <div className="w-[45%] flex flex-col items-center justify-center">
              <div class="mb-3 w-full">
                <label
                  for="firstname"
                  class="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  First Name<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  class="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {errors.firstname && (
                  <p className="text-red-500">{errors.firstname}</p>
                )}
              </div>

              <div class="w-full mb-3">
                <label
                  for="email"
                  class="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  Email Address<span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  class="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div class="mb-3 w-full">
                <label
                  for="phone"
                  class="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
              <div class="mb-3 w-full">
                <label
                  for="martial-status"
                  class="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
            </div>
            <div className="w-[45%] flex flex-col items-center justify-center">
              <div class="w-full mb-3">
                <label
                  for="lastname"
                  class="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  Last Name<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  class="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {errors.lastname && (
                  <p className="text-red-500">{errors.lastname}</p>
                )}
              </div>
              <div class="w-full mb-3">
                <label
                  for="age"
                  class="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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

              <div class="mb-3 w-full">
                <label
                  for="nationality"
                  class="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                >
                  Nationality<span className="text-red-400">*</span>
                </label>
                <Select
                  options={countries}
                  value={countries.find(
                    (option) => option.value === formData.nationality
                  )}
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "nationality")
                  }
                  styles={customStyles}
                  className="w-full"
                />
                {errors.nationality && (
                  <p className="text-red-500">{errors.nationality}</p>
                )}
              </div>
              <div class="mb-3 w-full">
                <label
                  for="live"
                  class="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                  class="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                />
                {errors.region && (
                  <p className="text-red-500">{errors.region}</p>
                )}
              </div>
            </div>
          </div>

          {formData.maritalStatus === "married" && (
            <div class="mb-3">
              <label
                for="spouseStatus"
                class="mb-4 ml-2 block text-base font-medium text-[#07074D]"
              >
                Will your spouse be travelling with you to Canada ?
                <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center justify-start gap-6">
                <div class="flex items-center mr-4 mb-4">
                  <input
                    id="wpspouse3"
                    type="radio"
                    name="spouseTravelling"
                    class="hidden"
                    value="yes"
                    onChange={handleInputChange}
                  />
                  <label
                    for="wpspouse3"
                    class="flex items-center cursor-pointer"
                  >
                    <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    Yes
                  </label>
                </div>

                <div class="flex items-center mr-4 mb-4">
                  <input
                    id="wpspouse4"
                    type="radio"
                    name="spouseTravelling"
                    class="hidden"
                    value="no"
                    onChange={handleInputChange}
                  />
                  <label
                    for="wpspouse4"
                    class="flex items-center cursor-pointer"
                  >
                    <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
                    NO
                  </label>
                </div>
              </div>
              {errors.spouseTravelling && (
                <p className="text-red-500">{errors.spouseTravelling}</p>
              )}
            </div>
          )}

          {/* <div className='mt-4'>
                  <div class='mb-3'>
                    <label
                      for='children'
                      class='mb-4 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Do you have any children under the age of 22 ?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='radio1'
                          type='radio'
                          name='children'
                          class='hidden'
                          value='yes'
                          onChange={handleInputChange}
                        />
                        <label
                          for='radio1'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='radio2'
                          type='radio'
                          name='children'
                          class='hidden'
                          value='no'
                          onChange={(e) => {
                            handleInputChange(e);
                          }}
                        />
                        <label
                          for='radio2'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                  </div>
                  {errors.children && (
                    <p className='text-red-500'>{errors.children}</p>
                  )}
                </div> */}

          <div className="w-full flex items-center justify-center mt-5 mb-10">
            <button
              className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
              type="button"
              onClick={() => {
                setSubmitAttempted(true);
                if (validate(true)) {
                  setSelectForm("Education");
                }
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

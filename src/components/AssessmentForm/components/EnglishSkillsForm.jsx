import React from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import DatePicker from "react-datepicker";
import { Form } from "react-router-dom";
import './EnglishSkillsForm.css';

const EnglishSkillsForm = ({
  selectForm,
  formData,
  handleInputChange,
  languageErrors,
  validateLanguageTests,
  setSelectForm,
  setFormData,
  setSelectedExam,
  selectedExam,
  setSubmitAttemptedTest,
  scrollRef,
}) => {
  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      examPlanningDate: date,
    }));
  };
  return (
    <div className="w-full h-fit">
      <div
        id="english"
        onClick={() => {
          if (formData.englishTest) setSelectForm("english");
        }}
        className="PI-heading-container"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.00056 0.589844C6.2455 0.589876 6.4819 0.6798 6.66493 0.842559C6.84797 1.00532 6.96491 1.22959 6.99356 1.47284L7.00056 1.58984V2.58984H11.0006C11.2554 2.59038 11.5003 2.68815 11.6855 2.8632C11.8706 3.03825 11.982 3.27737 11.9968 3.53174C12.0116 3.7861 11.9287 4.03653 11.7651 4.23187C11.6016 4.42722 11.3696 4.55275 11.1166 4.58284L11.0006 4.58984H9.94556C9.72256 6.62184 8.82956 8.57984 7.40056 10.2778C7.92356 10.7318 8.50256 11.1558 9.13556 11.5438L9.52156 11.7718L11.5886 7.17984C11.6631 7.01421 11.7812 6.87199 11.9305 6.76845C12.0797 6.66491 12.2542 6.60396 12.4355 6.59214C12.6167 6.58032 12.7977 6.61807 12.9591 6.70135C13.1205 6.78463 13.2562 6.91029 13.3516 7.06484L13.4116 7.17984L17.9116 17.1798C18.0164 17.4125 18.0283 17.6765 17.9449 17.9177C17.8614 18.1589 17.6889 18.359 17.4626 18.4772C17.2364 18.5953 16.9735 18.6224 16.7279 18.553C16.4823 18.4836 16.2725 18.3229 16.1416 18.1038L16.0886 17.9998L15.0036 15.5898H9.99656L8.91256 17.9998C8.80836 18.2332 8.61879 18.4177 8.38278 18.5157C8.14677 18.6136 7.88221 18.6175 7.64343 18.5265C7.40464 18.4355 7.20975 18.2566 7.09875 18.0264C6.98776 17.7963 6.96908 17.5323 7.04656 17.2888L7.08856 17.1788L8.69856 13.6028C7.73265 13.0711 6.82734 12.4361 5.99856 11.7088C4.71156 12.8448 3.15056 13.8068 1.37156 14.5188C1.12531 14.6174 0.850001 14.614 0.606204 14.5096C0.362406 14.4051 0.17009 14.2081 0.0715623 13.9618C-0.0269656 13.7156 -0.0236343 13.4403 0.0808234 13.1965C0.185281 12.9527 0.382309 12.7604 0.628562 12.6618C2.18556 12.0388 3.51556 11.2208 4.60056 10.2798C3.75619 9.28702 3.08728 8.1575 2.62256 6.93984C2.52947 6.69147 2.53886 6.41629 2.64866 6.17483C2.75846 5.93338 2.95969 5.74543 3.20806 5.65234C3.45644 5.55925 3.73162 5.56864 3.97307 5.67844C4.21453 5.78825 4.40247 5.98947 4.49556 6.23784C4.85514 7.17811 5.36327 8.05458 6.00056 8.83384C6.98956 7.60684 7.62556 6.25784 7.87756 4.90284L7.92856 4.58984H1.00056C0.745683 4.58956 0.50053 4.49196 0.315194 4.317C0.129858 4.14203 0.0183272 3.90289 0.00339008 3.64845C-0.011547 3.39401 0.0712368 3.14346 0.234827 2.94801C0.398417 2.75256 0.630466 2.62695 0.883562 2.59684L1.00056 2.58984H5.00056V1.58984C5.00056 1.32463 5.10592 1.07027 5.29346 0.882737C5.48099 0.695201 5.73535 0.589844 6.00056 0.589844ZM14.1036 13.5898L12.5006 10.0268L10.8986 13.5898H14.1036Z"
            fill="#222222"
          ></path>
        </svg>
        English Language Skills
      </div>
      {selectForm === "english" && (
        <form action="post" className="w-full PI-form">
          <div className="mt-4">
            <div className="mb-3">
              <div className="mb-3">
                <label className="mb-4 block text-base font-medium text-[#07074D]">
                  *In the last two years have you taken any of the following
                  English language test?
                 
                </label>
                <div className="flex items-center justify-start gap-6">
                  <div className="flex items-center mr-4 mb-4">
                    <input
                      id="englishtest1"
                      type="radio"
                      name="englishtest"
                      className="hidden"
                      value="yes"
                      checked={formData.englishTest === "yes"}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          englishTest: e.target.value,
                        });
                      }}
                    />
                    <label
                      for="englishtest1"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center mr-4 mb-4">
                    <input
                      id="englishtest2"
                      type="radio"
                      name="englishtest"
                      className="hidden"
                      checked={formData.englishTest === "no"}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          englishTest: e.target.value,
                        });
                      }}
                      value="no"
                    />
                    <label
                      for="englishtest2"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      NO
                    </label>
                  </div>
                </div>
                {languageErrors.englishTest && (
                  <p className="text-red-500">{languageErrors.englishTest}</p>
                )}
              </div>
            </div>
          </div>

         
          {formData.englishTest === "yes" && (
             <div className="english-test-yes">
            
                <div className="english-test-heading form-input">
                  <div className="flex items-center justify-center gap-5">
                    <label className="text-[16px] font-semibold styled">
                      English Test
                    </label>
                    <select
                      id="countries"
                      // defaultValue={'IELTS'}
                      name="englishTestType"
                      onChange={(e) => {
                        setSelectedExam(e.target.value);
                        handleInputChange(e);
                      }}
                      value={formData.englishTestType}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option value="" selected>
                        Select
                      </option>
                      <option className="text-black" value="IELTS">
                        IELTS (English)
                      </option>
                      <option className="text-black" value="CELPIP">
                        CELPIP (English)
                      </option>
                      <option className="text-black" value="PTE">
                        PTE (English)
                      </option>
                    </select>
                  </div>
                  {languageErrors.englishTestType && (
                    <p className="text-red-500 -mt-10">
                      {languageErrors.englishTestType}
                    </p>
                  )}
                </div>
                <div className="english-test-options">
                  
                    {selectedExam === "IELTS" && (
                      <>
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="reading"
                            className=" mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Reading
                          </label>

                          <select
                            id="reading"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            name="reading"
                            value={formData.englishTestResult.reading}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  reading: e.target.value,
                                },
                              });
                            }}
                          >
                            <option disabled selected value="">
                              Reading
                            </option>
                            <option className=" text-black" value="10">
                              8-9
                            </option>
                            <option className="text-black" value="9">
                              7-7.5
                            </option>
                            <option className="text-black" value="8">
                              6.5
                            </option>
                            <option className="text-black" value="7">
                              6
                            </option>
                            <option className="text-black" value="6">
                              5-5.5
                            </option>
                            <option className="text-black" value="5">
                              4-4.5
                            </option>
                            <option className="text-black" value="4">
                              3.5
                            </option>
                          </select>

                          {languageErrors.englishReading && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishReading}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "IELTS" && (
                      <>
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="writing"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Writing
                          </label>

                          <select
                            id="writing"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            placeholder="Writing"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  writing: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.writing}
                            name="writing"
                          >
                            <option disabled selected value="">
                              Writing
                            </option>
                            <option className="text-black" value="10">
                              7.5-9
                            </option>
                            <option className="text-black" value="9">
                              7
                            </option>
                            <option className="text-black" value="8">
                              6.5
                            </option>
                            <option className="text-black" value="7">
                              6
                            </option>
                            <option className="text-black" value="6">
                              5.5
                            </option>
                            <option className="text-black" value="5">
                              5
                            </option>
                            <option className="text-black" value="4">
                              4-4.5
                            </option>
                          </select>

                          {languageErrors.englishWriting && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishWriting}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "IELTS" && (
                      <>
                        {" "}
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="listening"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Listening
                          </label>

                          <select
                            id="listening"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  listening: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.listening}
                            name="listening"
                          >
                            <option disabled selected value="">
                              Listening
                            </option>
                            <option className="text-black" value="10">
                              8.5-9
                            </option>
                            <option className="text-black" value="9">
                              8
                            </option>
                            <option className="text-black" value="8">
                              7.5
                            </option>
                            <option className="text-black" value="7">
                              6-7
                            </option>
                            <option className="text-black" value="6">
                              5.5
                            </option>
                            <option className="text-black" value="5">
                              5
                            </option>
                            <option className="text-black" value="4">
                              4.5
                            </option>
                          </select>

                          {languageErrors.englishListening && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishListening}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "IELTS" && (
                      <>
                        {" "}
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="speaking"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Speaking
                          </label>

                          <select
                            id="speaking"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            placeholder="Speaking"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  speaking: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.speaking}
                            name="speaking"
                          >
                            <option disabled selected value="">
                              Speaking
                            </option>
                            <option className="text-black" value="10">
                              7.5-9
                            </option>
                            <option className="text-black" value="9">
                              7
                            </option>
                            <option className="text-black" value="8">
                              6.5
                            </option>
                            <option className="text-black" value="7">
                              6
                            </option>
                            <option className="text-black" value="6">
                              5.5
                            </option>
                            <option className="text-black" value="5">
                              5
                            </option>
                            <option className="text-black" value="4">
                              4-4.5
                            </option>
                          </select>

                          {languageErrors.englishSpeaking && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishSpeaking}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "CELPIP" && (
                      <>
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="reading"
                            className=" mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Reading
                          </label>

                          <select
                            id="reading"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            name="reading"
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  reading: e.target.value,
                                },
                              });
                            }}
                            value={formData.englishTestResult.reading}
                          >
                            <option disabled selected value="">
                              Reading
                            </option>
                            <option className="text-black" value="10">
                              10
                            </option>
                            <option className="text-black" value="9">
                              9
                            </option>
                            <option className="text-black" value="8">
                              8
                            </option>
                            <option className="text-black" value="7">
                              7
                            </option>
                            <option className="text-black" value="6">
                              6
                            </option>
                            <option className="text-black" value="5">
                              5
                            </option>
                            <option className="text-black" value="4">
                              4
                            </option>
                            <option className="text-black" value="3">
                              3
                            </option>
                          </select>

                          {languageErrors.englishReading && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishReading}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "CELPIP" && (
                      <>
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="writing"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Writing
                          </label>

                          <select
                            id="writing"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            placeholder="Writing"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  writing: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.writing}
                            name="writing"
                          >
                            <option disabled selected value="">
                              Writing
                            </option>
                            <option className="text-black" value="10">
                              10
                            </option>
                            <option className="text-black" value="9">
                              9
                            </option>
                            <option className="text-black" value="8">
                              8
                            </option>
                            <option className="text-black" value="7">
                              7
                            </option>
                            <option className="text-black" value="6">
                              6
                            </option>
                            <option className="text-black" value="5">
                              5
                            </option>
                            <option className="text-black" value="4">
                              4
                            </option>
                            <option className="text-black" value="3">
                              3
                            </option>
                          </select>

                          {languageErrors.englishWriting && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishWriting}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "CELPIP" && (
                      <>
                        {" "}
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="listening"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Listening
                          </label>

                          <select
                            id="listening"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            placeholder="Listening"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  listening: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.listening}
                            name="listening"
                          >
                            <option disabled selected value="">
                              Listening
                            </option>
                            <option className="text-black" value="10">
                              10
                            </option>
                            <option className="text-black" value="9">
                              9
                            </option>
                            <option className="text-black" value="8">
                              8
                            </option>
                            <option className="text-black" value="7">
                              7
                            </option>
                            <option className="text-black" value="6">
                              6
                            </option>
                            <option className="text-black" value="5">
                              5
                            </option>
                            <option className="text-black" value="4">
                              4
                            </option>
                            <option className="text-black" value="3">
                              3
                            </option>
                          </select>

                          {languageErrors.englishListening && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishListening}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "CELPIP" && (
                      <>
                        {" "}
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="speaking"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Speaking
                          </label>

                          <select
                            id="speaking"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            placeholder="Speaking"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  speaking: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.speaking}
                            name="speaking"
                          >
                            <option disabled selected value="">
                              Speaking
                            </option>
                            <option className="text-black" value="10">
                              10
                            </option>
                            <option className="text-black" value="9">
                              9
                            </option>
                            <option className="text-black" value="8">
                              8
                            </option>
                            <option className="text-black" value="7">
                              7
                            </option>
                            <option className="text-black" value="6">
                              6
                            </option>
                            <option className="text-black" value="5">
                              5
                            </option>
                            <option className="text-black" value="4">
                              4
                            </option>
                            <option className="text-black" value="3">
                              3
                            </option>
                          </select>

                          {languageErrors.englishSpeaking && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishSpeaking}
                            </p>
                          )}
                        </div>
                      </>
                    )}

                    {selectedExam === "PTE" && (
                      <>
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="reading"
                            className=" mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Reading
                          </label>

                          <select
                            id="reading"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            name="reading"
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  reading: e.target.value,
                                },
                              });
                            }}
                            value={formData.englishTestResult.reading}
                          >
                            <option disabled selected value="">
                              Reading
                            </option>
                            <option className="text-black" value="10">
                              88-90
                            </option>
                            <option className="text-black" value="9">
                              78-87
                            </option>
                            <option className="text-black" value="8">
                              69-77
                            </option>
                            <option className="text-black" value="7">
                              60-68
                            </option>
                            <option className="text-black" value="6">
                              51-59
                            </option>
                            <option className="text-black" value="5">
                              42-50
                            </option>
                            <option className="text-black" value="4">
                              33-41
                            </option>
                            <option className="text-black" value="3">
                              24-32
                            </option>
                          </select>

                          {languageErrors.englishReading && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishReading}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "PTE" && (
                      <>
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="writing"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Writing
                          </label>

                          <select
                            id="writing"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            placeholder="Writing"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  writing: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.writing}
                            name="writing"
                          >
                            <option disabled selected value="">
                              Writing
                            </option>
                            <option className="text-black" value="10">
                              90
                            </option>
                            <option className="text-black" value="9">
                              88-89
                            </option>
                            <option className="text-black" value="8">
                              79-87
                            </option>
                            <option className="text-black" value="7">
                              69-78
                            </option>
                            <option className="text-black" value="6">
                              60-68
                            </option>
                            <option className="text-black" value="5">
                              51-59
                            </option>
                            <option className="text-black" value="4">
                              41-50
                            </option>
                            <option className="text-black" value="3">
                              32-40
                            </option>
                          </select>

                          {languageErrors.englishWriting && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishWriting}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "PTE" && (
                      <>
                        {" "}
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="listening"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Listening
                          </label>

                          <select
                            id="listening"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            placeholder="Listening"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  listening: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.listening}
                            name="listening"
                          >
                            <option disabled selected value="">
                              Listening
                            </option>
                            <option className="text-black" value="10">
                              88-90
                            </option>
                            <option className="text-black" value="9">
                              82-88
                            </option>
                            <option className="text-black" value="8">
                              71-81
                            </option>
                            <option className="text-black" value="7">
                              60-70
                            </option>
                            <option className="text-black" value="6">
                              50-59
                            </option>
                            <option className="text-black" value="5">
                              39-49
                            </option>
                            <option className="text-black" value="4">
                              28-38
                            </option>
                            <option className="text-black" value="3">
                              18-27
                            </option>
                          </select>

                          {languageErrors.englishListening && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishListening}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                    {selectedExam === "PTE" && (
                      <>
                        {" "}
                        <div className="flex flex-col items-start justify-center form-input">
                          <label
                            for="speaking"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D] styled"
                          >
                            Speaking
                          </label>

                          <select
                            id="speaking"
                            className=" rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md border-[rgba(1,153,137,0.7)] placeholder-gray-500 text-md block p-2.5"
                            placeholder="Speaking"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                englishTestResult: {
                                  ...formData.englishTestResult,
                                  speaking: e.target.value,
                                },
                              })
                            }
                            value={formData.englishTestResult.speaking}
                            name="speaking"
                          >
                            <option disabled selected value="">
                              Speaking
                            </option>
                            <option className="text-black" value="10">
                              89-90
                            </option>
                            <option className="text-black" value="9">
                              84-88
                            </option>
                            <option className="text-black" value="8">
                              76-83
                            </option>
                            <option className="text-black" value="7">
                              68-75
                            </option>
                            <option className="text-black" value="6">
                              59-67
                            </option>
                            <option className="text-black" value="5">
                              51-58
                            </option>
                            <option className="text-black" value="4">
                              42-50
                            </option>
                            <option className="text-black" value="3">
                              34-41
                            </option>
                          </select>

                          {languageErrors.englishSpeaking && (
                            <p className="text-red-500 text-[10px]">
                              {languageErrors.englishSpeaking}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              
          
          )}
        


          {formData.englishTest === "no" && (
            <div
              className="english-test-no"
            >
              <div className="mb-3">
                <label className="mb-4 block text-base font-medium text-[#07074D]">
                  *Are you planning to appear for your english exam?
                  
                </label>
                <div className="flex items-center justify-start gap-6">
                  <div className="flex items-center mr-4 mb-4">
                    <input
                      id="englishexam1"
                      type="radio"
                      name="futureTestEnglish"
                      checked={formData.futureTestEnglish === "yes"}
                      className="hidden"
                      onChange={handleInputChange}
                      value="yes"
                    />
                    <label
                      for="englishexam1"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center mr-4 mb-4">
                    <input
                      id="englishexam2"
                      type="radio"
                      name="futureTestEnglish"
                      className="hidden"
                      checked={formData.futureTestEnglish === "no"}
                      onChange={handleInputChange}
                      value="no"
                    />
                    <label
                      for="englishexam2"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      No
                    </label>
                  </div>
                </div>
                {languageErrors.futureTestEnglish && (
                  <p className="text-red-500">
                    {languageErrors.futureTestEnglish}
                  </p>
                )}
              </div>

              <div className="future-test-english-yes">
              {formData.futureTestEnglish === "yes" && (
                <div className="mb-3 w-full form-input">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] styled">
                    Which Exam you are Planning
                    <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="examPlanning"
                    name="examPlanning"
                    onChange={handleInputChange}
                    value={formData.examPlanning}
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  >
                    <option value="" selected>
                      Select
                    </option>
                    <option className="text-black" value="IELTS">
                      IELTS (English)
                    </option>
                    <option className="text-black" value="CELPIP">
                      CELPIP (English)
                    </option>
                    <option className="text-black" value="PTE">
                      PTE (English)
                    </option>
                  </select>
                  {languageErrors.examPlanning && (
                    <p className="text-red-500">
                      {languageErrors.examPlanning}
                    </p>
                  )}
                </div>
              )}
              {formData.futureTestEnglish === "yes" && (
                <div className="mb-3 w-full form-input">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] styled">
                    When you are planning for Exam
                    <span className="text-red-400">*</span>
                  </label>
                  <DatePicker
                    selected={formData.examPlanningDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    onFocus={(e) => e.target.blur()}
                    placeholderText="Select Date"
                    shouldCloseOnSelect
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {languageErrors.examPlanningDate && (
                    <p className="text-red-500">
                      {languageErrors.examPlanningDate}
                    </p>
                  )}
                </div>
              )}
              </div>
             
             <div className="future-test-english-no">
              {formData.futureTestEnglish === "no" && (
                <div className="mb-3">
                  <label className="mb-4 block text-base font-medium text-[#07074D]">
                    *Have you studied in an English Medium School?
                    
                  </label>
                  <div className="flex items-center justify-start gap-6">
                    <div className="flex items-center mr-4 mb-4">
                      <input
                        id="ems1"
                        type="radio"
                        name="englishMedium"
                        className="hidden"
                        value="yes"
                        checked={formData.englishMedium === "yes"}
                        onChange={handleInputChange}
                      />
                      <label
                        for="ems1"
                        className="flex items-center cursor-pointer"
                      >
                        <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center mr-4 mb-4">
                      <input
                        id="ems2"
                        type="radio"
                        name="englishMedium"
                        className="hidden"
                        checked={formData.englishMedium === "no"}
                        value="no"
                        onChange={handleInputChange}
                      />
                      <label
                        for="ems2"
                        className="flex items-center cursor-pointer"
                      >
                        <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                        NO
                      </label>
                    </div>
                  </div>
                  {languageErrors.englishMedium && (
                    <p className="text-red-500">
                      {languageErrors.englishMedium}
                    </p>
                  )}
                </div>
              )}

              <div className="english-medium-yes">
              {formData.englishMedium === "yes" && (
                <div className="mb-3 w-full max-w-md form-input">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] styled">
                    *Please Provide Class 10th Percentage/CGPA
                    
                  </label>
                  <input
                    type="text"
                    name="class10"
                    id="class10"
                    onChange={handleInputChange}
                    value={formData.class10}
                    maxLength={50}
                    placeholder="If Not Applicable write N/A"
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {languageErrors.class10 && (
                    <p className="text-red-500">{languageErrors.class10}</p>
                  )}
                </div>
              )}
              {formData.englishMedium === "yes" && (
                <div className="mb-3 w-full form-input max-w-md ">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] styled">
                    *Please Provide Class 12th Percentage/CGPA
                   
                  </label>
                  <input
                    type="text"
                    name="class12"
                    id="class12"
                    onChange={handleInputChange}
                    value={formData.class12}
                    maxLength={50}
                    placeholder="If Not Applicable write N/A"
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {languageErrors.class12 && (
                    <p className="text-red-500">{languageErrors.class12}</p>
                  )}
                </div>
              )}
              {formData.englishMedium === "yes" && (
                <div className="mb-3 w-full form-input max-w-md ">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D] styled">
                    *Please Provide Graduation Percentage/CGPA
                    
                  </label>
                  <input
                    type="text"
                    name="graduation"
                    id="graduation"
                    onChange={handleInputChange}
                    value={formData.graduation}
                    maxLength={50}
                    placeholder="If Not Applicable write N/A"
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {languageErrors.graduation && (
                    <p className="text-red-500">{languageErrors.graduation}</p>
                  )}
                </div>
              )}
              </div>
              </div>

            

            </div>
          )}

          <div className="w-full flex items-center justify-end mb-10 mt-10">
            <button
              className="assessment-next-step-btn"
              type="button"
              onClick={() => {
                setSubmitAttemptedTest(true);
                // setSelectForm('priorhistory');
                if (validateLanguageTests(true)) {
                  setSelectForm("prior-history");
                }
                const element = scrollRef.current;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({
                  top: elementPosition + 120, // Adjust the offset here (100px)
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

export default EnglishSkillsForm;

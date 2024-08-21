import React from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import DatePicker from "react-datepicker";
import { Form } from "react-router-dom";

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
  handleDateChange,
}) => {
  return (
    <div className="w-full h-fit">
      <div
        id="english"
        onClick={() => {
          if (formData.englishTest) setSelectForm("english");
        }}
        className="text-base md:text-xl font-semibold tracking-[5px] md:tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between"
      >
        English Language Skills
        <span className="text-black">
          {selectForm === "english" ? (
            <GoArrowDownRight size={30} />
          ) : (
            <GoArrowUpRight size={30} />
          )}
        </span>
      </div>
      {selectForm === "english" && (
        <form action="post" className="w-full mt-6">
          <div className="mt-4">
            <div className="mb-3">
              <div className="mb-3">
                <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                  In the last two years have you taken any of the following
                  English language test?
                  <span className="text-red-400">*</span>
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
            <div>
              <div className="font-semibold text-lg mb-4"> Test Results *</div>
              <div className="w-full flex items-center justify-center gap-10">
                <div className="flex w-[40%] flex-col items-start justify-center mt-9 gap-12">
                  <div className="flex items-center justify-center gap-5">
                    <span className="text-[16px] font-semibold">
                      English Test
                    </span>
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
                <div className="flex w-[60%] flex-col items-center justify-center gap-5">
                  <div className="flex items-center justify-center gap-5">
                    {selectedExam === "IELTS" && (
                      <>
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="reading"
                            className=" mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="writing"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="listening"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="speaking"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="reading"
                            className=" mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="writing"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="listening"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="speaking"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="reading"
                            className=" mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="writing"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="listening"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
                        <div className="flex flex-col items-start justify-center">
                          <label
                            for="speaking"
                            className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
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
              </div>
            </div>
          )}
          {formData.englishTest === "no" && (
            <div
              className="w-full md:grid grid-cols-2"
              style={{ columnGap: "10%" }}
            >
              <div className="mb-3">
                <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                  Are you planning to appear for your english exam?
                  <span className="text-red-400">*</span>
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
              {formData.futureTestEnglish === "yes" && (
                <div className="mb-3 w-full">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
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
                <div className="mb-3 w-full">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                    When you are planning for Exam
                    <span className="text-red-400">*</span>
                  </label>
                  <DatePicker
                    selected={formData.examPlanningDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select Start Date"
                    className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                  />
                  {languageErrors.examPlanningDate && (
                    <p className="text-red-500">
                      {languageErrors.examPlanningDate}
                    </p>
                  )}
                </div>
              )}
              {formData.futureTestEnglish === "no" && (
                <div className="mb-3">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                    Have you studied in an English Medium School?
                    <span className="text-red-400">*</span>
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
              {formData.englishMedium === "yes" && (
                <div className="mb-3 w-full">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                    Please Provide Class 10th Percentage/CGPA
                    <span className="text-red-400">*</span>
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
                <div className="mb-3 w-full">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                    Please Provide Class 12th Percentage/CGPA
                    <span className="text-red-400">*</span>
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
                <div className="mb-3 w-full">
                  <label className="mb-4 ml-2 block text-base font-medium text-[#07074D]">
                    Please Provide Graduation Percentage/CGPA
                    <span className="text-red-400">*</span>
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
          )}
          <div className="w-full flex items-center justify-center mb-10 mt-10">
            <button
              className="bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl"
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

import React from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

const EnglishSkillsForm = ({
  selectForm,
  formData,
  handleInputChange,
  languageErrors,
  validateLanguageTests,
  setSelectForm,
  setFormData,
  setSubmitAttemptedTest,
}) => {
  return (
    <div className="w-full h-fit">
      <div className="text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between">
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
            <div className="">
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
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                    >
                      <option disabled selected>
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
                    <div className="flex flex-col items-start justify-center">
                      <label
                        for="reading"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Reading
                      </label>
                      <input
                        type="text"
                        name="reading"
                        id="reading"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            englishTestResult: {
                              ...formData.englishTestResult,
                              reading: e.target.value,
                            },
                          })
                        }
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {languageErrors.englishReading && (
                        <p className="text-red-500 text-[10px]">
                          {languageErrors.englishReading}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <label
                        for="writing"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Writing
                      </label>
                      <input
                        type="text"
                        name="writing"
                        id="writing"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            englishTestResult: {
                              ...formData.englishTestResult,
                              writing: e.target.value,
                            },
                          })
                        }
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {languageErrors.englishWriting && (
                        <p className="text-red-500 text-[10px]">
                          {languageErrors.englishWriting}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <label
                        for="listening"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Listening
                      </label>
                      <input
                        type="text"
                        name="listening"
                        id="listening"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            englishTestResult: {
                              ...formData.englishTestResult,
                              listening: e.target.value,
                            },
                          })
                        }
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {languageErrors.englishListening && (
                        <p className="text-red-500 text-[10px]">
                          {languageErrors.englishListening}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <label
                        for="speaking"
                        className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
                      >
                        Speaking
                      </label>
                      <input
                        type="text"
                        name="speaking"
                        id="speaking"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            englishTestResult: {
                              ...formData.englishTestResult,
                              speaking: e.target.value,
                            },
                          })
                        }
                        className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
                      />
                      {languageErrors.englishSpeaking && (
                        <p className="text-red-500 text-[10px]">
                          {languageErrors.englishSpeaking}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {formData.englishTest === "no" && (
            <div className="">
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
                      onChange={handleInputChange}
                      value="no"
                    />
                    <label
                      for="englishexam2"
                      className="flex items-center cursor-pointer"
                    >
                      <span className="w-4 h-4 inline-block mr-1 border border-grey"></span>
                      NO
                    </label>
                  </div>
                </div>
                {languageErrors.futureTestEnglish && (
                  <p className="text-red-500">
                    {languageErrors.futureTestEnglish}
                  </p>
                )}
              </div>
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
                  <p className="text-red-500">{languageErrors.englishMedium}</p>
                )}
              </div>
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
                  setSelectForm("priorhistory");
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

export default EnglishSkillsForm;

import React from 'react'
import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go';

const AdditionalSectionForm = ({
    handleInputChange,
    selectForm,
    othersErrors,
    setSubmitAttemptedOther,
    validateOthers,
    handleFormSubmit,
    setSelectForm,
    setFormData,
}) => {

  return (
    <div className='w-full h-fit'>
        <div className='text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between'>
              Other
              <span className='text-black'>
                {selectForm === 'other' ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === 'other' && (
              <form action='post' className='w-full mt-6'>
                <div className='mt-4'>
                  <div className='flex flex-col items-start justify-center'>
                    <label
                      for='comments'
                      class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Do you want to provide any other information ?
                    </label>
                    <input
                      type='text'
                      name='otherInformation'
                      id='comments'
                      onChange={handleInputChange}
                      class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                    />
                  </div>
                  {othersErrors.otherInformation && (
                    <p className='text-red-500'>
                      {othersErrors.otherInformation}
                    </p>
                  )}
                </div>

                <div className='w-full flex items-center justify-center mb-10 mt-10'>
                  <button
                    className='bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl'
                    type='button'
                    onClick={() => {
                      setSubmitAttemptedOther(true);
                      if (validateOthers(true)) {
                        handleFormSubmit();
                        setSelectForm('PersonalInformation');
                        setFormData({
                          firstname: '',
                          lastname: '',
                          email: '',
                          phone: '',
                          maritalStatus: '',
                          age: '',
                          nationality: '',
                          region: '',
                          spouseTravelling: '',
                          children: '',
                          educationqualification: '',
                          educationqualification1: '',
                          passingyear: '',
                          board: '',
                          stream: '',
                          country: '',
                          workexperience: '',
                          workexperience1: '',
                          occupation: '',
                          employmentHistory: '',
                          workCountry: '',
                          englishTest: '',
                          englishTestType: '',
                          englishMedium: '',
                          englishTestResult: {
                            reading: '',
                            writing: '',
                            listening: '',
                            speaking: '',
                          },
                          futureTestEnglish: '',
                          gapsAfterStudy: '',
                          counselledBefore: '',
                          visaRefused: '',
                          collegeAbroad: '',
                          fieldOfStudy: '',
                          intrestedCollege: '',
                          otherInformation: '',
                        });
                        window.scrollTo(0, 0);
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
    </div>
  )
}

export default AdditionalSectionForm
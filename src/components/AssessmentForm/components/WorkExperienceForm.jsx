import React from 'react'
import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go';

const WorkExperienceForm = ({
    selectForm,
    formData,
    handleInputChange,
    workErrors,
    validateWork,
    setSelectForm,
    setFormData,
    setSubmitAttemptedWork,
}) => {

  return (
    <div className='w-full h-fit'>
        <div onClick={() => setSelectForm("work-experience")} className='text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between'>
              Work Experience
              <span className='text-black'>
                {selectForm === 'work-experience' ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === 'work-experience' && (
              <form action='post' className='w-full mt-6'>
                <div className='mt-4'>
                  <div class='mb-3'>
                    <label
                      for='workexperience'
                      class='mb-4 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Do you have work experience?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='workexperience001'
                          type='radio'
                          name='workexperience'
                          class='hidden'
                          value='yes'
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              workexperience: e.target.value,
                            })
                          }
                        />
                        <label
                          for='workexperience001'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='workexperience002'
                          type='radio'
                          name='workexperience'
                          class='hidden'
                          value='no'
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              workexperience: e.target.value,
                              workexperience1: '',
                              occupation: '',
                              employmentHistory: '',
                              workCountry: '',
                            });
                          }}
                        />
                        <label
                          for='workexperience002'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {workErrors.workexperience && (
                      <p className='text-red-500'>
                        {workErrors.workexperience}
                      </p>
                    )}
                  </div>
                </div>
                {formData.workexperience === 'yes' && (
                  <>
                    <div className='font-semibold text-lg mb-4'>
                      {' '}
                      Work Experience *
                    </div>

                    <div className='flex items-center justify-between w-full'>
                      <div className='w-[45%] flex flex-col items-center justify-center'>
                        <div class='mb-3 w-full'>
                          <label
                            for='workexperience'
                            class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                          >
                            Total Number of Work Experience
                            <span className='text-red-400'>*</span>
                          </label>
                          <input
                            type='text'
                            id='workexperience'
                            name='workexperience1'
                            onChange={handleInputChange}
                            class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                          />
                          {workErrors.workexperience1 && (
                            <p className='text-red-500'>
                              {workErrors.workexperience1}
                            </p>
                          )}
                        </div>
                        <div class='w-full mb-3'>
                          <label
                            for='occupation'
                            class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                          >
                            Occupation<span className='text-red-400'>*</span>
                          </label>
                          <input
                            type='text'
                            id='occupation'
                            name='occupation'
                            onChange={handleInputChange}
                            class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                          />
                          {workErrors.occupation && (
                            <p className='text-red-500'>
                              {workErrors.occupation}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className='w-[45%] flex flex-col items-center justify-center'>
                        <div class='w-full mb-3'>
                          <label
                            for='Employment'
                            class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                          >
                            Employment History{' '}
                            <span className='text-red-400'>*</span>
                          </label>
                          <input
                            type='text'
                            id='Employment'
                            name='employmentHistory'
                            onChange={handleInputChange}
                            class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                          />
                          {workErrors.employmentHistory && (
                            <p className='text-red-500'>
                              {workErrors.employmentHistory}
                            </p>
                          )}
                        </div>
                        <div class='w-full mb-3'>
                          <label
                            for='workCountry'
                            class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                          >
                            Country<span className='text-red-400'>*</span>
                          </label>
                          <input
                            type='text'
                            id='workCountry'
                            name='workCountry'
                            onChange={handleInputChange}
                            class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                          />
                          {workErrors.workCountry && (
                            <p className='text-red-500'>
                              {workErrors.workCountry}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className='w-full flex items-center justify-center mb-10 mt-10'>
                  <button
                    className='bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl'
                    type='button'
                    onClick={() => {
                      setSubmitAttemptedWork(true);
                      // setSelectForm('english');
                      if (validateWork(true)) {
                        setSelectForm('english');
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
    </div>
  )
}

export default WorkExperienceForm
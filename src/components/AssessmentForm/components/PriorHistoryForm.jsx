import React from 'react'
import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go';

const PriorHistoryForm = ({
    selectForm,
    handleInputChange,
    priorHistoryErrors,
    validatePriorHistory,
    setSelectForm,
    setSubmitAttemptedPriorHistory,
}) => {

  return (
    <div className='w-full h-fit'>
        <div className='text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between'>
              Prior History
              <span className='text-black'>
                {selectForm === 'other' ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === 'priorhistory' && (
              <form action='post' className='w-full mt-6'>
                <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-20'>
                  <div class='mb-3'>
                    <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                      Do you have any gaps after your studies?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='studygap1'
                          type='radio'
                          name='gapsAfterStudy'
                          class='hidden'
                          value='yes'
                          onChange={handleInputChange}
                        />
                        <label
                          for='studygap1'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='studygap2'
                          type='radio'
                          name='gapsAfterStudy'
                          class='hidden'
                          value='no'
                          onChange={handleInputChange}
                        />
                        <label
                          for='studygap2'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {priorHistoryErrors.gapsAfterStudy && (
                      <p className='text-red-500'>
                        {priorHistoryErrors.gapsAfterStudy}
                      </p>
                    )}
                  </div>
                  <div class='mb-3'>
                    <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                      Have you been counselled for study abroad before?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='counselled1'
                          type='radio'
                          name='counselledBefore'
                          class='hidden'
                          value='yes'
                          onChange={handleInputChange}
                        />
                        <label
                          for='counselled1'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='counselled2'
                          type='radio'
                          name='counselledBefore'
                          class='hidden'
                          value='no'
                          onChange={handleInputChange}
                        />
                        <label
                          for='counselled2'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {priorHistoryErrors.counselledBefore && (
                      <p className='text-red-500'>
                        {priorHistoryErrors.counselledBefore}
                      </p>
                    )}
                  </div>
                  <div class='mb-3'>
                    <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                      Have you taken admission in any college/university abroad
                      ?<span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='admisions1'
                          type='radio'
                          name='collegeAbroad'
                          class='hidden'
                          value='yes'
                          onChange={handleInputChange}
                        />
                        <label
                          for='admisions1'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='admisions2'
                          type='radio'
                          name='collegeAbroad'
                          class='hidden'
                          value='no'
                          onChange={handleInputChange}
                        />
                        <label
                          for='admisions2'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {priorHistoryErrors.collegeAbroad && (
                      <p className='text-red-500'>
                        {priorHistoryErrors.collegeAbroad}
                      </p>
                    )}
                  </div>
                  <div class='mb-3'>
                    <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                      Have you ever been refused visa for any country?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='visarefused1'
                          type='radio'
                          name='visaRefused'
                          class='hidden'
                          value='yes'
                          onChange={handleInputChange}
                        />
                        <label
                          for='visarefused1'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='visarefused2'
                          type='radio'
                          name='visaRefused'
                          class='hidden'
                          value='no'
                          onChange={handleInputChange}
                        />
                        <label
                          for='visarefused2'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {priorHistoryErrors.visaRefused && (
                      <p className='text-red-500'>
                        {priorHistoryErrors.visaRefused}
                      </p>
                    )}
                  </div>
                  <div className='flex flex-col items-start justify-center'>
                    <label
                      for='comments'
                      class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Please suggest the name of the university or College that
                      you may be interested in Studying in Canada
                    </label>
                    <input
                      type='text'
                      name='intrestedCollege'
                      onChange={handleInputChange}
                      id='comments'
                      class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                    />
                    {priorHistoryErrors.intrestedCollege && (
                      <p className='text-red-500'>
                        {priorHistoryErrors.intrestedCollege}
                      </p>
                    )}
                  </div>

                  <div className='flex flex-col items-start justify-center'>
                    <label
                      for='comments'
                      class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Course or field of study
                    </label>
                    <input
                      type='text'
                      name='fieldOfStudy'
                      onChange={handleInputChange}
                      id='comments'
                      class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                    />
                    {priorHistoryErrors.fieldOfStudy && (
                      <p className='text-red-500'>
                        {priorHistoryErrors.fieldOfStudy}
                      </p>
                    )}
                  </div>
                </div>

                <div className='w-full flex items-center justify-center mb-10 mt-10'>
                  <button
                    className='bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl'
                    type='button'
                    onClick={() => {
                      setSubmitAttemptedPriorHistory(true);
                      // setSelectForm('priorhistory');
                      if (validatePriorHistory(true)) {
                        setSelectForm('other');
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

export default PriorHistoryForm
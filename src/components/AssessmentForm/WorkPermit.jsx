import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkPermit = ({ selectedForm, formType }) => {
  const [selectForm, setSelectForm] = useState('PersonalInformation');

  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitAttemptedEducation, setSubmitAttemptedEducation] =
    useState(false);
  const [submitAttemptedWork, setSubmitAttemptedWork] = useState(false);

  const [submitAttemptedOther, setSubmitAttemptedOther] = useState(false);

  const [errors, setErrors] = useState({});
  const [eduErrors, setEduErrors] = useState({});
  const [workErrors, setWorkErrors] = useState({});

  const [othersErrors, setOthersErrors] = useState({});

  const [formData, setFormData] = useState({
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
    statusOfWife: '',
    isSpouseinCanada: '',
    englishTest: '',
    haveLmiaJoboffer: '',
    requireLmiaJoboffer: '',
    nocCodeonLmia: '',
    workexperience: '',
    workexperience1: '',
    occupation: '',
    employmentHistory: '',
    workCountry: '',
    otherInformation: '',
  });

  // console.log(formData);
  // console.log(workErrors);

  const validate = (showErrors = false) => {
    let tempErrors = {};
    if (!formData.firstname) tempErrors.firstname = 'First Name is required';
    if (!formData.lastname) tempErrors.lastname = 'Last Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.phone) tempErrors.phone = 'Phone is required';
    if (!formData.maritalStatus)
      tempErrors.maritalStatus = 'Marital Status is required';
    if (!formData.age) tempErrors.age = 'Age is required';
    if (!formData.nationality)
      tempErrors.nationality = 'Nationality is required';
    if (!formData.region) tempErrors.region = 'Region is required';
    if (
      (formData.maritalStatus === 'married' ||
        formData.maritalStatus === 'commonnlaw') &&
      !formData.spouseTravelling
    )
      tempErrors.spouseTravelling =
        'Please specify if your spouse will be travelling with you';
    if (!formData.children)
      tempErrors.children = 'Please specify if you have any children under 22';

    if (!formData.isSpouseinCanada) {
      tempErrors.isSpouseinCanada =
        'Please specify if your spouse is in Canada';
    }

    if (!formData.statusOfWife) {
      tempErrors.statusOfWife = 'Please specify the status of your wife';
    }

    if (!formData.englishTest) {
      tempErrors.englishTest =
        'Please specify if you have taken an English test';
    }

    if (showErrors) {
      setErrors(tempErrors);
    }
    return Object.keys(tempErrors).length === 0;
  };

  const validateEducation = (showErrors = false) => {
    const newErrors = {};

    if (!formData.haveLmiaJoboffer) {
      newErrors.haveLmiaJoboffer =
        'Please specify if you have an LMIA job offer';
    }

    if (formData.haveLmiaJoboffer === 'no') {
      if (!formData.requireLmiaJoboffer) {
        newErrors.requireLmiaJoboffer =
          'Please specify if an LMIA job offer is required';
      }
    }

    if (!formData.nocCodeonLmia) {
      newErrors.nocCodeonLmia = 'Please provide the NOC code on the LMIA';
    }

    if (showErrors) {
      setEduErrors(newErrors);
    }
    return Object.keys(newErrors).length === 0;
  };

  const validateOthers = (showErrors = false) => {
    const newErrors = {};

    if (!formData.otherInformation)
      newErrors.otherInformation = 'Additional information is required';

    if (showErrors) {
      setOthersErrors(newErrors);
    }
    return Object.keys(newErrors).length === 0;
  };

  const validateWork = (showErrors = false) => {
    let tempWorkErrors = {};
    if (!formData.workexperience)
      tempWorkErrors.workexperience = 'Work experience is required';
    if (formData.workexperience === 'yes') {
      if (!formData.workexperience1)
        tempWorkErrors.workexperience1 =
          'Total Number of Work Experience is required';
      if (!formData.occupation)
        tempWorkErrors.occupation = 'Occupation is required';
      if (!formData.employmentHistory)
        tempWorkErrors.employmentHistory = 'Employment History is required';
      if (!formData.workCountry)
        tempWorkErrors.workCountry = 'Country is required';
    }
    if (showErrors) {
      setWorkErrors(tempWorkErrors);
    }
    return Object.keys(tempWorkErrors).length === 0;
  };

  useEffect(() => {
    if (submitAttempted) {
      validate(true);
    }
  }, [formData, submitAttempted]);

  useEffect(() => {
    if (submitAttemptedEducation) {
      validateEducation(true);
    }
  }, [formData, submitAttemptedEducation]);

  useEffect(() => {
    if (submitAttemptedWork) {
      validateWork(true);
    }
  }, [formData, submitAttemptedWork]);

  useEffect(() => {
    if (submitAttemptedOther) {
      validateOthers(true);
    }
  }, [formData, submitAttemptedOther]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/work_permit_form`,
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        const data = response.data;
        toast.success('You have successfully submited your form!');
        console.log('Successfully submited form', data.message);
      }
    } catch (error) {
      console.log('Error during form submission', error);
      toast.error('Internal server errror!');
    }
  };

  return (
    <>
      {selectedForm.workPermit && (
        <>
          <div className='w-full flex flex-col items-start justify-center px-20 gap-4 mb-10'>
            <div className='text-3xl font-semibold'>
              Choose Your {formType} Form
            </div>
            <div className='text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between'>
              Personal Information{' '}
              <span className='text-black'>
                {selectForm === 'PersonalInformation' ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === 'PersonalInformation' && (
              <form action='post' className='w-full'>
                <div className='flex items-center justify-between w-full'>
                  <div className='w-[45%] flex flex-col items-center justify-center'>
                    <div class='mb-3 w-full'>
                      <label
                        for='firstname'
                        class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                      >
                        First Name<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        name='firstname'
                        id='firstname'
                        onChange={handleInputChange}
                        placeholder='Enter your first name'
                        class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      />
                      {errors.firstname && (
                        <p className='text-red-500'>{errors.firstname}</p>
                      )}
                    </div>
                    <div class='w-full mb-3'>
                      <label
                        for='email'
                        class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                      >
                        Email Address<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        onChange={handleInputChange}
                        placeholder='Enter your email'
                        class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      />
                      {errors.email && (
                        <p className='text-red-500'>{errors.email}</p>
                      )}
                    </div>
                    <div class='mb-3 w-full'>
                      <label
                        for='phone'
                        class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                      >
                        Telephone<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='number'
                        name='phone'
                        id='phone'
                        onChange={handleInputChange}
                        placeholder='Enter your phone number'
                        class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      />
                      {errors.phone && (
                        <p className='text-red-500'>{errors.phone}</p>
                      )}
                    </div>
                    <div class='mb-3 w-full'>
                      <label
                        for='martial-status'
                        class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                      >
                        Martial Status<span className='text-red-400'>*</span>
                      </label>

                      <select
                        id='martial-status'
                        onChange={handleInputChange}
                        name='maritalStatus'
                        className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option className='text-black' value='married'>
                          Married/Common Law
                        </option>
                        <option className='text-black' value='unmarried'>
                          Never Married/Single
                        </option>
                        <option className='text-black' value='divorced'>
                          Divorced/Seperated
                        </option>
                        <option className='text-black' value='widowed'>
                          Widowed
                        </option>
                        <option className='text-black' value='seperated'>
                          Legally Seperated
                        </option>
                        <option className='text-black' value='anulledmarriage'>
                          Anulled Marriage
                        </option>
                      </select>
                      {errors.maritalStatus && (
                        <p className='text-red-500'>{errors.maritalStatus}</p>
                      )}
                    </div>
                  </div>
                  <div className='w-[45%] flex flex-col items-center justify-center'>
                    <div class='w-full mb-3'>
                      <label
                        for='lastname'
                        class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                      >
                        Last Name<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        name='lastname'
                        id='lastname'
                        onChange={handleInputChange}
                        placeholder='Enter your last name'
                        class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      />
                      {errors.lastname && (
                        <p className='text-red-500'>{errors.lastname}</p>
                      )}
                    </div>
                    <div class='w-full mb-3'>
                      <label
                        for='age'
                        class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                      >
                        Age<span className='text-red-400'>*</span>
                      </label>
                      <select
                        id='age'
                        onChange={handleInputChange}
                        name='age'
                        className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      >
                        <option disabled selected>
                          Select
                        </option>
                        <option className='text-black' value='17_or_less'>
                          17 years of age or less
                        </option>
                        <option className='text-black' value='18'>
                          18 years of age
                        </option>
                        <option className='text-black' value='19'>
                          19 years of age
                        </option>
                        <option className='text-black' value='20_to_29'>
                          20 to 29 years of age
                        </option>
                        <option className='text-black' value='30'>
                          30 years of age
                        </option>
                        <option className='text-black' value='31'>
                          31 years of age
                        </option>
                        <option className='text-black' value='32'>
                          32 years of age
                        </option>
                        <option className='text-black' value='33'>
                          33 years of age
                        </option>
                        <option className='text-black' value='34'>
                          34 years of age
                        </option>
                        <option className='text-black' value='35'>
                          35 years of age
                        </option>
                        <option className='text-black' value='36'>
                          36 years of age
                        </option>
                        <option className='text-black' value='37'>
                          37 years of age
                        </option>
                        <option className='text-black' value='38'>
                          38 years of age
                        </option>
                        <option className='text-black' value='39'>
                          39 years of age
                        </option>
                        <option className='text-black' value='40'>
                          40 years of age
                        </option>
                        <option className='text-black' value='41'>
                          41 years of age
                        </option>
                        <option className='text-black' value='42'>
                          42 years of age
                        </option>
                        <option className='text-black' value='43'>
                          43 years of age
                        </option>
                        <option className='text-black' value='44'>
                          44 years of age
                        </option>
                        <option className='text-black' value='45'>
                          45 years of age
                        </option>
                        <option className='text-black' value='45_or_more'>
                          45 years of age or more
                        </option>
                      </select>
                      {errors.age && (
                        <p className='text-red-500'>{errors.age}</p>
                      )}
                    </div>
                    <div class='mb-3 w-full'>
                      <label
                        for='nationality'
                        class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                      >
                        Nationality<span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        name='nationality'
                        id='nationality'
                        onChange={handleInputChange}
                        placeholder='Enter your nationality'
                        class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      />
                      {errors.nationality && (
                        <p className='text-red-500'>{errors.nationality}</p>
                      )}
                    </div>
                    <div class='mb-3 w-full'>
                      <label
                        for='live'
                        class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                      >
                        Where do you currently live ?
                        <span className='text-red-400'>*</span>
                      </label>
                      <input
                        type='text'
                        name='region'
                        id='live'
                        onChange={handleInputChange}
                        placeholder='Enter your region'
                        class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                      />
                      {errors.region && (
                        <p className='text-red-500'>{errors.region}</p>
                      )}
                    </div>
                  </div>
                </div>
                {formData.maritalStatus === 'married' && (
                  <div class='mb-3'>
                    <label
                      for='spouseStatus'
                      class='mb-4 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Will your spouse be travelling with you to Canada ?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='wpspouse3'
                          type='radio'
                          name='spouseTravelling'
                          class='hidden'
                          value='yes'
                          onChange={handleInputChange}
                        />
                        <label
                          for='wpspouse3'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>

                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='wpspouse4'
                          type='radio'
                          name='spouseTravelling'
                          class='hidden'
                          value='no'
                          onChange={handleInputChange}
                        />
                        <label
                          for='wpspouse4'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {errors.spouseTravelling && (
                      <p className='text-red-500'>{errors.spouseTravelling}</p>
                    )}
                  </div>
                )}
                <div className='mt-4 grid grid-cols-2 gap-x-20'>
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
                    {errors.children && (
                      <p className='text-red-500'>{errors.children}</p>
                    )}
                  </div>

                  <div class='mb-3'>
                    <label
                      for='children'
                      class='mb-4 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Is your spouse with you in canada?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='wpspouse1'
                          type='radio'
                          name='isSpouseinCanada'
                          class='hidden'
                          onClick={handleInputChange}
                          value='yes'
                        />
                        <label
                          for='wpspouse1'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='wpspouse2'
                          type='radio'
                          name='isSpouseinCanada'
                          class='hidden'
                          onClick={handleInputChange}
                          value='no'
                        />
                        <label
                          for='wpspouse2'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {errors.isSpouseinCanada && (
                      <p className='text-red-500'>{errors.isSpouseinCanada}</p>
                    )}
                  </div>

                  <div class='mb-3'>
                    <label
                      for='children'
                      class='mb-4 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      On what status is your wife in Canada?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='wpspouse5'
                          type='radio'
                          name='statusOfWife'
                          class='hidden'
                          onClick={handleInputChange}
                          value='yes'
                        />
                        <label
                          for='wpspouse5'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='wpspouse6'
                          type='radio'
                          name='statusOfWife'
                          class='hidden'
                          onClick={handleInputChange}
                          value='no'
                        />
                        <label
                          for='wpspouse6'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {errors.statusOfWife && (
                      <p className='text-red-500'>{errors.statusOfWife}</p>
                    )}
                  </div>
                  <div class='mb-3'>
                    <label
                      for='children'
                      class='mb-4 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Have you appeared for any enlglish launguage program?
                      <span className='text-red-400'>*</span>
                    </label>
                    <div className='flex items-center justify-start gap-6'>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='wpspouse7'
                          type='radio'
                          name='englishTest'
                          class='hidden'
                          value='yes'
                          onClick={handleInputChange}
                        />
                        <label
                          for='wpspouse7'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          Yes
                        </label>
                      </div>
                      <div class='flex items-center mr-4 mb-4'>
                        <input
                          id='wpspouse8'
                          type='radio'
                          name='englishTest'
                          class='hidden'
                          value='no'
                          onClick={handleInputChange}
                        />
                        <label
                          for='wpspouse8'
                          class='flex items-center cursor-pointer'
                        >
                          <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                          NO
                        </label>
                      </div>
                    </div>
                    {errors.englishTest && (
                      <p className='text-red-500'>{errors.englishTest}</p>
                    )}
                  </div>
                </div>
                <div className='w-full flex items-center justify-center mb-10 mt-6'>
                  <button
                    className='bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl'
                    type='button'
                    onClick={() => {
                      setSubmitAttempted(true);
                      // setSelectForm('Education');
                      if (validate(true)) {
                        setSelectForm('Education');
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            <div className='text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between'>
              Work Permit Requirements
              <span className='text-black'>
                {selectForm === 'Education' ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === 'Education' && (
              <form action='post' className='w-full'>
                <div className='font-semibold text-lg mb-4'>
                  {' '}
                  Qualifications *
                </div>
                <div class='mb-3'>
                  <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                    Do you have an LMIA or job offer from Canada?
                    <span className='text-red-400'>*</span>
                  </label>
                  <div className='flex items-center justify-start gap-6'>
                    <div class='flex items-center mr-4 mb-4'>
                      <input
                        id='educationqualification1'
                        type='radio'
                        name='haveLmiaJoboffer'
                        class='hidden'
                        onClick={handleInputChange}
                        value='yes'
                      />
                      <label
                        for='educationqualification1'
                        class='flex items-center cursor-pointer'
                      >
                        <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                        Yes
                      </label>
                    </div>
                    <div class='flex items-center mr-4 mb-4'>
                      <input
                        id='educationqualification2'
                        type='radio'
                        name='haveLmiaJoboffer'
                        class='hidden'
                        onClick={handleInputChange}
                        value='no'
                      />
                      <label
                        for='educationqualification2'
                        class='flex items-center cursor-pointer'
                      >
                        <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                        NO
                      </label>
                    </div>
                  </div>
                  {eduErrors.haveLmiaJoboffer && (
                    <p className='text-red-500'>{eduErrors.haveLmiaJoboffer}</p>
                  )}
                </div>

                {formData.haveLmiaJoboffer === 'no' && (
                  <div className='flex items-center justify-between w-full'>
                    <div className=' flex flex-col items-center justify-center'>
                      <div class='mb-3'>
                        <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                          Do you require an LMIA or Job offer?
                          <span className='text-red-400'>*</span>
                        </label>
                        <div className='flex items-center justify-start gap-6'>
                          <div class='flex items-center mr-4 mb-4'>
                            <input
                              id='workpermitqualification1'
                              type='radio'
                              name='requireLmiaJoboffer'
                              class='hidden'
                              onChange={handleInputChange}
                              value='yes'
                            />
                            <label
                              for='workpermitqualification1'
                              class='flex items-center cursor-pointer'
                            >
                              <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                              Yes
                            </label>
                          </div>
                          <div class='flex items-center mr-4 mb-4'>
                            <input
                              id='workpermitqualification2'
                              type='radio'
                              name='requireLmiaJoboffer'
                              class='hidden'
                              onChange={handleInputChange}
                              value='no'
                            />
                            <label
                              for='workpermitqualification2'
                              class='flex items-center cursor-pointer'
                            >
                              <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                              NO
                            </label>
                          </div>
                        </div>
                        {eduErrors.requireLmiaJoboffer && (
                          <p className='text-red-500'>
                            {eduErrors.requireLmiaJoboffer}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className='flex flex-col items-start justify-center'>
                  <div class='w-[50%] mb-3'>
                    <label
                      for='stream'
                      class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Please mention the NOC code mentioned on your LMIA?
                      <span className='text-red-400'>*</span>
                    </label>
                    <input
                      type='text'
                      id='stream'
                      name='nocCodeonLmia'
                      onChange={handleInputChange}
                      class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                    />
                    {eduErrors.nocCodeonLmia && (
                      <p className='text-red-500'>{eduErrors.nocCodeonLmia}</p>
                    )}
                  </div>
                </div>
                <div className='w-full flex items-center justify-center mb-10 mt-10'>
                  <button
                    className='bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl'
                    type='button'
                    onClick={() => {
                      setSubmitAttemptedEducation(true);
                      // setSelectForm('work-experience');
                      if (validateEducation(true)) {
                        setSelectForm('work-experience');
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            <div className='text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between'>
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
              <form action='post' className='w-full'>
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
                        setSelectForm('other');
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

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
              <form action='post' className='w-full'>
                <div className='mt-4'>
                  <div className='flex flex-col items-start justify-center'>
                    <label
                      for='comments'
                      class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                    >
                      Any information you would like to share, please mention
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
                          statusOfWife: '',
                          isSpouseinCanada: '',
                          englishTest: '',
                          haveLmiaJoboffer: '',
                          requireLmiaJoboffer: '',
                          nocCodeonLmia: '',
                          workexperience: '',
                          workexperience1: '',
                          occupation: '',
                          employmentHistory: '',
                          workCountry: '',
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
        </>
      )}
    </>
  );
};

export default WorkPermit;

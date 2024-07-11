import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GoArrowDownRight, GoArrowUpRight } from 'react-icons/go';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudyPermit = ({ selectedForm }) => {
  const [selectForm, setSelectForm] = useState('PersonalInformation');
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitAttemptedEducation, setSubmitAttemptedEducation] =
    useState(false);
  const [submitAttemptedWork, setSubmitAttemptedWork] = useState(false);
  const [submitAttemptedTest, setSubmitAttemptedTest] = useState(false);
  const [submitAttemptedOther, setSubmitAttemptedOther] = useState(false);
  const [submitAttemptedPriorHistory, setSubmitAttemptedPriorHistory] =
    useState(false);

  const [errors, setErrors] = useState({});
  const [eduErrors, setEduErrors] = useState({});
  const [workErrors, setWorkErrors] = useState({});
  const [languageErrors, setLanguageErrors] = useState({});
  const [priorHistoryErrors, setPriorHistoryErrors] = useState({});
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
  console.log(formData);
  // console.log(languageErrors);

  const validatePriorHistory = (showErrors = false) => {
    const newErrors = {};

    if (!formData.counselledBefore) {
      newErrors.counselledBefore =
        'Please indicate if you have received counseling before.';
    }

    if (!formData.gapsAfterStudy) {
      newErrors.gapsAfterStudy =
        'Please provide information about any gaps in your study history.';
    }

    if (!formData.collegeAbroad) {
      newErrors.collegeAbroad =
        'Please provide information about your study experience abroad.';
    }
    if (!formData.visaRefused) {
      newErrors.visaRefused =
        'Please spevify if your visa has been refused before.';
    }

    if (!formData.fieldOfStudy) {
      newErrors.fieldOfStudy = 'Please specify your field of study.';
    }

    if (!formData.intrestedCollege) {
      newErrors.intrestedCollege =
        'Please indicate the college you are interested in.';
    }
    if (showErrors) {
      setPriorHistoryErrors(newErrors);
    }
    return Object.keys(newErrors).length === 0;
  };

  const validateLanguageTests = (showErrors = false) => {
    const newErrors = {};

    if (formData.englishTest === 'no' && formData.frenchTest === 'no') {
      if (!formData.futureTestEnglish) {
        newErrors.futureTestEnglish = 'Required fields cannot be empty';
      }
      if (!formData.futureTestFrench) {
        newErrors.futureTestFrench = 'Required fields cannot be empty';
      }
    }

    if (!formData.englishTest) {
      newErrors.englishTest = 'English test is required';
    }

    if (formData.englishTest === 'no') {
      if (!formData.futureTestEnglish) {
        newErrors.futureTestEnglish = 'Required fields cannot be empty';
      }
      if (!formData.englishMedium) {
        newErrors.englishMedium = 'Required fields cannot be empty';
      }
    }
    if (formData.englishTest === 'yes') {
      if (formData.englishTest) {
        if (!formData.englishTestType) {
          newErrors.englishTestType = 'English test cannot be empty';
        }
        if (!formData.englishTestResult.reading) {
          newErrors.englishReading = 'English test reading result is required';
        }
        if (!formData.englishTestResult.writing) {
          newErrors.englishWriting = 'English test writing result is required';
        }
        if (!formData.englishTestResult.listening) {
          newErrors.englishListening =
            'English test listening result is required';
        }
        if (!formData.englishTestResult.speaking) {
          newErrors.englishSpeaking =
            'English test speaking result is required';
        }
      }
    }

    if (showErrors) {
      setLanguageErrors(newErrors);
    }

    return Object.keys(newErrors).length === 0;
  };

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
    if (showErrors) {
      setErrors(tempErrors);
    }
    return Object.keys(tempErrors).length === 0;
  };

  const validateEducation = (showErrors = false) => {
    const newErrors = {};
    if (!formData.educationqualification)
      newErrors.educationqualification =
        'Educational qualification is required';
    if (formData.educationqualification1 === 'yes') {
      if (!formData.passingyear)
        newErrors.passingyear = 'Year of passing is required';
      if (!formData.board) newErrors.board = 'Board/University is required';
      if (!formData.stream) newErrors.stream = 'Field/Stream is required';
      if (!formData.country) newErrors.country = 'Country is required';
    }
    if (!formData.educationqualification1)
      newErrors.educationqualification1 = 'This field is required';
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
    if (submitAttemptedTest) {
      validateLanguageTests(true);
    }
  }, [formData, submitAttemptedTest]);

  useEffect(() => {
    if (submitAttemptedOther) {
      validateOthers(true);
    }
  }, [formData, submitAttemptedOther]);

  useEffect(() => {
    if (submitAttemptedPriorHistory) {
      validatePriorHistory(true);
    }
  }, [formData, submitAttemptedPriorHistory]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/study_permit_form`,
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
      {' '}
      {selectedForm.studyPermit && (
        <>
          <div className='w-full flex flex-col items-start justify-center px-20 gap-4 mb-10'>
            <div className='text-3xl font-semibold'>Choose Your Form</div>
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
                <div className='mt-4'>
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
                </div>
                <div className='w-full flex items-center justify-center mb-10'>
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
              Education & Training
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
                <label
                  for='educationqualification'
                  className='font-semibold text-lg mb-4'
                >
                  {' '}
                  Educational Qualifications *
                </label>

                <select
                  id='educationqualification'
                  name='educationqualification'
                  onChange={handleInputChange}
                  className='w-full block mb-4 lg:w-[45%] rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option className='text-black' value='secondary_school'>
                    Secondary School (Class 10th)
                  </option>
                  <option className='text-black' value='senior_secondary'>
                    Senior Secondary diploma (high school)(Class 12th)
                  </option>
                  <option className='text-black' value='one_year_diploma'>
                    One-year diploma or certificate (Post Secondary)
                  </option>
                  <option className='text-black' value='two_year_diploma'>
                    Two-year degree, diploma of certificate (Post Secondary)
                  </option>
                  <option className='text-black' value='bachelors_degree'>
                    Bachelor's degree for 3yrs or more
                  </option>
                  <option className='text-black' value='post_graduate_diploma'>
                    Post Graduate Diploma/Certificate for 1yr or more
                  </option>
                  <option className='text-black' value='masters_degree'>
                    Master's degree for 1 yr or more
                  </option>
                  <option className='text-black' value='doctoral_degree'>
                    Doctoral level university degree/Ph.D.
                  </option>
                </select>
                {eduErrors.educationqualification && (
                  <p className='text-red-500 mb-4 -mt-2'>
                    {eduErrors.educationqualification}
                  </p>
                )}
                <div class='mb-3'>
                  <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                    Have you gained any post secondary education or training?
                    <span className='text-red-400'>*</span>
                  </label>
                  <div className='flex items-center justify-start gap-6'>
                    <div class='flex items-center mr-4 mb-4'>
                      <input
                        id='educationqualification1'
                        type='radio'
                        name='educationqualification1'
                        class='hidden'
                        value='yes'
                        onChange={(e) => {
                          handleInputChange(e);
                          setFormData({
                            ...formData,
                            educationqualification1: e.target.value,
                          });
                        }}
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
                        name='educationqualification1'
                        class='hidden'
                        value='no'
                        onChange={(e) => {
                          handleInputChange(e);
                          setFormData({
                            ...formData,
                            educationqualification1: e.target.value,
                            passingyear: '',
                            board: '',
                            stream: '',
                            country: '',
                          });
                        }}
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
                  {eduErrors.educationqualification1 && (
                    <p className='text-red-500'>
                      {eduErrors.educationqualification1}
                    </p>
                  )}
                </div>
                {formData.educationqualification1 === 'yes' && (
                  <div className='flex items-center justify-between w-full'>
                    <div className='w-[45%] flex flex-col items-center justify-center'>
                      <div class='mb-3 w-full'>
                        <label
                          for='passingyear'
                          class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                        >
                          Year of Passing<span className='text-red-400'>*</span>
                        </label>
                        <input
                          type='text'
                          id='passingyear'
                          name='passingyear'
                          onChange={handleInputChange}
                          class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        />
                        {eduErrors.passingyear && (
                          <p className='text-red-500'>
                            {eduErrors.passingyear}
                          </p>
                        )}
                      </div>

                      <div class='w-full mb-3'>
                        <label
                          for='board'
                          class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                        >
                          Board / University
                          <span className='text-red-400'>*</span>
                        </label>
                        <input
                          type='text'
                          id='board'
                          name='board'
                          onChange={handleInputChange}
                          class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        />
                        {eduErrors.board && (
                          <p className='text-red-500'>{eduErrors.board}</p>
                        )}
                      </div>
                    </div>
                    <div className='w-[45%] flex flex-col items-center justify-center'>
                      <div class='w-full mb-3'>
                        <label
                          for='stream'
                          class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                        >
                          Field / Stream<span className='text-red-400'>*</span>
                        </label>
                        <input
                          type='text'
                          id='stream'
                          name='stream'
                          onChange={handleInputChange}
                          class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        />
                        {eduErrors.stream && (
                          <p className='text-red-500'>{eduErrors.stream}</p>
                        )}
                      </div>

                      <div class='w-full mb-3'>
                        <label
                          for='country'
                          class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                        >
                          Country<span className='text-red-400'>*</span>
                        </label>
                        <input
                          type='text'
                          id='country'
                          name='country'
                          onChange={handleInputChange}
                          class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                        />
                        {eduErrors.country && (
                          <p className='text-red-500'>{eduErrors.country}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
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
                        setSelectForm('english');
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
            <div className='text-xl font-semibold tracking-[8px] bg-[#01997E] text-white w-full px-10 py-2 rounded-md flex items-center justify-between'>
              English Language Skills
              <span className='text-black'>
                {selectForm === 'english' ? (
                  <GoArrowDownRight size={30} />
                ) : (
                  <GoArrowUpRight size={30} />
                )}
              </span>
            </div>
            {selectForm === 'english' && (
              <form action='post' className='w-full'>
                <div className='mt-4'>
                  <div class='mb-3'>
                    <div class='mb-3'>
                      <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                        In the last two years have you taken any of the
                        following English language test?
                        <span className='text-red-400'>*</span>
                      </label>
                      <div className='flex items-center justify-start gap-6'>
                        <div class='flex items-center mr-4 mb-4'>
                          <input
                            id='englishtest1'
                            type='radio'
                            name='englishtest'
                            class='hidden'
                            value='yes'
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                englishTest: e.target.value,
                              });
                            }}
                          />
                          <label
                            for='englishtest1'
                            class='flex items-center cursor-pointer'
                          >
                            <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                            Yes
                          </label>
                        </div>
                        <div class='flex items-center mr-4 mb-4'>
                          <input
                            id='englishtest2'
                            type='radio'
                            name='englishtest'
                            class='hidden'
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                englishTest: e.target.value,
                              });
                            }}
                            value='no'
                          />
                          <label
                            for='englishtest2'
                            class='flex items-center cursor-pointer'
                          >
                            <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                            NO
                          </label>
                        </div>
                      </div>
                      {languageErrors.englishTest && (
                        <p className='text-red-500'>
                          {languageErrors.englishTest}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {formData.englishTest === 'yes' && (
                  <div className=''>
                    <div className='font-semibold text-lg mb-4'>
                      {' '}
                      Test Results *
                    </div>
                    <div className='w-full flex items-center justify-center gap-10'>
                      <div className='flex w-[40%] flex-col items-start justify-center mt-9 gap-12'>
                        <div className='flex items-center justify-center gap-5'>
                          <span className='text-[16px] font-semibold'>
                            English Test
                          </span>
                          <select
                            id='countries'
                            // defaultValue={'IELTS'}
                            name='englishTestType'
                            onChange={handleInputChange}
                            className='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                          >
                            <option disabled selected>
                              Select
                            </option>
                            <option className='text-black' value='IELTS'>
                              IELTS (English)
                            </option>
                            <option className='text-black' value='CELPIP'>
                              CELPIP (English)
                            </option>
                            <option className='text-black' value='PTE'>
                              PTE (English)
                            </option>
                          </select>
                        </div>
                        {languageErrors.englishTestType && (
                          <p className='text-red-500 -mt-10'>
                            {languageErrors.englishTestType}
                          </p>
                        )}
                      </div>
                      <div className='flex w-[60%] flex-col items-center justify-center gap-5'>
                        <div className='flex items-center justify-center gap-5'>
                          <div className='flex flex-col items-start justify-center'>
                            <label
                              for='reading'
                              class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                            >
                              Reading
                            </label>
                            <input
                              type='text'
                              name='reading'
                              id='reading'
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  englishTestResult: {
                                    ...formData.englishTestResult,
                                    reading: e.target.value,
                                  },
                                })
                              }
                              class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                            />
                            {languageErrors.englishReading && (
                              <p className='text-red-500 text-[10px]'>
                                {languageErrors.englishReading}
                              </p>
                            )}
                          </div>
                          <div className='flex flex-col items-start justify-center'>
                            <label
                              for='writing'
                              class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                            >
                              Writing
                            </label>
                            <input
                              type='text'
                              name='writing'
                              id='writing'
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  englishTestResult: {
                                    ...formData.englishTestResult,
                                    writing: e.target.value,
                                  },
                                })
                              }
                              class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                            />
                            {languageErrors.englishWriting && (
                              <p className='text-red-500 text-[10px]'>
                                {languageErrors.englishWriting}
                              </p>
                            )}
                          </div>
                          <div className='flex flex-col items-start justify-center'>
                            <label
                              for='listening'
                              class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                            >
                              Listening
                            </label>
                            <input
                              type='text'
                              name='listening'
                              id='listening'
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  englishTestResult: {
                                    ...formData.englishTestResult,
                                    listening: e.target.value,
                                  },
                                })
                              }
                              class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                            />
                            {languageErrors.englishListening && (
                              <p className='text-red-500 text-[10px]'>
                                {languageErrors.englishListening}
                              </p>
                            )}
                          </div>
                          <div className='flex flex-col items-start justify-center'>
                            <label
                              for='speaking'
                              class='mb-2 ml-2 block text-base font-medium text-[#07074D]'
                            >
                              Speaking
                            </label>
                            <input
                              type='text'
                              name='speaking'
                              id='speaking'
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  englishTestResult: {
                                    ...formData.englishTestResult,
                                    speaking: e.target.value,
                                  },
                                })
                              }
                              class='w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md'
                            />
                            {languageErrors.englishSpeaking && (
                              <p className='text-red-500 text-[10px]'>
                                {languageErrors.englishSpeaking}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {formData.englishTest === 'no' && (
                  <div className=''>
                    <div class='mb-3'>
                      <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                        Are you planning to appear for your english exam?
                        <span className='text-red-400'>*</span>
                      </label>
                      <div className='flex items-center justify-start gap-6'>
                        <div class='flex items-center mr-4 mb-4'>
                          <input
                            id='englishexam1'
                            type='radio'
                            name='futureTestEnglish'
                            class='hidden'
                            onChange={handleInputChange}
                            value='yes'
                          />
                          <label
                            for='englishexam1'
                            class='flex items-center cursor-pointer'
                          >
                            <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                            Yes
                          </label>
                        </div>
                        <div class='flex items-center mr-4 mb-4'>
                          <input
                            id='englishexam2'
                            type='radio'
                            name='futureTestEnglish'
                            class='hidden'
                            onChange={handleInputChange}
                            value='no'
                          />
                          <label
                            for='englishexam2'
                            class='flex items-center cursor-pointer'
                          >
                            <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                            NO
                          </label>
                        </div>
                      </div>
                      {languageErrors.futureTestEnglish && (
                        <p className='text-red-500'>
                          {languageErrors.futureTestEnglish}
                        </p>
                      )}
                    </div>
                    <div class='mb-3'>
                      <label class='mb-4 ml-2 block text-base font-medium text-[#07074D]'>
                        Have you studied in an English Medium School?
                        <span className='text-red-400'>*</span>
                      </label>
                      <div className='flex items-center justify-start gap-6'>
                        <div class='flex items-center mr-4 mb-4'>
                          <input
                            id='ems1'
                            type='radio'
                            name='englishMedium'
                            class='hidden'
                            value='yes'
                            onChange={handleInputChange}
                          />
                          <label
                            for='ems1'
                            class='flex items-center cursor-pointer'
                          >
                            <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                            Yes
                          </label>
                        </div>
                        <div class='flex items-center mr-4 mb-4'>
                          <input
                            id='ems2'
                            type='radio'
                            name='englishMedium'
                            class='hidden'
                            value='no'
                            onChange={handleInputChange}
                          />
                          <label
                            for='ems2'
                            class='flex items-center cursor-pointer'
                          >
                            <span class='w-4 h-4 inline-block mr-1 border border-grey'></span>
                            NO
                          </label>
                        </div>
                      </div>
                      {languageErrors.englishMedium && (
                        <p className='text-red-500'>
                          {languageErrors.englishMedium}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                <div className='w-full flex items-center justify-center mb-10 mt-10'>
                  <button
                    className='bg-black text-[#01F9E1] px-16 py-3 rounded-lg text-xl'
                    type='button'
                    onClick={() => {
                      setSubmitAttemptedTest(true);
                      // setSelectForm('priorhistory');
                      if (validateLanguageTests(true)) {
                        setSelectForm('priorhistory');
                      }
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
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
              <form action='post' className='w-full'>
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
        </>
      )}
    </>
  );
};

export default StudyPermit;

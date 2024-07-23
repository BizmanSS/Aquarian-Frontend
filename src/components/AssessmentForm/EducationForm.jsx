import React from 'react';

const EducationForm = ({ formData, setFormData }) => {
  const handleSelect = (option) => {
    setFormData({
      ...formData,
      occupation: option.label,
    });
  };

  const addQualification = () => {
    setFormData((prevState) => ({
      ...prevState,
      educationalQualifications: [
        ...prevState.educationalQualifications,
        {
          educationqualification: '',
          passingyear: '',
          board: '',
          stream: '',
          country: '',
        },
      ],
    }));
  };
  const handleQualificationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQualifications = formData.educationalQualifications.map(
      (qualification, i) =>
        i === index ? { ...qualification, [name]: value } : qualification
    );
    setFormData({
      ...formData,
      educationalQualifications: updatedQualifications,
    });
  };
  return <div>EducationForm</div>;
};

export default EducationForm;

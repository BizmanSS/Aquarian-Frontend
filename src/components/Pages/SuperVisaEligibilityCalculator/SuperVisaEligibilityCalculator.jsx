import React, { useState } from "react";
import "./SuperVisaForm.css"; // Import the CSS file

const SuperVisaForm = () => {
  const [formData, setFormData] = useState({
    familyIncome: "",
    isCanadianPR: "",
    relationshipStatus: "",
    fileTaxes: "",
    dependentChildren: "0",
    parentsInvited: "0",
    previousParentsInvited: "0",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev)=>
    {
        const updatedData= {
            ...prev,
            [name]: value,
     }
     console.log(updatedData);
     return updatedData;
    }
       
);
  };

  const validate = () => {
    let validationErrors = {};
    if (!formData.familyIncome) validationErrors.familyIncome = "Family income is required.";
    if (!formData.isCanadianPR) validationErrors.isCanadianPR = "This field is required.";
    if (!formData.relationshipStatus) validationErrors.relationshipStatus = "Relationship status is required.";
    if (!formData.fileTaxes) validationErrors.fileTaxes = "Please indicate if you file taxes.";
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="supervisa-eligibility-container">
      <h2>Super Visa Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="supervisa-eligibility-form-group">
          <label>
          What is your family income in recent year(family income can be the combined income of your and your spouse's income and your common-law partner's if applicable)?
            <input
              type="number"
              name="familyIncome"
              value={formData.familyIncome}
              onChange={handleChange}
            />
          </label>
          {errors.familyIncome && <p className="supervisa-eligibility-error">{errors.familyIncome}</p>}
        </div>

        <div className="supervisa-eligibility-form-group">
          <label>
            Are you a Canadian permanent resident or citizen? *
            <select name="isCanadianPR" value={formData.isCanadianPR} onChange={handleChange}>
              <option value="" disabled>-- Select --</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          {errors.isCanadianPR && <p className="supervisa-eligibility-error">{errors.isCanadianPR}</p>}
        </div>

        <div className="supervisa-eligibility-form-group">
          <label>
            Relationship Status:
            <select name="relationshipStatus" value={formData.relationshipStatus} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="married">Married</option>
              <option value="single">Single</option>
              <option value="common-law">Common Law Partner</option>
              <option value="widow">Widow</option>
              <option value="separated">Separated</option>
            </select>
          </label>
          {errors.relationshipStatus && <p className="supervisa-eligibility-error">{errors.relationshipStatus}</p>}
        </div>

        <div className="supervisa-eligibility-form-group">
          <label>
            Do you file taxes in Canada? *
            <select name="fileTaxes" value={formData.fileTaxes} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          {errors.fileTaxes && <p className="supervisa-eligibility-error">{errors.fileTaxes}</p>}
        </div>

        <div className="supervisa-eligibility-form-group">
          <label>
            How many dependent children do you have?
            <input
              type="number"
              name="dependentChildren"
              value={formData.dependentChildren}
              onChange={handleChange}
              min="0"
            />
          </label>
        </div>

        <div className="supervisa-eligibility-form-group">
          <label>
            How many parents and grandparents are you inviting on a Super Visa?
            <input
              type="number"
              name="parentsInvited"
              value={formData.parentsInvited}
              onChange={handleChange}
              min="0"
            />
          </label>
        </div>

        <div className="supervisa-eligibility-form-group">
          <label>
            Total number of parents and grandparents invited previously by you and your spouse who have not become Canadian PR yet (Combine your and your spouse’s together) ?
            <input
              type="number"
              name="previousParentsInvited"
              value={formData.previousParentsInvited}
              onChange={handleChange}
              min="0"
            />
          </label>
        </div>

        <button type="submit" className="supervisa-eligibility-submit-btn">Calculate</button>
      </form>
    </div>
  );
};

export default SuperVisaForm;

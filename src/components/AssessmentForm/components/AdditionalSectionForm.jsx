import React from "react";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

const AdditionalSectionForm = ({
  handleInputChange,
  selectForm,
  formData,
  handleFormSubmit,
  setSelectForm,
}) => {
  return (
    <div className="w-full h-fit">
      <div
        id="other"
        onClick={() => {
          if (formData.otherInformation) setSelectForm("other");
        }}
        className="PI-heading-container"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M11.8959 3.93195H1.10176C0.875857 3.93195 0.65921 4.02169 0.499474 4.18143C0.339739 4.34116 0.25 4.55781 0.25 4.78371C0.25 5.00961 0.339739 5.22626 0.499474 5.38599C0.65921 5.54573 0.875857 5.63547 1.10176 5.63547H11.8959C12.1218 5.63547 12.3385 5.54573 12.4982 5.38599C12.6579 5.22626 12.7477 5.00961 12.7477 4.78371C12.7477 4.55781 12.6579 4.34116 12.4982 4.18143C12.3385 4.02169 12.1218 3.93195 11.8959 3.93195ZM11.8959 0.523071H1.10176C0.875857 0.523071 0.65921 0.61281 0.499474 0.772545C0.339739 0.932281 0.25 1.14893 0.25 1.37483C0.25 1.60073 0.339739 1.81738 0.499474 1.97711C0.65921 2.13685 0.875857 2.22659 1.10176 2.22659H11.8959C12.1218 2.22659 12.3385 2.13685 12.4982 1.97711C12.6579 1.81738 12.7477 1.60073 12.7477 1.37483C12.7477 1.14893 12.6579 0.932281 12.4982 0.772545C12.3385 0.61281 12.1218 0.523071 11.8959 0.523071ZM11.8959 7.34083H1.10176C0.875857 7.34083 0.65921 7.43057 0.499474 7.59031C0.339739 7.75004 0.25 7.96669 0.25 8.19259C0.25 8.41849 0.339739 8.63514 0.499474 8.79487C0.65921 8.95461 0.875857 9.04435 1.10176 9.04435H11.8959C12.1218 9.04435 12.3385 8.95461 12.4982 8.79487C12.6579 8.63514 12.7477 8.41849 12.7477 8.19259C12.7477 7.96669 12.6579 7.75004 12.4982 7.59031C12.3385 7.43057 12.1218 7.34083 11.8959 7.34083Z" fill="#222221"></path></svg>
        Other
      
      </div>
      {selectForm === "other" && (
        <form action="post" className="w-full mt-6 PI-form">
          <div className="mt-4">
            <div className="flex flex-col items-start justify-center">
              <label
                for="comments"
                className="mb-2 ml-2 block text-base font-medium text-[#07074D]"
              >
                Do you want to provide any other information ?
              </label>
              <input
                type="text"
                name="otherInformation"
                value={formData.otherInformation}
                id="comments"
                onChange={handleInputChange}
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#01997E] focus:shadow-md"
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-end mb-10 mt-10">
            <button
              className="assessment-next-step-btn"
              onClick={() => {
                handleFormSubmit();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdditionalSectionForm;

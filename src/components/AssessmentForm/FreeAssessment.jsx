import React, { useEffect, useRef, useState } from "react";

import { IoArrowForwardSharp } from "react-icons/io5";

import "../AssessmentForm/Freeassessment.css";
import WorkPermit from "./WorkPermit";
import PermanentImigration from "./PermanentImigration";
import StudyPermit from "./StudyPermit";
import TouristVisa from "./TouristVisa";
import BannerPages from "../Pages/Banner/BannerPages";

export const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini (fmr. Swaziland)",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (formerly Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine State",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
export const years = [
  1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982,
  1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  2022, 2023, 2024,
];
const FreeAssessment = () => {
  const personalInfoRef = useRef(null); // create a ref
  const workPermitRef = useRef(null);

  const [selectedForm, setSelectedForm] = useState({
    permanentImmigration: false,
    workPermit: false,
    studyPermit: false,
    touristVisa: false,
  });

  const [selectedFormchecked, setselectedFormchecked] = useState({
    work: false,
    languageTest: false,
    languageTestB: false,
    martialStatus: false,
  });

  const handleRadioChange = (formType) => {
    setSelectedForm({
      permanentImmigration: false,
      workPermit: false,
      studyPermit: false,
      touristVisa: false,
      [formType]: true,
    });
  };

  console.log(selectedForm);

  useEffect(() => {
    if (selectedForm.permanentImmigration && personalInfoRef.current) {
      const element = personalInfoRef.current;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - 100, // Adjust the offset here (100px)
        behavior: "smooth",
      });
    } 
  }, [selectedForm.permanentImmigration]);

  useEffect(() => {
   if (selectedForm.workPermit && workPermitRef.current) {
      const element = workPermitRef.current;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - 100, // Adjust the offset here (100px)
        behavior: "smooth",
      });
    }
  }, [selectedForm.workPermit, workPermitRef]);

  return (
    <div className="flex flex-col justify-center w-full md:w-[95%]">
      <BannerPages
        link={"assessment"}
        title={"Assessment"}
        description={"Canadian Immigration Assessment Form"}
      />

      <div className="px-4 lg:px-20 flex items-center justify-start">
        {/* <IoArrowForwardSharp size={30} className='relative -top-2' /> */}
        <div class="mb-4 ml-2 block text-3xl font-medium text-[#07074D] py-2">
          Choose your evaluation form
        </div>
      </div>
      <div className="pl-8 w-[89%] border border-l-[7px] border-l-[#01997e] mx-6 lg:mx-20 mb-10 py-6 grid grid-cols-2 lg:grid-cols-3 gap-8 rounded-xl">
        <div class="flex items-center">
          <input
            id="radio5"
            type="radio"
            name="radio"
            class="hidden"
            onChange={() => {
              handleRadioChange("permanentImmigration");
            }}
          />
          <label for="radio5" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Permanent Immigration
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="radio6"
            type="radio"
            name="radio"
            class="hidden"
            onChange={() => handleRadioChange("workPermit")}
          />
          <label for="radio6" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Work Permit
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="radio3"
            type="radio"
            name="radio"
            class="hidden"
            onChange={() => handleRadioChange("studyPermit")}
          />
          <label for="radio3" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Study Permit/Visa
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="radio4"
            type="radio"
            name="radio"
            class="hidden"
            onChange={() => handleRadioChange("touristVisa")}
          />
          <label for="radio4" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Tourist Visa
          </label>
        </div>
        <div class="flex items-center">
          <input id="radio24" type="radio" name="radio" class="hidden" />
          <label for="radio24" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Business Visa
          </label>
        </div>
        <div class="flex items-center">
          <input id="radio25" type="radio" name="radio" class="hidden" />
          <label for="radio25" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Business Immigration
          </label>
        </div>
        <div class="flex items-center">
          <input id="radio26" type="radio" name="radio" class="hidden" />
          <label for="radio26" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Family Sponsorship
          </label>
        </div>
        <div class="flex items-center">
          <input id="radio27" type="radio" name="radio" class="hidden" />
          <label for="radio27" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Dependent Visa
          </label>
        </div>
        <div class="flex items-center">
          <input id="radio28" type="radio" name="radio" class="hidden" />
          <label for="radio28" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            LMIA
          </label>
        </div>
        <div class="flex items-center">
          <input id="radio29" type="radio" name="radio" class="hidden" />
          <label for="radio29" class="flex items-center cursor-pointer">
            <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
            Others
          </label>
        </div>
      </div>
      <PermanentImigration
        selectedForm={selectedForm}
        formType={"Permanent Immigration"}
        personalInfoRef={personalInfoRef}
        ref={personalInfoRef}
      />
      <WorkPermit
        selectedForm={selectedForm}
        formType={"Work Permit"}
        personalInfoRef={workPermitRef}
        workPermitRef={workPermitRef}
      />
      <StudyPermit selectedForm={selectedForm} formType={"Study Permit"} />
      <TouristVisa selectedForm={selectedForm} formType={"Tourist Visa"} />
    </div>
  );
};

export default FreeAssessment;

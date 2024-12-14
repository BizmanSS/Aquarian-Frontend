import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: " Can I apply for more than one category under the IEC?",
    answer:
      "Yes, if you meet the eligibility criteria for multiple categories, you can apply for more than one program simultaneously.",

  },
  {
    question:
      "What are the benefits of the International Experience Class?",
    answer:
      "Participating in the IEC offers numerous benefits:",
    listAnswer: [
      "Participants gain firsthand experience of Canadian culture while sharing their own cultural background.",
      "The opportunity to work in diverse environments enhances participants' resumes and provides valuable international work experience.",
      "Building connections with professionals from various fields can lead to future employment opportunities both in Canada and abroad.",
    ],

  },
  {
    question:
      " How long can I stay in Canada under the IEC?",
    answer:
      "The duration of stay depends on the specific program; generally, participants can stay from several months up to two years.",
  },


];

const countryTableData = [
  { country: "Andorra", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
  { country: "Australia", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Austria", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Belgium", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
  { country: "Chile", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Costa Rica", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Croatia", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Czech Republic", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Denmark", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
  { country: "Estonia", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "France", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Germany", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Greece", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Hong Kong", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
  { country: "Ireland", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Italy", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
  { country: "Japan", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
  { country: "Korea, Rep.", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
  { country: "Latvia", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Lithuania", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Luxembourg", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Mexico", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Netherlands", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "No" },
  { country: "New Zealand", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
  { country: "Norway", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Poland", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Portugal", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Slovakia", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Slovenia", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Spain", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Sweden", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Switzerland", workingHoliday: "No", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Taiwan", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "Ukraine", workingHoliday: "Yes", youngProfessionals: "Yes", internationalCoop: "Yes" },
  { country: "United Kingdom", workingHoliday: "Yes", youngProfessionals: "No", internationalCoop: "No" },
];


export default function InternationalExperienceClass() {
  const whatRef = useRef(null);
  const typesRef = useRef(null);
  const eligibilityRef = useRef(null);
  const applicationRef = useRef(null);

  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "What is IEC?",
      scrollTo: whatRef,
    },
    {
      title: "Types of Programs under the IEC",
      scrollTo: typesRef,
    },
    {
      title: "Eligibility Criteria",
      scrollTo: eligibilityRef,
    },
    {
      title: "Application Process for IEC",
      scrollTo: applicationRef,
    },
    {
      title: "FAQs",
      scrollTo: faqRef,
    },
  ];

  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="W"
          h1="Open Work Permits"
          h2="International Experience Class (IEC)"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Work
              {" > "}Canada Open Work Permit
              {" > "}International Experience Class (IEC)
            </div>
            <div class="pages-header">International Experience Class (IEC)</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The International Experience Class (IEC) is a program initiated by the Canadian government to facilitate cultural exchange and provide young individuals from various countries the opportunity to travel and work in Canada. This program is primarily aimed at youth aged 18 to 35, allowing them to gain international work experience, enhance their skills, and immerse themselves in Canadian culture. The IEC operates under reciprocal agreements between Canada and partner countries. The successful applicants are authorized for a work permit without LMIA for a temporary stay for maximum one year.

            </div>

            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={whatRef}>
              What is IEC?
            </div>
            <div className="pages-paragraph">
              The International Experience Canada (IEC) program offers work permits through a randomized draw system. However, submitting an expression of interest does not guarantee selection. The likelihood of being chosen depends on the available quota for each program and country.

              <div className='mt-4'>The IEC consists of three distinct programs, each with its own eligibility criteria and work authorization type:</div>

              <ul className="my-3">
                <li>
                  Working Holiday
                </li>
                <li>
                  Young Professionals

                </li>
                <li>
                  International Co-op Internship
                </li>

              </ul>

              Although these three programs fall under the IEC umbrella, Canada’s agreements with participating countries vary. Some countries may offer all three options, while others provide only one or two. Applicants should verify the specific requirements and options available for their country.


            </div>

            <div className="note-cec">
              <div >
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={typesRef}>
              Types of Programs under the IEC
            </div>
            <div className="pages-paragraph">

              The IEC consists of three main categories that cater to different needs and circumstances of participants:

              <ul className="my-2 ml-3">
                <li>
                  Working Holiday Visa
                  <ul>
                    <li>This category allows individuals to work for multiple employers in various locations across Canada without needing a job offer beforehand.</li>

                    <li>The applicants are granted open work permits allowing them to change locations or employers in Canada.</li>

                    <li>Participants can earn money while traveling, making it an appealing option for those looking to explore Canada extensively.</li>

                    <li>It is an extremely popular program due to its relaxed requirement.</li>
                  </ul>
                </li>

                <li>
                  Young Professionals Program
                  <ul>
                    <li>The program is designed for individuals who have a job offer in Canada that contributes to their professional development.</li>

                    <li>The applicants are issued a employer specific work permit. </li>

                    <li>They must work for the same employer throughout their stay, and the job must align with their field of study or career aspirations.</li>

                    <li>Eligible positions under the IEC are typically NOC Skill Level 0, A, or B, with success depending on annual country-specific quotas.</li>
                  </ul>
                </li>

                <li>
                  International Co-op (Internship)
                  <ul>
                    <li>This program is tailored for students currently enrolled in post-secondary institutions who need to complete an internship or work placement as part of their studies.</li>

                    <li>Like the Young Professionals Program, participants must have a job offer related to their field of study and will work for the same employer during their stay.</li>

                    <li>Applicants receive a employer-specific work permit which means they can not change employers or their locations in Canada.</li>

                  </ul>
                </li>


              </ul>

            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Eligibility Criteria for IEC
            </div>
            <div class="pages-paragraph">
              To participate in the IEC, applicants must meet specific eligibility requirements:
              <ul className="my-2 ml-3">
                <li>
                  Applicants must be between 18 and 35 years old (the exact age limit may vary by country).
                </li>

                <li>
                  They must be citizens of a country that has a reciprocal agreement with Canada under the IEC.
                </li>

                <li>
                  Depending on the job type and duration of stay, some applicants may need to undergo a medical examination.
                </li>
                <li>
                  Participants must demonstrate they have sufficient funds to support themselves upon arrival in Canada.

                </li>


              </ul>

              <div style={{
                fontSize: "22px",
                fontWeight: 'bold',
                marginTop: '40px',
                marginBottom: '20px'
              }}>
                Countries with Reciprocal Agreement with Canada
              </div>

              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Working Holiday</th>
                        <th>Young Professionals</th>
                        <th>International Co-op</th>
                      </tr>
                    </thead>
                    <tbody>
                      {countryTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.country}</td>
                          <td>{row.workingHoliday}</td>
                          <td>{row.youngProfessionals}</td>
                          <td>{row.internationalCoop}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>


            </div>

            <div class="pages-header-2" ref={applicationRef} >
              Application Process for IEC
            </div>
            <div class="pages-paragraph">

              The application process for the IEC involves several steps:

              <ul className="my-2 ml-3">
                <li>
                  Interested candidates must create an online profile through the Immigration, Refugees and Citizenship Canada (IRCC) website.
                </li>

                <li>
                  The IEC conducts regular draws where candidates are randomly selected from the pool based on quotas set for each participating country.
                </li>

                <li>
                  Once invited, candidates can submit their application along with necessary documentation, including proof of funds, job offers (if applicable), and other supporting documents.
                </li>
                <li>
                  Successful applicants will receive a work permit corresponding to their chosen program category.
                </li>


              </ul>
              Participants in the IEC program are protected by Canadian labor laws. Employers must adhere to regulations regarding minimum wage, workplace safety, and employee rights. Participants should be aware of their rights as foreign workers and report any violations they encounter during their employment.

            </div>

          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      " Is there an application fee for the NLPNP Skilled Worker Stream?",
    answer:
      "Yes, there is an application fee of CAD 250 for the NLPNP Skilled Worker Stream, while there is no fee for the International Graduate Stream.",
  },
  {
    question: "Can applicants apply if they are currently in Canada on a visitor visa?",
    answer:
      "Yes, applicants currently in Canada on a visitor visa can apply for the NLPNP Skilled Worker Stream, provided they meet all eligibility criteria, including having a valid job offer and work permit.",
  },

  {
    question:
      "What happens if an applicant is denied under the NLPNP Skilled Worker Stream?",
    answer:
      " If an applicant is denied under the NLPNP Skilled Worker Stream, they will receive a notification explaining the reasons for the denial. Applicants can reapply if they address the issues cited in their previous application, but they must ensure they meet all eligibility requirements before submitting again.",
  },
];

const nlpnpTableData=[
     {
      factor:'Age',
      points:'12',
     },
     {
      factor:'Connection to Labour Market',
      points:'13',
     },
     {
      factor:'Work Experience',
      points:'20',
     },
     {
      factor:'Language Proficiency',
      points:'27',
     },
     {
      factor:'Education',
      points:'28',
     },
     {
      factor:'Minimum Pass Score',
      points:'67',
     },
]

export default function NLNPExpressEntrySkilledWorkers() {
  const eligibilityRef = useRef(null);
  const eeRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "NLPNP Skilled Worker Eligibility Criteria",
      scrollTo: eligibilityRef,
    },
    {
      title: "NLPNP Skilled Worker Application Process",
      scrollTo: eeRef,
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
          type="I"
          h1="Provincial Nominee Program"
          h2="Newfoundland and Labrador"
          h3="Newfoundland and Labrador Skilled Worker Category"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Newfoundland and Labrador
              {" > "}Newfoundland and Labrador Skilled Worker Category
            </div>
            <div class="pages-header">NLPNP Skilled Worker Category</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Newfoundland and Labrador Provincial Nominee Program Skilled Worker Stream is an important immigration pathway. It allows employers in Newfoundland and Labrador to nominate individuals with specialized skills essential for their operations. It welcomes foreign workers of all NOC Skill Levels for its province nomination.

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2"  ref={eligibilityRef}>
            NLPNP Skilled Worker Eligibility Criteria
            </div>
            <div className="pages-paragraph">
            To qualify for the NLPNP Skilled Worker Stream, applicants must meet several criteria:

              {/* <div className='font-bold mt-2'>Eligibility Requirements:</div> */}

              <ul className="my-2 ">
                <li>
                They must have a full-time job offer from an eligible employer in Newfoundland and Labrador. This offer must comply with provincial employment standards and prevailing wage rates.

                </li>

                <li>
                Successful candidates must prove they have sufficient funds to support themselves and any dependents for at least three months upon arrival in Newfoundland and Labrador.
                </li>

              </ul>

              Applicants must demonstrate that they have the necessary qualifications, training, skills, and/or accreditation required for the job.

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={eeRef}>
            NLPNP Skilled Worker Application Process
            </div>
            <div className="pages-paragraph">
            The application process for the NLPNP Skilled Worker Stream key steps include:
        
            <ul className="my-2 ">
                <li>
                Candidates can submit their complete applications via paper forms. The fee is CAD 250.

                </li>

                <li>
                If the application is approved, applicants will receive a confirmation of nomination from the NLPNP, which allows them to apply for permanent residency through the federal government within 6 months.
                </li>

                <li>
                Following nomination, candidates must submit their application for permanent residency. 
                </li>

              </ul>

              Those applying through the Express Entry stream will use the online system, while others will send paper applications to the IRCC Centralized Intake Office. The applications are generally processed within 18 months.

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

import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: "What types of jobs qualify under the Skilled Worker Stream?",
    answer:
      "Jobs that qualify typically fall under NOC Skill Levels 0, A, B, C, or D. However, priority is given to higher-skilled positions.",
  },
  {
    question:
      "Can I apply to the NS Skilled Worker Stream if I am currently working in Canada on a temporary work permit?",
    answer:
      " Yes, individuals currently working in Canada on a temporary work permit can apply for the Skilled Worker Stream if they meet all eligibility criteria.",
  },
];

export default function NSInternationalGraduateInDemand() {
  const EligibilityRef = useRef(null);
  const ApplicationRef = useRef(null);
  const faqRef = useRef(null);
  const SkilledRef = useRef(null);

  const tableContentData = [
    {
      title: "NS Skilled Worker Stream Eligibility Criteria",
      scrollTo: EligibilityRef,
    },
    {
      title: "NS Skilled Worker Stream Application Process",
      scrollTo: ApplicationRef,
    },
    {
      title: "Sub-Categories for NS Skilled Worker Stream",
      scrollTo: SkilledRef,

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
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="Nova Scotia"
          h3="Nova Scotia Skilled Worker Category"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}Nova Scotia Skilled Worker Category
            </div>
            <div class="pages-header">Nova Scotia Skilled Worker Category</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Nova Scotia Skilled Worker Stream is a pathway of the Nova
              Scotia Nominee Program (NSNP). The stream facilitates the
              immigration of foreign workers and international graduates who
              have the required skills that are in demand within the province.
              This stream allows employers in Nova Scotia to recruit individuals
              when they cannot find suitable candidates among Canadian citizens
              or permanent residents.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={EligibilityRef}>
              NS Skilled Worker Stream Eligibility Criteria
            </div>
            <div className="pages-paragraph">
              To qualify for the Nova Scotia Skilled Worker Stream, applicants
              must meet several key criteria:
              <ul className="my-3">
                <li>
                  Applicants must have a full-time, permanent job offer from an
                  eligible employer in Nova Scotia who has been in operation for
                  at least 2 years. The job must not have an end date and should
                  require a minimum of 30 hours of work per week.
                </li>
                <li>
                  Candidates need at least one year of full-time work experience
                  in the same occupation as their job offer. For positions
                  classified under NOC Skill Levels C or D, applicants must have
                  worked with the employer for at least six months.
                </li>

                <li>
                  A minimum educational qualification of a Canadian high school
                  diploma or its international equivalent is required.
                  <li>
                    Language Proficiency is required depending on the NOC
                    classification of the job:
                  </li>
                  <ul>
                    <li>
                      <strong>NOC 0, A, or B:</strong> CLB level 5.
                    </li>
                    <li>
                      <strong>NOC C or D:</strong> CLB level 4.
                    </li>
                    <li>
                      Native speakers of English or French may be exempt from
                      language testing if applying for NOC 0, A, or B roles.
                    </li>
                  </ul>
                </li>
                <li>
                  Applicants must have sufficient funds to support themselves
                  and their dependents upon arrival in Nova Scotia.
                </li>
              </ul>
            </div>
            <div class="pages-header-2" ref={ApplicationRef}>
              NS Skilled Worker Stream Application Process
            </div>
            <div className="pages-paragraph">
              The application process for the Nova Scotia Skilled Worker Stream
              involves several steps:
              <ul className="my-3">
                <li>
                  Compile documents, including proof of work experience,
                  educational credentials, language test results, and a valid
                  job offer letter from their employer.
                </li>
                <li>
                  Applications can be submitted at any time and are processed on
                  a first-come, first-served basis. Successful candidates will
                  receive a provincial nomination which allows them to apply for
                  permanent residence through federal channels within six
                  months.
                </li>
                <li>
                  After receiving a provincial nomination, applicants must
                  complete a paper-based application for Canadian permanent
                  residence which is typically processed within 18 months.
                </li>
              </ul>
            </div>
            <div class="pages-header-2" ref={SkilledRef}>
              Sub-Categories for NS Skilled Worker Stream
            </div>
            <div className="pages-paragraph">
              The Skilled Worker Stream encompasses three sub-categories based
              on skill levels:
              <ul className="my-3">
                <li>
                  <strong>Skilled Workers (NOC 0, A, B):</strong> Applications
                  from individuals with high-demand skills.
                </li>
                <li>
                  <strong>Semi-Skilled Workers (NOC C):</strong> Applicants must
                  have worked at least six months with their Nova Scotian
                  employer.
                </li>
                <li>
                  <strong>Low-Skilled Workers (NOC D): </strong>Applications are
                  considered only if candidates have worked for at least six
                  months with a supportive employer.
                </li>
              </ul>
              The processing time for applications can vary; however, once
              nominated by Nova Scotia, federal applications for permanent
              residence generally take about 18 months to process.
            </div>
          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

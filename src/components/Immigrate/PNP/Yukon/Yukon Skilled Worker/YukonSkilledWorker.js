import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      "  Can I apply to the Yukon Skilled Worker stream without a job offer?",
    answer:
      "No, a valid job offer from an eligible employer in Yukon is mandatory.",
  },
  {
    question: "Do I need to provide proof of funds for the YSW stream?",
    answer:
      "While proof of funds is not explicitly required for this program, applicants should be financially stable during their transition.",
  },
];

export default function YukonSkilledWorker() {
  const faqRef = useRef(null);
  const RequirementsRef = useRef(null);
  const ApplicantsRef = useRef(null);
  const EmployerRef = useRef(null);
const ApplicationRef = useRef(null);
  const tableContentData = [
    {
      title: "Eligibility Requirements for Yukon Skilled Worker",
      scrollTo: RequirementsRef,
    },
    {
      title: "For Applicants",
      scrollTo: ApplicantsRef,
    },
    {
      title: "For Employers",
      scrollTo: EmployerRef,
    },
    {
      title: "Yukon Skilled Worker Application Process",
      scrollTo: ApplicationRef,
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
          h2="Yukon"
          h3="Yukon Skilled Worker"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Yukon
              {" > "}Yukon Skilled Worker
            </div>
            <div class="pages-header">Yukon Skilled Worker</div>
            <div class="pages-paragraph space-fix intro-size-fix">
              The Yukon Skilled Worker Program is a component of the Yukon
              Nominee Program (YNP), managed by the province. It is designed to
              fill labor gaps and attract skilled labor to the Yukon Territory
              in Canada. This program addresses labor shortages by allowing
              employers in Yukon to nominate foreign skilled workers for
              permanent residency. It allows eligible candidates to obtain a
              provincial nomination, an important step for applying for Canadian
              permanent residency. The program requires a full-time job offer
              from an eligible Yukon employer.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={RequirementsRef}>
              Eligibility Requirements for Yukon Skilled Worker
            </div>
            <div className="pages-paragraph">
              To qualify for the Yukon Skilled Worker Program, both the
              applicant and the employer must meet specific criteria:
              <br></br>
              <br></br>
             <div ref={ApplicantsRef} class="text-2xl my-3">For Applicants</div> 

              <ul className="my-3" ref={ApplicantsRef}>
                <li>
                  They must have a full-time, permanent job offer from a Yukon
                  employer in a position classified under NOC skill level 0, A,
                  or B.
                </li>
                <li>
                  The applicant need to have a minimum of 12 months of full-time
                  work experience.
                </li>
                <li>
                  Candidates must have at least a high school diploma; higher
                  education depending on the offered job.
                </li>
                <li>
                  Language Proficiency:
                  <ul>
                    <li>CLB 7 or higher for NOC TEER 0 and A positions.</li>
                    <li>CLB 5 or higher for NOC Level B positions.</li>
                  </ul>
                </li>
              </ul>
             <div ref={EmployerRef} class="text-2xl my-3" > For Employers</div> 
              <ul >
                <li>
                  A Yukon business must operate for at least one year.
                 <ul> <li>
                    Non-profit organizations need at least 3 years of operation
                    and funding for one year after applying to the Yukon Nominee
                    Program (YNP).
                  </li></ul>
                </li>
                <li>
                  The job must pay wages that meet industry standards and
                  demonstrate that efforts were made to hire Canadian citizens
                  or permanent residents before offering the position to a
                  foreign worker.
                 <ul> <li>
                    This includes advertising the position for a minimum of four
                    weeks in at least two local and one national recruitment
                    medium.
                  </li></ul>
                </li>
              </ul>
            </div>
            <div class="pages-header-2" ref={ApplicationRef}>
              Yukon Skilled Worker Application Process
            </div>
            <div className="pages-paragraph">
              The applications to Yukon Skilled Worker are open at all times.
              The application process involves given steps:
              <ul className="my-3">
                <li>
                  The applicant and employer must prepare a complete application
                  together.
                </li>
                <li>
                  The employer submits the application for provincial nomination
                  to the Yukon government.
                </li>
                <li>
                  Applications are typically processed within 8 to 10 weeks.
                </li>
                <li>
                  If nominated, applicants must submit their federal application
                  for permanent residency within six months.
                </li>
              </ul>
              The applicant will receive a letter of support for a temporary
              work permit, enabling them to work in Yukon while their permanent
              residence application is processed. This work permit application
              is separate from the permanent residency application.
            </div>
            After obtaining a provincial nomination, the applicant has six
            months to submit their federal application for permanent residence,
            which must be mailed as a paper-based application.
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

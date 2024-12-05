import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What type of job offers are acceptable under the NLPNP International Graduate category?",
    answer:
      "Job offers must be full-time positions from eligible employers in NOC 0, A, B, or C occupations that guarantee at least 30 hours per week.",
  },
  {
    question: "How long do I need to have my Post-Graduation Work Permit valid when applying?",
    answer:
      "You must have at least four months of validity remaining on your PGWP at the time of your application.",
  },

 
];



export default function NLNPAndLabradorInternationalGraduateCategory() {
  const eligibilityRef = useRef(null);
  const eeRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Criteria for NLPNP International Graduate Stream",
      scrollTo: eligibilityRef,
    },
    {
      title: "NLPNP International Graduate Stream Application Process",
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
          h3="Newfoundland and Labrador International Graduate Category"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Newfoundland and Labrador
              {" > "}Newfoundland and Labrador International Graduate Category
            </div>
            <div class="pages-header">NLPNP International Graduate</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Newfoundland and Labrador Provincial Nominee Program (NLPNP) International Graduate category offers a pathway for recent international graduates to obtain permanent residency in Canada. This program is important for graduates seeking to establish their careers in Newfoundland and Labrador, a province known for its unique culture and growing job market. The stream is for individuals who have recently completed at least half of their studies at a recognized post-secondary institution in Canada and hold a valid Post-Graduation Work Permit (PGWP). 
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2"  ref={eligibilityRef}>
            Eligibility Criteria for NLPNP International Graduate Stream
            </div>
            <div className="pages-paragraph">
            To qualify for the NLPNP International Graduate category, applicants must meet specific criteria like:

              {/* <div className='font-bold mt-2'>Eligibility Requirements:</div> */}

              <ul className="my-2 ">
                <li>
                Applicants must have graduated from an eligible publicly funded Canadian college or university with a diploma or degree program that lasted at least two academic years: One-year post-graduate programs are also eligible if they require a previous degree.

                </li>

                <li>
                A full-time job offer from an eligible employer in Newfoundland and Labrador is mandatory: The job must be in a National Occupational Classification (NOC) 0, A, B, or C occupation that is on the province’s In-Demand Occupations List. 
                </li>

              </ul>

              Applicants must express their intention and ability to settle permanently in the province.

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={eeRef}>
            NLPNP International Graduate Stream Application Process
            </div>
            <div className="pages-paragraph">
      
            <ul className="my-2 ">
                <li>
                Collect all necessary documents, including proof of education, job offer, language test results, and financial statements.
                </li>

                <li>
                Applications can be submitted online through the NLPNP portal. 
                </li>

                <li>
                Successful applicants will receive a provincial nomination, which they can then use to apply for permanent residence with Immigration, Refugees and Citizenship Canada (IRCC).
                </li>

                <li>
                After receiving the nomination, candidates have six months to submit their federal application for permanent residency.
                </li>

              </ul>
              This program provides an expedited route for international graduates to become permanent residents of Canada. By attracting skilled graduates, Newfoundland and Labrador can fill critical labor shortages in various sectors. 

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

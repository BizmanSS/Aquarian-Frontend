import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      " What is the NLPNP International Graduate Entrepreneur program?",
    answer:
      "It is a pathway for international graduates from recognized Newfoundland institutions to start or manage businesses in the province while applying for permanent residency.",
  },
  {
    question: "Who is eligible to apply for NLPNP International Graduate Entrepreneur program?",
    answer:
      "Applicants must be at least 21 years old, hold a degree from MUN or CNA, have relevant work experience, meet language proficiency requirements, and submit a viable business plan.",
  },
  {
    question: "What are the two sub-categories under NLPNP International Graduate Entrepreneur program?",
    answer:
      "The two sub-categories are Starting a New Business and Purchasing an Existing Business.",
  },

];



export default function NLNPAndLabradorInternationalGraduateEntrepreneurStream() {
  const eligibilityRef = useRef(null);
  const eeRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Who is Eligible for NLPNP International Graduate Entrepreneur Stream?",
      scrollTo: eligibilityRef,
    },
    {
      title: "Sub-Categories",
      scrollTo: eeRef,
    },
    {
      title: "How to Apply for NLPNP International Graduate Entrepreneur Stream?",
      scrollTo: applyRef,
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
          h3="Newfoundland and Labrador International Graduate Entrepreneur Category"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Newfoundland and Labrador
              {" > "}Newfoundland and Labrador International Graduate Entrepreneur Stream
            </div>
            <div class="pages-header">NLPNP International Graduate Entrepreneur</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Newfoundland and Labrador Provincial Nominee Program is for international graduates to establish themselves as entrepreneurs by establishing, co-managing or purchasing a business in the province. The candidates must have completed their education at recognized institutions in Newfoundland and Labrador.
              <div className='mt-3'>
                Graduates from Memorial University of Newfoundland (MUN) or the College of the North Atlantic (CNA) are eligible if they have completed at least two years of full-time study.
              </div>

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Who is Eligible for NLPNP International Graduate Entrepreneur Stream?
            </div>
            <div className="pages-paragraph">
            To qualify for the NLPNP International Graduate Entrepreneur category, applicants must meet several criteria:

              {/* <div className='font-bold mt-2'>Eligibility Requirements:</div> */}

              <ul className="my-2 ">
                <li>
                  Applicants must be between 21 and 59 years old.

                </li>

                <li>
                Age: Applicants must be at least 21 years old.
                </li>

                <li>
                A in-person post secondary program of atleast 2 years at either Memorial University or College of North Atlantic. The program should have been completed within 2 years of EOI submission.
                </li>

                <li>
                At least one year of active management and ownership in a business in Newfoundland and Labrador is required.
                </li>


                <li>
                A minimum score of 7 on the Canadian Language Benchmark (CLB) test.
                </li>



              </ul>

        <div className='my-3'>
          <strong>Sub Categories</strong>
        </div>

        <ul>
          <li>Applicants must create a new enterprise that generates employment.</li>
          <li>Purchase an existing business that has been operational for at least five years under the same ownership.</li>
        </ul>

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={eeRef}>
            How to Apply for NLPNP International Graduate Entrepreneur Stream?
            </div>
            <div className="pages-paragraph">
            Candidates must submit an EOI to indicate their interest in applying for the program. The NLPNP conducts periodic draws to invite candidates with competitive EOIs. After receiving an ITA, applicants must submit a complete application along with supporting documents and pay a fee of CAD $250. Candidates must provide proof of their financial capacity through a Net Worth Verification Report.

             
              <div className='mt-3'>According to statistics from the Government of Newfoundland and Labrador, successful nominees can enhance economic diversity and stability within the province. The NLPNP International Graduate Entrepreneur category presents a valuable opportunity for international graduates to transition into successful business owners in Newfoundland and Labrador.
              </div>
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

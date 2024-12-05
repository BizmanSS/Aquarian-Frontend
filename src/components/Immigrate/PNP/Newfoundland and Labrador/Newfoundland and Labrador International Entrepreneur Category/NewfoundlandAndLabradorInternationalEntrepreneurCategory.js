import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What types of businesses are eligible under the NLPNP International Entrepreneur category?",
    answer:
      "Eligible businesses include those that are actively managed by the applicant from within Newfoundland and Labrador and have potential economic benefits for the province. Ineligible businesses include remote operations and property rental activities.",
  },
  {
    question: "Is there an application fee for this program?",
    answer:
      "There is no fee for submitting an Expression of Interest or applying through this category.",
  },
  {
    question: "Can I apply with partners for NLPNP International Entrepreneur Stream?",
    answer:
      "Yes, applicants may propose up to nine partners; however, each partner must also meet specific eligibility criteria regarding investment and active management participation.",
  },

];



export default function NLNPAndLabradorInternationalEntrepreneurStream() {
  const eligibilityRef = useRef(null);
  const eeRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Candidate Requirements for NLPNP International Entrepreneur",
      scrollTo: eligibilityRef,
    },
    {
      title: "How to Apply to NLPNP International Entrepreneur Stream?",
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
          h3="Newfoundland and Labrador International Entrepreneur Category"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Newfoundland and Labrador
              {" > "}Newfoundland and Labrador International Entrepreneur Stream
            </div>
            <div class="pages-header">NLPNP International Entrepreneur Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Newfoundland and Labrador International Entrepreneur Immigration category is designed for experienced business owners who wish to establish, co-manage, or purchase a business in the province. This helps them secure permanent residency in Canada. The NLPNP International Entrepreneur category is designed to attract foreign nationals with management and finance experience to operate a business in the Newfoundland province.

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Candidate Requirements for NLPNP International Entrepreneur
            </div>
            <div className="pages-paragraph">
              To qualify for the NLPNP International Entrepreneur category, the program requirements are:

              {/* <div className='font-bold mt-2'>Eligibility Requirements:</div> */}

              <ul className="my-2 ">
                <li>
                  Applicants must be between 21 and 59 years old.

                </li>

                <li>
                  Candidates should have at least two years of ownership and active management experience of a business (with a minimum ownership stake of 33.3%) within the last five years or five years of senior business manager experience.
                </li>

                <li>
                  Applicants must show a minimum net worth of CAD 600,000. They must be prepared to invest at least CAD 200,000 in a new or existing business in Newfoundland and Labrador or CAD 1 million for a larger investment.
                </li>

                <li>
                  Applicants need to be proficient in English or French with atleast CLB level 5.

                </li>


                <li>
                  They must show that they have completed a minimum education equivalent to a Canadian high school diploma, supported by an Educational Credential Assessment (ECA).

                </li>



              </ul>

              Entrepreneurs are required to create at least one full-time equivalent job for a Canadian citizen or permanent resident.

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={eeRef}>
            How to Apply to NLPNP International Entrepreneur Stream?
            </div>
            <div className="pages-paragraph">
              You can apply to NLPNP International Entrepreneur category by:
              <ul className="my-2 ">
                <li>
                  Prospective applicants submit an EOI as a notification of interest in applying for the program.
                </li>

                <li>
                  Candidates will be ranked against each other and those who score at least 72 points on the EOI grid may receive an ITA from the NLPNP.

                </li>

                <li>
                  After receiving an ITA, applicants must submit a complete application within 90 days, including all required documentation and their business establishment plan.
                </li>

                <li>
                  An application fee of CAD 1000 needs to be paid along with a Business Establishment Plan to outline their intentions.

                </li>

              </ul>
              If their application is complete, they will attend an in-person interview in Newfoundland and Labrador. Upon a successful interview, they sign a Business Performance Agreement outlining their commitments.
              <div className='mt-3'>Upon successful evaluation of the application, candidates may receive a provincial nomination, allowing them to apply for permanent residency with Immigration, Refugees and Citizenship Canada (IRCC).The NLPNP International Entrepreneur category benefits individual entrepreneurs while significantly contributing to the provincial economy. It promotes innovation, creates jobs, and provides an opportunity for immigration to international entrepreneurs.</div>
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

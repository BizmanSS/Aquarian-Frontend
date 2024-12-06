import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "Is there a language requirement for NWT Business Stream applicants?",
    answer:
      " Yes, candidates must demonstrate proficiency in English or French at Canadian Language Benchmark (CLB) level 4.",
  },
  {
    question: " Can I apply for NWT Business Stream if I have previous immigration applications pending?",
    answer:
      " No, applicants cannot have active applications with other provincial nominee programs or streams within the NWT at the same time.",
  },

  {
    question:
      "What documentation is required for NWT Business Stream during application?",
    answer:
      "Applicants need to submit financial statements, a detailed business plan, proof of net worth, and identification documents.",
  },
];

export default function NWTBusinessStream() {
  const requirementRef = useRef(null);

  const applyRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Requirements for NWT Business Stream",
      scrollTo: requirementRef,
    },
    {
      title: "Applying for NWT Business Stream",
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
          h2="Northwest Territories"
          h3="Northwest Territories Business Driven"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Northwest Territories
              {" > "}Northwest Territories Business Driven Stream
            </div>
            <div class="pages-header">NWT Business Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Northwest Territories (NWT) Business Stream attracts foreign entrepreneurs to invest in and operate businesses within the NWT region. This stream supports economic development and facilitates immigration for business-minded individuals. This helps individuals get permanent residency in Canada to establish themselves there. The stream is known for its faster processing times and no waitlisting.


            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={requirementRef}>
            Requirements for NWT Business Stream
            </div>
            <div className="pages-paragraph">
            Applicants must meet the following requirements:

              <ul className="my-2 ">
                <li>
                They must have a minimum personal net worth of 500,000 CAD if starting or purchasing a business in Yellowknife, or 250,000 CAD for businesses outside Yellowknife.
                </li>

                <li>
                A minimum investment of 200,000 CAD is required for businesses within Yellowknife's corporate boundaries, while a 100,000 CAD investment is necessary for those outside.
                </li>
                <li>
                Applicants must own at least 33.3% of the business unless their equity investment exceeds 1,000,000 CAD, allowing for less ownership.
                </li>
                <li>
                They must be proficient in English (CLB Level 4) or equivalent level in French.
                </li>

                <li>
                They must be willing to settle full-time in NWT province.
                </li>

              </ul>

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={applyRef}>
            Applying for NWT Business Stream
            </div>
            <div className="pages-paragraph">
            The application process involves several steps:

              <ul className="my-2 ">
                <li>
                Prospective applicants self-assess their eligibility based on the outlined criteria.
                </li>

                <li>
                A trip to the NWT is required to understand the local business environment.
                </li>
                <li>
                Applicants must submit a comprehensive business plan detailing their proposed venture.
                </li>
                <li>
                Following submission, a pre-screening takes place along with an interview with program staff to evaluate the business concept.
                </li>

                <li>
                If approved, applicants enter into a BPA with the government, outlining their obligations and goals.

                </li>

              </ul>

              Applications to the NWT Business Stream are processed without a waiting list, allowing for quicker responses and decisions. Successful candidates can apply for permanent residency in Canada after fulfilling their BPA requirements.

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

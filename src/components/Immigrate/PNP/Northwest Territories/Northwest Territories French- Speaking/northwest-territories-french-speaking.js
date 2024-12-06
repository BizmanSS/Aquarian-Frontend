import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "Are there any fees associated with applying for the NWT Francophone stream?",
    answer:
      " No application fees are required when applying for the NTNP.",
  },
  {
    question: "  Can I apply for NWT Francophone if I am currently outside Canada?",
    answer:
      "Yes, applicants outside Canada do not need a work permit to apply but will need one upon nomination.",
  },

  {
    question:
      "Is there a specific timeframe for processing Francophone applications?",
    answer:
      "Processing times can exceed one year; however, applicants with work permits are nearing expiry are given priority.",
  },
];

export default function NWTFrancophoneStream() {
  const eligibilityRef = useRef(null);
  const applicationRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Criteria for the NWT Francophone Stream",
      scrollTo: eligibilityRef,
    },
    {
      title: "Application Process for NWT Francophone Stream",
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
          type="I"
          h1="Provincial Nominee Program"
          h2="Northwest Territories"
          h3="Northwest Territories Francophone"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Northwest Territories
              {" > "}NWT Francophone Stream
            </div>
            <div class="pages-header">NWT Francophone Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Northwest Territories Francophone Stream is a key component of the Northwest Territories Nominee Program. The program is designed to attract French-speaking immigrants to the region. This stream aims to enhance the Francophone (French-speaking) population outside Quebec. This aligns with the broad immigration goals of the Canadian government.


            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Eligibility Criteria for the NWT Francophone Stream
            </div>
            <div className="pages-paragraph">
              Applicants must meet the following eligibility criteria for the NWT Francophone Stream:

              <ul className="my-2 ">
                <li>
                  Valid full-time job offer from an NWT employer across all National Occupational Classification (NOC) TEER categories (0, 1, 2, 3, 4, and 5).
                </li>

                <li>
                  A minimum of one year of relevant work experience is required, or six months of experience specifically in the NWT.
                </li>
                <li>
                  Candidates must demonstrate proficiency in French and English, achieving at least a Canadian Language Benchmark (CLB) Level 5 in French and CLB Level 4 in English across all language abilities.
                </li>
                <li>
                  Applicants must not be refugee claimants and must fulfil any necessary licensing or certification requirements for their occupation.
                </li>

              </ul>

              Applicants residing in Canada must hold a valid work permit during the application process. Those applying from abroad can receive a work permit support letter if nominated.

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={applicationRef}>
              Application Process for NWT Francophone Stream
            </div>
            <div className="pages-paragraph">
              Applications can be submitted online through the NTNP portal. There is no need for an Expression of Interest (EOI) before application.
              <ul className="my-2 ">
                <li>
                The Francophone Stream operates independently of the federal Express Entry system.
                </li>

                <li>
                Applicants nominated by the Northwest Territories must apply for permanent residence through the standard federal process.

                </li>
                <li>
                  Applicants must submit a comprehensive business plan detailing their proposed venture.
                </li>
                <li>
                Processing times for these applications often exceed one year.

                </li>


              </ul>

              As of July 2024, applications for the Francophone Stream are temporarily paused due to reaching the maximum allocation cap for nominations set by the Government of Canada (300 nominations for 2024). The program is expected to reopen for full intake in January 2025.

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

import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What happens after I receive my NWT Express Entry provincial nomination?",
    answer:
      " You have six months to submit your federal application for permanent residence.",
  },
  {
    question: "Do I need a Labour Market Impact Assessment (LMIA)?",
    answer:
      " An LMIA is not required if you have a valid job offer from an NWT employer as part of this stream.",
  },

  {
    question:
      "What types of jobs qualify under this NWT Express Entry stream?",
    answer:
      "Jobs classified under NOC TEER categories 0, 1, 2, or 3 qualify.",
  },
];

export default function NorthwestTerritoriesExpressEntryStream() {
  const eligibilityRef = useRef(null);
  const eeRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Criteria for NWT Express Entry Stream",
      scrollTo: eligibilityRef,
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
          h3="Northwest Territories Express Entry"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Northwest Territories
              {" > "}Northwest Territories Express Entry Stream
            </div>
            <div class="pages-header">Northwest Territories Express Entry Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Northwest Territories Express Entry Stream is a pathway to attract skilled workers to the NWT region. It is a stream of Northwest Territories Nominee Program (NTNP). This stream provides a pathway for foreign nationals who are already in the Express Entry Pool managed by Immigration, Refugees and Citizenship Canada (IRCC). The applications for NWT Express Entry Stream are processed in an accelerated way.


            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Eligibility Criteria for Northwest Territories Express Entry Stream
            </div>
            <div className="pages-paragraph">
              NWT Express Entry System is aligned with the Federal Express Entry pathway. The specific Express Entry stream requirements are:

              <div className="my-3 font-bold">Federal Skilled Worker (FSW)</div>

              <ul className="my-2 ">
                <li>
                  Minimum high school diploma.
                </li>

                <li>
                  At least 1 year of continuous full-time skilled work (NOC Skill Level 0, A, or B).
                </li>
                <li>
                  CLB level 7 in English or French.
                </li>

              </ul>

              <div className="my-3 font-bold">Canadian Experience Class (CEC)</div>

              <ul className="my-2 ">
                <li>
                  No minimum education requirement.
                </li>

                <li>
                  Minimum 1 year of full-time skilled work in Canada within the last 3 years (NOC Skill Level 0, A, or B).
                </li>
                <li>
                  CLB level 7 for NOC Skill Level 0 or A; CLB level 5 for NOC Skill Level B.
                </li>

              </ul>

              <div className="my-3 font-bold">Federal Skilled Trades (FST)</div>

              <ul className="my-2 ">
                <li>
                No minimum education requirement.
                </li>

                <li>
                At least 2 years of full-time work experience in a skilled trade.
                </li>
                <li>
                Must have a job offer in a skilled trade or a Canadian certificate of qualification.
                </li>
                <li>
                CLB level 5 for speaking and listening; CLB level 4 for reading and writing.
                </li>

              </ul>

              The employer must submit a nomination application to the NTNP on behalf of the candidate. Once submitted, applications are typically processed within 10 weeks, followed by an additional period for federal processing after provincial nomination.

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
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

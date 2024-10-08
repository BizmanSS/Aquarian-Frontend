import React, { useRef } from "react";

import "../../../styles/pages.css";
import TableOfContent from "../../shared/TableOfContent.jsx";
import FaqBox from "../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "Can seasonal agricultural workers apply for the Agri-Food Pilot?",
    answer:
      "No, the Agri-Food Pilot is for non-seasonal, full-time workers. Seasonal workers are not eligible for this program.",
  },
  {
    question: " How long is the Agri-Food Pilot expected to run?",
    answer:
      "The pilot is currently set to run until May 2025. However, this could be extended depending on its success and the demand for workers in the agri-food sector.",
  },
  {
    question: "Can family members be included in the application?",
    answer: `Yes, family members such as your spouse or common-law partner and dependent children can be included in your application for permanent residence.
`,
  },
  {
    question: "Can I apply for the Agri-Food Pilot if I am already working in Canada?",
    answer:
      " Yes, as long as you meet the work experience and other eligibility requirements, you can apply even if you are currently working in Canada under a temporary work permit.",
  },

];

export default function AgriFoodPilot() {
  const aboutPRCRef = useRef(null);
  const eligbilityRef = useRef(null);
  const occupationRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      id: 1,
      content: "What is Agri-Food Immigration Pilot?",
      scrollTo: aboutPRCRef,
    },
    {
      id: 2,
      content: "Agri-Food Immigration Pilot: Eligibility Requirements",
      scrollTo: eligbilityRef,
    },
    {
      id: 3,
      content: "Eligible Occupations for the Agri-Food Immigration Pilot",
      scrollTo: occupationRef,
    },
    {
      id: 4,
      content: "Frequently Asked Questions",
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
          h1="Agri-Food Pilot"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Agri Food Pilot
            </div>
            <div class="pages-header">Agri-Food Immigration Pilot</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada’s agriculture and agrifood industry contributes
              significantly to the nation’s economy, adding more than $110
              billion annually to the country’s GDP. Recognizing the importance
              of growth in this sector, the Canadian government launched the
              Agri-Food Pilot (AFP) in 2020.
            </div>

            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutPRCRef}>
              What is Agri-Food Immigration Pilot?
            </div>
            <div className="pages-paragraph">
              The Agri-Food Immigration Pilot provides a pathway to permanent
              residence for agricultural workers in Canada.
              <ul className="my-2">
                <li>
                  The program responds to the labour shortages in the
                  agriculture and agri-food sectors in Canada.
                </li>
                <li>
                  These sectors have traditionally relied on short-term,
                  seasonal work permits.
                </li>
                <li>
                  The pilot program was created to attract and retain skilled
                  workers.
                </li>
                <li>
                  Employers in the agriculture sector who participate in the
                  pilot can benefit from a two-year Labour Market Impact
                  Assessment (LMIA), helping them fill key roles efficiently.
                </li>
              </ul>
              It offers them and their families the opportunity to live and work
              in Canada permanently.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={eligbilityRef}>
              Agri-Food Immigration Pilot: Eligibility Requirements
            </div>

            <div className="pages-paragraph">
              The eligibility requirements to participate in the pilot are:
              <br></br>
              <ul>
                <li>
                  <strong>Work experience </strong>of at least 12 months of
                  full-time, non-seasonal Canadian work experience in an
                  eligible occupation (processing meat products, raising
                  livestock, or growing greenhouse crops.)
                </li>
                <li>
                  <strong>Language Proficiency </strong> in English or French -
                  at least Canadian Language Benchmark (CLB) level 4.
                </li>
                <li>
                  <strong>Educational Requirements </strong>of at least a
                  Canadian high school diploma or an equivalent foreign
                  credential with an Educational Credential Assessment (ECA).
                </li>

                <li>
                  <strong>A full-time job offer </strong>from a Canadian
                  employer in eligible industries meeting the required wage
                  levels for the specific region.
                </li>

                <li>
                  <strong>Proof of Funds </strong>to support yourself and your
                  family members after arriving in Canada unless already
                  employed under a valid work permit.
                </li>
              </ul>
            </div>

            <div class="pages-header-2" ref={occupationRef}>
              Eligible Occupations for the Agri-Food Immigration Pilot
            </div>
            <div class="pages-paragraph">
              The Agri-Food Immigration Pilot covers a range of industries and
              occupations essential to Canada's agricultural and food production
              sectors. Eligible occupations include:
              <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
                <li>
                  <strong>Meat Processing: </strong>Retail Butcher, Industrial
                  Butcher, Food Processing Labourer
                </li>

                <li>
                  <strong>
                    Year-Round Mushroom Production & Greenhouse Crop Production:{" "}
                  </strong>
                  Harvesting Labourer, General Farm Worker
                </li>

                <li>
                  <strong>Livestock Raising: </strong>Farm Supervisor,
                  Specialized Livestock Worker, General Farm Worker
                </li>
              </ol>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                These occupations play a key role in addressing the labor
                shortages in Canada’s agri-food industry, offering a clear
                pathway to permanent residency.
              </p>
              <div className="my-3">
                <strong>Required Documents</strong>
              </div>
              <div className="mb-3">
                To apply for the Agri-Food Immigration Pilot, applicants must
                submit the following documents:
              </div>
              <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
                <li>Job Offer</li>

                <li>Proof of Work Experience</li>

                <li>Language Proficiency Test Results</li>

                <li>Educational Transcripts</li>

                <li>Proof of Settlement Funds</li>
              </ol>
              <div className="my-3">
                These documents are essential for completing the application
                process and proving eligibility for the Agri-Food Immigration
                Pilot.
              </div>
              <div className="mb-3">
                The program updates as of February 10, 2024 are:
              </div>
              <ul>
                <li>
                  Applicants residing in Canada at the time of their application
                  can now fulfil either the job offer requirement or the
                  educational requirement to qualify for the Agri-Food
                  Immigration Pilot.
                </li>
                <li>
                  Work experience gained under an open work permit for
                  vulnerable foreign workers is now considered toward meeting
                  the work experience requirement for the program.
                </li>
              </ul>

              <div className="mt-5">The Agri-Food Pilot helps address the labour needs of the Canadian agri-food sector. The fees of the program start from $1,525. While processing times can vary, the goal of the program is to streamline the process and address labor shortages more efficiently. If you meet the eligibility criteria and are passionate about working in the agri-food sector, this program could be your pathway to a new life in Canada.</div>
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

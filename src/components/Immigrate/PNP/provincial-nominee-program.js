import React, { useRef } from "react";

import NestedTableOfContent from "./../../shared/NestedTableOfContent.jsx";
import FaqBox from "./../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "Can I apply for a PNP without a job offer?",
    answer:
      "Yes, many Provincial Nominee Programs do not require a job offer. For instance, provinces like Saskatchewan, Ontario, and Nova Scotia offer pathways for applicants without job offers if they meet certain criteria, such as education or experience in an in-demand occupation.",
  },
  {
    question: "Can I qualify for a PNP if I’m not eligible for Express Entry?",
    answer:
      "Yes, if you were born outside of Canada to a Canadian citizen parent, then you are automatically a Canadian citizen.",
  },
  {
    question: "How does the PNP application process work?",
    answer:
      "PNP applications typically need language test results, educational credential assessments (ECAs), work experience proof, settlement funds, civil documents, and proof of intent to reside in the province. Specific requirements vary by program. The PNP process varies by program, with three main approaches:",
    listAnswer: [
      "Applicants submit an EOI profile to the province’s pool. Candidates are then invited based on changing criteria like work experience, points score, or education. Examples: PEI Express Entry, Saskatchewan Occupation In-Demand.",
      "Provinces send invites to Express Entry profiles with skills matching local needs, such as Ontario’s Human Capital and French-Speaker streams.",
      "Certain programs allow applicants to apply directly. Examples: BC International Post-Graduate, Alberta Opportunity Stream.",
    ],
  },
];

export default function PNP() {
  const aboutRef = useRef(null);
  const manyRef = useRef(null);
  const applyRef = useRef(null);
  const baseRef = useRef(null);
  const eeRef = useRef(null);
  const costRef = useRef(null);
  const eligibilityRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "What are Provincial Nominee Programs?",
      scrollTo: aboutRef,
    },
    {
      title: "How Many PNPs Are There?",
      scrollTo: manyRef,
    },
    {
      title: "How to Apply for a Provincial Nominee Program in Canada?",
      scrollTo: applyRef,
      subItems: [
        {
          title: "Applying Through the Base PNP Process",
          scrollTo: baseRef,
        },
        {
          title: "Applying Through the Express Entry-aligned PNP Process",
          scrollTo: eeRef,
        },
      ],
    },
    {
      title: "Cost of Immigration through PNP",
      scrollTo: costRef,
    },
    {
      title: "Eligibility and Requirements",
      scrollTo: eligibilityRef,
    },

    {
      title: "FAQs",
      scrollTo: faqRef,
    },
  ];

  const PNPTableData = [
    {
      Category: "Healthcare Professionals",
      Examples: [
        "BC Healthcare Professional",
        "Nova Scotia Physicians",
        " Nova Scotia Labour Market Priorities for Physicians",
        "Saskatchewan Health Professionals",
      ],
    },
    {
      Category: "International Students",
      Examples: [
        "Manitoba International Education Stream",
        " BC International Graduate & International Post-Graduate",
        " Nova Scotia International Graduate Entrepreneur",
        "Ontario International Students with a Job Offer, Masters Graduate, PhD Graduate",
        "PEI International Graduate",
        " Alberta Graduate & Entrepreneur Stream",
      ],
    },
    {
      Category: "IT Professionals",
      Examples: [
        "Alberta Accelerated Tech Pathway",
        " BC PNP Tech Program",
        "Ontario Human Capital Priorities – Tech Draws",
      ],
    },
    {
      Category: "Entrepreneurs",
      Examples: [
        " BC Entrepreneur Immigration",
        " Manitoba Entrepreneur Pathway, Farm Investor Pathway",
        "  New Brunswick Entrepreneurial Stream",
        "Newfoundland Graduate Entrepreneur",
        "  Northwest Territories Entrepreneur",
        " Nova Scotia Entrepreneur",
        "Ontario Entrepreneur",
        "PEI Work Permit Stream",
        "Saskatchewan Entrepreneur",
      ],
    },
    {
      Category: "Farm Owners & Operators",
      Examples: ["Saskatchewan Farm Owners and Operators"],
    },
    {
      Category: "General Business Nominee",
      Examples: ["Yukon Business Nominee"],
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
        <SiteMapMenu type="I" h1="Provincial Nominee Program"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Provincial Nominee Program
            </div>
            <div class="pages-header">Provincial Nominee Programs (PNPs)</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada's Provincial Nominee Program (PNP) offers a popular
              immigration pathway that allows provinces and territories to
              nominate skilled individuals to meet local labor needs. Each
              province in Canada has its own PNP to meet its economic needs.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              What are Provincial Nominee Programs?
            </div>
            <div className="pages-paragraph">
              Provincial Nominee Programs are designed to help provinces and
              territories in Canada select immigrants who meet their specific
              economic needs. All provinces except Nunavut and Quebec have their
              PNP streams.
              <ul className="my-3">
                <li>
                  The PNP empowers regions to nominate candidates for permanent
                  residence based on criteria that align with their economic
                  goals.
                </li>
                <li>
                  With a focus on regional requirements, each PNP has unique
                  streams targeting various profiles, such as skilled workers,
                  entrepreneurs, and international graduates.
                </li>
                <li>
                  All decisions on Canadian permanent residence must receive
                  federal approval, as provinces and territories cannot grant
                  permanent residency independently.
                </li>
              </ul>
              <div className="mt-5">
                The PNP process involves two steps: first, obtaining provincial
                nomination, and then applying to the federal level for final
                approval of permanent residence status.
              </div>
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={manyRef}>
              How Many PNPs Are There?
            </div>
            <div className="pages-paragraph">
              Except for Quebec and Nunavut, every province and territory has
              its own PNP streams. In total, Canada has 11 provincial and
              territorial PNPs, each tailored to meet local labor shortages and
              economic needs. The PNPs include programs for:
              <ul className="my-2 ml-3">
                <li>Alberta</li>

                <li>British Columbia</li>

                <li>Manitoba</li>

                <li>New Brunswick</li>

                <li>Newfoundland and Labrador</li>
                <li>Nova Scotia</li>
                <li>Northwest Territories</li>
                <li>Ontario</li>
                <li>Prince Edward Island</li>
                <li>Saskatchewan</li>
                <li>Yukon</li>
              </ul>
              These PNPs offer different immigration streams, generally
              including categories for skilled workers, recent graduates, and
              business investors.
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>PNP Category</th>
                        <th>Program Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PNPTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.Category}</td>
                          <td>
                            {row.Examples.map((item) => (
                              <ul>
                                <li>{item}</li>
                              </ul>
                            ))}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="pages-header-2" ref={applyRef}>
              How to Apply for a Provincial Nominee Program in Canada?
            </div>
            <div class="pages-paragraph">
              The application process for PNPs generally follows two main
              pathways: the Base PNP Process and the Express Entry-aligned PNP
              Process.
              <div ref={baseRef}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    margin: "25px 0",
                  }}
                >
                  {" "}
                  Applying Through the Base PNP Process
                </div>

                <ul className="my-2 ml-3">
                  <li>
                    In the base PNP process, applicants submit their profiles
                    directly to a province or territory.
                  </li>

                  <li>
                    After receiving a provincial nomination, candidates must
                    submit a separate application for permanent residence to the
                    federal government.
                  </li>
                  
                </ul>
              </div>
              <div ref={eeRef}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    margin: "25px 0",
                  }}
                >
                  Applying Through the Express Entry-aligned PNP Process
                </div>
                <div>
                  For candidates with an Express Entry profile, many provinces
                  offer enhanced PNP streams that are linked to Express Entry,
                  providing faster processing times.
                </div>
                <ul className="my-2 ml-3">
                  <li>
                  Candidates create a profile in the Express Entry system and indicate their preferred provinces.
                  </li>

                  <li>
                  If selected, they receive an invitation from the province. 
                  </li>
                  <li>
                  They can apply for provincial nomination within Express Entry, which gives an additional 600 points in the Comprehensive Ranking System (CRS).
                  </li>
                  <li>
                  This greatly increases the chances of receiving an Invitation to Apply (ITA) for permanent residence.
                  </li>
                </ul>

                <div className='mt-5'>Processing times for permanent residence applications submitted through the base PNP stream are generally much longer than for those submitted via the Express Entry system. While applications through Express Entry typically take about six months on average, paper-based applications through the base PNP process average around 18 months.</div>
              </div>
            </div>

            <div class="pages-header-2" ref={costRef}>
              Cost of Immigration through PNP
            </div>
            <div className="pages-paragraph">
            The cost to apply through PNP varies by province, typically ranging between CAD 2,300 and CAD 3,800. Additionally, federal processing fees for permanent residence are requiredd. These fees cover application processing and permanent residency services at the federal level.
              <ul className="my-2 ml-3">
                <li>
                  <strong>Eligibility Points (FSW Program): </strong>
                  To qualify for the Federal Skilled Worker Program (FSWP),
                  candidates must first score at least 67 points on the FSW
                  eligibility grid. This is based on factors like age,
                  education, work experience, language skills, and adaptability.
                  This score simply determines whether a candidate is eligible
                  to enter the Express Entry pool.
                </li>

                <li>
                  <strong>CRS Score: </strong>
                  Once in the Express Entry pool, candidates are ranked based on
                  their CRS score, which is out of 1200 points. The CRS score is
                  used to rank all candidates in the pool against each other.
                  Regular Express Entry draws are conducted, and candidates with
                  a CRS score above the cut-off receive an Invitation to Apply
                  (ITA) for permanent residency.
                </li>
              </ul>
              CRS is divided into core points (age, education, language
              proficiency, work experience) and additional points (such as a job
              offer, sibling in Canada, or a provincial nomination).
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Eligibility and Requirements
            </div>
            <div class="pages-paragraph">
            Eligibility requirements for each PNP vary by province but generally include:
              <ul className="my-2 ml-3">
                <li>
                Candidates often need to work in in-demand fields relevant to the province.
                </li>

                <li>
                For Express Entry-aligned PNPs, language test results (IELTS or CELPIP for English, TEF for French) are required.
                </li>

                <li>
                Many streams require work experience in skilled trades, managerial roles, or professional occupations.
                </li>

                <li>
                Some streams require a valid job offer from an employer in the province.
                </li>
                
                <li>
                A diploma, certificate, or degree in a relevant field may be necessary, and applicants may need an Educational Credential Assessment (ECA) to verify non-Canadian qualifications.
                </li>
                
                <li>
                Many PNPs give preference to candidates who have previously studied or worked in the province or who have family ties.
                </li>
              
              </ul>
              Each province's PNP eligibility and specific requirements can vary, so it’s essential to consult the official provincial websites to find the most current requirements before applying.
              <div className='my-2'>Canada’s PNP pathways offer tailored options to suit different applicant profiles. Whether through the base application or Express Entry, prospective immigrants can find opportunities across Canada’s provinces, each contributing to Canada’s diverse economic needs​.</div>
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

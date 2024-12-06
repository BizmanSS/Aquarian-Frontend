import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What is the application process for British Columbia Entrepreneur Immigration?",
    answer:
      "The process includes registration with an online profile, submission of a short business concept, and payment of a CAD 300 registration fee. Candidates are placed in a pool and invited to apply based on their scores.",
  },
  {
    question:
      "What happens after receiving an invitation to apply?",
    answer:
      "Once invited, candidates have four months to submit a complete application. If approved, they receive a work permit and must actively manage their business for at least 18 months.",
  },
  {
    question:
      " Is there a requirement for language proficiency? ",
    answer:
      "Yes, applicants must demonstrate basic English or French skills equivalent to Canadian Language Benchmark (CLB) level 4 in all four competencies: listening, speaking, reading, and writing.",
  },
];

const rankingTableData = [
  {
    Scoring: "Self-declared",
    Points: ""
  },
  {
    Scoring: "Experience",
    Points: "20"
  },
  {
    Scoring: "Ownership",
    Points: "4"
  },
  {
    Scoring: "Net Worth",
    Points: "12"
  },
  {
    Scoring: "Total Personal Investment",
    Points: "20"
  },
  {
    Scoring: "Jobs",
    Points: "20"
  },
  {
    Scoring: "Regional District",
    Points: "12"
  },
  {
    Scoring: "Adaptability",
    Points: "32"
  },
  {
    Scoring: "Total for Self-declared ",
    Points: "120"
  },
  {
    Scoring: "Business concept",
    Points: ""
  },
  {
    Scoring: "Commercial Viability",
    Points: "30"
  },
  {
    Scoring: "Transferability of Skills",
    Points: "20"
  },
  {
    Scoring: "Economic Benefits",
    Points: "30"
  },
  {
    Scoring: "Total for Business concept ",
    Points: "80"
  },
  {
    Scoring: "Maximum Score Available",
    Points: "200"
  },
]



export default function BritishColumbiaSkilledImmigrationStream() {
  const bcRef = useRef(null);
  const regionalRef = useRef(null);
  const strategicRef = useRef(null);
  const immigrationRef = useRef(null);
  const rankingRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "British Columbia Entrepreneur Stream",
      scrollTo: bcRef,
    },
    {
      title: "British Columbia Entrepreneur Regional Pilot",
      scrollTo: regionalRef,
    },

    {
      title: "British Columbia Strategic Projects",
      scrollTo: strategicRef,
    },
    {
      title: "Eligibility Requirements for British Columbia Entrepreneur Immigration",
      scrollTo: immigrationRef,
    },
    {
      title: "BCE Ranking System",
      scrollTo: rankingRef,
    },

    {
      title: "FAQs",
      scrollTo: faqRef,
    },
  ];

  const sectionRefs = useRef({});
  const location = useLocation();


  useEffect(() => {
    console.log(sectionRefs)
    const section = location.state?.section;
    if (section && sectionRefs.current[section]) {
      const offsetPosition = sectionRefs.current[section].offsetTop - 40;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [location]);


  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu type="I"
          h1="Provincial Nominee Program"
          h2="British Columbia"
          h3="British Columbia Entrepreneur Immigration"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Provincial Nominee Program
              {" > "}British Columbia
              {" > "}British Columbia Entrepreneur Immigration
            </div>
            <div class="pages-header">British Columbia Entrepreneur Immigration</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              British Columbia is one of Canada’s most attractive provinces for entrepreneurs who are looking to establish/invest in a business. The British Columbia Entrepreneur Immigration program provides opportunities for experienced business professionals to establish, acquire, or expand businesses in BC, creating jobs for local communities. It is an immigration stream category within the British Columbia Provincial Nominee Program. The applicants need to buy a new or an existing business in the province and manage its day-to-day activities. The chosen applicants will receive permanent residency in Canada. The program has 3 streams including:

              <ul>
                <li>British Columbia Entrepreneur Immigration Stream</li>
                <li>British Columbia Entrepreneur Regional Pilot</li>
                <li>British Columbia Strategic Projects</li>
              </ul>

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2"
              ref={(el) => {
                bcRef.current = el;
                sectionRefs.current['British Columbia Entrepreneur Stream'] = el;
              }}>
              British Columbia Entrepreneur Stream
            </div>
            <div className="pages-paragraph">
              The BC Entrepreneur Stream is the primary route for experienced entrepreneurs and managers looking to establish a business in the province.
              <ul className="my-3">
                <li>
                  Applicants are required to demonstrate a successful track record in business ownership or management.
                </li>
                <li>
                  A minimum net worth of CAD 600,000 and an investment of at least CAD 200,000 are required.
                </li>
                <li>
                  They should be able to actively manage and invest in the purchase and management of their business within BC.
                </li>
                <li>
                  The stream requires applicants to develop a business plan that creates at least one full-time job for a Canadian citizen or permanent resident.
                </li>
                <li>
                  Applicants are expected to have a minimum Canadian Language Benchmark (CLB) score of 4, demonstrating basic proficiency in English or French.
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

            <div className="pages-header-2"
              ref={(el) => {
                regionalRef.current = el;
                sectionRefs.current['British Columbia Entrepreneur Regional Pilot'] = el;
              }}>British Columbia Entrepreneur Regional Pilot</div>
            <div className="pages-paragraph">
              This stream is aimed at entrepreneurs who want to start a business in smaller, regional communities of BC with populations under 75,000.

              <ul className="my-2 ml-3">
                <li>The goal is to drive economic growth and job creation in less urbanized areas.</li>

                <li>Applicants are required to receive a referral from a participating regional community, develop a business plan aligned with the community’s economic needs, and create at least one full-time job.</li>

                <li>The Regional Pilot offers a lower entry threshold compared to the general Entrepreneur Stream, making it an attractive option for entrepreneurs with a desire to contribute to rural economic development.</li>

                <li>A minimum net worth of CAD 300,000 is also required for this stream, along with a CLB score of at least 4.
                </li>

              </ul>

            </div>

            <div class="pages-header-2"
             ref={(el) => {
              strategicRef.current = el;
              sectionRefs.current['British Columbia Strategic Projects'] = el;
            }}
            >
              British Columbia Strategic Projects
            </div>
            <div class="pages-paragraph">
              The Strategic Projects stream targets foreign-owned companies wishing to establish a business operation in BC by bringing in key managerial, professional, or technical staff.

              <ul className="my-2 ml-3">
                <li>This stream is ideal for international corporations looking to expand their operations in BC. </li>

                <li>The company should be able to prove that it can generate revenue with the management of large staff teams.</li>

                <li>Through this program, up to five key staff members can obtain permanent residency, provided the project creates substantial economic benefits for the province and demonstrates strong potential for local job creation.
                </li>

              </ul>

            </div>


            <div class="pages-header-2" ref={immigrationRef}>
              Business, Job, and Investment Requirements
            </div>
            <div class="pages-paragraph">
              To qualify for the British Columbia Entrepreneur Immigration program, applicants must meet specific requirements like:

              <div className="font-bold mt-5">Personal Requirements</div>
              <ul className="my-2 ml-3">
                <li>Applicants must have a minimum personal net worth of CAD 600,000. This net worth must be legally obtained and verifiable.</li>

                <li>Candidates should have significant business and/or management experience. If they lack direct business experience, they must hold a post-secondary diploma equivalent to at least two years.</li>

                <li>Basic proficiency in English or French is required, equivalent to Canadian Language Benchmark (CLB) level 4 or higher in all four competencies: listening, speaking, reading, and writing.
                </li>
                <li>Applicants must have been lawfully admitted to the country where they currently reside and must either have or be eligible for legal immigration status in Canada.
                </li>

              </ul>

              <div className="font-bold mt-5">Business, Job, and Investment Requirements</div>
              <ul className="my-2 ml-3">
                <li>Candidates must either establish a new business or purchase and improve an existing business in British Columbia.</li>

                <li>A minimum personal investment of at least CAD 200,000 is required for eligible business expenses.</li>

                <li>The business must create at least one new full-time job for a Canadian citizen or permanent resident within 12 months of the applicant's arrival in BC.
                </li>

              </ul>

            </div>

            <div class="pages-header-2" ref={rankingRef}>
              BCE Ranking System
            </div>
            <div class="pages-paragraph">
              The British Columbia Entrepreneur Immigration Ranking System is a points-based system that evaluates candidates based on several key factors. The system ensures that only the most qualified and prepared entrepreneurs receive invitations to apply under the British Columbia Entrepreneur Immigration programs.

              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Scoring Sections</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rankingTableData.map((row, index) => (
                        (index !== 0 && index !== 8 && index !== 9 && index !== 13 && index !== 14) ?
                          <tr key={index}>
                            <td>{row.Scoring}</td>
                            <td>{row.Points}</td>
                          </tr>
                          :
                          (
                            <tr key={index}>
                              <td className="font-bold">{row.Scoring}</td>
                              <td className="font-bold">{row.Points}</td>
                            </tr>
                          )
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              The British Columbia Entrepreneur Immigration program is a pathway for experienced business owners and managers looking to establish or invest in a business within the province. Designed to stimulate economic growth and job creation, this program allows selected entrepreneurs to initially obtain a temporary work permit, with the potential for permanent residency upon meeting specific criteria.

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

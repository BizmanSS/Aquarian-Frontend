import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "Can I apply for permanent residency immediately after starting my business?",
    answer:
      "No, applicants must operate their business for at least 12 consecutive months before applying for permanent residency.",
  },
  {
    question:
      " What happens if my business fails?",
    answer:
      "If your business does not meet the performance requirements outlined in your agreement with the government, it may affect your eligibility for permanent residency.",
  },

];

const pointsTableData = [
  {
    factor: "Age",
    points: "20",
  },
  {
    factor: "Language",
    points: "40",
  },
  {
    factor: "Education",
    points: "20",
  },
  {
    factor: "Business Ownership Experience",
    points: "50",
  },
  {
    factor: "Community Endorsement",
    points: "35",
  },
  {
    factor: "Adaptability",
    points: "35",
  },
  {
    factor: "Total Maximum Points",
    points: "200",
  },

]

export default function PEIExpressEntry() {
  const workRef = useRef(null);
  const eligibilityRef = useRef(null);
  const applicationRef = useRef(null);
  const rankingRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "PEI Work Permit Stream",
      scrollTo: workRef,
      subItems: [
        {
          title: "Eligibility Criteria",
          scrollTo: eligibilityRef,
        }
      ]
    },
    {
      title: "Application for PEI Business Impact Stream",
      scrollTo: applicationRef,
    },
    {
      title:
        "PEI Ranking System",
      scrollTo: rankingRef,
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
          h2="Prince Edward Island"
          h3="PEI Business Impact"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Prince Edward Island
              {" > "}PEI Business Impact
            </div>
            <div class="pages-header">PEI Business Impact </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Prince Edward Island has a system to attract foreign investment and entrepreneurial talent through its Business Impact Category. It is a stream under the Prince Edward Island Provincial Nominee Program (PEI PNP). This initiative facilitates the immigration of business owners who can contribute economically to the province by establishing or managing a business while creating job opportunities.


            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={workRef} >
              PEI Work Permit Stream
            </div>
            <div className="pages-paragraph">
              The PEI PNP consists of one active stream: the Work Permit Stream. This allows eligible applicants to obtain a temporary work permit to establish a business in PEI.


              <div className='font-bold mt-5 text-[20px]'>Eligibility Criteria</div>
              <div className="my-2">Applicants for this PEI Work Permit Stream must meet requirements like:
              </div>
              <ul className="my-3 ">
                <li>

                  Official language proficiency in English or French at Canadian Language Benchmark (CLB) level 4.
                </li>

                <li>
                  Completed minimum education requirement of secondary school.
                </li>

                <li>
                  Experience in business management or ownership.

                </li>
                <li>
                  Minimum personal net worth of 600,000 CAD.
                </li>
                <li>
                  The applicants must operate a business in Canada for at least one year before receiving provincial nomination.
                </li>
                <li>
                  Candidates must sign an agreement outlining conditions for nomination, which includes:
                </li>
                <li>
                  Invest at least 150,000 CAD in the business.
                </li>


              </ul>

              The business must operate for at least 12 consecutive months, and the applicant must be actively involved in its management.

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={applicationRef}>
            Application for PEI Business Impact Stream
            </div>
            <div className="pages-paragraph">
            The PEI Work Permit Stream operates on an Expression of Interest (EOI) system.

              <ul className="my-2">

                <li>
                Candidates need to submit a profile to a pool where they are ranked based on the PEI Business Impact Category Ranking System. 
                </li>

                <li>
                The highest-ranking candidates receive invitations to apply during periodic draws.
                </li>

                <li>
                Once invited, candidates have 90 days to submit a complete application, which includes a business plan and an application fee of 10,000 CAD.
                </li>

                <li>
                If approved, candidates attend an interview with PEI’s Office of Immigration to discuss their qualifications and business proposal. 
                </li>

                <li>
                Following approval, they must obtain a legal opinion letter confirming compliance with the Immigration and Refugee Protection Act (IRPA).
                </li>


              </ul>

            </div>

            <div className="pages-header-2" ref={rankingRef}>
            PEI Ranking System
            </div>
            <div className="pages-paragraph">
            The applicant can be awarded up to 200 points based on different factors like:

              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Selection Factor</th>
                        <th>Points</th>
                     
                      </tr>
                    </thead>
                    <tbody>
                      {pointsTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.factor}</td>
                          <td>{row.points}</td>
                      
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              Upon receiving a legal opinion letter, candidates can apply for a temporary work permit from IRCC. They are required to meet with a Settlement Officer within 30 days of arriving in Canada to ensure compliance with their performance agreement. After fulfilling the agreement's conditions, candidates can obtain a provincial nomination for permanent residence and must submit their federal application within six months, processed within 18 months.
            </div>

<div></div>

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

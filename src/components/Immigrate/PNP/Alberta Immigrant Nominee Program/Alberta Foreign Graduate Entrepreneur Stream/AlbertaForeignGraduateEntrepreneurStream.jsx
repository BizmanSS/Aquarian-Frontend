import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "Can I apply if I have not started my business yet?",
    answer:
      "Yes, you can apply if you plan to start a new business or buy an existing one in Alberta.",
  },
  {
    question:
      "What types of businesses are eligible?",
    answer: "Eligible businesses must be in one of the priority sectors, such as technology, agriculture, or tourism, and demonstrate potential economic benefits to Alberta.",

  },
];

const rankingTableData = [
  {
    Criteria: "Language Proficiency",
    description: "CLB 5 (min), CLB 8 (max)",
    maxPoints: "30",
  },
  {
    Criteria: "Education",
    description: "Bachelor’s, Master’s, Doctoral degree",
    maxPoints: "35",
  },
  {
    Criteria: "Business Experience",
    description: "Minimum 6 months of ownership/management",
    maxPoints: "35",
  },
  {
    Criteria: "Business Plan",
    description: "Comprehensive business plan with financials",
    maxPoints: "40",
  },
  {
    Criteria: "Initial Investment",
    description: "Urban: $100,000 (min) / Regional: $50,000 (min)",
    maxPoints: "25",
  },
  {
    Criteria: "Additional Investment*",
    description: "After launch, $100,000+",
    maxPoints: "20",
  },
  {
    Criteria: "Job Creation*",
    description: "1-3+ jobs created for residents",
    maxPoints: "15",
  },
  {
    Criteria: "Total",
    description: "",
    maxPoints: "200",
  },
];

export default function AlbertaForeignGraduateEntrepreneurStream() {
  const requirementsRef = useRef(null);
  const processRef = useRef(null);
  const rankingRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Alberta Foreign Graduate Entrepreneur Program Requirements",
      scrollTo: requirementsRef,
    },
    {
      title: "Application Process",
      scrollTo: processRef,
    },
    {
      title: "Alberta FGES Ranking System",
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
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="Alberta Immigrant Nominee Program"
          h3="Alberta Foreign Graduate Entrepreneur Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Alberta Immigrant Nominee Program
              {" > "}Alberta Foreign Graduate Entrepreneur Stream
            </div>
            <div class="pages-header">
              Alberta Foreign Graduate Entrepreneur Stream
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Alberta Foreign Graduate Entrepreneur Stream (FGES) is a
              provincial immigration program for foreign graduates with
              entrepreneurial ambitions. This stream is part of the Alberta
              Immigrant Nominee Program, a PNP of Alberta province. This program
              ranks candidates using a points-based Expression of Interest or
              EOI system. The candidates with the highest ranking are invited to
              submit a business plan. After this, they are issued a nomination
              by the province of Alberta, after which they can apply for
              permanent residence in Canada.
              <div className="mt-5">
                Foreign graduates applying for the Foreign Graduate Entrepreneur
                Stream (FGES) are required to work with a Designated Agency.
                This agency will assess the applicant’s qualifications and
                business proposal to ensure they meet the Alberta Advantage
                Immigration Program (AAIP) requirements. If deemed eligible, the
                agency will issue a Letter of Recommendation, which must be
                included when submitting an Expression of Interest (EOI) through
                the AAIP Portal.
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" >
              Alberta Foreign Graduate Entrepreneur Program Requirements
            </div>
            <div className="pages-paragraph">
              To apply for the Alberta Foreign Graduate Entrepreneur Stream,
              candidates must meet a series of requirements to assess their
              entrepreneurial potential and business proposal. The key
              eligibility criteria are as follows:
              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong> Education</strong>
              </div>
              <ul className="my-2 ml-3">
                <li>
                  You must have completed a post-secondary education program
                  (minimum 2 years) outside Canada within the last 10 years.
                </li>
                <li>
                  The credential must be equivalent to a Canadian degree with an
                  Educational Credential Assessment (ECA).
                </li>
              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Work Experience</strong>
              </div>
              <ul className="my-2 ml-3">
                <li>
                  You need a minimum of 6 months of full-time work experience in
                  actively managing/owning a business.
                </li>
                <li>
                  Equivalence includes work experience with a business
                  accelerator or incubator.
                </li>
              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Language Proficiency</strong>
              </div>
              <ul className="my-2 ml-3">
                <li>
                You must meet a minimum Canadian Language Benchmark (CLB) score of 7 in either English or French.
                </li>
                <li>
                The test results should be less than 2 years old during the submission of the Expression of Interest.
                </li>
                <li>
                The accepted tests are CELPIP, IELTS, TEF, and TCF.
                </li>
              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Business Plan</strong>
              </div>
              <ul className="my-2 ml-3">
                <li>
                A detailed business plan with projected financials must be submitted. This plan should show:

                <ol className="my-2 ml-5">
                  <li>The business’s potential for growth and sustainability.</li>
                  <li>How the business will contribute to Alberta’s economy.</li>
                </ol>

                </li>
                
              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong> Business Investment</strong>
              </div>
              <ul className="my-2 ml-3">
                <li>
                You must show a minimum investment of $100,000 from the candidate’s (spouse/common-law partner) own assets or a recognized Canadian financial institution.

                <ol className="my-2 ml-5">
                  <li>For businesses established in a rural community (with a population under 100,000), the minimum investment is $50,000.</li>
                </ol>

                </li> 
              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Business Ownership</strong>
              </div>

              <ul className="my-2 ml-3">
                <li>
                You must own at least 34% of the business in urban centers or 51% in rural areas outside Calgary and Edmonton Census Metropolitan Areas.

                </li> 

                <li>
                Qualifying businesses include priority sectors such as aerospace, technology, financial services, agriculture, etc.
                </li> 
                <li>
                The businesses should not be on the list of ineligible businesses.
                </li> 

              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Settlement Funds</strong>
              </div>
              
              <ul className="my-2 ml-3">
                <li>
                You must have the funds to set up your business and support yourself on a work permit.

                </li> 

                <li>
                The minimum settlement funds will be based on the Low Income Cut-Offs (LICOs).
                </li> 
             

              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Pitch Deck</strong>
              </div>
              
              <ul className="my-2 ml-3">
                <li>
                You also need to present a pitch deck which will be a 10-minute presentation highlighting the business venture.

                </li> 
              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Letter of Recommendation</strong>
              </div>
              
              <ul className="my-2 ml-3">
                <li>
                You must have a LOR from a designated agency approved by AAIP.
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

            <div className="pages-header-2" ref={processRef}>
            Application Process
            </div>
            <div className="pages-paragraph">
            The application process for the Alberta FGES is straightforward, but requires thorough preparation:

            <div>
                <ul className="my-2 ml-3">
                  <li>
                  Candidates submit their EOI through the AIIP Portal.
                  </li>
                  <li>Scores are assigned to candidates based on the FGES Points Grid. </li>
                  <li>
                  Top-ranked candidates are invited to apply and they must submit their Business application within 90 days.
                  </li>
                  <li>
                  The province evaluates the business plan, financial projections, and the candidate’s entrepreneurial experience.
                  </li>
                  <li>
                  The candidate has to pay an application fee of 3,500 CAD.
                  </li>

                  <li>
                  The candidate has to pay an application fee of 3,500 CAD.
                  </li>

                  <li>
                  If shortlisted, candidates sign a Business Performance Agreement with Alberta agreeing that their business must operate in Alberta for 12 months.
                  </li>

                  <li>
                  After fulfilling the Business Performance Agreement, candidates are eligible for AAIP Nomination.
                  </li>

                  <li>
                  After receiving the nomination, candidates have 6 months to apply for Canadian permanent residence.
                  </li>
                </ul>
              </div>
             
            </div>
           
            <div className="pages-header-2" ref={rankingRef}>
            Alberta FGES Ranking System
            </div>
            <div className="pages-paragraph">
            The points grid assesses candidates on several criteria, including human capital factors, business factors, and investment plans. The maximum possible score is 200 points.
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criteria</th>
                        <th>Description</th>
                        <th>Maximum Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rankingTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.Criteria}</td>
                          <td>{row.description}</td>
                          <td>{row.maxPoints}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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

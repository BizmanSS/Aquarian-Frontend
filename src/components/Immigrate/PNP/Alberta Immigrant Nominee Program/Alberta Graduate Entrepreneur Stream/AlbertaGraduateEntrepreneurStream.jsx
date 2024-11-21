import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: " What factors can enhance my chances of being selected for the Alberta Graduate Entrepreneur Stream?",
    answer:
      "Several key factors can improve your likelihood of selection for the Alberta Graduate Entrepreneur Stream:",
      listAnswer: [
        "Work Experience: Having at least 6 months of full-time experience in managing or owning a business, or equivalent experience, is beneficial.",
        "Economic Benefits: Demonstrating how your business will provide economic value to Alberta through job creation, investment, or innovation can strengthen your application.",

        "Age Range: Applicants aged 21 to 49 are generally favored, as this age group is seen as optimal for long-term contributions.",

        "Spousal Contributions: Involvement of a spouse or common-law partner with relevant work experience or education in Alberta can add points to your application.",

        "Alberta Relatives: Having close family members residing in Alberta can also increase your chances of being selected.",
      ],
  },
  {
    question:
      "Who is ineligible to apply under the Graduate Entrepreneur Stream?",
    answer:
      "You are ineligible if you- ",
    listAnswer: [
      "Have an active nomination under another AAIP stream",
      "Received an ineligibility letter from AAIP",
      "Have a removal order from IRCC",
      "Are a refugee claimant",
      "Lack valid temporary resident status",
      "Your business is on the ineligible businesses list.",
    ],
  },
];

const rankingTableData=[
    {
      category:"Business Management Experience",
      description:"Management or ownership experience",
      maxPoints:"15"
    },
    {
      category:"Business Investment",
      description:"Not a mandatory requirement",
      maxPoints:"20"
    },
    {
      category:"Economic Benefit",
      description:"Job creation, rural development, investment",
      maxPoints:"40"
    },
    {
      category:"Language Proficiency",
      description:"Based on CLB/NCLC scores",
      maxPoints:"15"
    },
    {
      category:"Alberta Education Credentials",
      description:"Alberta degree/diploma",
      maxPoints:"10"
    },
    {
      category:"Age & Spouse Contributions",
      description:"Age and spouse’s work, education, or language proficiency",
      maxPoints:"15"
    },
    {
      category:"Alberta Relatives",
      description:"Not a mandatory requirement",
      maxPoints:"10"
    },
    {
      category:"Total",
      description:"",
      maxPoints:"125"
    },
 
]

export default function AlbertaGraduateEntrepreneurStream() {
  const whatRef = useRef(null);
  const eligibleRef = useRef(null);
  const applyRef = useRef(null);
  const pointsRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "What is the Alberta Graduate Entrepreneur Stream?",
      scrollTo: whatRef,
    },
    {
      title: "Who is Eligible for the Alberta Graduate Program?",
      scrollTo: eligibleRef,
    },
    {
      title: "How Can I Apply?",
      scrollTo: applyRef,
    },
    {
      title: "GES Points Ranking System",
      scrollTo: pointsRef,
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
          h3="Alberta Graduate Entrepreneur Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Alberta Immigrant Nominee Program
              {" > "}Alberta Graduate Entrepreneur Stream
            </div>
            <div class="pages-header">Alberta Graduate Entrepreneur Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Alberta Graduate Entrepreneur Stream is an immigration stream
              of the Alberta Advantage Immigration Program or AINP. The stream
              helps international students who graduated from post-secondary
              institutions in Alberta to establish and run a business there. By
              fostering entrepreneurship, it also provides individuals with a PR
              in Canada. This immigration program uses a points-based Expression
              of Interest system to select and rank candidates for the stream.
              Candidates with the highest points are invited for submission of a
              business application.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={whatRef}>
              What is the Alberta Graduate Entrepreneur Stream?
            </div>
            <div className="pages-paragraph">
              Entrepreneurs are people who use their skills to run a
              profit-based business. They help in creating jobs for the people
              of Alberta.
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "10px",
                }}
              >
                Who is considered an Entrepreneur?
              </div>
              <div>
                An entrepreneur is an innovator who generates new ideas,
                products, services, or business methods.
              </div>
              <ul className="my-3">
                <li>
                  They identify gaps in the market and create solutions that
                  address these needs.
                </li>
                <li>
                  Beyond financial gains, successful entrepreneurs also
                  contribute to job creation, innovation, and societal progress.
                </li>
              </ul>
              <div
                style={{
                  marginTop: "15px",
                }}
              >
                The program encourages skilled international graduates to remain
                in Alberta, supporting local economic growth.
              </div>

            
              
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={eligibleRef}>
              Who is Eligible for the Alberta Graduate Program?
            </div>
            <div className="pages-paragraph">
              To qualify for the Alberta Graduate Entrepreneur Stream, you need
              to meet specific criteria such as:
              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Education Level</strong>
              </div>
              <div>
                You must have completed at least two years of full-time study
                resulting in a degree/diploma from an Alberta post-secondary
                institution.{" "}
              </div>
              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Work Permit</strong>
              </div>
              <div>
                You must have a valid Post-Graduation Work Permit (PGWP) issued
                by Immigration, Refugees and Citizenship Canada (IRCC). The PGWP
                must be valid at the time of submitting the Expression of
                Interest (EOI).{" "}
              </div>
              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Language Proficiency</strong>
              </div>
              <div>
                You must have completed at least two years of full-time study
                resulting in a degree/diploma from an Alberta post-secondary
                institution.{" "}
              </div>
              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Business Establishment and Ownership</strong>
              </div>
              <div>
                You are required to either establish a new business or acquire
                an existing business in Alberta. You must have at least 34%
                ownership of the company or business you are proposing to run.
                However, candidates are not obligated to start or acquire the
                business until their Business Application has been approved.
              </div>
              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Work Experience</strong>
              </div>
              <div>
                You do not need any minimum work experience for this stream.
                However, 6 months of full-time experience can increase your
                chances of selection. No minimum investment or net worth
                requirement is there, but having a solid financial plan is
                essential to prove the sustainability of your business.
              </div>
              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Business Eligibility</strong>
              </div>
              <div>
                Applicants must ensure their business idea aligns with Alberta’s
                economic priorities and regulatory standards. Specific
                requirements include:
                <ul className="my-2 ml-3">
                  <li>A physical business presence in Alberta at all times.</li>
                  <li>
                    Active management of the business by the applicant, ensuring
                    they reside in Alberta during the operational phase.
                  </li>
                  <li>
                    Compliance with Alberta's trade certification requirements
                    for businesses operating in regulated industries.
                  </li>
                </ul>
              </div>
              <div
                style={{
                  margin: "10px 0",
                }}
              >
                <strong>Ineligible Businesses</strong>
              </div>
              <div>
                <ul className="my-2 ml-3">
                  <li>
                    Passive investment ventures like property rental or real
                    estate development.
                  </li>
                  <li>Seasonal or project-based businesses.</li>
                  <li>
                    Home-based businesses not zoned for commercial operations.
                  </li>
                  <li>
                    Certain financial services such as payday loans and cheque
                    cashing.
                  </li>
                  <li>
                    Businesses linked to the adult entertainment industry or any
                    that would bring the AAIP into disrepute.
                  </li>
                </ul>
              </div>
            </div>
            <div
              style={{
                fontWeight: "bold",
                marginTop:"25px"
              }}
            >
              <span style={{ color: "red" }}>Check: </span>{" "}
              <span style={{ color: "blue" }}>
                <a href="https://www.iaquarian.com/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program">
                  Alberta Immigrant Nominee Program
                </a>
              </span>
            </div>

            <div className="pages-header-2" ref={applyRef}>
            How Can I Apply?
            </div>
            <div className="pages-paragraph">
            The Graduate Entrepreneur Stream works on a system based on Expression of Interest (EOI). The procedure for application is as follows - 
            <ul className="my-3">
                <li>
                Submit an EOI through the AINP portal.
                </li>
                <li>
                EOIs are scored based on the GES points grid. It evaluates your education, work experience, and the potential of your business to contribute to Alberta's economy.
                </li>
                <li>
                Candidates with the highest scores are invited by AINP to submit a Business Plan within 90 days.
                </li>
                <li>
                If you are applying online, you need to pay an application fee of CAD 3,500.
                </li>
                <li>
                You must sign a Business Performance Agreement with Alberta province mentioning all the conditions for PR.
                </li>
                <li>
                Alberta will then issue an approval letter.
                </li>
              </ul>
              After your business application is approved, you will need to operate your business for at least 12 months before you can apply for a provincial nomination.
            </div>


            <div className="pages-header-2" ref={pointsRef}>
            GES Points Ranking System
            </div>
            <div className="pages-paragraph">
            The Alberta Graduate Entrepreneur Stream operates on a points-based system, with candidates evaluated based on factors like business experience, economic impact, and language proficiency and educational background. Points are awarded based on:

            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Max Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rankingTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.category}</td>
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

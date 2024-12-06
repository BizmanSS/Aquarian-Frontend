import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "How does the Express Entry Skilled Worker stream work?",
    answer:
      "This stream is linked with Canada's Express Entry system; candidates nominated through it receive an additional 600 CRS points, increasing their chances for an ITA for permanent residency.",
  },
  {
    question: " Who can apply under the International Graduate stream for NLPNP?",
    answer:
      "Recent graduates from eligible Canadian post-secondary institutions with job offers related to their field of study can apply under this stream.",
  },

  {
    question:
      " How is the NLPNP points grid structured?",
    answer:
      "The points grid evaluates education, language proficiency, age, work experience, and connection to the labor market; applicants must score at least 67 points to qualify for nomination.",
  },
];

const nlpnpTableData=[
     {
      factor:'Age',
      points:'12',
     },
     {
      factor:'Connection to Labour Market',
      points:'13',
     },
     {
      factor:'Work Experience',
      points:'20',
     },
     {
      factor:'Language Proficiency',
      points:'27',
     },
     {
      factor:'Education',
      points:'28',
     },
     {
      factor:'Minimum Pass Score',
      points:'67',
     },
]

export default function NLNPExpressEntrySkilledWorkers() {
  const eligibilityRef = useRef(null);
  const eeRef = useRef(null);
  const processRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Requirements for NLPNP Express Entry Skilled Worker",
      scrollTo: eligibilityRef,
    },
    {
      title: "NLPNP Express Entry Skilled Worker Points Assessment Grid",
      scrollTo: eeRef,
    },
    {
      title:
        "Application Process for NLPNP Express Entry Skilled Worker",
      scrollTo: processRef,
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
          h3="Newfoundland and Labrador Express Entry Skilled Worker"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Newfoundland and Labrador
              {" > "}Newfoundland and Labrador Express Entry Skilled Worker
            </div>
            <div class="pages-header">NLPNP Express Entry Skilled Worker</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Newfoundland and Labrador Provincial Nominee Program (NLPNP) offers a streamlined pathway for skilled workers seeking PR in Canada through the Express Entry system. This program is for individuals who can contribute to the province's economy and hold a job offer. They should demonstrate a genuine intention to settle in Newfoundland and Labrador. To qualify, applicants must first be accepted into the federal Express Entry pool managed by Immigration, Refugees, and Citizenship Canada (IRCC). Once in the pool, candidates can apply for a provincial nomination from Newfoundland and Labrador, which enhances their Comprehensive Ranking System (CRS) score.


             

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2"  ref={eligibilityRef}>
            Eligibility Requirements for NLPNP Express Entry Skilled Worker
            </div>
            <div className="pages-paragraph">
            To be eligible for the NLPNP Express Entry Skilled Worker category, candidates must have:

              {/* <div className='font-bold mt-2'>Eligibility Requirements:</div> */}

              <ul className="my-2 ">
                <li>
                They must have an active profile in the federal Express Entry system.

                </li>

                <li>
                A full-time job offer from a Newfoundland and Labrador employer in National Occupational Classification (NOC) TEER categories 0, 1, 2, or 3.

                </li>

                <li>
                A minimum of a Canadian post-secondary degree or diploma is required, or an equivalent foreign credential is assessed through an Educational Credential Assessment (ECA)13.
                </li>

                <li>
                Candidates must provide official language test results demonstrating proficiency in English or French as claimed in their Express Entry profile. 
                </li>

                <li>
                At least one year of relevant work experience in the past ten years in NOC TEER 0,1,2, or 3 category is necessary.
                </li>

                <li>
                Candidates must score at least 67 points on the NLPNP Points Assessment Grid.
                </li>

                <li>
                They must demonstrate sufficient settlement funds as determined by IRCC guidelines.
                </li>

                <li>
                The applicants must demonstrate a genuine intention to reside in the Newfoundland and Labrador province.
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

            <div className="pages-header-2" ref={eeRef}>
            NLPNP Express Entry Skilled Worker Points Assessment Grid

            </div>
            <div className="pages-paragraph">
            Candidates must have a minimum of 67 scores in the following grid used to assess or allocate points for NLPNP Express Entry Skilled Worker:
        
            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Maximum Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nlpnpTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.factor}</td>
                          <td>{row.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            <div className="pages-header-2" ref={processRef}>
            Application Process for NLPNP Express Entry Skilled Worke
            </div>
            <div className="pages-paragraph">
            There is no deadline for application submission for the NLPNP Express Entry Skilled Worker Stream. The application process consists of the following steps:
            
              <ul className="my-2">

                <li>
                Candidates must establish their profile in the federal Express Entry system.
                </li>

                <li>
                They need to secure a valid job offer from a Newfoundland and Labrador employer.
                </li>

                <li>
                After receiving a job offer, candidates can apply to the NLPNP for provincial nomination.

                </li>

                <li>
                If successful, candidates receive a provincial nomination that boosts their CRS score.
                </li>
                <li>
                Following nomination, applicants must submit their application for permanent residency to IRCC within six months.
                </li>

              </ul>
              The NLPNP Express Entry Skilled Worker category provides an efficient pathway for skilled workers aiming to make Newfoundland and Labrador their new homes. This program addresses local labor shortages and enriches the province's cultural and economic landscape by integrating skilled immigrants.

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

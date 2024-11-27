import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const occupationTableData = [
  {
    NOCCode: "3413",
    Occupation: "Nurse aides, orderlies, and patient service associates",
  },
  {
    NOCCode: "7511",
    Occupation: "Transport truck drivers",
  },
  {
    NOCCode: "7512",
    Occupation: " Heavy equipment operators (except crane)",
  },
  {
    NOCCode: "7611",
    Occupation: "Construction trades helpers and labourers",
  },
];
const faqItems = [
  {
    question:
      "What types of job offers qualify for the Occupation in Demand Stream?",
    answer:
      "Only full-time, permanent job offers from registered Nova Scotia employers are eligible.",
  },
  {
    question:
      " How often is the Nova Scotia list of in-demand occupations updated?",
    answer:
      " The list is subject to change based on the evolving labor market needs of Nova Scotia.",
  },
];

export default function NSInternationalGraduateInDemand() {
  const EligibilityRef = useRef(null);
  const ApplicationRef = useRef(null);
  const faqRef = useRef(null);
  const OccupationsRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Requirements of NS Occupation In-Demand",
      scrollTo: EligibilityRef,
    },
    {
      title: "In-Demand Occupations",
      scrollTo: OccupationsRef,
    },
    {
      title: "Application Process",
      scrollTo: ApplicationRef,
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
          h2="Nova Scotia"
          h3="Nova Scotia Occupations In Demand"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}Nova Scotia Occupations In Demand
            </div>
            <div class="pages-header">NS Occupations in Demand</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Nova Scotia Occupation in Demand Stream is a immigration
              pathway aimed at addressing labor shortages in the Nova Scotia
              province. Launched in May 2019, this program targets
              intermediate-skilled occupations that are in high demand, who
              secure job offers from Nova Scotia employers. It is a 3 year pilot
              program during which the eligible occupations will change.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={EligibilityRef}>
              Eligibility Requirements of NS Occupation In-Demand
            </div>
            <div className="pages-paragraph">
              Candidates must meet specific criteria to qualify for the
              Occupation in Demand Stream:
              <ul className="my-3">
                <li>
                  A full-time, permanent job offer from a Nova Scotia employer
                  in the 3 valid eligible occupations.
                </li>
                <li>At least one year of relevant work experience.</li>

                <li>Age between 21 and 55 years.</li>
                <li>High school diploma or equivalent.</li>
                <li>
                  Language proficiency at Canadian Language Benchmark (CLB)
                  Level 4.
                </li>
              </ul>
            </div>
            <div class="pages-header-2" ref={OccupationsRef}>
              In-Demand Occupations
            </div>
            <div className="pages-paragraph">
              The occupations targeted by this stream include:
              <div className="table-container">
                <table className="responsive-table">
                  <thead>
                    <tr>
                      <th>NOC Code</th>
                      <th>Occupation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {occupationTableData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.NOCCode}</td>
                        <td>{row.Occupation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              These roles are classified as Skill Level C under the National
              Occupational Classification (NOC) system.
            </div>
            <div class="pages-header-2" ref={ApplicationRef}>
              Application Process
            </div>
            <div className="pages-paragraph">
              To apply, candidates must submit their application through the
              Nova Scotia immigration portal after receiving a job offer.
              <ul className="my-3">
                <li>Successful applicants receive a provincial nomination.</li>
                <li>
                  The nomination allows them to apply for permanent residence
                  through IRCC within six months.
                </li>
                <li>
                  Applicants have 6 months to submit paper-based applications
                  via mail.
                </li>
              </ul>
              The Nova Scotia Occupation in Demand Stream addresses labour
              shortages by attracting skilled foreign workers.
            </div>
          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

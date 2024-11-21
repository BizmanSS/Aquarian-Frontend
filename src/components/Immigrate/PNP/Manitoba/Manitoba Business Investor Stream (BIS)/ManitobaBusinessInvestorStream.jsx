import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What is the processing time for the Manitoba Business Investor Stream?",
    answer:
      " Processing times can vary but generally take between 12 to 18 months.",
  },
  {
    question:
      " Can I invest in any type of business under the Entrepreneur Pathway?",
    answer:
      "No, businesses must meet Manitoba’s criteria, which focus on economic growth and development. Certain types of passive investments or non-strategic businesses are not eligible.",
  },
  {
    question:
      "Can I apply for permanent residency directly through the BIS?",
    answer:
      "No, you initially receive a temporary work permit to establish your business, and once the terms of your Business Performance Agreement are met, you can apply for permanent residency.",
  },
];


const entrepreneurData = [
  {
    criterion: "Net Worth",
    requirement: "Minimum CAD 500,000",
  },
  {
    criterion: "Business Experience",
    requirement:
      "Minimum 3 years as an owner or senior manager in the last 5 years",
  },
  {
    criterion: "Investment",
    requirement:
      "Minimum CAD 250,000 in Winnipeg; CAD 150,000 outside Winnipeg ",
  },
  {
    criterion: "Language Proficiency",
    requirement: "Minimum CLB/NCLC 5",
  },
  {
    criterion: "Minimum Ownership",
    requirement: "33.33% ownership required ",
  },
];

const farmTableData = [
  {
    criterion: "Age",
    requirement:
      "No specific age limit, but experience matters",
  },
  {
    criterion: "Net Worth",
    requirement: "Minimum CAD 500,000",
  },
  {
    criterion: "Farm Business Experience",
    requirement:
      "Minimum 3 years",
  },
  {
    criterion: "Investment",
    requirement: "Minimum CAD 300,000 in rural Manitoba",
  },
  {
    criterion: "Language Proficiency",
    requirement:
      "Not mandatory, but CLB/NCLC 4 recommended",
  },
  {
    criterion: "Farm Performance Agreement",
    requirement:
      "Must be signed before issuing work permit",
  },
];

export default function ManitobaInternationalEducationStream() {
  const skilledRef = useRef(null);
  const manitobaRef = useRef(null);
  const employerRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Manitoba Entrepreneur Pathway",
      scrollTo: skilledRef,
    },
    {
      title: "Manitoba Farm Investor Pathway",
      scrollTo: manitobaRef,
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
          h2="Manitoba"
          h3="Manitoba Business Investor Stream (BIS)"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Manitoba
              {" > "}Manitoba Business Investor Stream
            </div>
            <div class="pages-header">Manitoba Business Investor Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Manitoba Business Investor Stream (BIS) is an immigration
              stream collection included in the MPNP. It is designed to attract
              experienced business professionals and investors who want to
              establish or purchase a business in Manitoba. The stream offers 2
              pathways: the Manitoba Entrepreneur Pathway and the Manitoba Farm
              Investor Pathway. It aims to enhance the province’s economic
              growth and development by investment and business creation.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={skilledRef}>
              Manitoba Entrepreneur Pathway
            </div>
            <div className="pages-paragraph">
              The Manitoba Entrepreneur Pathway is a stream of Manitoba’s
              Business Investor Stream.
              <ul className="my-3">
                <li>
                  It allows experienced business owners or senior managers to
                  move to Manitoba and start or buy a business in the province.
                </li>
                <li>
                  Applicants must submit a Business Plan that details how they
                  intend to establish or run a business in Manitoba.
                </li>
              </ul>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
                Eligibility
              </div>
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criterion</th>
                        <th>Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entrepreneurData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.criterion}</td>
                          <td>{row.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  margin: "25px 0",
                }}
              >
                <span style={{ color: "red" }}>Check: </span>
                <a
                  style={{
                    color: "blue",
                  }}
                  href="https://www.iaquarian.com/business/pnp-entrepreneur-streams/manitoba"
                >
                  Manitoba PNP
                </a>
              </div>
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={manitobaRef}>
            Manitoba Farm Investor Pathway
            </div>
            <div className="pages-paragraph">
            The Manitoba Farm Investor Pathway is specifically for individuals with experience in farming who want to establish or purchase a farm in rural Manitoba. 
              <ul className="my-2 ml-3">
                <li>
                This pathway encourages investment in the agricultural sector, an important part of the province’s economy.
                </li>
                <li>
                Applicants must demonstrate proven experience in owning or operating a farm.
                </li>
              </ul>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
                Eligibility
              </div>
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Eligibility Criteria</th>
                        <th>Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {farmTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.criterion}</td>
                          <td>{row.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          <div>   <div className='my-5'>The Manitoba Business Investor Stream offers an opportunity for entrepreneurs and investors who want to contribute to the province’s economic growth. By attracting skilled business people and farmers, the program continues to drive economic growth, particularly in rural areas. 
          </div></div>
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

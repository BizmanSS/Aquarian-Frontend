import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

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

const pointsTableData=[
     {
      factor:'Education',
      points:'28',
     },
     {
      factor:'Language Proficiency',
      points:'27',
     },
     {
      factor:'Age',
      points:'12',
     },
     {
      factor:'Work Experience',
      points:'20',
     },
     {
      factor:'Connection to Labor Market',
      points:'13',
     },
     {
      factor:'Minimum Pass Score',
      points:'67',
     },
]

export default function NewfoundlandAndLabrador() {
  const eeRef = useRef(null);
  const skilledRef = useRef(null);
  const graduateRef = useRef(null);
  const entrepreneurRef = useRef(null);
  const internationalRef = useRef(null);
  const pointsRef = useRef(null)
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "NLPNP Express Entry Skilled Worker",
      scrollTo: eeRef,
    },
    {
      title: "NLPNP Skilled Worker",
      scrollTo: skilledRef,
    },
    {
      title:
        "NLPNP International Graduate",
      scrollTo: graduateRef,
    },
    {
      title:
        "NLPNP International Entrepreneur",
      scrollTo: entrepreneurRef,
    },
    {
      title:
        "NLPNP International Graduate Entrepreneur",
      scrollTo: internationalRef,
    },
    {
      title:
        "NLPNP Points Grid",
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
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="Newfoundland and Labrador"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Newfoundland and Labrador's Provincial Nominee Program (NLPNP)
            </div>
            <div class="pages-header">Newfoundland and Labrador's Provincial Nominee Program (NLPNP) </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Newfoundland and Labrador comprises two main landmasses: the island of Newfoundland and the mainland region of Labrador. Economically, Newfoundland and Labrador have transitioned from traditional industries like fishing to sectors such as oil and gas, mining, and tourism. The province has a population of approximately 520,000 people, with St. John's as its capital city.

              <div className='mt-5'>Newfoundland and Labrador's Provincial Nominee Program (NLPNP) is a vital component of the province's strategy to attract skilled immigrants to address labor shortages and enhance economic growth. This program allows the province to nominate individuals for permanent residency based on its specific economic needs. As one of Canada's easternmost provinces, Newfoundland and Labrador offers unique opportunities for immigrants, including a rich cultural heritage. There are 5 different immigration streams of the province as discussed below.</div>


            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eeRef} >
              NLPNP Express Entry Skilled Worker
            </div>
            <div className="pages-paragraph">
              This stream is aligned with the federal Express Entry system, allowing candidates who have received a provincial nomination to gain an additional 600 points towards their Comprehensive Ranking System (CRS) score. This boost significantly enhances their chances of receiving an Invitation to Apply (ITA) for permanent residency.

              <div className='font-bold mt-2'>Eligibility Requirements:</div>

              <ul className="my-2 ">
                <li>
                  Must have an Express Entry profile.
                </li>

                <li>
                  Full-time job offer from a Newfoundland and Labrador employer (NOC level 0, A, or B).
                </li>

                <li>
                  Minimum two years of work experience.
                </li>

                <li>
                  Post-secondary degree or diploma.
                </li>

                <li>
                  Score at least 67 out of 100 on the NL PNP points grid.
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

            <div className="pages-header-2" ref={skilledRef}>
            NLPNP Skilled Worker
            </div>
            <div className="pages-paragraph">
            This stream targets skilled workers with job offers from local employers in any NOC skill level. It aims to attract experienced individuals who can fill labor shortages in various sectors.
              <div className='font-bold my-2'>Eligibility Requirements</div>
              <ul className="my-2">

                <li>
                Guaranteed job offer from a Newfoundland and Labrador employer.
                </li>

                <li>
                Relevant work experience in the offered occupation.
                </li>

                <li>
                Meet minimum language requirements.

                </li>

                <li>
                Score at least 67 out of 100 on the NL PNP points grid.

                </li>

              </ul>


            </div>

            <div className="pages-header-2" ref={graduateRef}>
            NLPNP International Graduate
            </div>
            <div className="pages-paragraph">
            This stream is tailored for international graduates from eligible Canadian post-secondary institutions who wish to remain in Newfoundland and Labrador after their studies.

              <div className='font-bold my-2'>Eligibility Requirements</div>

              <ul className="my-2">

                <li>
              Must have graduated from an eligible institution.
                </li>

                <li>
                Job offer related to their field of study or current employment in the province.
                </li>

                <li>
                Must meet language proficiency requirements.

                </li>

              </ul>


            </div>

            <div className="pages-header-2" ref={entrepreneurRef}>
            NLPNP International Entrepreneur
            </div>
            <div className="pages-paragraph">
            This stream is designed for experienced business owners or senior managers looking to establish or purchase a business in Newfoundland and Labrador.

              <div className='font-bold my-2'>Eligibility Requirements</div>

              <ul className="my-2">

                <li>
                Must demonstrate relevant business management experience.
                </li>

                <li>
                Significant personal net worth.
                </li>

                <li>
                Intention to actively manage a business in the province.
                </li>

              </ul>


            </div>

            <div className="pages-header-2" ref={internationalRef}>
            NLPNP International Graduate Entrepreneur
            </div>
            <div className="pages-paragraph">
            Targeted at international graduates who have started or acquired a business in Newfoundland and Labrador, this stream supports those looking to transition from temporary work permits to permanent residency.

              <div className='font-bold my-2'>Eligibility Requirements</div>

              <ul className="my-2">

                <li>
                Must have graduated from an eligible post-secondary program in Newfoundland and Labrador.
                </li>

                <li>
                Must have at least one year of experience managing or owning a business in the province.
                </li>

              </ul>


            </div>

            <div className="pages-header-2" ref={pointsRef}>
            NLPNP Points Grid
            </div>
            <div className="pages-paragraph">
            Applicants must score at least 67 points on the NL PNP assessment grid, which evaluates various factors:

            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Factor</th>
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
              The Newfoundland and Labrador Provincial Nominee Program addresses the province's labor market needs while providing immigrants with pathways to establish themselves permanently in Canada. As Newfoundland and Labrador continues to evolve economically and socially, it remains an attractive destination for those seeking new opportunities in Canada.
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

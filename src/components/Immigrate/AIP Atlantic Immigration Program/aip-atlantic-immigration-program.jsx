import React, { useRef } from "react";
import "./aip.css";
import TableOfContent from "../../shared/TableOfContent.jsx";
import FaqBox from "../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";



const faqItems = [
  {
    question: " Do I need a job offer to apply under FSWP?",
    answer:
      "No, a job offer is not mandatory. However, having a valid job offer can significantly boost your CRS score by 50-200 points.",
  },
  {
    question:
      "What is the difference between FSW eligibility points and CRS scores?",
    answer:
      " FSW eligibility points determine if you meet the minimum requirements to apply under FSWP. CRS score is used to rank candidates in the Express Entry pool for immigration.",
  },
  {
    question: "How can I calculate my CRS score?",
    answer:
      "You can use our CRS Calculator to estimate your CRS score based on various factors such as age, education, work experience, language proficiency, and more.",
  },
  {
    question: "Can I bring my family with me?",
    answer:
      "Yes, you can include your spouse or common-law partner and dependent children in your application.",
  },
  {
    question: "What are the minimum points for FSWP?",
    answer:
      "The minimum points required for the Federal Skilled Worker Program (FSWP) is 67 out of 100 points. This is based on the selection factor points assigned for language skills, education, work experience, age, arranged employment in Canada, and adaptability. If you score lower than 67 points, you will not qualify for the program. However, you may be able to increase your score by improving your language skills, completing additional education, or receiving a job offer in Canada.",
  },
  ,
  {
    question: "Can I directly apply for permanent residency under the FSWP?",
    answer:
      "No, you cannot apply directly for permanent residency under the FSWP. The FSWP is managed by the Express Entry system, which selects candidates through regular draws based on their Comprehensive Ranking System (CRS) score. Only candidates who receive an Invitation to Apply (ITA) from the Express Entry pool can submit an application for permanent residency.",
  },
];

export default function PR() {
  const aboutAIPRef = useRef(null);
  const requireAIPRef = useRef(null);
  const faqAIPRef = useRef(null);

  const tableContentData = [
    {
      id: 1,
      content: "What is AIP?",
      scrollTo: aboutAIPRef,
    },
    {
      id: 2,
      content: "Requirements for Atlantic Immigration Pilot",
      scrollTo: requireAIPRef,
    },
    {
      id: 3,
      content: "FAQ",
      scrollTo: faqAIPRef,
    },
  ];

  const fundTableData = [
    {
      id: 1,
      content: 1,
      text: "$3,303",
    },
    {
      id: 2,
      content: 2,
      text: "$4,112",
    },
    {
      id: 3,
      content: 3,
      text: "$5,055",
    },
    {
      id: 4,
      content: 4,
      text: "$6,138",
    },
    {
      id: 5,
      content: 5,
      text: "$6,962",
    },
    {
      id: 6,
      content: 6,
      text: "$7,852",
    },
    {
      id: 7,
      content: "7 or more",
      text: "$8,742",
    },
    {
      id: 8,
      content: "Each Additional Member",
      text: "$890",
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
          h1="AIP Atlantic Immigration Program"
          
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Atlantic Immigration Program
            </div>
            <div class="pages-header">
              {" "}
              Atlantic Immigration Pilot <span class="cec-font">(AIP)</span>
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Atlantic Immigration Program, commonly known as AIP, is an
              initiative to boost economic growth in Canada’s Atlantic
              provinces. These include New Brunswick, Newfoundland and Labrador,
              Nova Scotia, and Prince Edward Island.
              <div className="pages-paragraph">
                By allowing people to immigrate to Canada and secure permanent
                residency there, the program also addresses the needs of the
                local communities or employers to fill the labour shortages in
                the area. This also supports Canada’s regional development.
              </div>
              <div className="pages-paragraph">
                The AIP differs from the other immigration programs as it does
                not require obtaining a work permit using a Labour Market Impact
                Assessment (LMIA). Instead, applicants need to seek a job offer
                from a designated local employer.
              </div>
              <div className="pages-paragraph">
                Designated local employers play an important role in this
                process. They are responsible for actively identifying,
                recruiting, and retaining global talent. Each year, the AIP
                provides permanent resident status to thousands of immigrants to
                promote overall growth in the Atlantic region.
              </div>
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutAIPRef}>
              What is AIP?
            </div>
            <div className="pages-paragraph">
              The Atlantic Immigration Program (AIP) is an employer-driven
              initiative that streamlines the process of hiring foreign
              nationals in Canada’s Atlantic provinces.
              <ul>
                <li>
                  <span class="">
                    To participate, candidates must have a job offer from a
                    designated employer and develop a personalized settlement
                    plan for themselves and their families.
                  </span>
                </li>
                <li>
                  <span class="">
                    Once a designated employer identifies a suitable candidate
                    who meets their needs, they can extend a job offer without
                    obtaining a Labour Market Impact Assessment (LMIA).
                  </span>
                </li>
                <li>
                  <span class="">
                    After accepting the offer, the candidate is connected with a
                    designated settlement service provider to assess their needs
                    and create a personalised settlement plan.
                  </span>
                </li>
              </ul>
              Employers support the long-term integration of the newcomer and
              their families, helping them achieve their settlement goals once
              they arrive in Canada. To secure this permit, candidates must
              provide a valid job offer, and a letter from the province, and
              commit to applying for permanent residence within 90 days of the
              permit application.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={requireAIPRef}>
              Requirements for Atlantic Immigration Pilot
            </div>

            <div className="pages-paragraph">
              The requirements for{" "}
              <a
                href="#"
                style={{
                  color: "blue",
                }}
              >
                permanent residency in Canada
              </a>{" "}
              through Atlantic Immigration Plan are:
              <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
                <li>
                  <span class="pages-bold">Work Experience Requirements:</span>{" "}
                  To qualify for the AIP, you need at least one year of paid,
                  full-time work experience in the last five years.
                  <ul>
                    <li>
                      You need to accumulate at least 1,560 hours of work -
                      which can include both full-time and part-time hours.
                      Volunteer and self-employed work are excluded.
                    </li>
                    <li>
                      Your work experience must fall under the National
                      Occupational Classification (NOC) TEER categories 0, 1, 2,
                      or 3.
                    </li>
                    <li>
                      Experience gained in Canada or abroad is acceptable, as
                      long as you were legally authorized to work in Canada when
                      applicable.
                    </li>
                  </ul>
                </li>

                <li>
                  <span class="pages-bold">
                    {" "}
                    International Graduate Pathway:
                  </span>{" "}
                  If you're an international student who graduated from a
                  recognized post-secondary institution in one of the Atlantic
                  provinces, you might be eligible without needing work
                  experience. To qualify as an international graduate, you must:
                  <ul>
                    <li>
                      Hold a degree, diploma, certificate, or trade
                      certification from a recognized institution in Atlantic
                      provinces like New Brunswick, Nova Scotia, Prince Edward
                      Island, or Newfoundland and Labrador.
                    </li>
                    <li>
                      Be a full-time student during your studies and have held
                      the appropriate visa or permit.
                    </li>
                    <li>
                      Have lived in one of the Atlantic provinces for at least
                      16 months within the last two years before graduating.
                    </li>
                  </ul>
                </li>

                <li>
                  <span class="pages-bold">Educational Requirements:</span>{" "}
                  Educational criteria vary depending on the NOC category of
                  your job offer:
                  <ul>
                    <li>
                      <span class="pages-bold">NOC TEER 0 and 1:</span>
                      You need a one-year post-secondary educational credential
                      or higher. If your education was completed outside Canada,
                      an Educational Credential Assessment (ECA) is required to
                      confirm its equivalency.
                    </li>
                    <li>
                      <span class="pages-bold">NOC TEER 2, 3, and 4:</span>A
                      Canadian high school diploma or equivalent is needed. If
                      your education was outside Canada, an ECA is also
                      required.
                    </li>
                  </ul>
                </li>

                <li>
                  <span class="pages-bold">Language Proficiency:</span> Language
                  skills are important for successful integration into Canada’s
                  landscape. The Canadian Language Benchmark (CLB) levels
                  required are:
                  <ul>
                    <li>
                      <span class="pages-bold">NOC TEER 0 and 1: </span>
                      CLB 5.
                    </li>
                    <li>
                      <span class="pages-bold">NOC TEER 2, 3, and 4: </span>
                      CLB 4.
                    </li>
                  </ul>
                  You must provide test results from a designated language
                  testing organization, and these results should be less than
                  two years old when you apply.
                </li>

                <li>
                  <span class="pages-bold">Proof of Funds:</span> If you’re not
                  already living and working in Canada, you need to show that
                  you have sufficient funds to support yourself and your family
                  upon arrival. The required amount depends on your family size:
                  <div>
                    <div className="table-container">
                      <table className="responsive-table">
                        <thead>
                          <tr>
                            <th>Number of Family Members</th>
                            <th>Funds Required</th>
                          </tr>
                        </thead>
                        <tbody>
                          {fundTableData.map((row, index) => (
                            <tr key={index}>
                              <td className="bold">{row.content}</td>
                              <td>{row.funds}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>
              </ol>
            </div>

            <div class="pages-header-2">Designated Employer</div>
            <div class="pages-paragraph">
              Designated employers are involved with the Atlantic Immigration
              Program to find international talent to meet local labour needs.
              Designated employers are approved by the provincial government to
              identify, hire, and retain skilled workers from abroad.
            </div>
            <ul>
              <li>
                Employers willing to support newcomers must show settlement
                support and integration into the workplace and the community.
              </li>
              <li>
                If an applicant receives a job offer from a designated employer,
                he or she can apply for permanent residency through the AIP.
              </li>
              <li>
                This is bound to ensure a process that directs these people
                toward contributing to the economic growth and cultural
                diversity in Atlantic provinces in Canada: New Brunswick,
                Newfoundland and Labrador, Nova Scotia, and Prince Edward
                Island.
              </li>
            </ul>
            <div className="pages-paragraph">
              The Atlantic Immigration Program started as a pilot program in
              2017 and was made permanent at the beginning of 2022. The AIP is
              responsible for welcoming over 6,000 newcomers to Atlantic
              provinces each year.
            </div>
          </div>
          <div ref={faqAIPRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

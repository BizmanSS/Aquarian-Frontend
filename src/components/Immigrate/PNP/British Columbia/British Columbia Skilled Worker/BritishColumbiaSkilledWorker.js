import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "How are invitations issued through the Skills Immigration Registration System?",
    answer:
      " Invitations are issued periodically, depending on the needs of the province through regular draws.",
  },
  {
    question:
      "Can I apply to the BC Skilled Immigration Stream without a job offer? ",
    answer:
      "No, all streams except for the International Post-Graduate Stream require a job offer",
  },
  {
    question:
      " Do I need to prove my language proficiency for all BC PNP streams? ",
    answer:
      "Language proficiency is required for most streams under the BC Skilled Immigration Stream. ",
    listAnswer: [
      "It is especially needed for the Entry Level and Semi-Skilled Worker (ELSS) stream. ",
      "However, candidates applying under the Skilled Worker and Healthcare Professional streams may not need language proof if their job offer is in NOC categories 0, A, or B.",
    ],
  },
];

export default function BritishColumbiaSkilledImmigrationStream() {
  const eeRef = useRef(null);
  const ssRef = useRef(null);
  const healthCareRef = useRef(null);
  const internationalRef = useRef(null);
  const postRef = useRef(null);
  const elRef = useRef(null);
  const eligibilityRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Express Entry and BC Skilled Immigration Stream",
      scrollTo: eeRef,
    },
    {
      title: "Sub-streams of the BC Skilled Immigration Stream",
      scrollTo: ssRef,
      subItems: [
        {
          title: "British Columbia Healthcare Professional Stream",
          scrollTo: healthCareRef,
        },
        {
          title: "British Columbia International Graduate Stream",
          scrollTo: internationalRef,
        },
        {
          title: "British Columbia International Post-Graduate Stream",
          scrollTo: postRef,
        },
        {
          title:
            "British Columbia Entry Level and Semi-Skilled Worker (ELSS) Stream",
          scrollTo: elRef,
        },
      ],
    },

    {
      title: "Eligibility and Ranking System (SIRS)",
      scrollTo: eligibilityRef,
    },

    {
      title: "FAQs",
      scrollTo: faqRef,
    },
  ];

  const EconomicTableData = [
    {
      Factor: "Skill Level of the B.C. Job Offer",
      Points: "60",
    },
    {
      Factor: "Wage of the B.C. Job Offer",
      Points: "50",
    },
    {
      Factor: "Regional District of Employment",
      Points: "10",
    },
    
  ];

  const HumanTableData = [
    {
      Factor: "Directly Related Work Experience",
      Points: "25",
    },
    {
      Factor: "Highest Level of Education",
      Points: "25",
    },
    {
      Factor: "Language",
      Points: "30",
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
        <SiteMapMenu type="I" 
        h1="Provincial Nominee Program"
        h2="British Columbia"
        h3="British Columbia Skilled Worker"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Provincial Nominee Program
              {" > "}British Columbia
              {" > "}British Columbia Skilled Worker
            </div>
            <div class="pages-header">British Columbia Skilled Immigration Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            British Columbia is one of Canada's most sought-after provinces for skilled immigrants due to its strong economy and growing job opportunities. The British Columbia Skilled Immigration Stream (SIS) is designed to attract skilled workers who can contribute to the province’s economic growth. It is a collection of multiple immigration pathways managed by the BC <a className='text-blue-500 font-bold' href='https://www.iaquarian.com/immigrate/provincial-nominee-program'>Provincial Nominee Program</a> (BC PNP).

            <div className='my-5'>The program is divided into several sub-streams, each targeting a different set of professionals such as
              <ul>
                <li>BC Skilled Worker</li>
                <li>BC Healthcare Professional</li>
                <li>BC International Graduate</li>
                <li>BC International Post-Graduate</li>
                <li>BC Entry Level and Semi-Skilled Worker</li>
              </ul>
            </div>
            To apply through this stream, candidates need to secure a job offer from a BC employer in an eligible occupation and meet the requirements of one of the sub-streams. However, the job offer does not require a Labour Market Impact Assessment (LMIA) for validity. Applicants under this program are ranked based on the Skills Immigration Registration System (SIRS). This points-based ranking system evaluates candidates based on factors like work experience, education, language proficiency, and the job offer they’ve secured.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eeRef}>
            Express Entry and BC Skilled Immigration Stream
            </div>
            <div className="pages-paragraph">
            Candidates do not need to be eligible for Express Entry to apply for BC Skills Immigration. However, most BC Skills Immigration programs offer a faster route to permanent residence for those with an active Express Entry profile. 
              <ul className="my-3">
                <li>
                After nomination, Express Entry candidates submit their federal application online, with processing times of about 6 months. 
                </li>
                <li>
                Non-Express Entry candidates submit a paper-based application, which takes around 18 months. 
                </li>
                <li>
                The BC Entry Level and Semi-Skilled Worker stream does not offer an Express Entry option.
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

            <div className="pages-header-2" ref={ssRef}>Sub-streams of the BC Skilled Immigration Stream</div>
            <div className="pages-paragraph">
            The different sub streams of BC skilled immigration stream are:

            <div className='my-3 font-bold'>British Columbia Skilled Worker </div>
            <div>This stream targets skilled workers with the qualifications and experience required for high-demand occupations in the province. </div>
              <ul className="my-2 ml-3">
                <li>Applicants must have an offer of indeterminate, full-time employment from a BC employer in an eligible skilled occupation.</li>

                <li>The job offer should align with the National Occupational Classification (NOC). </li>

                <li>Skilled workers in industries such as technology, healthcare, and trades are typically targeted.</li>

                <li>Candidates need to meet a minimum Canadian Language Benchmark (CLB) score of 4.</li>

                <li>They also need to have at least two years of relevant work experience.</li>
               
              </ul>

              <div className='my-3 font-bold'>British Columbia Healthcare Professional Stream </div>
            <div>The BC Healthcare Professional stream targets skilled workers in the healthcare industry, an essential sector of BC's economy. </div>
              <ul className="my-2 ml-3">
                <li>This stream is designed for healthcare professionals such as physicians, nurses, and allied health professionals who have job offers from BC healthcare authorities.</li>

                <li>The applicant must have a full-time, indeterminate job offer in one of the 11 eligible healthcare occupations, such as physicians, nurses, psychiatric nurses, or allied health professionals.</li>

                <li>The language requirement for most healthcare roles is a CLB score of 7.
                </li>

                <li>Applicants must be licensed professionals with relevant work experience.</li>
               
              </ul>

              <div className='my-3 font-bold'>British Columbia International Graduate Stream</div>
            <div>This stream is for individuals who have graduated from a Canadian university or college within the last 3 years. </div>
              <ul className="my-2 ml-3">
                <li>These are for people who have a job offer from a BC employer.</li>

                <li>The job offer should align with the NOC TEER 0, 1, 2, or 3 categories and be of a full-time, indeterminate nature.</li>

                <li>Graduates should apply within 3 years of completing their degree or diploma.
                </li>

                <li>The typical language requirement is a CLB score of 4.</li>
               
              </ul>

              <div className='my-3 font-bold'>British Columbia International Post-Graduate Stream</div>
            <div>This is for recent graduates with advanced degrees - Masters or PhD in the sciences from a BC university.</div>
              <ul className="my-2 ml-3">
                <li>This stream does not require a job offer.</li>

                <li>Graduates in fields like engineering, mathematics, and medical sciences are given priority to help support BC’s innovation-driven sectors.</li>

                <li>While CLB requirements may vary, there is generally more flexibility in this stream.
                </li>

              </ul>
              
              <div className='my-3 font-bold'>British Columbia Entry Level and Semi-Skilled Worker (ELSS) Stream</div>
            <div>This ELSS stream is for workers in high-demand, entry-level, and semi-skilled occupations, primarily in hospitality, tourism, food processing, and long-haul trucking sectors. </div>
              <ul className="my-2 ml-3">
                <li>This stream also covers workers in the Northeast Development Region of BC, regardless of the industry.</li>

                <li>Applicants must have worked full-time for at least 9 months in the province.</li>

                <li>The minimum language requirement for this stream is also a CLB score of 4.
                </li>

              </ul>
           
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Eligibility and Ranking System (SIRS)
            </div>
            <div class="pages-paragraph">
            The Skills Immigration Registration System (SIRS) is a points-based ranking system that BC uses to assess candidates applying through the Skilled Immigration Stream. Applicants are awarded points based on different factors:
            <div>
                <div className="table-container mb-5">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Maximum Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {EconomicTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.Factor}</td>
                          <td>{row.Points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="table-container mt-5">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Maximum Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {HumanTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.Factor}</td>
                          <td>{row.Points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <strong>Note: </strong>Not all BC Skills Immigration streams use the BC Skilled Immigration Ranking System.

              <div className='mt-3'>
                The British Columbia Skilled Immigration Stream offers different pathways for skilled workers, international graduates, and entry-level professionals to make British Columbia their permanent home and attain permanent residency.
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

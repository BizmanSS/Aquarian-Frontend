import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "Do I need a job offer to apply for PEI Express Entry?",
    answer:
      "No, having a job offer is not a requirement; however, candidates with job offers may receive higher priority during the selection process.",
  },
  {
    question:
      " What happens after I receive my nomination?",
    answer:
      "After receiving a nomination from PEI, you must accept it through your MyCIC account and then submit your application for permanent residency with IRCC along with all required documentation.",
  },
 
];

const pointsTableData=[
   {
    factor:'Age',
    with:'20',
    without:'20'
   },
   {
    factor:'Language',
    with:'20',
    without:'20'
   },
   {
    factor:'Education',
    with:'15',
    without:'15'
   },
   {
    factor:'Work Experience',
    with:'15',
    without:'20'
   },
   {
    factor:'Employment',
    with:'15',
    without:'10'
   },
   {
    factor:'Adaptability',
    with:'15',
    without:'15'
   },
   {
    factor:'Maximum Points',
    with:'100',
    without:'100'
   },
 
]

export default function PEIExpressEntry() {
  const eeRef = useRef(null);
  const skilledRef = useRef(null);
  const graduateRef = useRef(null);
  const entrepreneurRef = useRef(null);
  const internationalRef = useRef(null);
  const pointsRef = useRef(null)
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Key Criteria of PEI Express Entry",
      scrollTo: eeRef,
    },
    {
      title: "Application for PEI Express Entry",
      scrollTo: skilledRef,
    },
    {
      title:
        "PEI Express Entry Points System",
      scrollTo: graduateRef,
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
          h3="PEI Express Entry"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Prince Edward Island
              {" > "}PEI Express Entry
            </div>
            <div class="pages-header">PEI Express Entry </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Prince Edward Island (PEI) Express Entry program is part of the province's immigration strategy. It is designed to attract skilled workers to address labour shortages and contribute to economic growth. It operates under the Provincial Nominee Program, allowing the province to nominate candidates for permanent residency based on their skills and work experience. Unlike many other Express Entry-aligned PNP streams, the Express Entry stream of the province does not require candidates to have a job offer from a PEI employer at the time of submitting their Expression of Interest.


            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eeRef} >
            Key Criteria of PEI Express Entry
            </div>
            <div className="pages-paragraph">
            To qualify for the PEI Express Entry stream, applicants must have a valid profile in the federal Express Entry pool. They must meet eligibility criteria for any 1 of the following 3 Express Entry streams.


              <div className='font-bold mt-5 text-[20px]'>Express Entry Requirements</div>

              <ul className="my-3 ">
                <li>
                  <strong>Federal Skilled Worker (FSW):</strong>
                  A high school diploma, at least one year of continuous full-time skilled work experience (NOC TEER 0, 1, 2, or 3), and language proficiency at CLB level 7 in English or French.
                </li>

                <li>
                <strong>Canadian Experience Class (CEC): </strong>
                No minimum education requirement; 1 year of full-time Canadian skilled work experience obtained within the last three years, with language proficiency at CLB level 7 for NOC Skill Level 0 or A and CLB 5 for Level B12.
                </li>

                <li>
                <strong>Federal Skilled Trades (FST): </strong>
                No minimum education requirement; 2 years of full-time work experience in a skilled trade, an offer of employment or a certificate of qualification in their trade, and language proficiency at CLB level 5 for speaking and listening and CLB 4 for reading and writing.
                </li>

                
              </ul>

              Applicants do not need to secure a job offer from a Prince Edward Island employer to apply. However, those currently residing and working in PEI will receive priority consideration. 

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={skilledRef}>
            Application for PEI Express Entry
            </div>
            <div className="pages-paragraph">
            Candidates submit an EOI to the PEI PNP, indicating their interest in being nominated.
   
              <ul className="my-2">

                <li>
                Candidates are ranked based on the PEI Express Entry Ranking System.
                </li>

                <li>
                The highest-ranking candidates receive invitations to apply during periodic draws.
                </li>

                <li>
                Successful candidates must accept the provincial nomination via their IRCC online account.
                </li>

                <li>
                Acceptance increases the applicant’s Comprehensive Ranking System (CRS) score by 600 points, enhancing chances for an Invitation to Apply (ITA) for permanent residence.
                </li>

              </ul>


            </div>

            <div className="pages-header-2" ref={graduateRef}>
            PEI Express Entry Points System 
            </div>
            <div className="pages-paragraph">
            The PEI Express Entry uses a scoring system where candidates can earn points in various categories:

            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>With Job Offer</th>
                        <th>Without a Job Offer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pointsTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.factor}</td>
                          <td>{row.with}</td>
                          <td>{row.without}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              The PEI Office of Immigration prioritizes applications from individuals currently working in the province, particularly in high-demand sectors such as healthcare, trades, and early childhood education. After receiving an ITA, applicants must submit an official application for Canadian permanent residence within a designated timeframe. Applications through Express Entry are typically processed within six months.
             
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

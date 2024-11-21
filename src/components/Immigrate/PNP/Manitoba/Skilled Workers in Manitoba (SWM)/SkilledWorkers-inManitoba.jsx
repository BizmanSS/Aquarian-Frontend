import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [

  {
    question: "What is required to apply through the Employer Direct Recruitment Pathway?",
    answer:
      "To apply through the Employer Direct Recruitment Pathway, candidates must be interviewed by both a representative of the MPNP and a Manitoba employer outside Canada. They must also receive an Invitation to Apply (ITA) before submitting their application.",
  },
  {
    question:
      " What are the next steps after receiving a provincial nomination?",
    answer:
      "Once nominated by the MPNP, candidates have 180 days to submit a separate application for permanent residence to the Government of Canada for themselves and their family members.",
  },
 
];

const rankingTableData=[
  {
    factor:"Language Proficiency",
    ranking:"CLB 8 or higher: 25 per band, Second Official Language (CLB 5 or higher): 25",
    maximum:"125"
  },
  {
    factor:"Age",
    ranking:"18: 20, 50 or older: 0",
    maximum:"75"
  },
  {
    factor:"Work Experience",
    ranking:"Less than one year: 0, Fully recognized by provincial licensing body: 100",
    maximum:"175"
  },
  {
    factor:"Education",
    ranking:"Master’s degree or Doctorate: 125, Trade Certificate: 70, No formal post-secondary education: 0",
    maximum:"125"
  },
  {
    factor:"Adaptability",
    ranking:"Close relative in Manitoba: 200, Completed post-secondary program in Manitoba (2 years or more):100",
    maximum:"500"
  },
  {
    factor:"Risk Assessment",
    ranking:"Close relative in another province and no close relative in Manitoba: -200, Work experience in another province: -100 ",
    maximum:"-200"
  },
]

export default function SkilledWorkersInManitoba() {
  const skilledRef = useRef(null);
  const manitobaRef = useRef(null);
  const employerRef = useRef(null);
  const eligibilityRef = useRef(null);
  const mpnpRef= useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Skilled Worker in Manitoba Stream",
      scrollTo: skilledRef,
    },
    {
      title: "Manitoba Experience Pathway",
      scrollTo: manitobaRef,
    },
    {
      title: "Manitoba Employer Direct Recruitment Pathway",
      scrollTo: employerRef,
    },
    {
      title: "Eligibility Criteria for the Skilled Worker in Manitoba Pathway",
      scrollTo: eligibilityRef,
    },
    {
      title: "MPNP Ranking System",
      scrollTo: mpnpRef,
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
          h2= "Manitoba"
          h3= "Skilled Workers in Manitoba (SWM)"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Manitoba
              {" > "}Skilled Workers in Manitoba (SWM)
            </div>
            <div class="pages-header">Skilled Workers in Manitoba</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Manitoba is a popular destination for skilled workers seeking permanent residency in Canada through its Provincial Nominee Program (MPNP). Skilled Workers in Manitoba, also called SWM, is immigration stream program offered by the Manitoba province. The program has 3 substreams: Skilled Workers in Manitoba, Manitoba Experience Pathway, & Manitoba Employer Direct Recruitment Pathway. The program is driven by the needs of Manitoba employers. This program is tailored to different categories of skilled workers or foreign nationals having experience or a job offer in the province, including those already residing in Manitoba, international graduates, and those recruited directly by employers. Successful candidates can get a provincial nomination, post which they become eligible for Canadian PR. The candidates are ranked through the MPNP ranking system.
             
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={skilledRef}>
            Skilled Worker in Manitoba Stream
            </div>
            <div className="pages-paragraph">
            The Skilled Worker in Manitoba Stream is for individuals already working in Manitoba having established connections. Applicants for the stream should have an ongoing employment opportunity with a Manitoba employer. 
              <ul className="my-3">
                <li>
                Applicants need a valid work permit with atleast 6 months of full-time employment with their current employer.
                </li>
                <li>
                This stream operates on an Expression of Interest system where candidates submit profiles online. 
                </li>
                <li>
                The profiles are then ranked, with the highest-ranking candidates receiving a Letter of Advice to Apply (LAA) for provincial nomination
                </li>
              </ul>
            
            </div>

            <div className="note-cec">
              <div >
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={manitobaRef}>
            Manitoba Experience Pathway
            </div>
            <div className="pages-paragraph">
            The Manitoba Experience Pathway is for foreign workers who are currently employed in the province of Manitoba on a temporary basis. 
              <ul className="my-2 ml-3">
                <li>
                Individuals with temporary work permits or international students with Post-Graduation Work Permits with work experience in Manitoba can apply for this stream.
                </li>

                <li>
                The pathway streamlines the transition of the candidates from temporary to permanent residency as they are already contributing to the local economy. 
                </li>

               
              </ul>
            </div>

            <div className="pages-header-2" ref={employerRef}>
            Manitoba Employer Direct Recruitment Pathway
            </div>
            <div className="pages-paragraph">
            The Manitoba Employer Direct Recruitment Pathway is for skilled workers who are recruited directly by employers in Manitoba. 
              <ul className="my-2 ml-3">
                <li>
                Candidates must be interviewed by a representative from both the MPNP and a participating employer outside Canada. 
                </li>

                <li>
                Once nominated, candidates can apply for permanent residency through Immigration, Refugees and Citizenship Canada (IRCC).
                </li>

               
              </ul>
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Eligibility Criteria for the Skilled Worker in Manitoba Pathway
            </div>
            <div className="pages-paragraph">
            To apply to the Skilled Worker in Manitoba (SWM) pathway, candidates must meet specific eligibility requirements:

            <div style={{ 
              fontWeight:"bold",
              fontSize:"22px",
              marginTop:"20px"
            }}>Employment Requirement</div>

            <div className="my-5">Candidates must have ongoing full-time employment with a Manitoba employer. This will be the proof of their primary connection to the province. </div>
              <ul className="my-2 ml-3">
                <li>
                  <strong>For Temporary Foreign Workers: </strong>
                  Valid work permit and full-time employment with a Manitoba-based company for at least 6 continuous months. 
                </li>

                <li>
                  <strong>For International Graduates: </strong>
                  Job offer from a Manitoba employer following at least six months of continuous full-time work on a valid post-graduation work permit.
                </li>
              </ul>

              <div className='mt-5'><strong>Note: </strong>Self-employment, unauthorized work, or work obtained during full-time studies (e.g., co-op programs) does not count toward the qualifying work experience.</div>


              <div style={{ 
              fontWeight:"bold",
              fontSize:"22px",
              marginTop:"20px"
            }}>Language Proficiency</div>

            <div className="my-5">Applicants need to show English or French language skills. This involves achieving a minimum Canadian Language Benchmark (CLB) score of 5 or more, depending on the job requirements.</div>
            <div style={{ 
              fontWeight:"bold",
              fontSize:"22px",
              marginTop:"20px"
            }}> Intent to Settle</div>

            <div className="my-5">Applicants must show a stronger connection to Manitoba than to any other Canadian province. They are required to submit a Settlement Plan outlining their long-term intention to live and work in Manitoba. This is to ensure that the applicant is committed to settling in Manitoba and contributing to the local economy.</div>
         
           
            </div>

            <div class="pages-header-2" ref={mpnpRef}>
            MPNP Ranking System
            </div>
            <div class="pages-paragraph">
            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Assessment Factor</th>
                        <th>Ranking Points</th>
                        <th>Maximum Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rankingTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.factor}</td>
                          <td>{row.ranking}</td>
                          <td>{row.maximum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='my-3'><strong>Total Points Possible: </strong>1000</div>

              <div className='my-5'>To begin the process of immigrating to Manitoba as a skilled worker, you must first create an Expression of Interest (EOI) profile. If your profile is successful, you will receive a Letter of Advice to Apply (LAA) from the Manitoba Provincial Nominee Program (MPNP). Following this, you need to submit a comprehensive application, which will be thoroughly assessed by an MPNP officer. If approved, you will receive a nomination from the MPNP. You then have 180 days from the date of nomination to submit a separate application for permanent residence to the Government of Canada for yourself and your family.</div>
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

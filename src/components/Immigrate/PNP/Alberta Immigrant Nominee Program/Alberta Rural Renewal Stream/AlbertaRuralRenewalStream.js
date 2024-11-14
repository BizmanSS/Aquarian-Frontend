import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What type of job offer is required for the Rural Renewal Stream?",
    answer:
      "A valid job offer must be for continuous, full-time work (minimum 30 hours per week) in a position located within a designated rural community.",
  },
  {
    question:
      " What is the community endorsement requirement for this stream?",
    answer: "Applicants must receive an Endorsement of Candidate letter from the Economic Development Organization of their designated community to apply.",

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

const languageTableData=[
  {
    category: "NOC 0, 1, 2, or 3",
    requiredEng:"Minimum 5 in each skill",
    requiredFrench:"Minimum 5 in each skill"
  },
  {
    category: "NOC 4 or 5",
    requiredEng:"Minimum 4 in each skill",
    requiredFrench:"Minimum 4 in each skill"
  },

]

const workTableData = [
   {
    category:"TEER 0",
    experience:"TEER 0 or TEER 1 "
   },
   {
    category:"TEER 1",
    experience:"TEER 0, TEER 1, or TEER 2"
   },
   {
    category:"TEER 2",
    experience:"TEER 1, TEER 2, TEER 3, or TEER 4"
   },
   {
    category:"TEER 3",
    experience:"TEER 1, TEER 2, TEER 3, or TEER 4"
   },
   {
    category:"TEER 4",
    experience:"TEER 2, TEER 3, TEER 4, or TEER 5"
   },
   {
    category:"TEER 5",
    experience:"TEER 5 (must be in the same occupation - NOC code)"
   },
];

const fundsTableData = [
  {
    family: "1",
    less:"$8,922",
    between1:"$10,151",
    between30: "$11,093"
  },
  {
    family: "2",
    less:"$11,107",
    between1:"$12,636",
    between30: "$13,810"
  },
  {
    family: "3",
    less:"$13,655",
    between1:"$15,534",
    between30: "$16,977"
  },
  {
    family: "4",
    less:"$16,579",
    between1:"$18,861",
    between30: "$20,613"
  },
  {
    family: "5",
    less:"$18,803",
    between1:"$21,392",
    between30: "$23,379"
  },
  {
    family: "6",
    less:"$21,208",
    between1:"$24,127",
    between30: "$26,367"
  },
  {
    family: "7",
    less:"$23,611",
    between1:"$26,861",
    between30: "$29,356"
  },
  {
    family: "Additional Family Member",
    less:"$2,404",
    between1:"$2,735",
    between30: "$2,989"
  },
]

export default function AlbertaRuralRenewalEntrepreneur() {
  const designatedRef = useRef(null);
  const requirementsRef = useRef(null);
  const applicantsRef = useRef(null);
  const processRef = useRef(null);
  const faqRef= useRef(null);

  const tableContentData = [
    {
      title: "Designated Communities",
      scrollTo: designatedRef,
    },
    {
      title: "Requirements for Alberta Rural Renewal Stream",
      scrollTo: requirementsRef,
      subItems: [
        {
          title: "Ineligible Applicants",
          scrollTo: applicantsRef,
        },
        
      ],
    },
    {
      title: "Application Process",
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
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="Alberta Immigrant Nominee Program"
          h3="Alberta Rural Renewal Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Alberta Immigrant Nominee Program
              {" > "}Alberta Rural Renewal Stream
            </div>
            <div class="pages-header">
            Alberta Rural Renewal Stream
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Alberta Rural Renewal Stream (ARRS) is a community-driven stream in the Alberta province of Canada. It attracts and retains newcomers to rural Alberta to address the labour needs and skill shortages in the province. It also helps the newcomers to settle within the community. This community-driven initiative supports local economic development needs and encourages foreign nationals to live, work, and settle in rural communities. Under the scheme, the community is required to apply to the Albertan Government for community designation. Once the status is designated, the community works with employers to attract, recruit, and retain newcomers.
          
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={designatedRef}>
            Designated Communities
            </div>
            <div className="pages-paragraph">
            Communities and employers in Alberta can recruit foreign workers in two ways:
           
              <ul className="my-2 ml-3">
                <li>
                 <strong>Direct Recruitment: </strong>Communities can independently recruit temporary foreign workers. Once nominated, these workers can apply for PR during the processing of their applications.
                </li>
                <li>
                 <strong>Collaboration with Non-Governmental Organizations (NGOs): </strong>Communities may partner with approved Designated Referral Partners to recruit and retain refugees under the Economic Mobility Pathways Pilot (EMPP). These partners assist in identifying candidates abroad who meet the EMPP criteria, facilitating a match with local employers.
                </li>
              </ul>

              <div
                style={{
                  margin: "10px 0",
                }}
              >
              Communities may partner with approved Designated Referral Partners to recruit and retain refugees under the Economic Mobility Pathways Pilot (EMPP). These partners assist in identifying candidates abroad who meet the EMPP criteria, facilitating a match with local employers.
              </div>

              <div style={{
                fontWeight:"bold",
                margin:"14px 0"
              }}>
                <span style={{
                  color:"red"
                }}>Check Out: </span>
                <span style={{
                  color:"blue"
                }}>Provincial Nominee Program</span>
              </div>

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={requirementsRef}>
            Requirements for Alberta Rural Renewal Stream
            </div>
            <div className="pages-paragraph">
            You must apply for the program if - 

            <div>
                <ul className="my-2 ml-3">
                  <li>
                 <strong>Community Residency: </strong>You intend to reside and work in the designated community.
                  </li>
                  <li>
                 <strong>Community Endorsement: </strong>You have a valid Endorsement of Candidate letter issued by the Economic Development Organization (EDO) of your designated community. 
                  </li>
                  <li>
                 <strong>Job Offer and Employment Requirements: </strong>You also need a job offer from an Alberta employer for an eligible occupation at the time of application submission and assessment.
                  </li>
                  <li>
                  <strong>Licensing and Certification: </strong>You must meet the licensing, registration, or certification requirements to work in your designated occupation in Alberta. 

                  <ul>
                    <li>Those in compulsory trades need a valid Alberta Apprenticeship and Industry Trade (AIT) recognized trade certificate.</li>
                    <li>As a childcare worker, you must have valid certification - Level 2 or Level 3 Early Childhood Educator before applying to AAIP.</li>
                  </ul>

                  </li>
                  <li>
                  <strong>Work Experience: </strong>As a temporary foreign worker. You must have a minimum of 12 months of full-time work experience in an eligible occupation within the last 18 months. EMPP refugee applicants must show similar experience but within the last 10 years. Work experience must meet specific criteria related to the TEER category of the job offer.

                  <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>TEER Category of Job Offer</th>
                        <th>Required TEER Category of Work Experience</th>
                      </tr>
                    </thead>
                    <tbody>
                      {workTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.category}</td>
                          <td>{row.experience}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
                  </li>

                  <li>
                  <strong>Language Proficiency: </strong>You need to provide language test results from an approved provider, demonstrating proficiency in English or French.

                    <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>NOC TEER Category</th>
                        <th>Required CLB Score for English</th>
                        <th>Required CLB Score for French</th>
                      </tr>
                    </thead>
                    <tbody>
                      {languageTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.category}</td>
                          <td>{row.requiredEng}</td>
                          <td>{row.requiredFrench}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> 
                  </li>

                  <li>
                  <strong>Education: </strong>You must have at least a high school education equivalent to Canadian standards.
                  </li>

                  <li>
                  <strong>Settlement Funds: </strong>Settlement funds are required only for temporary foreign workers and are based on family size and the population of the designated community. Funds must be readily available, and candidates must provide official letters from financial institutions detailing their financial status. The funds are required as-

                  <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Number of Family Members</th>
                        <th>Population Less than 1,000</th>
                        <th>Population between 1,000 to 30,000</th>
                        <th>Population between 30,000 to 99,999</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fundsTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.family}</td>
                          <td>{row.less}</td>
                          <td>{row.between1}</td>
                          <td>{row.between30}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div> 
                  </li>

                </ul>

                <div style={{
                  fontWeight:"bold",
                  marginTop:"50px",
                  fontSize:"28px"
                }} ref={applicantsRef}>Ineligible Applicants</div>

                <div style={{
                  margin:"15px 0"
                }}>Certain individuals are ineligible for the Rural Renewal Stream, including:</div>
                <ul>
                  <li>Refugee claimants already residing in Canada.</li>
                  <li>Individuals working as part-time, casual, or seasonal employees.</li>
                  <li>Independent contractors or business owners.</li>
                  <li>Workers in non-commercial or non-industrial settings.</li>
                </ul>
              </div>
             
            </div>
           
            <div className="pages-header-2">
            Application Process
            </div>
            <div className="pages-paragraph">
            The ARRS consists of a two-step process for candidates seeking to apply:
             

               <ul>
                  <li>Community Endorsement:</li>
                  <li>Individuals working as part-time, casual, or seasonal employees.

                    <ul>
                      <li><strong>For Temporary Foreign Workers: </strong>The community directly recruits workers to meet local labor needs and provides an Endorsement of Candidate letter to selected individuals.
                      </li>

                      <li><strong>For EMPP Refugees: </strong>The community collaborates with an EMPP referral partner to identify suitable refugees. The candidate receives an Endorsement of Candidate letter from the community and a referral letter from the partner organization.
                      </li>
                    </ul>
                  </li>
                  <li><strong>AAIP Application: </strong>Once endorsed, candidates can submit their applications to the AAIP.</li>
                
                </ul>

                <div style={{
                  margin:"25px 0"
                }}><strong>Communities are defined as those outside of the Calgary and Edmonton Census Metropolitan Areas (CMAs) with populations under 100,000.</strong></div>

                <div>The Alberta Rural Renewal Stream strengthens rural communities by attracting skilled workers and refugees. By supporting local economic needs and facilitating the settlement of newcomers, this stream plays a crucial role in fostering growth and sustainability in Alberta's rural areas. </div>

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

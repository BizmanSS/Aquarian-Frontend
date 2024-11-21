import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import Nestedfaq from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What are the employer requirements for the Ontario Employer Job Offer Stream?",
    answer:
      "Employers must have been in active business for at least three years and provide a job offer in compliance with labor laws.",
   
  },

  {
    question:
      " What fees are involved in the Ontario Employer Job Offer Stream?",
    answer:
      " Application fees vary $1,500 for job offers within the Greater Toronto Area (GTA) and $1,200 for those outside it. All fees are non-refundable regardless of application outcomes",
  
  },
  {
    question:
      "  What is the Ontario In-Demand Skills Stream?",
    answer:
      " The Ontario In-Demand Skills Stream allows foreign workers with job offers in specific in-demand occupations to apply for permanent residency in Ontario. This stream targets positions that require lower skill levels, specifically those categorized under the National Occupational Classification (NOC) TEER 4 and 5 levels",
  
  },
];

const rankingTableData=[
  {
    Factor:'Job Offer - NOC Skill Level',
    MaximumPoints:'10'
  },
  {
    Factor:'Job Offer - NOC Type',
    MaximumPoints:'10'
  },
  {
    Factor:'Job Offer - Wage',
    MaximumPoints:'10'
  },
  {
    Factor:'Job Offer - Length',
    MaximumPoints:'4'
  },
  {
    Factor:'Job Offer - NOC Skill Level',
    MaximumPoints:'3'
  },
  {
    Factor:'Job Offer - Earnings History',
    MaximumPoints:'3'
  },
  {
    Factor:'Regional Immigration - Location of Job Offer',
    MaximumPoints:'10'
  },
  {
    Factor:'Regional Immigration - Location of Study',
    MaximumPoints:'10'
  },
  {
    Factor:'Highest Level of Education',
    MaximumPoints:'10'
  },
   {
    Factor:'Field of Study',
    MaximumPoints:'10'
  },
  {
    Factor:'Canadian Education Experience',
    MaximumPoints:'10'
  },
  {
    Factor:'Official Language Ability',
    MaximumPoints:'10'
  },
  {
    Factor:'Knowledge of Official Languages',
    MaximumPoints:'10'
  },
  {
    Factor:'Strategic Priorities',
    MaximumPoints:'10'
  },
]

export default function OntarioEmployerJobOfferStream() {
  const ForeignRef = useRef(null);
  const InternationalRef = useRef(null);
  const InDemandRef = useRef(null);
  const RequirementsRef = useRef(null);
  const EmployerfaqRef = useRef(null);
  const faqRef= useRef(null);

  const tableContentData = [
    {
      title: "Foreign Worker Stream",
      scrollTo: ForeignRef,
    },
    {
      title: "International Student Stream",
      scrollTo: InternationalRef,
    },
    {
      title: "In-Demand Skills Stream",
      scrollTo: InDemandRef,
    },
    {
      title: "Requirements of Ontario Employer Job Offer Stream",
      scrollTo: RequirementsRef,
    },
    {
      title: "Ontario Employer Job Offer Ranking System",
      scrollTo: EmployerfaqRef,
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
          h2="Ontario"
          h3="Ontario Employer Job Offer Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "} Ontario Post Graduate Stream
              {" > "} Ontario Employer Job Offer Stream
            </div>
            <div class="pages-header">Ontario Employer Job Offer Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Ontario Immigrant Nominee Program (OINP) offers the Employer Job Offer category, providing foreign workers, international students, and in-demand skilled workers with pathways to permanent residency in Ontario. To permanently live and work in Ontario, you must have a job offer in a skilled occupation within TEER (Training, Education, Experience and Responsibilities) categories 0, 1, 2, or 3 of the National Occupational Classification (NOC). This stream is available to foreign workers both within Canada and abroad. This category comprises three streams:

            <ul className='mt-3'>
              <li>Ontario Foreign Worker</li>
              <li>Ontario International Student</li>
              <li>Ontario In-Demand Stream</li>
            </ul>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={ForeignRef}>
            Foreign Worker Stream
            </div>
            <div className="pages-paragraph">
              <div className="my-5">
              Ontario Foreign Workers is a pathway of Ontario Employer Job Offer. 
              </div>
             
              <ul className="my-3">
                <li>
                It is designed for foreign nationals with a valid job offer in a skilled occupation (TEER category 0, 1, 2, or 3) from an Ontario employer. 
                </li>
                <li>
                Applicants must have at least two years of paid full-time work experience in the same occupation as the job offer, gained within the five years prior to application submission. 
                </li>
                <li>
                Alternatively, if the position requires mandatory licensing in Ontario, the applicant must have the necessary license or authorization.
                </li>
              </ul>
            </div>

            <div class="pages-header-2" ref={InternationalRef}>
            International Student Stream
            </div>

            <div className="pages-paragraph">
             
              <div className="mt-3">
              Ontario International Students targets international graduates from eligible Canadian colleges or universities who have received a job offer in a skilled occupation (TEER category 0, 1, 2, or 3) in Ontario. 
              </div>

              <ul className="my-3">
                <li>
                Applicants must have completed a degree or diploma from an eligible Canadian institution within two years of application submission. 
                </li>
                <li>
                Work experience is not a mandatory criterion under this stream.
                </li>
               
              </ul>

            </div>

            <div class="pages-header-2" ref={InDemandRef}>
            In-Demand Skills Stream
            </div>

            <div className="pages-paragraph">
             
              <div className="mt-3">
              Ontario In-Demand Skills targets foreign workers with job offers in specific in-demand occupations, primarily in sectors such as agriculture, construction, and transportation. 
              </div>

              <ul className="my-3">
                <li>
                The job offer must be in eligible occupation TEER category 4/5.  
                </li>
                <li>
                Applicants are required to have nine months of paid full-time work experience in Ontario in the same occupation as the job offer, obtained within the three years before application submission.
                </li>
               
              </ul>

            </div>

            <div class="pages-header-2" ref={RequirementsRef}>
            Requirements of Ontario Employer Job Offer Stream
            </div>

            <div className="pages-paragraph">
             
              <div className="mt-3">
              Applicants must have full-time (minimum of 1,560 hours per year and at least 30 hours of paid work per week) and permanent (no end date). The position should be primarily based in Ontario. 
              </div>
              <div className="mt-3">
              Employers must have been in active business for at least three years, have business premises in Ontario where the applicant will work, and meet specific revenue and full-time employee requirements. 
              </div>


            </div>

            <div class="pages-header-2" ref={EmployerfaqRef}>
            Ontario Employer Job Offer Ranking System
            </div>

            <div className="pages-paragraph">
             
              <div className="mt-3">
              The Ontario Employer Job Offer Ranking System assesses and ranks candidates who have registered profiles for immigration to Ontario. 
              </div>
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
                      {rankingTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.Factor}</td>
                          <td>{row.MaximumPoints}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
<div className='mt-5'>The total possible points a candidate can achieve is 100. Candidates with higher scores are prioritized for invitations to apply for the program. Prospective applicants must register an EOI in the OINP's e-Filing Portal. The EOI is scored based on factors such as job offer, education, and work experience. Invited candidates have 14 calendar days to submit a complete application through the OINP e-Filing Portal.
</div>
            </div>


          </div>
          <div ref={faqRef}>
            {" "}
            <Nestedfaq faqItems={faqItems} />
          </div>

          <ReadyToStartCard />
        </div>
      </div>
    </div>
  );
}

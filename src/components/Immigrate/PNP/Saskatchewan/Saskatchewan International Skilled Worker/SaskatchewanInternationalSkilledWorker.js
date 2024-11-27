import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: "Can I apply for SISW if I am currently living outside Canada?",
    answer:
      "Yes, individuals living outside Canada can apply through any of the SISW substreams if they meet eligibility requirements.",
      
  },
  {
    question:
      "What types of occupations are typically excluded from the Saskatchewan Immigrant Nominee Program?",
    answer:
      "Occupations that are often excluded include healthcare professionals (like general practitioners and dentists), educators (such as university professors and secondary school teachers), skilled trades (like electricians and plumbers), management positions (including senior managers), legal occupations (like lawyers), and certain artistic professions (such as musicians and actors).",
   
  },
 
];

export default function SaskatchewanInternationalSkilledWorkerProgram
() {
  const ExpressEntryRef = useRef(null);
  const EmploymentOfferRef = useRef(null);
  const faqRef = useRef(null);
  const OccuupationRef = useRef(null);
  const InternationalRef = useRef(null);
  const SkillsRef = useRef(null);
  const AssessmentRef = useRef(null);

 
  const occupationTableData=[
    {
      Factor:"Factor 1: Labour Market Success",
     MaximumPoints:"70"
    },
    {
      Factor:"Education and Training",
     MaximumPoints:"23"
    },
    {
      Factor:"Skilled Work Experience",
      MaximumPoints:"10"
    },
    {
      Factor:"Language Ability",
     MaximumPoints:"30"
    },
    {
      Factor:"Age",
     MaximumPoints:"12"
    },
    {
      Factor:"Factor 2: Connection to Saskatchewan and Labour Market",
     MaximumPoints:"30"
    },
    {
      Factor:"Employment Offer Subcategory - Connection to Saskatchewan",
     MaximumPoints:"30"
    },
    {
      Factor:"Occupation In-Demand and Saskatchewan Express Entry Subcategories - Connection to Saskatchewan",
     MaximumPoints:"20"
    }
    ,
    
    
    
    
  
  ]
  const tableContentData = [
    {
      title: "Saskatchewan Express Entry",
      scrollTo: ExpressEntryRef,
    },
    {
      title: "Saskatchewan Employment Offer",
      scrollTo: EmploymentOfferRef,
    },
    {
      title: "Saskatchewan In-Demand Occupation",
      scrollTo: OccuupationRef,
    },
    {
      title: "Saskatchewan International Skilled Worker Tech Talent Pathway",
      scrollTo: InternationalRef,
    },
    {
      title: "Saskatchewan Hard-to-Fill Skills Pilot",
      scrollTo: SkillsRef,
    },
    {
      title: "SINP Assessment Grid",
      scrollTo: AssessmentRef,
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
          h2="Saskatchewan"
          h3="Saskatchewan International Skilled Worker"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Saskatchewan
              {" > "}Saskatchewan International Skilled Worker Program


            </div>
            <div class="pages-header">
            Saskatchewan International Skilled Worker Program

            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Saskatchewan International Skilled Worker (SISW) program is a key pathway of the Saskatchewan Immigrant Nominee Program (SINP). SINP is a PNP by the province of Saskatchewan designed to attract skilled workers from around the globe to fill labour shortages. Successful candidates receive a provincial nomination, increasing their chances of securing a Canadian PR. The candidates are assessed based on the SINP Assessment Grid and must secure at least 60 points to be eligible for the streams of the SISW program.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={ExpressEntryRef}>
            Saskatchewan Express Entry


            </div>
            <div className="pages-paragraph">
            The Saskatchewan Express Entry substream is for individuals with an active profile in Canada's Express Entry system. To qualify, applicants must meet specific criteria:

              <ul className="my-3">
                <li>
                At least 1 year of work experience in a skilled occupation classified under National Occupational Classification (NOC) levels 0, A, or B.
                 
                </li>
                <li>
                Minimum of 60 points on the SINP Points Assessment Grid.
                </li>
          
              </ul>
              The experience is considered ineligible if it is an occupated under the SINP Excluded Occupation List. This substream allows Saskatchewan to select candidates who are already in the federal immigration pool and are likely to successfully integrate into the local labor market.

            </div>
            <div class="pages-header-2" ref={EmploymentOfferRef}>
            Saskatchewan Employment Offer


            </div>
            <div className="pages-paragraph">
            The Saskatchewan Employment Offer targets foreign skilled workers with a valid job offer from an employer in Saskatchewan. The eligibility criteria include:
 

              <ul className="my-3">
                <li>
                A full-time, permanent job offer from a Saskatchewan employer.
                  
                </li>
                <li>
                Relevant work experience related to the job offer.

                </li>
                <li>
                At least 60 points on the SINP Points Assessment Grid.

                </li>
                </ul>
                This pathway is especially beneficial for those who have secured employment in Saskatchewan before applying for immigration.
                </div>



                <div class="pages-header-2" ref={OccuupationRef}>
                Saskatchewan In-Demand Occupation


            </div>
                <div className="pages-paragraph">
                The Saskatchewan In-Demand Occupation is for foreign workers with experience in specific high demand occupations in the province. To qualify, applicants must have:
 

              <ul className="my-3">
                <li>
                At least one year of work experience in an occupation listed as "in-demand" by the province.
                  
                </li>
                <li>
                Unlike the Employment Offer substream, candidates do not need a job offer to apply.

                </li>
                <li>
                A minimum score of 60 points on the SINP Points Assessment Grid.

                </li>
                </ul>
                This stream provides an opportunity for skilled workers who may not yet have employment secured but has relevant qualifications aligning with Saskatchewan’s labor market needs.
                </div>





                <div class="pages-header-2" ref={InternationalRef}>
                Saskatchewan International Skilled Worker Tech Talent Pathway


            </div>
                <div className="pages-paragraph">
                The Tech Talent Pathway is aimed at attracting highly skilled workers in technology-related fields. 
 

              <ul className="my-3">
                <li>
                Applicants must have a job offer from a Saskatchewan employer specifically in one of the tech occupations.
                  
                </li>
                <li>
                The pathway focuses on occupations that are critical to the tech sector's growth within Saskatchewan.

                </li>
          
                </ul>
                Candidates must still meet the minimum points requirement and have relevant skills and experience.
                </div>


                <div class="pages-header-2" ref={SkillsRef}>
                Saskatchewan Hard-to-Fill Skills Pilot


            </div>
                <div className="pages-paragraph">
                The Hard-to-Fill Skills Pilot addresses specific labor shortages by targeting skilled workers in occupations that are challenging for employers to fill.
 

              <ul className="my-3">
                <li>
                Applicants must have relevant work experience in one of the identified hard-to-fill occupations.
                  
                </li>
                <li>
                A valid job offer from a Saskatchewan employer is necessary.

                </li>
                <li>At least 60 points on the SINP Points Assessment Grid.
</li>
          
                </ul>
                This pilot program helps employers find qualified candidates for specialized roles.
                </div>


                <div class="pages-header-2" ref={AssessmentRef}>
                SINP Assessment Grid


            </div>
                <div className="pages-paragraph">
                The SINP Points Assessment Grid operates on a scale of 100 points. To qualify for any of the Saskatchewan International Skilled Worker streams, candidates must achieve a minimum score of 60 points. 
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
                      {occupationTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.Factor}</td>
                          <td>{row.MaximumPoints}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              
              The Saskatchewan International Skilled Worker program offers skilled immigrants a pathway to build their careers and lives in Canada. As labor market demands evolve, these programs remain flexible, ensuring that both employers and immigrants can find opportunities.
                </div>


              
              

            
           

            
          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>        </div>
      </div>
    </div>
  );
}

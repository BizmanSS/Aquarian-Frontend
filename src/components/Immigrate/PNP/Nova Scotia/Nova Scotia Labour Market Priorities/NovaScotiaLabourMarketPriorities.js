import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: "What should I do if I do not receive an NSLMP Letter of Interest?",
    answer:
      "If you do not receive a Letter of Interest, it may be due to not meeting current eligibility criteria or not having sufficient work experience in prioritized occupations. It is advisable to regularly update your Express Entry profile and monitor changes in labor market demands.",
      
  },
  {
    question:
      "How often does Nova Scotia conduct draws for the NSLMP",
    answer:
      " Draws occur periodically throughout the year, but specific dates and frequencies can vary based on labor market needs.",
   
  },
  
];

export default function NovaScotiaLabourMarketPriorities
() {
  const EligibilityRef = useRef(null);
  const ApplicationRef = useRef(null);
  const faqRef = useRef(null);
  const OccupationsRef = useRef(null);

 
  const occupationTableData=[
    {
      category:"Language Ability",
      Points:"35"
    },
    {
      category:"Education",
      Points:"25"
    },
    {
      category:"Business Ownership/Management Experience      ",
      Points:"35"
    },
    {
      category:"Net Worth",
      Points:"10"
    },
    {
      category:"Age",
      Points:"10"
    },
    {
      category:"Adaptability",
      Points:"10"
    },
    {
      category:"Nova Scotia Economic Priorities",
      Points:"10"
    },
    {
      category:"Investment",
      Points:"15"
    }
    ,
    
    
    
    
  
  ]
  const tableContentData = [
    {
      title: "Eligibility for NSLMP",
      scrollTo: EligibilityRef,
    },
    {
      title: "Application for NSLMP",
      scrollTo: ApplicationRef,
    },
    {
      title: "In-Demand Occupations",
      scrollTo: OccupationsRef,
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
          h3="Nova Scotia Labour Market Priorities"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}Nova Scotia Labour Market Priorities
 

            </div>
            <div class="pages-header">
            Nova Scotia Labour Market Priorities

            </div>
            The Nova Scotia Labour Market Priorities stream is an important pathway of the Nova Scotia Nominee Program (NSNP).  The stream attracts skilled workers having experience in in-demand occupations, who can fill specific labor market needs in the province. This stream allows Express Entry candidates to receive a provincial nomination, significantly enhancing their chances of obtaining permanent residency in Canada. Sometimes occupations are announced in advance before an intake while other times candidates are directly invited from the Express Entry pool.


            
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility for NSLMP


            </div>
            <div className="pages-paragraph">
            The eligibility requirements for the NSLMP are not static; they evolve based on Nova Scotia's labor market demands. Each draw from the pool of candidates may focus on different occupations or qualifications, reflecting the province's current economic needs

              <ul className="my-3">
                <li>
                Applicants must be registered in the federal Express Entry pool and qualify for at least one of three federal Economic programs.
<ul><li><strong>Federal Skilled Worker Program (FSWP):</strong> High school diploma and one year of skilled work experience
</li>
<li><strong>Canadian Experience Class (CEC):</strong> No minimum education requirement, minimum 1 year of full-time skilled experience in the last 3 years.
</li>
<li><strong>Federal Skilled Trades Program (FSTP):</strong> No minimum education requirement, at least 2 years of full-time skilled experience, and a job offer in Canada/trade certificate
</li>

</ul>                 
                </li>
                <li>
                Candidates must receive a Letter of Interest from the Nova Scotia Office of Immigration (NSOI) through their Express Entry profile. 
                </li>
               
              </ul>
              The candidates must meet the minimum language proficiency requirement listed in their Express Entry profile.

            </div>
            <div class="pages-header-2" ref={ApplicationRef}>
            Application for NSLMP


            </div>
            <div className="pages-paragraph">
            The Nova Scotia Labour Market Priorities stream operates on an invitation-only basis for Express Entry candidates.
 

              <ul className="my-3">
                <li>
                Candidates must create a profile in the Express Entry system and indicate their interest in moving to Nova Scotia.
                  
                </li>
                <li>
                If selected based on their profile and current labor market priorities, candidates will receive a Letter of Interest from NSOI.

                </li>
                <li>
                Within 30 days of receiving this letter, candidates must submit a complete application for provincial nomination through the NSNP online service.

                </li>
                <li>If nominated, candidates have 30 days to accept the nomination and must then apply for permanent residency through IRCC within one year.
</li>




              </ul>
             
              Applications submitted through Express Entry are typically processed within six months.
            
            </div>
            
            <div className="pages-paragraph">
            
              <div class="pages-header-2" ref={OccupationsRef}>
              In-Demand Occupations


            </div>
            <div className="pages-paragraph">
            While there is no official list of in-demand occupations under the NSLMP, past draws have favored candidates with experience in specific fields such as:
 

              <ul className="my-3">
                <li>
                Financial Auditors and Accountants (NOC 11100)

                  
                </li>
                <li>
                Early Childhood Educators and Assistants (NOC 42202)


                </li>
                <li>
                Registered Nurses (NOC 3012)


                </li>
                <li>Carpenters (NOC 7271)

</li>




              </ul>
              Candidates nominated through this stream receive an additional 600 Comprehensive Ranking System (CRS) points, virtually guaranteeing an Invitation to Apply (ITA) for permanent residency. Unlike some other immigration pathways, candidates applying through the NSLMP do not need a job offer to be considered. However, having experience in high-demand occupations can increase their chances of being invited.

            
            </div>

            
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

import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: "What are the minimum requirements to apply for the NS Entrepreneur Pathway?",
    answer:
      "Applicants must be at least 21 years old, have a minimum personal net worth of CAD 600,000, and invest at least CAD 150,000 in a Nova Scotia business. They also need at least three years of business ownership experience or five years in a senior management role.",
      
  },
  {
    question:
      "How does the points-based ranking system of NS Entrepreneur Pathway work?",
    answer:
      "Candidates are evaluated based on factors, including language proficiency, education, business experience, net worth, age, adaptability, and investment amount. ",
   
  },
  {
    question:
      "Are there any restrictions on the type of business I can establish in NS Entrepreneur?",
    answer:
      " Yes, the business must be for-profit and cannot be in certain sectors such as payday loans, passive investments, or anything that could harm the reputation of the NSNP or Nova Scotia government.",
   
  },
];

export default function NSEntrepreneurStream() {
  const EligibilityRef = useRef(null);
  const ApplicationRef = useRef(null);
  const faqRef = useRef(null);
  const EntrepreneurRef = useRef(null);

 
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
      title: "Eligibility Criteria for NS Entrepreneur Stream",
      scrollTo: EligibilityRef,
    },
    {
      title: "Application for NS Entrepreneur Stream",
      scrollTo: ApplicationRef,
    },
    {
      title: "NS Entrepreneur Ranking System",
      scrollTo: EntrepreneurRef,
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
          h3="Nova Scotia Entrepreneur Category"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}NS Entrepreneur Stream 

            </div>
            <div class="pages-header">
            NS Entrepreneur Stream 

            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Nova Scotia Nominee Program (NSNP) Entrepreneur Stream is a pathway for international entrepreneurs looking to establish or purchase a business in Nova Scotia, Canada. This program aims to target experienced business owners/ senior managers who can contribute to the province's economic growth. Through its Entrepreneur PNP, Nova Scotia aims to enhance its economic landscape through job creation and investment. The applicants are required to either start a new business or purchase an existing one where they manage day-to-day activities. After one year, the candidate can be nominated for PR in Canada.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility Criteria for NS Entrepreneur Stream 


            </div>
            <div className="pages-paragraph">
            Applicants must be at least 21 years old at the time of application. The other requirements include:

              <ul className="my-3">
                <li>
                A minimum personal net worth of CAD 600,000. This net worth must be legally obtained and verifiable through documentation.
                 
                </li>
                <li>
                Minimum of 3 years of ownership experience in a business or 5 years of experience in a senior management role. 
                </li>
                <li>
                A minimum investment of CAD 150,000 in a Nova Scotia business. 
                </li>
                <li>Language proficiency in English or French with CLB level 5 or higher. </li>
              </ul>
            
            </div>
            <div class="pages-header-2" ref={ApplicationRef}>
            Application for NS Entrepreneur Stream


            </div>
            <div className="pages-paragraph">
            The application process for the NSNP Entrepreneur Stream involves several key steps:
 

              <ul className="my-3">
                <li>
                Interested candidates must submit an EOI through the NSNP online portal. 
                  
                </li>
                <li>
                Each EOI is assessed based on a points system that evaluates various factors such as age, education, language proficiency, work experience, and net worth.

                </li>
                <li>
                The nomination must be accepted within 30 days in your Express Entry account, which will add 600 CRS points to the profile.

                </li>
                <li>High-scoring candidates will receive an ITA from the NSNP. This invitation allows them to submit a complete application within 90 days.</li>
                <li>The application must include detailed documentation supporting claims made in the EOI.</li>
                <li>Candidates may be required to attend an interview with NSNP officials. 
</li>
<li>Upon approval of their application, candidates will sign a Business Performance Agreement outlining their investment commitments.
</li>
{/* table */}
<div class="pages-header-2" ref={EntrepreneurRef}>
NS Entrepreneur Ranking System


            </div>
<div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {occupationTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.category}</td>
                          <td>{row.Points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              </ul>
              If an applicant is granted a temporary work permit, they can travel to Nova Scotia to establish their business. Upon meeting the conditions outlined in their Business Performance Agreement, they become eligible for a provincial nomination after operating their business for at least 12 months.

            
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

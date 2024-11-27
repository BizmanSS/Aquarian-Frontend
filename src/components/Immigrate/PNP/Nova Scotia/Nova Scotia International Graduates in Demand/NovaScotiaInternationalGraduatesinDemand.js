import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: "What types of jobs qualify under the IGiD stream?    ",
    answer:
      "Jobs must fall under specific NOC codes related to health care and education, such as paramedical occupations, pharmacy technicians, nurse aides, and early childhood educators. ",
      
  },
  {
    question:
      "Is there an application fee for the IGiD stream?",
    answer:
      " There is no application fee for the NSNP; however, applicants may incur costs related to document preparation and submission.      ",
   
  },
  {
    question:
      "Can I apply if I studied outside of Nova Scotia?",
    answer:
      " No, candidates must have completed at least half of their educational program in Nova Scotia at an eligible DLI.      ",
   
  },
];

export default function NSInternationalGraduateInDemand() {
  const EligibilityRef = useRef(null);
  const ApplicationRef = useRef(null);
  const faqRef = useRef(null);

 
  const occupationTableData=[
    {
      NOCCode:"32102",
      Occupation:"Paramedical occupations",

RequiredEducationalCredential :"Diploma"


    },
    {
      NOCCode:"32124",
      Occupation:"Pharmacy technicians",

RequiredEducationalCredential :"Diploma"


    },
    {
      NOCCode:"33102",
      Occupation:
      " Nurse aides, orderlies, and patient service associates",

RequiredEducationalCredential :"Certificate, Diploma, or Degree"


    },
    {
      NOCCode:"42202",
      Occupation:
      " Early childhood educators and assistants",

RequiredEducationalCredential :"Diploma or Degree"


    },
    
  ]
  const tableContentData = [
    {
      title: "NS International Graduate In Demand Eligibility      ",
      scrollTo: EligibilityRef,
    },
    {
      title: "NS International Graduate In Demand Application Process      ",
      scrollTo: ApplicationRef,
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
          h3="Nova Scotia International Graduates in Demand"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}Nova Scotia International Graduates in Demand


            </div>
            <div class="pages-header">
            NS International Graduate In Demand

            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The NS International Graduates in Demand (IGiD) stream is a part of the Nova Scotia Nominee Program (NSNP). The program attracts recent international graduates who have completed their studies in Nova Scotia and have a permanent job offer in specific high-demand occupations. This initiative aims to address labor shortages in the province while providing a pathway for international students to gain permanent residency in Canada. The stream is not a part of the Express Entry program, therefore, processing time of NS International Graduate in Demand is usually longer. 
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={EligibilityRef}>
            NS International Graduate In Demand Eligibility
 


            </div>
            <div className="pages-paragraph">
            To qualify for the IGiD stream, candidates must meet requirements including:


              <ul className="my-3">
                <li>
                Applicants must be between 19 and 55 years old.

                 
                </li>
                <li>
                A high school education is required. The program of study must be at least 30 weeks long or 24 weeks for NOC 33102  and completed in Nova Scotia.

                </li>
                <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>NOC Code</th>
                        <th>Occupation</th>
                        <th>
Required Educational Credential

</th>

                      </tr>
                    </thead>
                    <tbody>
                      {occupationTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.NOCCode}</td>
                          <td>{row.Occupation}</td>
                          <td>{row.RequiredEducationalCredential}</td>


                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
                <li>
                A permanent, full-time job offer is mandatory, specifically in one of the following NOC categories:
<ul>
  <li>NOC 32102: Paramedical occupations
</li>
  <li>NOC 32124: Pharmacy technicians
</li>
  <li>NOC 33102: Nurse aides, orderlies, and patient service associates
</li>
  <li>NOC 42202: Early childhood educators and assistants
</li>

</ul>
                </li>
                <li>Candidates must prove language ability equivalent to Canadian Language Benchmark (CLB) Level 5 in English or French.
 </li>
 <li>Proof of sufficient financial resources and genuine intention to settle in Nova Scotia is required.
</li>
              </ul>
              The application won’t be approved if the family income is below the Low-Income Cutoff.

            
            </div>
            <div class="pages-header-2" ref={ApplicationRef}>
            NS International Graduate In Demand Application Process


            </div>
            <div className="pages-paragraph">
            The application process for the IGiD stream involves following steps:

 

              <ul className="my-3">
                <li>
                Candidates must submit their application online through the NSNP portal when the stream is open.

                  
                </li>
                <li>
                If approved, candidates receive a nomination certificate from Nova Scotia.


                </li>
                <li>
                After receiving the nomination, candidates must apply for permanent residency through Immigration, Refugees and Citizenship Canada (IRCC) within 6 months.


                </li>
                <li>Candidates may request a letter of support from NSNP to apply for or renew a temporary work permit while waiting for their PR application to be processed.
</li>
             


              </ul>
              There is no application fee for NSNP streams. Processing times for applications under the Nova Scotia Nominee Program range from 3 to 6 months. The IGiD stream plays an important role in addressing labor shortages in Nova Scotia's economy by attracting skilled workers who are already familiar with the local culture and job market. 


            
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

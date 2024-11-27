import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: " What is the duration of these Nova Scotia Immigration Pilots?",
    answer:
      "Both pilots are ongoing initiatives designed to adapt to labour market needs in Nova Scotia.",
      
  },
  {
    question:
      "Can applicants from outside Canada apply for these NS pilots?",
    answer:
      " Yes, both programs under Nova Scotia Pilot Streams are open to international candidates who meet specific qualifications and job offer requirements.",
   
  },
  
];

export default function NovaScotiaImmigrationPilots

() {
  const ConstructionRef = useRef(null);
  const HealthcarRef = useRef(null);
  const faqRef = useRef(null);

 
  
  const tableContentData = [
    {
      title: "Critical Construction Pilot",
      scrollTo: ConstructionRef,
    },
    {
      title: "Healthcare Professionals Immigration Pilot",
      scrollTo: HealthcarRef,
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
          h3="Pilots"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}Nova Scotia Immigration Pilots

 

            </div>
            <div class="pages-header">
            Nova Scotia Immigration Pilots

            </div>
            Nova Scotia has introduced 2 significant immigration pilots to address specific labour shortages in the province: the Critical Construction Pilot and the Healthcare Professionals Immigration Pilot. These programs are designed to streamline the immigration process for skilled workers in critical sectors. It supports the labour shortages in the NS province and contributes to its economy.


            
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={ConstructionRef}>
            Critical Construction Pilot


            </div>
            <div className="pages-paragraph">
            The Critical Construction Pilot is an initiative to attract skilled construction workers to Nova Scotia. This pilot is formed to address the urgent demand for labour in the construction sector as a result of the ongoing infrastructure projects and housing demands.

              <ul className="my-3">
                <li>
                The pilot focuses on construction-related occupations under the National Occupational Classification (NOC) system. This includes roles like carpenters, electricians, and plumbers.
               
                </li>
                <li>
                The pilot also emphasizes community support for newcomers.
                </li>
               
              </ul>
              The program aims to fill critical labour shortages in the construction industry so projects can proceed without delays due to workforce shortages.

            </div>
            <div class="pages-header-2" ref={HealthcarRef}>
            Healthcare Professionals Immigration Pilot


            </div>
            <div className="pages-paragraph">
            The Healthcare Professionals Immigration Pilot is aimed at addressing the healthcare staffing crisis in Nova Scotia. This program targets healthcare professionals, including pharmacists, pharmacy technicians, and other critical roles.
 

              <ul className="my-3">
                <li>
                The province issues Letter of Interest (LOIs) to qualified candidates, inviting them to apply for permanent residency. 
                  
                </li>
                <li>
                Candidates with an LOI can secure conditional job offers from healthcare employers in Nova Scotia. 

                </li>
                <li>
                The pilot initially emphasized roles like podiatrists (NOC 31209) as per immediate healthcare needs.

                </li>
        




              </ul>
             
              The Critical Construction Pilot and Healthcare Professionals Immigration Pilot represent Nova Scotia’s approach to addressing labor shortages in crucial sectors. These initiatives benefit newcomers seeking opportunities in their immigration while also contributing to the province's needs. 
            
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

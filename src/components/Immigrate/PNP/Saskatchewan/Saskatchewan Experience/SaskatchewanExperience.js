import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: "Is work permit required for Saskatchewan Experience Stream?",
    answer:
      "Yes, applicants must have an active work permit while applying for streams under this pathway.",
      
  },
  {
    question:
      "Can applicants under the Saskatchewan Experience streams apply without a job offer?",
    answer:
      " No, all applicants must have a valid job offer from a Saskatchewan employer to be eligible for any of the Saskatchewan Experience streams. This ensures that candidates have a confirmed position in the province.",
   
  },
 
];

export default function SaskatchewanExperience
() {
  const StudentsRef = useRef(null);
  const faqRef = useRef(null);
  const TruckDriverRef = useRef(null);
  const HospitalityRef = useRef(null);
  const ProfessionalsRef = useRef(null);
  const WorkPermitRef = useRef(null);

 
 
  const tableContentData = [
    {
      title: "Saskatchewan Existing Work Permit",
      scrollTo: WorkPermitRef,
    },
    {
      title: "Saskatchewan Health Professionals",
      scrollTo: ProfessionalsRef,
    },
    {
      title: "Saskatchewan Hospitality Sector Project",
      scrollTo: HospitalityRef,
    },
    {
      title: "Saskatchewan Long-Haul Truck Driver Project",
      scrollTo: TruckDriverRef,
    },
    {
      title: "Saskatchewan Students",
      scrollTo: StudentsRef,
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
          h3="Saskatchewan Experience"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Saskatchewan
              {" > "}Saskatchewan Experience



            </div>
            <div class="pages-header">
            Saskatchewan Experience

            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Saskatchewan Experience is a stream collection of different pathways for the SINP - Saskatchewan Immigrant Nominee Program. It includes 5 immigration streams targeting foreign nationals with relevant work experience, working with an employer in the province. The applicant has a job offer to be eligible for the program. Applicants who are successful will receive a provincial nomination from the authorities, helping them to secure Canadian PR.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={WorkPermitRef}>
            Saskatchewan Existing Work Permit


            </div>
            <div className="pages-paragraph">
            The Saskatchewan Existing Work Permit stream is for worker who are currently working in Saskatchewan on a valid work permit. To be eligible, applicants must have:

              <ul className="my-3">
                <li>
                A valid job offer from their current employer.
                 
                </li>
                <li>
                At least 6 months of work experience in their current occupation within Saskatchewan.
                </li>
                <li>Intention to reside in the province permanently.
</li>
          
              </ul>
              This stream allows candidates to transition from temporary to permanent residency.

            </div>
            <div class="pages-header-2" ref={ProfessionalsRef}>
            Saskatchewan Health Professionals


            </div>
            <div className="pages-paragraph">
            The Saskatchewan Health Professionals stream is for individuals who are currently working in Saskatchewan's healthcare sector. To qualify, applicants must:
 

              <ul className="my-3">
                <li>
                Hold a valid work permit.
                  
                </li>
                <li>
                Have a job offer from an approved Saskatchewan healthcare employer.

                </li>
                <li>
                Meet the language proficiency requirements, typically Canadian Language Benchmark (CLB) level 4 or higher.

                </li>
                </ul>
                This stream aims to address the province's need for skilled healthcare workers. The work experience required and the job offers must be in the healthcare sector in roles like physician, nurse, etc.
                </div>



                <div class="pages-header-2" ref={HospitalityRef}>
                Saskatchewan Hospitality Sector Project


            </div>
                <div className="pages-paragraph">
                The Saskatchewan Hospitality Sector Project targets individuals working in the hospitality industry. The eligibility criteria include:
 

              <ul className="my-3">
                <li>
                A valid work permit for specific roles such as Food/Beverage Server, Food Counter Attendant, or Housekeeping/Cleaning Staff.
                  
                </li>
                <li>
                A minimum of 6 months of full-time work experience with an SINP-approved employer.

                </li>
                <li>Completion of at least Grade 12 education or its equivalent.
</li>
                <li>
                A permanent, full-time job offer from that employer.

                </li>
                <li>A CLB score of at least 4 in all language categories.
</li>
                </ul>
                This initiative helps to retain workers in the hospitality sector and support local businesses.
                </div>





                <div class="pages-header-2" ref={TruckDriverRef}>
                Saskatchewan Long-Haul Truck Driver Project


            </div>
                <div className="pages-paragraph">
                The Saskatchewan Long-Haul Truck Driver Project is aimed at addressing the critical shortage of truck drivers in the province. Applicants must:
 

              <ul className="my-3">
                <li>
                Have a valid work permit and be currently employed as a long-haul truck driver (NOC 7511).
                  
                </li>
                <li>
                Show proof of a job offer from an approved trucking company in Saskatchewan.

                </li>
          <li>Have relevant driving experience and meet provincial licensing requirements.
</li>
                </ul>
                This project is essential for ensuring that Saskatchewan's supply chain remains efficient by attracting qualified drivers to the region.
                </div>


                <div class="pages-header-2" ref={StudentsRef}>
                Saskatchewan Students


            </div>
                <div className="pages-paragraph">
                The Saskatchewan Students stream is for international students who have recently graduated from a recognized post-secondary institution in Canada. 
 

              <ul className="my-3">
                <li>
                The candidate must have a degree, diploma, or certificate program from a recognized institution.
                  
                </li>
                <li>
                A valid post-graduation work permit.

                </li>
                <li>A job offer from a Saskatchewan employer in an occupation related to their field of study.

</li>
          
                </ul>
                This stream encourages international students to settle in Saskatchewan after their studies, contributing to the local economy and workforce.
                </div>


                
                The Saskatchewan Experience streams provide opportunities for skilled workers across various sectors to establish their lives in this province. By targeting existing work permit holders, health professionals, hospitality workers, long-haul truck drivers, and students, these programs address labor shortages and enhance community diversity.



              
              

            
           

            
          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>        </div>
      </div>
    </div>
  );
}

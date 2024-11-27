import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      " Is there a minimum wage requirement for the positions under the Yukon Critical Impact Worker stream?",
    answer:
      "Yes, employers must pay the nominee at least the Yukon median wage for the relevant NOC.",
  },
  {
    question: " Are there any age restrictions for foreign workers applying under Yukon Critical Impact Worker stream?",
    answer:
      "There are no specific age restrictions; however, applicants must meet the general eligibility criteria, including work experience and language proficiency.",
  },
  {
    question: "Can a foreign worker apply directly for the Critical Impact Worker stream?",
    answer:
      " No, only employers can apply. Foreign workers must have a job offer from an eligible employer who will apply on their behalf.",
  },
];

export default function YukonCriticalImpactWorker 

() {
  const faqRef = useRef(null);
  const EligibilityRef = useRef(null);
const ApplicationRef = useRef(null);
const EligibilityEmployeeRef = useRef(null);
  const tableContentData = [
    {
      title: "Eligibility Criteria for Yukon Critical Impact Worker",
      scrollTo: EligibilityRef,
      subItems: [
        {
          title: "Eligibility Criteria for Employers",
          scrollTo: EligibilityEmployeeRef,
        },]
    },
    {
      title: "Application Process for Yukon Critical Impact Worker",
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
          h2="Yukon"
          h3="Yukon Critical Impact Worker"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Yukon
              {" > "}Yukon Critical Impact Worker 


            </div>
            <div class="pages-header">Yukon Critical Impact Worker 
</div>
            <div class="pages-paragraph space-fix intro-size-fix">
            The Yukon Critical Impact Worker stream is an important component of the Yukon Nominee Program (YNP). The stream is designed to address labor shortages in the Yukon Territory by facilitating the immigration of foreign workers into entry-level positions. This employer-driven initiative targets low-skilled occupations classified under the National Occupational Classification (NOC) TEER categories C or D, which encompass roles requiring minimal formal education and training. The applicants of the program must have relevant experience in low-skilled or semi-skilled occupations.

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility Criteria for Yukon Critical Impact Worker
            </div>
            <div className="pages-paragraph">
            The foreign workers must satisfy the following eligibility criteria:

             

              <ul className="my-3" >
                <li>
                The candidate must have a full-time, permanent job offer from an eligible Yukon employer in NOC skill level C or D.
                
                </li>
                <li>
                They need to prove language proficiency in English or French, equivalent to CLB 4 level.

                </li>
                <li>
                They must have a minimum of a high school diploma or its equivalent.

                </li>
                <li>
                They also need to have at least six months of related work experience in the position being offered.
                 
                </li>
              </ul>
            
              <div class="text-2xl  my-3" ref={EligibilityEmployeeRef}>Eligibility Criteria for Employers
</div>
<ul className="my-3" >
                <li>
                Employers must have been operating a business in Yukon for at least one year.
                
                </li>
                <li>
                A full-time, permanent job offer must be extended to the foreign worker.

                </li>
                <li>
                Employers are required to demonstrate that reasonable efforts were made to recruit Canadian citizens or permanent residents for the position. This includes advertising the job in at least two local and one national medium for a minimum of four weeks.

                </li>
                <li>
                Employers must adhere to all territorial labor standards and provide free health insurance to the nominee until they are eligible under the Health Care Insurance Plan Act.
                 
                </li>
              </ul>

            </div>
            

            <div class="pages-header-2" ref={ApplicationRef}>
            Application Process for Yukon Critical Impact Worker 
            </div>
            <div className="pages-paragraph">
            The Yukon authorities accept applications for the YCIW program at all times. 

              <ul className="my-3">
                <li>
                The employer initiates the process by submitting an application to the Yukon government, providing details about the business and the job offer.

                </li>
                <li>
                Upon approval, the foreign worker applies for nomination under the Critical Impact Worker stream.

                </li>
                <li>
                After receiving the provincial nomination, the nominee applies to Immigration, Refugees and Citizenship Canada (IRCC) for permanent residency.

                </li>
              
              </ul>
              
            </div>
            The Yukon Critical Impact Worker Stream provides applicants with a clear route to Canadian permanent residency. They are also provided support in settling and integrating into the Yukon community.

          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

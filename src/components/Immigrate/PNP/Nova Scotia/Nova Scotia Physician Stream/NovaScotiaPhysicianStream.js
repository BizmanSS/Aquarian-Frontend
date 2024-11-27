import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: "What is the role of the College of Physicians and Surgeons of Nova Scotia?",
    answer:
      "The College regulates the practice of medicine in Nova Scotia, ensuring that physicians meet professional standards.",
      
  },
  {
    question:
      "What happens if my NS Physician application is refused?",
    answer:
      "Applicants can seek feedback on their application and may reapply once they address any issues raised during the evaluation process.",
   
  },
  
];

export default function NSPhysicianStream() {
  const EligibilityRef = useRef(null);
  const ApplicationRef = useRef(null);
  const faqRef = useRef(null);

 

  const tableContentData = [
    {
      title: "Eligibility for NS Physician Stream",
      scrollTo: EligibilityRef,
    },
    {
      title: "NS Physician Stream Application",
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
          h3="Nova Scotia Physician Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}Nova Scotia Physician Stream

            </div>
            <div class="pages-header">
            NS Physician Stream

            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Nova Scotia has maintained a framework to attract and retain physicians through its Nova Scotia Nominee Program Physician Stream. This initiative addresses the healthcare labor shortages in the province by facilitating the immigration of internationally trained doctors and specialists. It recruits skilled foreign doctors to fill its shortages. Successful physicians can apply for Canadian permanent residency. They must have received a job offer from an eligible health sector employer.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility for NS Physician Stream


            </div>
            <div className="pages-paragraph">
            To qualify for the Physician Stream, applicants must meet the criteria given below: <br></br>
            <br></br>
            A valid job offer from either the Nova Scotia Health Authority (NSHA) or the Izaak Walton Killam (IWK) Health Centre is required. This offer must be on official letterhead and indicate that the position is for general practitioners or specialist physicians (NOC 3111 and 3112.)
            <br></br><br></br>

            While there are no minimum requirements for language proficiency, education, or work experience, employers conduct thorough evaluations of educational credentials, language skills, and licensing eligibility. The assessments performed by the employer can be used in the immigration application process, simplifying the pathway for foreign nationals. 


             
            
            </div>
            <div class="pages-header-2" ref={ApplicationRef}>
            NS Physician Stream Application


            </div>
            <div className="pages-paragraph">
            The application process for the NSNP Physician Stream is open year-round.
 

              <ul className="my-3">
                <li>
                Applications are submitted online through the Nova Scotia Office of Immigration (NSOI).
                  
                </li>
                <li>
                The NSOI reviews applications for eligibility and completeness, which may include an interview.

                </li>
                <li>
                Successful applicants receive a nomination certificate, allowing them to apply for permanent residency within 6 months of nomination.

                </li>
                
{/* table */}


              </ul>
              Applicants in the stream also get a work permit support letter from the province. This letter can be used by the candidate to apply for a temporary work permit while processing the application. The processing for paper-based applications can take up to 18 months. 
              <br></br><br></br>
              Nova Scotia is known for its scenic beauty and high standard of living. There are opportunities for professional growth and development within a supportive healthcare environment. Physicians are welcomed into communities that value their contributions.

            
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

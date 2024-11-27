import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: "What types of physicians are eligible under NSLMP?",
    answer:
      "Eligible physicians include general practitioners, family physicians, and specialist physicians as classified under NOC codes 3111 and 3112.",
      
  },
  {
    question:
      "Is there a limit on how many physicians can apply through the NSLMP Physicians stream?",
    answer:
      " Currently, there is no publicly stated cap on the number of applications accepted through this stream; however, it operates on an invitation-only basis.",
   
  },
  
];

export default function NovaScotiaLabourMarketPrioritiesforPhysicians
() {
  const EligibilityRef = useRef(null);
  const ApplicationRef = useRef(null);
  const faqRef = useRef(null);

 
  
  const tableContentData = [
    {
      title: "Eligibility Requirements",
      scrollTo: EligibilityRef,
    },
    {
      title: "Application for NSLMP for Physicians",
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
          h3="Nova Scotia Labour Market Priorities for Physicians"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}Nova Scotia Labour Market Priorities for Physicians

 

            </div>
            <div class="pages-header">
            Nova Scotia Labour Market Priorities for Physicians

            </div>
            The Nova Scotia Labour Market Priorities for Physicians stream is a targeted immigration pathway under the Provincial Nominee Program operated by Nova Scotia (NSNP). It is designed for foreign physicians with an active profile in the pool of Express Entry. The Nova Scotia Labour Market Priorities Stream for Physicians is a bridge between the Nova Scotia Labour Market Priorities Stream and the Express Stream. Selected candidates receive a provincial nomination, which can increase their chances of Canadian permanent residency.

            
            
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility for NSNP Labour Market Priorities for Physicians


            </div>
            <div className="pages-paragraph">
            To qualify for the NSNP Labour Market Priorities for Physicians stream, candidates must meet several specific criteria:

              <ul className="my-3">
                <li>
                Applicants must have a valid job offer from either the Nova Scotia Health Authority (NSHA) or the IWK Health Centre. The positions must fall under the National Occupational Classification (NOC) codes 3111 (specialist physician) or 3112 (general practitioner or family physician).
                
                </li>
                <li>
                Candidates must be registered in the federal Express Entry pool.
                <ul>
                  <li><strong>Federal Skilled Worker:</strong> Requires a high school diploma and at least one year of continuous full-time skilled work experience.
</li>
                  <li><strong>Canadian Experience Class:</strong> No minimum education requirement, but requires at least one year of full-time skilled work experience in Canada within the last three years.
</li>
                  <li><strong>Federal Skilled Trades:</strong> No minimum education requirement; candidates need two years of full-time work experience in a skilled trade and either a job offer or a Canadian certificate of qualification.
</li>


                </ul>
                </li>
                <li>A minimum Canadian Language Benchmark (CLB) score as claimed in the Express Entry profile.
</li>
              </ul>
              Candidates are required to sign a Return for Service Agreement committing to live and work in Nova Scotia for a minimum of two years.

            </div>
            <div class="pages-header-2" ref={ApplicationRef}>
            Application for NSLMP for Physicians


            </div>
            <div className="pages-paragraph">
            Candidates must first create an Express Entry profile to indicate their interest in moving to Nova Scotia. If selected, candidates will receive an LOI from the Nova Scotia Office of Immigration, which must be accepted within 30 days.
 <br></br>
 <br></br>
 Candidates must then submit their application along with supporting documents. The NSOI will review applications and issue nominations at its discretion. Successful applicants will receive confirmation via their IRCC online account. They will get 600 points in their Express Entry profile which increases their chances of receiving an ITA.


          <br></br>   
          <br></br>   

             
 As of now, the NSNP Labour Market Priorities for Physicians stream has not conducted any intake rounds since its start. However, it remains an important component of Nova Scotia's strategy to strengthen its healthcare workforce amidst ongoing shortages in various medical fields.
            
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

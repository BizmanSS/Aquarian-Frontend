import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question: " Do I need a job offer to apply for the Nova Scotia Experience: Express Entry stream?",
    answer:
      "No, a job offer is not required to apply for this stream. Candidates can apply based on their work experience in Nova Scotia without a job offer beforehand.",
      
  },
  {
    question:
      "What types of work experience qualify for this program?",
    answer:
      " Eligible work experience must be full-time and paid, obtained within the last three years in Nova Scotia, and classified under NOC Skill Level 0, A, or B. Work experience gained through self-employment, volunteer work, unpaid internships, or while studying full-time does not qualify.",
   
  },
];

export default function NovaScotiaExperienceExpressEntry() {
  const EligibilityRef = useRef(null);
  const ApplyingRef = useRef(null);
  const faqRef = useRef(null);

 

  const tableContentData = [
    {
      title: "Eligibility for NS Experience Express Entry",
      scrollTo: EligibilityRef,
    },
    {
      title: "Applying to NS Experience: Express Entry",
      scrollTo: ApplyingRef,
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
          h3="Nova Scotia Experience: Express Entry"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
              {" > "}Nova Scotia Experience: Express Entry
            </div>
            <div class="pages-header">
              Nova Scotia Experience: Express Entry
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Nova Scotia Experience: Express Entry stream offers a pathway
              to the Nova Scotia Nominee Program (NSNP). This program is for
              skilled workers/newcomers who have gained work experience in Nova
              Scotia for at least 1 year to apply for permanent residency in
              Canada. Aligned with the federal Express Entry system, successful
              applicants to the Nova Scotia Experience: Express Entry stream
              receive a 600-point boost to their Express Entry profiles. This
              guarantees them an Invitation to Apply (ITA) for Canadian
              permanent residence.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility for NS Experience Express Entry

            </div>
            <div className="pages-paragraph">
              To be eligible for the Nova Scotia Experience: Express Entry
              stream, candidates must meet the following requirements:
              <ul className="my-3">
                <li>
                  Applicants must have an active profile in the federal Express
                  Entry pool.
                  <ul>
                    <li>
                      {" "}
                      <strong>Federal Skilled Worker (FSW):</strong> Requires a
                      high school diploma and one year of continuous full-time
                      skilled work experience.
                    </li>
                    <li>
                      {" "}
                      <strong>Canadian Experience Class (CEC):</strong> No
                      education requirement; needs one year of full-time skilled
                      work experience in Canada within the last three years.
                    </li>

                    <li>
                      {" "}
                      <strong>Federal Skilled Trades (FST):</strong> No
                      education requirement; requires two years of full-time
                      skilled trade experience and either a job offer or a
                      Canadian qualification certificate.
                    </li>
                  </ul>
                </li>
                <li>
                  Applicants must intend to live permanently in Nova Scotia. The
                  candidate must have at least 12 months of experience in the
                  province or equivalent part-time experience at NOC Skill Level
                  0, A, or B.
                </li>
                <li>
                  Candidates with Nova Scotia work experience at NOC Skill Level
                  0 or A must have valid language test scores of CLB 7 or
                  higher. For NOC Skill Level B positions, a minimum score of
                  CLB 5 is required.
                </li>
              </ul>
            
            </div>
            <div class="pages-header-2" ref={ApplyingRef}>
            Applying to NS Experience: Express Entry

            </div>
            <div className="pages-paragraph">
            The stream takes application at all times. Register profile with Immigration, Refugees and Citizenship Canada (IRCC). Candidates may either apply directly to the Nova Scotia Office of Immigration (NSOI) or be selected from the Express Entry pool. 

              <ul className="my-3">
                <li>
                After receiving a Letter of Interest, candidates have 60 days to submit their application online, including all required documents.

                  
                </li>
                <li>
                If the application is successful, they will receive a provincial nomination certificate via email. This nomination will also be reflected in the Express Entry profile.

                </li>
                <li>
                The nomination must be accepted within 30 days in your Express Entry account, which will add 600 CRS points to the profile.

                </li>
              </ul>
              Following acceptance, the candidate will likely receive an ITA for permanent residency in the next Express Entry draw. The processing time for applications under this stream is typically at least three months, and there are no application fees associated with applying through this program.
            
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

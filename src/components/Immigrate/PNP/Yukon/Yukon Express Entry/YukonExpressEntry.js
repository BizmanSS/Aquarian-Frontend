import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      "What is a Yukon Express Entry?",
    answer:
      "Yukon Express Entry is a stream of the Yukon Nominee Program that allows eligible candidates in the federal Express Entry pool to receive a provincial nomination for permanent residency.",
  },
  {
    question: "How does YEE benefit employers?",
    answer:
      " It simplifies hiring foreign workers by eliminating the need for an LMIA and allows quicker recruitment to fill critical positions.",
  },
  {
    question: "How much does YEE increase my CRS score?",
    answer:
      "  Receiving a nomination through YEE adds 600 points to your CRS score, greatly enhancing your chances of receiving an ITA",
  },
];

export default function YukonExpressEntry
() {
  const faqRef = useRef(null);
  const RequirementsRef = useRef(null);
const ApplicationRef = useRef(null);
  const tableContentData = [
    {
      title: "Yukon Express Entry Eligibility Criteria",
      scrollTo: RequirementsRef,
    },
    {
      title: "Application Process for Yukon Express Entry",
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
          h3="Yukon Express Entry"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Yukon
              {" > "}Yukon Express Entry

            </div>
            <div class="pages-header">Yukon Express Entry</div>
            <div class="pages-paragraph space-fix intro-size-fix">
            Yukon Express Entry (YEE) is a key component of the Yukon Nominee Program (YNP). It is designed to attract skilled workers to the Yukon Territory in Canada. Launched in March 2015, this stream allows eligible candidates from the federal Express Entry pool to receive provincial nominations. The successful applicants receive 600 CRS points on their Express entry profile. This enhances their chances of permanent residency in Canada. YEE allows employers to bypass the Labour Market Impact Assessment (LMIA) process, which can be time-consuming and costly. Employers can directly nominate foreign workers who meet their needs, thus filling critical positions more efficiently.

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={RequirementsRef}>
            Yukon Express Entry Eligibility Criteria
            </div>
            <div className="pages-paragraph">
            Candidates must qualify for one of the three federal economic immigration programs: Federal Skilled Worker, Federal Skilled Trades, or Canadian Experience Class.

             

              <ul className="my-3" >
                <li>
                Applicants must create an online profile in the IRCC's Express Entry system and obtain a Profile Number.
                <ul>
                    <li> <strong>Federal Skilled Worker (FSW) Requirements:</strong> Minimum high school diploma and at least one year of continuous full-time skilled work experience in a position classified under NOC Skill Level 0, A, or B. They must also demonstrate language proficiency in English or French at Canadian Language Benchmark (CLB) level 7.
</li>
                    <li><strong>Canadian Experience Class (CEC) Requirements:</strong> No minimum education requirement for CEC candidates. Minimum of one year of full-time skilled work experience in Canada within the last three years, also classified under NOC Skill Level 0, A, or B. Language proficiency is required at CLB 7 for NOC Skill Level 0 or A and CLB 5 for NOC Skill Level B.
</li>
<li><strong>Federal Skilled Trades (FST) Requirements:</strong> No minimum education level but must have at least two years of full-time work experience in a skilled trade. Either a job offer in a skilled trade in Canada or a certificate of qualification. Language proficiency requirements include CLB 5 for speaking and listening and CLB 4 for reading and writing.
</li>
                  </ul>
                </li>
                <li>
                A valid full-time permanent job offer from an eligible Yukon employer is essential. 

                </li>
                <li>
                Candidates must have sufficient funds to support themselves and any accompanying family members upon arrival in Canada.

                </li>
                <li>
                Applicants must show a genuine intention to live and work in Yukon.
                 
                </li>
              </ul>
            
              
            </div>
            To hire a foreign worker under the Yukon Nominee Program (YNP), Yukon employers must fulfil specific requirements. They must offer a full-time, indeterminate position with a wage that meets industry standards. The business must have been operational in Yukon for at least one year (or three years for non-profits) and possess valid licenses. 

            <div class="pages-header-2" ref={ApplicationRef}>
            Application Process for Yukon Express Entry
            </div>
            <div className="pages-paragraph">
            Applicants need to create an Express Entry profile to become eligible to apply for this program. The application process for Yukon Express Entry the following steps:

              <ul className="my-3">
                <li>
                The employer identifies a foreign worker for a position that cannot be filled by a Canadian.

                </li>
                <li>
                The employer offers a job after demonstrating recruitment efforts.

                </li>
                <li>
                The worker applies through the IRCC's Express Entry system.

                </li>
                <li>
                Upon meeting all criteria, the employer and worker submit the YEE application.

                </li>
                <li>If nominated, the worker receives an ITA from IRCC for permanent residency and a letter of support for a temporary work permit
</li>
              </ul>
              
            </div>
            This allows the applicant to apply for a work permit from IRCC and start working in Yukon while awaiting permanent residence processing. Keep in mind that the temporary work permit application is separate.

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

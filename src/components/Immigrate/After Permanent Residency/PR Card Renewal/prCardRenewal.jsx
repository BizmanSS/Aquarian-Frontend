import React, { useRef } from "react";

import TableOfContent from "../../../shared/TableOfContent.jsx";
import FaqBox from "../../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";


const faqItems = [
 
  {
    question: "Can I lose my PR status in Canada?",
    answer:
      ` Yes, you can lose your Canadian Permanent Resident status if:
1. An officer determines you are no longer a permanent resident after an inquiry.
2. You voluntarily renounce your PR status.
3. A removal order is issued against you and takes effect.
4. You become a Canadian citizen.
`,
  },
  {
    question: "How can you maintain your Canadian PR status?",
    answer:
      `To keep your PR status, you must meet the required residency obligations and follow all Canadian laws.
`
  },
  
];

export default function PrCardRenewal() {

  const aboutPRCRef = useRef(null);
  const eligPRCRef = useRef(null);
  const applyPRCRef = useRef(null);
  const faqPRCRef = useRef(null);

  const tableContentData = [
    {
      id: 1,
      content: "Permanent Resident Card Renewal",
      scrollTo: aboutPRCRef,
    },
    {
      id: 2,
      content: "Eligibility for PR Card Renewal",
      scrollTo: eligPRCRef,
    },
    {
      id: 3,
      content: "How to Apply for PR Card Renewal?",
      scrollTo: applyPRCRef,
    },
    {
      id: 4,
      content: "FAQs",
      scrollTo: faqPRCRef,
    },
    ,
    
  ];

  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="I"
          h1="After Permanent Residency"
          h2="Permanent Resident Card Renewal"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}After Permanent Residency
              {" > "}Permanent Resident Card Renewal
            </div>
            <div class="pages-header" ref={aboutPRCRef}>
            Permanent Resident Card Renewal
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Canadian PR Card is an important document for immigrants with permanent residency in the country. It is an important travel document that allows you to travel in and out of the country and maintain your status as a permanent resident of the country. The card has a validity of five years. If your PR card is due to expire in 9 months or has expired, you need to apply to renew it to continue using it effectively.
            </div>

            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligPRCRef}>
            Eligibility for PR Card Renewal
            </div>
            <div className="pages-paragraph">
            To be eligible for PR card renewal, you must:
              <ul className='mt-3 mb-3'>
                <li>
                Have valid permanent resident status.
                </li>
                <li>
                Meet the residency obligation: spend at least 730 days in Canada within the last five years.
                </li>
               
              </ul>
              If you need to travel outside Canada while your PR card renewal is being processed, you need to have a valid Permanent Resident Travel Document. With the help of PRTD, you can return to Canada and complete your renewal.
          
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={applyPRCRef}>
            How to Apply for PR Card Renewal?
            </div>

            <div className="pages-paragraph">
            To renew your PR card, follow these simple steps:
              <br></br>

              <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
            
            <li>
            Make sure you have all the necessary documents, including your current PR card and proof of residency.
            </li>

            <li>
            Fill out the application form carefully, ensuring all information is accurate. This will help avoid delays in processing.
             
            </li>
            <li>
            Send your completed form and supporting documents to the address provided by Immigration, Refugees, and Citizenship Canada (IRCC).
             
            </li>
            <li>
            Make sure to pay the processing fee as specified. The amount will be listed in the application instructions.
             
            </li>
            <li>
            Processing times can vary, so check the IRCC website for the latest updates. Be patient while your application is reviewed.
            </li>
            <li>
            If everything is in order and your status meets the requirements, you’ll receive your new PR card.
            </li>
          </ol>
             
              <div className="pages-paragraph">
              By following these steps, you’ll be well on your way to renewing your PR card with ease. In some cases, you might need urgent processing if you are traveling within the next three months due to a job opportunity, serious illness, etc. Apply for renewal well before your PR card expires to avoid complications.
              </div>
            </div>

          </div>
          <div ref={faqPRCRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

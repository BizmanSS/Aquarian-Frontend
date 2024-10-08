import React, { useRef } from "react";
import TableOfContent from "../../../shared/TableOfContent.jsx";
import FaqBox from "../../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "When do you need a PRTD?",
    answer:
      ` You may need a PRTD if:
1. You are a permanent resident outside Canada and your PR card has expired.
2. You are outside Canada and do not have a valid PR card.
3. You are unable to renew your PR card while abroad.
`,
  },
  {
    question: " What if I don’t meet the residency obligations?",
    answer:
      "If you have not met the residency requirement, you can provide a detailed explanation and any relevant supporting documents to justify your absence from Canada.",
  },
  {
    question: "What should I do if my PRTD is lost or stolen? ",
    answer:
      " You should contact the nearest Canadian embassy or consulate immediately to report the loss or theft and request a replacement.",
  }
];

export default function PR() {
  const aboutRef = useRef(null);
  const eligibilityRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      id: 1,
      content: "What is a Permanent Resident Travel Document (PRTD)?",
      scrollTo: aboutRef,
    },
    {
      id: 2,
      content: "Eligibility Criteria for PRTD",
      scrollTo: eligibilityRef,
    },
    {
      id: 3,
      content: "How to Apply for PRTD?",
      scrollTo: applyRef,
    },
    {
      id: 4,
      content: "FAQs",
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
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="I"
          h1="After Permanent Residency"
          h2="Permanent Resident Travel Document"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}After Permanent Residency
              {" > "}Permanent Resident Travel Document
            </div>
            <div class="pages-header">Permanent Resident Travel Document</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            All individuals need a valid travel document to enter Canada. For people with permanent resident status, the PR card serves this purpose. But if you are a permanent Canadian resident outside of Canada without a PR card, you need to apply for a Permanent Resident Travel Document to facilitate your return. The PRTD helps make the travel process smoother for individuals without a valid PR card.
            
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
            What is a Permanent Resident Travel Document (PRTD)?
            </div>
            <div className="pages-paragraph">
            A PRTD is an official document issued by IRCC. 
              <ul className='my-3'>
                <li>
                It allows permanent residents, who are outside Canada without a valid PR card, to re-enter the country. 
                </li>
                <li>
                PRTDs are generally valid for a single entry.
                </li>
                <li>
                They allow you to return to Canada and then apply for a new PR card.
                </li>
              </ul>
              
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Eligibility Criteria for PRTD 
            </div>

            <div className="pages-paragraph">
              The Federal Skilled Worker Program (FSWP) allows individuals to
              apply for permanent residency in Canada, provided they meet
              specific eligibility criteria like:
              <ul className='my-3'>
                <li>
                You must have a valid permanent resident status in Canada.
                </li>
                <li>
                You must have been physically present in Canada for at least 730 days within the last five years.
                </li>
                <li>
                Provide proof of your residency days.
                </li>
              </ul>
            </div>


            <div class="pages-header-2" ref={applyRef}>
            How to Apply for PRTD?
            </div>
            <div className="pages-paragraph">
            You can apply for Permanent Resident Travel Document by following the given steps:
            <ol style={{ listStyle: "decimal", listStylePosition: "inside" }} className='my-3'>
                <li>
                Collect documents like proof of your permanent residency, travel documents, and evidence supporting your residency days. 
                
                </li>

                <li>
                Fill out accurate details in the PRTD application form (IMM 5524). 
                 
                </li>

                <li>
                Send the application form and supporting documents to the visa office. 
                </li>

                <li>
                Pay the processing fee with your application. 
        
                </li>

                <li>
                Processing times for PRTD applications can vary. Check the IRCC website for the latest updates on processing times.
                </li>
              </ol>
              If your PRTD application is approved, you can use it to return back to Canada. Once you are back, you can then apply for a new PR card if needed. There can be long processing times for PRTD applications, so you need to apply in advance of your planned travel to avoid any complications.
            </div>
          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

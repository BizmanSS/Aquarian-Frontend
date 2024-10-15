import React, { useRef } from "react";

import TableOfContent from "../../../shared/TableOfContent.jsx";
import FaqBox from "../../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";


const faqItems = [
  {
    question: " How long does it take to receive a PR card after landing in Canada?",
    answer:
      "After landing as a new permanent resident, it typically takes 4-6 weeks to receive your first PR card by mail.",
  },
  {
    question:
      " What happens if my PR card is lost while I’m abroad?",
    answer:
      "If your PR card is lost or stolen outside Canada, you’ll need to apply for a PR Travel Document (PRTD) at a Canadian visa office to return.",
  },
  {
    question: "How do you renew your Canadian PR Card?",
    answer:
      `If your PR card is expiring or has already expired, you need to renew it to continue traveling outside Canada. You should submit your renewal application at least six months before your card’s expiry date. Some important documents for renewal are:
1. Renewal Form (IMM 5444).
2. Photos as per IRCC guidelines.
3. Proof of Residency (Income tax returns, lease agreements, or utility bills.)
4. A fee of CAD 50.
`,
  },
  {
    question: "Can I stay in Canada with an expired PR card?",
    answer:
      " You can remain in Canada with an expired PR card, as it does not affect your permanent resident status. However, you won’t be able to travel outside the country and return unless you renew it.",
  },
  {
    question: "How can I maintain my PR status in Canada?",
    answer:
      `Simply holding a PR card doesn’t mean your permanent residency is secure. To maintain your status, you must meet certain obligations:
1. You must live in Canada for at least 730 days (2 years) within every five years. These days don’t have to be consecutive.
2. You must comply with Canadian laws, including not committing serious crimes that could lead to losing your status.

If you fail to meet these requirements, you could be at risk of losing your permanent resident status.
`
  },
  ,
  {
    question: "Can I directly apply for permanent residency under the FSWP?",
    answer:
      "No, you cannot apply directly for permanent residency under the FSWP. The FSWP is managed by the Express Entry system, which selects candidates through regular draws based on their Comprehensive Ranking System (CRS) score. Only candidates who receive an Invitation to Apply (ITA) from the Express Entry pool can submit an application for permanent residency.",
  },
];

export default function PrCards() {

  const aboutPRCRef = useRef(null);
  const applyWhenPRCRef = useRef(null);
  const applyPRCRef = useRef(null);
  const processPRCRef = useRef(null);
  const factsPRCRef = useRef(null);
  const faqPRCRef = useRef(null);

  const tableContentData = [
    {
      id: 1,
      content: "What is a Permanent Resident Card?",
      scrollTo: aboutPRCRef,
    },
    {
      id: 2,
      content: "When Can I apply for a PR Card?",
      scrollTo: applyWhenPRCRef,
    },
    {
      id: 3,
      content: "How to Apply for a Canadian Permanent Resident Card?",
      scrollTo: applyPRCRef,
    },
    {
      id: 4,
      content: "Urgent Processing of PR Card",
      scrollTo: processPRCRef,
    },
    ,
    {
      id: 5,
      content: "Important Facts",
      scrollTo: factsPRCRef,
    },
    {
      id: 6,
      content: "PR Card FAQs",
      scrollTo: faqPRCRef,
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
          h2="Permanent Resident Cards"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}After Permanent Residency
              {" > "}Permanent Resident Cards
            </div>
            <div class="pages-header">
            Permanent Resident Cards
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Permanent Resident Card in Canada is an identification document for immigrants who are granted Canadian permanent residency. It acts like a proof of your permanent resident status. You can use it to travel in and out of Canada. Maintaining your residency obligations is important to retain your PR status for an uninterrupted stay in Canada.
            </div>

            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutPRCRef}>
            What is a Permanent Resident Card?
            </div>
            <div className="pages-paragraph">
            A <strong>Permanent Resident (PR) Card</strong> is issued to individuals who have been granted permanent residency in Canada. 
              <ul>
                <li>
                Once a person has been approved for Canadian permanent residence, they become eligible to receive a permanent resident card (PR card). 
                </li>
                <li>
                The PR card is usually valid for five years, but in very rare cases may only be valid for one year.

                </li>
                <li>
                It serves as proof of their status and allows them to travel in and out of the country. 
                </li>
                <li>
                If a permanent resident leaves Canada, they must show their PR card upon re-entry. 
                </li>
                <li>
                Without it, they may be denied boarding on a plane, train, bus, or boat back to Canada.
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

            <div class="pages-header-2" ref={applyWhenPRCRef}>
            When Can I apply for a PR Card?
            </div>

            <div className="pages-paragraph">
            To be eligible for a Canadian PR card, you must:
              <br></br>

              <ul>
                <li>
                Hold permanent resident status in Canada.
                </li>
                <li>
                Be physically present in Canada.

                </li>
                <li>
                Fulfill your residency obligations, which means living in Canada for at least 730 days within the last five years.
                </li>
              </ul>
             
              <div className="pages-paragraph">
              If you meet these criteria, you can apply for, renew, or replace your PR card.
              </div>
            </div>

            <div class="pages-header-2" ref={applyPRCRef}>
            How to Apply for a Canadian Permanent Resident Card?
            </div>
            <div class="pages-paragraph">
            As a new permanent resident, you don't need to apply for a PR card. Immigration, Refugees, and Citizenship Canada (IRCC) will automatically issue one and mail it to your address when you immigrate to Canada.
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                You must apply for a PR card if:
              </p>
              <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
            
              <li>
              You changed your name legally.
              </li>

              <li>
              Your card has been destroyed, lost, or stolen.
               
              </li>
              <li>
              Your card will expire in less than 9 months or has already expired.
               
              </li>
              <li>
              You did not receive your PR card within 180 days of your immigration.
               
              </li>
            </ol>

              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
              PR card applications must be submitted in hard copy to one of IRCC’s specified Case Processing Centres for PR cards.
              </p>
            </div>
           
            <div class="pages-header-2" ref={processPRCRef}>
            Urgent Processing of PR Card
            </div>
            <div className="pages-paragraph">
            In certain situations, it may be possible to expedite the processing of a PR card. To qualify for urgent processing, you must be traveling within the next three months due to one of the following reasons:
              <ul className='mt-3'>
                <li>
                A job opportunity
                </li>
                <li>
                Your own serious illness
                </li>
                <li>
                The death of a family member
                </li>
                <li>
                Work related to your current job
                </li>
                <li>
                The serious illness of a family member
                </li>
               
              </ul>
             <div className='mt-3'><strong>Note: </strong> Even if you are eligible for urgent processing, the Canadian government cannot guarantee that your application will be processed urgently or that you will receive your PR card on time. </div>
            </div>

            <div class="pages-header-2" ref={factsPRCRef}>
            Important Facts
            </div>
            <div className="pages-paragraph">
          
              <ul className='mb-3'>
                <li>
                Your permanent resident status does not expire when your PR card expires. You can only lose your PR status through an official process. 
                </li>
                <li>
                If you are a permanent resident without a valid PR card and are currently outside of Canada, you can apply for a Permanent Resident Travel Document (PRTD). The PRTD will facilitate your travel back to Canada, where you can then apply for a PR card renewal or replacement.
                </li>
                <li>
                The Canadian Permanent Resident Card was formerly known as the Maple Leaf Card. This name was derived from the card’s design, which included a printed maple leaf, Canada’s national symbol.

                </li>
              </ul>
              If your application exceeds the normal processing time, check the IRCC website for updates. You can also submit an inquiry using your application number.
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

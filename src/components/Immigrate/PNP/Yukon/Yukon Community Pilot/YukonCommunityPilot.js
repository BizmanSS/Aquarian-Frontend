import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      "Can I apply for the Yukon Community Pilot if I am already in Canada on a visitor visa?",
    answer:
      "Yes, individuals in Canada on a visitor visa can apply for the YCP, provided they meet all eligibility criteria and have the necessary job offers and letters of support.",
  },
  {
    question: "Is there a minimum wage requirement for the job offers under the YCP?",
    answer:
      "Yes, the wages for the offered positions must meet or exceed the minimum wage standards set by the Government of Yukon.",
  },
 
];

export default function YukonCommunityPilot
() {
  const faqRef = useRef(null);
  const EligibilityRef = useRef(null);
const ApplicationRef = useRef(null);
const ParticipatingRef = useRef(null);
  const tableContentData = [
    {
      title: "Eligibility Criteria for Yukon Community Pilot",
      scrollTo: EligibilityRef,
    },
    {
      title:"Participating Communities",
      scrollTo: ParticipatingRef,
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
          h3="Yukon Community Pilot"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Yukon
              {" > "}Yukon Community Pilot


            </div>
            <div class="pages-header">Yukon Community Pilot
</div>
            <div class="pages-paragraph space-fix intro-size-fix">
            The Yukon Community Pilot (YCP) is an innovative immigration initiative to address the specific economic and labor market needs of the Yukon Territory in Canada. Launched in January 2020, the program aims to attract skilled workers to participate in the economic development of smaller communities within Yukon.
            <br></br>
<div>The YCP is a stream of the Yukon Nominee Program (YNP) that allows foreign nationals to obtain a two-year location-restricted open work permit. This permit enables individuals to work for up to three different employers within participating Yukon communities, facilitating the accumulation of at least 1,560 hours of work annually, equivalent to full-time employment.
</div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility Criteria for Yukon Community Pilot
            </div>
            <div className="pages-paragraph">
            To qualify for the YCP, applicants must meet the following requirements:

             

              <ul className="my-3" >
                <li>
                Secure two or three eligible job offers from up to three employers within a participating community. The combined positions must total at least 30 hours of work per week and be non-seasonal.
               
                </li>
                <li>
                Obtain a signed letter of support from the Government of Yukon, confirming the need for the applicant's employment in the community.

                </li>
                <li>
                Fulfil standard work permit criteria, including proof of sufficient funds to support oneself and any dependents, a valid passport, and a clear criminal record.

                </li>
            
              </ul>
            
              
            </div>
            The applicants should also have a genuine intention to reside in the participating community and contribute to its economic development.

            <div class="pages-header-2" ref={ParticipatingRef}>
            Participating Communities
            </div>
            <div className="pages-paragraph">
            The program focuses on the following Yukon communities:

             

              <ul className="my-3" >
                <li>
                Whitehorse
               
                </li>
                <li>
                Watson Lake

                </li>
                <li>
                Dawson City

                </li>
                <li>Haines Junction
</li>
                <li>Carmacks
</li>
                <li>Carcross
</li>

            
              </ul>
            
              
            </div>
            These communities are selected based on their specific economic and labor market needs.


            <div class="pages-header-2" ref={ApplicationRef}>
            Application Process for Yukon Community Pilot
            </div>
            <div className="pages-paragraph">
            The application process involves several steps:

              <ul className="my-3">
                <li>
                Obtain two or three eligible job offers from employers in a participating community.

                </li>
                <li>
                Request a signed letter of support from the Government of Yukon.

                </li>
                <li>
                Gather necessary documents, including job offer details, educational certificates, language proficiency test results, and proof of funds.

                </li>
                <li>
                Submit an online application for a two-year location-restricted open work permit to Immigration, Refugees and Citizenship Canada (IRCC).

                </li>
          
              </ul>
              After submission, applications are processed by IRCC, with standard processing times varying based on individual circumstances.

            </div>
            The location-restricted open work permit allows employment with multiple employers within the designated community, providing flexibility and diverse work experience. By attracting skilled workers, the YCP supports the economic growth and sustainability of smaller Yukon communities.

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

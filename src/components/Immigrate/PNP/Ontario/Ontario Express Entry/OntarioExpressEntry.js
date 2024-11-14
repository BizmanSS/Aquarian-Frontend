import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What is a Notification of Interest (NOI)?",
    answer:
      "An NOI indicates that Ontario is interested in your profile. You’ll receive this through your IRCC account, inviting you to apply to the Ontario Immigrant Nominee Program (OINP). However, an NOI does not guarantee nomination.",
  
  },
  {
    question:
      "How do I apply if I receive an NOI?",
    answer:
      " Submit an online application to the OINP within 45 days, showing you meet all stream requirements listed in your Express Entry profile. Misleading or incorrect information can result in denial and penalties.",
    
  },
  {
    question:
      " What happens if I receive an ITA from IRCC while my OINP application is under review?",
    answer:
      "You must choose between the IRCC ITA and OINP nominations. If you accept the ITA, Ontario cannot nominate you.",
  },
  
];

export default function OntarioExpressEntry() {
  const aboutRef = useRef(null);

  const eligibilityRef = useRef(null);
  const benefitRef = useRef(null);
  const faqRef = useRef(null);
  const requireRef = useRef(null);

  const tableContentData = [
    {
      title: "Ontario Human Capital Priorities Stream",
      scrollTo: aboutRef,
    },
    {
      title: "Ontario French-Speaking Skilled Worker Stream",
      scrollTo: benefitRef,
    },
    {
      title: "Ontario Skilled Trades Stream",
      scrollTo: requireRef,
    },
    {
      title: "Application for Ontario Express Entry",
      scrollTo: eligibilityRef,
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
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="Ontario"
          h3="Ontario Express Entry"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Provincial Nominee Program
              {" > "}Ontario
              {" > "}Ontario Express Entry
            </div>
            <div class="pages-header">Ontario Express Entry</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Ontario Express Entry system includes 3 immigration streams
              for permanent residency for skilled workers who meet Ontario’s
              labor needs. It is a part of the Ontario Immigrant Nominee Program
              (OINP). Ontario’s Express Entry streams target skilled workers,
              French-speaking skilled workers, and trades professionals through
              Canada’s federal Express Entry system. To qualify for a
              Notification of Interest (NOI) from the Ontario Immigrant Nominee
              Program (OINP), candidates must have a valid Express Entry
              profile.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              Ontario Human Capital Priorities Stream
            </div>
            <div className="pages-paragraph">
              The Human Capital Priorities Stream targets skilled professionals
              with a background in high-demand occupations in Ontario. This
              stream enables candidates in the Express Entry pool, particularly
              those meeting the requirements of the Federal Skilled Worker
              Program (FSWP) or the Canadian Experience Class (CEC), to gain a
              provincial nomination.
              <div className="my-2 font-bold">Eligibility Criteria</div>
              <div>
                Candidates must have a Canadian bachelor's degree, master's, or
                PhD or an equivalent foreign credential. Other eligibility
                criteria include:
              </div>
              <ul className="my-3">
                <li>
                  At least one year of continuous, full-time work experience in
                  a skilled occupation that aligns with FSWP or CEC
                  requirements.
                </li>
                <li>
                  Canadian Language Benchmark (CLB) level 7 or higher in either
                  English or French.
                </li>
              </ul>
              This stream frequently issues Notifications of Interest (NOIs) to
              Express Entry candidates who have the skills and experience that
              Ontario needs. Tech Draws are also conducted within this stream,
              inviting candidates in tech fields such as software engineering
              and computer programming.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={benefitRef}>
              Ontario French-Speaking Skilled Worker Stream
            </div>
            <div className="pages-paragraph">
              The French-speaking Skilled Worker Stream is for bilingual
              French-speaking candidates who wish to settle in Ontario. This
              stream emphasizes Ontario’s goal to attract bilingual talent who
              can contribute to the province's cultural diversity and meet its
              labor market needs.
              <div className="my-2 font-bold">Eligibility Criteria</div>
              <ul className="my-2 ml-3">
                <li>
                  Canadian degree (bachelor's, master's, or PhD) or an
                  equivalent foreign credential.
                </li>

                <li>
                  One year of continuous, full-time employment in a skilled
                  position under either the FSWP or CEC criteria.
                </li>

                <li>
                  CLB level 7 in French and at least CLB level 6 in English.
                </li>

                <li>
                  Candidates must show intent to reside in Ontario and have
                  settlement funds.
                </li>
              </ul>
              The French-speaking skilled Worker Stream provides a unique
              advantage for French-speaking Express Entry candidates, enhancing
              Ontario’s bilingual workforce.
            </div>

            <div class="pages-header-2" ref={requireRef}>
              Ontario Skilled Trades Stream
            </div>
            <div class="pages-paragraph">
              The Ontario Skilled Trades Stream focuses on skilled tradespeople
              residing in Ontario who work in high-demand sectors. This stream
              is designed to meet the needs of the province’s trade industry,
              making it an attractive option for candidates with relevant
              experience in trade occupations.
              <div className="my-2 font-bold">Eligibility Criteria</div>
              <ul className="my-2 ml-3">
                <li>A job offer is not required for this stream.</li>

                <li>
                A minimum of one year of full-time work experience in Ontario in an eligible skilled trade within National Occupational Classification (NOC) groups 73, 82, 83, and 93.
                </li>

                <li>
                Minimum CLB level 5 in English or French.
                </li>
              </ul>
              This stream allows Ontario to retain experienced tradespeople essential to its economy, especially in construction, maintenance, and manufacturing industries.
             
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Application for Ontario Express Entry
            </div>
            <div className="pages-paragraph">
            To apply for Ontario’s Express Entry streams, begin by creating a profile in the IRCC's Express Entry system, where you’ll complete a questionnaire to determine which programs you qualify for. Key steps include:
              <ul className="my-2 ml-3">
                <li>
                Complete a language test
                </li>

                <li>
                Obtain an Educational Credential Assessment (if educated outside Canada)
                </li>
                <li>
                Identify your NOC code based on work experience
                </li>
              </ul>
              When completing your Express Entry profile, select "Ontario" or "All Provinces and Territories" to express interest in Ontario immigration. Be sure to provide accurate information, as errors may lead to application rejections or ineligibility.

              <div className="mt-3">
              To qualify for Ontario’s streams, you must meet the Federal Skilled Worker Program or <a href="https://www.iaquarian.com/immigrate/express-entry/canadian-experience-class" className="text-blue-700 font-bold" >Canadian Experience Class</a> requirements, indicating which program you are applying under in the OINP application. An Express Entry profile alone does not guarantee an invitation to apply through the OINP.
              </div>
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

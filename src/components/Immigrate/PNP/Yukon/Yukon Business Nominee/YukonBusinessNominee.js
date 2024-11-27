import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      "What types of businesses are eligible under the YBNP?",
    answer:
      "Eligible businesses must be in strategic sectors such as information technology, manufacturing, value-added processing, forestry, tourism, energy, mining, agriculture, cultural industries, or film and video production.",
  },
  {
    question: "Can I apply for the YBNP without a job offer from a Yukon employer?",
    answer:
      "Yes, the YBNP is designed for individuals intending to establish their own business in Yukon, not requiring a job offer from an employer.",
  },
  {
    question: "What is the minimum investment required to qualify for the YBNP?",
    answer:
      "Applicants must intend to invest at least CAD 300,000 in their proposed business within the first two years.",
  },
];

export default function YukonBusinessNomineeProgram

() {
  const faqRef = useRef(null);
  const RequirementsRef = useRef(null);
const ApplicationRef = useRef(null);
  const tableContentData = [
    {
      title: "Eligibility Criteria for Yukon Business Nominee Program",
      scrollTo: RequirementsRef,
    },
    {
      title: "Application Process for YBNP",
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
          h3="Yukon Business Nominee"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Yukon
              {" > "}Yukon Business Nominee Program


            </div>
            <div class="pages-header">Yukon Business Nominee Program
</div>
            <div class="pages-paragraph space-fix intro-size-fix">
            The Yukon Business Nominee Program (YBNP) is an immigration initiative to attract foreign entrepreneurs and business owners to the Yukon Territory in Canada. This program aims to enhance the local economy by encouraging investment and business development. The YBNP allows eligible foreign nationals to establish, purchase, or partner in a business within Yukon. Successful applicants receive a nomination from the Government of Yukon, facilitating their application for permanent residency in Canada. The primary goal of the YBNP is to encourage skilled international entrepreneurs to invest in Yukon’s economy. With a relatively small population of approximately 40,000 residents, Yukon actively seeks new business ventures that can contribute to economic growth and community development

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={RequirementsRef}>
            Eligibility Criteria for Yukon Business Nominee Program
            </div>
            <div className="pages-paragraph">
            There are different eligibility criteria for both the applicant as well as the business for Yukon Business Nominee Program.

             
<div>Personal Requirements:</div>
              <ul className="my-3" >
                <li>
                Applicants must be at least 21 years old.
                
                    <li>A minimum of 3 years of business management/ entrepreneurial experience or 5 years of related work experience is required.

</li>
<li>A Canadian high school diploma or its equivalent.
</li>
<li>A minimum net worth of CAD 500,000, with at least CAD 300,000 in liquid assets.
</li>
                    <li>While not mandatory at the application stage, a minimum Canadian Language Benchmark (CLB) Level 4 is required upon nomination.

</li>
<li>Candidates also must have at least 65 points scored in the Yukon Business Nominee points assessment grid.

</li>
                 
                </li>
                 Yukon.
                 
              </ul>
            
              
            </div>
            The business must be in a strategic sector such as information technology, manufacturing, value-added processing, forestry, tourism, energy, mining, agriculture, cultural industries, or film and video production.

            <div class="pages-header-2" ref={ApplicationRef}>
            Application Process for YBNP
            </div>
            <div className="pages-paragraph">
            YBNP stream operates through an Expression of Interest or EOI system.

              <ul className="my-3">
                <li>
                Prospective applicants should conduct a self-assessment to ensure they meet the eligibility criteria.

                </li>
                <li>
                Complete and submit the YBNP application form, including all required documentation and a business proposal.

                </li>
                <li>
                The Government of Yukon evaluates applications based on factors such as business experience, financial capacity, and the proposed business's potential economic impact.

                </li>
                <li>
                Successful applicants receive a nomination, enabling them to apply for permanent residency through Immigration, Refugees and Citizenship Canada (IRCC).

                </li>
                <li>Upon approval, applicants can obtain a two-year work permit to establish and operate their business in Yukon.

</li>
<li>After meeting the conditions of the work permit, applicants can apply for permanent residency.
</li>
              </ul>
              
            </div>
            The Yukon Business Nominee Program encourages investment and job creation in the Yukon economy. The stream promotes cultural diversity and community engagement through new business ventures.

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

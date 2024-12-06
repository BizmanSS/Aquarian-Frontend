import React, { useRef } from "react";

import NestedTableOfContent from "./../../shared/NestedTableOfContent.jsx";
import FaqBox from "./../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What is the difference between an unrestricted and a restricted open work permit?",
    answer:
      "An unrestricted open work permit allows holders to work for any employer, in any job, and at any location without limitations. In contrast, a restricted open work permit permits employment with any employer but specifies limitations on the type of job or location based on conditions set by Immigration, Refugees and Citizenship Canada (IRCC).",
 
  },
  {
    question:
      "Can family members of open work permit holders also work in Canada?",
    answer:
      "Yes, family members of open work permit holders may be eligible for their own work or study permits. This provision supports family unity while allowing family members to contribute to the Canadian labor market.",
   
  },
  {
    question:
      "Are there any specific conditions that must be met when applying for an open work permit?",
    answer:
      "Yes, applicants must meet specific eligibility criteria depending on their category. For example, international students must have graduated from a designated learning institution to qualify for a Post-Graduation Work Permit (PGWP), while spouses of skilled workers must ensure their partner's work permit is valid for at least six months.",
  },
 
];

export default function OpenWorkPermit() {
  const aboutRef = useRef(null);
  const eligibilityRef = useRef(null);
  const benefitRef = useRef(null);
  const faqRef = useRef(null);


  const tableContentData = [
    {
      title: "What is an Open Work Permit?",
      scrollTo: aboutRef,
    },
    {
      title: "Benefits of the Canada Open Work Permit",
      scrollTo: benefitRef,
    },
    {
      title: "Eligibility Criteria for Canada Open Work Permit",
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
          type="W"
          h1="Open Work Permits"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Work
              {" > "}Canada Open Work Permit
            </div>
            <div class="pages-header">Canada Open Work Permit</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Canada Open Work Permit is a flexible immigration option that allows foreign nationals to work for any employer in Canada without the need for a specific job offer. This permit is part of Canada’s broader immigration strategy to attract skilled workers, enhance labor mobility, and support family unity. An open work permit is not tied to any single location or employer. These permits are typically granted through several immigration programs, including:
           <ul className="mt-3">
            <li>
            Post-Graduation Work Permits (PGWP)
            </li>
            <li>
            International Experience Canada (IEC)
            </li>
            <li>
            Inland Spousal or Common-Law Sponsorship
            </li>
            <li>
            Bridging Open Work Permits (BOWP)
            </li>
           </ul>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
            What is an Open Work Permit?
            </div>
            <div className="pages-paragraph">
            An Open Work Permit enables foreign nationals to work in Canada for any employer, without being tied to a specific job or requiring a Labour Market Impact Assessment (LMIA). 

              <ul className="my-3">
                <li>
                Unlike closed work permits, which restrict employment to a particular employer, open work permits provide greater flexibility.
                </li>
                <li>
                They provide flexibility in terms of employment opportunities and locations within Canada.
                </li>
                <li>
                The applicants can work with multiple employers in different locations all throughout Canada.
                </li>
                <li>
                Some open work permits may come with specific requirements or restrictions that foreign nationals must adhere to.
                </li>
              </ul>

            </div>

            <div className="note-cec">
              <div >
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={benefitRef}>
            Benefits of the Canada Open Work Permit
            </div>
            <div className="pages-paragraph">
            The advantages of obtaining an open work permit include:

              <ul className="my-2 ml-3">
                <li>
                Holders can work for any employer in Canada.

                </li>

                <li>
                Applicants do not need an LMIA, simplifying the application process.

                </li>

                <li>
                Family members can accompany the permit holder and may also be eligible for their own work or study permits.

                </li>

                <li>
                Working in Canada can facilitate applications for permanent residency through various immigration programs.
                </li>
              </ul>
              As foreign nationals gain Canadian work experience, they should keep track of their eligibility for various pathways to permanent residence. These pathways include:

              <ul className="my-2 ml-3">
                <li>
                Express Entry
                </li>

                <li>
                Federal Skilled Worker (FSW)
                </li>

                <li>
                Federal Skilled Trades (FST)

                </li>

                <li>
                Canadian Experience Class (CEC)
                </li>
                <li>
                Provincial Nominee Programs (PNPs)
                </li>
                <li>
                Quebec Immigration
                </li>
              </ul>

              

            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Eligibility Criteria for Canada Open Work Permit
            </div>
            <div class="pages-paragraph">
            To qualify for an open work permit, applicants must fall into one of several categories defined by Immigration, Refugees and Citizenship Canada (IRCC). These categories include:
              <ul className="my-2 ml-3">
                <li>
                International students who have completed their studies at a DLI and are eligible for a Post-Graduation Work Permit (PGWP).
                </li>

                <li>
                Spouses or common-law partners of skilled workers or international students.
                </li>

                <li>
                Individuals holding temporary resident permits.

                </li>
                <li>
                Those who have applied for permanent residency and are awaiting a decision.
                </li>
                <li>
                Individuals claiming refugee status or recognized as protected persons.

                </li>
                <li>
                Participants in special programs such as International Experience Canada (IEC).

                </li>
              </ul>
              Open work permits can be categorized as:
              <ul className="my-2 ml-3">
                <li>
                  <strong>Unrestricted Work Permits: </strong>Allow complete freedom to change employers, occupations, and locations.
                
                </li>

                <li>
                <strong>Restricted Work Permits: </strong>Limit changes to employers only, with restrictions on occupation or location depending on the conditions set by IRCC.
                </li>

               
              </ul>

              The Canada Open Work Permit represents a significant opportunity for foreign nationals seeking employment in Canada. With its flexibility and inclusivity, it not only supports individual career aspirations but also fosters family unity and contributes to Canada's diverse labor market. 
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

import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "Can I leave Canada while on a Bridging Open Work Permit?",
    answer:
      "Yes, but you must ensure you have a valid travel document (e.g., eTA or temporary resident visa) to return to Canada.",

  },
  {
    question:
      " What happens if my Bridging Open Work Permit application is denied?",
    answer:
      "If your application is denied, you must cease working immediately and may need to apply to restore your status in Canada.",

  },
  {
    question:
      "What should I do if my current work permit expires before my BOWP is approved?",
    answer:
      " If you apply before your current permit expires, you can continue working under implied status until a decision on your BOWP is made.",
  },

];

export default function BridgingOpenWorkPermit() {
  const purposeRef = useRef(null);
  const eligibilityRef = useRef(null);
  const applicationRef = useRef(null);
  const importantRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Purpose of BOWP",
      scrollTo: purposeRef,
    },
    {
      title: "Eligibility Criteria for Bridging Open Work Permit",
      scrollTo: eligibilityRef,
    },
    {
      title: "Application Process for Bridging Open Work Permit",
      scrollTo: applicationRef,
    },
    {
      title: "Important Considerations",
      scrollTo: importantRef,
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
          h2="Bridging Open Work Permit (BOWP)"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Work
              {" > "}Canada Open Work Permit
              {" > "}Bridging Open Work Permit (BOWP) in Canada
            </div>
            <div class="pages-header">Bridging Open Work Permit (BOWP)</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Bridging Open Work Permit (BOWP) is a temporary work permit designed for foreign nationals in Canada who are awaiting a decision on their permanent residency application. It allows these individuals to continue working legally while ensuring that they do not lose their status in Canada during the processing of their PR application.
          
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={purposeRef}>
            Purpose of BOWP
            </div>
            <div className="pages-paragraph">
            The BOWP serves as a crucial bridge between the expiration of a current work permit and the final decision on a permanent residency application. This permit is beneficial for individuals who have applied for PR under various immigration programs, allowing them to maintain employment without being tied to a specific job or employer, unlike closed work permits.

              <ul className="my-3">
                <li>
                Holders can work for any employer across Canada.
                </li>
                <li>
                It enables applicants to switch jobs or explore different industries while waiting for their PR status.

                </li>
                <li>
                Typically issued for up to 24 months, with the possibility of extension if the PR application is still under review.
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

            <div className="pages-header-2" ref={eligibilityRef}>
            Eligibility Criteria for Bridging Open Work Permit
            </div>
            <div className="pages-paragraph">
            To qualify for a BOWP, applicants must meet several conditions:
              <ul className="my-2 ml-3">
                <li>
                The applicant must be physically present in Canada with valid temporary resident status.
                </li>

                <li>
                They must hold a valid work permit or be eligible to restore their status.

                </li>

                <li>
                The applicant must have submitted a PR application under one of the following categories:

                <ul>
                  <li>Federal Skilled Worker Program (FSWP)</li>
                  <li>Canadian Experience Class (CEC)</li>
                  <li>Federal Skilled Trades Program (FSTP)</li>
                  <li>Provincial Nominee Program (PNP)
                  </li>
                  <li>Quebec Skilled Worker Program (QSWP)</li>
                  <li>Agri-Food Pilot Program</li>
                </ul>

                </li>

              </ul>
              The application must have passed the completeness check or received a positive eligibility assessment from Immigration, Refugees and Citizenship Canada (IRCC).

            </div>

            <div class="pages-header-2" ref={applicationRef}>
            Application Process for Bridging Open Work Permit
            </div>
            <div class="pages-paragraph">
            The application process for obtaining a BOWP involves several steps:
              <ul className="my-2 ml-3">
                <li>
                Ensure that you meet all eligibility criteria.
                </li>

                <li>
                Gather documents like proof of your current work permit, confirmation of your PR application submission, and identification documents.
                </li>

                <li>
                Select "Open Work Permit" as the type of work permit when filling out the form.
                </li>
                <li>
                The total fee for applying is CAD $255, which includes processing and open work permit holder fees.

                </li>
                <li>
                Applications can typically be submitted online through the IRCC secure account, although paper applications are accepted in certain situations.
                </li>
             
              </ul>
              If required, schedule and attend an appointment to provide biometrics.
            </div>

            <div class="pages-header-2" ref={importantRef}>
            Important Considerations
            </div>
            <div class="pages-paragraph">
          
              <ul className="my-2 ml-3">
                <li>
                While BOWP holders generally can work anywhere in Canada, those applying through PNP may have employment location restrictions based on their nomination province.
                </li>

                <li>
                BOWPs are usually valid for 24 months but cannot extend beyond the validity of the applicant's passport.
                </li>

                <li>
                Spouses and dependents may apply for their own open work permits if the primary applicant is employed in a skilled occupation.
                </li>
              
             
              </ul>
              BOWP applications are processed within 3 to 4 months. It is advisable to apply well before your current work permit expires to maintain legal status in Canada.
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

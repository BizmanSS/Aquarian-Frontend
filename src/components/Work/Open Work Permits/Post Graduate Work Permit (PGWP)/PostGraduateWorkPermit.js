import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "Can I apply for a PGWP if I studied part-time in my last term?",
    answer:
      "No, you must have maintained full-time status throughout your studies, except during your final term.",

  },
  {
    question:
      "Can I apply for a work permit after my PGWP expires?",
    answer:
      "Yes, you can apply for another work permit, such as an LMIA-based or LMIA-exempt permit, if eligible. Alternatively, consider applying for permanent residency through programs like:",
    listAnswer: [
      "Canadian Experience Class",
      "Federal Skilled Worker Program",
      "Provincial Nominee Programs",
      "Quebec Immigration Options",
    ],

  },
  {
    question:
      "Can I work after graduation before my PGWP is approved?",
    answer:
      "Yes, international graduates can work in Canada if they apply for a PGWP before their study permit expires. If the study permit has expired, you may restore your status within 90 days and apply for a PGWP.",
  },
  {
    question:
      "How many times can I apply for a PGWP?",
    answer:
      "You can only apply for a PGWP once. To maximize its validity (up to 3 years), consider applying after completing the longest eligible program of study.",
  },

];

export default function PostGraduateWorkPermit() {
  const whatRef = useRef(null);
  const keyRef = useRef(null);
  const eligibilityRef = useRef(null);
  const applicationRef = useRef(null);
  const postRef = useRef(null);
  const changesRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "What is PGWP?",
      scrollTo: whatRef,
    },
    {
      title: "Key Facts about PGWP",
      scrollTo: keyRef,
    },
    {
      title: "Eligibility Criteria for PGWP",
      scrollTo: eligibilityRef,
    },
    {
      title: "Application Process for PGWP",
      scrollTo: applicationRef,
    },
    {
      title: "Post-PGWP Options",
      scrollTo: postRef,
    },
    {
      title: "Changes in PGWP Requirements",
      scrollTo: changesRef,
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
          h2="Post Graduate Work Permit (PGWP)"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Work
              {" > "}Canada Open Work Permit
              {" > "}Post-Graduation Work Permit (PGWP) in Canada
            </div>
            <div class="pages-header">Post-Graduation Work Permit (PGWP) in Canada</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Post-Graduation Work Permit (PGWP) is a significant opportunity for international students who have completed their studies at designated learning institutions (DLIs) in Canada. This os issued to international students allowing them to work for any employer for as many hours as they wish. This allows graduates to gain valuable work experience in Canada, which can be important for those seeking permanent residency.

              <div className='mt-4'>
                Canada has announced significant updates to the Post-Graduation Work Permit program, in effect from November 1, 2024. The program will require college graduates to complete their studies in specific eligible fields (like STEM and healthcare) and have language proficiency (CLB 5 or 7, depending on the program). University graduates will remain exempt from these restrictions.
              </div>

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={whatRef}>
              What is PGWP?
            </div>
            <div className="pages-paragraph">
              The Post-Graduation Work Permit is an open work permit that allows graduates to work for any employer across Canada without requiring a job offer at the time of application. Its validity typically matches the length of the completed study program, up to a maximum of three years.

              <ul className="my-3">
                <li>
                  Programs must be at least 8 months in duration.
                </li>
                <li>
                  The permit duration depends on the length of the study program, the program level, and the passport expiry date—whichever comes first.

                </li>
                <li>
                  It provides graduates with valuable Canadian work experience.
                </li>

              </ul>

              This work experience can help graduates qualify for permanent residency programs, such as:

              <ul className="my-3">
                <li>
                  Canadian Experience Class (CEC)
                </li>
                <li>
                  Federal Skilled Worker (FSW)

                </li>
                <li>
                  Federal Skilled Trades (FST)
                </li>

                <li>
                  Provincial Nominee Programs (PNP)
                </li>

                <li>
                  Quebec Immigration Programs
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

            <div className="pages-header-2" ref={keyRef}>
              Key Facts about PGWP
            </div>
            <div className="pages-paragraph">

              <ul className="my-2 ml-3">
                <li>
                  PGWPs are issued for a duration between 8 months and 3 years, matching the length of the applicant's Canadian study program.
                </li>

                <li>
                  The permit will not exceed the length of the study program or three years, whichever is shorter.
                </li>

                <li>
                  Applicants need at least 50% of the program must involve in-person classes.

                </li>
                <li>
                  For part-time or accelerated studies, the PGWP will correspond to the program’s standard full-time duration.

                </li>
                <li>
                  For study permits applied for on or after November 1, 2024, graduates must meet updated language and field of study requirements to qualify.
                </li>

              </ul>

            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Eligibility Criteria for PGWP
            </div>
            <div class="pages-paragraph">
              To qualify for a PGWP, applicants must meet specific criteria:
              <ul className="my-2 ml-3">
                <li>
                  The applicant must have completed a program of study at a DLI that is at least eight months long.
                </li>

                <li>
                  Students must have maintained full-time status during their studies, except for their final academic term.
                </li>

                <li>
                  Applications must be submitted within 180 days of receiving written confirmation from the institution that all program requirements have been met.
                </li>
                <li>
                  Applicants must hold a valid study permit at the time of application if applying from within Canada.

                </li>


              </ul>
              The following programs qualify for a Post-Graduation Work Permit (PGWP):

              <ul className="my-2 ml-3">
                <li>
                  Public post-secondary institutions (college, university, trade/technical schools, or CEGEP in Quebec).
                </li>

                <li>
                  Private post-secondary schools in Quebec following the same rules as public institutions.
                </li>

                <li>
                  Quebec private secondary/post-secondary schools offering qualifying programs of 900+ hours leading to a DEP or ASP.
                </li>
                <li>
                  Canadian private schools authorized to award degrees under provincial law (only for degree-granting programs).
                </li>


              </ul>

              <div style={{
                fontSize: "22px",
                fontWeight: 'bold',
                marginTop: '40px',
                marginBottom: '20px'
              }}>
                Ineligibility Factors
              </div>
              Certain conditions can render an applicant ineligible for a PGWP:
              <ul className="my-2 ml-3">
                <li>
                  Programs shorter than eight months.
                </li>

                <li>
                  Not maintaining full-time student status during studies.
                </li>

                <li>
                  Applying after the 180-day window has closed.
                </li>
                <li>
                  Having previously held a PGWP.
                </li>


              </ul>

            </div>

            <div class="pages-header-2" ref={applicationRef} >
              Application Process for PGWP
            </div>
            <div class="pages-paragraph">

              The application process for the PGWP has evolved, particularly with recent changes allowing applications from outside Canada. Here’s how to apply:

              <ul className="my-2 ml-3">
                <li>
                  Complete an online eligibility questionnaire on the Immigration, Refugees and Citizenship Canada (IRCC) website.
                </li>

                <li>
                  Gather Required Documents like:

                  <ul>
                    <li>Proof of graduation (e.g., transcripts or official letters).</li>
                    <li>A valid study permit (if applying from within Canada).</li>
                  </ul>
                </li>

                <li>
                  Applications can be submitted online through an IRCC Secure account.
                </li>
                <li>
                  Pay the application fee (approximately CAD 255).
                </li>
                <li>
                  The processing time can range from 80 to 180 days, during which applicants may work if they applied before their study permit expired.
                </li>


              </ul>

              <div className="font-bold text-[20px] mt-4 mb-3">Note:</div>

              <ul>
                <li>If applying from outside Canada, additional documentation may be requested based on the visa office processing the application.</li>
                <li>Applicants can begin working full-time while waiting for their PGWP if they applied before their study permit expired.</li>
              </ul>
            </div>

            <div class="pages-header-2" ref={postRef}>
              Post-PGWP Options
            </div>
            <div class="pages-paragraph">
              Once the PGWP expires, holders typically need to transition to another form of legal status in Canada:
              <ul className="my-2 ml-3">
                <li>
                  Many graduates use their Canadian work experience to apply for permanent residency through various immigration programs such as Express Entry or Provincial Nominee Programs (PNPs).
                </li>

                <li>
                  Graduates may choose to pursue further education or apply for different types of work permits.
                </li>


              </ul>

            </div>

            <div class="pages-header-2" ref={changesRef}>
              Changes in PGWP Requirements
            </div>
            <div class="pages-paragraph">
              Starting November 1, 2024, new language proficiency requirements are implemented:
              <ul className="my-2 ml-3">
                <li>
                  Bachelor’s and Master’s degree students will need to demonstrate language proficiency at CLB 7.
                </li>

                <li>
                  College graduates must show CLB 5 proficiency and graduate in eligible fields like STEM, Healthcare, Trade, Transport or Agriculture.
                </li>

                <li>
                  Applicants must apply within 180 days of receiving confirmation of program completion.
                </li>

              </ul>

              These changes aim to align PGWP issuance with Canada's labor market needs and may affect future applicants' eligibility.

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

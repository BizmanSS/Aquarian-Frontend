import React, { useRef } from "react";

import NestedTableOfContent from "./../../shared/NestedTableOfContent.jsx";
import FaqBox from "./../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../globalComponents/Sidebar/SiteMapMenu.jsx";

import "./SuperVisa.css";

const faqItems = [
  {
    question: " Does super visa provide access to health care facilities?",
    answer:
      "Super Visa holders are not eligible for provincial health coverage. Therefore, obtaining comprehensive medical insurance is crucial.",
  },
  {
    question:
      "How to extend super visa stay?",
    answer:
      "The Super Visa is not extendable beyond the initial two years. If you wish to stay longer, you must leave Canada and reapply.",
  },
];

export default function SuperVisa() {
  const aboutRef = useRef(null);
  const applyRef = useRef(null);
  const differenceRef = useRef(null);
  const visitorsRef = useRef(null);
  const extensionRef = useRef(null);
  const benefitRef= useRef(null);
  const faqRef = useRef(null);
 

  const tableContentData = [
    {
      title: "What are the eligibility requirements for a Super Visa?",
      scrollTo: aboutRef,
    },
    {
      title: "How to apply for a Super Visa?",
      scrollTo: applyRef,
    },
    {
      title: "What is the difference between a Super Visa and a Visitor Visa?",
      scrollTo: differenceRef,
    },
    {
      title: "Super Visa for Visa-Exempt Visitors",
      scrollTo: visitorsRef,
    },
    {
      title: "Extension for Super Visa",
      scrollTo: extensionRef,
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
          type="S"
          h1="Super Visa"
          // h2="Comprehensive Ranking System (CRS)"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Sponorship
              {" > "}Super Visa
            </div>
            <div class="pages-header">Super Visa</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Super Visa is a unique immigration pathway for Parents and
              Grandparents of Canadian Citizens and PRs. It is a special visitor
              visa allowing them multiple entries to Canada for extended
              periods. This provides families the opportunity to spend more time
              together. The holders of Super Visa in Canada can stay temporarily
              in the country. The date of application influences the duration of
              the permitted stay. If you have applied for a Super Visa on or
              after June 22, 2023, you are eligible to remain in Canada for up
              to 5 years at a time. Whereas, if you applied before this date,
              the length of your stay is dependent upon the duration granted by
              the border officer upon your entry. For permanent residency, they
              need to be sponsored for permanent residence by the Canadian
              citizens. Valid for up to ten years, it enables multiple entries,
              making it easier for families to connect regularly.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              What are the eligibility requirements for a Super Visa?
            </div>
            <div className="pages-paragraph">
              Super visa was introduced in 2011 to allow the parents and
              grandparents of Canadian citizens or PRs to stay in Canada. The
              validity of the visa is for 10 years. The visa holders can
              therefore visit Canada multiple times during the eligibility of
              their visa. To apply for a Super Visa, you must meet several
              criteria:
              <ul className="my-3">
                <li>
                  You must be the parent or grandparent of a Canadian citizen or
                  permanent resident. You must submit birth certificates as
                  proof.
                </li>
                <li>
                  You should have a letter of invitation from your child or
                  grandchild.
                </li>
                <li>
                  The inviter must meet the Minimum Necessary Income (MNI)
                  requirements as per the low-income cutoff (LICO).
                </li>
                <li>
                  You must have private medical insurance coverage from a
                  Canadian insurance company for at least one year. The
                  insurance must provide coverage for health care,
                  hospitalization, and repatriation with a minimum coverage of
                  100,000 CAD.
                </li>
                <li>
                  A medical exam is required to ensure that you do not pose a
                  health risk to Canadians.
                </li>
              </ul>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "26px",
                  margin: "25px 0",
                }}
              >
                Validity of Super Visa
              </div>
              <div>
                The duration of stay allowed under the Super Visa program in
                Canada varies based on the application date.
              </div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  margin: "22px 0",
                }}
              >
                If Applied On or After June 22, 2023
              </div>
              <div>
                The applicants can stay in Canada for up to 5 years at a time.
              </div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  margin: "22px 0",
                }}
              >
                If Applied Before June 22, 2023
              </div>
              <div>
                The stay of the applicant is limited to the duration granted by
                the border officer when they entered. For example, if you were
                allowed to stay for 2 years, that is your maximum duration.
              </div>
              <div>Options for a Longer Stay:</div>
              <ul className="my-3">
                <li>
                  They can leave Canada and re-enter. If they meet all
                  eligibility requirements, they can receive a new authorization
                  for up to 5 years.
                </li>
                <li>
                  Alternatively, they can apply for an extension of stay while
                  in Canada, which can be approved for up to 2 additional years.
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

            <div class="pages-header-2" ref={applyRef}>
              How to apply for a Super Visa?
            </div>
            <div class="pages-paragraph">
              The Super Visa application can be submitted online or offline. You
              must have proof of your relation to the Canadian citizen or PR.
              The further application steps are:
              <ul className="my-2 ml-3">
                <li>
                  Gather documents like invitation letter, proof of the
                  inviter’s income, medical insurance, and identification
                  documents.
                </li>

                <li>
                  Fill out the required forms, including the application for a
                  Visitor Visa (IMM 5257).
                </li>

                <li>Pay application fee of CAD 100 per person.</li>
                <li>Submit biometrics at a designated location.</li>
              </ul>
              Wait for the processing of the application. Once done, you will be
              notified of the decision through your account or email. Applicants
              must be outside Canada when submitting their Super Visa
              application.
            </div>

            <div class="pages-header-2" ref={differenceRef}>
              What is the difference between a Super Visa and a Visitor Visa?
            </div>
            <div className="pages-paragraph">
              The Super and Visitor Visa are both options for entering Canada
              with different purposes.
              <ul className="my-2 ml-3">
                <li>
                  The Super Visa is for parents and grandparents of Canadian
                  citizens or permanent residents. It allows them to stay for up
                  to 2 years with multiple entries over the duration of 10
                  years.
                </li>

                <li>
                  Visitor Visa, on the other hand, allows tourists and temporary
                  visitors to stay in Canada for up to 6 months per visit.
                </li>
              </ul>
              Super Visa requires medical insurance and proof of financial
              support but Visitor Visa focuses on the travel intentions of the
              applicant.
            </div>

            <div class="pages-header-2" ref={visitorsRef}>
              Super Visa for Visa-Exempt Visitors
            </div>
            <div class="pages-paragraph">
              Visa-exempt visitors are those who do not require a visa to enter
              Canada on the basis of their country of citizenship. However, they
              can stay only up to 6 months without renewing their status.
              <div className="mt-3">
                This special visa allows parents/grandparents of Canadian
                citizens or PRs to stay in Canada for up to two years at a time,
                with the possibility of multiple entries. This is ideal for
                families looking to spend extended time together.
              </div>
            </div>

            <div class="pages-header-2" ref={extensionRef}>
              Extension for Super Visa
            </div>
            <div class="pages-paragraph">
              Super Visa holders can prolong their stay in Canada beyond 2
              years. For this, they need to submit an application for extension
              around 30 days before their current status expires. If your
              current visa expires during the processing of your application,
              you can stay in Canada with “implied status” until the decision is
              made.
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

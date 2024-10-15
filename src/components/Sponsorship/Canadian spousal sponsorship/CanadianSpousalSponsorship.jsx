import React, { useRef } from "react";

import TableOfContent from "../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What documents do I need to gather before applying for child sponsorship?",
    answer: "You should collect documents such as:",
    listAnswer: [
      "Proof of Canadian citizenship",
      "ID proof of your dependent and you",
      "Proof of relationship: birth certificates, and financial documents",
    ],
  },
  {
    question: "What forms do I need to complete?",
    answer:
      "You will have to fill out 2 forms: The Application to Sponsor and Undertaking (IMM 1344) and the Application for Permanent Residence (IMM 0008).",
  },
  {
    question: "Will my dependent need a medical check?",
    answer:
      "Yes, the dependent may require medical and background checks based on the processing.",
  },
];

export default function CanadianSpousalSponsorship() {
  const aboutRef = useRef(null);
  const childrenRef = useRef(null);
  const otherRef = useRef(null);
  const eligibilityRef = useRef(null);
  const dependentRef = useRef(null);
  const minimumRef = useRef(null);
  const faqRef = useRef(null);
  const requirementsRef = useRef(null);
  const quebecRef = useRef(null);
  const costsRef = useRef(null);

  const tableContentData = [
    {
      title: "What is the Spousal Sponsorship Program?",
      scrollTo: aboutRef,
    },
    {
      title: "Classes of Spousal Sponsorship Program",
      scrollTo: eligibilityRef,
      subItems: [
        {
          title: "Family Class (Outland) Sponsorship",
          scrollTo: childrenRef,
        },
        {
          title: "In Canada Sponsorship Class",
          scrollTo: otherRef,
        },
      ],
    },
    {
      title: "Eligibility for Spousal Sponsorship",
      scrollTo: dependentRef,
    },
    {
      title: "Spousal Sponsorship Costs",
      scrollTo: costsRef,
    },
    {
      title: "Spousal Sponsorship in Quebec",
      scrollTo: quebecRef,
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
        <SiteMapMenu type="S" h1="Canadian spousal sponsorship"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Sponsorship
              {" > "}Canadian spousal sponsorship
            </div>
            <div class="pages-header">Canadian Spousal Sponsorship</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canadian Spousal Sponsorship is a pathway through which Canadian
              citizens or permanent residents can sponsor their spouses to come
              and live permanently in canada. This program not only reunites
              families but also reinforces the connections that enrich Canadian
              society. Canada as a country recognizes the significance of
              keeping families together, which is why spousal sponsorship
              applications are treated as a top priority.
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              What is the Spousal Sponsorship Program?
            </div>
            <div className="pages-paragraph">
              The Spousal Sponsorship Program is a part of Canada’s immigration
              system. It allows Canadian citizens and PRs to sponsor their
              spouse, common-law, or conjugal partners for permanent residency
              in Canada. This program facilitates family reunification and is a
              critical component of Canada’s immigration system.
              <div className="my-3">
                <strong>
                  Let us understand who all can be sponsored under this program:
                </strong>
              </div>
              <ul className="mb-5">
                <li>
                  <strong>Spouse: </strong>A legally married partner.
                </li>
                <li>
                  <strong>Common-law Partner: </strong>A person with whom you
                  have lived in a conjugal relationship for at least 12
                  continuous months.
                </li>
                <li>
                  <strong>Conjugal Partner: </strong>A person you have been in a
                  committed relationship with for at least one year but could
                  not live together or marry due to exceptional circumstances
                  (e.g., immigration barriers).
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
              Classes of Spousal Sponsorship Program
            </div>

            <div className="pages-paragraph">
              There are 2 main classes of spousal sponsorship in Canada:
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
                ref={childrenRef}
              >
                Family Class (Outland) Sponorship
              </div>
              Outland sponsorship is for applicants outside Canada. It allows
              Canadian citizens and permanent residents to sponsor their spouses
              or common-law partners to immigrate to Canada.
              <ul className="my-3">
                <li>
                  They must be a Canadian citizen or a permanent resident of
                  Canada.
                </li>
                <li>They must be at least 18 years old.</li>
                <li>
                  They should not be in person, bankrupt, or criminally
                  convicted.
                </li>
              </ul>
              One drawback of this class is that living with the spouse may be
              challenging until the application is approved. However, the spouse
              can apply for a temporary visa to come to Canada while their
              outland sponsorship application is being processed.

              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                Family Class (Outland) Sponorship
              </div>
              Outland sponsorship is for applicants outside Canada. It allows
              Canadian citizens and permanent residents to sponsor their spouses
              or common-law partners to immigrate to Canada.
              <ul className="my-3">
                <li>
                  They must be a Canadian citizen or a permanent resident of
                  Canada.
                </li>
                <li>They must be at least 18 years old.</li>
                <li>
                  They should not be in person, bankrupt, or criminally
                  convicted.
                </li>
              </ul>
              One drawback of this class is that living with the spouse may be
              challenging until the application is approved. However, the spouse
              can apply for a temporary visa to come to Canada while their
              outland sponsorship application is being processed.
            </div>

            <div class="pages-header-2" ref={dependentRef}>
              Dependent Sponsorship in Quebec
            </div>
            <div class="pages-paragraph">
              Dependent Sponsorship in Quebec refers to the process of
              sponsoring family members to join you in the province of Quebec,
              Canada. Quebec has its own unique rules and requirements for
              dependent sponsorship.
            </div>
            <ol
              style={{ listStyle: "decimal", listStylePosition: "inside" }}
              className="ordered-list"
            >
              <li>
                You must demonstrate that you have the financial means to
                support your dependents in Quebec.
              </li>
              <li>
                If the dependent child is under 16, the sponsor must provide
                financial support for 10 years or until the child turns 18,
                whichever is longer.
              </li>
              <li>
                If the child is 16 years or older, the sponsor shall support
                them financially for a period of three years or until they reach
                the age of 25, whichever is the longer period of time.
              </li>
            </ol>

            <div class="pages-header-2" ref={minimumRef}>
              Minimum Necessary Income for Dependent Child Sponsorship
            </div>

            <div className="pages-paragraph">
              Sponsors are exempt from MNI requirements unless the dependent
              child has their own children. In such cases, the sponsor must meet
              the MNI for their total family unit size, which includes everyone
              they support in Canada as well as those they intend to sponsor.
              For sponsors who live in Quebec, there is a specific financial
              responsibility depending on the dependent child's age. For
              example, if the dependent child is under 16 years of age, the
              commitment is for 10 years or until he becomes 18, whichever is
              longer.
              <div className="mt-3">
                The Child and Other Dependent Sponsorship program is a
                fundamental part of the Canadian immigration system. This
                reflects a commitment from the Canadian government for family
                reunification. Such a program lets Canadian citizens and
                permanent residents sponsor a dependent child: either a
                biological child or an adopted child to join them in Canada as a
                permanent resident.{" "}
              </div>
              <div className="mt-5">
                <strong>
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    Check:{" "}
                  </span>{" "}
                  <a
                    href="#"
                    style={{
                      color: "blue",
                    }}
                  >
                    {" "}
                    Minimum Necessary Income for Canadian Sponsorship
                  </a>
                </strong>
              </div>
            </div>
          </div>
          <FaqBox faqItems={faqItems} />
          <ReadyToStartCard />
          <span></span>
        </div>
      </div>
    </div>
  );
}

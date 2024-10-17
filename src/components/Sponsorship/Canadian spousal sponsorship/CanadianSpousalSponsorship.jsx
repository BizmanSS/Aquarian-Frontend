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
  const faqRef = useRef(null);
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

  const costsTableData = [
    {
      fee:"Sponsorship Fee",
      amount:"$75"
    },
    {
      fee:"Principal Applicant Processing Fee",
      amount:"$490"
    },
    {
      fee:"Right of Permanent Residence Fee",
      amount:"$515"
    },
    {
      fee:"Biometrics Fee",
      amount:"$85"
    },
    {
      fee:"Total",
      amount:"$1,165"
    }
  ]

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
            Eligibility for Spousal Sponsorship
            </div>
            <div class="pages-paragraph">
            To sponsor your spouse or partner, you must meet the following criteria:
            </div>
            <ol
              style={{ listStyle: "disc", listStylePosition: "inside" }}
              className="ordered-list"
            >
              <li>
              Be a Canadian citizen or permanent resident.
              </li>
              <li>
              Be at least 18 years old.
              </li>
              <li>
              Be able to provide for the basic needs of your spouse or partner, ensuring they do not need social assistance.
              </li>
              <li>
              Not be in default on any previous Canadian sponsorships or have been convicted of certain criminal offences.
              </li>
            </ol>
            <div style={{
              textDecoration:"underline",
              marginBottom:"12px"
            }}><strong>5 Year Sponsorship Bar</strong></div>

            <div>In Canada, a sponsor who has previously sponsored a spouse cannot sponsor another spouse for 5 years from the date they became a permanent resident, even if they are now divorced. </div>

            <ol
              style={{ listStyle: "disc", listStylePosition: "inside", marginTop:"8px" }}
              className="ordered-list"
            >
              <li>
              This applies regardless of any changes in marital status. 
              </li>
              <li>
              The sponsor must also fulfil their financial obligations from the previous sponsorship, which includes a 3-year undertaking to provide for the basic needs of the sponsored spouse. 
              </li>
             
            </ol>

            <div style={{
              textDecoration:"underline",
              marginBottom:"12px"
            }}><strong>Processing Time for Sponsorship Applications</strong></div>

            <div>Sponsorship applications usually take about 12 months to process. Complications or additional proof requests may cause delays. To speed up the process, ensure your application is completed correctly. </div>

            <ol
              style={{ listStyle: "disc", listStylePosition: "inside", marginTop:"8px" }}
              className="ordered-list"
            >
              <li>
              You can submit your application by mail or via IRCC’s permanent residence portal.
              </li>
              <li>
              Your spouse, conjugal partner, or common-law partner can include dependent children in their application for permanent residence.
              </li>
             
            </ol>

            <div class="pages-header-2" ref={costsRef}>
            Spousal Sponsorship Costs
            </div>

            <div className="pages-paragraph">
            When sponsoring a spouse, conjugal partner, or common-law partner in Canada, the following government processing fees apply. If the applicant has dependent children, an additional payment of $150 is required for each child included in the application.
            </div>

            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Fee Type</th>
                        <th>Amount</th>
                  
                      </tr>
                    </thead>
                    <tbody>
                      {costsTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.fee}</td>
                          <td>{row.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>For those seeking sponsorship to reside in Quebec, it's important to note that additional documents and fees may be required. Quebec has specific requirements that go beyond the standard sponsorship process. </div>

              <div class="pages-header-2" ref={quebecRef}>
              Spousal Sponsorship in Quebec
            </div>

            <div className="pages-paragraph">
            Quebec has its own immigration rules and processes, including specific requirements for spousal sponsorship. If you are residing in Quebec, you must:
            </div> 

            <ol
              style={{ listStyle: "disc", listStylePosition: "inside", marginTop:"8px" }}
              className="ordered-list"
            >
              <li>
              Obtain a Certificate of Selection of Quebec (CSQ) after applying for spousal sponsorship.
              </li>
              <li>
              Meet additional criteria set by the Quebec government, which may include demonstrating a higher level of financial stability and knowledge of French.
              </li>
             
            </ol>

            <div>Spousal sponsorship in Canada offers a pathway to permanent residency for many couples. No job offer or language requirement is required for spousal sponsorship. However, they need to take a language test for Canadian citizenship later. Applications may be denied if the relationship isn’t proven to be genuine. Immigration officers consider various factors, including documentation and cultural practices.</div>
          </div>
          <FaqBox faqItems={faqItems} />
          <ReadyToStartCard />
          <span></span>
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";

import TableOfContent from "../../shared/NestedTableOfContent";
import FaqBox from "../../shared/NestedFaqBox";
import ReadyToStartCard from "../../shared/ReadyToStart";

import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";



const faqItems = [
  {
    question: "What If I can’t sponsor under PGP?",
    answer:
      "If you are unable to sponsor your parents/grandparents through PGP, you can explore options like a visitor visa or a super visa.",
  },
  {
    question: "Can my spouse support my PGP sponsorship application?",
    answer:
      "Yes, your spouse or common-law partner can support your PGP sponsorship application and have his or her income included with yours when calculating whether you are capable of supporting your sponsored family members. You would be required to provide documentation to prove your relationship, such as marriage certificates or common-law affidavits.",
  },
  {
    question: "What documents are required for a PGP application",
    answer:
      " While applying for PGP, you would be required to provide proof of residing in Canada, proof of marital status, income, police clearances, medical certificates and a photo.",
  },
  {
    question: "What is the deadline for submitting a PGP sponsorship application?",
    answer:
      "You need to submit a full PGP application within 60 days of getting an invitation from IRCC. The exact deadline will be mentioned on the letter of invitation you will get.",
  },
  {
    question: "What is the fee for a PGP application in 2024?",
    answer:
      "Processing fee for each adult being sponsored would be $1080 and for every dependent child, $155. In addition to that, there's a biometrics fee of $85 for everyone or $170 for two people more.",
  },
  
];

export default function ParentsAndGrandparentsProgram() {
  const aboutRef = useRef(null);
  const requirementsRef = useRef(null);
  const processRef = useRef(null);
  const factsRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Who can Sponsor their Parents and Grandparents?",
      scrollTo: aboutRef,
      subItems: [
        {
          title: "Requirements for the Sponsored Parents and Grandparents",
          scrollTo: requirementsRef,
        },
      ],
    },
    {
      title: "What is the process of applying to PGP Sponsorship?",
      scrollTo: processRef,
      subItems: [
        {
          title: "Important Facts",
          scrollTo: factsRef,
        },
      ],
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
          h1="Parents and Grandparents Program (PGP)"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Sponsorship
              {" > "}Parents and Grandparents Program (PGP)
            </div>
            <div class="pages-header">
              Parents and Grandparents Program
              <span class="cec-font"> (PGP)</span>{" "}
            </div>
            <div>rishi</div>
            <div class="pages-paragraph space-fix intro-size-fix">
              The Parents and Grandparents Program is an immigration program,
              whereby family members are sponsored by Canadian Citizens and
              Permanent Residents. This program contributes to the family
              reunification efforts of the Canadian government. To be a part of
              this program, sponsors are obligated to fill an
              Interest-to-Sponsor Form. They are selected based on a random draw
              after which they need to fill a sponsorship application to
              financially support their family after their PR. The parents or
              grandparents who are being sponsored must undergo medical exams
              and security screenings. Once the application is approved, they
              can obtain permanent residency in Canada.
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              Who can Sponsor their Parents and Grandparents?
            </div>
            <div className="pages-paragraph">
              An eligible sponsor needs to be a Canadian citizen/permanent
              resident who meets certain criteria including:
              <ul className="my-5">
                <li>
                  The sponsor must be a Canadian citizen or a permanent resident
                  aged 18 or above.
                </li>
                <li>
                  They should not have defaulted on any previous sponsorship
                  agreements or owe money to the government.
                </li>
                <li>
                  The sponsor must primarily reside in Canada during the
                  application submission until the decision is made.
                </li>
                <li>
                  They must meet the minimum income requirement for the last 3
                  tax years. For applications in 2024, IRCC will assess income
                  from the tax years 2023, 2022, and 2021.
                </li>
                <li>
                  Sponsors wishing to support their parents or grandparents
                  under the PGP must sign an undertaking with IRCC.
                </li>
              </ul>
              For those outside Quebec, this commitment lasts 20 years from the
              date the sponsored family members become permanent residents. For
              sponsors in Quebec, the commitment is 10 years. Additionally,
              sponsors must cover basic needs such as food, clothing, and
              utilities.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={requirementsRef}>
              Requirements for the Sponsored Parents and Grandparents
            </div>

            <div className="pages-paragraph">
              <ul className="my-5">
                <li>They need to be related to the sponsor by blood.</li>
                <li>They need to take a medical exam and submit biometrics.</li>
                <li>
                  No job offer is required for their PR, neither are they
                  required to work during their stay in Canada.
                </li>
                <li>
                  They do not need to adhere to any language proficiency
                  requirements.
                </li>
              </ul>
            </div>

            <div class="pages-header-2" ref={processRef}>
              What is the process of applying to PGP Sponsorship?
            </div>
            <div class="pages-paragraph">
              The application process for the PGP can be broken down into
              several steps:
            </div>
            <ol
              style={{ listStyle: "decimal", listStylePosition: "inside" }}
              className="ordered-list"
            >
              <li>
                Interested sponsors must submit an "Interest to Sponsor" form.
                This should be submitted during the intake period, which usually
                opens once a year as announced by IRCC.
              </li>
              <li>
                IRCC conducts a lottery draw system due to the high volume of
                applicants to select potential sponsors. Once selected, the
                sponsors receive an invitation to apply.
              </li>
              <li>
                The sponsors must submit a complete application form with
                documents like the sponsorship agreement, proof of income, and
                relationship documents.
              </li>
              <li>
                IRCC reviews the application. If approved, your
                parents/grandparents will be issued PR status.
              </li>
            </ol>

            <div className="mt-3">
              Before coming to Canada, the sponsored individuals need to undergo
              medical examinations and security checks.
            </div>

            <div class="pages-header-2" ref={factsRef}>
              Important Facts
            </div>

            <ul className='my-5'>
              <li>
              You can include eligible brothers and sisters in a PGP application if they are under 22 or financially dependent on your parents due to a disability.
              </li>
              <li>
              In-laws are not eligible for sponsorship under this program. However, you can act as a co-signer on your spouse's application to sponsor his/her parents.
              </li>
              <li>
              The processing times can vary from 20-24 months.
              </li>
            </ul>

            <div>The Parents and Grandparents Program is a pathway for family reunification in Canada, allowing citizens and permanent residents to bring their loved ones to the country. The intake method shift towards a lottery system aims to manage the high demand while ensuring fairness in the selection process.</div>

          </div>
          <FaqBox faqItems={faqItems} />
          <ReadyToStartCard />
        </div>
      </div>
    </div>
  );
}

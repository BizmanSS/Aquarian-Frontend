import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "Can I apply for Alberta Farm Stream if I am currently working in another province?",
    answer:
      "No, applicants must not be working as temporary foreign workers in another province to be eligible for the farm stream pathway.",
  },
  {
    question: "What happens if my application is approved?",
    answer:
      "If approved, you will receive a Provincial Nomination package via email that provides instructions on how to apply for permanent residence through IRCC.",
  },
  {
    question: "What should my business plan for Alberta Farm Stream include?",
    answer:
      "The business plan should outline your investment strategy, potential for growth and profitability, and how it aligns with Alberta’s agri-food goals.",
  },
];

export default function AlbertaFarmStream() {
  const requireRef = useRef(null);
  const investRef = useRef(null);
  const farmingRef = useRef(null);
  const minimumRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Program Requirements of Alberta Farm Stream",
      scrollTo: requireRef,
      subItems: [
        {
          title: "Farming Experience",
          scrollTo: farmingRef,
        },
        { title: "Minimum Financial Resources", scrollTo: minimumRef },
        { title: "Investment Plans", scrollTo: investRef },
      ],
    },
    {
      title: "How to apply to Alberta Farm Stream?",
      scrollTo: applyRef,
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
          h2="Alberta Immigrant Nominee Program"
          h3="Alberta Farm Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Express Entry
            </div>
            <div class="pages-header">Alberta Farm Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada’s agriculture industry is important to the economy, and
              Alberta is known for its vast farmlands and agricultural
              opportunities. For individuals with experience in farming or those
              looking to invest in agricultural businesses, the Alberta Farm
              Stream under the Alberta Advantage Immigration Program (AAIP, a
              Provincial Nominee Program offers a pathway to permanent
              residence. The pathway is designed for experienced farm owners or
              entrepreneurs with financial resources and experience to establish
              a new or purchase an existing farm in Alberta. You can only have
              one Alberta Advantage Immigration Program (AAIP) application in
              process at a time.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={requireRef}>
              Program Requirements of Alberta Farm Stream
            </div>
            <div className="pages-paragraph">
              To qualify for the Alberta Farm Stream, you must meet specific
              requirements:
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginTop: "15px",
                }}
                ref={farmingRef}
              >
                Farming Experience
              </div>
              <ul className="my-3">
                <li>
                  You must have experience in operating or managing a farm.
                </li>
                <li>
                  Accepted proofs include financial documentation of an existing
                  farm, education and work experience records, a proposed
                  business plan, or proof of financing support from a Canadian
                  financial institution.
                </li>
              </ul>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginTop: "15px",
                }}
                ref={minimumRef}
              >
                Minimum Financial Resources
              </div>
              <ul className="my-3">
                <li>
                  You must be able to invest a minimum of CAD 500,000 in a
                  farming business in Alberta.
                </li>
                <li>
                  You must provide documents showing the minimum net worth or
                  confirmation of access to similar funds.
                </li>
              </ul>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginTop: "15px",
                }}
                ref={investRef}
              >
                Investment Plans
              </div>
              <ul className="my-3">
                <li>
                  You must document a well-researched investment plan and submit
                  it with your application to the AAIP.
                </li>
                <li>
                  The plan should include the potential of the farm for growth
                  and profitability.
                </li>
                <li>
                  Priority will be given to applications that best align with
                  Alberta's agri-food goals.
                </li>
              </ul>
              <div className="mt-5">
                You are ineligible to apply under the AAIP Farm Stream if you:
                <ul className="my-3">
                  <li>Have an active nomination under another AAIP stream.</li>
                  <li>
                    Have a removal order issued by IRCC or Canada Border
                    Services.
                  </li>
                  <li>
                    Do not have valid temporary resident status in Canada.
                  </li>
                  <li>
                    Are currently barred from reapplying due to a previous AAIP
                    decision.
                  </li>
                  <li>
                    Are working in a province other than Alberta as a temporary
                    foreign worker.
                  </li>
                  <li>
                    Are an international student in Canada, including those on
                    co-op placements or internships.
                  </li>
                </ul>
              </div>
            </div>

            <div className="pages-header-2" ref={applyRef}>
              How to apply to Alberta Farm Stream?
            </div>
            <div className="pages-paragraph">
              The application process for the Alberta Farm Stream involves
              several steps:
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                Step 1: Check Eligibility{" "}
              </div>
              <div>
                Before applying, ensure you meet the Farm Stream and AAIP
                criteria. However, keep in mind that meeting the requirements
                does not guarantee permanent residency.
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                Step 2: Formal Application Submission{" "}
              </div>
              <div>
                Download the AAIP Farm Stream Document Checklist to guide your
                application. Ensure you fill out all required forms, including
                IRCC forms like IMM 0008 and others as applicable.
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                Step 3: Pay the Application Fee
              </div>
              <div>
                As of April 1, 2024, the application fee is $3,500. The fee is
                non-refundable regardless of the outcome.
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                Step 4: Supporting Documents Required
              </div>
              <div>
                You must provide proof of farming experience, a detailed
                business plan demonstrating financial viability, evidence of net
                worth and investment capital, and sufficient funds to support
                both the business and personal finances.
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              >
                Step 5: Submit Your Application
              </div>
              <div className="mb-5">
                Send your complete application by registered mail or courier,
                including proof of payment, to the AAIP office.
              </div>
              In 2023, Alberta’s agriculture sector contributed over CAD 10
              billion to the provincial economy, with exports of agricultural
              products growing by 6.3% annually. The Alberta Farm Stream is not
              just a pathway to owning a farm but also a fast-track route to
              Canadian permanent residency. By investing in Alberta’s
              agriculture industry, you can contribute to the local economy and
              secure your future in Canada.
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

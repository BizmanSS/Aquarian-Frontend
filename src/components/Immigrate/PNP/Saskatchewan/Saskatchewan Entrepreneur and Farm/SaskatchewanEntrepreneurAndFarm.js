import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      " Can I apply to Saskatchewan Farm Stream if I don't have prior farming experience?",
    answer:
      "No, prior farming experience is essential for the Farm Owners and Operators Stream.",
  },
  {
    question:
      " Are there language proficiency requirements for Saskatchewan Entrepreneur and Farm Streams?",
    answer:
      " There are no minimum language proficiency requirements specified for these streams.",
  },
];

export default function SaskatchewanEntrepreneurandFarm() {
  const faqRef = useRef(null);
  const EntrepreneurRef = useRef(null);
  const OperatorsRef = useRef(null);
  const GraduateRef = useRef(null);

  const tableContentData = [
    {
      title: "Saskatchewan Entrepreneur",
      scrollTo: EntrepreneurRef,
    },
    {
      title: "Saskatchewan Farm Owners and Operators",
      scrollTo: OperatorsRef,
    },
    {
      title: "Saskatchewan International Graduate Entrepreneur Category",
      scrollTo: GraduateRef,
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
          h2="Saskatchewan"
          h3="Saskatchewan Entrepreneur and Farm
"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Saskatchewan
              {" > "}Saskatchewan Entrepreneur and Farm
            </div>
            <div class="pages-header">Saskatchewan Entrepreneur and Farm</div>
            <div class="pages-paragraph space-fix intro-size-fix">
              Saskatchewan Entrepreneur and Farm includes 3 pathways for
              immigration to the province. It is a part of the Saskatchewan
              Immigrant Nominee Program (SINP). The program is designed for
              foreign nationals who are interested in investing significant
              capital amount to establish a new business in Saskatchewan. The
              streams under the program include:
              <ul>
                <li>Saskatchewan Entrepreneur</li>
                <li>Saskatchewan Farm Owners and Operators</li>
                <li>
                  Saskatchewan International Graduate Entrepreneur category
                </li>
              </ul>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={EntrepreneurRef}>
              Saskatchewan Entrepreneur
            </div>
            <div className="pages-paragraph">
              The Saskatchewan Entrepreneur Stream targets foreign business
              owners/managers with relevant experience who wish to start or
              purchase a business in Saskatchewan. This stream is beneficial for
              those with a viable business idea and the necessary capital to
              invest.
              <ul className="my-3">
                <li>
                  Applicants must have a minimum net worth of CAD 500,000.
                </li>
                <li>
                  At least 3 years of business management or entrepreneurial
                  experience within the past 5 years is required.
                </li>
                <li>
                  A minimum investment of CAD 300,000 is needed for businesses
                  located in Regina or Saskatoon, while CAD 200,000 is required
                  for those outside these urban centres.
                </li>
                <li>
                  Applicants must create or maintain at least two employment
                  opportunities for Canadian citizens or permanent residents.
                </li>
              </ul>
              It is highly recommended to conduct a business research visit to
              Saskatchewan within one year before submitting an Expression of
              Interest.
            </div>
            <div class="pages-header-2" ref={OperatorsRef}>
              Saskatchewan Farm Owners and Operators
            </div>
            <div className="pages-paragraph">
              The Farm Owners and Operators Stream targets experienced farmers
              looking to establish or operate a farm in Saskatchewan. This
              stream emphasizes the importance of agricultural experience and
              financial stability.
              <ul className="my-3">
                <li>The applicants need a minimum of CAD 500,000.</li>
                <li>
                  Applicants must have relevant knowledge and experience in
                  farming operations.
                </li>
                <li>
                  A detailed farm establishment plan must be submitted,
                  outlining the proposed farming operation's viability.
                </li>
              </ul>
              A mandatory visit to Saskatchewan for at least five business days
              is required before application submission.
            </div>
            It has a sub-category called Young Farmer Stream specifically for
            younger farmers under 40 years. It has slightly lower financial
            requirements, allowing applicants with a personal net worth of at
            least CAD 300,000 to apply.
            <div class="pages-header-2" ref={GraduateRef}>
              Saskatchewan International Graduate Entrepreneur Category
            </div>
            <div className="pages-paragraph">
              The International Graduate Entrepreneur Category is for
              international students who have graduated from a recognized
              post-secondary institution in Saskatchewan. This stream allows
              graduates to start or acquire a business in the province.
              <ul className="my-3">
                <li>
                  Applicants must have completed their studies at a recognized
                  college or university in Saskatchewan.
                </li>
                <li>
                  A comprehensive business plan detailing the intended business
                  operations is essential.
                </li>
              </ul>
            </div>
            The Saskatchewan Entrepreneur and Farm streams attract skilled
            immigrants who can contribute to its economic growth through
            entrepreneurship and agriculture. The structured application
            process, which includes an Expression of Interest (EOI), ensures
            that only qualified candidates with the potential to succeed in the
            local economy are selected.
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

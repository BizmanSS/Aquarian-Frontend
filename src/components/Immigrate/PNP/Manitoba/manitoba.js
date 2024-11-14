import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const entrepreneurData = [
  {
    criterion: "Net Worth",
    requirement: "Minimum CAD 500,000",
  },
  {
    criterion: "Business Experience",
    requirement:
      "Minimum 3 years as an owner or senior manager in the last 5 years",
  },
  {
    criterion: "Investment",
    requirement:
      "Minimum CAD 250,000 in Winnipeg; CAD 150,000 outside Winnipeg ",
  },
  {
    criterion: "Language Proficiency",
    requirement: "Minimum CLB/NCLC 5",
  },
  {
    criterion: "Minimum Ownership",
    requirement: "33.33% ownership required ",
  },
];

export default function Manitoba() {
  const keyRef = useRef(null);
  const skilledRef = useRef(null);
  const InternationalRef = useRef(null);
  const businessRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Requirements for AOS",
      scrollTo: keyRef,
      subItems: [
        {
          title: "Residency and Work Permit Requirement",
          scrollTo: skilledRef,
        },
        {
          title: "Occupation",
          scrollTo: InternationalRef,
        },
        {
          title: "Language Proficiency",
          scrollTo: businessRef,
        },
      ],
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
          h2="Manitoba"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Manitoba
            </div>
            <div class="pages-header">
              Manitoba Provincial Nominee Program (MPNP)
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Manitoba is a province located in central Canada, bordered by
              Ontario to the east and Saskatchewan to the west. It serves as a
              significant entry point to western Canada and is known for its
              diverse communities and welcoming atmosphere for immigrants.
              <div className="mt-5">
                The Manitoba Provincial Nominee Program (MPNP) is an immigration
                pathway that enables Manitoba to nominate individuals for
                Canadian permanent residency if they meet the province’s
                economic needs and intend to settle there. The program is
                designed to attract skilled workers, entrepreneurs, and recent
                graduates who can support Manitoba’s labor market. To apply,
                candidates submit an Expression of Interest (EOI) and are
                awarded points based on criteria like education, work
                experience, language proficiency, and adaptability. Selected
                candidates receive a Letter of Advice to Apply (LAA), moving
                them closer to obtaining permanent residency through federal
                processing.{" "}
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={skilledRef}>
              Key Streams of the Manitoba PNP
            </div>
            <div className="pages-paragraph">
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
                Skilled Worker Stream
                </div>
                <div className="my-5">
                  The Skilled Worker Stream targets individuals with skills
                  relevant to Manitoba’s labor market needs. It has two main
                  categories:
                </div>
                <strong>Skilled Workers in Manitoba (SWM)</strong>
                <ul className="my-3">
                  <li>
                    This category is for candidates already working in Manitoba
                    and having established connections within the province.
                  </li>
                  <li>
                    Applicants must have an ongoing job in Manitoba and meet the
                    EOI score requirements at the time of the application.
                  </li>
                  <li>
                    Candidates in this category benefit from quicker integration
                    into the workforce due to their familiarity with the
                    provincial economy and labour conditions.
                  </li>
                </ul>
                <strong>Skilled Workers Overseas (SWO)</strong>
                <ul className="my-3">
                  <li>
                    This pathway is for skilled workers with job offers from a
                    Manitoba employer or family connections within the province.
                  </li>
                  <li>
                    Applicants undergo a points-based selection and are required
                    to have skills in high-demand occupations.
                  </li>
                  <li>
                    The SWO pathway fills gaps in the labor market, drawing
                    skilled professionals from outside Canada to meet provincial
                    needs​.
                  </li>
                </ul>
            

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
               International Education Stream
               </div>
               <div className="mt-5">The International Education Stream targets recent graduates from Manitoba’s post-secondary institutions who are ready to contribute to the province’s economy. They must have work experience from after or during their graduation program.</div>
               <ul className="my-3">
                  <li>
                  Career Employment Pathway is for graduates who have secured full-time employment in Manitoba in fields relevant to the provincial economy.
                  </li>
                  <li>
                  Graduate Internship Pathway is open to master's and doctoral graduates with research or innovative experience, making them ideal candidates for Manitoba’s R&D sectors.

                  </li>
                  <li>
                  Student Entrepreneur Pilot allows graduates with entrepreneurial aspirations to establish businesses in Manitoba. This pathway offers support and resources to young entrepreneurs aiming to innovate within the province​

                  </li>
                </ul>
            

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >

             Business Investor Stream
             </div>
             <div className="mt-5">Manitoba’s Business Investor Stream enables individuals with business expertise to invest in Manitoba’s economy, whether in rural or urban areas. This stream is divided into two categories:</div>
               <ul className="my-3">
                  <li>
                  Entrepreneur Pathway is for entrepreneurs who plan to start or purchase a business in Manitoba. A Business Performance Agreement (BPA) is required, detailing the business’s operations and contributions to Manitoba’s economy.
                  </li>
                  <li>
                  Farm Investor Pathway encourages apcategory must demonstrate significant farming expertise and a viable business plan for establishing a farm​
                  </li>
                  plicants with farm management experience to invest in Manitoba’s agricultural sector, especially in rural regions. Applicants in this 
                </ul>
            

            </div>

            <div>
              {" "}
              <div className="my-5">
                In response to ongoing labor shortages, Manitoba implemented a
                public policy in 2024 allowing temporary foreign workers who are
                awaiting nomination to extend their work permits. This policy
                covers over 6,000 individuals, allowing them to remain employed
                while awaiting nomination, thereby minimizing labor market
                disruptions. Additional updates also emphasize a focus on
                in-demand occupations, ensuring that newcomers meet specific
                needs in healthcare, agriculture, and technology sectors. This
                focus on targeted skills underscores Manitoba’s commitment to
                strengthening its economy through tailored immigration
                policies​.
              </div>
            </div>
          </div>
          <ReadyToStartCard />
        </div>
      </div>
    </div>
  );
}

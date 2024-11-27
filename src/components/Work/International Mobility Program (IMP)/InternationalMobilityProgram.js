import React, { useRef } from "react";

import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      " What is the difference between the IMP and TFWP?",
    answer:
      "The Temporary Foreign Worker Program (TFWP) requires an LMIA, while the IMP does not. The TFWP focuses primarily on filling labor shortages, whereas the IMP emphasizes economic and cultural benefits.",
  },
  {
    question: "Can I apply for an open work permit under the IMP?",
    answer:
      "Yes, many streams within the IMP allow for open work permits, which enable you to work for any employer in Canada without restrictions.",
  },
  {
    question: " How long can I stay in Canada on an IMP work permit?",
    answer:
      "  The duration varies depending on the specific stream under which you apply; typically, it ranges from several months to three years.",
  },
];
export default function WorkinCanadawithoutaWorkPermit() {
  const WorkPermitRef = useRef(null);
  const AdditionalRef = useRef(null);
  const CategoriesRef = useRef(null);
  const TransfersRef = useRef(null);
  const InterestRef = useRef(null);
  const AgreementsRef = useRef(null);
  const WorkersRef = useRef(null);
  const ExemptionRef = useRef(null);


  const faqRef = useRef(null);

  const tableContentData = [
   {title: "What is an LMIA Exemption?",
  scrollTo: ExemptionRef,
  subItems: [
    {
      title: "Steps for Employers to Hire LMIA-Exempt Workers",
      scrollTo: WorkersRef,
    },
  ],
   },
    {
      title: "Categories of LMIA Exemptions",
      scrollTo: CategoriesRef,
      subItems: [
        {
          title: "International Agreements",
          scrollTo: AgreementsRef,
        },
        {
          title: "Canadian Interest Exemptions",
          scrollTo: InterestRef,
        },
        {
          title: "Intra-Company Transfers",
          scrollTo: TransfersRef,
        },
      ],
    },
    {
      title: "Additional Exemptions",
      scrollTo: AdditionalRef,
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

          type="W"
          h1="International Mobility Program (IMP)"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Work
              {" > "}Canada International Mobility Program

            </div>
            <div class="pages-header">Canada International Mobility Program
</div>
            <div class="pages-paragraph space-fix intro-size-fix">
            The International Mobility Program (IMP) is a key component of Canada's immigration strategy. It enables Canadian employers to hire foreign workers for temporary positions without the need for a Labour Market Impact Assessment (LMIA). This program is designed to facilitate the entry of skilled workers into Canada, promoting economic growth and cultural exchange.

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={ExemptionRef}>
            What is an LMIA Exemption?
            </div>
            <div className="pages-paragraph">
            An LMIA exemption indicates that a Canadian employer does not need to obtain an LMIA to hire a foreign worker. 
<ul className="my-3
">
  <li>It assesses whether hiring a foreign worker will negatively impact the Canadian job market. 
</li>
  <li>Under the IMP, specific categories of workers can bypass this requirement.
</li>
  <li>This requirement is based on the criteria set by Employment and Social Development Canada (ESDC) and Immigration, Refugees and Citizenship Canada (IRCC).
</li>

</ul>
LMIA exemptions are primarily based on two conditions:
<ul className="my-3
">
  <li>The employment of foreign workers should provide significant advantages to Canada's economy or cultural landscape.

</li>
  <li>There should be mutual benefits for Canadians and foreign nationals in terms of job opportunities.

</li>
  

</ul>
              </div>
             
            <div class="text-[30px]  mt-16 mb-5"  ref={WorkersRef}>
            Steps for Employers to Hire LMIA-Exempt Workers
            </div>
            Canadian employers must follow a structured process to hire foreign workers under the IMP:

              <ul className="my-3">
                <li>Confirm that the position or worker qualifies for an LMIA exemption.
.</li>
                <li>Submit an employer compliance fee of CAD 230.
</li>
                <li>
                Officially submit the job offer through the IMP’s Employer Portal.

                </li>
              </ul>
              Once these steps are completed, the foreign national can apply for a work permit. If the position falls under National Occupational Classification (NOC) Skill Level A or 0 and is applied from outside Canada, expedited processing may be available through the Global Skills Strategy.

              <div class="pages-header-2 my-3" ref={CategoriesRef}>
              Categories of LMIA Exemptions
            </div>
            The different categories of LMIA exemptions are as follows:


            <div class="text-[30px]  mt-8 mb-5" ref={AgreementsRef}>
            International Agreements
            </div>
            These agreements facilitate the transfer of certain professionals and skilled workers between nations. Notable agreements include:

            <ul className="my-3">
                <li>North American Free Trade Agreement (NAFTA)</li>
                
                <li>
                Canada-European Union Comprehensive Economic and Trade Agreement (CETA)


                </li>
                <li>General Agreement on Trade in Services (GATS)
</li>
              </ul>
              These agreements allow for smoother transitions of labor while ensuring that both Canadian and foreign workers benefit from reciprocal employment opportunities.

            <div class="text-[30px]  mt-16 mb-5" ref={InterestRef}>
            Canadian Interest Exemptions
            </div>
            Another major category includes exemptions based on Canadian interests, which focus on significant benefits to Canada. To qualify under this category, employers must demonstrate that hiring a foreign worker will yield substantial social, cultural, or economic advantages.

            <div class="text-[30px]  mt-16 mb-5" ref={TransfersRef}>
            Intra-Company Transfers
            </div>
            Intra-company transferees represent a specific case within this category. Companies can transfer employees from their foreign branches to Canadian locations if it enhances business operations in a way that benefits Canadians.

            <div class="pages-header-2 my-3" ref={AdditionalRef}>
            Additional Exemptions
            </div>
            Beyond international agreements and Canadian interests, other exemptions exist for humanitarian reasons or for specific candidates seeking permanent residency in Canada. These include:
            <ul className="my-3">
                <li><strong>Academic Positions:</strong> Researchers and visiting professors may qualify for exemptions.
</li>
                
                <li>
                <strong>Religious Workers:</strong> Individuals engaging in recognized charitable or religious work may also be exempt.



                </li>
                <li><strong>Humanitarian Cases:</strong> Certain refugees or individuals facing removal orders can apply for LMIA-exempt work permits.

</li>
              </ul>
              The International Mobility Program plays a crucial role in shaping Canada's labour market by allowing employers to hire skilled foreign workers without undergoing the lengthy LMIA process.  The processing time for work permits under the IMP can be as short as two weeks, compared to several months for LMIA-required permits.

            

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

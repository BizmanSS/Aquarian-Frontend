import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      " Do I need a work permit to apply for the NWT Employer Driven Stream?",
    answer:
      " Yes, most applicants must already hold a valid Canadian work permit.",
  },
  {
    question:
      "Is there an LMIA requirement for all streams under NWT Employer Driven pathway?",
    answer:
      "An LMIA is not required for the Skilled Worker Stream or for applicants with open work permits.",
  },
];

export default function NWTEmployerDrivenStream() {
  const keyRef = useRef(null);
  const criticalRef = useRef(null);
  const skilledRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Key Features of the Employer Driven Stream",
      scrollTo: keyRef,
      subItems: [
        {
          title: "Northwest Territories Critical Impact Worker Stream",
          scrollTo: criticalRef,
        },
        {
          title: "Northwest Territories Skilled Workers Stream",
          scrollTo: skilledRef,
        },
      ],
    },
    {
      title: "How to Apply to NWT Employer Driven Stream?",
      scrollTo: applyRef,
    },
    {
      title: "FAQs",
      scrollTo: faqRef,
    },
  ];


  const sectionRefs = useRef({});
  const location = useLocation();
 
 
  useEffect(() => {
    console.log(sectionRefs)
    const section = location.state?.section;
    if (section && sectionRefs.current[section]) {
      const offsetPosition = sectionRefs.current[section].offsetTop - 40;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [location]);

  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="Northwest Territories"
          h3="Northwest Territories Employer Driven"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Northwest Territories
              {" > "}Northwest Territories Employer Driven
            </div>
            <div class="pages-header">NWT Employer Driven Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Northwest Territories Employer Driven Stream is designed to
              address labor shortages in the region by allowing employers to
              recruit foreign nationals when qualified Canadians or permanent
              residents are unavailable. Applicants under this stream must meet
              the specific eligibility requirements of the course. This program
              is important for industries with critical skill gaps to secure the
              talent needed for sustainable operations. The different substreams
              under this pathway include:
              <ul>
                <li>Northwest Territories Critical Impact Workers</li>
                <li>Northwest Territories Skilled Workers</li>
              </ul>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={keyRef}>
              Key Features of the Employer Driven Stream
            </div>
            <div className="pages-paragraph">
              The NWT EDS is structured around 2 main categories including:
              <div className="my-3 font-bold text-[22px]" 
               ref={(el) => {
                criticalRef.current= el;
                sectionRefs.current['Northwest Territories Entry Level/ Semi-Skilled Occupation'] = el;
              }}
              >
                Northwest Territories Critical Impact Worker Stream
              </div>
              <div>This stream targets semi-skilled and unskilled workers (NOC Skill Levels C and D) to fill positions that cannot be filled by local labor. Applicants must have at least 6 months of work experience under a temporary foreign worker permit.</div>

              <div className="my-3 font-bold text-[22px]" 
               ref={(el) => {
                skilledRef.current= el;
                sectionRefs.current['Northwest Territories Skilled Workers'] = el;
              }}
              >
                Northwest Territories Skilled Workers Stream
              </div>
              <div>The stream attracts skilled workers (NOC Skill Levels 0, A, or B). Candidates need to have a job offer from an NWT employer in a skilled position. Employers must demonstrate their inability to find suitable Canadian candidates.</div>

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={applyRef}>How to Apply to NWT Employer Driven Stream?</div>

            <div class="pages-paragraph">
              The application process begins with securing a job offer from an NWT employer. Once this is achieved, employers can submit their applications under one of the three streams.
              <ul className="my-3">
                <li>Candidates must obtain a formal job offer from an eligible employer.</li>
                <li>The employer submits an application to nominate the foreign worker.</li>
                <li>Upon approval, nominees can apply for permanent residency through IRCC.</li>
              </ul>

              The NWT faces significant labor shortages, particularly in sectors such as healthcare, construction, and hospitality. Approximately 70% of nominations under this stream are for skilled positions, highlighting its focus on addressing critical workforce needs.
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

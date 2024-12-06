import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "Can I apply directly to the New Brunswick Critical Worker Pilot (NBCWP) as an individual?",
    answer:
      "No, the NBCWP does not accept direct applications. Interested candidates must be recruited by one of the participating employers, who will initiate the application process on their behalf.",
  },
  {
    question: "Is language proficiency mandatory for both the AIP and NBCWP?",
    answer:
      "Yes, both programs have language requirements. For the AIP, a minimum CLB level of 4 in English or French is needed. The NBCWP requires a similar language standard, with participating employers providing additional language training if necessary.",
  },

  {
    question:
      "Are family members eligible to accompany me if I am accepted under one of these programs?",
    answer:
      "Yes, family members, including spouses and dependent children, can often accompany successful applicants under both the AIP and NBCWP. However, they may need to meet certain requirements and apply for the appropriate permits or visas.",
  },
];

export default function EmployerStreams() {
  const newRef = useRef(null);
  const eligibilityRef = useRef(null);
  const participatingRef= useRef(null);
  const atlanticRef = useRef(null);
  const aipEligibilityRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "New Brunswick Critical Worker Pilot (NBCWP)",
      scrollTo: newRef,
      subItems: [
        {
          title: "Eligibility Requirements",
          scrollTo: eligibilityRef,
        },
        {
          title: "Participating Employers",
          scrollTo: participatingRef,
        },
      ],
    },
    {
      title:
        "Atlantic Immigration Program (AIP)",
      scrollTo: atlanticRef,
      subItems: [
        {
          title: "Eligibility Requirements",
          scrollTo: aipEligibilityRef,
        },
       
      ],
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
          h2="New Brunswick"
          h3="Employer Streams"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}New Brunswick
              {" > "}Employer Streams
            </div>
            <div class="pages-header">New Brunswick Employer Streams</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            New Brunswick has immigration pathways to address its regional labor shortages and attract skilled foreign workers. Among the most prominent employer-driven immigration streams are the Atlantic Immigration Program (AIP) and the New Brunswick Critical Worker Pilot (NBCWP). Successful candidates are eligible to settle and work in New Brunswick, contributing to the province’s economic growth and cultural diversity. The streams are designed to support employers in hiring foreign talent to fill labor shortages. Employers play a key role in the recruitment, application, and settlement process for foreign workers.
             
            
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" 
             ref={(el) => {
              newRef.current= el;
              sectionRefs.current['New Brunswick Critical Worker Pilot'] = el;
            }}
            >
            New Brunswick Critical Worker Pilot (NBCWP)
            </div>
            <div className="pages-paragraph">
            The New Brunswick Critical Worker Pilot is a five-year pilot program launched in 2022. It is aimed at addressing critical labor shortages in manufacturing, fisheries, forestry, and farming sectors. NBCWP is an entirely employer-driven program with selected companies sponsoring eligible foreign workers and providing settlement support.

            <ul className="my-2 ">
                <li>
                The pilot involves six key New Brunswick employers committed to supporting candidates' integration.
                </li>

                <li>
                Employers provide assistance with housing, language training, and other integration needs.
                </li>

              </ul>

              <div className='font-bold my-2'>Eligibility Requirements</div>
              <ul className="my-2">
               
                <li>
                Candidates must be recruited by one of the six approved employers.
                </li>

                <li>
                Employers ensure language training (up to 200 hours) and help with obtaining Canadian education equivalency.
                </li>

                <li>
                Applicants must have a minimum high school diploma and relevant work experience.
                </li>

                <li>
                The program is aimed at workers intending to live long-term in New Brunswick, and employers provide extensive settlement support to facilitate this.
                </li>

              </ul>

              Interested applicants cannot apply directly; they must be recruited by one of the participating employers. After securing employment through the pilot, workers may receive support in applying for work permits and eventually permanent residency.

              <div className='font-bold my-2'>Participating Employers</div>
              <ul className="my-2 ml-3">
               
                <li>
                Cooke Aquaculture Inc.
                </li>

                <li>
                Groupe Savoie Inc.
                </li>

                <li>
                Groupe Westco
                </li>

                <li>
                Imperial Manufacturing
                </li>

                <li>
                J.D. Irving Ltd.
                </li>

                <li>
                McCain Foods
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

            <div className="pages-header-2" 
             ref={(el) => {
              atlanticRef.current= el;
              sectionRefs.current['New Brunswick Atlantic Immigration Pilot (AIP)'] = el;
            }}
            >
            Atlantic Immigration Program (AIP)
            </div>
            <div className="pages-paragraph">
            The Atlantic Immigration Program is a collaborative initiative between the Government of Canada and the 4 Atlantic provinces: New Brunswick, Newfoundland and Labrador, Nova Scotia, and Prince Edward Island. It aims to meet the labor demands in these provinces by offering a straightforward immigration pathway for skilled foreign workers and international graduates from Atlantic Canadian institutions.
            <div className='font-bold my-2'>Eligibility Requirements</div>
            <ul className="my-2">
               
                <li>
                The candidate must have a job offer from a designated employer within New Brunswick.
                </li>

                <li>
                For job offers classified under NOC TEER categories 2, 3, or 4, a CLB level of 4 is required. However, for NOC TEER categories 0 or 1, a higher CLB level of 5 is necessary.
                </li>

                <li>
                A high school diploma or post-secondary education equivalent to Canadian standards.
                </li>

                <li>
                At least one year of work experience within the past five years in a related occupation.
                </li>

                <li>
                Proof of funds to support oneself and dependents upon arrival, though candidates already living and working in New Brunswick may be exempt.
                </li>

              </ul>

              Applicants must receive a job offer from a designated employer within New Brunswick. Candidates apply for endorsement through the province after securing a job offer.

           

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

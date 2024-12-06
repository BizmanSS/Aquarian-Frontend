
import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What types of businesses are ineligible under the NB BIS?",
    answer:
      "Certain businesses are considered ineligible for the NB BIS, including:",
      listAnswer:[
        'Non-profit organizations.',
        'Real estate investments intended solely for passive income.',
        'Businesses that promote or sell illegal products.',
        'Seasonal operations and home-based businesses with limited revenues',
      ]
  },
  {
    question:
      " What is the timeline for processing applications under the NB BIS?",
    answer:
      "Processing times for applications under the NB BIS can vary but typically take longer than those aligned with Express Entry programs, often exceeding one year.",
  },
];

export default function BuisnessStream() {
  const keyRef = useRef(null);
  const eligibilityRef = useRef(null);
  const  stepRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Key Stream Under New Brunswick Business Immigration",
      scrollTo: keyRef,
    },
    {
      title: "Eligibility Criteria for New Brunswick Business Immigration Stream",
      scrollTo: eligibilityRef,
    },
    {
      title: "Step-by-Step Process for New Brunswick Business Immigration Program",
      scrollTo: stepRef,
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
          h3="Business Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}New Brunswick
              {" > "}Business Stream
            </div>
            <div class="pages-header">New Brunswick Business Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The New Brunswick Business Immigration Stream (NB BIS) under the New Brunswick Provincial Nominee Program (NBPNP) targets international entrepreneurs aiming to invest and manage businesses in New Brunswick. Successful candidates nominated through this stream can apply for Canadian permanent residency. NB BIS has longer processing times, taking over a year.
            <div className='my-3'>To qualify, a business must benefit New Brunswick economically and be structured as a sole proprietorship, partnership, or corporation. Businesses must be private-sector, for-profit ventures aimed at generating income through goods or services. Eligible Candidates must hold at least one-third ownership and be involved in daily management.</div>

            Applicants must fulfill a job creation requirement by creating at least 2 permanent, full-time jobs for a Canadian citizen or permanent resident in the province. Applicants with connections to New Brunswick are given priority consideration.

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2"
             ref={(el) => {
              keyRef.current= el;
              sectionRefs.current['New Brunswick Business Immigration Stream'] = el;
            }}
            >
            Key Stream Under New Brunswick Business Immigration
            </div>
            <div className="pages-paragraph">
       
              The New Brunswick Business Immigration Stream consists of different categories based on investment levels and business operations. 
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={eligibilityRef}>
            Eligibility Criteria for New Brunswick Business Immigration Stream
            </div>
            <div className="pages-paragraph">
            Applicants must demonstrate a commitment to establishing or purchasing an existing business in New Brunswick. This business must be a for-profit entity with a focus on creating economic benefits for the province.
              <ul className="my-2 ml-3">
                <li>
                Candidates must be willing to own at least 33.3% of the business equity.
                </li>

                <li>
                The applicant must have an active management role in the business. This means the entrepreneur is expected to be hands-on and involved in the day-to-day operations.

                </li>

                <li>
                Applicants must create at least one full-time, permanent job for a Canadian citizen or permanent resident.

                </li>

                <li>
                A minimum of $150,000 CAD is required to invest in the business, with additional investment possible based on the scale of the business and the business model.

                </li>

              </ul>
           <div className='mb-3'>Applicants wishing to settle in New Brunswick for business purposes may be required to undertake an exploratory visit before their application. This visit allows the applicant to assess potential business opportunities and familiarize themselves with the local market.</div>

           The program gives priority to entrepreneurs interested in sectors like agriculture, manufacturing, information technology, tourism, and natural resources. Certain sectors, such as adult services and some consulting or e-commerce businesses, are ineligible.
            </div>

            <div class="pages-header-2" ref={stepRef}>Step-by-Step Process for New Brunswick Business Immigration Program</div>
            <div class="pages-paragraph">
           
              <ul className="my-2 ml-3">
                <li>
                To begin, applicants must submit an Expression of Interest (EOI) to the New Brunswick Business Immigration Program. 
                </li>

                <li>
                If the EOI is successful, candidates will be invited to submit a full application to the New Brunswick Provincial Nominee Program with supporting documents, including a detailed business plan, financial records, and proof of ownership/operation.
                </li>

                <li>
                If the application meets the program’s requirements, the applicant will be nominated for permanent residency by the provincial government.
                </li>

                <li>
                After receiving the nomination, applicants can apply to the Immigration, Refugees and Citizenship Canada (IRCC) for permanent residency. 
                </li>
                <li>
                Once granted permanent residency, the applicant must relocate to New Brunswick and fulfill the conditions of active business operation.
                </li>

              </ul>
              This stream supports New Brunswick's economy by encouraging new businesses that contribute to job creation, innovation, and economic diversification. The business immigration process involves significant investment and commitment. Entrepreneurs must be prepared to take an active role in their business and meet ongoing operational requirements. The processing time for applications under the New Brunswick Business Immigration Stream can be lengthy, often taking more than a year due to thorough review procedures.
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

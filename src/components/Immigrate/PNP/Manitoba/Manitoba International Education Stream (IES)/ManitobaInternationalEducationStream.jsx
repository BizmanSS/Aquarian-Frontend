import React, { useRef , useEffect} from "react";
import { useLocation } from 'react-router-dom';

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      " Can I apply for the IES if I have a job offer outside the In-Demand Occupations list?",
    answer:
      "No. For the Career Employment Pathway, the job offer must be in one of Manitoba’s in-demand occupations. However, the other pathways, such as the Graduate Internship Pathway or Entrepreneur Pilot, have different criteria and may not require an in-demand occupation.",
  },
  {
    question:
      " Do I need work experience in Manitoba before applying to the IES?",
    answer:
      "For the Career Employment Pathway, work experience in Manitoba is not required if you have a qualifying job offer. However, for the other pathways, work experience may not be necessary, especially if you are pursuing the Graduate Internship Pathway.",
  },
  {
    question:
      "Can I apply for permanent residency under the IES while holding a temporary work permit?",
    answer:
      "Yes, candidates in the International Student Entrepreneur Pilot must operate their business on a temporary work permit before they are eligible to apply for permanent residency.",
  },
];

const internationalTableData = [
  {
    criterion:"Business Experience",
    requirement:"Business plan required. Must operate business as a senior manager for 6+ months with at least 51% ownership."
  },
  {
    criterion:"Official Language Proficiency",
    requirement:"Minimum CLB/NCLC 7."
  },
  {
    criterion:"Education",
    requirement:"Full-time, 2-year post-secondary program in Manitoba"
  },
  {
    criterion:"Age",
    requirement:"Between 21 - 35 years old."
  },
  {
    criterion:"Adaptability",
    requirement:"Valid open work permit; continuous residency in Manitoba since graduation; intent to stay post-nomination."
  },
  {
    criterion:"Net Worth/Settlement Funds",
    requirement:"No deposit required; net worth not mandatory but must show liquid funds for 12 months (based on LICO). "
  },
  {
    criterion:"Business Performance Agreement",
    requirement:"Must sign a BPA before receiving approval."
  },
];

const careerTableData= [
  {
    criterion:"Education",
    requirement:"Graduated in last 3 years from a Manitoba institution, minimum 1-year program."
  },
  {
    criterion:"Language Proficiency",
    requirement:"Minimum CLB/NCLC 7."
  },
  {
    criterion:"Employment in Manitoba",
    requirement:"Full-time job offer in Manitoba in a TEER 0-3 occupation with a 1-year contract. "
  },
  {
    criterion:"Settlement Funds",
    requirement:"LICO for 6 months or have long-term full-time job."
  },
  {
    criterion:"Adaptability",
    requirement:"Must reside in Manitoba and intent to remain. "
  },
]

const graduateTableData= [
  {
    criterion:"Education",
    requirement:"Master’s or doctoral degree from a Manitoba institution within the last 3 years."
  },
  {
    criterion:"Language Proficiency",
    requirement:"Minimum CLB/NCLC 7."
  },
  {
    criterion:"Internship",
    requirement:"Completed Mitacs Elevate or Accelerate (incl. Entrepreneur) with eligible Manitoba enterprise."
  },
  {
    criterion:"Employment",
    requirement:"No job offer required at application time."
  },
  {
    criterion:"Settlement Funds",
    requirement:"Liquid funds for 6 months (LICO) or full-time long-term employment. "
  },
  {
    criterion:"Adaptability",
    requirement:"Must reside in Manitoba and show intent to remain via Career Employment Plan."
  },
]

export default function ManitobaInternationalEducationStream() {
  const skilledRef = useRef(null);
  const manitobaRef = useRef(null);
  const employerRef = useRef(null);
  const faqRef = useRef(null);

  
  const sectionRefs = useRef({});
  const location = useLocation();

  const tableContentData = [
    {
      title: "Manitoba Career Employment Pathway",
      scrollTo: skilledRef,
    },
    {
      title: "Manitoba Graduate Internship Pathway",
      scrollTo: manitobaRef,
    },
    {
      title: "Manitoba International Student Entrepreneur Pilot",
      scrollTo: employerRef,
    },
    {
      title: "FAQs",
      scrollTo: faqRef,
    },
  ];

  useEffect(() => {
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
          h2="Manitoba"
          h3="Manitoba International Education Stream (IES)"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Manitoba
              {" > "}Manitoba International Education Stream (IES)
            </div>
            <div class="pages-header">Manitoba International Education Stream (IES)
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Manitoba International Education Stream (IES) provides an
              expedited pathway for international students to permanent
              residency in Canada. The stream targets candidates who have
              graduated from post-secondary institutions in the Manitoba
              province. The Manitoba IES includes 3 pathways of Manitoba
              Provincial Nominee Program (MPNP), a PNP of the province of
              Manitoba in Canada.
              <div className="my-3">
                The streams focus on graduates who have the potential to
                contribute to the Manitoba economy. It retains skilled talents
                who are locally educated. The stream is divided into three
                pathways: the Manitoba Career Employment Pathway, Manitoba
                Graduate Internship Pathway, and the Manitoba International
                Student Entrepreneur Pilot.{" "}
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={(el) => {
                skilledRef.current= el;
                sectionRefs.current['Manitoba Career Employment Pathway'] = el;
              }}>
              Manitoba Career Employment Pathway
            </div>
            <div className="pages-paragraph">
              This pathway is designed for international graduates from
              post-secondary institutions in Manitoba who have secured
              long-term, full-time employment in the province.
              <ul className="my-3">
                <li>
                  The job must be in-demand according to Manitoba’s In-Demand
                  Occupations list.
                </li>
                <li>
                  Applicants are required to apply within two years of
                  graduation.
                </li>
                <li>
                  Graduates can benefit from an expedited process without
                  requiring six months of work experience before applying.
                </li>
              </ul>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
                Eligibility
              </div>

              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criterion</th>
                        <th>Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {careerTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.criterion}</td>
                          <td>{row.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>


            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={(el) => {
                manitobaRef.current= el;
                sectionRefs.current['Manitoba Graduate Internship Pathway'] = el;
              }}>
            Manitoba Graduate Internship Pathway
            </div>
            <div className="pages-paragraph">
            The Manitoba Graduate Internship Pathway targets graduates who have completed a master’s or PhD program in Manitoba within last 3 years and have completed an internship with Mitacs, a national research organization. 
              <ul className="my-2 ml-3">
                <li>
                This pathway doesn’t require a job offer; instead, it focuses on those who have shown their potential through research experience. 
                </li>

                <li>
                The aim is to keep highly skilled researchers and innovators in Manitoba to contribute to the province's economic growth.
                </li>
              </ul>

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
                Eligibility
              </div>


              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criterion</th>
                        <th>Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {graduateTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.criterion}</td>
                          <td>{row.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            <div className="pages-header-2" ref={(el) => {
                employerRef.current= el;
                sectionRefs.current['Manitoba International Student Entreprenuer Pilot'] = el;
              }}>
            Manitoba International Student Entrepreneur Pilot
            </div>
            <div className="pages-paragraph">
            This Manitoba International Student Entrepreneur Pilot Pathway is for entrepreneurial-minded graduates who have completed a post-secondary education program in Manitoba and have at least 6 months of experience in managing/owning a business.

              <ul className="my-2 ml-3">
                <li>
                These are for candidates looking to start a business in the province. 
                </li>

                <li>
                Candidates must submit a business plan, operate their business while holding a temporary work permit, and apply for permanent residency after meeting the business performance expectations.
                </li>
              </ul>

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
                Eligibility
              </div>

              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criterion</th>
                        <th>Requirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {internationalTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.criterion}</td>
                          <td>{row.requirement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='my-5'>The Manitoba International Education Stream is an option for international graduates who want to build their careers or businesses in the province. By focusing on graduates with job-ready skills, research experience, or entrepreneurial ambitions, Manitoba aims to retain talent and ensure the long-term growth of its economy.</div>

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

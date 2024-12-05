import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What is the New Brunswick Express Entry Stream?",
    answer:
      "The New Brunswick Express Entry Stream allows skilled workers with a valid Express Entry profile to apply for provincial nomination, facilitating their immigration process to Canada. Applicants must meet specific eligibility criteria, including work experience and education related to New Brunswick's labor market needs.",
  },
  {
    question:
      "What are the requirements for the New Brunswick Strategic Initiative Stream?",
    answer:
      "The New Brunswick Strategic Initiative Stream requirements include having a full-time job offer in a priority occupation and demonstrating language proficiency.",
  },
];

export default function CandidateStreams() {
  const eeRef = useRef(null);
  const strategicRef = useRef(null);
  const privateRef = useRef(null);
  const skilledRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "New Brunswick Express Entry Stream",
      scrollTo: eeRef,
    },
    {
      title: "New Brunswick Strategic Initiative Stream",
      scrollTo: strategicRef,
    },
    {
      title: "New Brunswick Private Career College Graduate Pilot Program",
      scrollTo: privateRef,
    },
    {
      title: "New Brunswick Skilled Worker Stream",
      scrollTo: skilledRef,
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
          h3="Candidate Streams"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}New Brunswick
              {" > "}Candidate Streams
            </div>
            <div class="pages-header">New Brunswick Candidate Streams</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The New Brunswick Candidate Streams offer different pathways for
              individuals to immigrate to New Brunswick. Each of the streams
              targets unique candidate profiles based on skills, education, work
              experience, and adaptability. The substreams include the New
              Brunswick Express Entry Stream, Strategic Initiative Stream,
              Private Career College Graduate Pilot Program, and Skilled Worker
              Stream. Each stream has distinct eligibility criteria and
              application processes as discussed below.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" 
            
            ref={(el) => {
              eeRef.current= el;
              sectionRefs.current['New Brunswick Express Entry Stream'] = el;
            }}>
              New Brunswick Express Entry Stream
            </div>
            <div className="pages-paragraph">
              The Express Entry Stream allows candidates with a profile in
              Canada’s Express Entry system to apply for provincial nomination
              from New Brunswick. This stream awards points based on age,
              language proficiency, education, and work experience. To be
              eligible, candidates need:

              <ul className="my-3">
                <li>
                A valid job offer from a New Brunswick employer, relevant work experience, and a strong intent to reside in the province.
                </li>
                <li>
                Have a valid Federal Express Entry profile and Job Seeker Validation Code.
                </li>
                <li>
                Hold a job categorized under NOC (National Occupational Classification) TEER categories 0, A, or B.
                </li>
                <li>
                Provide valid language test scores (minimum CLB 7) in English or French.
                </li>
                <li>
                Submit an Educational Credential Assessment (ECA) showing equivalency to at least a Canadian high school diploma.
                </li>
              </ul>

             Candidates who meet the eligibility requirements and achieve high scores may receive a nomination, significantly boosting their chances for permanent residency in Canada through the federal Express Entry system​.
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
              strategicRef.current= el;
              sectionRefs.current['New Brunswick Strategic Initiative Stream'] = el;
            }}
            >
            New Brunswick Strategic Initiative Stream
            </div>
            <div className="pages-paragraph">
            The Strategic Initiative Stream is for individuals with specific skills or qualifications that meet the province's labor market needs. This stream focuses on attracting immigrants who can fill job vacancies in critical sectors.
              <ul className="my-2 ml-3">
                <li>
                This is beneficial for candidates with job offers from New Brunswick employers or those who have skills in high-demand occupations.
                </li>

                <li>
                Applicants may also be eligible if they have previously studied in New Brunswick or have family connections in the province.

                </li>

              </ul>
              Candidates must demonstrate their ability to contribute to the local economy and meet specific eligibility criteria related to their employment and skills.
            </div>

            <div class="pages-header-2"
             ref={(el) => {
              privateRef.current= el;
              sectionRefs.current['New Brunswick Private Career College Graduate Pilot Program'] = el;
            }}
            >New Brunswick Private Career College Graduate Pilot Program</div>
            <div class="pages-paragraph">
            This newer pilot program targets graduates from private career colleges in New Brunswick. It aims to retain skilled graduates within the province.
              <ul className="my-2 ml-3">
                <li>
                Eligible candidates must have completed a program at an approved private college and hold a post-graduation work permit. 
                </li>

                <li>
                They also need a valid job offer from a New Brunswick employer in a field related to their study.
                </li>

              </ul>
              This program aims to retain skilled graduates in the province, supporting both workforce needs and economic growth by providing a path to permanent residency for international students who study in New Brunswick​.
            </div>

            <div class="pages-header-2"
             ref={(el) => {
              skilledRef.current= el;
              sectionRefs.current['New Brunswick Skilled Worker Stream'] = el;
            }}
            >
            New Brunswick Skilled Worker Stream
            </div>
            <div className="pages-paragraph">
            The Skilled Worker Stream is aimed at individuals with a job offer from a New Brunswick employer who can contribute to the provincial economy. 
              <ul className="my-2 ml-3">
                <li>
                Candidates must show language proficiency (in English or French), relevant work experience, and a clear intention to reside in New Brunswick.
                </li>

                <li>
                They must also have a settlement plan that outlines their intentions for integrating into the community and finding housing and employment. 
                </li>
              </ul>
              Following an Expression of Interest (EOI) and an invitation to apply (ITA), candidates can apply for a provincial nomination, which, if granted, allows them to apply for permanent residency through the federal process​.
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

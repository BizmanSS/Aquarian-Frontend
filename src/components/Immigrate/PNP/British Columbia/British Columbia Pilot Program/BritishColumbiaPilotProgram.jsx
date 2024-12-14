import React, { useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "How long does it take to get an invitation under the BC PNP Tech Pilot?",
    answer: " The BC PNP Tech Pilot conducts weekly draws and successful applicants usually receive invitations within a few weeks of registering, depending on their ranking score and occupation demand.",
  },
  {
    question:
      "What happens if my job offer expires before the immigration process is complete?",
    answer:
      " Your job offer must be valid for at least 120 days from the date of your application submission. If your job offer expires before the immigration process concludes, it may affect your eligibility, and you may need to secure a new job offer.",
  },
];

export default function BritishColumbiaPilotProgram() {
  const britishRef = useRef(null);
  const techRef = useRef(null);
  const eligibleRef = useRef(null);
  const criteriaRef = useRef(null);
  const rankingRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "British Columbia Pilot Program",
      scrollTo: britishRef,
    },
    {
      title: "British Columbia PNP Tech Pilot",
      scrollTo: techRef,
      subItems: [
        {
          title: "Eligible Occupations under BC PNP Tech",
          scrollTo: eligibleRef,
        },
      ],
    },
    {
      title: "Eligibility Criteria for British Columbia Pilot Programs",
      scrollTo: criteriaRef,
    },
    {
      title: "Ranking System",
      scrollTo: rankingRef,
    },
    {
      title: "FAQ's",
      scrollTo: faqRef,
    },
  ];

  const rankingTableData= [
     {
      criteria:"Job Offer",
      points:"Up to 50 points based on wage and skill level"
     },
     {
      criteria:"Work Experience",
      points:"Up to 25 points"
     },
     {
      criteria:"Education",
      points:"Up to 25 points based on qualifications and degrees"
     },
     {
      criteria:"Language Proficiency",
      points:"Up to 30 points based on CLB levels"
     },
     {
      criteria:"Regional Development",
      points:"Up to 10 points for job offers in rural BC areas"
     },
  ]

  const occupationTableData= [
    {
     criteria:"131",
     points:"Telecommunications Carriers Managers"
    },
    {
     criteria:"213",
     points:"Computer and Information Systems Managers"
    },
    {
     criteria:"512",
     points:"Managers - Publishing, Motion Pictures, Broadcasting, and Performing Arts"
    },
    {
     criteria:"2131",
     points:"Civil Engineers"
    },
    {
     criteria:"2132",
     points:"Mechanical Engineers"
    },
    {
      criteria:"2133",
      points:"Electrical and Electronics Engineers"
     },
     {
      criteria:"2134",
      points:"Chemical Engineers"
     },
     {
      criteria:"2147",
      points:"Computer Engineers (Except Software Engineers and Designers)"
     },

     {
      criteria:"2171",
      points:"Information Systems Analysts and Consultants"
     }, {
      criteria:"2172",
      points:"Database Analysts and Data Administrators"
     },
     {
      criteria:"2173",
      points:"Software Engineers and Designers"
     },
     {
      criteria:"2174",
      points:"Computer Programmers and Interactive Media Developers"
     },
     {
      criteria:"2175",
      points:"Web Designers and Developers"
     },
     {
      criteria:"2221",
      points:"Biological Technologists and Technicians"
     },
     {
      criteria:"2241",
      points:"Electrical and Electronics Engineering Technologists and Technicians"
     },
     {
      criteria:"2242",
      points:"Electronic Service Technicians (Household and Business Equipment)"
     },
     {
      criteria:"2243",
      points:"Industrial Instrument Technicians and Mechanics"
     },
     {
      criteria:"2281",
      points:"Computer Network Technicians"
     },
     {
      criteria:"2282",
      points:"User Support Technicians"
     },
     {
      criteria:"2283",
      points:"Information Systems Testing Technicians"
     },
     {
      criteria:"5121",
      points:"Authors and Writers"
     },
     {
      criteria:"5122",
      points:"Editors"
     },
     {
      criteria:"5125",
      points:"Translators, Terminologists, and Interpreters"
     },
     {
      criteria:"5224",
      points:"Broadcast Technicians"
     },
     {
      criteria:"5225",
      points:"Audio and Video Recording Technicians"
     },
     {
      criteria:"5226",
      points:"Other Technical and Coordinating Occupations in Motion Pictures, Broadcasting, and Performing Arts"
     },
     {
      criteria:"5227",
      points:"Support Occupations in Motion Pictures, Broadcasting, Photography, and Performing Arts"
     },
     {
      criteria:"5241",
      points:"Graphic Designers and Illustrators"
     },
     {
      criteria:"6221",
      points:"Technical Sales Specialists - Wholesale Trade"
     },


 ]

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
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="British Columbia"
          h3="British Columbia Pilot Program"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}British Columbia
              {" > "}British Columbia Pilot Program
            </div>
            <div class="pages-header">British Columbia Pilot Program</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              British Columbia Pilot Program and the Tech Pilot are key elements
              of the British Columbia Provincial Nomination Program. The program
              is designed to address the province’s evolving labor market needs,
              particularly in high-demand sectors. BC PNP Tech allows candidates
              with job offers in in-demand tech occupations to apply for
              provincial nomination with expedited processing through the BC
              PNP. The applicants can be invited to submit a permanent residence
              application. The BC PNP Tech is not an immigration program in
              itself. Instead, it provides accelerated application processing
              and additional benefits for candidates who are already eligible
              and have registered a profile under one of the BC PNP Skills
              Immigration programs. To qualify for the BC PNP Tech, candidates
              must meet specific requirements related to their job offers and
              occupation categories.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={britishRef}>
              British Columbia Pilot Program
            </div>
            <div className="pages-paragraph">
            The British Columbia Pilot Program targets immigrants with skills and experience that align with specific labor market needs in the province. Initially launched as a response to regional labor shortages, this program focuses on attracting talent to sectors where the demand for workers surpasses the local supply.
         <ul>
          <li>It focuses on sectors with a high demand for skilled workers.</li>
          <li>It provides opportunities for professionals in industries like healthcare, construction, education, and high-tech sectors.</li>
         </ul>
            </div>


            <div class="pages-header-2"
            ref={(el) => {
              techRef.current= el;
              sectionRefs.current['British Columbia PNP Tech Pilot'] = el;
            }}
            >
              British Columbia PNP Tech Pilot
            </div>
            <div className="pages-paragraph">
            The BC PNP Tech Pilot is a specialized stream under the British Columbia PNP designed to attract technology professionals to the province’s booming tech industry. With a thriving technology sector, BC aims to address its labor shortages by inviting talented workers in specific tech occupations.
         <ul>
          <li>The program is open to individuals in 29 in-demand technology occupations, including software engineers, web developers, and information systems analysts.</li>
          <li>The Tech Pilot provides priority processing for tech professionals, ensuring quicker immigration outcomes for eligible candidates.</li>
          <li>Applicants must have a valid job offer in one of the eligible tech occupations, which must be for at least one year and have at least 120 days remaining at the time of application.</li>
         </ul>
            </div>

            <div style={{
              fontWeight:'bold',
              fontSize:'22px',
              margin:"35px 0"
            }} ref={eligibleRef}>
            Eligible Occupations under BC PNP Tech 
            </div>

            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criteria</th>
                        <th>Points Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {occupationTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.criteria}</td>
                          <td>{row.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={criteriaRef}>
              Eligibility Criteria for British Columbia Pilot Programs
            </div>
            <div className="pages-paragraph">
            Both programs operate under the BC PNP umbrella, and their
                  eligibility requirements are designed to ensure that
                  applicants can contribute to the province’s economic growth.
              <div>
                <ol style={{
                  listStyleType:"decimal",
                  marginLeft:"18px"
                }}>
                  <li>
                  <strong>British Columbia Pilot Program</strong>
                  <ul>
                    <li>Must have a job offer from an eligible BC employer in a high-demand occupation.</li>
                    <li>Must meet language proficiency requirements (CLB level 4 or higher, depending on occupation).</li>
                    <li>Must have relevant work experience or education in the field of the job offer.</li>
                  </ul>
                  </li>

                  <li>
                  <strong>BC PNP Tech Pilot</strong>
                  <ul>
                    <li>Must have a valid job offer in one of 29 eligible tech occupations.</li>
                    <li>Must have at least 2 years of relevant work experience in the tech sector.</li>
                    <li>Language proficiency may be required depending on the job offered.</li>
                  </ul>
                  </li>
                </ol>
                
              </div>
            </div>

            <div className="pages-header-2" ref={rankingRef}>
              Ranking System
            </div>
            <div className="pages-paragraph">
              The BC PNP Tech Pilot and British Columbia Pilot Program follow a
              Skills Immigration Registration System (SIRS), which ranks
              candidates based on several factors:
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criteria</th>
                        <th>Points Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rankingTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.criteria}</td>
                          <td>{row.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              The SIRS score determines whether a candidate receives an
              invitation to apply for provincial nomination. BC PNP Tech
              applicants benefit from several advantages during the provincial
              nomination process. Firstly, additional invitation rounds are held
              weekly for eligible Tech candidates. Secondly, their PNP
              applications are processed more quickly. Lastly, employers can use
              the program’s "concierge services" to streamline the hiring of
              foreign nationals through the Tech program.
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

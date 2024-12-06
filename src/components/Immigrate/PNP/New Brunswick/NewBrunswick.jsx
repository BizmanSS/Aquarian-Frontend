import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";

import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";


export default function NewBrunswick() {
  const candidateRef = useRef(null);
  const businessRef = useRef(null);
  const employerRef = useRef(null);


  const tableContentData = [
    {
      title: "New Brunswick Candidate Streams",
      scrollTo: candidateRef,
    },
    {
      title: "New Brunswick Business Stream",
      scrollTo: businessRef,
    },
    {
      title: "New Brunswick Employer Streams",
      scrollTo: employerRef,
    },
  
  ];

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
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}New Brunswick Provincial Nominee Program (NBPNP)
            </div>
            <div class="pages-header">New Brunswick Provincial Nominee Program (NBPNP)
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            New Brunswick, one of Canada's Atlantic provinces, is known for its rich culture with great economic opportunities. It is the only officially bilingual province in Canada, with approximately 29.5% of its population speaking French as their first language, The province's strategic location, bordered by Quebec, Nova Scotia, and the U.S. state of Maine, with its affordable cost of living, make it an attractive destination for immigration.
              <div className="my-3">
              New Brunswick Provincial Nominee Program (NBPNP) enables the province to nominate individuals with the skills and experience required to contribute to its economic development. NBPNP is aligned with the federal Express Entry system, allowing for expedited processing of applications for certain streams.
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={candidateRef}>
            New Brunswick Candidate Streams
            </div>
            <div className="pages-paragraph">
            The NBPNP offers several streams to attract skilled workers and graduates:
              <ul className="my-3 ml-3">
                <div className='mb-2'> <strong>New Brunswick Express Entry Stream: </strong>This stream is aligned with the federal Express Entry system. It targets candidates with the skills, education, and work experience needed in New Brunswick. </div>
               
                <li>
                Applicants must maintain an active Express Entry profile.
                </li>
                <li>
                They must demonstrate language proficiency (CLB 7 or higher) and education requirements such as a Canadian secondary diploma or its foreign equivalent, supported by an Educational Credential Assessment (ECA) if applicable. 
                </li>
                <li>
                Candidates must also demonstrate relevant work experience in an occupation that is in demand in New Brunswick.
                </li>
              </ul>

              <ul className="my-3">
                <div className='mb-2'> <strong>New Brunswick Strategic Initiative Stream: </strong>This stream focuses on French-speaking workers who can contribute to the province's economy and are prepared to live and work in New Brunswick permanently. </div>
               
                <li>
                To qualify, applicants must be at least 19 years old.
                </li>
                <li>
                They must have a minimum of NCLC 5 proficiency in French across all language skills, and have at least a Canadian secondary diploma or an equivalent foreign credential with an ECA.
                </li>
                <li>
                Candidates must demonstrate a connection to New Brunswick through one of three means: an exploratory visit within the last 12 months, a valid job offer from a New Brunswick employer, or a direct invitation from the province. 
                </li>
                <li>
                A minimum score of 65 points on a 100-point assessment grid is required for eligibility. 
                </li>
              </ul>

              <ul className="my-3 ml-3">
                <div className='mb-2'> <strong>New Brunswick Private Career College Graduate Pilot Program: </strong>This pilot program is designed for international graduates from select one-year and two-year programs at private career colleges in New Brunswick. </div>
               
                <li>
                The program focuses on graduates in priority sectors such as education, health, IT, and business administration
                </li>
                <li>
                Candidates do not need a job offer but must demonstrate their intention to reside in New Brunswick permanently.
                </li>
               
              </ul>

    
              <ul className="my-3">
                <div className='mb-2'> <strong>New Brunswick Skilled Worker Stream: </strong>This stream is aimed at foreign nationals who have a valid job offer from a New Brunswick employer.</div>
               
                <li>
                Applicants must show a genuine intention to reside in New Brunswick. 
                </li>
                <li>
                Eligibility criteria include having at least a Canadian secondary diploma or equivalent foreign education assessed through an ECA.

                </li>
                <li>
                Meeting language proficiency requirements (CLB 4 or higher) relevant to their occupation.
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

            <div className="pages-header-2" ref={businessRef}>
            New Brunswick Business Stream
            </div>
            <div className="pages-paragraph">
            The New Brunswick Business Immigration Stream under the NBPNP is for experienced entrepreneurs ready to establish, own, and manage a business in New Brunswick. This stream is designed to attract individuals with a proven track record in business management, who possess the skills and commitment to make significant contributions to the province’s economy.
              <ul className="my-2 ml-3">
                <li>
                To qualify, applicants must have a minimum personal net worth of CAD 600,000, with at least CAD 300,000 of it being liquid assets.
                </li>

                <li>
                They must also have at least three years of full-time business ownership experience within the last five years or five years of senior management experience.
                </li>

                
                <li>
                Successful candidates must commit to investing a minimum of CAD 250,000 in a business within the province.
                </li>
              </ul>

             <div className='mt-3'>This stream offers a unique opportunity for entrepreneurs to settle and grow within New Brunswick’s supportive business environment.</div>

            </div>

            <div className="pages-header-2" ref={employerRef}>
            New Brunswick Employer Streams
            </div>
            <div className="pages-paragraph">
        
              <ul className="my-2 ml-3">
                <div className="mb-3"><strong>Atlantic Immigration Program (AIP): </strong>A collaborative initiative between the federal government and Atlantic provinces, including New Brunswick, the AIP facilitates the hiring of foreign workers to fill labor shortages. Candidates must have a job offer from a designated employer and meet other eligibility requirements.</div>
                <li>
                Candidates must have accumulated work experience in the past five years, equivalent to approximately 30 hours per week for one year. The work experience must fall under the National Occupational Classification (NOC) TEER categories 0, 1, 2, 3, or 4.
                </li>

                <li>
                Recent graduates from recognized post-secondary institutions in Atlantic Canada are also eligible, provided they meet certain educational requirements and have lived in the region for at least 16 months during their studies.
                </li>
              </ul>

              <ul className="my-2 ml-3">
                <div className="mb-3"><strong>New Brunswick Critical Worker Pilot: </strong>Launched in 2022, this five-year pilot program addresses critical labor shortages in sectors such as manufacturing, fisheries, and farming. </div>
                <li>
                It is an employer-driven stream, with applications made through participating employers.
                </li>

                <li>
                Applications are submitted through employers who participate in the pilot program. 
                </li>
                <li>
                This approach ensures that the hiring process is aligned with local labor market demands. 
                </li>
              </ul>

              <div className='my-5'>Through targeted streams like the Express Entry, Strategic Initiative, and Skilled Worker streams, as well as the unique Atlantic Immigration Program (AIP) and New Brunswick Critical Worker Pilot, the NBPNP supports a diverse range of immigration pathways. The program not only addresses labor shortages in key industries but also fosters long-term settlement and integration by offering pathways tailored to the needs of both immigrants and the provincial economy.</div>

            </div>
          </div>

          <div>
       
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

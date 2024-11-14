import React, { useRef } from "react";

import NestedTableOfContent from "./../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "./../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../../globalComponents/Sidebar/SiteMapMenu.jsx";


export default function OntarioExpressEntry() {
  const jobRef = useRef(null);
  const postRef = useRef(null);
  const eeRef = useRef(null);

  const tableContentData = [
    {
      title: "Ontario Employer Job Offer Stream",
      scrollTo: jobRef,
    },
    {
      title: "Ontario Post-Graduate Stream",
      scrollTo: postRef,
    },
    {
      title: "Ontario Express Entry Streams",
      scrollTo: eeRef,
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
          h2="Ontario"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Provincial Nominee Program
              {" > "}Ontario
              {" > "}Ontario Provincial Nominee Program (OINP)
            </div>
            <div class="pages-header">Ontario Provincial Nominee Program (OINP)</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Ontario, Canada’s most populous province, is known for its economic opportunities and popular cities like Toronto and Ottawa. The province is known as the economic engine of Canada as it is home to major industries in technology, healthcare, and manufacturing. It is known for its low crime rates, excellent healthcare facilities, and its cultural diversity. Ontario is the most populous province in Canada, accounting for nearly 40% of the country's total population. The province contributes approximately 40% of Canada's GDP.

            <div className='mt-5'>For immigration, Ontario operates the Ontario Immigrant Nominee Program (OINP), a Provincial Nominee Program (PNP) to select skilled immigrants to meet its labor and economic needs. The OINP allows Ontario to nominate candidates for Canadian permanent residence. It consists of three different streams tailored to various applicant profiles.</div>

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={jobRef}>
            Ontario Employer Job Offer Stream
            </div>
            <div className="pages-paragraph">
            The Ontario Employer Job Offer Stream is for applicants who already have a valid job offer from an employer in Ontario. This stream is further divided into three categories:
             
              <ul className="my-3">
                <li>
                  <strong>Foreign Worker Stream: </strong>
                  For skilled workers from outside Canada who have a job offer in Ontario that meets certain wage and skill requirements.
                </li>
                <li>
                <strong>International Student Stream: </strong>
                For recent graduates from eligible Canadian post-secondary institutions who have received a job offer in Ontario.
                </li>

                <li>
                <strong>In-Demand Skills Stream: </strong>
                Targets workers with job offers in specific in-demand fields, such as construction, agriculture, and healthcare. Applicants must demonstrate experience in an occupation deemed essential to Ontario's economy, often in the TEER 4 or 5 categories.
                </li>
              </ul>
              Applicants must meet educational, language, and settlement fund requirements, among other criteria​.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={postRef}>
            Ontario Post-Graduate Stream
            </div>
            <div className="pages-paragraph">
            Ontario’s Post-Graduate Stream is aimed at recent graduates with advanced degrees from eligible Ontario institutions who wish to contribute to Ontario's economy. This stream has two sub-categories:
          
              <ul className="my-2 ml-3">
                <li>
                  <strong>Master’s Graduate Stream: </strong>
                  Open to graduates with a Master’s degree from an Ontario university. Applicants must apply within two years of completing their degree and meet requirements such as language proficiency (CLB 7 or higher), proof of settlement funds, and intent to reside in Ontario. No job offer is needed.
                </li>

                <li>
                <strong>Ph.D. Graduate Stream: </strong>
                For those who have completed a Ph.D. program in Ontario. Like the Master’s Graduate Stream, no job offer is required. Ph.D. graduates must also apply within two years of completing their degree and satisfy financial and language requirements.
                </li>
              </ul>

              These streams offer a straightforward path for academically accomplished individuals to settle in Ontario.
            </div>

            <div class="pages-header-2" ref={eeRef}>
              Ontario Express Entry Streams
            </div>
            <div class="pages-paragraph">
            The Ontario Express Entry Streams are designed to streamline the application process for candidates who are already in the federal Express Entry pool. A provincial nomination from Ontario under these streams adds 600 points to a candidate’s Comprehensive Ranking System (CRS) score. The three Express Entry-linked streams include:
          
              <ul className="my-2 ml-3">
                <li> <strong>Human Capital Priorities (HCP) Stream: </strong>
                This stream is geared toward skilled workers who meet Ontario’s labor needs, especially in high-demand fields like tech and healthcare. Candidates must have an active Express Entry profile under the Federal Skilled Worker Program (FSWP) or Canadian Experience Class (CEC). A Canadian or equivalent foreign credential and a minimum language proficiency (CLB 7) are also required.</li>

                <li>
                <strong>Skilled Trades Stream: </strong>
                This stream targets trades professionals with work experience in Ontario within specified TEER categories that address regional labor shortages. Eligible candidates must have one year of work experience in an eligible trade in Ontario within the last two years, with valid trade certification if required. No job offer is needed, but candidates must meet language requirements (CLB 5 or higher).
                </li>
               
                <li>
                <strong>French-Speaking Skilled Worker Stream: </strong>
                Intended for French-speaking candidates with strong English skills. Applicants must qualify under the FSWP or CEC, and they need to have a high level of French language proficiency (CLB 7) and an intermediate English level (CLB 6).
                </li>

              </ul>
              Ontario’s PNP offers a range of pathways to permanent residency, targeting skilled workers, international graduates, and Express Entry candidates. Each stream has unique eligibility criteria tailored to Ontario's economic and labor market needs, making it an appealing choice for prospective immigrants who wish to settle in this thriving province. With options for both job seekers and graduates, the OINP continues to attract talent from around the globe to contribute to Ontario’s growth and prosperity.
            </div>

           
          </div>
    
            <ReadyToStartCard />
       
        </div>
      </div>
    </div>
  );
}

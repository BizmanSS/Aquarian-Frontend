import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";


export default function AlberatImmigrantNomineeProgram() {
  const wstreamRef = useRef(null);
  const wexpressRef = useRef(null);
  const wopportunityRef = useRef(null);
  const wAcceleratedRef = useRef(null);
  const wTourismRef = useRef(null);
  const estreamRef = useRef(null);
  const eGraduateskilledRef= useRef(null);
  const eForeignRef = useRef(null);
  const eStreamRef = useRef(null);
  const eRuralRef = useRef(null);


  const tableContentData = [
    {
      title: "Streams for Workers",
      scrollTo: wstreamRef,
      subItems: [
        {
          title: "Alberta Opportunity Stream (AOS)",
          scrollTo: wopportunityRef,
        },
        {
          title: "Alberta Express Entry Stream",
          scrollTo: wexpressRef,
        },
        {
          title: "Alberta Accelerated Tech Pathway",
          scrollTo: wAcceleratedRef,
        },
        {
          title: "Alberta Tourism and Hospitality Stream",
          scrollTo: wTourismRef,
        },
      ],
    },
    {
      title: "Stream for Entrepreneurs",
      scrollTo: estreamRef,
      subItems: [
        {
          title: "Alberta Graduate Entrepreneur Stream",
          scrollTo: eGraduateskilledRef,
        },
        {
          title: "Alberta Foreign Graduate Entrepreneur Stream",
          scrollTo: eForeignRef,
        },
        {
          title: "Alberta Farm Stream",
          scrollTo: eStreamRef,
        },
        {
          title: "Alberta Rural Entrepreneur Stream",
          scrollTo: eRuralRef,
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
          h2="Alberta Immigrant Nominee Program"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "} Alberta Provincial Nominee Program
            </div>
            <div class="pages-header">
            Alberta Provincial Nominee Program (PNP)
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Alberta is a province located in western Canada, known for its diverse geography, economy, and cultural significance. Alberta is situated in the western part of Canada and is bordered by British Columbia to the west, Saskatchewan to the east, and the Northwest Territories to the north. 
              <div className="mt-5">
              Alberta’s Provincial Nominee Program (PNP), the Alberta Advantage Immigration Program (AAIP), offers multiple streams to attract skilled workers and entrepreneurs to the province for its economic growth. The program seeks applicants with the skills required to fill job gaps or those interested in starting/acquiring a business in Alberta. Candidates also need to demonstrate their ability to provide for their families. 
              </div>
              <div className="mt-5">
              Alberta province nominates candidates for PR who can then apply for permanent residency in Canada through Immigration, Refugees, and Citizenship Canada (IRCC), which handles the final decision on the application. The AAIP is divided into 2 based on two primary categories: skilled workers and entrepreneurs. 
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={wstreamRef}>
            Streams for Workers
            </div>
            <div className="pages-paragraph">
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
              Alberta Opportunity Stream (AOS) 
                </div>
                <div className="">
                The Alberta Opportunity Stream is aimed at foreign workers already in Alberta with a valid work permit. The stream was launched by the province in June 2018.
                </div>
           
                <ul className="my-3">

                  <li>
                  It focuses on candidates who are working in high-demand occupations across various sectors such as health care, trades, and transportation. 
                  </li>
                  <li>
                  Applicants must have a job offer from an Alberta employer, meet specific language proficiency levels, and demonstrate work experience in the province. 
                  </li>
                  <li>
                  It’s an ideal option for those already working in Alberta looking to transition to permanent residency.
                  </li>

                </ul>
            

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
           Alberta Express Entry Stream 
               </div>
               <div className="mt-5">This stream aligns with the federal Express Entry system, allowing the province to select active candidates from the Express Entry pool who have strong ties to Alberta or are working in key industries that contribute to the province's economic growth. </div>
               <ul className="my-3">
                  <li>
                  Those with a job offer, work experience in in-demand fields, or family ties in Alberta have a better chance of receiving a nomination. 
                  </li>
                  <li>
                  Alberta also focuses on candidates with lower CRS (Comprehensive Ranking System) scores, making it more accessible than other provinces.

                  </li>
              
                </ul>

                <div className='mt-5'>Express Entry candidates who receive a provincial nomination through this stream gain 600 additional points to their Comprehensive Ranking System (CRS) score, ensuring they will receive an Invitation to Apply (ITA) for permanent residence in the next Express Entry draw.</div>
            

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >

Alberta Accelerated Tech Pathway 
             </div>
             <div className="mt-5">This stream offers a fast-track to permanent residency for highly skilled tech professionals with job offers in Alberta's growing technology sector. </div>
               <ul className="my-3">
                  <li>
                  Eligible occupations span areas like software development, artificial intelligence, and data analysis. 
                  </li>
                  <li>
                  Candidates must be in the Express Entry pool and meet federal Express Entry criteria. 
                  </li>

                  <li>
                  Expedited processing is available for those working in one of 38 in-demand tech occupations or employed by an Alberta-based tech company. 
                  </li>
                  <li>
                  Nomination under this stream can significantly enhance their chances of securing permanent residency.
                  </li>
                 
                </ul>

                <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >

Alberta Tourism and Hospitality Stream 
             </div>
             <div className="mt-5">
             Aimed at addressing labor shortages in Alberta's tourism and hospitality sectors, this stream offers a pathway to permanent residency for individuals with experience in occupations such as chefs, food service supervisors, and hotel managers. Candidates must have a valid job offer, work experience in Alberta, and meet language and educational requirements.
              </div>
            
            </div>

            <div class="pages-header-2" ref={estreamRef}>
            Stream for Entrepreneurs
            </div>
            <div className="pages-paragraph">
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
       Alberta Graduate Entrepreneur Stream 
                </div>
                <div className="mt-5">
                The Alberta Graduate Entrepreneur Stream is designed for recent international graduates from Alberta post-secondary institutions.
                </div>
           
                <ul className="my-3">

                  <li>
                  It offers an opportunity to start or buy a business in the province.
                  </li>
                  <li>
                  It uses a points based EOI or Expression of Interest system to rank the applicants.
                  </li>
                  <li>
                  Applicants must have completed at least two years of full-time study, meet language requirements, and present a viable business plan. 
                  </li>
                  <li>
                  This pathway aims to retain entrepreneurial talent within Alberta by fostering new business ventures that contribute to the economy.
                  </li>

                </ul>
            

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
       Alberta Foreign Graduate Entrepreneur Stream 
               </div>
               <div className="mt-5">The Foreign Entrepreneur Stream is tailored for recent graduates from outside Canada who have the skills and entrepreneurial spirit to start a business in Alberta. </div>
               <ul className="my-3">
                  <li>
                  Candidates who meet the stream's requirements can create a profile via AAIP’s online portal and submit a Business Application.
                  </li>
                  <li>
                  Candidates must have completed their studies outside Canada within the past 10 years, possess a minimum equity investment, and provide a detailed business plan that outlines job creation and economic benefits for Alberta. 

                  </li>

                  <li>
                  This stream seeks to attract innovative entrepreneurs to the province.
                  </li>
              
                </ul>

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >

Alberta Farm Stream 
             </div>

             <div className="mt-5">This Alberta Farm Stream pathway is designed for experienced farmers who intend to establish or purchase a farm in Alberta. </div>

               <ul className="my-3">
                  <li>
                  Applicants must demonstrate proven farm management skills, present a solid business plan, and show that they have the financial capacity to operate the farm. 
                  </li>
                  <li>
                  The stream specifically targets individuals who can contribute to Alberta’s agricultural sector, particularly in rural areas.
                  </li>
                 
                </ul>

                <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  margin: "20px 0",
                }}
              >
Alberta Rural Entrepreneur Stream 
             </div>

             <ul className="my-3">
                  <li>
                  Applicants must conduct an exploratory visit to the rural community, meet minimum net worth and investment criteria, and have a strong business plan.  
                  </li>
                  <li>
                  The goal is to boost economic activity in Alberta’s rural regions by attracting foreign entrepreneurs.
                  </li>
                 
                </ul>

             <div className="my-5">
             Candidates meeting the Alberta Advantage Immigration Program (AAIP) business stream criteria can register a profile and submit their Business Application via the AAIP's online portal for a chance to establish a business in Alberta and eventually apply for permanent residency. Starting in June 2024, AAIP introduced monthly intake periods, allowing multiple opportunities for submission each year, rather than a one-time application window. Application acceptance closes once monthly intake limits are reached, with upcoming dates available on the official AAIP website. 
              </div>
            
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

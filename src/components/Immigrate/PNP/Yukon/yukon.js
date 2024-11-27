import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";



export default function YukonCommunityPilot
() {
  const SkilledRef = useRef(null);
  const ExpressRef = useRef(null);
const CriticalRef = useRef(null);
const BusinessRef = useRef(null);
const CommunityRef = useRef(null);
  const tableContentData = [
    {
      title: "Yukon Skilled Worker",
      scrollTo: SkilledRef,
    },
    {
      title:"Yukon Express Entry",
      scrollTo: ExpressRef,
    },
    {
      title: "Yukon Critical Impact Worker",
      scrollTo: CriticalRef,
    },
    
    {
      title: "Yukon Business Nominee",
      scrollTo: BusinessRef,
    },
    {
      title:"Yukon Community Pilot",
      scrollTo : CommunityRef,
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
          h2="Yukon"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Yukon

{/*  */}
            </div>
            <div class="pages-header">Yukon
</div>
            <div class="pages-paragraph space-fix intro-size-fix">
            Yukon, located in the northwest region of Canada, is known for its natural landscapes and cultural heritage. The territory has a population of approximately 40,000 residents, with Whitehorse as its capital. Yukon is known for its low population density. The economy is mainly driven by mining, tourism, and government services.
            <br></br>
<div>One of the key factors that make Yukon a preferred destination for immigration is its Provincial Nominee Program (PNP), which allows the territory to nominate individuals for permanent residence based on labor market needs. The Yukon PNP offers 5 immigration streams covered below.

</div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={SkilledRef}>
            Yukon Skilled Worker
            </div>
            <div className="pages-paragraph">
            The Yukon Skilled Worker stream is designed for foreign nationals who possess a full-time job offer from an eligible Yukon employer. 

             

              <ul className="my-3" >
                <li>
                Candidates must have relevant work experience in skilled occupations classified under National Occupational Classification (NOC) skill levels 0, A, or B. 
               
                </li>
                <li>
                To qualify, applicants need at least a high school diploma and must achieve specific language proficiency levels: Canadian Language Benchmark (CLB) 7 for NOC 0 and A positions, and CLB 5 for NOC B roles. 

                </li>
               
            
              </ul>
            
              
            </div>
            Once nominated, candidates can apply for permanent residency while working in Yukon with a temporary work permit.

            <div class="pages-header-2" ref={ExpressRef}>
            Yukon Express Entry
            </div>
            <div className="pages-paragraph">
            The Yukon Express Entry stream allows candidates already in the federal Express Entry pool to receive a nomination from Yukon. 

             

              <ul className="my-3" >
                <li>
                This stream is ideal for individuals who meet the criteria of 1 of the 3 federal economic immigration programs: Federal Skilled Worker Program, Federal Skilled Trades Program, or Canadian Experience Class. 

               
                </li>
            

            
              </ul>
            
              
            </div>
            The process is streamlined; once nominated, candidates can expect faster processing times for their permanent residency applications, often within six months.


            <div class="pages-header-2" ref={CriticalRef}>
            Yukon Critical Impact Worker
            </div>
            <div className="pages-paragraph">
            The Yukon Critical Impact Worker stream targets foreign nationals filling labor shortages in lower-skilled occupations classified under NOC skill levels C and D. 

              <ul className="my-3">
                <li>
                This employer-driven program requires candidates to have a full-time job offer from a Yukon employer who has made reasonable efforts to recruit Canadians or permanent residents first. 

                </li>
                <li>
                Applicants must also possess at least a high school diploma and demonstrate sufficient language proficiency (CLB 4). 

                </li>
               
          
              </ul>
              

            </div>
            This stream addresses immediate labor market needs while providing opportunities for skilled workers to establish themselves in Yukon.



            <div class="pages-header-2" ref={BusinessRef}>
            Yukon Business Nominee
            </div>
            <div className="pages-paragraph">
            The Yukon Business Nominee Program is tailored for entrepreneurs looking to invest in or start a business within the territory. 

              <ul className="my-3">
                <li>
                Applicants must demonstrate relevant business experience and provide a viable business plan that contributes to Yukon's economy. 

                </li>
                <li>
                A minimum investment amount is required, along with proof of sufficient funds to support themselves and any accompanying family members. 

                </li>
               
          
              </ul>
             

            </div>
            Successful nominees can obtain permanent residency while establishing their business operations in Yukon.



            <div class="pages-header-2" ref={CommunityRef}>
            Yukon Community Pilot
            </div>
            <div className="pages-paragraph">
            The Yukon Community Pilot is an innovative initiative aimed at attracting skilled workers to smaller communities within the territory. 

              <ul className="my-3">
                <li>
                This program allows local employers to nominate foreign nationals who wish to live and work in these communities, addressing specific labor shortages outside major urban areas like Whitehorse. 

                </li>
                <li>
                Candidates must have a job offer from an eligible employer and demonstrate their commitment to settling in the community. 

                </li>
               
          
              </ul>
              This stream not only supports local economies but also fosters community growth by integrating newcomers into smaller populations

            </div>
            
          </div>
          <div >
            <ReadyToStartCard />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

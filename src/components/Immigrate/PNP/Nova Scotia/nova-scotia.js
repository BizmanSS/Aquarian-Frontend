import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";



export default function NovaScotia() {
  const ExpressEntryRef = useRef(null);
  const WorkerRef = useRef(null);
  
  const PilotsRef = useRef(null);
  const LabourMarketRef = useRef(null);
  const PrioritiesRef = useRef(null);
  const PhysiciansRef = useRef(null);
  const IGERef = useRef(null);
  const InternationalRef = useRef(null);
  const EntrepreneurRef = useRef(null);
  const OccupationsRef = useRef(null);

  

 

  const tableContentData = [
    {
      title: "NS Experience: Express Entry",
      scrollTo: ExpressEntryRef,
    },
    {
      title: "NS Skilled Worker",
      scrollTo: WorkerRef,
    },
    {
      title: "NS Occupations in Demand",
      scrollTo: OccupationsRef,
    },
    {
      title: "NS Entrepreneur",
      scrollTo: EntrepreneurRef,
    },
    {
      title: "NS International Graduate in Demand",
      scrollTo: InternationalRef,
    },
    {
      title: "NS International Graduate Entrepreneur",
      scrollTo: IGERef,
    },
    {
      title: "NS Physicians",
      scrollTo: PhysiciansRef,
    },
    {
      title: "NS Labour Market Priorities",
      scrollTo: PrioritiesRef,
    },
    {
      title: "NS Labour Market Priorities for Physicians",
      scrollTo: LabourMarketRef,
    },
    {
      title: "NS Pilots",
      scrollTo: PilotsRef,
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
          h2="Nova Scotia"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Nova Scotia
            </div>
            <div class="pages-header">
            Nova Scotia Nominee Program (NSNP)
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Nova Scotia, located on the east coast of Canada, is known for its landscapes, culture, and strong sense of community. The key sectors of the province's economy include fisheries, agriculture, tourism, and technology. Nova Scotia's location along the Atlantic makes it a hub for trade and commerce. The province faces demographic challenges such as an ageing population and labour shortages in various sectors. 
            <br></br>
            <br></br>
            To address these issues, Nova Scotia actively promotes immigration through programs like the Nova Scotia Nominee Program (NSNP), which allows the province to nominate skilled workers who can contribute to its economy. This program has streamlined processing times. It is aligned with federal immigration pathways such as Express Entry.


            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={ExpressEntryRef}>
            NS Experience: Express Entry

            </div>
            <div className="pages-paragraph">
            This stream targets individuals who have at least one year of work experience in Nova Scotia in a highly skilled occupation. 

              <ul className="my-3">
                <li>
                Candidates must be aged 21-55.
                </li>
                <li>
                They should prove language proficiency (CLB 7 for NOC TEER 0 and 1; CLB 5 for TEER 2 and 3). 

                </li>
               
              </ul>
              Applicants must also have a profile in the federal Express Entry pool, allowing them to transition smoothly into permanent residency.

            </div>
            <div class="pages-header-2" ref={WorkerRef}>
            NS Skilled Worker

            </div>
            <div className="pages-paragraph">
            The Skilled Worker stream is employer-driven, allowing Nova Scotia employers to recruit foreign workers when local talent is unavailable. 

              <ul className="my-3">
                <li>
                Candidates must have a full-time job offer from a qualified employee.

                  
                </li>
                <li>
                They must meet specific educational and experience requirements related to their job offer.

                </li>
               
              </ul>
            
            </div>



            <div class="pages-header-2" ref={OccupationsRef}>
            NS Occupations in Demand

            </div>
            <div className="pages-paragraph">
            This stream focuses on filling labor shortages in specific occupations classified as NOC C level or below. 

              <ul className="my-3">
                <li>
                The candidates must hold a job offer from an NS employer in a high-demand field.

                  
                </li>
                <li>
               <strong> Current Eligible Occupations:</strong>
<ul>
  <li>NOC 3413: Nurses aides, orderlies, and patient service associates.
</li>
<li>NOC 7511: Transport truck drivers.
</li>
<li>NOC 7521: Heavy equipment operators (excluding crane operators).
</li>
<li>NOC 7611: Construction trades helpers and labourers.
</li>
</ul>
                </li>
               
              </ul>
              This stream fills gaps in the labour market by attracting skilled workers to essential roles.

            </div>

            


            <div class="pages-header-2" ref={EntrepreneurRef}>
            NS Entrepreneur

            </div>
            <div className="pages-paragraph">
            The stream is for individuals looking to start or manage a business in Nova Scotia.

              <ul className="my-3">
                <li>
                This stream requires candidates to have business ownership or senior management experience.

                  
                </li>
                <li>
                They must have a viable business plan that can contribute to the local economy.

                </li>
                <li>Applicants must also invest a minimum amount into their business.
</li>
               
              </ul>
              After 1 year of business, the applicants can be nominated for PR status.

            
            </div>


            <div class="pages-header-2" ref={InternationalRef}>
            NS International Graduate in Demand

            </div>

            <div className="pages-paragraph">
            This stream is designed for international students who graduated from a recognized institution in Nova Scotia. 

              <ul className="my-3">
                <li>
                Candidates must have a full-time job offer related to their field of study.

                  
                </li>
                <li>
                They also must meet language proficiency requirements

                </li>
          
               
              </ul>
              
            </div>





            <div class="pages-header-2" ref={IGERef}>
            NS International Graduate Entrepreneur

            </div>

            <div className="pages-paragraph">
            The program is designed for international graduates from Nova Scotia institutions. 

              <ul className="my-3">
                <li>
                It allows them to start or manage a business in the province after completing their studies. 

                  
                </li>
                <li>
                Applicants must meet specific requirements and intend to settle permanently in Nova Scotia. 

                </li>
                <li>If they do, they may qualify for a provincial nomination through this stream.
</li>
          
               
              </ul>
              
            </div>





            <div class="pages-header-2" ref={PhysiciansRef}>
            NS Physicians

            </div>

            <div className="pages-paragraph">
            This stream targets qualified physicians who received job offers from healthcare facilities in Nova Scotia. 

              <ul className="my-3">
                <li>
                The stream helps public health organizations to address critical labour needs.

                  
                </li>
                <li>
                Candidates must commit to living and working in the province for at least two years after obtaining their nomination.

                </li>
       
          
               
              </ul>
              
            </div>






            <div class="pages-header-2" ref={PrioritiesRef}>
            NS Labour Market Priorities

            </div>

            <div className="pages-paragraph">
            This stream allows Nova Scotia to prioritize specific occupations based on current labour market needs. 

              <ul className="my-3">
                <li>
                Candidates receive Letters of Interest from NSNP if they have skills that align with these priorities.

                  
                </li>
                <li>
                The stream targets Express Entry candidates with work experience in high-demand occupations in the province.

                </li>
       
          
               
              </ul>
              
            </div>




            <div class="pages-header-2" ref={LabourMarketRef}>
            NS Labour Market Priorities for Physicians

            </div>
            Specifically designed for physicians, this stream enables the province to select candidates from the Express Entry pool. The candidates must meet specific qualifications for practicing medicine in Nova Scotia.


            <div class="pages-header-2" ref={PilotsRef}>
            NS Pilots

            </div>
            <div className="pages-paragraph">
            It includes 2 streams:

              <ul className="my-3">
                <li>
                <strong>Critical Construction Pilot: </strong>Addressing labor shortages in construction-related occupations by allowing skilled workers from abroad to settle in Nova Scotia.

                  
                </li>
                <li>
                <strong>Healthcare Professionals Immigration Pilot:</strong> This pilot targets healthcare professionals with job offers from designated healthcare employers in Nova Scotia.

                </li>
       
          
               
              </ul>
              Nova Scotia is involved in the Atlantic Immigration Pilot Program (AIPP) as well. This program is a collaborative effort between the federal government and the Atlantic provinces of Canada. 

              
            </div>
            The Nova Scotia Nominee Program shapes the province's demographic and economic landscape. By offering targeted immigration pathways that align with labour market needs, the NSNP invites skilled workers but also fosters community growth and economic stability. 

          </div>
          <div >
            <ReadyToStartCard />
          </div>        </div>
      </div>
    </div>
  );
}

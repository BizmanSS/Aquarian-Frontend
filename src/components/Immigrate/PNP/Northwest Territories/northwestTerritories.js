import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";



export default function NorthwestTerritoriesPNP() {
  const eligibilityRef = useRef(null);
  const eeRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Northwest Territories Express Entry Stream",
      scrollTo: eligibilityRef,
    },
    {
      title: "NWT Employer Driven Stream",
      scrollTo: eeRef,
    },
    {
      title: "NWT Business Stream",
      scrollTo: applyRef,
    },
    {
      title: "NWT Francophone Stream",
      scrollTo: faqRef,
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
          h2="Northwest Territories"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Northwest Territories PNP
            </div>
            <div class="pages-header">Northwest Territories PNP</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Northwest Territories is one of Canada's three northern territories known for its rich culture. The province is home to around 44,920 people. A significant portion of its population resides in NWT's capital, Yellowknife. The territory is known for its Nahanni National Park and the Great Bear Lake.
              <div className='mt-3'>
                The Northwest Territories Provincial Nominee Program attracts skilled workers/entrepreneurs who can contribute or support its economy. It allows the NWT territory to nominate individuals having the skills and experience meeting local labor market needs. In 2024, the NWT reached 300 nominations cap for the 1st time.

              </div>

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Northwest Territories Express Entry Stream
            </div>
            <div className="pages-paragraph">
              This stream is designed for skilled workers who are already in the federal Express Entry pool. Successful candidates receive priority processing for both their NTNP application and then Canadian permanent residence application. Eligible applicants must meet specific criteria under the Skilled Worker Stream - having a job from a NWT employer - and have genuine intention to settle in NWT.
              {/* <div className='font-bold mt-2'>Eligibility Requirements:</div> */}


            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={eeRef}>
              NWT Employer Driven Stream
            </div>
            <div className="pages-paragraph">
              This stream consists of 2 categories designed to address labor shortages through employer sponsorship:
              <ul className="my-2 ">
                <li>
                  <strong>Entry Level/Semi-Skilled Workers: </strong>
                  Targets individuals with job offers in entry-level positions that require minimal qualifications. Applicants must have worked for at least six months in the position.
                </li>

                <li>
                  <strong>Skilled Workers: </strong>
                  Designed for individuals with job offers in skilled positions (NOC Skill Levels 0, A, or B). Applicants must have prior work experience in their field within the NWT.
                </li>


              </ul>


            </div>

            <div class="pages-header-2" ref={applyRef}>
              NWT Business Stream
            </div>
            <div className="pages-paragraph">
              This stream provides opportunities for business owners/entrepreneurs who can establish or invest in businesses that benefit the local economy in the Northwest Territories. Applicants must have financial resources to create jobs within the territory. The program welcomes applications from all economic sectors, but priority will be given to businesses that significantly benefit the Northwest Territories economy or introduce new products.
              {/* <div className='font-bold mt-2'>Eligibility Requirements:</div> */}


            </div>

            <div class="pages-header-2" ref={faqRef}>
              NWT Francophone Stream
            </div>
            <div className="pages-paragraph" >
              This stream aims to enhance the Francophone community within the NWT by attracting skilled workers who can contribute to its growth. It has been launched to support French speaking immigrants in the country.

              <div className='my-3'>The Northwest Territories has different immigration streams under its Provincial Nominee Program. The streams cater to skilled workers, entrepreneurs, and French speakers. Since it is part of a growing economy with increasing labor demand, the NWT provides unique opportunities for those who would wish to settle there and build their lives in this region among Canada's provinces.</div>
              {/* <div className='font-bold mt-2'>Eligibility Requirements:</div> */}


            </div>


          </div>

          <div >
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

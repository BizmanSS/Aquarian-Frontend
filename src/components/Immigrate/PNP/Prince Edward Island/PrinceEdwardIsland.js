import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

// const faqItems = [
//   {
//     question:
//       "How does the Express Entry Skilled Worker stream work?",
//     answer:
//       "This stream is linked with Canada's Express Entry system; candidates nominated through it receive an additional 600 CRS points, increasing their chances for an ITA for permanent residency.",
//   },
//   {
//     question: " Who can apply under the International Graduate stream for NLPNP?",
//     answer:
//       "Recent graduates from eligible Canadian post-secondary institutions with job offers related to their field of study can apply under this stream.",
//   },

//   {
//     question:
//       " How is the NLPNP points grid structured?",
//     answer:
//       "The points grid evaluates education, language proficiency, age, work experience, and connection to the labor market; applicants must score at least 67 points to qualify for nomination.",
//   },
// ];



export default function PrinceEdwardIslandProvincialNomineeProgram() {
  const eeRef = useRef(null);
  const skilledRef = useRef(null);
  const graduateRef = useRef(null);
  const entrepreneurRef = useRef(null);
  const internationalRef = useRef(null);
  const pointsRef = useRef(null)
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "PEI Business Impact Category",
      scrollTo: eeRef,
    },
    {
      title: "PEI Labour Impact Category",
      scrollTo: skilledRef,
    },
    {
      title:
        "PEI Express Entry Stream",
      scrollTo: graduateRef,
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
          h2="Prince Edward Island"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Prince Edward Island
            </div>
            <div class="pages-header">Prince Edward Island Provincial Nominee Program (PEI PNP)
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Prince Edward Island is a Canadian province in the Gulf of St. Lawrence. It is the smallest province in Canada by both area and population. It has a diverse economy based on agriculture, fisheries, and tourism industries. PEI has gained popularity as a destination for both tourists and immigrants. The province's beaches and rolling hills, with its friendly communities, make it appealing.


              <div className='mt-5'>The Prince Edward Island Provincial Nominee Program was established to attract immigrants who can contribute to the province's economic growth and labour market needs. It allows the government to nominate individuals for Canadian PR. PEI is recognized for having the highest immigration rate per capita in Canada, welcoming over 2,000 new immigrants annually since 2015. </div>


            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eeRef} >
            PEI Business Impact Category
            </div>
            <div className="pages-paragraph">
            This category targets individuals looking to invest in or manage a business in PEI. 

            
              <ul className="my-2 ">
                <li>
                It comprises a Work Permit Stream for those who wish to invest in a business and actively manage it.
                </li>

                <li>
                It is for individuals looking to establish a business with full ownership or invest in an existing business.
                </li>

              </ul>

              Individuals may opt to secure a work permit by investing in a business in Prince Edward Island (PEI), which can lead to a quicker adjustment to their new life in Canada and PEI.

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={skilledRef}>
            PEI Labour Impact Category
            </div>
            <div className="pages-paragraph">
            This category is for skilled workers or foreign international graduates who can meet the labour needs of PEI. It includes:
      
              <ul className="my-2">

                <li>
                  <strong>Skilled Worker Stream: </strong>
                  For individuals with relevant work experience and a job offer.
                </li>

                <li>
                <strong>Critical Worker Stream: </strong>
                Focused on filling urgent labour shortages in specific sectors.

                </li>

                <li>
                <strong>International Graduate Stream: </strong>
                Targeting recent graduates from recognized post-secondary institutions in Canada.
                </li>

              </ul>


            </div>

            <div className="pages-header-2" ref={graduateRef}>
            PEI Express Entry Stream
            </div>
            <div className="pages-paragraph">
            The PEI PNP also has an Express Entry stream, which aligns with Canada's federal Express Entry system. This allows candidates already in the Express Entry pool to receive additional points towards their Comprehensive Ranking System (CRS) score if nominated by PEI. This increases their chance of securing Canadian PR.


              <div className='mt-3'>The PEI PNP has significantly contributed to the province's economy by attracting skilled labour and investment. The program addresses specific labour shortages in sectors such as healthcare, technology, and trades, ensuring that local businesses can thrive while providing newcomers with opportunities to settle successfully.
              </div>



            </div>

          </div>

      
            <ReadyToStartCard />
         
        </div>
      </div>
    </div>
  );
}

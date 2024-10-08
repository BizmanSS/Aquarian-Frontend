import React, { useRef } from "react";
import {Link} from 'react-router-dom';
import TableOfContent from "../../../shared/TableOfContent.jsx";
import FaqBox from "../../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";


const faqItems = [
  {
    question: "What happens if I don’t meet the 730-day residency requirement?",
    answer:
      "If you fail to meet the 730-day requirement, an immigration officer may determine that you've lost your permanent resident status. 1. This usually happens when you apply for a new PR card or a Permanent Resident Travel Document (PRTD). 2. In some cases, you may be required to attend a hearing or appeal the decision, but it’s a lengthy and stressful process. ",
  },
  {
    question:
      "Can I appeal if I lose my PR status for not meeting residency obligations?",
    answer:
      " Yes, you can appeal the decision. However, you’ll need to provide strong reasons for your time away, and even then, there’s no guarantee that the decision will be reversed.",
  },
  {
    question: " Can I lose my PR status automatically if I don’t meet residency obligations?",
    answer:
      " No, you don’t lose your PR status automatically. Losing your PR status only happens after a formal determination by an immigration officer. Until such a determination is made, you remain a permanent resident of Canada.",
  },
];

export default function ResidencyObligation() {
  const whatRORef = useRef(null);
  const ruleRORef = useRef(null);
  const statusRORef = useRef(null);
  const obligationRORef = useRef(null);
  const faqRORef= useRef(null);
 

  const tableContentData = [
    {
      id: 1,
      content: "What Are Residency Obligations?",
      scrollTo: whatRORef,
    },
    {
      id: 2,
      content: "730-Day Rule: The Residency Obligation",
      scrollTo:ruleRORef,
    },
    {
      id: 3,
      content: "Determination of Status",
      scrollTo: statusRORef,
    },
    {
      id: 4,
      content: "Residency Obligations and Provincial Nominations",
      scrollTo: obligationRORef,
    },
    ,
    {
      id: 5,
      content: "FAQs",
      scrollTo: faqRORef,
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
          h1="After Permanent Residency"
          h2="Residency Obligation"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
            <p className="link">
          <a href="/">Home</a>
        
          {" > "}
          <Link to="/immigrate/after-permanent-residency">
            After Permanent Residency
          </Link>
          {" > "}Residency Obligation
        </p>
            </div>
            <div class="pages-header">Residency Obligations</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Permanent residency in Canada is an exciting part of building a new life in Canada. However, fulfilling your residency obligations is an important part of holding your permanent resident status. Meeting these obligations is key to maintaining your permanent resident status and continuing to enjoy the privileges of living in Canada.
              
            
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={whatRORef}>
            What Are Residency Obligations?
            </div>
            <div className="pages-paragraph">
            Residency obligations involve physical presence in Canada for a certain period of time to keep your permanent resident status.
              <ul className='mt-3 mb-3'>
                <li>
                Being a permanent resident doesn’t mean you can leave Canada indefinitely and still retain your PR status. 
                </li>
                <li>
                The government has specific rules to ensure that those granted PR status continue to have a meaningful connection to the country.
                </li>
                
              </ul>
              In Canada, permanent residents are generally required to have lived in the country for at least 730 days (2 years) within the last 5 years. 
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={ruleRORef}>
            730-Day Rule: The Residency Obligation
            </div>

            <div className="pages-paragraph">
            The primary residency obligation for Canadian permanent residents is to be physically present in Canada for at least 730 days within any 5 years. These days don’t have to be consecutive. So you can leave and return to Canada, as long as your total time in the country adds up to 2 years within that five-year window.
              <br></br>
              <strong>Exceptions and Flexibility</strong>

              <ul className='mt-3 mb-3'>
                <li>
                You are accompanying a Canadian citizen who is your spouse, common-law partner, or parent.
                </li>
                <li>
                You are employed full-time by a Canadian business or the public service of Canada and are stationed abroad.
                </li>
                <li>
                You are accompanying a permanent resident who is also employed by a Canadian business or in public service.
                </li>
                <li>
                These exceptions provide some flexibility, but it’s always wise to keep track of your time and circumstances to ensure you meet your obligations.
                </li>
                
              </ul>
              
            </div>

            <div class="pages-header-2" ref={statusRORef}>
            Determination of Status
            </div>
            <div class="pages-paragraph">
            Whether you’ve met your residency obligations is typically assessed when you apply for:
            </div>
            <ol style={{ listStyle: "decimal", listStylePosition: "inside" }} className='my-3'>
              <li>
                <strong><a href='#' style={{color:'blue'}}>A PR card renewal</a></strong>
               
              </li>

              <li>
              <strong><a href='#' style={{color:'blue'}}>A Permanent Resident Travel Document (PRTD)</a></strong>
              </li>

              <li>
              <strong><a href='#' style={{color:'blue'}}>Canadian citizenship</a></strong>
              </li>

            </ol>
          
            If you’ve been a permanent resident for more than five years, the calculation will focus on the five years prior to the date your application is received. If you’ve been a permanent resident for less than five years, you can still apply for a PR card renewal or PRTD if you can show that you will meet the 730-day requirement within the five-year period.
           


            <div class="pages-header-2" ref={obligationRORef}>
            Residency Obligations and Provincial Nominations
            </div>
            <div className="pages-paragraph">
            Canadian permanent residents and citizens have the right to live and work in any province under Section 6 of the Canadian Charter of Rights and Freedoms. However, for those who obtain permanent residence through a Provincial Nominee Program (PNP), there’s an additional expectation—you must intend to reside in the province that nominated you.
              <ul className="my-3">
                <li>
                If it’s found that your intention to reside in the nominating province was insincere, it can result in serious consequences. 
                </li>
                <li>
                Applicants found guilty of misrepresentation may lose their status and could be inadmissible to Canada for up to five years. 
                </li>
                <li>
                Misrepresentation is a criminal offense in Canada that can impact your immigration status.
                </li>
                
              </ul>
              Maintaining your PR status comes with benefits like access to healthcare, work opportunities, and the ability to apply for Canadian citizenship. But with that comes the responsibility of meeting residency obligations. Failure to meet your residency obligations can lead to the loss of your PR status, making it difficult or even impossible to re-enter the country.
            </div>

        
          </div>
          <div ref={faqRORef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

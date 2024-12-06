import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What are the key requirements for employers participating in the Tourism and Hospitality Stream in Alberta?",
    answer:
      "Employers must be involved in an eligible industry defined by the Workers’ Compensation Board (WCB) of Alberta, have valid WCB coverage or an exemption, and be members of recognized sector associations like the Alberta Hotel and Lodging Association (AHLA) or Restaurants Canada. If they cannot join these associations, they must meet Travel Alberta’s standards.",
   
  },
  {
    question: " How can I verify if my employer is eligible for the Tourism and Hospitality Stream?",
    answer:
      "To verify your employer's eligibility, check that you have a valid job offer in an eligible occupation",
    listAnswer:[
           "Confirm their Workers' Compensation Board (WCB) coverage.",
           "Ensure they are a member of a recognized sector association or listed as an Experience Provider on the Travel Alberta website.",
           "Verify that your role meets the eligible occupations criteria.",
           "Ensure they have a positive Labour Market Impact Assessment (LMIA). ",
    ]
   
  },
  
];

const occupationTableData= [
  {
    code: "54100",
    occupation:"Program Leaders and Instructors in Recreation, Sport",
    category:"4"
  },
  {
    code: "60030",
    occupation:"Restaurant and Food Service Managers",
    category:"0"
  },
  {
    code: "60031",
    occupation:"Accommodation Service Managers",
    category:"0"
  },
  {
    code: "62020",
    occupation:"Food Service Supervisors",
    category:"2"
  },
  {
    code: "62200",
    occupation:"Chefs",
    category:"2"
  },
  {
    code: "64301",
    occupation:"Bartenders",
    category:"4"
  },
  {
    code: "64314",
    occupation:"Hotel Front Desk Clerks",
    category:"4"
  },
];

const SectorTableData= [
  {
    sector:"Accommodations",
    association:"Alberta Hotel and Lodging Association (AHLA)"
  },
  {
    sector:"Food and Beverage",
    association:"Restaurants Canada"
  },
  {
    sector:"Indigenous Tourism",
    association:"Indigenous Tourism Alberta"
  },
  {
    sector:"Recreation and Entertainment",
    association:"Alberta Golf Association"
  },
  {
    sector:"Meetings, Conventions, Tourism",
    association:"Convention Centres Canada (CCC)"
  },
];

export default function AlbertaTourismAndHospitalityStream() {
  const eligibleRef = useRef(null);
  const occupationsRef = useRef(null);
  const sectorRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Who is Eligible to Apply?",
      scrollTo: eligibleRef,
      subItems: [
        {
          title: "Eligible Occupations",
          scrollTo: occupationsRef,
        },
        { title: "Sector Association Memberships", scrollTo: sectorRef },
      
      ],
    },
    {
      title: "How to Apply to the Alberta Tourism and Hospitality Stream?",
      scrollTo: applyRef,
    },
    {
      title: "FAQs",
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
     
        <SiteMapMenu type="I"  h1="Provincial Nominee Program"
          h2="Alberta Immigrant Nominee Program"
          h3="Alberta Tourism and Hospitatlity Stream"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Alberta Immigrant Nominee Program
              {" > "}Alberta Tourism and Hospitatlity Stream
            </div>
            <div class="pages-header">Alberta Tourism and Hospitality Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Tourism and Hospitality Stream is an AAIP application stream, a part of the PNP program of Alberta province. The program helps temporary foreign workers who are currently working in the tourism and hospitality sector in Alberta a chance to gain Permanent Residency. This pathway supports workers with a full-time job offer from an eligible Alberta employer provided they meet specific requirements. The program offers a PR opportunity to those individuals who are already currently contributing to the economy of Alberta to retain skilled workers in the industry.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibleRef}>
            Who is Eligible to Apply?
            </div>
            <div className="pages-paragraph">
            To qualify for the Tourism and Hospitality Stream under AAIP, candidates must meet certain criteria as mentioned below. In addition to that, a positive Labour Market Impact Assessment (LMIA) is needed for candidates at the time of their application.
             
             
              <ul className="my-3">
                <li>
                <strong>Employment: </strong>You must be currently working full-time in Alberta for an approved employer in the tourism and hospitality sector. Your employment must be in an eligible occupation.
                </li>

                <li>
                <strong>Job Offer: </strong>You must have a full-time job offer from the same employer.
                </li>

                <li>
                <strong>Work Experience: </strong>You need at least 6 consecutive months (780 hours) of full-time paid work experience with the employer. Part-time, casual, or seasonal employees are not eligible. Similarly, contractors and employees working from virtual locations outside Alberta are also excluded.
                </li>

                <li>
                <strong>Language Proficiency: </strong>You must have a minimum CLB 4 in English or French, verified through a language test like IELTS or TEF Canada.
                </li>

                <li>
                <strong>Education: </strong>You should have completed at least a high school education equivalent to Canadian standards. An Educational Credential Assessment (ECA) is required in case the candidate has completed their education from any other country.
                </li>
                
              </ul>

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginTop: "25px",
                }}
                ref= {occupationsRef}
              >
              Eligible Occupations
              </div>

              <div className="mt-5">
              The program targets specific occupations within the tourism and hospitality sectors such as

                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>NOC Code</th>
                        <th>Occupation</th>
                        <th>NOC TEER Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {occupationTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.code}</td>
                          <td>{row.occupation}</td>
                          <td>{row.category}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                The eligible occupations include roles in food services, hotel management, recreation, and travel.
              </div>

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginTop: "25px",
                }}
             
              >
              Sector Association Memberships
              </div>

              <div className="mt-5">
              The program targets specific occupations within the tourism and hospitality sectors such as
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Sector</th>
                        <th>Sector Association</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SectorTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.sector}</td>
                          <td>{row.association}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                Employers who are not members of any of these associations must be listed as an Experience Provider on Travel Alberta’s website.
              </div>

            </div>

            <div className="pages-header-2" ref={applyRef}>
            How to Apply to the Alberta Tourism and Hospitality Stream?
            </div>
            <div className="pages-paragraph">
            To apply for the Tourism and Hospitality Stream, you need to follow the steps below:

            <ol style={{
              
              listStyleType:"decimal",
              marginLeft:"25px",
              paddingLeft:"5px",
              marginBottom:"10px",
              marginTop:"10px"
            }}>
              <li>Make sure you meet the eligibility requirements, including having a valid job offer from an approved employer in the tourism and hospitality sector in Alberta.</li>
              <li>Register on the AAIP portal and submit your application online.</li>

              <li>Pay the non-refundable application fee of CAD 840 within 24 hours of submitting your application.</li>
              <li>If approved, you will receive a Provincial Nomination package via email.</li>

              <li>After receiving your nomination, apply for Permanent Residency through Immigration, Refugees and Citizenship Canada (IRCC) within six months.</li>
            </ol>

            This stream recognizes the importance of skilled workers in supporting Alberta’s thriving tourism and hospitality industry. It is a significant opportunity for temporary foreign workers in Alberta’s tourism and hospitality industry to transition to permanent residency.
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

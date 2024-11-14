import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [

  {
    question:
      "What should the Exploratory Visit Report include?",
    answer:
      "This report should include:",
    listAnswer:[
      "Names and contact details of professional service providers or settlement organizations visited.",
      "A description of meetings and how they relate to the business establishment.",
      "Business cards from relevant contacts.",
      "Details of visits to existing business locations if applicable."
    ]
  },
  {
    question:
      "What factors can increase my chances of selection for the Rural Entrepreneur Stream?",
    answer: "Several factors can enhance your likelihood of receiving a request to submit a business application, including ",

    listAnswer:[
      "Being between 21 and 49 years old",
      "Having a spouse who has completed at least one year of post-secondary education ",
      "Having relatives living in Alberta.",
    ]

  },
];



export default function AlbertaRuralEntrepreneur() {
  const keyRef = useRef(null);
  const eligibilityRef = useRef(null);
  const processRef = useRef(null);
  const ruralRef = useRef(null);
  const faqRef= useRef(null);

  const tableContentData = [
    {
      title: "Key Components of the Program",
      scrollTo: keyRef,
    },
    {
      title: "Eligibility Requirements for the Rural Entrepreneur Stream",
      scrollTo: eligibilityRef,
      
    },
    {
      title: "Application Process for ARE",
      scrollTo: processRef,
    },
    {
      title: "Rural Entrepreneur Stream Points Grid",
      scrollTo: ruralRef,
    },
    {
      title: "FAQ's",
      scrollTo: faqRef,
    },
  ];

  const ruralTableData = [
    {
      criteria:"Rural Factors",
      description:"Community location and population size",
      maxPoints:"25"
    },
    {
      criteria:"Business Experience",
      description:"Owner-manager or senior management experience within the last 10 years",
      maxPoints:"20"
    },
    {
      criteria:"Business Establishment",
      description:"Total investment, net worth, job creation, and business succession (not a mandatory requirement)",
      maxPoints:"60"
    },
    {
      criteria:"Human Capital",
      description:"Language proficiency and education levels",
      maxPoints:"35"
    },
    {
      criteria:"Adaptability*",
      description:"Canada/Alberta experience, relatives in the community, spouse’s qualifications",
      maxPoints:"35"
    },
    {
      criteria:"Maximum Points",
      description:"",
      maxPoints:"175"
    },
  ]

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
          h3="Alberta Rural Entrepreneur"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Alberta Immigrant Nominee Program
              {" > "}Alberta Rural Renewal Stream
            </div>
            <div class="pages-header">
            Alberta Rural Entrepreneur
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Alberta Rural Entrepreneur Stream (RES) is an immigration stream that is part of the Alberta Advantage Immigration Program. It allows the candidates a chance to secure Permanent Residency in Canada. The pathway is specifically for entrepreneurs who wish to establish or purchase a business in rural communities of Alberta in Canada. These candidates can submit an Expression of Interest, post which their application is evaluated and processed. The stream stimulates economic growth in rural areas by attracting skilled entrepreneurs who can develop communities and create job requirements.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={keyRef}>
            Key Components of the Program
            </div>
            <div className="pages-paragraph">
            Let us first understand the different components of the program - 
           
            <div style={{
                fontWeight:"bold",
                margin:"12px 0"
              }}>Who is an Entrepreneur?</div>

              <div>An entrepreneur is an individual who initiates a business venture to generate profit. 

                <ul>
                  <li>They play an important role in Alberta’s economy by identifying market needs.</li>
                  <li>They also create job opportunities. </li>
                </ul>
              </div>

              <div style={{
                fontWeight:"bold",
                margin:"12px 0"
              }}>Rural Alberta</div>

              <div>According to the Alberta Advantage Immigration Program, rural Alberta includes communities with populations of less than 100,000, excluding the Calgary and Edmonton Census Metropolitan Areas. 
              </div>

              <div style={{
                fontWeight:"bold",
                margin:"12px 0"
              }}>Participating Communities</div>

              <div>Entrepreneurs interested in a specific rural community should reach out to the designated community contact person to discuss their business proposal. Each community has its process for scheduling exploratory visits. Communities only meet potential entrepreneurs they find suitable.
              </div>

              <div style={{
                fontWeight:"bold",
                margin:"12px 0"
              }}>Exploratory Visit</div>

              <div>An exploratory visit is an important step in the application process for the Alberta Rural Entrepreneur program. This visit can be conducted in person or via web-based video conferencing, as mutually decided by the community and the candidate. 
              </div>

              <div style={{
                fontWeight:"bold",
                margin:"15px 0"
              }}>
                <span style={{
                  color:"red"
                }}>Check Out: </span>
                <span style={{
                  color:"blue"
                }}>Provincial Nominee Program</span>
              </div>

            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={eligibilityRef}>
            Eligibility Requirements for the Rural Entrepreneur Stream
            </div>
            <div className="pages-paragraph">
            To be eligible for the Rural Entrepreneur Stream under the Alberta Advantage Immigration Program (AAIP), you must meet specific criteria like- 

            <div>

              <div style={{
                margin:"15px 0"
              }}><strong>Work Experience
              </strong></div>
             <ul>
              <li>You must have a minimum of 3 years of experience as an active business owner/manager. </li>
              <li>Otherwise, you can also qualify with a minimum 4 years of experience as a senior manager within the past ten years. </li>

              
             </ul>

             <div style={{
                margin:"15px 0"
              }}><strong>Education
              </strong></div>
             <ul>
              <li>You must have completed at least a high school education equivalent to the Canadian standard. </li>
              <li>This qualification must be supported by an Education Credential Assessment (ECA) from designated organizations.</li>

              
             </ul>


             <div style={{
                margin:"15px 0"
              }}><strong>Language Proficiency
              </strong></div>
             <ul>
              <li>You are required to achieve a minimum Canadian Language Benchmark (CLB) level of 4 for each language skill in English or French. </li>
              <li>Official language test results must be less than two years old at the time of submitting an Expression of Interest (EOI).</li>

              
             </ul>


             <div style={{
                margin:"15px 0"
              }}><strong>Net Worth
              </strong></div>
             <ul>
              <li>You must have a minimum net worth of $300,000. </li>
              <li>All assets should belong to the candidate, their spouse, or common-law partner.</li>

              
             </ul>


             <div style={{
                margin:"15px 0"
              }}><strong>Business Investment
              </strong></div>
             <ul>
              <li>A minimum investment of $100,000 is required from your spouse/common-law partner’s equity. </li>
              <li>You can receive additional points for a higher investment level.</li>
             </ul>

             <div style={{
                margin:"15px 0"
              }}><strong>Business Establishment
              </strong></div>
             <ul>
              <li>You must have a minimum ownership of 51% for a new business.  </li>
              <li>In cases of business succession, you must hold 100% ownership, resulting in a complete change in ownership, where you assume full control of the business. </li>
             </ul>

             <div style={{
                margin:"15px 0"
              }}><strong>Job Creation
              </strong></div>
             <ul>
              <li>New businesses are required to create at least one full-time job for Canadian citizens or permanent residents (excluding relatives) for a minimum period of 6 months. </li>
              <li>For business succession, job creation is not mandatory, although points can still be awarded for it.</li>
             </ul>

             <div style={{
                margin:"15px 0"
              }}><strong>Community Support Letter
              </strong></div>
             <ul>
              <li>You must obtain a Community Support Letter from a participating rural Alberta community.</li>
              <li>It indicates the community's endorsement of your business proposal to support your settlement in Alberta.</li>
              <li>This letter is essential for submitting an Expression of Interest (EOI) to the AAIP.</li>
             </ul>

              </div>
             
            </div>
           
            <div className="pages-header-2" ref={processRef}>
            Application Process for ARE
            </div>
            <div className="pages-paragraph">
            To apply to the ARE stream, the given steps need to be followed-

               <ol style={{
                listStyleType:'decimal',
                marginLeft:"30px"
               }}>
                  
                  <li className="my-3"><strong>Expression of Interest (EOI)</strong></li>
                <div>Candidates must submit an Expression of Interest (EOI) through the AAIP portal and pay an application fee of $200. It should outline their business plan and intentions for establishing a business in a rural area. Your application will be scored within 30 days. </div>

                <li className="my-3"><strong>Receive an Invitation to Apply (ITA)</strong></li>
                <div>If the EOI is successful, candidates will receive an Invitation to Apply (ITA) for the Alberta Rural Entrepreneur Stream. The AAIP may select candidates based on their business plans and alignment with community needs.</div>


                <li className="my-3"><strong>Submit Application</strong></li>
                <div>Upon receiving the ITA, candidates must submit a complete application with $3,500 non-refundable fee, including:
                  <ul>
                    <li>A business plan detailing the proposed business.</li>
                    <li>Evidence of funds available for investment.</li>
                    <li>Personal identification and language proficiency proof.</li>
                  </ul>
                  It should also include Business Plan Evaluation Report and Qualified Service Provider Report.
                </div>


                <li className="my-3"><strong>Business Performance Agreement</strong></li>
                <div>Candidates must submit an Expression of Interest (EOI) through the AAIP portal and pay an application fee of $200. It should outline their business plan and intentions for establishing a business in a rural area. Your application will be scored within 30 days. </div>

                <div className='mt-3'>Candidates must submit an Arrival Report to the AAIP within 30 days of the work permit issuance date. After each 6-month period, candidates need to submit a Business Progress Report to the AAIP, demonstrating compliance with the Business Performance Agreement.
                </div>
                </ol>

            </div>


            <div className="pages-header-2" ref={ruralRef}>
            Rural Entrepreneur Stream Points Grid
            </div>
            <div className="pages-paragraph">
            Candidates for this stream are selected based on the Rural Entrepreneur Stream Points Grid. Those with the highest-ranking points are invited to submit a Business Application.

            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criteria</th>
                        <th>Description</th>
                        <th>Max Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ruralTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.criteria}</td>
                          <td>{row.description}</td>
                          <td>{row.maxPoints}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            
            <div className='my-3'><strong>*Not a mandatory requirement</strong></div>

            <div>Once candidates fulfill all conditions outlined in the Business Performance Agreement, they can apply for a nomination for Permanent Residency. They must submit a Final Report for Nomination along with supporting business documents to the AAIP. If the Final Report is approved, the AAIP will notify Immigration, Refugees and Citizenship Canada (IRCC) of the nomination and provide instructions for applying for permanent residency. If the Final Report is declined, the candidate will receive a decision letter explaining the reasons for the decline. If an error was made in assessing the application, candidates may submit a Request for Reconsideration for a fee of CAD 250.
            </div>

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

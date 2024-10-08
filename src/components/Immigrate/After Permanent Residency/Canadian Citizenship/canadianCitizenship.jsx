import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";


const faqItems = [
  {
    question: "Can Canadian citizenship be revoked?",
    answer: "Canadian citizenship can be withdrawn under exceptional circumstances like:",
    listAnswer: [
      "If citizenship was acquired through fraud.",
      "If the individual has committed a crime.",
      "If their permanent residence had been withdrawn before they became citizens."
    ]
  },
  {
    question: "What are the common reasons for denial of Canadian citizenship applications?",
    answer: "Not all Canadian citizenship applicants get approved. Denials are very common due to the following reasons:",
    listAnswer: [
      
      "Failure to meet residency requirements",
      "Lack of acceptable language skills",
      "Criminal record and connection with criminal activity",
      "Incompletion or error in application forms",
      "Pendency of other immigration cases or unresolved PR status"
    ]
  },
  {
    question: "If I was born outside of Canada to Canadian citizen parents am I automatically a Canadian citizen?",
    answer: "Yes, if you were born outside of Canada to a Canadian citizen parent, then you are automatically a Canadian citizen."
  },
  {
    question: "Can one lose his or her citizenship of Canada?",
    answer: "Yes, one can lose his or her citizenship in Canada if he or she renounces his or her citizenship or if the person is declared to have committed a serious crime."
  },
  {
    question: "What is the difference in the rights of a Canadian Citizen and Permanent Resident?",
    answer: "Canadian citizens and permanent residents share many rights, but there are notable differences."
  }
];

export default function CanadianCitizenship() {

  const aboutRef = useRef(null);
  const pathwayRef = useRef(null);
  const birthRef = useRef(null);
  const naturalizationRef = useRef(null);
  const eligibilityRef = useRef(null);
  const applyRef = useRef(null);
  const faqRef = useRef(null);
  const descentRef= useRef(null);

  const tableContentData = [
    {
      title: "What are the benefits of Canadian Citizenship?",
      scrollTo: aboutRef
    },
    {
      title: "Pathways to Canadian Citizenship",
      scrollTo: pathwayRef,
      subItems: [
        { title: "Citizenship by Birth", scrollTo: birthRef },
        { title: "Citizenship by Descent", scrollTo: descentRef },
        { title: "Citizenship by Naturalization", scrollTo: naturalizationRef },
      ],
    },
    {
      title: "Eligibility Requirements for Canadian Citizenship",
      scrollTo: eligibilityRef
    },
    {
      title: "Steps to Apply for Canadian Citizenship",
      scrollTo: applyRef
    },
    {
      title: "FAQs",
      scrollTo: faqRef
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
          h2="Canadian Citizenship"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}After Permanent Residency
              {" > "}Canadian Citizenship
            </div>
            <div class="pages-header">Canadian Citizenship</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Immigrants are attracted to Canadian citizenship because of its quality of living and healthcare facilities. According to statistics from Immigration, Refugees and Citizenship Canada, more than 374,000 people have gained Canadian citizenship in just last year.
              <div className="pages-paragraph">
              With 85% of permanent residents becoming citizens, the citizenship rate in Canada remains high. Citizenship is obtained through naturalization, with the majority of citizens coming from India, the Philippines, China, Nigeria, and Pakistan. In 2023, India remained the top country of origin for new Canadian citizens. This contributed to 20% of all naturalizations.
              </div>
              <div className="pages-paragraph">
              23% of Canada’s total population is made up of immigrants, and over 60% of immigrants eventually become citizens. Canadian citizenship comes with many benefits such as voting rights, access to health and social services, and the unrestricted ability to live, work, and travel throughout and outside the country.
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
            What are the benefits of Canadian Citizenship?
            </div>
            <div className="pages-paragraph">
            A Canadian citizen has many privileges such as:
              <ul className='my-3'>
                <li>
                Canadian citizens can vote in federal, provincial, and municipal elections taking part in the democratic process.
                </li>
                <li>
                It does not require any kind of renewal and offers lifetime status.
                </li>
                <li>
                Canadian Citizens can enter 172 countries with a visa-free or a visa-on-arrival status as per their passport.
                </li>
                <li>
                They get access to social benefits such as free healthcare, social welfare schemes, and pension schemes.
                </li>
              </ul>
              Canada allows dual or multiple citizenship, allowing you to hold citizenship in more than one country.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={pathwayRef}>
            Pathways to Canadian Citizenship
            </div>

            <div className="pages-paragraph">
            On the basis of your current status, there are several routes you can opt to obtain Canadian citizenship such as:
             
              <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
                <li className='my-2' ref={birthRef}>
                  
                  <span ><strong>Citizenship by Birth</strong>
                  </span>

                  <ul className='my-2'>
                    <li>
                    Individuals born in Canada automatically acquire citizenship, irrespective of their parents' immigration status.
                    </li>
                    <li ref={naturalizationRef}>
                    Children born abroad to at least one Canadian citizen parent also qualify for citizenship by descent, provided the parent was a first-generation Canadian citizen.
                    </li>
                  </ul>
                  
                  
                </li>

                <li className='my-2' ref={descentRef}>
                  
                  <span ><strong>Citizenship by Descent</strong>
                  </span>

                  <ul className='my-2'>
                    <li>
                    If you were born outside the country to a Canadian citizen, you qualify for citizenship by descent.
                    </li>
                    <li>
                    However, this only applies to the first generation born outside Canada.
                    </li>
                  </ul>
                  
                  
                </li>

                <li>
                  
                  <span ><strong>Citizenship by Naturalization</strong>
                  </span>

                  <ul className='my-2'>
                    <li>
                    The most common pathway for immigration is through naturalization. 
                    </li>
                    <li>
                    After living in the country for 1095 days, the immigrants who become PRs can apply for citizenship.
                    </li>
                  </ul>
                  
                  
                </li>
              </ol>

              <div className="mt-5">
                <span style={{
                  color:'red'
                }}><strong>Check: <a style={{
                  color:'blue'
                }}>Express Entry</a></strong></span>
              </div>
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Eligibility Requirements for Canadian Citizenship
            </div>
            <div class="pages-paragraph">
            To become a Canadian citizen, individuals must meet several eligibility criteria:
            </div>

            <ol style={{ listStyle: "decimal", listStylePosition: "inside" }} className='my-2 ml-3'>
              <li>
                You must have PR status in Canada. This means you hold a PR card and live in Canada without immigration violations.
               
              </li>

              <li>
              You must have lived in Canada for at least 3 years (1,095 days) out of the 5 years preceding your application. These days do not have to be consecutive.
You must have filed your taxes in Canada for at least three years within the five-year period before applying.

                
              </li>

              <li>
              You must have filed your taxes in Canada for at least three years within the five-year period before applying.
                
              </li>

              <li>
              You need proper knowledge of English or French, the two official languages of Canada. If you're between the ages of 18 and 54, you'll need to provide language test results or proof of education in either language.
              </li>

              <li>
              If you are between 18 and 54 years old, you must pass a citizenship test to show your knowledge of Canadian history, values, institutions, and rights.
              </li>

            </ol>

            <div class="pages-header-2" ref={applyRef}>
            Steps to Apply for Canadian Citizenship
            </div>
            <div className="pages-paragraph">
            The application process for Canadian citizenship is pretty straightforward:

            <ol style={{ listStyle: "decimal", listStylePosition: "inside" }} className='my-2 ml-3'>
              <li>
              Collect documents like proof of <a href='#' style={{color:'blue'}}><strong>permanent residency</strong></a>, tax records, language test results, and ID.
               
              </li>

              <li>
              Fill out the Canadian citizenship application form available on the official Immigration, Refugees and Citizenship Canada (IRCC) website. For children under the age of 18, you need to fill the application separately.

                
              </li>

              <li>
              The processing fee for adult applications is CAD 630 (including the right of citizenship fee). For children, the fee is CAD 100.
                
              </li>

              <li>
              Mail your completed application form and supporting documents to the IRCC office. 
              </li>

              <li>
              If you're between 18 and 54, you’ll be required to take a citizenship test. This is a written test, but sometimes it may be administered orally.
              </li>
              <li>
              Some candidates are required to appear for an interview to check residency requirements.
              </li>

            </ol>

            If your application is accepted you will be invited to a citizenship ceremony, where you'll take an Oath of Citizenship. From that time on, officially you're a Canadian citizen and your certificate of citizenship will be issued. By understanding the different pathways to citizenship and preparing for the application process, you can increase your chances of becoming a proud Canadian citizen.
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

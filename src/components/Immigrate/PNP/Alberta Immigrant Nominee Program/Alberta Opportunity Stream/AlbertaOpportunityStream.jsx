import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/DualNestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What are the income requirements for the Alberta Opportunity Stream?",
    answer: "The income requirements for the Alberta Opportunity Stream have changed as of November 1, 2018. There is no requirement for applicants to demonstrate a minimum annual income. Applicants still must demonstrate sufficient funds to support themselves and their family members upon moving to Alberta.",
   
  },
  {
    question:
      "What happens if my job offer expires before the immigration process is complete?",
    answer:
      " Your job offer must be valid for at least 120 days from the date of your application submission. If your job offer expires before the immigration process concludes, it may affect your eligibility, and you may need to secure a new job offer.",
      listAnswer:[{
          text:"Eligible Occupations",
          subTextInBullet:[
          "Applicants must be employed in an eligible occupation at the time of application and assessment by the Alberta Advantage Immigration Program (AAIP).", 
          "Most jobs classified under the National Occupational Classification (NOC) TEER categories 0, 1, 2, 3, 4, and 5 are considered eligible." ]
      },
      {
        text:"Ineligible Occupations",
          subTextInBullet:[
          "NOC 00 positions (senior management roles)", 
          "Elementary and secondary school teachers",
        "Taxi drivers",
        "Other specific roles that do not meet provincial labor market needs."
       ]
      }
    ]
  },
];

export default function BritishColumbiaPilotProgram() {
  const aosRef = useRef(null);
  const permitRef = useRef(null);
  const occupationRef = useRef(null);
  const languageRef = useRef(null);
  const requirementsRef = useRef(null);
  const workRef = useRef(null);
  const jobRef = useRef(null);
  const criteriaRef= useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Requirements for AOS",
      scrollTo: aosRef,
      subItems: [
        {
          title: "Residency and Work Permit Requirement",
          scrollTo: permitRef,
        },
        {
          title: "Occupation",
          scrollTo: occupationRef,
        },
        {
          title: "Language Proficiency",
          scrollTo: languageRef,
        },
        {
          title: "Education Requirements",
          scrollTo: requirementsRef,
        },
        {
          title: "Work Experience",
          scrollTo: workRef,
        },
        {
          title: "Job Offer",
          scrollTo: jobRef,
        },
      ],
    },
    {
      title: "Application Process for Alberta Opportunity Stream",
      scrollTo: criteriaRef,
    },
  
    {
      title: "FAQ's",
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
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="Alberta Immigrant Nominee Program"
          h3="Alberta Opportunity Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Alberta Immigrant Nominee Program
              {" > "}Alberta Opportunity Stream
            </div>
            <div class="pages-header">Alberta Opportunity Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Alberta Opportunity Stream (AOS) is an immigration pathway under the Alberta Advantage Immigration Program (AAIP). It offers temporary foreign workers already living and working full-time in Alberta the chance to obtain PR in Canada. The workers need to have a positive Labour Market Impact Assessment or an accepted LMIA exemption work permit. The stream is formed basically to address the shortage of labour in Alberta by selecting individuals who can contribute to the country’s economy.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aosRef}>
            Eligibility Requirements for AOS
            </div>
            <div className="pages-paragraph">
            To qualify for the Alberta Opportunity Stream, you need to meet some criteria such as:

            <div style={{
              fontWeight:'bold',
              fontSize: '22px',
              margin:'20px 0'
            }} ref={permitRef}>Residency and Work Permit Requirement</div>
         <ul>
          <li>You must be living and working in Alberta at the time of your application.</li>
          <li>You need a valid temporary resident status and a valid temporary resident work permit – not status maintained.</li>
         </ul>

         <div style={{
              fontWeight:'bold',
              fontSize: '22px',
              margin:'20px 0'
            }} ref={occupationRef}>Occupation</div>
         <ul>
          <li>You must be working in an eligible National Occupational Classification (NOC) occupation in Alberta.</li>
          <li>Most occupations under NOC TEER 0, 1, 2, 3 4 and 5 are eligible.</li>
          <li>People working in certain ineligible occupations are not eligible to apply for the program. These occupations are classified as NOC 00 or include other positions like judges, authors, athletes, etc.</li>
         </ul>

         <div style={{
              fontWeight:'bold',
              fontSize: '22px',
              margin:'20px 0'
            }} ref={languageRef}>Language Proficiency</div>
         <ul>
          <li>You must meet specific language proficiency standards in either English or French based on your NOC TEER category.

            <ul>
              <li><strong>NOC TEER 0, 1, 2, 3 occupations: </strong>Minimum Canadian Language Benchmark (CLB) score of 5 for each skill in English, or Niveaux de compétence linguistique canadiens (NCLC) score of 5 for French.</li>

              <li><strong>NOC TEER 4, 5 occupations: </strong>Minimum Canadian Language Benchmark (CLB) score of 5 for each skill in English, or Niveaux de compétence linguistique canadiens (NCLC) score of 5 for French.</li>

              <li><strong>NOC 33102 (nurse aides, orderlies, and patient service associates):  </strong>Minimum CLB/NCLC score of 7 for each language skill.</li>
            </ul>
<div className='mt-4'> <strong>Note: </strong>Test results should be less than 2 years old.</div>
           
          </li>
         
         </ul>

         <div style={{
              fontWeight:'bold',
              fontSize: '22px',
              margin:'20px 0'
            }} ref={occupationRef}>Education Requirements</div>

            <div style={{
              fontWeight:'bold',
              margin:'15px 0'
            }} >
            For applicants (except Post-Graduation Work Permit holders):
            </div>
         <ul>
          <li>You must have completed the equivalent of a Canadian high school education with an Educational Credential Assessment (ECA).</li>
          <li>An ECA is not needed if you have a valid Alberta Qualification Certificate or a trade certificate recognized by Alberta Apprenticeship and Industry Training (AIT).</li>
         </ul>

         <div style={{
              fontWeight:'bold',
              margin:'15px 0'
            }} >
           For Post-Graduation Work Permit (PGWP) holders:
            </div>
         <ul>
          <li>Post-graduate work permit holders must have graduated from an eligible Alberta post-secondary institution.</li>
         </ul>

         <div style={{
              fontWeight:'bold',
              fontSize: '22px',
              margin:'30px 0'
            }} ref={workRef}>Work Experience</div>
         <ul className='mb-4'>
          <li>You must have at least 12 months of full-time work experience in Alberta within the last 18 months.
          </li>
          <li>Alternatively, you must have 24 months of full-time work experience in Canada/abroad within the last 30 months.
           </li>
         </ul>

         For post-graduate work permit holders, you must have a minimum of 6 months of full-time work in Alberta within the last 18 months in an occupation related to your Alberta studies.

         <div style={{
              fontWeight:'bold',
              fontSize: '22px',
              margin:'30px 0'
            }} ref={jobRef}>Job Offer</div>

            <div className='my-3'>All applicants, including PGWP holders, must have a full-time job offer from an Alberta employer in their current occupation at the time of application and assessment. </div>

            <strong className='my-5'>Ineligible Applicants:</strong>

         <ul className=''>
         
          <li>Part-time, casual, or seasonal employees
          </li>
          <li>Independent contractors, business owners, or temp agency workers
           </li>
           <li>Employees working from home-based businesses or outside Alberta (e.g., telecommuting)
           </li>
         </ul>

         <div style={{
          fontWeight:"bold",
          marginTop:"20px"
         }}><span style={{ 
          color:"red"
         }}>Also Check: </span> <span style={{ 
          color:"blue"
         }}>PNP Streams</span></div>

            </div>


            <div class="pages-header-2" ref={criteriaRef}>
            Application Process for Alberta Opportunity Stream
            </div>
            <div className="pages-paragraph">
            The Alberta Opportunity Stream is open year-round, allowing eligible candidates to apply at any time. Applications are processed on a first-come, first-served basis and must be submitted online through the portal.

            <div className="my-3">Once approved by Alberta, successful applicants will receive an official provincial nomination. They then have 6 months to submit a paper-based federal application for permanent residence. Processing for these applications typically takes 18 months.</div>

            <div className='my-3'><strong>Steps to Apply: </strong></div>
         <ul>
          <li>Gather proof of employment, education credentials, language test results, work permits, and certifications for regulated occupations.</li>
          <li>Applications are submitted online via the AAIP portal. Ensure accuracy to avoid delays or rejections.</li>
          <li>Applications are processed and status updates are provided.</li>
          <li>Upon receiving your nomination, you can apply for permanent residency through IRCC using your nomination certificate.</li>
         </ul>

         <div className="my-3">using your nomination certificate.
The application fee for the Alberta Opportunity Stream is 500 CAD, which is non-refundable.
</div>

<div>The Alberta Opportunity Stream provides a route for skilled workers and recent graduates in Alberta to secure permanent residency. With its reasonable requirements and streamlined process, AOS is an option for individuals looking to build a future in Alberta.</div>

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

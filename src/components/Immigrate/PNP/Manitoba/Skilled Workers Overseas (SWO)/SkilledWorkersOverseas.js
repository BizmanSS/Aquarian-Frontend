import React, { useRef , useEffect} from "react";
import { useLocation } from 'react-router-dom';

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [

  {
    question: "Can I apply to the Manitoba Skilled Workers Overseas stream if I don’t have a job offer?",
    answer:
      "Yes, you can apply without a job offer if you have a strong connection to Manitoba, such as family, past education or work experience in the province, or an invitation from Manitoba through a recruitment initiative.",
  },
  {
    question:
      "What happens if I receive an invitation through Manitoba’s recruitment initiative?",
    answer:
      "If you receive an invitation from Manitoba as part of a recruitment event, you can apply directly through the Skilled Workers Overseas stream. This invitation enhances your chances of being nominated, as it shows that the province is actively interested in your skills.",
  },
 
];

const rankingTableData=[
  {
    factor:"Language Proficiency",
    ranking:"CLB 8+",
    maximum:"20"
  },
  {
    factor:"",
    ranking:"CLB 7",
    maximum:"18"
  },
  {
    factor:"",
    ranking:"CLB 6",
    maximum:"16"
  },
  {
    factor:"",
    ranking:"CLB 5",
    maximum:"14"
  },
  {
    factor:"",
    ranking:"CLB 4",
    maximum:"12"
  },
  {
    factor:"",
    ranking:"Second Language CLB 5+",
    maximum:"5"
  },

  {
    factor:"Age",
    ranking:"21-45",
    maximum:"10"
  },
  {
    factor:"",
    ranking:"18-20, 46-48",
    maximum:"4-8"
  },
  {
    factor:"",
    ranking:"49+",
    maximum:"0-2"
  },
  {
    factor:"Work Experience",
    ranking:"4+ years",
    maximum:"15"
  },
  {
    factor:"",
    ranking:"1-3 years",
    maximum:"8-12"
  },
  {
    factor:"Education",
    ranking:"Master’s/Doctorate",
    maximum:"25"
  },
  {
    factor:"",
    ranking:"Two post-secondary programs",
    maximum:"23"
  },
  {
    factor:"",
    ranking:"One post-secondary (2+ years)",
    maximum:"20"
  },
  {
    factor:"",
    ranking:"Trade certificate or 1-year post-secondary",
    maximum:"14"
  },
  {
    factor:"Adaptability",
    ranking:"Close relative/MPNP invitation",
    maximum:"20"
  },
  {
    factor:"",
    ranking:"Work or education in Manitoba",
    maximum:"10-12"
  },
  {
    factor:"",
    ranking:"Regional immigration",
    maximum:"5"
  },
]

export default function SkilledWorkersInManitoba() {
  const skilledRef = useRef(null);
  const manitobaRef = useRef(null);
  const humanRef = useRef(null);
  const eligibilityRef = useRef(null);
  const rankingRef= useRef(null);
  const faqRef = useRef(null);

  const sectionRefs = useRef({});
  const location = useLocation();

  const tableContentData = [
    {
      title: "Skilled Workers Overseas Stream",
      scrollTo: skilledRef,
    },
    {
      title: "Manitoba Express Entry Pathway",
      scrollTo: manitobaRef,
    },
    {
      title: "Manitoba Human Capital Pathway",
      scrollTo: humanRef,
    },
    {
      title: "Eligibility Requirements ",
      scrollTo: eligibilityRef,
    },
    {
      title: "Ranking System",
      scrollTo: rankingRef,
    },
    {
      title: "FAQs",
      scrollTo: faqRef,
    },
    
  ];

  useEffect(() => {
    const section = location.state?.section;
    if (section && sectionRefs.current[section]) {
      const offsetPosition = sectionRefs.current[section].offsetTop - 40;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, [location]);

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
          h2= "Manitoba"
          h3= "Skilled Workers Overseas (SWO)"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Manitoba
              {" > "}Manitoba Skilled Workers Overseas
            </div>
            <div class="pages-header">Manitoba Skilled Workers Overseas</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Skilled Workers Overseas stream of the Manitoba Provincial Nominee Program is for individuals having skills and experience to fill labor market gaps in Manitoba but currently residing outside Canada. The candidates are nominated on the basis of an established connection to Manitoba through family members/friends, previous education, or an ITA directly from MPNP. The 3 sub streams of the program are Skilled Workers Overseas Stream, Manitoba Express Entry Pathway, and Manitoba Human Capital Pathway. Applicants with successful nomination can further apply for Canadian permanent residency. The minimum score required to be eligible for the streams of Manitoba Skilled Workers Overseas Program is 60 points on MPNP Assessment Grid.
             
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={(el) => {
                skilledRef.current= el;
                sectionRefs.current['Manitoba Skilled Workers Overseas Stream'] = el;
              }}>
            Skilled Worker in Manitoba Stream
            </div>
            <div className="pages-paragraph">
            Skilled Workers Overseas Stream
            <div className='my-3'>The stream targets skilled individuals with strong connection to Manitoba through:</div>
              <ul className="my-3">
                <li>
                Applicants need a valid work permit with atleast 6 months of full-time employment with their current employer.
                </li>
                <li>
                This stream operates on an Expression of Interest system where candidates submit profiles online. 
                </li>
                <li>
                The profiles are then ranked, with the highest-ranking candidates receiving a Letter of Advice to Apply (LAA) for provincial nomination
                </li>
              </ul>
              This stream is ideal for those who may not currently live in Manitoba but have the potential to establish themselves in the province.
            
            </div>

            <div className="note-cec">
              <div >
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={(el) => {
                manitobaRef.current= el;
                sectionRefs.current['Manitoba Express Entry Pathway'] = el;
              }}> 
            Manitoba Express Entry Pathway
            </div>
            <div className="pages-paragraph">
            The Manitoba Express Entry Pathway is for candidates already in the Express Entry pool with skills aligned with the province’s in-demand occupations.  
              <ul className="my-2 ml-3">
                <li>
                The pathway is for highly skilled workers with qualifications in healthcare, trades, and information technology, or other sectors. 

                </li>

                <li>
                Manitoba nominates candidates from this stream, giving them an extra 600 points in the Express Entry system, which increases their chances of receiving an ITA for permanent residency.

                </li>

               
              </ul>
            </div>

            <div className="pages-header-2" ref={(el) => {
                humanRef.current= el;
                sectionRefs.current['Manitoba Human Capital Pathway'] = el;
              }}>
            Manitoba Human Capital Pathway
            </div>
            <div className="pages-paragraph">
            This pathway of Manitoba Skilled Worker Overseas Program focuses on individuals with the skills and experience needed to fill Manitoba's current labor shortages.  
              <ul className="my-2 ml-3">
                <li>
                Candidates must demonstrate the ability to contribute to the economy and integrate into the community, based on their training, work experience, language skills, and other factors. 
                </li>

                <li>
                The Human Capital Pathway seeks individuals with strong potential for employment in industries facing critical shortages, ensuring the long-term sustainability of Manitoba’s workforce.

                </li>

               
              </ul>
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Eligibility Requirements for the Skilled Workers Overseas Stream
            </div>
            <div className="pages-paragraph">
            To be eligible for the Skilled Workers Overseas stream, candidates must meet the following criteria:
            <div style={{ 
              fontWeight:"bold",
              fontSize:"22px",
              marginTop:"20px"
            }}>Manitoba Support:</div>

            <div className="my-5">The candidate must have a close relative or friend residing in Manitoba who can endorse their settlement plan. The supporter must have lived in Manitoba for at least one year and be a Canadian citizen or permanent resident.</div>
             


              <div style={{ 
              fontWeight:"bold",
              fontSize:"22px",
              marginTop:"20px"
            }}>Manitoba Experience:</div>

            <div className="my-5">Applicants with previous work experience or education in Manitoba can apply under this category. Temporary foreign workers must have worked in Manitoba for at least six months, while international students must have completed a post-secondary program in the province.</div>

            <div style={{ 
              fontWeight:"bold",
              fontSize:"22px",
              marginTop:"20px"
            }}> Manitoba Invitation:</div>

            <div className="my-5">This is for individuals who have received a direct Invitation to Apply from the MPNP as part of a recruitment initiative or exploratory visit.
            </div>
         
           
            </div>

            <div class="pages-header-2" ref={rankingRef}>
            Ranking System for Manitoba’s Skilled Workers Overseas Stream
            </div>
            <div class="pages-paragraph">
            <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Factor</th>
                        <th>Criteria</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rankingTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.factor}</td>
                          <td>{row.ranking}</td>
                          <td>{row.maximum}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

          

              <div className='my-5'>The Skilled Worker Overseas stream provides a pathway for skilled workers with a connection to Manitoba to apply for PR. By fulfilling the connection requirements and scoring well, applicants can enhance their chances of being selected for the Manitoba Provincial Nominee Program (MPNP).</div>
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

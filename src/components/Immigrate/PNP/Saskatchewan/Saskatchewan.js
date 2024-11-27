import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      " Can I apply to Saskatchewan Farm Stream if I don't have prior farming experience?",
    answer:
      "No, prior farming experience is essential for the Farm Owners and Operators Stream.",
  },
  {
    question:
      " Are there language proficiency requirements for Saskatchewan Entrepreneur and Farm Streams?",
    answer:
      " There are no minimum language proficiency requirements specified for these streams.",
  },
];

export default function SaskatchewanPNP
() {
  const faqRef = useRef(null);
  const EntrepreneurRef = useRef(null);
  const OperatorsRef = useRef(null);
  const SkilledRef = useRef(null);
  const ExpressEntryRef = useRef(null);
  const EmploymentOfferRef = useRef(null);
  const OccupationRef = useRef(null);
  const InternationalSkilledRef = useRef(null);
  const HardToFillRef = useRef(null);
  const ExperienceRef = useRef(null);
  const WorkPermitRef = useRef(null);
  const ProfessionalsRef = useRef(null);
  const GraduateRef = useRef(null);
  const StudentsRef = useRef(null);
  const TruckDriverRef = useRef(null);
  const HospitalityRef = useRef(null);

  const SaskatchewanEntrepreneurRef = useRef(null);


  const tableContentData = [
    {
      title: "Saskatchewan International Skilled Worker",
      scrollTo: SkilledRef,
      subItems: [
        {
          title: "Saskatchewan Express Entry",
          scrollTo: ExpressEntryRef,
        },
        {
          title: "Saskatchewan Employment Offer",
          scrollTo: EmploymentOfferRef,
        },
        {
          title: "Saskatchewan In-Demand Occupation",
          scrollTo: OccupationRef,
        },
        {
          title: "Saskatchewan International Skilled Worker Tech Talent Pathway",
          scrollTo: InternationalSkilledRef,
        },
        {
          title: "Saskatchewan Hard-to-fill Skills Pilot",
          scrollTo: HardToFillRef,
        },
      ],
    },
    {
      title: "Saskatchewan Experience",
      scrollTo: ExperienceRef,
      subItems: [
        {
          title: "Saskatchewan Existing Work Permit",
          scrollTo: WorkPermitRef,
        },
        {
          title: "Saskatchewan Health Professionals",
          scrollTo: ProfessionalsRef,
        },
        {
          title: "Saskatchewan Hospitality Sector Project",
          scrollTo: HospitalityRef,
        },
        {
          title: "Saskatchewan Long-Haul Truck Driver Project",
          scrollTo: TruckDriverRef,
        },
        {
          title: "Saskatchewan Students",
          scrollTo: StudentsRef,
        },
      ],
    },
    {
      title: "Saskatchewan Entrepreneur and Farm",
      scrollTo: EntrepreneurRef,
      subItems: [
        {
          title: "Saskatchewan Entrepreneur",
          scrollTo: SaskatchewanEntrepreneurRef,
        },
        {
          title: "Saskatchewan Farm Owners and Operators",
          scrollTo: OperatorsRef,
        },
        {
          title: "Saskatchewan International Graduate Entrepreneur Category",
          scrollTo: GraduateRef,
        },
      ],
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
          h2="Saskatchewan"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "}Saskatchewan
            </div>
            <div class="pages-header">Saskatchewan </div>
            <div class="pages-paragraph space-fix intro-size-fix">
            Saskatchewan, one of Canada's provinces, is bordered by Alberta, Manitoba, and the Northwest Territories. This province is known for its flat terrain and fertile soil, making it a key agricultural hub. Saskatchewan also has a low unemployment rate and a growing urban population in major cities like Saskatoon and Regina.It offers a high standard of living, lower costs of living compared to larger Canadian cities, and a welcoming community atmosphere. 
            <br></br>
            Saskatchewan actively attracts immigrants due to its economy that spans agriculture, mining, and energy sectors. The Saskatchewan Immigrant Nominee Program is a PNP operated by the province of Saskatchewan. It is strategically crafted to attract immigrants to sectors that will benefit the province, including skilled workers, individuals in occupations facing labor shortages, those with job offers, and entrepreneurs. 


              
            </div>
            The SINP includes 3 main categories: International Skilled Worker, Saskatchewan Experience, and Entrepreneur and Farm.

            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={InternationalSkilledRef}>
            Saskatchewan International Skilled Worker
            </div>
            <div className="pages-paragraph">
            These streams are for skilled workers with the ability to join Saskatchewan’s work force. This category targets skilled workers who can contribute to Saskatchewan's economy. It includes 3 sub-streams:
            <div class="text-2xl font-bold my-3" ref={ExpressEntryRef}>Saskatchewan Express Entry</div>

The Saskatchewan Express Entry stream allows candidates already in the federal Express Entry pool to apply for provincial nomination. 

              <ul className="my-3">
                <li>
                Applicants must have a valid Express Entry profile and meet specific eligibility criteria related to their skills, work experience, and language proficiency. 
                </li>
                <li>
                A nomination from this stream grants an additional 600 points in the Comprehensive Ranking System (CRS).

                </li>
                <li>
                Applicants must have at least one year of work experience in an occupation classified under the National Occupational Classification (NOC) TEER level A, B, or 0. 

                </li>
                
              </ul>
             
            </div>

            <div class="text-2xl font-bold my-3" ref={EmploymentOfferRef}>Saskatchewan Employment Offer
</div>

This stream is for skilled workers who have a job offer from a Saskatchewan employer. 

              <ul className="my-3">
                <li>
                Candidates must have a valid job offer in NOC Teer 0, A, or B in a designated trade.

                </li>
                <li>
                They must have CLB Level 4 or higher language proficiency.


                </li>
               
                
              </ul>
              These applicants must also have at least 60 points in the SINP assessment grid.

            
              <div class="text-2xl font-bold my-3" ref={OccupationRef}>Saskatchewan In-Demand Occupation

</div>

The In-Demand Occupation stream targets skilled workers who do not have a job offer but has skills in occupations that are currently in demand in Saskatchewan. 

              <ul className="my-3">
                <li>
                The SINP maintains a list of eligible occupations, and applicants must meet specific criteria related to their qualifications and work experience.

                </li>
                <li>
                They are required to have an educational credential equivalent to at least a one-year Canadian post-secondary diploma.


                </li>
               
<li>Candidates must have a minimum of 12 months of full-time work experience in a high-skilled occupation classified under NOC levels “A,” “B,” or “0,” and this occupation must not appear on the SINP Excluded Occupations List.
</li>                
              </ul>
           
            

              <div class="text-2xl font-bold my-3" ref={SkilledRef}>Saskatchewan International Skilled Worker Tech Talent Pathway


</div>

This newly introduced pathway focuses on attracting tech talent to Saskatchewan. 

              <ul className="my-3">
                <li>
                It aims to fill labor shortages in the technology sector by providing expedited processing for candidates.

                </li>
                <li>
                Candidates must have a job offer from a Saskatchewan employer in a tech occupation.


                </li>
               
            
              </ul>
              They are also required to score at least 60 points on the SINP point assessment grid.





              <div class="text-2xl font-bold my-3" ref={HardToFillRef}>Saskatchewan Hard-to-fill Skills Pilot



</div>

This pilot program targets specific industries experiencing significant labor shortages. 

              <ul className="my-3">
                <li>
                It is designed to facilitate the immigration process for skilled workers in these hard to fill sectors.

                </li>
                <li>
                It helps employers find qualified candidates more quickly.


                </li>
               
            
              </ul>
              Applicants must score at least 60 points on the SINP point assessment grid and possess at least one year of relevant work experience.



              <div class="pages-header-2 my-3" ref={ExperienceRef}>
              Saskatchewan Experience
            </div>
            The Saskatchewan Experience category is for foreign nationals who have already gained work experience in the province. In this stream, worker must have an employment offer from an employer in the province. This category includes five sub-streams:

            <div class="text-2xl font-bold my-3" ref={WorkPermitRef}>Saskatchewan Existing Work Permit
</div>
            This stream is for individuals who have been working in Saskatchewan for at least six months on a valid work permit and have a job offer from a Saskatchewan employer. Applicants must demonstrate that their work experience aligns with their job offer.

            <div class="text-2xl font-bold my-3" ref={ProfessionalsRef}>Saskatchewan Health Professionals

</div>
            Targeting health care workers, this stream requires candidates to have at least six months of work experience in Saskatchewan within the health sector. Eligible occupations include physicians, nurses, and other health professionals.

            <div class="text-2xl font-bold my-3" ref={HospitalityRef}>Saskatchewan Hospitality Sector Project


</div>
            This stream focuses on foreign workers with at least six months of experience in the hospitality sector in Saskatchewan. Candidates must hold a valid work permit and have a job offer related to their previous work experience.


            <div class="text-2xl font-bold my-3" ref={TruckDriverRef}>Saskatchewan Long-Haul Truck Driver Project



</div>
            Designed for long-haul truck drivers, this stream requires applicants to have six months of relevant work experience and a job offer from a Saskatchewan employer. It aims to address the significant labor shortages in this sector.

            <div class="text-2xl font-bold my-3" ref={StudentsRef}>Saskatchewan Students
</div>
            This stream is aimed at international graduates from Canadian post-secondary institutions who have obtained at least six months of work experience with a Saskatchewan employer. Applicants must hold a valid post-graduation work permit and have a job offer related to their field of study.
           

            <div class="pages-header-2" ref={EntrepreneurRef}>
            Saskatchewan Entrepreneur and Farm
            </div>
            The Entrepreneur and Farm category targets individuals looking to establish businesses or farms in Saskatchewan. It includes three main streams:


            <div class="text-2xl font-bold my-3" ref={SaskatchewanEntrepreneurRef}>Saskatchewan Entrepreneur

</div>
            This stream is designed for individuals who wish to invest in or start a business in Saskatchewan. Applicants must present a viable business plan and demonstrate relevant business management experience. A minimum net worth requirement applies, along with other eligibility criteria.


            <div class="text-2xl font-bold my-3" ref={OperatorsRef}>Saskatchewan Farm Owners and Operators


</div>
            Targeting experienced farmers, this stream allows individuals with substantial capital to invest in farming operations within the province. Applicants must demonstrate farming experience and financial capability.
            

            <div class="text-2xl font-bold my-3" ref={GraduateRef}>Saskatchewan International Graduate Entrepreneur Category



</div>
            
            This category is for international graduates from eligible post-secondary institutions who wish to establish or operate a business in Saskatchewan. Candidates must have previously studied in the province and meet specific business operation requirements.
            <br></br>
            The Saskatchewan Immigrant Nominee Program provides pathways for skilled workers, entrepreneurs, and farm operators seeking permanent residency in Canada. By aligning its immigration streams with labor market needs, Saskatchewan aims to attract talented individuals who can contribute to its economic growth while addressing critical labor shortages across various sectors. 

          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

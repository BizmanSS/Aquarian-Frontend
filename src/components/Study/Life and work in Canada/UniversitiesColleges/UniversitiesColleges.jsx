import React, { useRef } from "react";

import NestedTableOfContent from "./../../../shared/NestedTableOfContent.jsx";
import FaqBox from "./../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "How does the closure of the SDS affect processing times for study permits?",
    answer:
      "With the closure of the SDS as of November 8, 2024, applicants can expect longer processing times for study permits. While SDS applications were typically processed within 20 days, standard applications may now take 6-8 weeks or longer, depending on various factors such as application volume and completeness.",
  },
  {
    question:
      "What is the Provincial Attestation Letter (PAL), and how do I obtain one?",
    answer:
      "The Provincial Attestation Letter is a new requirement introduced after the closure of SDS. It verifies that you meet specific provincial criteria for studying in Canada. To obtain a PAL:",
    listAnswer: [
      "Contact the provincial government or educational institution where you plan to study.",
      "Provide necessary documentation proving your acceptance and financial stability.",
      "Follow any additional provincial guidelines to receive the attestation.",
    ],
  },
  {
    question:
      "Are there any specific provinces that have additional requirements for international students?",
    answer:
      "Yes, some provinces may have additional requirements or processes for international students. For instance:",
    listAnswer: [
      "Quebec: Students must apply for a Certificat d'acceptation du Québec (CAQ) before applying for a study permit.",
      "British Columbia: Some institutions may require additional documentation related to health insurance or housing arrangements.",
    ],
  },
];

const universityTableData = [
  {
    ranking: 25,
    name: "University of Toronto (U of T)",
    location: "Toronto, Ontario",
    programs: "Engineering, Computer Science, Business, Medicine, Law, Social Sciences",
  },
  {
    ranking: 38,
    name: "University of British Columbia (UBC)",
    location: "Vancouver, British Columbia",
    programs: "Environmental Science, Computer Science, Business, Health Sciences, Arts, Engineering",
  },
  {
    ranking: 29,
    name: "McGill University",
    location: "Montreal, Quebec",
    programs: "Medicine, Law, Business, Science, Engineering, Arts",
  },
  {
    ranking: 115,
    name: "University of Waterloo",
    location: "Waterloo, Ontario",
    programs: "Computer Science, Engineering, Business, Mathematics, Environmental Studies",
  },
  {
    ranking: 120,
    name: "Western University",
    location: "London, Ontario",
    programs: "Business (Ivey School of Business), Law, Health Sciences, Engineering",
  },
  {
    ranking: 176,
    name: "McMaster University",
    location: "Hamilton, Ontario",
    programs: "Engineering, Business, Health Sciences, Social Sciences",
  },
  {
    ranking: 193,
    name: "Queen’s University",
    location: "Kingston, Ontario",
    programs: "Business (Smith School of Business), Law, Engineering, Arts",
  },
  {
    ranking: 96,
    name: "University of Alberta",
    location: "Edmonton, Alberta",
    programs: "Engineering, Energy, Earth Sciences, Computer Science, Arts",
  },
  {
    ranking: 159,
    name: "Université de Montréal",
    location: "Montreal, Quebec",
    programs: "Engineering, Social Sciences, Health Sciences, Business",
  },
];

const collegeTableData = [
  {
    ranking: "801-1000",
    name: "Humber College",
    location: "Toronto, Ontario",
    programs: "Business, IT, Health Sciences, Media, Hospitality",
  },
  {
    ranking: "801-1000",
    name: "George Brown College",
    location: "Toronto, Ontario",
    programs: "Culinary Arts, Business, Design, Technology",
  },
  {
    ranking: "801-1000",
    name: "Seneca College",
    location: "Toronto, Ontario",
    programs: "Business, Health Care, Media",
  },
  {
    ranking: "801-1000",
    name: "BCIT (British Columbia Institute of Technology)",
    location: "Vancouver, British Columbia",
    programs: "Engineering, IT, Business, Health Sciences",
  },
  {
    ranking: "801-1000",
    name: "Centennial College",
    location: "Toronto, Ontario",
    programs: "Business, Engineering, Health, IT",
  },
];


export default function Universities_CollegesinCanada() {
  const aboutRef = useRef(null);
  const eligibilityRef = useRef(null);
  const benefitsRef = useRef(null);
  const benefitRef = useRef(null);
  const directRef= useRef(null);
  const closureRef = useRef(null);
  const studyRef = useRef(null);
  const impactRef = useRef(null);
  const implicationsRef = useRef(null);
  const faqRef = useRef(null);

  // const tableContentData = [
  //   {
  //     title: "Canada Study Permit and Visa",
  //     scrollTo: aboutRef,
  //     subItems: [
  //       {
  //         title: "Eligibility Requirements for a Study Permit",
  //         scrollTo: eligibilityRef,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Student Direct Stream (SDS)",
  //     scrollTo: directRef,
  //     subItems: [
  //       {
  //         title: "Key Benefits of the SDS Program",
  //         scrollTo: benefitsRef,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Closure of the SDS Program",
  //     scrollTo: closureRef,
  //     subItems: [
  //       {
  //         title: "Impact of SDS Closure on International Students",
  //         scrollTo: impactRef,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Study Permit Application Process Post-SDS",
  //     scrollTo:  studyRef,
  //   },
  //   {
  //     title: "Implications for Indian Students",
  //     scrollTo: implicationsRef,
  //   },

  //   {
  //     title: "FAQs",
  //     scrollTo: faqRef,
  //   },
  // ];

  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="ST"
          h1="Study In Canada"
          h2="Universities/Colleges"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Study
              {" > "}Study In Canada
              {" > "}Universities/Colleges in Canada
            </div>
            <div class="pages-header">
            Universities/Colleges in Canada
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Canada continues to be one of the top destinations for international students, especially from India, offering world-class education and a high quality of life. In 2022, over 183,000 Indian students chose Canada for higher education, a trend that is expected to grow despite recent policy changes. 
              <div className="pages-paragraph">
              For the 2024-25 academic year, Canada implemented a 35% reduction in international student admissions, capping study permits at 360,000, though exemptions exist for graduate-level students. This reduction aims to address housing challenges, with provincial quotas and an attestation process for universities and colleges. 
              </div>
              <div className="pages-paragraph">
              With over 155 universities and 8,000 college programs to choose from, Canada's higher education system remains diverse, offering top-tier programs in Business, IT, Engineering, Health, and Media. Many Canadian universities are ranked among the top 200 globally, and the country provides excellent post-graduation work opportunities, including the Post-Graduation Work Permit (PGWP) to help students gain Canadian work experience. 
              </div>
              <div className="pages-paragraph">
              International students can also work part-time while studying, with an average pay of CAD 10 per hour. Despite the new immigration policies, Canada remains a top choice for students seeking quality education, career growth, and a welcoming multicultural environment.
              </div>
            </div>
            {/* <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div> */}

            <div className="pages-header-2" ref={eligibilityRef}>
            Top Universities in Canada
            </div>
            <div className="pages-paragraph">
            Canada is known for its high standard of education, and its universities consistently rank among the best globally. Here are some of the top universities in Canada based on academic reputation, research output, and student satisfaction:

            <div className="font-bold text-[17px] mt-5 mb-3">
            1. University of Toronto (U of T)
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Toronto, Ontario
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Engineering, Computer Science, Business, Medicine, Law, Social Sciences.
                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Excellent track record for international students who want to stay and work in Canada. Toronto has a large job market, especially in tech, finance, and healthcare.
                </li>
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              2. University of British Columbia (UBC)
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Vancouver, British Columbia
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Environmental Science, Computer Science, Business, Health Sciences, Arts, and Engineering
                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                High employability rate post-graduation, and Vancouver is a major hub for tech, film, and natural sciences industries.
                </li>
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              3. McGill University
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Montreal, Quebec
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Medicine, Law, Business, Science, Engineering, and Arts.
                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Montreal is a bilingual city (English and French), which opens doors to both English and French-speaking job opportunities in Canada. Great for those interested in international relations or a bilingual work environment.
                </li>
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              4. University of Waterloo
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Waterloo, Ontario
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Computer Science, Engineering, Business, Mathematics, and Environmental Studies

                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Known for co-op programs that provide students with practical work experience, a major advantage for applying for a PGWP. Many international students find job opportunities in nearby tech hubs like Kitchener-Waterloo.
                </li>
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              5. Western University
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  London, Ontario
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Business (Ivey School of Business), Law, Health Sciences, Engineering.

                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Strong post-graduation employment network, particularly in finance, law, and healthcare sectors.
                </li>
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              6. McMaster University
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Hamilton, Ontario
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Engineering, Business, Health Sciences, and Social Sciences

                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Strong opportunities for healthcare and engineering grads. Hamilton’s growing economy provides post-graduation job prospects.
                </li>
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              7. Queen’s University
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Kingston, Ontario
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Business (Smith School of Business), Law, Engineering, and Arts

                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Kingston is smaller but has good opportunities in consulting and finance. International students often transition into managerial roles quickly.
                </li>
              </ul>
              

              <div className="font-bold text-[17px] mt-5 mb-3">
              8. University of Alberta
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Edmonton, Alberta
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Engineering, Energy, Earth Sciences, Computer Science, and Arts

                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Alberta has a growing tech and energy sector, with opportunities for international students in both industries.
                </li>
              </ul>


              <div className="font-bold text-[17px] mt-5 mb-3">
              9. University of Montreal (Université de Montréal)
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Montreal, Quebec
                </li>
                <li>
                  <strong>Popular Programs: </strong>
                  Engineering, Social Sciences, Health Sciences, Business

                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Being in Quebec, French speakers may have an advantage in PR pathways as French is one of the primary languages of the province.
                </li>
              </ul>

              <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>QS Ranking 2025</th>
            <th>University Name</th>
            <th>Location</th>
            <th>Popular Programs</th>
          </tr>
        </thead>
        <tbody>
          {universityTableData.map((row, index) => (
            <tr key={index}>
              <td>{row.ranking}</td>
              <td>{row.name}</td>
              <td>{row.location}</td>
              <td>{row.programs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
              

            </div>

      

            <div class="pages-header-2" ref={studyRef}>
            Top Colleges in Canada
            </div>
            <div class="pages-paragraph">
            While universities are well-suited for students seeking academic degrees, Canadian colleges offer more specialized, hands-on training and diploma programs. Colleges are often a better choice for students seeking shorter courses with direct career pathways.


              <div className="font-bold text-[17px] mt-5 mb-3">
               1. Humber College
              </div>
         
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Toronto, Ontario
                </li>
                <li>
                <strong>Popular Programs: </strong>
                Business, IT, Health Sciences, Media, and Hospitality
                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Humber College offers many one-year and two-year diploma programs that qualify for a PGWP. Toronto is a major employment hub for post-graduation job opportunities.
                </li>
              </ul>


              <div className="font-bold text-[17px] mt-5 mb-3">
              2. George Brown College
              </div>
         
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Toronto, Ontario
                </li>
                <li>
                <strong>Popular Programs: </strong>
                Culinary Arts, Business, Design, and Technology
                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Known for its strong ties to the local industry, particularly in hospitality, design, and business sectors
                </li>
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              3. Seneca College
              </div>
         
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Toronto, Ontario
                </li>
                <li>
                <strong>Popular Programs: </strong>
                Business, Health Care, and Media
                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Seneca offers various programs that allow for co-op or work placements, providing opportunities for students to gain Canadian work experience.
                </li>
              </ul>


              <div className="font-bold text-[17px] mt-5 mb-3">
              4. BCIT (British Columbia Institute of Technology)
              </div>
         
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Vancouver, British Columbia
                </li>
                <li>
                <strong>Popular Programs: </strong>
                Engineering, IT, Business, and Health Sciences
                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                BCIT is a strong choice for students looking to transition quickly into a high-demand technical field, with ample opportunities for co-op placements.
                </li>
              </ul>


              <div className="font-bold text-[17px] mt-5 mb-3">
              5. Centennial College
              </div>
         
              <ul className="my-2 ml-3">
                <li>
                  <strong>Location: </strong>
                  Toronto, Ontario
                </li>
                <li>
                <strong>Popular Programs: </strong>
                Business, Engineering, Health, and IT
                </li>
                <li>
                <strong>PGWP/PR Pathways: </strong>
                Centennial offers a mix of certificate and diploma programs that qualify for PGWP. It also has a solid track record of international student employment success post-graduation.
                </li>
              </ul>

              <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>QS Ranking 2025</th>
            <th>College Name</th>
            <th>Location</th>
            <th>Popular Programs</th>
          </tr>
        </thead>
        <tbody>
          {collegeTableData.map((row, index) => (
            <tr key={index}>
              <td>{row.ranking}</td>
              <td>{row.name}</td>
              <td>{row.location}</td>
              <td>{row.programs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



            </div>

            <div class="pages-header-2" ref={implicationsRef}>
            How to Choose the Right University or College?
            </div>
            <div class="pages-paragraph">
            When choosing the best institution in Canada, you need to consider several factors:


            <div className="font-bold text-[17px] mt-5 mb-3">
            a. Program Offerings:
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                Identify your field of interest (e.g., Engineering, Medicine, Business, Arts). Some universities and colleges excel in specific areas.
                </li>
                <li>
                Look for institutions offering programs with specializations that align with your career goals.
                </li>
             
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              b. Location:
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                Universities in larger cities like Toronto, Vancouver, or Montreal offer more job opportunities, but they also come with higher living costs. 
                </li>
                <li>
                Smaller cities like Kingston, Hamilton, or Edmonton can offer a quieter atmosphere and lower living costs.
                </li>

                <li>
                Institutions with co-op programs provide invaluable work experience that can significantly enhance your chances of getting a PGWP later.
                </li>
             
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              c. Cost of Education:
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                Tuition fees vary widely across universities and colleges. 
                </li>
                <li>
                Universities in Ontario, British Columbia, and Quebec tend to have higher tuition fees compared to those in smaller provinces.
                </li>

             
              </ul>

              <div className="font-bold text-[17px] mt-5 mb-3">
              d. PGWP Eligibility:
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                Ensure that the institution is eligible for the Post-Graduation Work Permit (PGWP). 
                </li>
                <li>
                Most Designated Learning Institutions (DLIs) qualify, but it’s always important to verify with the official website of the institution.
                </li>

             
              </ul>


              <div className="font-bold text-[17px] mt-5 mb-3">
              e. Career Services & Industry Connections:
              </div>
           
              <ul className="my-2 ml-3">
                <li>
                Look at universities and colleges with strong ties to industries that interest you. 
                </li>
                <li>
                Institutions offering networking events, job fairs, internships, and co-op opportunities give students a competitive edge in securing employment post-graduation.
                </li>

             
              </ul>

              The duration of your program determines the length of your PGWP. For example, a program of at least 8 months but less than 2 years may get a PGWP for the same duration as the program length. A program of 2 years or more may qualify you for a 3-year PGWP. To qualify for a PGWP, you need to study at a Designated Learning Institution (DLI) that is eligible for the permit.


<div className='my-2'>Choosing the right university or college in Canada depends on your personal goals, program preferences, budget, and the potential for post-graduation employment and PR. Opt for institutions that align with your field of interest and ensure that they provide opportunities for work experience through co-op programs, internships, or networking events.</div>

             

            </div>


          </div>
          <div ref={faqRef}>
            {/* <FaqBox faqItems={faqItems} /> */}
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef } from "react";

import NestedTableOfContent from "./../../../shared/NestedTableOfContent.jsx";
import FaqBox from "./../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../../globalComponents/Sidebar/SiteMapMenu.jsx";

// const faqItems = [
//   {
//     question:
//       "How does the closure of the SDS affect processing times for study permits?",
//     answer:
//       "With the closure of the SDS as of November 8, 2024, applicants can expect longer processing times for study permits. While SDS applications were typically processed within 20 days, standard applications may now take 6-8 weeks or longer, depending on various factors such as application volume and completeness.",
//   },
//   {
//     question:
//       "What is the Provincial Attestation Letter (PAL), and how do I obtain one?",
//     answer:
//       "The Provincial Attestation Letter is a new requirement introduced after the closure of SDS. It verifies that you meet specific provincial criteria for studying in Canada. To obtain a PAL:",
//     listAnswer: [
//       "Contact the provincial government or educational institution where you plan to study.",
//       "Provide necessary documentation proving your acceptance and financial stability.",
//       "Follow any additional provincial guidelines to receive the attestation.",
//     ],
//   },
//   {
//     question:
//       "Are there any specific provinces that have additional requirements for international students?",
//     answer:
//       "Yes, some provinces may have additional requirements or processes for international students. For instance:",
//     listAnswer: [
//       "Quebec: Students must apply for a Certificat d'acceptation du Québec (CAQ) before applying for a study permit.",
//       "British Columbia: Some institutions may require additional documentation related to health insurance or housing arrangements.",
//     ],
//   },
// ];

export default function CanadaStudyPermit() {
  const aboutRef = useRef(null);
  const eligibilityRef = useRef(null);

  const directRef = useRef(null);
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

  const courseTableData = [
    {
      course: "Computer Science & IT",
      universities: "University of Toronto, University of Waterloo, UBC",
      salaryRange: "CAD 70,000–100,000 (starting) / Up to CAD 130,000",
      jobRoles: "Software Developer, Data Scientist, Cybersecurity Analyst, AI Specialist, Network Engineer",
    },
    {
      course: "Engineering",
      universities: "University of Alberta, McGill University, University of Calgary",
      salaryRange: "CAD 60,000–130,000",
      jobRoles: "Civil Engineer, Mechanical Engineer, Electrical Engineer, Aerospace Engineer, Software Engineer",
    },
    {
      course: "Business Administration & Management",
      universities: "Rotman School of Management (UofT), Desautels Faculty of Management (McGill), Sauder School of Business (UBC)",
      salaryRange: "CAD 70,000–120,000 / Senior Roles: CAD 150,000+",
      jobRoles: "Business Analyst, Financial Manager, Marketing Manager, Supply Chain Manager, Consultant",
    },
    {
      course: "Health Sciences",
      universities: "University of Toronto, McGill University, University of Ottawa",
      salaryRange: "CAD 75,000 (starting) / Specialized roles: CAD 100,000+",
      jobRoles: "Registered Nurse, Pharmacist, Public Health Specialist, Healthcare Manager, Medical Researcher",
    },
    {
      course: "Data Science & Cybersecurity",
      universities: "University of Toronto, University of Waterloo, Carleton University",
      salaryRange: "CAD 80,000–100,000 / Cybersecurity: CAD 75,000–120,000",
      jobRoles: "Data Analyst, Cybersecurity Specialist, Data Scientist, Machine Learning Engineer, IT Consultant",
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
        <SiteMapMenu type="ST" h1="Study In Canada" h2="Courses"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Study
              {" > "}Study In Canada
              {" > "}Courses in Canada
            </div>
            <div class="pages-header">Courses in Canada</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada has become one of the top destinations for international
              students due to its high-quality education system, cultural
              diversity, and clear pathways to work and immigration. For
              students planning to study in Canada and eventually seek Permanent
              Residency (PR), choosing the right course is crucial.
              <div className="pages-paragraph">
                Popular courses in Canada include Computer Science and IT, which
                prepare students for high-demand roles in programming, software
                development, and cybersecurity. Engineering programs, with
                specializations like civil, mechanical, and electrical, offer
                hands-on experience for dynamic careers in various industries.
                Business Administration focuses on finance, marketing, and
                entrepreneurship, equipping graduates for leadership roles.
                Health Sciences addresses the growing demand for healthcare
                professionals, particularly in nursing and public health.
              </div>
              <div className="pages-paragraph">
                The Canadian government has implemented a cap of 485,000
                approved study permits for 2024, which is a 28% reduction from
                2023 levels. This cap is expected to drop further by 10% in
                2025, resulting in a target of 437,000 permits. This guide
                offers a data-oriented analysis of the most popular fields of
                study, top institutions, the eligibility criteria for
                Post-Graduation Work Permits (PGWP), and how these decisions
                impact your chances of securing PR.
              </div>
            </div>
            {/* <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div> */}

            <div class="pages-header-2" ref={aboutRef}>
              Top Courses in Canada
            </div>
            <div className="pages-paragraph">
              Canada offers courses across various fields, with specific
              industries experiencing higher demand for skilled professionals.
              Let us explore the top courses in Canada below:
              <div className="mt-4 mb-2 font-bold text-[17px]">
                1. Computer Science and Information Technology (IT)
              </div>
              Canada’s tech industry is one of the fastest-growing sectors. It
              is driven by global demand for software developers, data
              scientists, cybersecurity experts, and AI specialists. Graduates
              in these fields enjoy high starting salaries and excellent job
              prospects.
              <ul className="my-2 ml-3">
                <li>
                  According to Statistics Canada, enrollment in Computer Science
                  and IT-related programs has increased by 30% over the past
                  decade.
                </li>

                <li>
                  The Information Technology (IT) sector is expected to grow by
                  8.2% annually between 2021-2026.
                </li>

                <li>
                  Specific fields like software engineering and AI are expected
                  to see 10-15% growth over the next five years.
                </li>

                <li>
                  Software developers and data scientists in Canada earn an
                  average annual salary of CAD 70,000–100,000, with senior roles
                  earning up to CAD 130,000 annually.
                </li>
              </ul>
              <div className="font-bold">Top Institutions:</div>
              <ul className="my-3">
                <li>University of Toronto (UofT)</li>
                <li>University of Waterloo</li>
                <li>University of British Columbia (UBC)</li>
              </ul>
              <div className="font-bold">Career Prospects: </div>
              <div className="my-2">
                Graduates can find employment in the technology, healthcare,
                finance, and telecommunications sectors, with positions
                available across all provinces. The growing need for
                cybersecurity experts and data analysts means job prospects
                remain strong.
              </div>
              <div className="mt-4 mb-2 font-bold text-[17px]">
                2. Engineering
              </div>
              Engineering remains one of the most popular fields for
              international students.
              <ul className="my-2 ml-3">
                <li>
                  Engineering programs saw a 10% increase in international
                  student enrollment between 2018 and 2022.
                </li>

                <li>
                  According to Job Bank Canada, the demand for engineers is
                  expected to grow by 9.4% annually from 2021-2026.
                </li>

                <li>
                  Specific fields like civil, mechanical, electrical, and
                  software engineering are in the highest demand.
                </li>

                <li>
                  Engineering graduates in Canada earn an average starting
                  salary of CAD 60,000.
                </li>
                <li>
                  Experienced engineers can expect salaries ranging from CAD
                  90,000 to CAD 130,000 annually, depending on their
                  specialization.
                </li>
              </ul>
              <div className="font-bold">Top Institutions:</div>
              <ul className="my-3">
                <li>University of Alberta</li>
                <li>McGill University</li>
                <li>University of Calgary</li>
              </ul>
              <div className="font-bold">Career Prospects: </div>
              <div className="my-2">
                With Canada investing heavily in infrastructure, energy, and
                environmental projects, engineers are in demand across all
                provinces. Engineering roles also provide some of the
                highest-paying jobs in Canada.
              </div>
              <div className="mt-4 mb-2 font-bold text-[17px]">
                3. Business Administration and Management
              </div>
              Business administration remains a highly sought-after
              qualification. Programs cover finance, marketing,
              entrepreneurship, and supply chain management, equipping graduates
              with a broad skill set for leadership positions.
              <ul className="my-2 ml-3">
                <li>
                  Business and management programs attract over 50,000
                  international students annually, with a 5% increase in
                  enrollments from 2019 to 2022.
                </li>

                <li>
                  According to Job Bank Canada, business professionals are
                  expected to see a 5.6% annual increase in demand over the next
                  five years, with high demand in sectors like finance,
                  consulting, and marketing.
                </li>

                <li>
                  Graduates with an MBA or similar management qualification can
                  expect an average salary range of CAD 70,000 to CAD 120,000
                  annually, with more senior management roles earning upwards of
                  CAD 150,000 per year.
                </li>
              </ul>
              <div className="font-bold">Top Institutions:</div>
              <ul className="my-3">
                <li>Rotman School of Management (University of Toronto)</li>
                <li>Desautels Faculty of Management (McGill University)</li>
                <li>Sauder School of Business (UBC)</li>
              </ul>
              <div className="font-bold">Career Prospects: </div>
              <div className="my-2">
                Graduates can find roles in financial services, consulting,
                marketing, and international trade, with business leaders often
                having opportunities for global career mobility.
              </div>
              <div className="mt-4 mb-2 font-bold text-[17px]">
                4. Health Sciences
              </div>
              With Canada’s aging population and the increasing demand for
              healthcare professionals, fields like nursing, pharmacy, and
              public health are in high demand.
              <ul className="my-2 ml-3">
                <li>
                  Health-related programs have seen a 20% increase in
                  international student enrollment over the last decade.
                </li>

                <li>
                  The healthcare sector is one of the largest employers in
                  Canada, with a projected growth rate of 7.6% for healthcare
                  occupations from 2021 to 2026.
                </li>

                <li>
                  Registered nurses in Canada earn an average salary of CAD
                  75,000 annually, with opportunities for higher earnings in
                  specialized healthcare roles.
                </li>
              </ul>
              <div className="font-bold">Top Institutions:</div>
              <ul className="my-3">
                <li>University of Toronto</li>
                <li>McGill University</li>
                <li>University of Ottawa</li>
              </ul>
              <div className="font-bold">Career Prospects: </div>
              <div className="my-2">
                Healthcare professionals in Canada are in constant demand,
                particularly in nursing, elder care, and public health
                management. The aging population ensures that job opportunities
                remain abundant.
              </div>




              <div className="mt-4 mb-2 font-bold text-[17px]">
              5. Data Science and Cybersecurity
              </div>
              The rise of big data, digital transformation, and cybersecurity threats have made these two fields among the fastest-growing career paths in Canada.
              <ul className="my-2 ml-3">
                <li>
                Data science programs saw a 35% increase in student enrollment from 2019 to 2022.
                </li>

                <li>
                Cybersecurity and data science jobs are projected to grow by 12% annually from 2021 to 2026, with a significant shortage of qualified professionals in both fields.
                </li>

                <li>
                Data scientists in Canada earn an average salary of CAD 80,000–100,000, while cybersecurity specialists can earn anywhere from CAD 75,000 to CAD 120,000 annually.
                </li>
              </ul>


              <div className="font-bold">Top Institutions:</div>
              <ul className="my-3">
                <li>University of Toronto</li>
                <li>University of Waterloo</li>
                <li>Carleton University</li>
              </ul>

              <div className="font-bold">Career Prospects: </div>
              <div className="my-2">
               With the increasing threats of cyberattacks and the growth of data-driven businesses, data science and cybersecurity professionals are in high demand across a wide range of industries, including finance, healthcare, and government.
              </div>


              <div>
  <div className="table-container">
    <table className="responsive-table">
      <thead>
        <tr>
          <th>Course</th>
          <th>Top Universities</th>
          <th>Salary Range (CAD)</th>
          <th>Job Roles</th>
        </tr>
      </thead>
      <tbody>
        {courseTableData.map((row, index) => (
          <tr key={index}>
            <td>{row.course}</td>
            <td>{row.universities}</td>
            <td>{row.salaryRange}</td>
            <td>{row.jobRoles}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


            </div>

            <div className="pages-header-2" ref={eligibilityRef}>
            How to Choose the Right Course?
            </div>
            <div className="pages-paragraph">
            To maximize your chances of success, both in terms of career opportunities and immigration pathways, it is essential to consider the following factors when choosing a program:

            <div className="mt-3 mb-2 font-bold text-[17px]">
              1. Program Length and PGWP Eligibility:
              </div>

              <ul className="my-2 ml-3">
                <li>
                Programs that are at least 8 months long can qualify for a PGWP, but those lasting 2 years or more typically qualify for a 3-year PGWP.
                </li>
                <li>
                Programs in fields like IT, healthcare, and engineering have a high probability of being eligible for PGWPs.
                </li>

              
              </ul>

              <div className="mt-3 mb-2 font-bold text-[17px]">
              2. Job Market Demand:
              </div>

              <ul className="my-2 ml-3">
                <li>
                Focus on fields like IT, healthcare, engineering, and business, which are projected to experience strong job growth.
                </li>
                <li>
                Cybersecurity and data science have seen an increase in demand, making them attractive fields for employment in Canada.
                </li>

              
              </ul>

              <div className="mt-3 mb-2 font-bold text-[17px]">
              3. University Reputation and Rankings:
              </div>

              <ul className="my-2 ml-3">
                <li>
                Institutions like University of Toronto, McGill University, and University of Waterloo are consistently ranked among the best for fields such as engineering, computer science, and business.
                </li>
                <li>
                Attending a top-tier institution not only provides high-quality education but can also enhance job prospects post-graduation.
                </li>

              
              </ul>

            </div>

            <div class="pages-header-2" ref={directRef}>
            PGWP and PR Pathways in Canada
            </div>
            <div class="pages-paragraph">
            According to the latest immigration guidelines, students who complete programs of 2 years or more are eligible for a 3-year PGWP. These graduates can apply for Permanent Residency (PR) through the Express Entry system or Provincial Nominee Programs (PNPs).

            <div className="mt-3 mb-2 font-bold text-[17px]">
            PR Pathways:
              </div>

            <ul className="my-2 ml-3">
                <li>
                Express Entry: Canadian work experience from high-demand fields like engineering, IT, and healthcare can significantly increase your Comprehensive Ranking System (CRS) score, improving your chances of receiving an Invitation to Apply (ITA) for PR.
                </li>
                <li>
                Provincial Nominee Programs (PNPs): Provinces like Ontario, British Columbia, and Alberta have PNP streams that prioritize graduates in sectors with labor shortages, such as technology and healthcare.
                </li>
              
              </ul>

              Canada offers a range of programs that align with both strong career prospects and pathways to immigration. By selecting fields with high demand such as Computer Science, Engineering, Healthcare, and Data Science, international students can maximize their chances of obtaining a Post-Graduation Work Permit and securing Permanent Residence.
             
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

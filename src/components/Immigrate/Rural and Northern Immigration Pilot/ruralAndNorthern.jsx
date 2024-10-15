import React, { useRef } from "react";

import TableOfContent from "../../shared/TableOfContent.jsx";
import FaqBox from "../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const workExperienceTableData = [
  {
    level: "TEER 0",
    type: "Management occupations",
    example:
      "Advertising, Marketing and Public Relations Managers, Financial Managers",
  },
  {
    level: "TEER 1",
    type: "Occupations requiring a university degree",
    example: "Financial Advisors, Software Engineers",
  },
  {
    level: "TEER 2",
    type: "Occupations requiring a college diploma, 2+ years of apprenticeship, or supervisory roles",
    example:
      "Computer Network and Web Technicians, Medical Laboratory Technologists",
  },
  {
    level: "TEER 3",
    type: "Occupations requiring a college diploma, less than 2 years of apprenticeship, or 6+ months of on-the-job training",
    example: "Bakers, Dental Assistants, Dental Laboratory Assistants",
  },
];

const languageProficiencyTableData = [
  {
    language: "English",
    text: "CLB 7 [IELTS: minimum 6 in all sections or CELPIP]",
  },
  {
    language: "French",
    text: "NCLC 7 [Test d’Évaluation de Français (TEF) and Test de connaissance du français pour le Canada (TCF Canada)]",
  },
];

const participatingCommunityTableData = [
  {
    area: "Ontario",
    communities: [
      { community: "North Bay", website: "northbayrnip.ca" },
      { community: "Sudbury", website: "investsudbury.ca" },
      { community: "Sault Ste. Marie", website: "welcometossm.com" },
    ],
  },
  {
    area: "Saskatchewan",
    communities: [{ community: "$18,288", website: "moosejawrnip.ca" }],
  },
  {
    area: "Alberta",
    communities: [{ community: "$22,483", website: "claresholm.ca" }],
  },
  {
    area: "British Columbia",
    communities: [{ community: "West Kootenay", website: "wk-rnip.ca" }],
  },
];

const faqItems = [
  {
    question: " Do I need a job offer to apply under FSWP?",
    answer:
      "No, a job offer is not mandatory. However, having a valid job offer can significantly boost your CRS score by 50-200 points.",
  },
  {
    question:
      "What is the difference between FSW eligibility points and CRS scores?",
    answer:
      " FSW eligibility points determine if you meet the minimum requirements to apply under FSWP. CRS score is used to rank candidates in the Express Entry pool for immigration.",
  },
  {
    question: "How can I calculate my CRS score?",
    answer:
      "You can use our CRS Calculator to estimate your CRS score based on various factors such as age, education, work experience, language proficiency, and more.",
  },
  {
    question: "Can I bring my family with me?",
    answer:
      "Yes, you can include your spouse or common-law partner and dependent children in your application.",
  },
  {
    question: "What are the minimum points for FSWP?",
    answer:
      "The minimum points required for the Federal Skilled Worker Program (FSWP) is 67 out of 100 points. This is based on the selection factor points assigned for language skills, education, work experience, age, arranged employment in Canada, and adaptability. If you score lower than 67 points, you will not qualify for the program. However, you may be able to increase your score by improving your language skills, completing additional education, or receiving a job offer in Canada.",
  },
  ,
  {
    question: "Can I directly apply for permanent residency under the FSWP?",
    answer:
      "No, you cannot apply directly for permanent residency under the FSWP. The FSWP is managed by the Express Entry system, which selects candidates through regular draws based on their Comprehensive Ranking System (CRS) score. Only candidates who receive an Invitation to Apply (ITA) from the Express Entry pool can submit an application for permanent residency.",
  },
];

export default function RuralandNorthern() {
  const aboutRNIPRef = useRef(null);
  const eligibilityRNIPRef = useRef(null);
  const participateRNIPRef = useRef(null);
  const costRNIPRef = useRef(null);
  const stepsApplyRef = useRef(null);
  const communityRNIPRef = useRef(null);
  const communityelgRNIPRef = useRef(null);
  const faqRNIPRef = useRef(null);

  const tableContentData = [
    {
      id: 1,
      content: "What is the Rural and Northern Immigration Pilot?",
      scrollTo: aboutRNIPRef,
    },
    {
      id: 2,
      content: "Who is Eligible to Apply?",
      scrollTo: eligibilityRNIPRef,
    },
    {
      id: 3,
      content: "Participating Communities",
      scrollTo: participateRNIPRef,
    },
    {
      id: 4,
      content: "RNIP Costs",
      scrollTo: costRNIPRef,
    },
    ,
    {
      id: 5,
      content: "Steps to Apply for RNIP",
      scrollTo: stepsApplyRef,
    },
    {
      id: 6,
      content: "Communities and RNIP",
      scrollTo: communityelgRNIPRef,
    },
    {
      id: 7,
      content: "Community Eligibility",
      scrollTo: communityelgRNIPRef,
    },
    {
      id: 8,
      content: "FQQ",
      scrollTo: faqRNIPRef,
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
          h1="Rural and Northern Immigration Pilot"
  
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Express Entry
              {" > "}Rural and Northern Immigration Pilot
            </div>
            <div class="pages-header">Rural and Northern Immigration Pilot</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Rural and Northern Immigration Pilot (RNIP) Program in Canada
              is a unique immigration initiative aimed at addressing labour
              shortages and promoting economic growth in smaller communities.
              Introduced in 2019, the goal of the program is to attract skilled
              workers to rural and northern areas to boost economic growth in
              these communities. It offers skilled workers a pathway to
              permanent residency while helping local businesses fill critical
              vacancies. This innovative program includes a diverse range of
              communities across Ontario, Manitoba, Saskatchewan, Alberta,
              British Columbia, Nunavut, the Northwest Territories, and Yukon.
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRNIPRef}>
              What is the Rural and Northern Immigration Pilot?
            </div>
            <div className="pages-paragraph">
              Canada is known for its stance on immigration, but most new
              immigrants tend to settle in major urban centers like Toronto,
              Montreal, and Vancouver. The RNIP seeks to change this trend by
              encouraging skilled workers to consider life in smaller towns and
              northern regions.
              <ul>
                <li>
                  <span class="">
                    Participating communities receive support from the Federal
                    Government to identify and select candidates who will
                    positively impact local economic development.
                  </span>
                </li>
                <li>
                  The pilot focuses on supporting smaller communities outside
                  major metropolitan areas.
                </li>
                <li>
                  Each community has its own specific criteria and selection
                  process.
                </li>
              </ul>
              The RNIP builds on the success of the{" "}
              <a
                fref="#"
                style={{
                  color: "blue",
                }}
              ></a>{" "}
              Atlantic Immigration Pilot (AIP), which was launched in 2017 to
              increase immigration to Canada’s Atlantic provinces. Like the AIP,
              the RNIP pairs potential newcomers with employers in participating
              communities, creating a win-win situation for both the local
              economy and the new residents.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={eligibilityRNIPRef}>
              Who is Eligible to Apply?
            </div>

            <div className="pages-paragraph">
              To be eligible for the RNIP, there are a few requirements:
              <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
                <li>
                  You must have a <strong>valid full-time job offer</strong>{" "}
                  from an employer in one of the designated communities.
                </li>

                <li>
                  You need to receive a community recommendation from one of the
                  participating communities.
                </li>

                <li>
                  Depending on the job and community requirements, you may need
                  to demonstrate proficiency in English or French. Based on job
                  NOC, the requirements are:
                  <ol type="a">
                    <li>TEER 0 and 1: CLB/NCLC 6</li>
                    <li>TEER 2 and 3: CLB/NCLC 5</li>
                    <li>TEER 4 and 5: CLB/NCLC 4</li>
                  </ol>
                </li>

                <li>
                  You should also have work experience and skills that align
                  with the job offer and community needs.
                </li>
              </ol>
              <div className="pages-paragraph">
                The work experience should be of at least one year (1,560 hours)
                in the last three years, with most duties matching the National
                Occupational Classification (NOC). Unpaid and self-employed
                hours are not counted.
              </div>
            </div>

            <div class="pages-header-2" ref={participateRNIPRef}>
              Participating Communities
            </div>
            <div class="pages-paragraph">
              As of 2024, several communities across Canada are part of the
              RNIP. Examples of participating communities include:
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Area</th>
                        <th>Community</th>
                        <th>Website</th>
                      </tr>
                    </thead>
                    <tbody>
                      {participatingCommunityTableData.map((row, index) =>
                        row.communities.map((community, communityIndex) => (
                          <tr key={`${index}-${communityIndex}`}>
                            {communityIndex === 0 && (
                              <td
                                className="bold"
                                rowSpan={row.communities.length}
                              >
                                {row.area}
                              </td>
                            )}
                            <td style={{ 
                              textAlign:'left'
                            }}>{community.community}</td>
                            <td>
                              <a href="" style={{ color: "blue" }}>
                                {community.website}
                              </a>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="pages-header-2" ref={costRNIPRef}>
              RNIP Costs
            </div>
            <div className="pages-paragraph">
              Fees for the RNIP application vary depending on the number of
              family members and other factors.
              <ul>
                <li>
                  Generally, you can expect to pay around CAD 1,365 for the
                  principal applicant.
                </li>
                <li>
                  The processing time for the RNIP application is similar to
                  other immigration pathways, typically ranging from 6 to 12
                  months.
                </li>
              </ul>
              The Rural and Northern Immigration Pilot is an excellent
              opportunity for skilled workers looking to build a new life in
              Canada's vibrant and growing rural and northern communities. By
              aligning your skills with the needs of these communities, you can
              gain
              <a
                style={{
                  color: "blue",
                }}
              >
                {" "}
                permanent Canadian residency
              </a>{" "}
              and contribute to the economic prosperity and cultural richness of
              these areas. Whether you're seeking a change in scenery or a new
              career challenge, the RNIP offers a promising pathway to a
              fulfilling life in Canada.
            </div>

            <div class="pages-header-2" ref={stepsApplyRef}>
              Steps to Apply for RNIP
            </div>
            <div className="pages-paragraph">
              <ul>
                <li>
                  Ensure you meet both the federal and community-specific
                  requirements.
                </li>
                <li>
                  Find a job with an employer in one of the participating
                  communities.
                </li>
                <li>
                  Each community in the pilot has its own additional
                  requirements for eligibility, job search, and recommendation
                  processes. Check the respective community’s website for
                  details.
                </li>
                <li>
                  Once you have a job offer, submit your application for
                  recommendation to the community.
                </li>
                <li>
                  If recommended by the community, apply for permanent
                  residence.
                </li>
              </ul>
            </div>

            <div class="pages-header-2" ref={communityelgRNIPRef}>
              Communities and RNIP
            </div>
            <div className="pages-paragraph">
              The Rural and Northern Immigration Pilot is a five-year federal
              initiative to spread the benefits of immigration.
              <br />
              <br />
              <div>
                <strong>Community Eligibility</strong>
              </div>
              <p className="pages-paragraph">
                To be part of the pilot, communities must:
              </p>
              <ul>
                <li>
                  {" "}
                  Have a population of 50,000 or less and be at least 75 km from
                  a Census Metropolitan Area, OR
                </li>
                <li>
                  Have a population of up to 200,000 and be considered remote
                  according to Statistics Canada’s Remoteness Index.
                </li>
                <li>
                  An economic development plan and local organization to manage
                  the pilot.
                </li>
                <li>
                  Availability of employment opportunities and support for
                  newcomers.
                </li>
              </ul>
              <div class="pages-paragraph">
                Rural and Northern Immigration Pilot (RNIP) has shown promise in
                addressing regional labour gaps and population decline. The
                program addresses labor shortages and encourages community
                development.
              </div>
            </div>
          </div>
          <div ref={faqRNIPRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

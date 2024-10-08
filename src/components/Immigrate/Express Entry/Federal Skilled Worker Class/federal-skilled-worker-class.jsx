import React ,{useRef} from "react";
import "./federal-skilled-worker.css";
import TableOfContent from "../../../shared/TableOfContent.jsx";
import FaqBox from "../../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";





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

const financialSupportTableData = [
  {
    id: "1",
    cad: "$14,690",
    approx: "₹9.1 lakh",
  },
  {
    id: "2",
    cad: "$18,288",
    approx: "₹11.3 lakh",
  },
  {
    id: "3",
    cad: "$22,483",
    approx: "₹13.9 lakh",
  },
  {
    id: "4",
    cad: "$27,297",
    approx: "₹16.8 lakh",
  },
  {
    id: "5",
    cad: "$30,690",
    approx: "₹18.9 lakh",
  },
  {
    id: "6",
    cad: "$34,917",
    approx: "₹21.5 lakh",
  },
  {
    id: "7",
    cad: "$38,875",
    approx: "₹24 lakh",
  },
  {
    id: "For each additional member",
    cad: "Add $3,958",
    approx: "Add ₹2.4 lakh",
  },
];

const gridEducationTableData = [
  {
    level: "Doctorate (PhD) or equivalent",
    points: "25",
  },
  {
    level: "Master’s degree or equivalent",
    points: "23",
  },
  {
    level: "Two or more post-secondary degrees or diplomas",
    points: "22",
  },
  {
    level: "Bachelor’s degree or equivalent",
    points: "21",
  },
  {
    level: "Diploma for a three-year program after high school",
    points: "19",
  },
  {
    level: "Diploma for a two-year program",
    points: "19",
  },
  {
    level: "Diploma for a one-year post-secondary program",
    points: "15",
  },
  {
    level: "High school diploma or equivalent",
    points: "5",
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

export default function FederalSkilledWorkerClass() {

const aboutfswRef= useRef(null);
const eligibilityfswRef= useRef(null);
const pointfswRef= useRef(null);
const applyfswRef= useRef(null);
const feesfswRef= useRef(null);
const difffswRef= useRef(null);
const faqfswRef= useRef(null);

const tableContentData = [
  {
    id: 1,
    content: "What is Canada’s FSW Program?",
    scrollTo: aboutfswRef,
  },
  {
    id: 2,
    content: "Who can apply for Federal Skilled Worker Program?",
    scrollTo: eligibilityfswRef,
  },
  {
    id: 3,
    content: "FSW Points Grid",
    scrollTo: pointfswRef,
  },
  {
    id: 4,
    content: "Steps to Apply for the Federal Skilled Worker Program",
    scrollTo: applyfswRef,
  },
  ,
  {
    id: 5,
    content: "Processing Fees of FSWC",
    scrollTo: feesfswRef,
  },
  {
    id: 6,
    content: "Difference between FSW eligibility points and CRS score",
    scrollTo: difffswRef,
  },
  {
    id: 7,
    content: "FAQs",
    scrollTo: faqfswRef,
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
          h1="Express Entry"
          h2="Federal Skilled Worker Class"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Express Entry
              {" > "}Federal Skilled Worker Class
            </div>
            <div class="pages-header">
              Federal Skilled Worker Class <span class="cec-font">(FSTP)</span>{" "}
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Federal Skilled Worker Class (FSWC) is a popular immigration
              pathway for skilled workers worldwide seeking permanent residency
              in Canada. Managed under the Express Entry system by Immigration,
              Refugees, and Citizenship Canada (IRCC), it selects candidates
              based on factors like education, work experience, language
              proficiency, and age. This program is particularly appealing to
              those who may not have Canadian work experience but possess the
              necessary international experience and education to integrate
              successfully into the Canadian workforce. By obtaining permanent
              residency through the FSWC, successful applicants gain the right
              to live, work, and study anywhere in Canada. It also provides a
              clear pathway to Canadian citizenship, access to high-quality
              healthcare, and educational opportunities.
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutfswRef}>What is Canada’s FSW Program?</div>
            <div className="pages-paragraph">
              The FSW Program is one of the three federal immigration programs
              managed under the
              <a
                href="#"
                style={{
                  color: "blue",
                }}
              >
                {" "}
                Express Entry system
              </a>
              . Unlike the Canadian Experience Class (CEC), FSW candidates do
              not need Canadian work experience. Instead, it uses the
              Comprehensive Ranking System (CRS) to assess and rank candidates
              seeking permanent residency.
              <ul>
                <li>
                  <span class="">
                    A minimum CRS score is required to be eligible for selection
                    in the Express Entry pool.
                  </span>
                </li>
                <li>
                  <span class="">
                    This score varies depending on the number of applicants in
                    the pool and the number of invitations issued.
                  </span>
                </li>
                <li>
                  <span class="">
                    High-scoring candidates receive Invitations to Apply (ITAs)
                    for permanent residency.
                  </span>
                </li>
              </ul>
              This program recognizes the vital role that skilled tradespeople
              play in the Canadian economy and offers a pathway to permanent
              residency for those who meet the requirements.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={eligibilityfswRef}>
              Who can apply for Federal Skilled Worker Program?
            </div>

            <div className="pages-paragraph">
              The Federal Skilled Worker Program (FSWP) allows individuals to
              apply for permanent residency in Canada, provided they meet
              specific eligibility criteria like:
              <br></br>
              <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
                <li>
                  <span class="pages-bold">Work Experience:</span> You must have
                  at least one year of continuous full-time work experience, or
                  part time equivalent, in the last ten years. The experience
                  must be in a skilled trade occupation that comes under the
                  NOC. Eligible jobs fall within the following NOC levels:
                  <div>
                    <div className="table-container">
                      <table className="responsive-table">
                        <thead>
                          <tr>
                            <th>Teer Level</th>
                            <th>Occupation Types</th>
                            <th>Examples</th>
                          </tr>
                        </thead>
                        <tbody>
                          {workExperienceTableData.map((row, index) => (
                            <tr key={index}>
                              <td className="bold">{row.level}</td>
                              <td>{row.type}</td>
                              <td>{row.example}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>

                <li>
                  <span class="pages-bold">Language Proficiency:</span> You must
                  be able to establish proficiency in either English or French,
                  the two official languages of Canada. You need to obtain a
                  minimum Canadian Language Benchmark (CLB) level 7 in all 4
                  skills: reading, writing, listening, and speaking.
                  <div>
                    <div className="table-container">
                      <table className="responsive-table">
                        <thead>
                          <tr>
                            <th>Language</th>
                            <th>Minimum for all abilities</th>
                          </tr>
                        </thead>
                        <tbody>
                          {languageProficiencyTableData.map((row, index) => (
                            <tr key={index}>
                              <td className="bold">{row.language}</td>
                              <td>{row.text}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>

                <li>
                  <span class="pages-bold">Education:</span> If your education
                  is completed outside Canada, then you must get an ECA issued
                  that authenticates that your foreign education is equivalent
                  to the standards in Canada.
                </li>

                <li>
                  <span class="pages-bold">Financial Support:</span> You must
                  have sufficient funds available to provide for your needs,
                  following their admission to Canada. Acceptable financial
                  proof includes a bank statement, investment portfolio, or
                  other sources of liquid financial assets.
                  <div>
                    <div className="table-container">
                      <table className="responsive-table col1-fix">
                        <thead>
                          <tr>
                            <th>Number of Family Members</th>
                            <th>Funds Required (CAD)</th>
                            <th>Funds Required (INR) (approx.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {financialSupportTableData.map((row, index) => (
                            <tr key={index}>
                              <td className="bold">{row.id}</td>
                              <td>{row.cad}</td>
                              <td>{row.approx}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>

                <li>
                  <span class="pages-bold">Residency Intent:</span> You are
                  expected to hold an intention to stay and settle in any
                  province or region outside Quebec. Quebec has its point system
                  in the selection of skilled workers through the QSWP.
                </li>
              </ol>
              <div className="pages-paragraph">
                Meeting these eligibility criteria, along with achieving the
                required points on the FSW points grid, will allow individuals
                to enter the Express Entry pool under the Federal Skilled Worker
                Program (FSWP) and be considered for permanent residency in
                Canada.
              </div>
            </div>

            <div class="pages-header-2" ref={pointfswRef}>FSW Points Grid</div>
            <div class="pages-paragraph">
              The Federal Skilled Worker Class uses a points grid system to
              assess your eligibility for permanent residency in Canada. The
              maximum number of points you can earn is 100. However, the minimum
              number of points required is 67.
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Here's a breakdown of the points grid:
              </p>
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Criteria</th>
                        <th>Max Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {languageProficiencyTableData.map((row, index) => (
                        <tr key={index}>
                          <td className="bold">{row.language}</td>
                          <td>{row.text}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                Let us explore the section in detail:
              </p>
            </div>
            <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
              <li>
                <span class="pages-bold">Education:</span> Points are awarded
                based on the highest level of education, either obtained in
                Canada or assessed as equivalent through an Educational
                Credential Assessment (ECA) for foreign education. Higher
                education leads to more points.
                <div>
                  <div className="table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Education Level</th>
                          <th>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gridEducationTableData.map((row, index) => (
                          <tr key={index}>
                            <td className="bold">{row.level}</td>
                            <td>{row.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>

              <li>
                <span class="pages-bold">Language Proficiency:</span> Points are
                based on language test scores for English (CLB) or French
                (NCLC). You need to demonstrate proficiency in all four language
                skills: listening, speaking, reading, and writing. You can earn
                an additional 4 points for second language proficiency if you
                score at least CLB 5 in all abilities in the second language.
                <div>
                  <div className="table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Education Level</th>
                          <th>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gridEducationTableData.map((row, index) => (
                          <tr key={index}>
                            <td className="bold">{row.level}</td>
                            <td>{row.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>

              <li>
                <span class="pages-bold">Work Experience:</span> Points are
                awarded for full-time, paid work experience in a skilled
                occupation (NOC 0, A, or B). This experience must have been
                gained in the last 10 years. More years of experience result in
                higher points.
                <div>
                  <div className="table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Education Level</th>
                          <th>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gridEducationTableData.map((row, index) => (
                          <tr key={index}>
                            <td className="bold">{row.level}</td>
                            <td>{row.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>

              <li>
                <span class="pages-bold">Age:</span> Points decrease as the
                applicant’s age increases beyond 35. The ideal age for maximum
                points is between 18 and 35.
                <div>
                  <div className="table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Education Level</th>
                          <th>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gridEducationTableData.map((row, index) => (
                          <tr key={index}>
                            <td className="bold">{row.level}</td>
                            <td>{row.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>

              <li>
                <span class="pages-bold">Arranged Employment:</span> Applicants
                can gain 10 points if they have a valid job offer in Canada that
                is full-time, non-seasonal, and for at least one year. The job
                must be classified under NOC 0, A, or B, and the employer must
                obtain a positive Labour Market Impact Assessment (LMIA), unless
                exempt.
              </li>

              <li>
                <span class="pages-bold">Adaptability:</span> Adaptability
                points are awarded for factors that show you are likely to
                settle in Canada successfully.
                <div>
                  <div className="table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Education Level</th>
                          <th>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gridEducationTableData.map((row, index) => (
                          <tr key={index}>
                            <td className="bold">{row.level}</td>
                            <td>{row.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </li>
            </ol>

            <div class="pages-header-2" ref={applyfswRef}>
              Steps to Apply for the Federal Skilled Worker Program
            </div>
            <div className="pages-paragraph">
              To apply for permanent residency in Canada under the FSWP, follow
              these steps:
              <ul>
                <li>
                  <span class="pages-bold">Check Eligibility:</span> Ensure you
                  meet the above-mentioned criteria for work experience,
                  language proficiency, education, and other requirements.
                </li>
                <li>
                  <span class="pages-bold">
                    Get an Educational Credential Assessment (ECA):
                  </span>{" "}
                  Complete an IRCC-approved language test, such as IELTS for
                  English or TEF for French.
                </li>
                <li>
                  <span class="pages-bold">Take a Language Test:</span> Obtain
                  an ECA to verify that your foreign education is equivalent to
                  a Canadian credential.
                </li>
                <li>
                  <span class="pages-bold">
                    Create an Express Entry Profile:
                  </span>{" "}
                  Submit an online profile to Immigration, Refugees, and
                  Citizenship Canada (IRCC), including your skills, work
                  experience, education, and language scores. This profile will
                  be used to calculate your Comprehensive Ranking System (CRS)
                  score.
                </li>
                <li>
                  <span class="pages-bold">
                    Receive an Invitation to Apply (ITA):
                  </span>{" "}
                  If your CRS score meets the cutoff in a draw from the Express
                  Entry pool, you will receive an ITA.
                </li>
                <li>
                  <span class="pages-bold">Submit Your Application:</span>{" "}
                  Within 60 days of receiving the ITA, submit a complete
                  Application for Permanent Residence (eAPR).
                </li>
                <li>
                  <span class="pages-bold">Await Decision:</span> After
                  submission, wait for IRCC to process your application and make
                  a decision on your permanent residency.
                </li>
              </ul>
              It typically takes six to eight months to process.
            </div>

            <div class="pages-header-2" ref={feesfswRef}>Processing Fees of FSWC</div>
            <div className="pages-paragraph">
              When applying for permanent residence under the Federal Skilled
              Worker (FSW) program, government processing fees is required apart
              from the settlement funds for eligibility. The processing fees
              are:
              <ul>
                <li>
                  <span class="pages-bold">Principal applicant:</span> $1,365
                  CAD (includes processing and right of permanent residence
                  fees).
                </li>
                <li>
                  <span class="pages-bold">Spouse or partner:</span> $1,365 CAD
                  (with right of permanent residence fees).
                </li>
                <li>
                  <span class="pages-bold">Dependent child:</span> (under 22
                  years old or a dependent over 22 with a disability): $230 CAD
                  per child.
                </li>
              </ul>
              For the most accurate settlement fund requirements, visit the{" "}
              <a
                href="#"
                style={{
                  color: "blue",
                }}
              >
                IRCC website.
              </a>
            </div>

            <div class="pages-header-2" ref={difffswRef}>
              Difference between FSW eligibility points and CRS score
            </div>
            <div className="pages-paragraph">
              The eligibility criteria for the Federal Skilled Worker Class
              (FSWC) is different from the Comprehensive Ranking System ranking
              in Express Entry.
              <ul>
                <li>
                  {" "}
                  To qualify for the FSWC, applicants must first meet the basic
                  67 points eligibility criteria.
                </li>
                <li>
                  {" "}
                  Meeting these eligibility criteria allows an individual to
                  enter the Express Entry pool but does not guarantee an
                  invitation to apply for permanent residency.
                </li>
              </ul>
              Once in the pool, the CRS ranking system is used to rank
              candidates. The CRS score determines whether a candidate will
              receive an Invitation to Apply (ITA) for permanent residency
              during a draw or not.
              <div class="pages-paragraph">
                The Federal Skilled Worker (FSW) Program provides permanent
                residency in Canada, granting the freedom to live, work, and
                study anywhere in the country. It also offers a pathway to
                Canadian citizenship and access to Canada’s healthcare system
                and educational opportunities.
              </div>
            </div>
          </div>
          <div ref={faqfswRef}>
          <FaqBox faqItems={faqItems} />
          <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}

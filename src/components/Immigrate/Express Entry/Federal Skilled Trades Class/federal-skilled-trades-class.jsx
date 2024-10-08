import React from "react";
import "./federal-skilled-trades-class.css";
import TableOfContent from "../../../shared/TableOfContent.jsx";
import FaqBox from "../../../shared/FaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const tableContentData = [
  {
    id: 1,
    content: "What is the Federal Skilled Trades Program (FSTP)?",
    scrollTo: "#about-fstp",
  },
  {
    id: 2,
    content:
      "Eligibility Criteria for the Federal Skilled Trades Program (FSTP)",
    scrollTo: "#eligibility-fstp",
  },
  {
    id: 3,
    content: "Application Procedure for FSTP",
    scrollTo: "#apply-fstp",
  },
  {
    id: 4,
    content: "FAQs",
    scrollTo: "#faq-fstp",
  },
];

const languageTableData = [
  {
    language: "English",
    abilities: "Speaking & Listening",
    level:
      "CLB 5",
  },
  {
    language: "English",
    abilities: "Reading & Writing",
    level: "CLB 4",
  },
  {
    language: "French",
    abilities:
      "Speaking & Listening",
      level:
      "NCLC 5",
  },
  {
    language: "French",
    abilities:
      "Reading & Writing",
      level: "NCLC 4",
  },
];

const workExperienceTableData = [
  {
    group: "Major Group 72",
    text: "Technical trades and transportation officers and controllers (excluding Sub-Major Group 726)",
  },
  {
    group: "Major Group 73",
    text: "General trades",
  },
  {
    group: "Major Group 82",
    text: "Supervisors in natural resources, agriculture, and related production",
  },
  {
    group: "Major Group 83",
    text: "Occupations in natural resources and related production",
  },
  {
    group: "Major Group 92",
    text: "Processing, manufacturing, utilities supervisors, and utilities operators and controllers",
  },
  {
    group: "Major Group 93",
    text: "Central control and process operators, aircraft assemblers and inspectors (excluding Sub-Major Group 932)",
  },
  {
    group: "Minor Group 6320",
    text: "Cooks, butchers, and bakers",
  },
  {
    group: "Unit Group 62200",
    text: "Chefs",
  },
];

const faqItems = [
  {
    question: "Can I apply with experience in multiple trades?",
    answer:
      "Yes, provided the experience is in eligible trades under the NOC codes and meets the program requirements.",
  },
  {
    question: "What are the language requirements for the program?",
    answer:
      "You need a minimum Canadian Language Benchmark (CLB) level 4 in English or French.",
  },
  {
    question: "How can I increase my CRS score?",
    answer:
      "Improve your CRS score by obtaining a job offer, gaining more experience, enhancing language skills, or pursuing further education.",
  },
  {
    question: "What are the benefits of applying through the FSTP?",
    answer:
      "Candidates applying through the FSTP can typically receive their permanent residency within six months. The program also allows for lower Comprehensive Ranking System (CRS) scores compared to other programs of Express Entry of Canada since educational documentation is not required.",
  },
  {
    question: "What types of occupations qualify under the FSTP?",
    answer:
      " Eligible occupations include those in the National Occupational Classification (NOC) categories for industrial, electrical, and construction trades, maintenance and equipment operation trades, chefs and cooks, and more. ",
  },
];

export default function FederalSkilledTradesClass() {
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
          h2="Federal Skilled Trades Class"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Express Entry
              {" > "}Federal Skilled Trades Class
            </div>
            <div class="pages-header">
              Federal Skilled Trades Program{" "}
              <span class="cec-font">(FSTP)</span>{" "}
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Federal Skilled Trades Program (FSTP) is a popular immigration
              pathway designed for skilled tradespeople seeking permanent
              residency in Canada. It's part of the Express Entry system, which
              selects skilled workers worldwide. The program is designed to
              attract skilled tradespeople who can contribute to Canada’s labour
              market and economy. This program plays a vital role in addressing
              labour shortages in various sectors by bringing in experienced
              tradespeople from around the world who can contribute directly to
              the Canadian workforce. Unlike the Federal Skilled Worker Program
              (FSWP), which focuses on general skilled work experience, the FSTP
              emphasises practical, hands-on expertise in specific trades.
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2">
              What is the Federal Skilled Trades Program (FSTP)?
            </div>
            <div className="pages-paragraph">
              The Federal Skilled Trades Program (FSTP) is one of three federal
              Canada immigration programs under the Express Entry system, the
              others being the
              <a href="#" style={{ color: "blue" }}>
                {" "}
                Federal Skilled Worker Program{" "}
              </a>{" "}
              (FSWP) and the Canadian Experience Class (CEC).
              <ul>
                <li>
                  <span class="">
                    The FSTP is tailored for skilled tradespeople with
                    experience in specific trades who wish to obtain Canada PR.
                  </span>
                </li>
                <li>
                  <span class="">
                    Unlike the FSWP, which focuses on general skilled work
                    experience, the FSTP emphasises practical skills in
                    designated trades.
                  </span>
                </li>
                <li>
                  <span class="">
                    The FSTP helps fill labour shortages in Canada by targeting
                    candidates with expertise in high-demand trades.
                  </span>
                </li>
              </ul>
              This program recognizes the vital role that skilled tradespeople
              play in the Canadian economy and offers a pathway to permanent
              residency for those who meet the requirements.
            </div>

            <div className="note-cec" style={{textAlign:'center'}}>
              <div >
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2">
              Eligibility Criteria for the Federal Skilled Trades Program (FSTP)
            </div>

            <div className="pages-paragraph">
              To qualify for the Federal Skilled Trades Program, applicants must
              meet the following criteria:
              <br></br>
              <ul>
                <li>
                  Work Experience of at least 2 years of full-time work
                  experience in a skilled trade (or equivalent part-time) within
                  the last 5 years.
                  <ul style={{ listStyleType: "circle" }}>
                    <li>
                      Experience must be after obtaining certification to
                      practice the trade in your home country.
                    </li>
                    <li>
                      It includes industrial, electrical, construction trades,
                      maintenance, equipment operation, and other specified
                      trades.
                    </li>
                  </ul>
                  <div>
                    <div className="table-container">
                      <table className="responsive-table">
                        <thead>
                          <tr>
                            <th>NOC Group</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {workExperienceTableData.map((row, index) => (
                            <tr key={index}>
                              <td className="bold">{row.group}</td>
                              <td>{row.text}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>

                <li>
                  A valid full-time job offer for full-time employment in Canada
                  for at least 12 months duration, or a certificate of
                  qualification issued from a Canadian provincial, federal, or
                  territorial authority.
                  <ul style={{ listStyleType: "circle" }}>
                    <li>
                      Certification of qualification is given after you have
                      passed an exam, post which you are deemed eligible to work
                      in a skilled trade.
                    </li>
                  </ul>
                </li>

                <li>
                  Minimum Canadian Language Benchmark (CLB) level in English or French.
                  <div>
                    <div className="table-container">
                      <table className="responsive-table">
                        <thead>
                          <tr>
                            <th>Language</th>
                            <th>Abilities</th>
                            <th>Minimum Level</th>
                          </tr>
                        </thead>
                        <tbody>
                          {languageTableData.map((row, index) => (
                            <tr key={index}>
                              <td className="bold">{row.language}</td>
                              <td>{row.abilities}</td>
                              <td>{row.level}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </li>

                <li>
                  The applicant must plan to live outside Quebec.
                </li>

              </ul>
              <div className="pages-paragraph">
              Candidates must also meet Canada's basic admissibility requirements, which exclude those with certain criminal offences or medical conditions.
              </div>
            </div>

            <div class="pages-header-2">
            Application Procedure for FSTP
            </div>
            <div class="pages-paragraph">
            Applying for the FSTP involves several steps, managed through the <a href="#" style={{
              color:'blue'
            }}>Express Entry system</a>:
            </div>
            <ol
              style={{ listStyle: "decimal", listStylePosition: "inside" }}
              className="ordered-list"
            >
              <li>
              Create and submit your profile to Immigration, Refugees and Citizenship Canada (IRCC). 

              <ul style={{ listStyleType: "circle" }}>
                    <li>
                    This assigns you a Comprehensive Ranking System (CRS) score so you can enter the draw for Invitations to Apply (ITAs) for permanent residence.
                    </li>
                  </ul>

              </li>

              <li>
              Submit the required documents such as:

              <ul style={{ listStyleType: "circle" }}>
                    <li>
                    Language Proficiency Test Results for an approved language in the last 2 years.
                    </li>
                    <li>
                    Valid IDs for you and your family, preferably passports.
                    </li>
                    <li>
                    If claiming education points, you need to include a valid ECA for foreign credentials (not needed for Canadian education).
                    </li>
                  </ul>
              </li>

              <li>
               The lowest CRS score for an FSTP ITA was 199. Aim to improve your score if it's lower.
              </li>
             
            </ol>
            <div className="pages-paragraph">
            The Federal Skilled Trades Program offers several key benefits, including the opportunity to gain permanent residency, which grants you the right to live, work, and study anywhere in Canada. Successful applicants can also apply for Canadian citizenship after fulfilling residency requirements. Additionally, you'll have access to Canada's healthcare system and educational opportunities. Overall, the FSTP provides a valuable pathway for skilled tradespeople to establish themselves in Canada, offering a clear and efficient route to Canadian PR and a promising future.
            </div>
          </div>
          <FaqBox faqItems={faqItems} />
          <ReadyToStartCard />
        </div>
      </div>
    </div>
  );
}

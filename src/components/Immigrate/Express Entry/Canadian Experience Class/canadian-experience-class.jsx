import React, {useRef} from "react";
import "./canadian-experience-class.css";
import TableOfContent from "../../../shared/NestedTableOfContent";
import FaqBox from "../../../shared/FaqBox";
import ReadyToStartCard from "../../../shared/ReadyToStart";

import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";



const workExperienceTableData = [
  {
    tier: "TEER 0",
    occupation: "Management occupations",
    example:
      "Advertising, Marketing and Public Relations Managers, Financial Managers",
  },
  {
    tier: "TEER 1",
    occupation: "Occupations requiring a university degree",
    example: "Financial Advisors, Software Engineers",
  },
  {
    tier: "TEER 2",
    occupation:
      "Occupations requiring a college diploma, 2+ years of apprenticeship, or supervisory roles",
    example:
      "Computer Network and Web Technicians, Medical Laboratory Technologists",
  },
  {
    tier: "TEER 3",
    occupation:
      "Occupations requiring a college diploma, less than 2 years of apprenticeship, or 6+ months of on-the-job training",
    example: "Bakers, Dental Assistants, Dental Laboratory Assistants",
  },
];

const languageProficiencyTableData = [
  {
    language: "English",
    text: "CLB 7",
  },
  {
    language: "French",
    text: "NCLC7",
  },
];

const faqItems = [
  {
    question: "Is there a specific age requirement for the CEC?",
    answer:
      "There is no specific age requirement for the CEC. However, age is a factor in the CRS score, with younger applicants generally receiving more points.",
  },
  {
    question: "Can I include my family members in my CEC application?",
    answer:
      "Yes, you can include your spouse or common-law partner and dependent children in your CEC application. They can also become permanent residents if your application is approved.",
  },
  {
    question: "Do I need to show proof of funds for the CEC?",
    answer:
      " No, proof of settlement funds is not required for the CEC, as long as you are currently authorized to work in Canada and have a valid job offer. However, it’s always good to have sufficient funds for settlement purposes. ",
  },
  {
    question: "How does the CRS score affect my chances under the CEC?",
    answer:
      "The CRS score is crucial in determining whether you receive an ITA. Higher scores increase your chances of being selected in an Express Entry draw. Factors like age, education, work experience, language proficiency, and Canadian work experience contribute to your CRS score.",
  },
  {
    question: "Are there any education requirements for the CEC?",
    answer:
      " No, there are no formal education requirements to apply for the CEC. However, having a Canadian education can help improve your Comprehensive Ranking System (CRS) score. ",
  },
  {
    question: "Can I apply if I have work experience while studying?",
    answer:
      "Work experience gained while studying full-time does not count towards the CEC requirements. However, internships that are not part of a study program may be counted.",
  },
];

export default function CanadianExperienceClass() {

  const aboutCECRef= useRef(null);
  const eligibilityRef= useRef(null);
  const applyRef= useRef(null);
  const faqRef= useRef(null);

  const tableContentData = [
    {
      id: 1,
      title: "What is the Canadian Experience Class (CEC)?",
      scrollTo: aboutCECRef,
    },
    {
      id: 2,
      title: "Eligibility Criteria for the Canadian Experience Class (CEC)",
      scrollTo: eligibilityRef,
    },
    {
      id: 3,
      title: "How to Apply for the Canadian Experience Class (CEC)",
      scrollTo: applyRef,
    },
    {
      id: 4,
      title: "FAQs",
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
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="I"
          h1="Express Entry"
          h2="Canadian Experience Class"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Express Entry
              {" > "}Canadian Experience Class
            </div>
            <div class="pages-header">Canadian Experience Class <span class='cec-font'>(CEC)</span> </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Canadian Experience Class (CEC) is a well-known immigration
            pathway for individuals who have gained skilled work experience in
            Canada and are looking to obtain permanent residency. As part of the
            Express Entry system, the CEC is designed to retain talented workers
            who have already adapted to the Canadian lifestyle through their
            employment. With its streamlined process, the CEC is one of the
            fastest routes to{" "}
            <a href="#" style={{ color: "blue" }}>
              Canadian permanent residency
            </a>{" "}
            , often taking as little as three to four months to process. Unlike
            other immigration programs, the CEC does not require applicants to
            have a job offer or proof of settlement funds, which simplifies the
            application process for those already established in Canada.
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>
           
              <div class="pages-header-2" ref={aboutCECRef}>
                What is the Canadian Experience Class (CEC)?
              </div>
              <div className="pages-paragraph">
                The Canadian Experience Class (CEC) is one of three federal
                immigration programs under the Express Entry system, along with
                the Federal Skilled Worker Program (FSWP) and the Federal
                Skilled Trades Program (FSTP).
                <ul>
                  <li>
                    <span class="pages-bold">
                      It targets foreign nationals with skilled work experience
                      in Canada who seek to transition from temporary to
                      permanent residency.
                    </span>
                  </li>
                  <li>
                    <span class="pages-bold">
                      The CEC offers a streamlined path to permanent residency,
                      appealing to international graduates and temporary foreign
                      workers.
                    </span>
                  </li>
                  <li>
                    <span class="pages-bold">
                      Candidates are evaluated on Canadian work experience,
                      language proficiency, and other relevant factors, making
                      it accessible to those already in the country.
                    </span>
                  </li>
                </ul>
                Through the Express Entry system, the CEC ranks candidates using
                the Comprehensive Ranking System (CRS). Those with competitive
                scores receive invitations to apply for permanent residence.
                Unlike the FSWP, which requires qualifying work experience
                outside Canada, the CEC is focused on candidates with Canadian
                work experience.
              </div>

              <div className="note-cec">
                <div>
                  <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                  CRS Score to Boost Your Immigration Journey!
                </div>
                <button className="button-cec">Calculate Now</button>
              </div>

              <div class="pages-header-2" ref={eligibilityRef}>
                Who is eligible for the Canadian Experience Class (CEC)?
              </div>

              <div className="pages-paragraph">
                To be eligible for the CEC, applicants must meet the following
                criteria:
                <br></br>
                <ol
                  style={{ listStyle: "decimal", listStylePosition: "inside" }}
                >
                  <li>
                    <span class="pages-bold">Work Experience:</span> At least 1
                    year of full-time (or equivalent part-time) skilled work
                    experience in Canada within the last three years.
                    <ul style={{ listStyleType: "circle" }}>
                      <li>
                        {" "}
                        The experience must fall under NOC TEER 0, 1, 2, or 3
                        categories.
                      </li>
                      <li>
                        It must be lawfully obtained, paid work, and completed
                        within 36 months before submitting the eAPR.
                      </li>
                      <li>Internships or volunteer work is not considered.</li>
                    </ul>
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
                                <td className="bold">{row.tier}</td>
                                <td>{row.occupation}</td>
                                <td>{row.example}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span class="pages-bold">Language Proficiency:</span> An
                    approved English or French language test (e.g., IELTS,
                    CELPIP, TEF) and achieve a minimum level 7 for NOC TEER 0 or
                    1 jobs, or level 5 for NOC TEER 2 or 3 jobs.
                    <ul style={{ listStyleType: "circle" }}>
                      <li>
                        {" "}
                        The language test is valid for 2 years after the date of
                        the result. So make sure it is valid when applying for
                        permanent residence in Canada.
                      </li>
                    </ul>
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
                    <span class="pages-bold">Education:</span> No formal
                    education requirement exists for CEC.
                    <ul style={{ listStyleType: "circle" }}>
                      <li>
                        {" "}
                        However, you can gain additional CRS points for
                        post-secondary education in Canada or an ECA for foreign
                        credentials.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span class="pages-bold">Residency Status:</span> Legal
                    status in Canada during their work experience and
                    application submission.
                  </li>
                  <li>
                    <span class="pages-bold">
                      Intent to Reside Outside Quebec:
                    </span>{" "}
                    Applicants must intend to live outside Quebec, which has a
                    separate immigration program.
                  </li>
                </ol>

                </div>

                <div class="pages-header-2" ref={applyRef}>
                  How to Apply for the Canadian Experience Class (CEC)?
                </div>
                <div class="pages-paragraph">
                The application process for the Canadian Experience Class is
                managed through the Express Entry system. Here’s a step-by-step
                guide:
                </div>
                <ol
                  style={{ listStyle: "decimal", listStylePosition: "inside" }}
                  className="ordered-list"
                >
                  <li>
                    Check if you meet CEC’s work experience, language, and
                    residency requirements.
                  </li>
                  <li>
                    Complete an IRCC-approved language test; results must be
                    valid at application time.
                  </li>
                  <li>
                    Submit an online profile to IRCC to calculate your CRS
                    score.
                  </li>
                  <li>
                    If your CRS score meets the cutoff, you’ll get an ITA to
                    apply for permanent residency.
                  </li>
                  <li>
                    IRCC will process your application, typically within six
                    months, and may request additional information.
                  </li>
                  <li>
                    If approved, get your COPR and instructions for finalizing
                    residency.
                  </li>
                </ol>
                <div className="pages-paragraph">
                  Finalize your residency upon arrival in Canada or at a local
                  IRCC office if already in the country. With its streamlined
                  application process, lack of a job offer requirement, and
                  relatively fast processing times, the CEC is a favoured
                  pathway for many international graduates and temporary foreign
                  workers.
                </div>
             
            
          </div>
          <div ref={faqRef}>
          <FaqBox faqItems={faqItems} />
          </div>
          <ReadyToStartCard />
        </div>
      </div>
    </div>
  );
}

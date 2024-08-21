import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    { name: "Connection to Province", amount: "No" },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount: "CLB 4",
    },
    { name: "Level of Education", amount: "High school" },
    { name: "Work Experience", amount: "NOC C or D 6 months" },
    { name: "Investment Requirement", amount: "None" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function YukonCriticalImpactWorker() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Immigrate
          {" > "}
          <Link to="/immigrate/provincial-nominee-program">
            Provincial Nominee Program
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/yukon">Yukon</Link>
          {" > "}Yukon Critical Impact Worker
        </p>
        <div className="header-content">
          <h1 className="heading-about">Yukon Critical Impact Worker</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Yukon Nominee Program (YNP) Critical Impact Worker stream gives
        employers the chance to nominate workers with experience in occupations
        classified as low-skilled for Canadian permanent residence.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Applicant Requirements</li>
          <li>Employer Requirements</li>
          <li>Application Procedure</li>
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          {" "}
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        This program is designed to help fill the Yukon’s labour shortages with
        foreign workers who possess the necessary experience in low-skilled or
        semi-skilled occupations.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table /> <br />
        Both the applicant and the employer must meet eligibility requirements
        in order to qualify for the Yukon Nominee Skilled Worker program.
        <br />
        <br />
        <sp>Applicant Requirements</sp>
        <br />
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        To be eligible for the Yukon Skilled Worker stream, candidates must have
        a full-time, permanent job offer from an eligible Yukon employer. The
        job offer must be in a position at National Occupational Classification
        (NOC) skill level 0, A, or B.
        <br />
        <br />
        <bold>Language Proficiency</bold>
        <br />
        <br />
        Candidates must have official language test results that demonstrate
        sufficient language proficiency in English or French to perform the job
        they have been offered. Candidates with a job offer at NOC skill level 0
        or A must demonstrate proficiency equivalent to at least Canadian
        Language Benchmark (CLB) level 7. Candidates with a job offer at NOC
        skill level B must demonstrate proficiency equivalent to CLB level 5.
        <br />
        <br />
        <bold>Level of Education</bold>
        <br />
        <br />
        Candidates must have at least the equivalent of a Canadian high school
        level education, and any education required to perform the job they have
        been offered.
        <br />
        <br />
        <bold>Work Experience</bold>
        <br />
        <br />
        Candidates must have at least one year of work experience in a position
        related to the job they have received from the Yukon employer.
        <br />
        <br />
        <sp>Employer Requirements</sp>
        <br />
        <br />
        To be eligible to make a valid job offer to a foreign worker for the
        Yukon Nominee Program (YNP), the Yukon employer must meet certain
        requirements.
        <br />
        <br />
        <bold>Job Offer Requirement</bold>
        <br />
        <br />
        The employer must offer a full-time, indeterminate position with a wage
        that meets industry standards.
        <br />
        <br />
        <bold>Business Requirements</bold>
        <br />
        <br />
        The Yukon business must have been operating in Yukon for at least one
        year. If the business is a non-profit organisation, the business must
        have been in operation for at least three years, and must have secured
        funding for at least one year following the application to the YNP. The
        business must also have current and valid licences to operate in Yukon.
        <br />
        <br />
        <bold>Recruitment Requirements</bold>
        <br />
        <br />
        The employer must demonstrate that reasonable efforts were made to
        recruit a Canadian to fill the position prior to offering the position
        to a foreign national. Employers must meet specific advertising
        requirements, including advertising the position for at least four (4)
        weeks in at least two local and one national recruitment mediums.
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        The Yukon Skilled Worker stream is open to new applications at all
        times. Eligible candidates and Yukon employers must prepare a complete
        application to the program together. The employer must then submit the
        application for a provincial nomination. Applications submitted to the
        YNP are generally processed within eight to ten weeks.
        <br />
        <br />
        If the application is approved, the candidate will receive a nomination
        from Yukon to apply for permanent residence. The applicant will also
        receive a letter of support for a temporary work permit, which the
        applicant can use to apply to IRCC for a work permit so they can begin
        working in Yukon while their application for permanent residence is
        processed. Note that applying for a temporary work permit represents a
        separate application.
        <br />
        <br />
        After receiving a provincial nomination, the applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
      </h2>
    </div>
  );
}

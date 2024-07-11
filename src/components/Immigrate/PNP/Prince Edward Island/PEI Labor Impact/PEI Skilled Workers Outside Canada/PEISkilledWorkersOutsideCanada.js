import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { Requirement: "Express Entry Profile", Value: "No" },
    { Requirement: "Connection to Province", Value: "No" },
    { Requirement: "Job Offer", Value: "Yes" },
    { Requirement: "Language Proficiency", Value: "CLB 4" },
    { Requirement: "Level of Education", Value: "Post-secondary" },
    { Requirement: "Work Experience", Value: "NOC 0, A, or B\n2 years" },
    { Requirement: "Investment Requirement", Value: "None" },
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
            <td>{item.Requirement}</td>
            <td>{item.Value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableFactor = () => {
  const data = [
    {
      Factor: "Age",
      SkilledWorker: 15,
      CriticalWorker: 15,
      InternationalGraduate: 25,
    },
    {
      Factor: "Language",
      SkilledWorker: 20,
      CriticalWorker: 20,
      InternationalGraduate: "N/A",
    },
    {
      Factor: "Education",
      SkilledWorker: 15,
      CriticalWorker: 15,
      InternationalGraduate: 35,
    },
    {
      Factor: "Work experience",
      SkilledWorker: 20,
      CriticalWorker: 20,
      InternationalGraduate: "N/A",
    },
    {
      Factor: "Employment",
      SkilledWorker: 15,
      CriticalWorker: 15,
      InternationalGraduate: 20,
    },
    {
      Factor: "Adaptability",
      SkilledWorker: 15,
      CriticalWorker: 15,
      InternationalGraduate: 20,
    },
    {
      Factor: <bold>Maximum Points</bold>,
      SkilledWorker: <bold>100</bold>,
      CriticalWorker: <bold>100</bold>,
      InternationalGraduate: <bold>100</bold>,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Factor</th>
          <th>Skilled Worker</th>
          <th>Critical Worker</th>
          <th>International Graduate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Factor}</td>
            <td>{item.SkilledWorker}</td>
            <td>{item.CriticalWorker}</td>
            <td>{item.InternationalGraduate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function PEISkilledWorkerOutsideCanada() {
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
          <Link to="/immigrate/provincial-nominee-program/prince-edward-island">
            Prince Edward Island
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/prince-edward-island/pei-labor-impact">
            PEI Labor Impact
          </Link>
          {" > "}PEI Skilled Worker Outside Canada
        </p>
        <div className="header-content">
          <h1 className="heading-about">PEI Skilled Worker Outside Canada</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Foreign workers who are currently outside of Canada and have received an
        NOC Skill Level 0, A, or B position from an eligible employer may be
        eligible to apply for the Skilled Worker Outside Canada stream of the
        Prince Edward Island Provincial Nomination Program (PEI PNP).
        <br /> <br />
        <ul>
          <li>Program Requirements</li>
          <li>Application Procedure</li>
          <li>Labour Impact Category Ranking System</li>
          <li>Labour Impact and Express Entry Recent Draws</li>
        </ul>
        <br /> <br />
        <a href="/assessment" className="button">
          GET STARTED
        </a>
        <br /> <br /> <br />
        The job offer must be approved by the PEI Office of Immigration before a
        prospective immigrant can submit their Expression of Interest (EOI)
        profile.
        <br /> <br />
        <sp>Program Requirements</sp>
        <br /> <br />
        <Table />
        <br />
        <sp>Job Offer</sp>
        <br />
        <br />
        To be eligible, candidates must have a full-time, permanent job offer
        from an employer in PEI. The position must be classified as National
        Occupational Classification (NOC) Skill Level 0, A, or B. The employers
        making the job offer must have made contact with the PEI immigration
        office and had the job offer approved.
        <br />
        <br />
        <sp>Language Proficiency</sp>
        <br />
        <br />
        Candidates need to demonstrate that they have sufficient language
        proficiency in English or French to be able to perform their job duties.
        This can be demonstrated through an official language test demonstrating
        proficiency consistent with Canadian Language Benchmark (CLB) level 4, a
        signed language declaration from the employer making the job offer, or
        documents attesting that the candidate completed their education in
        English or French.
        <br />
        <br />
        <sp>Level of Education</sp>
        <br />
        <br />
        Candidates must have at least completed a two-year post-secondary degree
        or diploma.
        <br />
        <br />
        <sp>Work Experience</sp>
        <br />
        <br />
        Candidates must have at least two years of full-time work experience in
        the past five years.
        <br />
        <br />
        <sp>Age</sp>
        <br />
        <br />
        Candidates must be between 18 and 59 years old to be eligible to apply
        to this stream.
        <br />
        <br />
        <sp>Settlement Funds</sp>
        <br />
        <br />
        Candidates must meet the settlement funds requirement as determined by
        Immigration, Refugees and Citizenship Canada (IRCC).
        <br />
        <br />
        <sp>Intention to Reside</sp>
        <br />
        <br />
        Candidates must demonstrate an intention to reside in PEI.
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        The Skilled Worker Outside Canada stream operates on an Expression of
        Interest (EOI) system. Candidates who meet the eligibility criteria must
        submit a profile to PEI’s pool of candidates. All of the candidates in
        the pool will then be ranked against each other based on the PEI Labour
        Impact Category Ranking System. The highest-ranking candidates will be
        invited to submit a complete application to the stream in one of the
        category’s periodic draws. Successful candidates will be issued a
        provincial nomination from PEI.
        <br />
        <br />
        After receiving a provincial nomination, an applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
        <br />
        <br />
        <sp>Labour Impact Category Ranking System</sp>
        <br />
        <br />
        If a candidate meets all of the eligibility requirements for this stream
        of provincial nomination, they will need to create a profile in the PEI
        EOI system. Applicants will be awarded up to 100 assessment points based
        on their age, language, education, work experience, employment, and
        adaptability.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <TableFactor />
      </h2>
    </div>
  );
}

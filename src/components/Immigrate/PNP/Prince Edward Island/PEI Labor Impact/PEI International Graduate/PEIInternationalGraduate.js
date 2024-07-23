import React from "react";
import { Link } from "react-router-dom";
const TableSkilled = () => {
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
      Factor: "Maximum Points",
      SkilledWorker: 100,
      CriticalWorker: 100,
      InternationalGraduate: 100,
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
const Table = () => {
  const data = [
    { Requirement: "Express Entry Profile", Value: "No" },
    { Requirement: "Connection to Province", Value: "Study Experience" },
    { Requirement: "Job Offer", Value: "Yes" },
    { Requirement: "Language Proficiency", Value: "No minimum" },
    { Requirement: "Level of Education", Value: "Post-secondary" },
    {
      Requirement: "Work Experience",
      Value: "Employed in PEI\nNOC 0, A, or B\n6 months",
    },
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

export default function PEIInternationalGraduate() {
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
          {" > "}PEI International Graduate
        </p>
        <div className="header-content">
          <h1 className="heading-about">PEI International Graduate</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Recent graduates from an approved PEI post-secondary institution who are
        currently working in the province with a valid Post-Graduate Work Permit
        can take advantage of the International Graduate program.
        <br />
        <br />{" "}
        <ul>
          <li>Program Requirements </li>
          <li>Application Procedure </li>
          <li>Labour Impact Category Ranking System</li>
          <li>PEI Labour Impact and Express Entry Recent Draws</li>
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          GET STARTED
        </a>
        <br />
        <br /> <br />
        This stream of the Prince Edward Island Provincial Nominee Program (PEI
        PNP) provides a quicker path to Canadian permanent residence in exchange
        for filling high-skilled positions in PEI’s job market.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br /> <Table />
        <br />
        <sp>Connection to PEI</sp>
        <br />
        <br />
        To be eligible for the PEI International Graduate stream, candidates
        must have graduated from a minimum two-year program at a publicly-funded
        post-secondary institution in PEI. Candidates must also have been
        working in PEI for at least six months in a position that is directly
        related to their PEI post-secondary education.
        <br />
        <br />
        <sp>Job Offer</sp>
        <br />
        <br />
        Candidates must have a full-time, permanent job offer from their current
        PEI employer. The job offer must be for a position classified as
        National Occupational Classification (NOC) Skill Level 0, A, or B.
        <br />
        <br />
        <sp>Language Proficiency</sp>
        <br />
        <br />
        While there is no minimum language proficiency to meet the eligibility
        requirements for this stream, candidates must have sufficient ability to
        communicate in English or French.
        <br />
        <br />
        <sp>Level of Education</sp>
        <br />
        <br />
        Candidates must have completed a minimum two-year post-secondary program
        in PEI.
        <br />
        <br />
        <sp>Work Experience</sp>
        <br />
        <br />
        Candidates must have at least six months of experience working in PEI.
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
        The International Graduate stream operates on an Expression of Interest
        (EOI) system. Candidates who meet the eligibility criteria must submit a
        profile to PEI’s pool of candidates. All of the candidates in the pool
        will then be ranked against each other based on the PEI Labour Impact
        Category Ranking System. The highest-ranking candidates will be invited
        to submit a complete application to the stream in one of the category’s
        periodic draws. Successful candidates will be issued a provincial
        nomination from PEI.
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
        If a candidate meets all the eligibility requirements for this stream of
        PEI PNP, they may create a profile in the Expression of Interest system
        where they will be awarded up to 100 assessment points based on their
        age, language, education, work experience, employment, and adaptability.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <TableSkilled />
      </h2>
    </div>
  );
}

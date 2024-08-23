import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { Requirement: "Express Entry Profile", Description: "No" },
    { Requirement: "Connection to Province", Description: "Work Experience" },
    { Requirement: "Job Offer", Description: "Yes" },
    { Requirement: "Language Proficiency", Description: "CLB 4" },
    { Requirement: "Level of Education", Description: "High school" },
    {
      Requirement: "Work Experience",
      Description: (
        <>
          NOC C or D <br />2 years
        </>
      ),
    },
    { Requirement: "Investment Requirement", Description: "None" },
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
            <td>{item.Description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableFactor = () => {
  const data = [
    {
      factor: "Age",
      skilledWorker: 15,
      criticalWorker: 15,
      internationalGraduate: 25,
    },
    {
      factor: "Language",
      skilledWorker: 20,
      criticalWorker: 20,
      internationalGraduate: "N/A",
    },
    {
      factor: "Education",
      skilledWorker: 15,
      criticalWorker: 15,
      internationalGraduate: 35,
    },
    {
      factor: "Work experience",
      skilledWorker: 20,
      criticalWorker: 20,
      internationalGraduate: "N/A",
    },
    {
      factor: "Employment",
      skilledWorker: 15,
      criticalWorker: 15,
      internationalGraduate: 20,
    },
    {
      factor: "Adaptability",
      skilledWorker: 15,
      criticalWorker: 15,
      internationalGraduate: 20,
    },
    {
      factor: <bold>Maximum Points</bold>,
      skilledWorker: <bold>100</bold>,
      criticalWorker: <bold>100</bold>,
      internationalGraduate: <bold>100</bold>,
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
            <td>{item.factor}</td>
            <td>{item.skilledWorker}</td>
            <td>{item.criticalWorker}</td>
            <td>{item.internationalGraduate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function PEICriticalWorker() {
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
          {" > "}PEI Critical Worker
        </p>
        <div className="header-content">
          <h1 className="heading-about">PEI Critical Worker</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Foreign workers with at least two years of relevant experience in
        semi-skilled and unskilled occupations may be eligible to apply for the
        Critical Worker stream of the Prince Edward Island Provincial Nominee
        Program (PEI PNP).
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Application Procedure</li>
          <li>Labour Impact Category Ranking System</li>
          <li>PEI Labour Impact and Express Entry Recent Draws</li>
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <sp> Connection to PEI</sp>
        <br />
        <br />
        To be eligible, candidates must have worked in PEI for a minimum of six
        months for the PEI employer making the job offer. The candidate must
        have a valid work permit authorising them to work for the PEI employer.
        <br />
        <br />
        <sp>Job Offer</sp>
        <br />
        <br />
        Candidates must have a permanent, full-time job offer from their current
        PEI employer. The job offer must be in a National Occupational
        Classification (NOC) Skill Level C or D occupation.
        <br />
        <br />
        <sp>Language Proficiency</sp>
        <br />
        <br />
        All candidates must have official language test results demonstrating
        proficiency in English or French consistent with Canadian Language
        Benchmark (CLB) level 4.
        <br />
        <br />
        <sp>Level of Education</sp>
        <br />
        <br />
        Candidates must have at least completed secondary school.
        <br />
        <br />
        <sp>Work Experience</sp>
        <br />
        <br />
        Candidates must have at least two years of work experience or education
        relevant to their job offer in the past five years.
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
        The Critical Worker stream operates on an Expression of Interest (EOI)
        system. Candidates who meet the eligibility criteria must submit a
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
        If a candidate meets all of the eligibility requirements for the PEI PNP
        Critical Worker stream, they may create a profile in the PEI EOI system.
        Applicants will be awarded up to 100 assessment points based on their
        age, language, education, work experience, employment, and adaptability.
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

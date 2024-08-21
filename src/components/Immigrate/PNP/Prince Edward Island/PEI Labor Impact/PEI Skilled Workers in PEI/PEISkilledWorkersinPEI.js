import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { requirement: "Express Entry Profile", value: "No" },
    { requirement: "Connection to Province", value: "Work Experience" },
    { requirement: "Job Offer", value: "Yes" },
    { requirement: "Language Proficiency", value: "CLB 4" },
    { requirement: "Level of Education", value: "Post-secondary" },
    { requirement: "Work Experience", value: "NOC 0, A, or B\n2 years" },
    { requirement: "Investment Requirement", value: "None" },
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
            <td>{item.requirement}</td>
            <td>{item.value}</td>
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
export default function PEISkilledWorker() {
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
          {" > "}PEI Skilled Worker
        </p>
        <div className="header-content">
          <h1 className="heading-about">PEI Skilled Worker</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Skilled Worker in PEI stream of the Prince Edward Island Provincial
        Nomination Program (PEI PNP) welcomes foreign workers currently employed
        in PEI to apply for provincial nomination for a fast-tracked path to
        permanent residence in order to fill the high demand for skilled
        positions that cannot currently be met through the local labour force.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Application Procedure</li>
          <li>Labour Impact Category Ranking System</li>
          <li>PEI Labour Impact and Express Entry Recent Draws</li>
        </ul>
        <br /> <br />
        <a href="/assessment" className="button">
          {" "}
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
        <bold>Connection to Prince Edward Island </bold>
        <br />
        <br />
        To be eligible for the Skilled Worker in PEI stream, candidates have to
        be living and working in PEI on a valid work permit. Skilled workers not
        living in Canada may be eligible for the Skilled Worker Outside of PEI
        or PEI Express Entry streams.
        <br />
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        Candidates must have a full-time, permanent job offer from an employer
        in PEI. The position must be classified as National Occupational
        Classification (NOC) Skill Level 0, A, or B.
        <br />
        <br />
        <bold>Language Proficiency</bold>
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
        <bold>Level of Education</bold>
        <br />
        <br />
        Candidates must have at least completed a two-year post-secondary degree
        or diploma.
        <br />
        <br />
        <bold>Work Experience</bold>
        <br />
        <br />
        Candidates must have at least two years of full-time work experience in
        the past five years.
        <br />
        <br />
        <bold>Age</bold>
        <br />
        <br />
        Candidates must be between 18 and 59 years old to be eligible to apply
        to this stream.
        <br />
        <br />
        <bold>Settlement Funds</bold>
        <br />
        <br />
        Candidates must meet the settlement funds requirement as determined by
        Immigration, Refugees and Citizenship Canada (IRCC).
        <br />
        <br />
        <bold>Intention to Reside</bold>
        <br />
        <br />
        Candidates must demonstrate an intention to reside in PEI.
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        The Skilled Worker in PEI stream operates on an Expression of Interest
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
        If a candidate meets all of the Skilled Worker in PEI eligibility
        requirements, they will need to create a profile in the PEI Expression
        of Interest (EOI) system. Applicants will be awarded up to 100 points
        based on their age, language, education, work experience, employment,
        and adaptability.
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

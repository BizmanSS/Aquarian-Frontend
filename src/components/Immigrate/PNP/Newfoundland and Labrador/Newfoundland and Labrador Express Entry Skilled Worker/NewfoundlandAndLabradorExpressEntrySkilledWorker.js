import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "Yes" },
    { name: "Connection to Province", amount: "No" },
    { name: "Job Offer", amount: "Yes, (NOC) Skill Level 0, A, or B." },
    {
      name: "Language Proficiency",
      amount: "See Express Entry requirements",
    },
    { name: "Level of Education", amount: "Post-secondary" },
    {
      name: "Work Experience",
      amount: "NOC 0, A, or B 1 year",
    },
    {
      name: "Investment Requirement",
      amount: "None",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Requirement</th>
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
const TableFactor = () => {
  const data = [
    { name: "Education", amount: "28" },
    { name: "Language Proficiency", amount: "27" },
    { name: "Age", amount: "12" },
    { name: "Work Experience", amount: "20" },
    {
      name: "Connection to Labour Market and Adaptability",
      amount: "13",
    },

    {
      name: <bold>Minimum Pass Score</bold>,
      amount: <bold>67</bold>,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Factor</th>
          <th>Points</th>
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
export default function NewfoundlandAndLabradorExpressEntrySkilledWorker() {
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
          <Link to="/immigrate/provincial-nominee-program/newfoundland-and-labrador">
            New Foundland and Labrador
          </Link>
          {" > "}Newfoundland and Labrador Express Entry Skilled Worker
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Newfoundland and Labrador Express Entry Skilled Worker
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        A potentially accelerated path to Canadian permanent residence for
        provincially nominated candidates, the Express Entry Skilled Worker
        stream of the Newfoundland and Labrador Provincial Nominee Program
        (NLNP) is open to skilled workers of NOC Skill Level 0, A, or B
        occupations who are in the federal Express Entry pool and who wish to
        settle in Newfoundland and Labrador, provided they meet certain
        eligibility requirements, and hold a guaranteed, full-time job offer.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Points Assessment Grid</bold>
        <br />
        <br />
        Candidates must score at least 67 points on the Newfoundland and
        Labrador Express Entry Skilled Worker Points Assessment Grid.
        <br />
        <br />
        <bold>Settlement Funds</bold>
        <br />
        <br />
        Candidates must meet the settlement funds requirement as determined by
        Immigration, Refugees and Citizenship Canada (IRCC). This can be
        demonstrated through their own finances, or through maintaining a valid
        offer of employment.
        <br />
        <br />
        <bold>Intention to Reside</bold>
        <br />
        <br />
        Candidates must demonstrate an intention to reside in Newfoundland and
        Labrador.
        <br />
        <br />
        <bold>Points Assessment Grid</bold>
        <br />
        <br />
        In addition to meeting the above requirements, applicants must also
        score at least 67 out of a possible 100 on the Points Assessment Grid
        for the NLNP Express Entry Skilled Worker stream. Applicants will be
        graded on their connection to the labour market, adaptability,
        education, work experience, age, and language abilities.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <TableFactor />
        <br />
        <bold>Application Procedure </bold>
        The Newfoundland and Labrador Express Entry Skilled Worker stream
        accepts applications at any time. Skilled workers hoping to immigrate to
        Newfoundland and Labrador must first submit a profile to the federal
        Express Entry pool. Once a candidate has been accepted into the Federal
        Express Entry pool and has a job offer from a Newfoundland and Labrador
        employer, they may submit their application. Successful applicants will
        receive a nomination from Newfoundland and Labrador.
        <br />
        <br />
        After accepting the provincial nomination, the applicant’s Comprehensive
        Ranking System (CRS) score will increase by 600 points, virtually
        guaranteeing they will receive an Invitation to Apply (ITA) for
        permanent residence in the next Express Entry draw. After receiving an
        ITA, the applicant must prepare and submit an official application for
        Canadian permanent residence within the designated timeframe.
        Applications for permanent residence submitted through Express Entry are
        generally processed within six months.
      </h2>
    </div>
  );
}

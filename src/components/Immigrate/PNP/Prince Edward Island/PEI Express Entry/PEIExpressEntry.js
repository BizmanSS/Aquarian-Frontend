import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { requirement: "Express Entry Profile", value: "Yes" },
    { requirement: "Connection to Province", value: "No" },
    { requirement: "Job Offer", value: "No" },
    {
      requirement: "Language Proficiency",
      value: "See Express Entry requirements",
    },
    {
      requirement: "Level of Education",
      value: "See Express Entry requirements",
    },
    { requirement: "Work Experience", value: "See Express Entry requirements" },
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
    { factor: "Age", withJobOffer: 20, withoutJobOffer: 20 },
    { factor: "Language", withJobOffer: 20, withoutJobOffer: 20 },
    { factor: "Education", withJobOffer: 15, withoutJobOffer: 15 },
    { factor: "Work experience", withJobOffer: 15, withoutJobOffer: 20 },
    { factor: "Employment", withJobOffer: 15, withoutJobOffer: 10 },
    { factor: "Adaptability", withJobOffer: 15, withoutJobOffer: 15 },
    {
      factor: <bold>Maximum Points</bold>,
      withJobOffer: <bold>100</bold>,
      withoutJobOffer: <bold>100</bold>,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Factor</th>
          <th>With Job Offer</th>
          <th>Without a Job Offer</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.factor}</td>
            <td>{item.withJobOffer}</td>
            <td>{item.withoutJobOffer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function PEIExpressEntry() {
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
          {" > "}PEI Express Entry
        </p>
        <div className="header-content">
          <h1 className="heading-about">PEI Express Entry</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Unlike many other Express Entry-aligned Provincial Nominee Program (PNP)
        streams, the Express Entry stream of Prince Edward Island Provincial
        Nomination Program (PEI PNP) does not require candidates to have a job
        offer from a PEI employer at the time of submitting their Expression of
        Interest.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Application Procedure</li>
          <li>PEI Express Entry Ranking System</li>
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
        Candidates receive provincial nomination based on whether their skills
        and work experience meet PEI’s labour needs, and this nomination can
        significantly increase their chances of receiving an invitation to apply
        for permanent residence via the Express Entry steam.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table /> <br />
        <sp>Express Entry Requirement</sp>
        <br />
        <br />
        To be eligible for the PEI PNP Express Entry stream, applicants must be
        registered in the federal Express Entry pool. To submit a profile to the
        pool, applicants must be eligible for at least one of three federal
        Economic programs:
        <br />
        <br />
        <ul>
          <li>
            Federal Skilled Worker requires candidates to have, at minimum, a
            high school diploma, as well as at least one year of continuous
            full-time, skilled work experience. Work experience is considered
            skilled if obtained in a position at National Occupational
            Classification (NOC) Skill Level 0, A, or B. Candidates must also
            demonstrate language proficiency in English or French consistent
            with Canadian Language Benchmark (CLB) level 7.
          </li>
          <br />
          <li>
            Canadian Experience Class has no minimum education requirement. CEC
            candidates must have a minimum of one year of full-time Canadian
            skilled work experience. This work experience does not have to be
            continuous, but it must have been obtained within the three years
            prior to application. Work experience is considered skilled if
            obtained in a position at NOC Skill Level 0, A, or B. Candidates
            must also demonstrate language proficiency in English or French
            consistent with CLB level 7 for work experience obtained at NOC
            Skill Level 0 or A and CLB 5 for work experience obtained at NOC
            Skill Level B.
          </li>
          <br />
          <li>
            Federal Skilled Trades has no minimum education requirement. FST
            candidates must have at least 2 years of full-time work experience
            in a skilled trade occupation. Candidates must also have either an
            offer of employment to work in a skilled trade in Canada or a
            certificate of qualification in their skilled trade issued by a
            Canadian authority. Candidates must also demonstrate language
            proficiency in English or French at CLB Level 5 for speaking and
            listening and CLB 4 for reading and writing.
          </li>
        </ul>
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        Applicants are not required to have a job offer from a PEI employer.
        However, applicants who are currently living and working in PEI will be
        given top priority. Applicants are also assessed differently in the PEI
        Express Entry Ranking System if they have a valid job offer.
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        The PEI PNP Express Entry stream operates on an Expression of Interest
        (EOI) system similar to Express Entry. Candidates who meet the
        eligibility criteria must submit a profile to PEI’s pool of candidates.
        All of the candidates in the pool will then be ranked against each other
        based on the PEI Express Entry Ranking System. The highest-ranking
        candidates will be invited to submit a complete application to the
        stream in one of the category’s periodic draws. Note that while
        applicants must have an active Express Entry profile to be eligible, the
        PEI PNP Express Entry profile, pool, and ranking system are all separate
        from the Express Entry profile, pool, and ranking system. Successful
        candidates will have to accept the provincial nomination on their IRCC
        online account. After accepting the provincial nomination, the
        applicant’s Comprehensive Ranking System (CRS) score will increase by
        600 points, virtually guaranteeing they will receive an Invitation to
        Apply (ITA) for permanent residence in the next Express Entry draw.
        After receiving an ITA, the applicant must prepare and submit an
        official application for Canadian permanent residence within the
        designated time frame. Applications for permanent residence submitted
        through Express Entry are generally processed within six months.
        <br />
        <br />
        <sp>PEI Express Entry Ranking System</sp>
        <br />
        <br />
        <TableFactor />
      </h2>
    </div>
  );
}

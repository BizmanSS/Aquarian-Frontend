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
    {
      name: "Work Experience",
      amount: "Related to job offer",
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
const TableFactor = () => {
  const data = [
    { name: "Age", amount: "10" },
    { name: "Language", amount: "28" },
    { name: "Education", amount: "20" },
    {
      name: "Adaptability",
      amount: "12",
    },
    { name: "Work Experience", amount: "30" },
    {
      name: <bold>Minimum Pass Score</bold>,
      amount: <bold>60</bold>,
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
export default function NewBrunswickSkilledWorkersWithEmployerSupport() {
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
          <Link to="/immigrate/provincial-nominee-program/new-brunswick">
            New Brunswick
          </Link>
          {" > "}New Brunswick Skilled Workers with Employer Support
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            New Brunswick Skilled Workers with Employer Support
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        This stream is designed to target high-skilled foreign workers with a
        valid job offer from a New Brunswick employer. Candidates who are
        successfully nominated through the New Brunswick Skilled Worker
        Applicants with Employer Support stream will be automatically forwarded
        to IRCC to be evaluated for Canadian permanent residence. The province
        of New Brunswick regularly organises events overseas for foreign
        nationals who wish to immigrate to Canada. Those who are successful
        through these information sessions will be eligible to immigrate to
        Canada through the New Brunswick PNP or the Atlantic Immigration Pilot
        Program.
        <br />
        <br />
        <sp>Program Requirements</sp> <br /> <br />
        <Table />
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        To be eligible for the New Brunswick Skilled Worker Applicants with
        Employer Support stream, candidates must have a valid job offer from an
        eligible New Brunswick employer. The offer of employment must be for
        work at National Occupational Classification (NOC) Skill Level 0, A, or
        B. If the offer of employment is at NOC Skill Level C or D, it must be
        classified as NOC Skill Type 1, 3, 7, 8, or 9 to be considered valid.
        <br />
        <br />
        <bold>Age</bold>
        <br />
        <br />
        Candidates must be between 19 and 55 years old on the day their
        application is received by NB PNP.
        <br />
        <br />
        <bold>Points Assessment Grid</bold>
        <br />
        <br />
        Candidates must score a least 60 points (out of 100) on the New
        Brunswick Skilled Worker Applicant Points Assessment Grid.
        <br />
        <br />
        <bold>Employer Requirements</bold>
        <br />
        <br />
        In order for an applicant to apply to the New Brunswick Skilled Worker
        Applicants with Employer Support stream, they must have a valid job
        offer from an eligible New Brunswick employer. Under this stream, the
        employer must meet certain general requirements in order for their job
        offers to be considered valid.
        <br />
        <br />
        <bold>Job Offer Requirements</bold>
        <br />
        <br />
        The employer must offer a full-time, indeterminate position with a wage
        that meets industry standards.
        <br />
        <br />
        <bold>Business Requirements</bold>
        <br />
        <br />
        The business must have been in operation for at least one year at the
        time the application is received.
        <br />
        <br />
        <bold>Recruitment Requirements</bold>
        <br />
        <br />
        Employers must demonstrate that they have been unable to find a Canadian
        permanent resident or citizen to fill the position.
        <br />
        <br />
        <bold>Points-Assessment-Grid</bold>
        <br />
        <br />
        Candidates must score a minimum of 60 of 100 points on the following
        selection factors to be eligible to apply to the stream.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <TableFactor />
        <br />
        The New Brunswick Skilled Worker Applicants with Employer Support stream
        is open to new applications at any time. This stream charges a $250 CAD
        application fee per applicant. Applicants must submit a complete
        application for provincial nomination from the New Brunswick Provincial
        Nominee Program. If the application is successful, the applicant will be
        notified. The NBPNP will forward the application directly to IRCC to be
        evaluated for Canadian permanent residence. Paper-based applications for
        permanent residence as a provincial nominee are generally processed
        within 18 months.
      </h2>
    </div>
  );
}

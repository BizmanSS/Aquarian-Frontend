import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "Yes" },
    {
      name: "Connection to Province",
      amount: "Work Experience (some exceptions)",
    },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount: "CLB Level 6 for NOC 0 and A CLB Level 5 for NOC B",
    },
    {
      name: "Level of Education",
      amount: "Education or certification specific to job offer",
    },
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
export default function NorthwestTerritoriesSkilledWorkers() {
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
          <Link to="/immigrate/provincial-nominee-program/northwest-territories">
            Northwest Territories
          </Link>{" "}
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/northwest-territories/northwest-territories-employer-driven">
            Northwest Territories Employer Driven
          </Link>
          {" > "}Northwest Territories Skilled Workers
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Northwest Territories Skilled Workers
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        With a high demand for skilled workers to fill shortages in northern
        Canada’s vast labour market, the Northwest Territories Skilled Worker
        stream grants provincial nomination to eligible NOC Skill Level 0, A, or
        B workers who express an intention to permanently resettle in the
        Northwest Territories.
        <br />
        <br />
        Candidates who meet the requirements for the NTNP Skilled Workers stream
        and who also qualify for one of the programs managed by Express Entry
        may be eligible for the NTNP Express Entry stream for accelerated
        processing.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        Both the skilled worker and the Northwest Territories employer must meet
        specific criteria in order to be eligible to apply to this stream.
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        The Northwest Territories Critical Impact Worker stream is open to new
        applications at any time. The employer holds the responsibility of
        submitting the paper-based application for NTNP. The typical processing
        time for applications is 10 weeks once it has been received by the NTNP.
        If the application is approved, both the employer and the foreign
        national will be required to sign a Memorandum of Understanding that
        details the terms and conditions of their nomination as well as the
        responsibilities of both parties.
        <br />
        <br />
        After receiving a provincial nomination an applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
      </h2>
    </div>
  );
}

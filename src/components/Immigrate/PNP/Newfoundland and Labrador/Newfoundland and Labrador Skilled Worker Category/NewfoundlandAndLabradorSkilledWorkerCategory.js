import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    { name: "Connection to Province", amount: "No" },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount: "None for NOC 0, A or B CLB 4 for NOC C or D",
    },
    { name: "Level of Education", amount: "No minimum" },
    {
      name: "Work Experience",
      amount: "No minimum",
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
export default function NewfoundlandAndLabradorSkilledWorkerCategory() {
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
          {" > "}Newfoundland and Labrador Skilled Worker Category
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Newfoundland and Labrador Skilled Worker Category
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Skilled Worker stream of the Newfoundland and Labrador Provincial
        Nominee Program (NLNP) welcomes experienced foreign workers of all NOC
        Skill Levels with a guaranteed job offer from a Newfoundland and
        Labrador to apply for provincial nomination. The applicant must have a
        specialised skill set that meets the needs of the employer from which
        they receive a full-time job offer.
        <br />
        <br />
        Foreign nationals with NOC Skill Level 0, A, or B experience may also be
        eligible to apply under the Express Entry Skilled Worker stream of NLNP
        if they have been accepted into the federal Express Entry pool.
        <br />
        <br />
        <sp>Program Requirements</sp> <br />
        <br />
        <Table />
        <br />
        <bold> Application Procedure</bold>
        <br />
        <br />
        The Newfoundland and Labrador Skilled Worker stream accepts applications
        at any time. Eligible candidates must submit a complete application to
        the stream. The application fee is $250 CAD. Successful applicants will
        receive a provincial nomination from Newfoundland and Labrador. After
        receiving a provincial nomination an applicant has six months to submit
        a federal application for Canadian permanent residence. Applicants in
        this program must complete and submit a paper-based application for
        permanent residence and submit it by mail to the appropriate application
        centre. Paper-based PNP applications for permanent residence are
        generally processed within 18 months.
      </h2>
    </div>
  );
}

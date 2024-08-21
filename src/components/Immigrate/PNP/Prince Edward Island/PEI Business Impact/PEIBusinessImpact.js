import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { factor: "Age", maxPoints: 20 },
    { factor: "Language", maxPoints: 40 },
    { factor: "Education", maxPoints: 20 },
    {
      factor: "Business ownership or senior management experience",
      maxPoints: 50,
    },
    { factor: "Community endorsement", maxPoints: 35 },
    { factor: "Adaptability", maxPoints: 35 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Max Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.factor}</td>
            <td>{item.maxPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function PEIBusinessImpact() {
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
          {" > "}PEI Business Impact
        </p>
        <div className="header-content">
          <h1 className="heading-about">PEI Business Impact</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        PEI is seeking experienced business people and entrepreneurs with the
        skills needed to help propel its provincial economy forward while
        creating job opportunities for other Canadian citizens and permanent
        residents alike.
        <br />
        <br />
        <ul>
          <li>PEI Business Impact Ranking System</li>
          <li>PEI Business Impact Recent Draws</li>
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
        Individuals wishing to invest in and manage a Prince Edward Island
        business can take advantage of the Work Permit stream of business
        immigration through the Prince Edward Island Provincial Nominee Program
        (PEI PNP). The PEI Business Impact category currently includes one
        stream:
        <br />
        <br />
        <ul>
          <li>PEI Work Permit</li>
        </ul>
        <br />
        <sp>Important Updates</sp>
        <br />
        <br />
        As of September 2018, PEI closed two Business Impact streams. Both the
        PEI 100% Ownership Stream and the PEI Partial Ownership Streams have
        been closed. These programs are not expected to open in the near future.
        <br />
        <br />
        <sp>PEI Work Permit</sp>
        <br />
        <br />
        The PEI Work Permit stream provides eligible applicants with the
        opportunity to come to PEI on a temporary work permit to establish a
        business. Once the business has been in operation for at least one year,
        the applicant will receive a provincial nomination for permanent
        residency.
        <br />
        <br />
        <sp>PEI Business Impact Ranking System</sp>
        <br />
        <br />
        If a candidate meets all of the eligibility requirements outlined by PEI
        PNP, they will be able to create a profile in the Expression of Interest
        (EOI) system. An applicant’s profile will be awarded up to 200
        assessment points based on their age, language, education, business
        ownership or management experience, community endorsement, and
        adaptability.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <Table />
      </h2>
    </div>
  );
}

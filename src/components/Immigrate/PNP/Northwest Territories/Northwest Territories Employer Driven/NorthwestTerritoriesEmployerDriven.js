import React from "react";
import { Link } from "react-router-dom";
export default function NorthwestTerritoriesEmployerDriven() {
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
          {" > "}Northwest Territories Employer Driven
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Northwest Territories Employer Driven
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        With a wealth of jobs and limited local talent to fill open positions,
        the Northwest Territories is an ideal territory for foreign nationals
        who wish to immigrate to Canada.
        <br />
        <br />
        Eligible foreign workers with a job offer from a Northwest Territories
        employer are invited to apply for Canadian permanent residence through
        one of the Employer Driven streams of the Northwest Territories
        Nomination Program (NTNP). Both the foreign national and their
        prospective employer must meet specific eligibility requirements and
        partake in the application process. Northwest Territories Employer
        Driven stream includes the following streams:
        <br />
        <br />
        <ul>
          <li>Northwest Territories Critical Impact Workers</li>
          <li>Northwest Territories Skilled Workers</li>
          <li>Northwest Territories Express Entry</li>
        </ul>
        <br />
        <bold>Northwest Territories Critical Impact Workers</bold>
        <br />
        <br />
        <bold>Northwest Territories Skilled Workers</bold>
        <br />
        <br />
        Applicants who possess the required experience and certification or
        accreditation for a high-skilled occupation may be eligible for the NTNP
        Skilled Worker stream, provided they have received a full-time,
        permanent job offer from a qualifying Northwest Territories employer.
        <br />
        <br />
        <bold>Northwest Territories Express Entry</bold>
        <br />
        <br />
        Candidates with a job offer from an eligible Northwest Territories
        employer who also meet the eligibility requirements for one of the
        Federal economic programs managed by Express Entry may take advantage of
        the accelerated Northwest Territories Express Entry stream.
      </h2>
    </div>
  );
}

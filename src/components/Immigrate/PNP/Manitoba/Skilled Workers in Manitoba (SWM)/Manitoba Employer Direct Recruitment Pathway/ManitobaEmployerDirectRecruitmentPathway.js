import React from "react";
import { Link } from "react-router-dom";
export default function ManitobaEmployerDirectRecruitmentPathway() {
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
          <Link to="/immigrate/provincial-nominee-program/manitoba">
            Manitoba
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/manitoba/skilled-workers-in-manitoba">
            Skilled Workers in Manitoba
          </Link>
          {" > "}Manitoba Employer Direct Recruitment Pathway
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Manitoba Employer Direct Recruitment Pathway
          </h1>
        </div>
      </div>
    </div>
  );
}

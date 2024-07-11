import React from "react";
import { Link } from "react-router-dom";
export default function SaskatchewanInternationalSkilledWorkerTechTalentPathway() {
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
          <Link to="/immigrate/provincial-nominee-program/saskatchewan">
            Saskatchewan
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-international-skilled-worker">
            Saskatchewan International Skilled Worker
          </Link>
          {" > "}Saskatchewan International Skilled Worker Tech Talent Pathway
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Saskatchewan International Skilled Worker Tech Talent Pathway
          </h1>
        </div>
      </div>
    </div>
  );
}

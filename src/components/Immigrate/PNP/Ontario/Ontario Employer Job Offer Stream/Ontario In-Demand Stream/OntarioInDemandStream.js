import React from "react";
import { Link } from "react-router-dom";
export default function OntarioInDemandStream() {
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
          <Link to="/immigrate/provincial-nominee-program/ontario">
            Ontario
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/ontario/ontario-employer-job-offer-stream">
            Ontario Employer Job Offer Stream
          </Link>
          {" > "}Ontario in Demand Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">Ontario in Demand Stream</h1>
        </div>
      </div>
    </div>
  );
}

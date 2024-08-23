import React from "react";
import { Link } from "react-router-dom";
export default function ManitobaEntrepreneurPathway() {
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
          <Link to="/immigrate/provincial-nominee-program/manitoba/manitoba-business-investor-stream">
            Manitoba Business Investor Stream (BIS)
          </Link>
          {" > "}Manitoba Entrepreneur Pathway
        </p>
        <div className="header-content">
          <h1 className="heading-about">Manitoba Entrepreneur Pathway</h1>
        </div>
      </div>
    </div>
  );
}

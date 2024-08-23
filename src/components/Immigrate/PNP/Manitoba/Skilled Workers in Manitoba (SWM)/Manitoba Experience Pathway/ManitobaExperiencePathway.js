import React from "react";
import { Link } from "react-router-dom";

export default function ManitobaExperiencePathway() {
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
          {" > "}Manitoba Experience Pathway
        </p>
        <div className="header-content">
          <h1 className="heading-about">Manitoba Experience Pathway</h1>
        </div>
      </div>
    </div>
  );
}

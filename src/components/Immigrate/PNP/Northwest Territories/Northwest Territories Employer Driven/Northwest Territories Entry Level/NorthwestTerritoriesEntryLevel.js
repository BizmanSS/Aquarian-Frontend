import React from "react";
import { Link } from "react-router-dom";
export default function NorthwestTerritoriesEntryLevel() {
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
          {" > "}Northwest Territories Entry Level/ Semi-Skilled Occupation
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Northwest Territories Entry Level/ Semi-Skilled Occupation
          </h1>
        </div>
      </div>
    </div>
  );
}

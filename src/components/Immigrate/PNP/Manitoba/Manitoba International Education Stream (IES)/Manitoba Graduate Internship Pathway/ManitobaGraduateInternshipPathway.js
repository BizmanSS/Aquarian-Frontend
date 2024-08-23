import React from "react";
import { Link } from "react-router-dom";
export default function ManitobaGraduateInternshipPathway() {
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
          <Link to="/immigrate/provincial-nominee-program/manitoba/manitoba-international-education-stream">
            Manitoba International Education Stream (IES)
          </Link>
          {" > "}Manitoba Graduate Internship Pathway
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Manitoba Graduate Internship Pathway
          </h1>
        </div>
      </div>
    </div>
  );
}

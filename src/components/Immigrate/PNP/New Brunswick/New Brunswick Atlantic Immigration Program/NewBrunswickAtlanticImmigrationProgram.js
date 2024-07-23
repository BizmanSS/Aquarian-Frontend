import React from "react";
import { Link } from "react-router-dom";
export default function NewBrunswickAtlanticImmigrationProgram() {
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
          <Link to="/immigrate/provincial-nominee-program/new-brunswick">
            New Brunswick
          </Link>
          {" > "}New Brunswick Atlantic Immigration Program
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            New Brunswick Atlantic Immigration Program
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        New Brunswick participates in the Atlantic Immigration Pilot Program
        (AIPP). The AIPP is an economic growth initiative developed in
        partnership between the federal government and Canada’s Atlantic
        provinces. AIPP facilitates the immigration process for newcomers who
        have obtained a job offer from a designated employer in the Atlantic
        region. Foreign nationals interested in the Atlantic Immigration Program
        may be living in other countries or Canada on temporary status at the
        time of application. You must have a job offer from an approved employer
        that aligns with the program’s credentials.
      </h2>
    </div>
  );
}

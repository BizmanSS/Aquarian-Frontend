import React from "react";
import { Link } from "react-router-dom";
export default function BritishColumbiaSkilledWorker() {
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
          <Link to="/immigrate/provincial-nominee-program/british-columbia">
            British Columbia
          </Link>
          {" > "}British Columbia Skilled Worker
        </p>
        <div className="header-content">
          <h1 className="heading-about">British Columbia Skilled Worker</h1>
        </div>
      </div>
    </div>
  );
}

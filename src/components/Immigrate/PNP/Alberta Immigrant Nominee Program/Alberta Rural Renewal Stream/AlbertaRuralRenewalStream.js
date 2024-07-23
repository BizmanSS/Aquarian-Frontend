import React from "react";
import { Link } from "react-router-dom";
export default function AlbertaRuralRenewalStream() {
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
          <Link to="/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program">
            Alberta Immigrant Nominee Program
          </Link>
          {" > "}Alberta Rural Renewal Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">Alberta Rural Renewal Stream</h1>
        </div>
      </div>
    </div>
  );
}

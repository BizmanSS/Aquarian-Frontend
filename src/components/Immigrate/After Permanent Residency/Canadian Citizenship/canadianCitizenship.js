import React from "react";
import { Link } from "react-router-dom";
export default function CanadianCitizenship() {
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
          <Link to="/immigrate/after-permanent-residency">
            After Permanent Residency
          </Link>
          {" > "}Canadian Citizenship
        </p>
        <div className="header-content">
          <h1 className="heading-about">Canadian Citizenship</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        <span></span>
      </h2>
    </div>
  );
}

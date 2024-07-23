import React from "react";
import { Link } from "react-router-dom";
export default function ExpandBusinessToCanada() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Employers
          {" > "}
          <Link to="/employers/employers-outside-canada">
            Employers Outside Canada
          </Link>
          {" > "}Expand Business to Canada
        </p>
        <div className="header-content">
          <h1 className="heading-about">Expand Business to Canada</h1>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function EntrepreneurLMIAOwnerOperated() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Business
          {" > "}
          <Link to="/business/work-permit-to-pr-pathways">
            Work Permit to PR Pathways
          </Link>
          {" > "}Entrepreneur LMIA-Owner Operated
        </p>
        <div className="header-content">
          <h1 className="heading-about">Entrepreneur LMIA-Owner Operated</h1>
        </div>
      </div>
    </div>
  );
}

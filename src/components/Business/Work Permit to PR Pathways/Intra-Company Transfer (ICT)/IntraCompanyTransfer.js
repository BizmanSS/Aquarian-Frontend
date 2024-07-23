import React from "react";
import { Link } from "react-router-dom";
export default function IntraCompanyTransferBusiness() {
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
          {" > "}Intra-Company Transfer (ICT)
        </p>
        <div className="header-content">
          <h1 className="heading-about">Intra-Company Transfer (ICT)</h1>
        </div>
      </div>
    </div>
  );
}

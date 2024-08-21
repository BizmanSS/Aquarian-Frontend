import React from "react";
import { Link } from "react-router-dom";
export default function YukonBusiness() {
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
          <Link to="/business/pnp-entrepreneur-streams">
            PNP Entrepreneur Streams
          </Link>
          {" > "}Yukon
        </p>
        <div className="header-content">
          <h1 className="heading-about">Yukon</h1>
        </div>
      </div>
    </div>
  );
}

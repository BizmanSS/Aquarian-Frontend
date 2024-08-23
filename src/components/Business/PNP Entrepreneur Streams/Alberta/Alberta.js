import React from "react";
import { Link } from "react-router-dom";
export default function AlbertaBusiness() {
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
          {" > "} Alberta
        </p>
        <div className="header-content">
          <h1 className="heading-about">Alberta</h1>
        </div>
      </div>
    </div>
  );
}

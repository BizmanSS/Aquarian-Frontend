import React from "react";
import { Link } from "react-router-dom";
export default function NovaScotiaBusiness() {
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
          {" > "}Nova Scotia
        </p>
        <div className="header-content">
          <h1 className="heading-about">Nova Scotia</h1>
        </div>
      </div>
    </div>
  );
}

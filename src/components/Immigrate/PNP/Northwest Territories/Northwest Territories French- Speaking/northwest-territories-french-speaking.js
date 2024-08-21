import React from "react";
import { Link } from "react-router-dom";
export default function NorthwestTerritoriesFrenchSpeaking() {
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
          <Link to="/immigrate/provincial-nominee-program/northwest-territories">
            Northwest Territories
          </Link>{" "}
          {" > "}Northwest Territories French- Speaking
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Northwest Territories French- Speaking
          </h1>
        </div>
      </div>
    </div>
  );
}

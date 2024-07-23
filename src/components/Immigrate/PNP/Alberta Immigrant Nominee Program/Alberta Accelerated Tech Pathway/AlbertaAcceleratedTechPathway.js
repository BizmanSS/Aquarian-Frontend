import React from "react";
import { Link } from "react-router-dom";
export default function AlbertaAcceleratedTechPathway() {
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
          {" > "}Alberta Accelerated Tech Pathway
        </p>
        <div className="header-content">
          <h1 className="heading-about">Alberta Accelerated Tech Pathway</h1>
        </div>
      </div>
    </div>
  );
}

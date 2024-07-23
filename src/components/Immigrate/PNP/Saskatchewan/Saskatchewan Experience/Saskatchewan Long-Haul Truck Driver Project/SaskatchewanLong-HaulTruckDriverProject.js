import React from "react";
import { Link } from "react-router-dom";
export default function SaskatchewanLongHaulTruckDriverProject() {
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
          <Link to="/immigrate/provincial-nominee-program/saskatchewan">
            Saskatchewan
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/saskatchewan/saskatchewan-experience">
            Saskatchewan Experience
          </Link>
          {" > "}Saskatchewan Long-Haul Truck Driver Project
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Saskatchewan Long-Haul Truck Driver Project
          </h1>
        </div>
      </div>
    </div>
  );
}

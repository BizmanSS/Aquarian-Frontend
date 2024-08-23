import React from "react";
import { Link } from "react-router-dom";
export default function ExpandYourBusinessToCanada() {
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
          <Link to="/business/invest">Business/ Invest</Link>
          {" > "}Expand your Business to Canada
        </p>
        <div className="header-content">
          <h1 className="heading-about">Expand your Business to Canada</h1>
        </div>
      </div>
    </div>
  );
}

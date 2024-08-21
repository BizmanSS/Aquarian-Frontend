import React from "react";
import { Link } from "react-router-dom";
export default function BuyAnExistingBusinessInCanada() {
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
          {" > "}Buy an existing Business in Canada
        </p>
        <div className="header-content">
          <h1 className="heading-about">Buy an existing Business in Canada</h1>
        </div>
      </div>
    </div>
  );
}

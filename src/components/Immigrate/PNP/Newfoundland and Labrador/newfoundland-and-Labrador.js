import React from "react";
import { Link } from "react-router-dom";
export default function NewFoundlandAndLabrador() {
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
          New Foundland and Labrador
        </p>
        <div className="header-content">
          <h1 className="heading-about">New Foundland and Labrador</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Newfoundland and Labrador Provincial Nominee Program (NLPNP)
        provides prospective immigrants with in-demand skills and experience the
        opportunity to become a part of this eastern province’s growing
        workforce through its Express Entry Skilled Worker, Skilled Worker, and
        International Graduate streams of immigration. The NLPNP gives
        opportunities to people from different categories, such as skilled
        workers, international graduates, entrepreneurs and more.
        <br />
        <br />
        <bold>
          Eligibility Requirements for Newfoundland and Labrador Provincial
          Nominee Program (NLPNP)
        </bold>
        <br />
        <br />
        Each sub-category has its own specific requirements, eligibility
        requirements and application process. If you wish to immigrate to
        Newfoundland and Labrador, then you have five options to choose from:
        <br />
        <br />
        <ul>
          <li>
            <bold>Newfoundland and Labrador Express Entry Skilled Worker</bold>
          </li>
          <li>
            <bold>Skilled Worker Category</bold>
          </li>
          <li>
            <bold>International Graduate Category</bold>
          </li>
          <li>
            <bold>International Entrepreneur Category</bold>
          </li>
          <li>
            <bold>International Graduate Entrepreneur Category</bold>
          </li>
        </ul>
      </h2>
    </div>
  );
}

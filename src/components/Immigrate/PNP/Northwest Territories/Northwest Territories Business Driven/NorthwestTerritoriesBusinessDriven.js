import React from "react";
import { Link } from "react-router-dom";
export default function NorthwestTerritoriesBusinessDriven() {
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
          {" > "}Northwest Territories Business Driven
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Northwest Territories Business Driven
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Business-savvy individuals with significant investment capital who are
        willing to permanently settle and establish a business in the Northwest
        Territories may apply under the business driven streams of the Northwest
        Territories Nomination Program (NTNP).
        <br />
        <br />
        Applicants will be required to present a viable business plan with the
        potential to create lucrative employment opportunities for other
        Canadian citizens and permanent residents. Top priority will be given to
        entrepreneurs who can establish a business that will provide significant
        benefits to this northern territory’s economy. The Northwest Territories
        Business Driven stream includes the following streams:
        <br />
        <br />
        <ul>
          <li>Northwest Territories Entrepreneur</li>
          <li>Northwest Territories Self-Employed (terminated)</li>
        </ul>
        <br />
        <bold>Northwest Territories Entrepreneur</bold>
        Entrepreneurs who wish to establish, purchase, or invest in a Northwest
        Territories business in any economic sector may be eligible for
        provincial nomination through the NTNP Entrepreneur stream. Applicants
        will be required to submit a business plan for the proposed business,
        and priority will be given to businesses that introduce a new product or
        those that provide significant benefits to the Northwest Territories.
      </h2>
    </div>
  );
}

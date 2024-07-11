import React from "react";
import { Link } from "react-router-dom";
export default function NorthwestTerritories() {
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
          Northwest Territories
        </p>
        <div className="header-content">
          <h1 className="heading-about">Northwest Territories</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        With more than one million square kilometres of land and a population of
        just over 40,000 people, making it the most populous northern territory
        in Canada, the Northwest Territories boast a wealth of immigration
        opportunities for foreign workers and entrepreneurs.
        <br />
        <br />
        The Northwest Territories Nominee Program (NTNP), a Provincial Nominee
        Program (PNP), is a collection of immigration pathways that provide an
        opportunity for foreign nationals to become Canadian permanent
        residents.
        <br />
        <br />
        The NTNP targets workers in skilled, semi-skilled, and low-skilled
        occupations through employer-driven immigration streams. Its
        business-driven counterpart, on the other hand, seeks entrepreneurs and
        business owners from all sectors to create and establish new businesses
        in this remote northern region.
        <br />
        <br />
        The province operates several immigration streams divided among three
        categories:
        <br />
        <br />
        <ul>
          <li>Northwest Territories Express Entry</li>
          <li>Northwest Territories Employer Driven</li>
          <li>Northwest Territories Business Driven</li>
        </ul>
        <br />
        Northwest Territories Employer Driven
        <br />
        <br />
        The Northwest Territories Employer Driven streams provide opportunities
        for foreign nationals with experience in occupations classified as
        National Occupational Classification (NOC) Skill Level 0, A, B, C, or D
        and a full-time, permanent job offer from a qualified employer.
        <br />
        <br />
        <ul>
          <li>Critical Impact Worker</li>
          <li>Skilled Worker</li>
        </ul>
        <br />
        Northwest Territories Business Driven
        <br />
        <br />
        The Northwest Territories Business Driven streams provide opportunities
        for business owners and entrepreneurs wishing to create a new business
        in the Northwest Territories. While the program accepts applications
        from all economic sectors, businesses that offer a significant benefit
        to the Northwest Territories economy, or who introduce a new product
        altogether, will be given priority when applying for provincial
        nomination.
        <br />
        <br />
        <ul>
          <li>Entrepreneur</li>
          <li>Self-Employed (Terminated)</li>
        </ul>
      </h2>
    </div>
  );
}

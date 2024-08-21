import React from "react";
import { Link } from "react-router-dom";
export default function NewBrunswick() {
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
          New Brunswick
        </p>
        <div className="header-content">
          <h1 className="heading-about">New Brunswick</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The province of New Brunswick is located on Canada’s east coast on the
        Atlantic Ocean. The province plays host to a number of unique Provincial
        Nomination Programs (PNPs) designed to attract and retain newcomers who
        will be able to fill gaps in the workforce and contribute meaningfully
        to local economies and communities.
        <br />
        <br />
        The province operates several immigration streams:
        <br />
        <br />
        <ul>
          <li>New Brunswick Express Entry Labour Market Stream</li>
          <li>New Brunswick Strategic Initiative</li>
          <li>New Brunswick Entrepreneurial Stream</li>
          <li>New Brunswick Post-Graduate Entrepreneurial Stream</li>
          <li>New Brunswick Skilled Workers with Employer Support</li>
          <li>New Brunswick Business Immigration Stream</li>
          <li>Atlantic Immigration Pilot Program</li>
        </ul>
        <br />
        The province of New Brunswick regularly organises events overseas for
        foreign nationals who wish to immigrate to Canada. Those who are
        successful through these information sessions will be eligible to
        immigrate to Canada through the New Brunswick PNP or the Atlantic
        Immigration Pilot Program.
        <br />
        <br />
      </h2>
    </div>
  );
}

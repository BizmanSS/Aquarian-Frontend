import React from "react";
import { Link } from "react-router-dom";
export default function NovaScotia() {
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
          Nova Scotia
        </p>
        <div className="header-content">
          <h1 className="heading-about">Nova Scotia</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The province of Nova Scotia is located on Canada’s east coast on the
        Atlantic Ocean. The province plays host to a number of unique Provincial
        Nomination Programs (PNPs) designed to attract and retain newcomers who
        will be able to fill gaps in the workforce and contribute meaningfully
        to local economies and communities.
        <br />
        <br />
        <br />
        <a href="/assessment" className="button">
          {" "}
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        The province operates several immigration streams:
        <br />
        <br />
        Through the NSNP, prospective immigrants who have the skills and
        experience targeted by Nova Scotia may be nominated to immigrate. Review
        the different NSNP streams to determine if you qualify:
        <br />
        <br />
        <ul>
          <li>Nova Scotia Labour Market Priorities</li>
          <li>Labour Market Priorities for Physicians</li>
          <li>Physician</li>
          <li>Entrepreneur</li>
          <li>International Graduate Entrepreneur</li>
          <li>International Graduates In Demand</li>
          <li>Skilled Worker</li>
          <li>Occupations in Demand</li>
          <li>Nova Scotia Experience: Express Entry</li>
        </ul>
      </h2>
    </div>
  );
}

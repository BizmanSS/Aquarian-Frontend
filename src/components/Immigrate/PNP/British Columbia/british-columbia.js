import React from "react";
import { Link } from "react-router-dom";
export default function BritishColumbia() {
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
          British Columbia
        </p>
        <div className="header-content">
          <h1 className="heading-about">British Columbia</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The British Columbia Provincial Nominee Program (BC PNP), a Provincial
        Nominee Program (PNP), is a collection of immigration pathways enabling
        foreign nationals to become Canadian permanent residents in BC. The PNP
        is strategically designed to attract immigrants in areas which will
        benefit the province: skilled workers, workers in sectors with labour
        shortages, entrepreneurs, and investors. The province operates several
        immigration streams divided among two categories:
        <br />
        <br />
        <ul>
          <li>British Columbia Skills Immigration</li>
          <li>British Columbia Entrepreneur Immigration</li>
        </ul>
        <br />
        <bold>BC Skills Immigration</bold>
        <br />
        <br />
        British Columbia Skills Immigration targets foreign nationals who have
        the skills to become meaningful members of BC’s workforce. The pathways
        within BC Skills Immigration emphasise immigrants who have employment
        prospects in BC and who demonstrate the experience needed to secure and
        maintain employment as BC residents.
        <br />
        <br />
        <ul>
          <li>British Columbia Skilled Worker</li>
          <li>British Columbia Healthcare Professional</li>
          <li>British Columbia International Graduate</li>
          <li>British Columbia International Post-Graduate</li>
          <li>British Columbia Entry Level and Semi-Skilled Worker (ELSS)</li>
        </ul>
        <br />
        <sp>British Columbia Express Entry</sp>
        <br />
        <br />
        Candidates are not required to be eligible for Express Entry to apply to
        the BC Skills Immigration streams. However, most of the programs
        contained within BC Skills Immigration offer an accelerated pathway to
        permanent residence for eligible candidates who have an active Express
        Entry profile. Refer to the application procedure of each stream to
        determine whether it offers an Express Entry pathway.
        <br />
        <br />
        <bold>BC Entrepreneur Immigration</bold>
        <br />
        <br />
        British Columbia Entrepreneur Immigration targets foreign nationals and
        foreign companies who have demonstrated track records of success in
        business ownership, management, and investment. Individual entrepreneurs
        with significant personal net worth and international corporations with
        high annual revenues may immigrate to BC through the establishment of
        new enterprises in the province.
        <br />
        <br />
        <ul>
          <li>British Columbia Entrepreneur</li>
          <li>British Columbia Entrepreneur Regional Pilot</li>
          <li>British Columbia Strategic Projects</li>
        </ul>
        <br />
        <sp>BC PNP Tech</sp>
        <br />
        <br />
        BC PNP Tech targets skilled foreign nationals working in one of BC’s
        in-demand tech occupations. The Tech program is aligned with BC Skills
        Immigration, so interested applicants should review the various streams
        contained within the Skills Immigration category. BC PNP Tech enables
        eligible foreign nationals to receive faster processing and additional
        resources through applications.
      </h2>
    </div>
  );
}

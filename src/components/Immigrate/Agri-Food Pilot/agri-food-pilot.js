import React from "react";
import "../../../styles/pages.css";
export default function AgriFoodPilot() {
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
          {" > "}Agri-Food Pilot
        </p>
        <div className="header-content">
          <h1 className="heading-about">Agri-Food Pilot</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Agri-Food Pilot was launched in 2020 and is set to expire in May
        2025. The Agri-Food Immigration Pilot aims to help fill labour shortages
        in agricultural industries.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>{" "}
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        The Agri-Food pilot offers a pathway to permanent residence for
        agricultural workers in Canada. In recent years, Canadian agriculture
        and agri-food industries have struggled to fill labour shortages and
        workers have had to rely on short-term, seasonal work permits in order
        to find employment. The pilot aims to attract and retain workers by
        offering a pathway to permanent residence in Canada, allowing workers
        and their families to work and live in Canada for as long as they like.
        <br />
        <br />
        Originally a maximum of <bold>2,750 principal applicants</bold> and
        their families would be accepted per year. However, this cap was removed
        in 2023 when the program was extended to 2025.
        <br />
        <br />
        Agricultural employers participating in the pilot will be eligible for a
        2-year Labour Market Impact Assessment (LMIA).
        <br />
        <br />
        <sp>Agri-Food Pilot Program Requirements</sp>
        <br />
        <br />
        To be eligible to participate in the pilot, candidates must meet the
        following criteria:
        <br />
        <br />
        <ul>
          <li>
            <bold>Work experience:</bold> 12 months of full-time, non-seasonal
            Canadian work experience in the Temporary Foreign Worker Program in
            an eligible occupation in processing meat products, raising
            livestock, or growing mushrooms or greenhouse crops
          </li>
          <br />
          <li>
            <bold>Language:</bold> A Canadian Language Benchmark (CLB) level 4
            in English or French
          </li>
          <br />
          <li>
            <bold>Education:</bold> Canadian equivalency of high-school level or
            greater
          </li>
          <br />
          <li>
            <bold>Job offer:</bold> an indeterminate job offer for full-time,
            non-seasonal work in Canada, outside of Quebec, at or above the
            prevailing wage
          </li>
        </ul>
        <br />
      </h2>
    </div>
  );
}

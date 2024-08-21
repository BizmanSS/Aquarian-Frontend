import React from "react";
import { Link } from "react-router-dom";
export default function NovaScotiaCriticalConstructionWorkerPilot() {
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
          <Link to="/immigrate/provincial-nominee-program/nova-scotia">
            Nova Scotia
          </Link>
          {" > "}Nova Scotia Critical Construction Worker Pilot
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Nova Scotia Critical Construction Worker Pilot
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Critical Construction Worker Pilot – Job Offer Pathway is only for
        people who have a permanent, full-time job offer from a Nova Scotia
        employer in the construction sector. Your job offer must be in the list
        of approved NOCs below.
        <br />
        <br />
        <bold>ELIGIBILITY</bold>
        <br />
        <br />
        To apply you must:
        <br />
        <br />
        <ul>
          <li>
            have a full-time permanent job offer from a Nova Scotia employer in
            the construction sector (NAICS 23) in one of these NOCs: <br />{" "}
            <br />
            <ul>
              <li>70010 – Construction managers</li>
              <li>70011 – Home building and renovation managers</li>
              <li>
                72011 – Contractors and supervisors, electrical trades and
                telecommunications occupations
              </li>
              <li>
                72014 – Contractors and supervisors, other construction trades,
                installers, repairers and servicers
              </li>
              <li>72020 – Contractors and supervisors, mechanic trades</li>
              <li>72106 – Welders and related machine operators</li>
              <li>72200 – Electricians (except industrial and power system)</li>
              <li>72201 – Industrial electricians</li>
              <li>72310 – Carpenters</li>
              <li>72320 – Bricklayers</li>
              <li>72401 – Heavy-duty equipment mechanics</li>
              <li>
                72402 – Heating, refrigeration and air conditioning mechanics
              </li>
              <li>72500 – Crane operators</li>
              <li>73100 – Concrete finishers</li>
              <li>
                73102 – Plasterers, drywall installers and finishers and lathers
              </li>
              <li>73110 – Roofers and shinglers</li>
              <li>
                73200 – Residential and commercial installers and servicers
              </li>
              <li>73400 – Heavy equipment operators</li>
              <li>75101 – Material handlers</li>
              <li>75110 – Construction trades helpers and labourers</li>
              <li>75119 – Other trades helpers and labourers</li>
            </ul>
          </li>
          <br />

          <li>have 1 year of work experience related to the job;</li>
          <br />

          <li>
            have a high school diploma OR proof you have completed a
            construction specific industry training program;
          </li>
          <br />

          <li>be 21 to 55 years old;</li>
          <br />

          <li>
            prove language ability equal to Canadian Language Benchmark (CLB)
            Level 5 (NOC TEER 0, 1, 2, 3) or CLB Level 4 (NOC TIER 4 and 5) even
            if your first language is English or French;
          </li>
          <br />

          <li>
            show enough financial resources to successfully settle in Nova
            Scotia.
          </li>
        </ul>
      </h2>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function PRTravel() {
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
          <Link to="/immigrate/after-permanent-residency">
            After Permanent Residency
          </Link>
          {" > "}Permanent Resident Travel Document
        </p>
        <div className="header-content">
          <h1 className="heading-about">Permanent Resident Travel Document</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Any person wishing to enter Canada’s borders must possess a valid travel
        document. Canadian permanent residents are able to use their permanent
        resident card (PR card) in order to enter the country. However, if a
        permanent resident does not have a valid PR card and needs to enter
        Canada, they may be eligible to apply for a permanent resident travel
        document (PRTD).
        <br />
        <br />
        Generally, PRTDs are valid for a single entry to Canada, allowing a
        permanent resident to enter the country before obtaining a new PR card.
        A permanent resident may only apply for a PR card from inside of Canada,
        so the PRTD is often necessary to facilitate entry to Canada. A person
        may apply for a permanent resident travel document if they meet the
        following criteria:
        <br /> <br />
        <ul>
          <li>They are a permanent resident of Canada;</li>
          <li>They do not have a valid PR card showing PR status;</li>
          <li>They are outside Canada, and;</li>
          <li>They will return to Canada by airplane, boat, train, or bus.</li>
        </ul>
        <br />
        If a person meets the criteria for a PRTD, they can submit an
        application. Please note that upon submission of the application, a visa
        officer will review it to ensure it is complete and that the applicant
        has met their residency obligations. If the applicant has failed to meet
        their residency obligations, then their status as a permanent resident
        may fall into jeopardy. Please note that immigrants from countries
        requiring a visa to enter Canada who have received their confirmation of
        permanent residence (COPR) should be issued a travel visa with their
        COPR. This travel visa allows them to travel to a Canadian Port of Entry
        (POE) to enter Canada where they can begin the process of obtaining
        their PR card. It is not necessary for a newly confirmed permanent
        resident to obtain a PRTD, as the above-mentioned travel visa will be
        issued to those immigrants who require it.
      </h2>
    </div>
  );
}

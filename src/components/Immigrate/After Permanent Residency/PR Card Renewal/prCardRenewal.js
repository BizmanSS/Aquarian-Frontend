import React from "react";
import { Link } from "react-router-dom";
export default function PRCardRenewal() {
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
          {" > "}Permanent Resident Card Renewal
        </p>
        <div className="header-content">
          <h1 className="heading-about">Permanent Resident Card Renewal</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        It is encouraged for permanent residents of Canada to carry a valid PR
        card at all times. Not only does the PR card allow a permanent resident
        to show proof of status, but it also allows a person to freely travel in
        and out of the country. If a PR card is within 9 months of expiration,
        or it has already expired, a permanent resident can submit an
        application for a new PR card.
        <br />
        <br />
        In order to renew a permanent resident card, an applicant must submit a
        complete application in hard copy to one of Immigration, Refugees and
        Citizenship Canada’s (IRCC) Case Processing Centres for PR cards. Upon
        submission, provided that an application is complete and that the
        permanent resident meets all requirements, a new PR card will be issued.
        <br />
        <br />
        It should be noted that permanent resident status does not expire when a
        person’s PR card expires. A person can only lose their PR status if they
        go through an official process. You can lose your PR status in the
        following situations:
        <br />
        <br />
        <ul>
          <li>
            An officer determines you are no longer a permanent resident after
            an inquiry (including PR card renewal) or permanent resident travel
            document (PRTD) appeal;
          </li>
          <li>You voluntarily renounce your permanent resident status;</li>
          <li>
            A removal order is made against you and comes into effect, or;
          </li>
          <li>You become a Canadian citizen.</li>
        </ul>
        <br />
        <br />
        Even if a person fails to meet the permanent resident residency
        obligation, their PR status remains in effect until an official decision
        is made on their status.
      </h2>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function PRCards() {
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
          {" > "}Permanent Resident Cards
        </p>
        <div className="header-content">
          <h1 className="heading-about">Permanent Resident Cards</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Once a person has been approved for Canadian permanent residence, they
        become eligible to receive a permanent resident card (PR card). The PR
        card is usually valid for five years, but in very rare cases may only be
        valid for one year. This card can be used as a valid travel document for
        entering Canada’s borders. It is advised that permanent residents obtain
        their PR card, since this card allows permanent residents to travel
        outside of Canada’s borders and demonstrate proof of status if
        necessary.
        <br />
        <br />
        <sp>Did you know?</sp>
        <br />
        <br />
        Your permanent resident status does not expire when your PR card
        expires. A person can only lose their PR status if they go through an
        official process. Even if you fail to meet the permanent resident
        residency obligation, your PR status remains in effect until an official
        decision is made on your status.
        <br />
        <br />
        Permanent residents without valid PR cards who are outside of Canada and
        wish to travel to Canada may apply for a permanent resident travel
        document (PRTD). The PRTD will facilitate travel to Canada, where the
        person may apply for a PR card renewal or replacement.
        <br />
        <br />
        <sp>Permanent Resident Card Application</sp>
        <br />
        <br />
        New permanent residents do not need to apply for a PR card. They will be
        automatically mailed a PR card when they immigrate to Canada and
        determine their Canadian mailing address. Only individuals who meet one
        of the following criteria must apply for a PR card:
        <br />
        <br />
        <ul>
          <li>
            You didn’t receive your PR card within 180 days of immigrating to
            Canada;
          </li>
          <li>
            Your PR card is expired or will expire in less than nine months;
          </li>
          <li>Your PR card has been lost, stolen, or destroyed, or;</li>
          <li>
            You legally changed your name and need to update your PR card.
          </li>
        </ul>
        <br />
        PR card applications must be submitted in hard copy to one of IRCC’s
        specified Case Processing Centres for PR cards.
        <br />
        <br />
        Did you know?
        <br />
        <br />
        The Canadian permanent resident card used to be called the Maple Leaf
        Card. This is because the card used to include a printed maple leaf,
        Canada’s national symbol.
        <br />
        <br />
        <sp>Urgent Processing</sp>
        <br />
        <br />
        In certain situations, it may be possible for the Canadian government to
        expedite the processing of a permanent resident card. In order to
        qualify for urgent permanent resident card processing, you must be
        travelling within the next three months due to:
        <br />
        <br />
        <ul>
          <li>A job opportunity;</li>
          <li>Your own serious illness;</li>
          <li>The death of a family member;</li>
          <li>Work related to your current job, or;</li>
          <li>The serious illness of a family member.</li>
        </ul>
        <br />
        It should be noted that even if a person is eligible for urgent
        processing, the Canadian government cannot guarantee they will process
        applications urgently or that PR cards will be received on time. It’s
        therefore advisable to always maintain a valid PR card in case of
        emergency.
        <br />
        <br />
        If your PR card is approaching the end of its validity period, and you
        have not yet applied for Canadian citizenship, you may be interested in
        applying for a permanent residence card renewal.
      </h2>
    </div>
  );
}

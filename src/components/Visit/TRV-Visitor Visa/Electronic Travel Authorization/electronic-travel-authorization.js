import React from "react";
import { Link } from "react-router-dom";
export default function ElectronicTravelAuthorization() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Visit
          {" > "}
          <Link to="/visit/visitor-visa-trv">Visitor Visa- TRV</Link> {" > "}
          Electronic Travel Authorization (eTA)
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Electronic Travel Authorization (eTA)
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        You need an eTA to transit through Canada by air if you’re from an
        eTA-required country.
        <br />
        <br />
        You don’t need an eTA if you’re transiting through Canada and you enter
        by train, bus,boat or cruise ship. You do need to bring the right travel
        documents.
        <br />
        <br />
        <sp>Transit without a visa</sp>
        <br />
        <br />
        Citizens and permanent residents of the United States
        <br />
        <br />
        US citizens and lawful permanent residents of the U.S. can transit
        through Canada without a visa by:
        <br />
        <br />
        <ul>
          <li>air</li>
          <li>car</li>
          <li>bus</li>
          <li>train</li>
          <li>boat</li>
          <li>cruise ship</li>
        </ul>
        <br />
        You just need to bring the right travel documents.
        <br />
        <br />
        <sp>Passport holders of certain countries</sp>
        <br />
        <br />
        You may be able to transit without a visa if you hold a passport from
        one of the following countries and you meet certain conditions:
        <br />
        <br />
        <ul>
          <li>China</li>
          <li>Indonesia</li>
          <li>Philippines</li>
          <li>Thailand or</li>
          <li>
            Taiwan (holder of passport without an personal identification
            number)
          </li>
        </ul>
      </h2>
    </div>
  );
}

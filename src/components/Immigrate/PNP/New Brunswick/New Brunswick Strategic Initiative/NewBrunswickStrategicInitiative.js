import React from "react";
import { Link } from "react-router-dom";
export default function NewBrunswickStrategicInitiative() {
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
          <Link to="/immigrate/provincial-nominee-program/new-brunswick">
            New Brunswick
          </Link>
          {" > "}New Brunswick Strategic Initiative
        </p>
        <div className="header-content">
          <h1 className="heading-about">New Brunswick Strategic Initiative</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        If you are a Francophone skilled employee who has adequate skills,
        education and work experience to contribute to the economy of New
        Brunswick, you can apply for permanent residence through the New
        Brunswick Strategic Initiative.
        <br />
        <br />
        <ul>
          <li>You must intend to live in New Brunswick.</li>
          <li>You must have a solid connection to New Brunswick.</li>
          <li>
            You must demonstrate a minimum of a Canadian secondary (high school)
            diploma or a foreign high school diploma equivalent to a Canadian
            certification.
          </li>
          <li>You must have appropriate settlement funds.</li>
          <li>You must be between the ages of 19 and 55.</li>
          <li>
            You must demonstrate valid language test results in either French or
            English that are equivalent to a Niveaux de compétence linguistique
            canadiens (NCLC) 5.
          </li>
        </ul>
      </h2>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function OntarioHumanCapitalPriorityStream() {
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
          <Link to="/immigrate/provincial-nominee-program/ontario">
            Ontario
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/ontario/ontario-express-entry">
            Ontario Express Entry
          </Link>
          {" > "}Ontario Human Capital Priority Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Ontario Human Capital Priority Stream
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Ontario Human Capital encompasses a range of immigration streams
        targeting candidates for Ontario’s labour force. The Human Capital
        streams emphasise skills, abilities, or experience which suggest a
        foreign national can easily join the Ontario labour force. Those who
        have work or educational experience in Ontario, those who are proficient
        in both English and French, and those with competitive Express Entry
        profiles may find success through one of these streams.
        <br />
        <br />
        OINP Human Capital includes the following streams:
        <br />
        <br />
        <ul>
          <li>Human Capital Priorities – Express Entry</li>
          <li>French-Speaking Skilled Worker – Express Entry</li>
          <li>Skilled Trades – Express Entry</li>
          <li>Master’s Graduate</li>
          <li>PhD Graduate</li>
        </ul>
        <br />
        Applicants who are successful through any of the Ontario Human Capital
        streams will receive an official provincial nomination from Ontario.
        This provincial nomination makes applicants eligible to apply for
        Canadian permanent resident status.
      </h2>
    </div>
  );
}

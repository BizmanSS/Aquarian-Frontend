import React from "react";
import { Link } from "react-router-dom";
export default function Yukon() {
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
          Yukon
        </p>
        <div className="header-content">
          <h1 className="heading-about">Yukon</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        With a population of just over 30,000 people, the Yukon labour market is
        in express need for foreign skilled workers to fill the high demand for
        skilled and semi-skilled occupations.
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
        The Yukon Nominee Program (YNP), a Provincial Nominee Program (PNP), is
        a collection of immigration pathways enabling foreign nationals to
        become Canadian permanent residents. The Yukon territory operates
        several immigration streams:
        <br />
        <br />
        <ul>
          <li>Yukon Skilled Worker </li>
          <li>Yukon Express Entry </li>
          <li>Yukon Critical Impact Worker</li>
          <li>Yukon Business Nominee</li>
          <li>Yukon Community Pilot</li>
        </ul>
        <br />
        <sp>Yukon Skilled Worker</sp>
        <br />
        <br />
        The Yukon Skilled Worker stream gives foreign nationals with skilled
        work experience and a valid job offer from a Yukon employer an
        opportunity to receive a provincial nomination. Receiving a provincial
        nomination from this stream allows the candidate to apply directly for
        Canadian permanent residence from IRCC.
        <br />
        <br />
        <sp>Yukon Express Entry</sp>
        <br />
        <br />
        The Yukon Express Entry stream gives applicants with an active Express
        Entry profile and a valid job offer from a Yukon employer an opportunity
        to apply for a provincial nomination from Yukon. This program is aligned
        with the federal Express Entry immigration system, enabling successful
        applicants to receive expedited processing on their immigration
        applications.
        <br />
        <br />
        <sp>Yukon Critical Impact Worker</sp>
        <br />
        <br />
        The Yukon Critical Impact Worker stream gives qualified workers with
        semi-skilled work experience and a valid job offer from a Yukon employer
        an opportunity to receive a provincial nomination. Receiving a
        provincial nomination from this stream allows the candidate to apply
        directly for Canadian permanent residence from IRCC.
        <br />
        <br />
        <sp>Yukon Business Nominee</sp>
        <br />
        <br />
        The Yukon Business Nominee stream provides a pathway to permanent
        residence for individuals with business and entrepreneurial experience
        who are interested in owning and operating a business in the Yukon.
        Applicants must have a minimum personal net worth of $500,000 CAD, in
        addition to meeting other program requirements.
        <br />
        <br />
        <sp>Yukon Community Pilot</sp>
        <br />
        <br />
        The Yukon Community Pilot (YCP) is a new stream of the Yukon Nominee
        Program. This pilot was created to address the specific economic and
        labour market needs of the Yukon. Qualified candidates will be granted a
        2-year location-restricted open work permit.
        <br />
        <br />
      </h2>
    </div>
  );
}

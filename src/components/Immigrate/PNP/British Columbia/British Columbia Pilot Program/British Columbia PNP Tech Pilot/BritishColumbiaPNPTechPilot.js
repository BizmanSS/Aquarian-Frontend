import React from "react";
import { Link } from "react-router-dom";
const TableOccuations = () => {
  const data = [
    {
      name: "Telecommunication carriers managers",
      amount: "0131",
    },
    {
      name: "Computer and information systems managers",
      amount: "0213",
    },
    {
      name: "Managers - publishing, motion pictures, broadcasting and performing arts",
      amount: "0512",
    },
    {
      name: "Civil engineers",
      amount: "2131",
    },
    {
      name: "Mechanical engineers",
      amount: "2132",
    },
    {
      name: "Electrical and electronics engineers",
      amount: "2133",
    },
    {
      name: "Chemical engineers",
      amount: "2134",
    },
    {
      name: "Computer engineers (except software engineers and designers)",
      amount: "2147",
    },
    {
      name: "Information systems analysts and consultants",
      amount: "2171",
    },
    {
      name: "Database analysts and data administrators",
      amount: "2172",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>NOC Code</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.amount}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function BritishColumbiaPNPTechPilot() {
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
          <Link to="/immigrate/provincial-nominee-program/british-columbia">
            British Columbia
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/british-columbia/british-columbia-pilot-program">
            British Columbia Pilot Program
          </Link>
          {" > "}British Columbia PNP Tech Pilot
        </p>
        <div className="header-content">
          <h1 className="heading-about">British Columbia PNP Tech Pilot</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        <span> BC PNP Tech </span>
        <br />
        <br />
        The BC PNP Tech program is contained within the British Columbia
        Provincial Nomination Program (BC PNP), a Provincial Nominee Program
        (PNP) operated by the province of British Columbia. BC PNP Tech allows
        candidates with job offers in in-demand tech occupations to apply for
        provincial nomination with expedited processing through the BC PNP.
        <br />
        <br />
        <ul>
          <li>Eligible Occupations</li>
          <li>Application Procedure</li>
        </ul>
        <br />
        Candidates who are successfully nominated through the BC PNP Tech
        program will be issued a work permit support letter, allowing them to
        apply for a temporary work permit. As well, they will be invited to
        submit an official application for Canadian permanent residence. BC PNP
        Tech is not an immigration program. Candidates who are eligible and have
        registered a profile for one of the BC PNP Skills Immigration programs,
        and who meet the requirements for the BC Tech program may be able to
        receive accelerated application processing and other benefits.
        <br />
        <br />
        <bold>Job Offer Requirements</bold>
        <br />
        <br />
        The BC PNP Tech program has unique job offer requirements. In order to
        qualify for the Tech program, your job offer must be for one of 29
        selected in-demand occupations. The offer does not need to be
        indefinite, but it must be for a period of at least one year. If the
        applicant is already working for the employer in the position that is
        being offered to them, they must have at least 120 days remaining in
        that position at the time they submit their application.
        <br />
        <br />
        <sp>Eligible Occupations</sp>
        <br />
        <br />
        In order to be eligible for the BC PNP Tech program, candidate must be
        registered for one of the BC Skills Immigration programs. Candidates
        must also be working in one of 29 tech occupations identified as
        in-demand by the BC PNP:
        <br />
        <br />
        <TableOccuations />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The BC PNP Tech program is aligned with BC’s Skills Immigration
        programs. The programs best fitting for the Tech program are the BC
        Skilled Worker and BC International Graduate programs. In order to apply
        for the BC PNP Tech program, a foreign national should verify that they
        meet the National Occupation Classification (NOC) code requirements for
        one of the 29 in-demand occupations. If this requirement is met, the
        person may initiate the application process by registering a profile
        with BC PNP Online.
        <br />
        <br />
        Once the profile is registered, the applicant can follow the application
        procedure for the BC Skills Immigration program for which they are
        eligible. BC PNP Tech applicants receive a number of advantages when
        going through the provincial nomination process. First, additional
        rounds of invitations to apply are issued on a weekly basis for
        qualifying Tech candidates. Second, applicants will have their PNP
        application processed at an expedited rate. Finally, employers are able
        to access the Tech program “concierge services” to assist with the
        hiring of foreign nationals through this program.
      </h2>
    </div>
  );
}

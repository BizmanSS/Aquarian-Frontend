import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { requirement: "Express Entry Profile", value: "Yes" },
    { requirement: "Connection to Province", value: "No" },
    { requirement: "Job Offer", value: "No" },
    { requirement: "Language Proficiency", value: "Express Entry requirement" },
    { requirement: "Level of Education", value: "Express Entry requirement" },
    { requirement: "Work Experience", value: "Express Entry requirement" },
    { requirement: "Investment Requirement", value: "No" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.requirement}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableNo = () => {
  const data = [
    { date: "January 23, 2023", lettersSent: 154, crsScore: 385 },
    { date: "January 19, 2023", lettersSent: 46, crsScore: 324 },
    { date: "December 8, 2022", lettersSent: 129, crsScore: 305 },
    { date: "29 July 2022", lettersSent: 120, crsScore: 473 },
    { date: "16 June 2022", lettersSent: 150, crsScore: 306 },
    { date: "19 May 2022", lettersSent: 100, crsScore: 382 },
    { date: "14 April 2022", lettersSent: 250, crsScore: 356 },
    { date: "22 March 2022", lettersSent: 350, crsScore: 325 },
    { date: "8 March 2022", lettersSent: 350, crsScore: 318 },
    { date: "1 February 2022", lettersSent: 400, crsScore: 340 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Date of draw</th>
          <th>Number of Notification of Interest (NOI) Letters sent</th>
          <th>
            CRS score of lowest ranked candidate who received a NOI letter
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.lettersSent}</td>
            <td>{item.crsScore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function AlbertaExpressEntry() {
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
          <Link to="/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program">
            Alberta Immigrant Nominee Program
          </Link>
          {" > "}Alberta Express Entry
        </p>
        <div className="header-content">
          <h1 className="heading-about">Alberta Express Entry</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Alberta Express Entry is a stream of the Alberta Immigrant Nominee
        Program (AINP), a Provincial Nominee Program (PNP) operated by the
        province of Alberta. The Alberta Express Entry stream selects candidates
        from the federal Express Entry pool and invites them to apply for
        nomination by the province. The exact selection criteria for the program
        have not been made public; all Express Entry candidates will be
        considered.
        <br />
        <br />
        <ul>
          <li>Eligibility Requirements</li>
          <li>Application Procedure</li>
          <li>Recent Draws</li>
        </ul>
        <br />
        Candidates who are successfully nominated through the Alberta Express
        Entry stream will be invited to submit an official application for
        Canadian permanent residence. This stream is aligned with the federal
        Express Entry immigration system. In order to be eligible for the
        stream, a candidate must have an active profile in one of the following
        three Express Entry programs:
        <br />
        <br />
        <ul>
          <li>Federal Skilled Worker (FSW), or</li>
          <li>Federal Skilled Trades (FST), or</li>
          <li>Canadian Experience Class (CEC).</li>
        </ul>
        <br />
        The program is by invitation only and foreign nationals cannot apply to
        the program directly. All candidates in the Express Entry pool are
        automatically considered for the program when they submit their Express
        Entry profile. The province will send a notification directly to the
        Express Entry accounts of those candidates it invites to apply.
        <br />
        <br />
        While the exact selection criteria is unknown, AINP states that it will
        seek candidates who demonstrate strong ties to Alberta and who can
        support regional economic development and diversification.
        <br />
        <br />
        <bold>Eligibility Requirements</bold>
        <br />
        <br />
        <Table />
        <br />
        <bold>Express Entry Profile</bold>
        <br />
        <br />
        Alberta Express Entry is aligned with the federal Express Entry system.
        In order to be considered, candidates must have an active Express Entry
        profile in either Federal Skilled Worker (FSW), Canadian Experience
        Class (CEC), or Federal Skilled Trades (FST) programs:
        <br />
        <br />
        <ul>
          <li>
            Federal Skilled Worker requires candidates to have, at minimum, a
            high school diploma, as well as at least one year of continuous
            full-time, skilled work experience. Work experience is considered
            skilled if obtained in a position at National Occupational
            Classification (NOC) Skill Level 0, A, or B. Candidates must also
            demonstrate language proficiency in English or French consistent
            with Canadian Language Benchmark (CLB) level 7.
          </li>
          <br />
          <li>
            Canadian Experience Class has no minimum education requirement. CEC
            candidates must have a minimum of one year of full-time Canadian
            skilled work experience. This work experience does not have to be
            continuous, but it must have been obtained within the three years
            prior to application. Work experience is considered skilled if
            obtained in a position at NOC Skill Level 0, A, or B. Candidates
            must also demonstrate language proficiency in English or French
            consistent with CLB level 7 for work experience obtained at NOC
            Skill Level 0 or A and CLB 5 for work experience obtained at NOC
            Skill Level B.
          </li>
          <br />
          <li>
            Federal Skilled Trades requires candidates to have licensing or
            certification to practise their trade in a province or territory in
            Canada or an offer for full-time employment in a position lasting at
            least 12-months. As well, all FST candidates must demonstrate
            language proficiency equal to at least CLB 4 in either English or
            French.
          </li>
        </ul>
        <br />
        <bold>Language Proficiency</bold>
        <br />
        <br />
        All candidates must demonstrate language proficiency in English or
        French consistent with the Canadian Language Benchmark (CLB) for their
        program. A CLB 7 test score is required for Federal Skilled Worker and
        Canadian Experience Class candidates. A CLB 4 test score is required for
        Federal Skilled Trades candidates.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Alberta Express Entry stream operates on an invitation only basis.
        To apply to the stream, candidates who meet the minimum eligibility
        requirements must create an Express Entry profile. They must then wait
        to be issued a Notification of Interest (NOI) from the province of
        Alberta.
        <br />
        <br />
        Note that simply meeting the minimum eligibility requirements does not
        guarantee that a candidate will receive an invitation from Alberta. The
        province of Alberta reviews Express Entry profiles and contacts only
        those candidates the province may be interested in nominating. Only
        candidates who are contacted by Alberta are eligible to submit an
        application to the AINP for provincial nomination.
        <br />
        <br />
        Once a candidate receives an NOI, they will be given a strict deadline
        for submitting a complete application to AINP. If the province approves
        the application, Alberta will notify the applicant they have been
        selected for provincial nomination. This notification will be sent to
        the applicant’s IRCC online account. After accepting the provincial
        nomination, the applicant’s CRS score will increase by 600 points,
        virtually guaranteeing they will receive an Invitation to Apply (ITA)
        for permanent residence in the next Express Entry draw.
        <br />
        <br />
        After receiving an ITA, the applicant must prepare and submit an
        official application for Canadian permanent residence within the
        designated time frame. Applications for permanent residence submitted
        through Express Entry are generally processed within six months.
        <br />
        <br />
        <bold>Recent Draws</bold>
        <br />
        <br />
        Below is a list of the most recent draws conducted by Alberta Express
        Entry. Please note that Alberta only posts draw information
        approximately one month after they occur.
        <br />
        <br />
        <TableNo />
      </h2>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    {
      name: <italic>Self-declared</italic>,
      amount: "",
    },
    {
      name: "Experience",
      amount: "20",
    },
    {
      name: "Ownership",
      amount: "4",
    },
    {
      name: "Net Worth",
      amount: "12",
    },
    {
      name: "Total Personal Investment",
      amount: "20",
    },
    {
      name: "Jobs",
      amount: "20",
    },
    {
      name: "Regional District",
      amount: "12",
    },
    {
      name: "Adaptability",
      amount: "32",
    },
    {
      name: <bold>Self-declared SUBTOTAL score</bold>,
      amount: <bold>120</bold>,
    },
    {
      name: "",
      amount: "",
    },
    {
      name: <italic>Business concept</italic>,
      amount: "",
    },
    {
      name: "Commercial Viability",
      amount: "30",
    },
    {
      name: "Transferability of Skills",
      amount: "20",
    },
    {
      name: "Economic Benefits",
      amount: "30",
    },
    {
      name: <bold>Business concept SUBTOTAL score</bold>,
      amount: <bold>80</bold>,
    },
    {
      name: <bold>Maximum Score Available</bold>,
      amount: <bold>200</bold>,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Scoring Sections</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const TableDraws = () => {
  const data = [
    { date: "June 20, 2023", score: "119", no: "<5" },
    { date: "June 20, 2023", score: "152", no: "<5" },
    { date: "May 9, 2023", score: "119", no: "<5" },
    { date: "May 9, 2023", score: "115", no: "10" },
    { date: "March 30, 2023", score: "115", no: "7" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "33%" }}>Date</th>
          <th>Minimum Score</th>
          <th>Number of Invitations</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.score}</td>
            <td>{item.no}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function BritishColumbiaEntrepreneurStream() {
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
          <Link to="/immigrate/provincial-nominee-program/british-columbia/british-columbia-entrepreneur-immigration">
            British Columbia Entrepreneur Immigration
          </Link>
          {" > "}British Columbia Entrepreneur Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            British Columbia Entrepreneur Stream
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        British Columbia Entrepreneur Immigration is a category of immigration
        streams contained within the British Columbia Provincial Nominee Program
        (BC PNP), a Provincial Nominee Program (PNP) operated by the province of
        British Columbia. The BC Entrepreneur immigration streams target foreign
        nationals with demonstrated experience owning and operating businesses
        who wish to invest their finances and expertise in business
        opportunities in the province of British Columbia.
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
        Candidates for BC Entrepreneur immigration are required to purchase a
        new or existing business in BC and become involved in the active
        day-to-day management of the BC operation. The entrepreneurial streams
        offer opportunities for wealthy individuals with business management
        experience, as well as wealthy foreign-owned companies who wish to
        expand the reach of their enterprise into British Columbia. Successful
        applicants will eventually receive a provincial nomination by the
        province of BC which will support applications for Canadian permanent
        residence. The three streams contained within British Columbia
        Entrepreneur Immigration are:
        <br />
        <br />
        <ul>
          <li>British Columbia Entrepreneur</li>
          <li>British Columbia Entrepreneur Regional Pilot</li>
          <li>British Columbia Strategic Projects</li>
        </ul>
        <br />
        <sp>BC Entrepreneur</sp>
        <br />
        <br />
        The British Columbia Entrepreneur stream targets experienced business
        owners and managers who wish to live in British Columbia permanently.
        Applicants must demonstrate management experience as well as significant
        personal net worth. Successful applicants will be required to invest in
        the purchase and management of a new or existing BC business. After
        proving the successful operation of a BC business, the applicant becomes
        eligible for Canadian permanent residence.
        <br />
        <br />
        <sp>BC Entrepreneur Regional Pilot</sp>
        <br />
        <br />
        The BC Entrepreneur Regional Pilot Stream of the BC PNP is for
        experienced entrepreneurs who want to invest in and manage a business in
        British Columbia. Applicants must be referred by one of the program’s
        participating communities in BC.
        <br />
        <br />
        <sp>BC Strategic Projects</sp>
        <br />
        <br />
        British Columbia Strategic Projects targets successful foreign-owned
        companies who wish to establish a new branch or operation in BC.
        Companies must prove their ability to generate significant annual
        revenue alongside the management of large staff teams. Successful
        companies will be required to transfer key staff to BC to manage their
        new proposed operation. After proving the successful operation of their
        BC enterprise, these key staff members become eligible for Canadian
        permanent residence.
        <br />
        <br />
        <sp>British Columbia Entrepreneur Ranking System</sp>
        <br />
        <br />
        The British Columbia Entrepreneur Immigration stream uses the following
        points-grid to rank candidates who have registered profiles. Only those
        candidates with the most competitive scores will be invited to apply to
        the program. Please note that the BC Entrepreneur Regional Pilot uses a
        separate ranking system.
        <br />
        <br />
        <Table />
        <br />
        <sp>
          British Columbia Entrepreneur - Recent Draws & Invitation History
        </sp>
        <br />
        <br />
        Below is the information regarding recent British Columbia Entrepreneur
        Immigration draws and the historic information about issuance of
        invitations to apply.
        <br />
        <br />
        <TableDraws />
      </h2>
    </div>
  );
}

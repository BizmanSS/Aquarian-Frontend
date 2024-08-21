import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    { name: "Connection to Province", amount: "No" },
    { name: "Job Offer", amount: "No" },
    {
      name: "Language Proficiency",
      amount: "CLB 5",
    },
    { name: "Level of Education", amount: "High School" },
    {
      name: "Work Experience",
      amount:
        "2 years managing/owning a business OR 5 years as senior business manager",
    },
    {
      name: "Investment Requirement",
      amount: "Net Worth: $600,000 CAD Investment: $200,000 CAD",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Requirement</th>
          <th></th>
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
export default function NewfoundlandAndLabradorInternationalEntrepreneurCategory() {
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
          <Link to="/immigrate/provincial-nominee-program/newfoundland-and-labrador">
            New Foundland and Labrador
          </Link>
          {" > "}Newfoundland and Labrador International Entrepreneur Category
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Newfoundland and Labrador International Entrepreneur Category
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The International Entrepreneur stream of the Newfoundland and Labrador
        Provincial Nominee Program (NLNP) is designed for foreign nationals with
        experience owning and managing businesses who wish to invest in
        purchasing and managing a business in Newfoundland & Labrador.
        Applicants must have business management experience and a significant
        personal net worth.
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
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        This program uses an Expression of Interest (EOI) system to select
        applicants. In order to be considered for the program, first a candidate
        must submit an EOI using the PNP’s online service. Please note that the
        EOI service only opens for short periods throughout the year. Candidates
        will be ranked against one another based on their EOIs and the most
        competitive candidates will be invited to apply to the program.
        <br />
        <br />
        After receiving an Invitation to Apply (ITA) candidates must submit an
        official application for nomination to the province. This application
        includes documentation supporting the information included in the
        original EOI. As well, all applicants must pay an application fee of CAD
        $1,000 and must provide an Audit Report and a Business Establishment
        Plan, outlining their entrepreneurial intentions. If an application is
        deemed to be complete, the applicant will have to travel to Newfoundland
        and Labrador to participate in an in-person interview. If the interview
        is successful, the applicant must sign a Business Performance Agreement,
        detailing their commitments to establish or purchase a business in the
        province.
        <br />
        <br />
        If an application is approved, the applicant will receive a work permit
        authorization letter allowing them to apply for a Canadian work permit.
        With work permit in hand, the applicant must relocate to Newfoundland
        and Labrador to launch their business. After operating the business in
        accordance with their Business Performance Agreement the applicant may
        apply to the province for an official Provincial Nomination. <br />
        <br />
        Once an applicant has received an official nomination, they can apply to
        IRCC for Canadian permanent resident status.
      </h2>
    </div>
  );
}

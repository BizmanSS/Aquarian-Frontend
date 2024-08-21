import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "Yes" },
    { name: "Connection to Province", amount: "No" },
    { name: "Job Offer", amount: "No" },
    {
      name: "Language Proficiency",
      amount: "CLB 7",
    },
    { name: "Level of Education", amount: "High school" },
    {
      name: "Work Experience",
      amount: "NOC 0, A, or B 1 year",
    },
    {
      name: "Investment Requirement",
      amount: "None",
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
export default function NewBrunswickExpressEntryLabourMarketStream() {
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
          {" > "}New Brunswick Express Entry Labour Market Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            New Brunswick Express Entry Labour Market Stream
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The New Brunswick Express Entry Labour Market Stream (EELMS) provides a
        pathway to permanent residence for highly skilled individuals who have
        expressed an interest in the stream. This program is aligned with the
        federal Express Entry immigration system, enabling successful applicants
        to receive expedited processing on their immigration applications. This
        stream is designed to target high-skilled foreign workers who can
        contribute to the New Brunswick economy.
        <br />
        <br />
        Note that the New Brunswick Express Entry Labour Market Stream operates
        on an Expression of Interest (EOI) system and will only accept EOIs from
        individuals who meet specific conditions, which are separate from the
        eligibility criteria for the stream. As of July 26th, 2019, the program
        is accepting EOIs from those who meet the following criteria:
        <br />
        <br />
        <ul>
          <li>Must have an active Express Entry profile.</li>
          <li>
            Must be currently living and working in New Brunswick, a letter of
            employment from the employer must be included with the EOI.
          </li>
          <li>
            Must be working in a position at NOC Code 0, A, or B, NOC code must
            be included with the EOI.
          </li>
          <li>Must hold a valid Canadian Work Permit</li>
          <li>
            Must have a valid language test scores in either English or French
            equal to Canadian Language Benchmark Level 7 (CLB 7)
          </li>
          <li>
            Must have an Educational Credentials Assessment (ECA) showing
            education equivalent to a Canadian High School diploma.
          </li>
        </ul>
        <br />
        Candidates who are successfully nominated through the New Brunswick
        Express Entry Labour Market Stream will be invited to submit an official
        application for Canadian permanent residence.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
      </h2>
    </div>
  );
}

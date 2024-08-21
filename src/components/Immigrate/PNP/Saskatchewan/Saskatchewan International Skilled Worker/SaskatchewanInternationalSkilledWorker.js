import React from "react";
import { Link } from "react-router-dom";
const TableFactor = () => {
  const data = [
    { name: <italic>Factor 1: Labour Market Success</italic>, amount: "" },
    { name: "Education and Training", amount: "23" },
    { name: "Skilled Work Experience", amount: "10" },
    { name: "Language Ability", amount: "30" },
    {
      name: "Age",
      amount: "12",
    },

    {
      name: <italic>Factor 1 Maximum</italic>,
      amount: <italic>70</italic>,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Factor</th>
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
const TableFactor2 = () => {
  const data = [
    {
      name: (
        <italic>Factor 2: Connection to Saskatchewan and Labour Market</italic>
      ),
      amount: "",
    },
    {
      name: "Employment Offer Subcategory - Connection to Saskatchewan",
      amount: "30",
    },
    {
      name: "Occupation In-Demand and Saskatchewan Express Entry Subcategories - Connection to Saskatchewan",
      amount: "20",
    },
    {
      name: <italic>Factor 2 Maximum</italic>,
      amount: <italic>30</italic>,
    },
    { name: <bold>Maximum</bold>, amount: <bold>100</bold> },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Factor</th>
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
const TableOccuations = () => {
  const data = [
    {
      name: "Legislators",
      amount: "0011",
    },
    {
      name: "Senior government managers and officials",
      amount: "0012",
    },
    {
      name: "Senior managers - trade, broadcasting and other services, n.e.c.",
      amount: "0015",
    },
    {
      name: "Managers in health care",
      amount: "0311",
    },
    {
      name: "Government managers - health and social policy development and program administration",
      amount: "0411",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "10%" }}>NOC</th>
          <th>Occupation Title</th>
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
export default function SaskatchewanInternationalSkilledWorker() {
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
          <Link to="/immigrate/provincial-nominee-program/saskatchewan">
            Saskatchewan
          </Link>
          {" > "}Saskatchewan International Skilled Worker
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Saskatchewan International Skilled Worker
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Saskatchewan International Skilled Worker is a collection of immigration
        streams of the Saskatchewan Immigrant Nominee Program (SINP), a
        Provincial Nominee Program (PNP) operated by the province of
        Saskatchewan. Saskatchewan International Skilled Worker encompasses
        three immigration streams which target foreign nationals who have
        skilled work experience and who meet the unique needs and requirements
        to fill gaps in Saskatchewan’s labour force.
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
        Saskatchewan International Skilled Worker includes the following
        streams:
        <br />
        <br />
        <ul>
          <li>Saskatchewan Express Entry</li>
          <li>Saskatchewan Employment Offer</li>
          <li>Saskatchewan In-Demand Occupation</li>
        </ul>
        <br />
        Applicants who are successful through any of these Saskatchewan streams
        will receive an official provincial nomination from Saskatchewan. This
        provincial nomination makes applicants eligible to apply for Canadian
        permanent resident status. Please note that in order to qualify for any
        of these streams, candidates must score at least 60 points on the SINP
        Points Assessment Grid.
        <br />
        <br />
        <sp>Saskatchewan Express Entry</sp>
        <br />
        <br />
        Saskatchewan Express Entry is a stream of Saskatchewan International
        Skilled Worker targeting foreign workers with active profiles in
        Canada’s Express Entry system. In order to qualify for this stream, the
        applicant must have at least one year of experience at least one year of
        experience in an occupation at NOC level “A”, “B” or “0”. The experience
        will not be eligible if it was completed in an occupation listed on the
        SINP Excluded Occupation List. The applicant must also score at least 60
        points on the SINP Points Assessment Grid.
        <br />
        <br />
        <sp>Saskatchewan Employment Offer</sp>
        <br />
        <br />
        Saskatchewan Employment Offer is a stream of Saskatchewan International
        Skilled Worker targeting foreign workers who have valid job offers from
        Saskatchewan employers. In order to qualify, the applicant must meet
        certain requirements regarding work experience and must score at least
        60 points on the SINP Points Assessment Grid.
        <br />
        <br />
        <sp>Saskatchewan Occupations In-Demand</sp>
        <br />
        <br />
        Saskatchewan Occupation In-Demand is a stream of Saskatchewan
        International Skilled Worker targeting foreign workers who have work
        experience in specific occupations. In order to qualify, the applicant
        must have at least one year of experience in an occupation at NOC level
        “A”, “B” or “0”. The Occupation will not be eligible if it is listed on
        the SINP Excluded Occupation List. As well the applicant must be able to
        claim at least 60 points on the SINP Points Assessment Grid.
        <br />
        <br />
        <sp>Saskatchewan Points Assessment Grid</sp>
        <br />
        <br />
        The SINP Points Assessment Grid is out of 100 points. In order to be
        eligible for all of the Saskatchewan International Skilled Worker
        streams a candidate must score a minimum of 60 points. Please note that
        candidates will be required to submit supporting documentation with
        their SINP application demonstrating that they have met the 60 point
        requirement.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <TableFactor />
        <br />
        <TableFactor2 />
        <br />
        <sp>Saskatchewan Excluded Occupations List</sp>
        <br />
        <br />
        In order to qualify for Saskatchewan’s Occupation In-Demand and Express
        Entry categories, a candidate must have a minimum of 12 months of
        full-time work experience in an occupation at NOC level “A”, “B” or “0”.
        The occupation will not be eligible if it is listed on the SINP Excluded
        Occupation List which follows below:
        <br />
        <br />
        <sp>SINP Excluded Occupations List</sp>
        <br />
        <br />
        <TableOccuations />
      </h2>
    </div>
  );
}

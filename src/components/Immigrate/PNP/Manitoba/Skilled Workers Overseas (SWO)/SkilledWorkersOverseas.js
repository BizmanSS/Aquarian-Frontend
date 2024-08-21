import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Language Proficiency", points: 25 },
    { name: "Age", points: 10 },
    { name: "Work Experience", points: 15 },
    { name: "Education", points: 25 },
    { name: "Adaptability", points: 25 },
    { name: <bold>Minimum Pass Score</bold>, points: <bold>60</bold> },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Maximum Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableFactor = () => {
  const data = [
    {
      "NOC 2021 Code": "10010",
      TEER: 0,
      "NOC 2021 Title": "Financial managers",
      "Minimum CLB": 7,
      "NOC 2016 Equivalent": "0111",
      "NOC 2016 Skill Type/Level": 0,
    },
    {
      "NOC 2021 Code": "10011",
      TEER: 0,
      "NOC 2021 Title": "Human resources managers",
      "Minimum CLB": 7,
      "NOC 2016 Equivalent": "0112",
      "NOC 2016 Skill Type/Level": 0,
    },
    {
      "NOC 2021 Code": "10019",
      TEER: 0,
      "NOC 2021 Title": "Other administrative services managers",
      "Minimum CLB": 7,
      "NOC 2016 Equivalent": "0114",
      "NOC 2016 Skill Type/Level": 0,
    },
    {
      "NOC 2021 Code": "10020",
      TEER: 0,
      "NOC 2021 Title":
        "Insurance, real estate and financial brokerage managers",
      "Minimum CLB": 7,
      "NOC 2016 Equivalent": "0121",
      "NOC 2016 Skill Type/Level": 0,
    },
    {
      "NOC 2021 Code": "10021",
      TEER: 0,
      "NOC 2021 Title": "Banking, credit and other investment managers",
      "Minimum CLB": 7,
      "NOC 2016 Equivalent": "0122",
      "NOC 2016 Skill Type/Level": 0,
    },
    {
      "NOC 2021 Code": "10022",
      TEER: 0,
      "NOC 2021 Title": "Advertising, marketing and public relations managers",
      "Minimum CLB": 7,
      "NOC 2016 Equivalent": "0124",
      "NOC 2016 Skill Type/Level": 0,
    },
    {
      "NOC 2021 Code": "11100",
      TEER: 1,
      "NOC 2021 Title": "Financial auditors and accountants",
      "Minimum CLB": 7,
      "NOC 2016 Equivalent": "1111",
      "NOC 2016 Skill Type/Level": "A",
    },
    {
      "NOC 2021 Code": "11101",
      TEER: 1,
      "NOC 2021 Title": "Financial and investment analysts",
      "Minimum CLB": 5,
      "NOC 2016 Equivalent": "1112",
      "NOC 2016 Skill Type/Level": "A",
    },
    {
      "NOC 2021 Code": "11102",
      TEER: 1,
      "NOC 2021 Title": "Financial advisors",
      "Minimum CLB": 5,
      "NOC 2016 Equivalent": "1114",
      "NOC 2016 Skill Type/Level": "A",
    },
    {
      "NOC 2021 Code": "11109",
      TEER: 1,
      "NOC 2021 Title": "Other financial officers",
      "Minimum CLB": 5,
      "NOC 2016 Equivalent": "1114",
      "NOC 2016 Skill Type/Level": "A",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>NOC 2021 Code</th>
          <th>TEER</th>
          <th>NOC 2021 Title</th>
          <th>Minimum CLB</th>
          <th>NOC 2016 Equivalent</th>
          <th>NOC 2016 Skill Type/Level</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item["NOC 2021 Code"]}</td>
            <td>{item.TEER}</td>
            <td>{item["NOC 2021 Title"]}</td>
            <td>{item["Minimum CLB"]}</td>
            <td>{item["NOC 2016 Equivalent"]}</td>
            <td>{item["NOC 2016 Skill Type/Level"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function SkilledWorkersOverseas() {
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
          <Link to="/immigrate/provincial-nominee-program/manitoba">
            Manitoba
          </Link>
          {" > "}Skilled Workers Overseas (SWO)
        </p>
        <div className="header-content">
          <h1 className="heading-about">Skilled Workers Overseas (SWO)</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Manitoba Skilled Workers Overseas (SWO) is a collection of immigration
        streams of the Manitoba Provincial Nominee Program (MPNP), a Provincial
        Nominee Program (PNP) operated by the province of Manitoba. Manitoba
        Skilled Workers Overseas encompasses three immigration streams which
        target foreign nationals who have the skills and experience needed to
        make lasting contributions to Manitoba’s labour force.
        <br />
        <br />
        <ul>
          <li>Skilled Workers Overseas Stream</li>
          <li>Manitoba Express Entry Pathway</li>
          <li>Manitoba Human Capital Pathway</li>
          <li>MPNP Points Assessment Grid</li>
          <li>MPNP In-Demand Occupations List</li>
        </ul>
        <br /> <br />
        <a href="/assessment" className="button">
          {" "}
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        Manitoba Skilled Workers Overseas includes the following streams:
        <br />
        <br />
        <ul>
          <li>Manitoba Skilled Workers Overseas Stream</li>
          <li>Manitoba Express Entry Pathway</li>
          <li>Manitoba Human Capital Pathway </li>
        </ul>
        <br />
        Applicants who are successful through any of these Manitoba streams will
        receive an official provincial nomination from Manitoba. This provincial
        nomination makes applicants eligible to apply for Canadian permanent
        resident status.
        <br />
        <br />
        In order to be eligible for all three streams included in the Manitoba
        Skilled Workers Overseas category, candidates must score a minimum of 60
        points on the MPNP Points Assessment Grid.
        <br />
        <br />
        <bold>Skilled Workers Overseas Stream</bold>
        <br />
        <br />
        Manitoba Skilled Workers Overseas is a stream of Manitoba’s Skilled
        Workers Overseas Category which targets foreign nationals who have the
        skills and foreign work experience required to contribute to Manitoba’s
        labour force and who can demonstrate a connection to the province. This
        stream is highly competitive, only selecting applicants with the most
        competitive profiles and who have experience in one of Manitoba’s
        In-Demand Occupations.
        <br />
        <br />
        <bold>Manitoba Express Entry Pathway</bold>
        <br />
        <br />
        The Manitoba Express Entry Pathway is a stream of Manitoba’s Skilled
        Workers Overseas Category which targets foreign nationals who have
        active Express Entry profiles along with the skills and foreign work
        experience required to contribute to Manitoba’s labour force. Applicants
        must have experience, training, and skills in one of the
        <bold>In-Demand Occupations in Manitoba </bold> and a close family link
        to the province.
        <br />
        <br />
        <bold>Manitoba Human Capital Pathway</bold>
        <br />
        <br />
        The Manitoba Human Capital Pathway is a stream of Manitoba’s Skilled
        Workers Overseas Category which targets overseas skilled workers who
        have experience, training, and skills in one of the In-Demand
        Occupations in Manitoba and must also prove the potential to find a job
        immediately upon arrival to Manitoba.
        <br />
        <br />
        <bold>MPNP Points Assessment Grid</bold>
        <br />
        <br />
        In order to be eligible to submit an Expression of Interest (EOI) to the
        Skilled Workers Overseas category, a candidate must score at least 60
        points on the MPNP Points Assessment Grid.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>MPNP In-Demand Occupations List</bold>
        <br />
        <br />
        Manitoba prefers candidates who have work experience in one of the
        province’s in-demand occupations listed below. Please note that
        French-speakers are exempt from having experience in an in-demand
        occupation to be eligible for MPNP.
        <br />
        <br />
        <TableFactor />
      </h2>
    </div>
  );
}

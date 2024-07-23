import React from "react";
import { Link } from "react-router-dom";
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
export default function Manitoba() {
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
          Manitoba
        </p>
        <div className="header-content">
          <h1 className="heading-about">Manitoba</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Located in one of Canada’s western Prairie provinces, Manitoba is a
        province built upon generations of rich agricultural production.
        Manitoba hosts the city of Winnipeg and is bordered on the east by the
        province of Ontario and on the west by the province of Saskatchewan.
        <br />
        <br />
        <ul>
          <li>Manitoba In-Demand Occupations</li>
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          {" "}
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        The Manitoba Provincial Nominee Program (MPNP), a Provincial Nominee
        Program (PNP), is a collection of immigration pathways enabling foreign
        nationals to become Canadian permanent residents. The PNP is
        strategically designed to attract immigrants in areas which will benefit
        the province: skilled workers, workers in sectors with labour shortages,
        recent graduates, and agricultural entrepreneurs.
        <br />
        <br />
        The province operates several immigration streams divided among four
        categories:
        <br />
        <br />
        <ul>
          <li>Skilled Workers in Manitoba (SWM)</li>
          <li>Skilled Workers Overseas (SWO)</li>
          <li>International Education Stream (IES)</li>
          <li>Business Investor Stream (BIS)</li>
        </ul>
        <br />
        <bold>Skilled Workers in Manitoba</bold>
        <br />
        <br />
        Skilled Workers in Manitoba encompasses three immigration streams
        designed to target workers who have already gained employment experience
        or offers of employment in Manitoba. Candidates for this stream must be
        currently working and living in Manitoba at the time of their
        application, or, in certain cases, they may be invited to apply after
        attending a recruitment session with MPNP overseas.
        <br />
        <br />
        <ul>
          <li>Skilled Workers in Manitoba Stream</li>
          <li>Manitoba Experience Pathway </li>
          <li>Employer Direct Recruitment Pathway </li>
        </ul>
        <br />
        <bold>Skilled Workers Overseas</bold>
        <br />
        <br />
        Skilled Workers Overseas encompasses three immigration streams designed
        to target skilled workers who have the ability to join Manitoba’s work
        force and adapt easily to life in the province. All streams of this
        category prioritise workers who have experience in Manitoba’s In-Demand
        Occupations.
        <br />
        <br />
        <ul>
          <li>Manitoba Skilled Workers Overseas Stream</li>
          <li>Manitoba Express Entry Pathway</li>
          <li>Manitoba Human Capital Pathway </li>
        </ul>
        <br />
        <bold>International Education Stream</bold>
        <br />
        <br />
        The International Education Stream (IES) targets recent graduates from
        designated post-secondary institutions located in the province of
        Manitoba. Candidates for this category must have some amount of work
        experience or business management experience from the province, either
        completed after graduation or during their program of study as part of
        an internship or co-op. There are three pathways within this stream:
        <br />
        <br />
        <ul>
          <li>Manitoba Career Employment Pathway </li>
          <li>Manitoba Graduate Internship Pathway</li>
          <li>Manitoba Student Entrepreneur Pathway</li>
        </ul>
        <br />
        <bold>Business Investor Stream</bold>
        <br />
        <br />
        Manitoba’s Business Investor Stream (BIS) is a collection of two
        immigration streams designed for individuals with business management
        experience who wish to launch a new business endeavour in Manitoba. The
        entrepreneurial stream is for general entrepreneurs with business
        proposals in a range of sectors, while the farm investor stream is
        designed specifically for entrepreneurs in the farming sector.
        <br />
        <br />
        <ul>
          <li>Manitoba Entrepreneur Pathway </li>
          <li>Manitoba Farm Investor Pathway</li>
        </ul>
        <br />
        <bold>Manitoba In-Demand Occupations</bold>
        <br />
        <br />
        Several streams of the MPNP prefer candidates who have work experience
        in one of the province’s in-demand occupations listed below. This is not
        a mandatory requirement for all of these streams, but in certain cases
        will give the candidate an advantage for selection. Please note that
        French-speakers are exempt from having experience in an in-demand
        occupation to be eligible for MPNP.
        <br />
        <br />
        <TableFactor />
      </h2>
    </div>
  );
}

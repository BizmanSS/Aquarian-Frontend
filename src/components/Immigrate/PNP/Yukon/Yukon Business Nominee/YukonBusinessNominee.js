import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    { name: "Connection to Province", amount: "No" },
    { name: "Job Offer", amount: "No" },
    {
      name: "Language Proficiency",
      amount: "CLB 4",
    },
    { name: "Level of Education", amount: "High school" },
    {
      name: "Work Experience",
      amount: "Business ownership and/or management 5 years",
    },
    {
      name: "Investment Requirement",
      amount: "Investment: $300,000 CAD Personal Net Worth: $500,000 CAD",
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
const TableGrid = () => {
  const data = [
    { name: "Investment Value", amount: "12" },
    { name: "Liquid Assets", amount: "8" },
    { name: "Prior Visits", amount: "8" },
    {
      name: "Entrepreneurial and/or Management Experience",
      amount: "10",
    },
    { name: "Education", amount: "20" },
    {
      name: "Personal Net Worth",
      amount: "8",
    },
    { name: "Age", amount: "10" },
    { name: "Language", amount: "12" },
    { name: "Work Experience", amount: "10" },
    { name: "Location of Proposed Business", amount: "5" },
    { name: <bold>Minimum Pass Score</bold>, amount: <bold>65</bold> },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Max Points</th>
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
const TableStrategic = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const data = [
    { name: "Information Technology" },
    { name: "Manufacturing" },
    { name: "Value-added Processing" },
    { name: "Forestry" },
    { name: "Tourism Products, Attractions, Services and Facilities" },
    { name: "Energy" },
    { name: "Mining or Mineral Development" },
    { name: "Agriculture" },
    { name: "Cultural Industries" },
    { name: "Film and Video Production" },
  ];

  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <table>
      <thead>
        <tr>
          <th
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
            onClick={handleHeaderClick}
          >
            <bold style={{ alignItems: "flex-start" }}>Strategic Sectors</bold>
            <p
              style={{
                alignItems: "flex-end",
                paddingRight: "10px",
                alignSelf: "center",
              }}
            >
              {!isExpanded ? <FiMinus /> : <FiPlus />}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className={isExpanded ? "expandedTable" : ""}>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableIneligible = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const data = [
    { name: "Passive investments" },
    { name: "Retail, wholesale, or distribution operations" },
    { name: "Restaurants" },
    { name: "Financial services" },
    { name: "Business, consultation and personal services" },
    { name: "Most professional services" },
    { name: "Real estate" },
    { name: "Holding companies" },
    { name: "Gas stations" },
  ];
  const handleHeaderClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <table>
      <thead>
        <tr>
          <th
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
            onClick={handleHeaderClick}
          >
            <bold style={{ alignItems: "flex-start" }}>Ineligible Sectors</bold>
            <p
              style={{
                alignItems: "flex-end",
                paddingRight: "10px",
                alignSelf: "center",
              }}
            >
              {!isExpanded ? <FiMinus /> : <FiPlus />}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className={isExpanded ? "expandedTable" : ""}>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function YukonBusinessNominee() {
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
          <Link to="/immigrate/provincial-nominee-program/yukon">Yukon</Link>
          {" > "}Yukon Business Nominee
        </p>
        <div className="header-content">
          <h1 className="heading-about">Yukon Business Nominee</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Yukon is seeking individuals with proven entrepreneurial and
        business skills to operate their own businesses to help bolster the
        northern territory’s economy. All those applying under the Yukon
        Business Nominee Program (YBNP) must desire to own and operate a
        business within Yukon.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Applicant Requirements</li>
          <li>Employer Requirements</li>
          <li>Application Procedure</li>
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
        Applicants who are nominated will receive a letter of support for a two
        year work permit from Immigration, Refugees and Citizenship Canada
        (IRCC). While on this work permit, the applicant can establish
        themselves and their business in the Yukon. Following this two-year
        period, the applicant will receive support from the territory to apply
        for permanent residence with IRCC, provided they meet the eligibility
        requirements.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Language Proficiency</bold>
        <br />
        <br />
        To be eligible for the Yukon Business Nominee stream, candidates must
        have official language test scores showing proficiency equivalent to the
        Canadian Language Benchmark (CLB) level 4 or higher.
        <br />
        <br />
        <bold>Work Experience</bold>
        <br />
        <br />
        Since this is a business immigration stream, candidates must demonstrate
        that they have enough business ownership or management experience to
        successfully establish and run a business in Yukon. Candidates must have
        at least three (3) years of entrepreneurial or business management
        experience, and at least five (5) years of related work experience.
        <br />
        <br />
        <bold>Investment Requirement</bold>
        <br />
        <br />
        Candidates must demonstrate a personal net worth of at least $500,000
        CAD. As well, successful applicants must invest a minimum of $300,000
        CAD in a Yukon business which they will establish and manage. The
        candidate must own at least one-third (33.33%) of the Yukon business.
        <br />
        <br />
        The business must also be in one of the Yukon’s strategic sectors, and
        must not be in an ineligible industry.
        <br />
        <br />
        Eligible candidates will be invited to sign a business performance
        agreement with Yukon that outlines the conditions under which the
        candidate will receive a provincial nomination.
        <br />
        <br />
        <bold>Points Assessment Grid</bold>
        <br />
        <br />
        Candidates must score at least 65 points on the Yukon Business Nominee
        points assessment grid.
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        The Yukon Business Nominee stream operates on an Expression of Interest
        (EOI) system. Eligible candidates must register with the Yukon Business
        Nominee Program (YBNP). This registration includes submitting a business
        proposal. If the business proposal meets the program criteria, the
        applicant will join a pool of applicants.
        <br />
        <br />
        The YBNP selects candidates from this pool and invites them to submit a
        complete application to the stream. Note that the YBNP does not disclose
        the criteria they use to select applicants, how many applicants are
        selected, nor how frequently.
        <br />
        <br />
        If the complete application is approved, the applicant will then need to
        attend an in-person interview in Yukon. Following a successful
        interview, the candidate will be issued a letter of support for a
        two-year temporary work permit from the YBNP. The applicant will then
        need to use this letter of support to apply to IRCC for a temporary work
        permit.
        <br />
        <br />
        If this application is successful, the applicant must then travel to the
        Yukon and establish themselves, their family, and their business. If the
        applicant successfully establishes the business and meets all of the
        conditions of the performance agreement, Yukon will issue them a
        nomination for permanent residence.
        <br />
        <br />
        After receiving a nomination, the applicant has six months to submit a
        federal application for Canadian permanent residence. Applicants in this
        program must complete and submit a paper-based application for permanent
        residence and submit it by mail to the appropriate application centre.
        Paper-based PNP applications for permanent residence are generally
        processed within 18 months.
        <br />
        <br />
        <sp>Yukon Business Nominee Assessment Grid</sp>
        <br />
        <br />
        <TableGrid />
        <br />
        <sp>Strategic Sectors</sp>
        <br />
        <br />
        <TableStrategic />
        <br />
        Conversely, the business must not belong to any of the following
        sectors:
        <br />
        <br />
        <sp>Ineligible Sectors</sp>
        <br />
        <br />
        <TableIneligible />
      </h2>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "Yes" },
    {
      name: "Connection to Province",
      amount: "No",
    },
    { name: "Job Offer", amount: "No" },
    {
      name: "Language Proficiency",
      amount: "CLB 7; or, as indicated",
    },
    {
      name: "Level of Education",
      amount: "High school",
    },
    {
      name: "Work Experience",
      amount: "Express Entry Requirement; or, High Priority NOC (if indicated)",
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
export default function NovaScotiaLabourMarketPriorities() {
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
          <Link to="/immigrate/provincial-nominee-program/nova-scotia">
            Nova Scotia
          </Link>
          {" > "}Nova Scotia Labour Market Priorities
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Nova Scotia Labour Market Priorities
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        This stream is designed to target workers with experience in extremely
        high-demand occupations or those with proficiency in the province’s
        language priorities.
        <br />
        <br />
        Aligned with the federal Express Entry system, successful applicants to
        the Nova Scotia Labour Market Priorities stream receive a 600 point
        boost to their Express Entry profiles, virtually guaranteeing them an
        Invitation to Apply (ITA) for Canadian permanent residence. This stream
        selects candidates with work experience in extremely high-demand
        occupations or those with proficiency in the province’s language
        priorities. The program sometimes announces occupations in advance of an
        intake, but sometimes occupations are not announced and candidates are
        invited directly from the Express Entry pool.
        <br />
        <br />
        <sp>Eligibility Criteria</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Express Entry Requirement</bold>
        <br />
        <br />
        To be eligible for the Nova Scotia Labour Market Priorities stream,
        applicants must be registered in the federal Express Entry pool. To
        submit a profile to the pool, applicants must be eligible for at least
        one of three federal Economic programs: Federal Skilled Worker, Canadian
        Experience Class, Federal Skilled Trades
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Nova Scotia Labour Market Priorities stream operates on an
        invitation only basis. To apply to the stream, candidates who meet the
        minimum eligibility requirements must create an Express Entry profile.
        They must then wait to be issued a Letter of Interest (LOI) from Nova
        Scotia. If the candidate is selected, the LOI will be issued directly to
        their IRCC account, linked to their Express Entry profile. After
        receiving an LOI, the candidate must prepare and submit an application
        to Nova Scotia.
        <br />
        <br />
        If the province approves the application, Nova Scotia will notify the
        applicant they have been selected for provincial nomination. This
        notification will be sent to the applicant’s IRCC online account. After
        accepting the provincial nomination, the applicant’s CRS score will
        increase by 600 points, virtually guaranteeing they will receive an
        Invitation to Apply (ITA) for permanent residence in the next Express
        Entry draw.
        <br />
        <br />
        After receiving an ITA, the applicant must prepare and submit an
        official application for Canadian permanent residence within the
        designated time frame. Applications for permanent residence submitted
        through Express Entry are generally processed within six months.
      </h2>
    </div>
  );
}

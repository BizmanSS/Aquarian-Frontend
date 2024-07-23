import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "Yes" },
    {
      name: "Connection to Province",
      amount: "Work Experience",
    },
    { name: "Job Offer", amount: "No" },
    {
      name: "Language Proficiency",
      amount: "CLB 7 NOC 0 or A CLB 5 for NOC B",
    },
    {
      name: "Level of Education",
      amount: "High School",
    },
    {
      name: "Work Experience",
      amount:
        "Employed in Nova Scotia NOC 0, A, or B 1 year minimum, full time or equivalent part-time",
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
export default function NovaScotiaExperienceExpressEntry() {
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
          {" > "}Nova Scotia Experience Express Entry
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Nova Scotia Experience Express Entry
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Nova Scotia Experience: Express Entry is one of the streams of the Nova
        Scotia Nominee Program (NSNP), a Provincial Nominee Program (PNP),
        operated by the province of Nova Scotia. This stream is designed to
        target newcomers with work experience in Nova Scotia who will be able
        integrate into Nova Scotia’s workforce long-term.
        <br />
        <br />
        Aligned with the federal Express Entry system, successful applicants to
        the Nova Scotia Experience: Express Entry stream receive a 600-point
        boost to their Express Entry profiles, virtually guaranteeing them an
        Invitation to Apply (ITA) for Canadian permanent residence.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Express Entry Requirement</bold>
        <br />
        <br />
        To be eligible for Category B of the Nova Scotia Demand: Express Entry
        stream, applicants must be registered in the federal Express Entry pool.
        To submit a profile to the pool, applicants must be eligible for at
        least one of three federal Economic programs: Federal Skilled Worker,
        Federal Trades, Canadian Experience Class.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Nova Scotia Experience: Express Entry stream is open to new
        applications at any time. This stream accepts applications
        electronically via the Nova Scotia online immigration portal. Successful
        applicants will receive a nomination from Nova Scotia. After accepting
        the provincial nomination, the applicant’s Comprehensive Ranking System
        (CRS) score will increase by 600 points, virtually guaranteeing they
        will receive an Invitation to Apply (ITA) for permanent residence in the
        next Express Entry draw.
        <br />
        <br />
        After receiving an ITA, the applicant must prepare and submit an
        official application for Canadian permanent residence within the
        designated time frame. Applications for permanent residence submitted
        through Express Entry are generally processed within six months.
        <br />
        <br />
      </h2>
    </div>
  );
}

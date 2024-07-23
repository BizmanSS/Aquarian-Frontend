import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "Yes" },
    {
      name: "Connection to Province",
      amount: "Work Experience (some exceptions)",
    },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount:
        "CLB 6 in all four language abilities for NOC 0 and A CLB 5 in all four language abilities for NOC B",
    },
    {
      name: "Level of Education",
      amount: "Education or specialisation specific to the job offer",
    },
    {
      name: "Work Experience",
      amount: "Same occupation as job offer 1 year",
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
export default function NorthwestTerritoriesExpressEntry() {
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
          <Link to="/immigrate/provincial-nominee-program/northwest-territories">
            Northwest Territories
          </Link>{" "}
          {" > "}Northwest Territories Express Entry
        </p>
        <div className="header-content">
          <h1 className="heading-about">Northwest Territories Express Entry</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Northwest Territories Express Entry stream provides a pathway to
        permanent residence for candidates in the Express Entry pool with a job
        offer from a Northwest Territories employer. <br />
        <br />
        With provincial nomination applications processed within 10 weeks and
        Express Entry applications processed within six months, NTNP Express
        Entry provides applicants with an accelerated path to Canadian permanent
        residence, provided they meet all requirements of the NTNP Skilled
        Worker stream, as well as those of one of three federal economic
        programs.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Applicant Requirements</bold>
        <br />
        <br />
        <bold>Express Entry Requirement</bold>
        <br />
        <br />
        Northwest Territories Express Entry is aligned with the federal Express
        Entry system. To submit a profile to the Express Entry pool, applicants
        must be eligible for at least one of three federal Economic programs:
        Federal Skilled Worker, Federal skilled Trades, Canadian Experience
        Class.
        <br />
        <br />
        <bold>Connection to Northwest Territories</bold>
        <br />
        <br />
        The majority of applications accepted to this stream are from temporary
        foreign workers in the Northwest Territories. Applicants working in the
        Northwest Territories must demonstrate that they have legal status to
        work in Canada. Under exceptional circumstances, the Northwest
        Territories might accept an application from a candidate living abroad.
        <br />
        <br />
        <bold>Employer Requirements</bold>
        <br />
        <br />
        <bold>Job Offer Requirements</bold>
        <br />
        <br />
        The employer must offer the foreign national a full-time, permanent job
        with a comparable industry and occupation salary that does not conflict
        with any collective bargaining agreements.
        <br />
        <br />
        <bold>Business Requirements</bold>
        <br />
        <br />
        Employers hoping to successfully nominate a skilled foreign worker must
        either be a registered and operational Northwest Territories business
        for at least one year, or a municipal, First Nations or territorial
        government of the Northwest Territories. Employers must have maintained
        good standing with the Northwest Territories’ Workers’ Safety and
        Compensation Commision as well as the territory’s Employment Standards
        office. These standings will be verified by the Department of Education,
        Culture and Employment.
        <br />
        <br />
        <bold>Recruitment Requirements</bold>
        <br />
        <br />
        Employers will be required to submit a positive Labour Market Impact
        Assessment (LMIA), or, if nominating a candidate with an open work
        permit without submitting an LMIA, must prove they have advertised the
        open position both locally and nationally. They will also be required to
        provide a summary of all applicants and the reasons for refusing their
        application if an offer has been extended to the foreign national
        without an LMIA.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Northwest Territories Express Entry stream is open to new
        applications at any time. To apply to the stream, candidates who meet
        the minimum eligibility requirements must create an Express Entry
        profile. Once they have received a valid job offer from an employer,
        both the candidate and the employer must submit documentation to support
        their eligibility claims. Successful applicants will receive a
        nomination from the Northwest Territories.
        <br />
        <br />
        After accepting the provincial nomination, the applicant’s Comprehensive
        Ranking System (CRS) score will increase by 600 points, virtually
        guaranteeing they will receive an Invitation to Apply (ITA) for
        permanent residence in the next Express Entry draw. After receiving an
        ITA, the applicant must prepare and submit an official application for
        Canadian permanent residence within the designated timeframe.
        Applications for permanent residence submitted through Express Entry are
        generally processed within six months.
        <br />
        <br />
      </h2>
    </div>
  );
}

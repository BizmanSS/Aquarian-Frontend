import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "Yes" },
    {
      name: "Connection to Province",
      amount: "No",
    },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount: "Entry requirements of CLB 7",
    },
    {
      name: "Level of Education",
      amount:
        "A copy of an Educational Credential Assessment or proof of education and medical training required for licensure in Nova Scotia.",
    },
    {
      name: "Work Experience",
      amount: "Express Entry Requirement",
    },
    {
      name: "Investment Requirement",
      amount: "No",
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
export default function NovaScotiaLabourMarketPrioritiesForPhysicians() {
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
          {" > "}Nova Scotia Labour Market Priorities for Physicians
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Nova Scotia Labour Market Priorities for Physicians
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        This stream targets trained physicians with an active profile in the
        Federal Express Entry pool.
        <br />
        <br />
        The Nova Scotia Labour Market Priorities Stream for Physicians offers a
        bridge between the Nova Scotia Labour Market Priorities Stream,
        targeting candidates in the Federal Express Entry pool, and the
        Physician Stream, targeting general practitioners, family physicians and
        specialist physicians. Those who are selected by the province to receive
        a nomination will earn an additional 600 points to their Express Entry
        profile, making them very competitive for receiving an Invitation to
        Apply (ITA) for Canadian permanent residence.
        <br />
        <br />
        <sp>Eligibility Criteria</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        In order to be considered eligible, a foreign national must have a job
        offer from either the Nova Scotia Health Authority (NSHA) or the IWK
        Health Centre. This job offer must be for a position at National
        Occupational Classification (NOC) code 31100 (specialist physician) or
        31102 (general practitioner or family physician).
        <br />
        <br />
        <bold>Express Entry Requirement</bold>
        <br />
        <br />
        To be eligible for the Nova Scotia Labour Market Priorities for
        Physicians stream, applicants must be registered in the federal Express
        Entry pool. To submit a profile to the pool, applicants must be eligible
        for at least one of three federal Economic programs: Federal Skilled
        Worker, Canadian Experience Class, Federal Skilled Trades
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        To be eligible for Nova Scotia’s Labour Market Priorities for Physicians
        stream candidates must first create a profile in the Federal Express
        Entry pool. Those selected by the province to apply for the stream will
        receive a Letter of Interest (LOI) from the province, appearing in their
        Express Entry profile online. If the application is approved, the
        candidate will be nominated by Nova Scotia for Canadian permanent
        resident status and receive 600 points to their Express Entry profile.
        This increase will virtually guarantee the candidate receives an ITA in
        the next Express Entry draw.
        <br />
        <br />
        With an invitation in hand, the candidate must prepare and submit an
        official application for Canadian permanent residence within the
        designated time frame. Applications for permanent residence submitted
        through Express Entry are generally processed within six months.
      </h2>
    </div>
  );
}

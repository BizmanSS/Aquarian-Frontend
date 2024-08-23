import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { requirement: "Express Entry Profile", value: "No" },
    { requirement: "Connection to Province", value: "Study Experience" },
    { requirement: "Job Offer", value: "No" },
    { requirement: "Language Proficiency", value: "No minimum" },
    { requirement: "Level of Education", value: "PhD" },
    { requirement: "Work Experience", value: "No minimum" },
    { requirement: "Investment Requirement", value: "None" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.requirement}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableFactor = () => {
  const data = [
    { Requirement: "Canadian Work Experience", Value: "Length", mp: "4" },
    { Requirement: "", Value: "NOC skill level", mp: "3" },
    { Requirement: "", Value: "Earnings history", mp: "3" },
    { Requirement: "Education", Value: "Field of study", mp: "10" },
    { Requirement: "", Value: "Canadian education experience", mp: "10" },
    {
      Requirement: "Language",
      Value: "Official language ability (CLB level)",
      mp: "10",
    },
    {
      Requirement: "",
      Value: "Knowledge of official languages (English, French, or both)",
      mp: "10",
    },
    {
      Requirement: "Regional Immigration",
      Value: "Location of study",
      mp: "10",
    },
    {
      Requirement: "Strategic Priorities",
      Value:
        "Ontario may award additional points to address labour market needs as required",
      mp: "10",
    },
    { Requirement: <bold>Total Available Points </bold>, mp: <bold>70</bold> },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Factor</th>
          <th></th>
          <th>Maximum Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Requirement}</td>
            <td>{item.Value}</td>
            <td>{item.mp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function OntarioPhdGraduateStream() {
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
          <Link to="/immigrate/provincial-nominee-program/ontario">
            Ontario
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/ontario/ontario-post-graduate-stream">
            Ontario Post Graduate Stream
          </Link>
          {" > "}Ontario PhD Graduate Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">Ontario PhD Graduate Stream</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Ontario PhD Graduates is a stream of Ontario Human Capital. This stream
        targets foreign nationals who have recently completed a PhD at an
        eligible educational institution in Ontario who have the intention of
        living and working in Ontario. Candidates who are successfully nominated
        through the Ontario PhD Graduate Stream will be invited to submit an
        official application for Canadian permanent residence.
        <br />
        <br />
        Program Requirements
        <br />
        <br />
        <Table />
        <br />
        <bold>Connection to Ontario</bold>
        <br />
        <br />
        Candidates must demonstrate past residency in Ontario. Successful
        applicants must show that they have resided in Ontario for at least 12
        out of the 24 months prior to the application and they must be residing
        in Ontario when their application is submitted.
        <br />
        <br />
        <bold>Settlement Funds</bold>
        <br />
        <br />
        All candidates for the Ontario PhD Graduate stream must meet the
        settlement funds requirement as determined by Immigration, Refugees and
        Citizenship Canada (IRCC). This can be demonstrated through their own
        finances, or through maintaining a valid offer of employment.
        <br />
        <br />
        <bold>Intention to Reside</bold>
        <br />
        <br />
        Applications also require proof of intention to reside in Ontario
        permanently, possibly through an Ontario job offer or family
        connections.
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        This stream operates under the OINP Expression of Interest system.
        <br />
        <br />
        Eligible applicants can submit an EOI through OINP’s e-Filing Portal
        throughout the year for the chance to be invited to apply for
        nomination. Profiles are ranked on an OINP points-based system. The
        highest-ranking candidates will be issued an invitation to apply in one
        of the OINP draws.
        <br />
        <br />
        Once an invitation is received, the applicant has 14 calendar days to
        apply for nomination.
        <br />
        <br />
        If the province approves the application, Ontario will notify the
        applicant they have been selected for provincial nomination. This
        notification will be sent to the applicant’s ONe-Key account within the
        e-Filing Portal.
        <br />
        <br />
        After receiving a provincial nomination, an applicant must submit a
        federal application for Canadian permanent residence. Applicants in this
        program must complete and submit a paper-based application for permanent
        residence and submit it by mail to the appropriate application centre.
        Paper-based PNP applications for permanent residence are generally
        processed within 18 months.
        <br />
        <br />
        <sp>Ontario PhD Graduate Ranking System</sp>
        <br />
        <br />
        <TableFactor />
      </h2>
    </div>
  );
}

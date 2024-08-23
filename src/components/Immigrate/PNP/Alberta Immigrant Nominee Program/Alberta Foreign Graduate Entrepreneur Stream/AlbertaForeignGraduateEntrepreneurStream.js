import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { Requirement: "Express Entry Profile", Value: "No" },
    { Requirement: "Connection to Province", Value: "Yes" },
    { Requirement: "Job Offer", Value: "No" },
    {
      Requirement: "Language Proficiency",
      Value: "Minimum CLB Level 5 in English or French",
    },
    { Requirement: "Level of Education", Value: "Post-secondary degree" },
    { Requirement: "Work Experience", Value: "Minimum six months full-time" },
    {
      Requirement: "Investment Requirement",
      Value: "Minimum $50,000 for regional area or $100,000 for urban area",
    },
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
            <td>{item.Requirement}</td>
            <td>{item.Value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableRanking = () => {
  const data = [
    {
      "Scoring Sections": "Language",
      "Maximum Points": "30'",
    },
    {
      "Scoring Sections": "Education",
      "Maximum Points": "35",
    },
    {
      "Scoring Sections": "Business Management/Ownership Experience",
      "Maximum Points": "35",
    },
    {
      "Scoring Sections": "Business Plan",
      "Maximum Points": "40",
    },
    {
      "Scoring Sections": "Investment prior to coming to Alberta",
      "Maximum Points": "25",
    },
    {
      "Scoring Sections": "Proposed investment after launch",
      "Maximum Points": "20",
    },
    {
      "Scoring Sections": "Job Creation",
      "Maximum Points": "15",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Scoring Sections</th>
          <th>Maximum Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item["Scoring Sections"]}</td>
            <td>{item["Maximum Points"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function AlbertaForeignGraduateEntrepreneurStream() {
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
          <Link to="/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program">
            Alberta Immigrant Nominee Program
          </Link>
          {" > "}Alberta Foreign Graduate Entrepreneur Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Alberta Foreign Graduate Entrepreneur Stream
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Foreign Graduate Entrepreneur Stream (FGES) is one stream of the
        Alberta Immigrant Nominee Program (AINP), a Provincial Nominee Program
        (PNP) operated by the province of Alberta. The FGES offers a pathway to
        permanent residence to recent graduates who have completed a foreign
        post-secondary credential and who have an intention of starting and
        operating a business in the province of Alberta.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Application Procedure</li>
          <li>
            Alberta Foreign Graduate Entrepreneur Stream Points Ranking System
          </li>
        </ul>
        <br />
        This stream uses a points-based Expression of Interest system to rank
        candidates. The highest-ranking candidates in the Expression of Interest
        pool are invited to submit a detailed Business Application. Applicants
        with successful Business Applications are issued a nomination by the
        province, which can be used to apply for Canadian permanent residence.
        <br />
        <br />
        <bold>Program Requirements</bold>
        <br />
        <br />
        <Table />
        <br />
        <bold>Level of Education</bold>
        <br />
        <br />
        To be eligible for the Foreign Graduate Entrepreneur Stream, candidates
        must have completed a post-secondary degree and obtained an Education
        Credential Assessment (ECA) report demonstrating its equivalence to a
        Canadian credential. The foreign credential must have been completed
        within the last ten years at the time of EOI submission.
        <br />
        <br />
        <bold>Work Experience</bold>
        <br />
        <br />
        Candidates must have at least six months of relevant full-time work
        experience. This can be demonstrated through experience as an active
        business owner-manager, manager, or experience with a business incubator
        or business accelerator.
        <br />
        <br />
        <bold>Business Establishment</bold>
        <br />
        <br />
        Candidates must establish a new business or buy an existing business in
        Alberta with at least 34% ownership if it is located in an urban area or
        at least 51% ownership if the business is located outside of Calgary or
        Edmonton.
        <br />
        <br />
        Qualifying businesses must be in one of the following key or priority
        sectors:
        <br />
        <br />
        <ul>
          <li> technology</li>
          <li> aerospace</li>
          <li> financial services</li>
          <li> energy</li>
          <li> agriculture</li>
          <li> tourism</li>
          <li> life sciences</li>
          <li> pharmaceuticals</li>
        </ul>
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Foreign Graduate Entrepreneur Stream operates on an Expression of
        Interest (EOI) system. Candidates who meet the minimum stream
        requirements can register a profile using AINP’s online portal. Once the
        profile has been submitted, candidates will be assigned a score and
        ranked against one another using the FGES Points Grid. The
        highest-ranking candidates will be contacted by AINP and invited to
        submit a Business Application.
        <br />
        <br />
        Candidates invited to submit a Business Application must submit a
        complete application to the stream within 90 days from when they receive
        the request to do so. The business plan must be evaluated by an AINP
        designated agency and Qualified Service Provider. All online AINP
        Business Applications are subject to a $3,500 CAD application fee.
        <br />
        <br />
        If AINP approves the Business Application, candidates must sign a
        Business Performance Agreement. This is a legal agreement signed with
        Alberta that outlines the conditions under which the candidate will
        receive a nomination for permanent residence. Alberta will issue a
        Business Application Approval Letter once all parties have signed the
        Business Performance Agreement. Candidates are expected to meet the
        conditions of the business performance agreement and reside and operate
        their business in Alberta for at least 12 months before submitting a
        final report for AINP Nomination. <br />
        <br />
        After receiving a provincial nomination, the applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
        <br />
        <br />
        <bold>
          Alberta Foreign Graduate Entrepreneur Stream Points Ranking System
        </bold>
        <br />
        <br />
        The Foreign Graduate Entrepreneur Stream uses the following points-grid
        to rank candidates who have registered profiles. Only those candidates
        with the most competitive scores will be invited to apply to the
        program.
        <br />
        <br />
        <TableRanking />
      </h2>
    </div>
  );
}

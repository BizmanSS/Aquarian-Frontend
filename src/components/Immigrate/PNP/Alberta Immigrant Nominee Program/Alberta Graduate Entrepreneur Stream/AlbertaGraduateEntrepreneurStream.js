import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { requirement: "Express Entry Profile", value: "No" },
    { requirement: "Connection to Province", value: "Yes" },
    { requirement: "Job Offer", value: "No" },
    {
      requirement: "Language Proficiency",
      value: "Minimum CLB Level 7 in English or French",
    },
    {
      requirement: "Level of Education",
      value: "Minimum two-year qualifying Alberta credential",
    },
    { requirement: "Work Experience", value: "No" },
    {
      requirement: "Investment Requirement",
      value: "No minimum investment required",
    },
    { requirement: "Work Permit", value: "Yes" },
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
const TableRanking = () => {
  const data = [
    {
      "Scoring Sections": "Management/Ownership Experience",
      "Maximum Polints": 15,
    },
    { "Scoring Sections": "Economic Benefit", "Maximum Polints": 15 },
    { "Scoring Sections": "Business Investment", "Maximum Polints": 20 },
    { "Scoring Sections": "Job Creation", "Maximum Polints": 15 },
    { "Scoring Sections": "Regional District", "Maximum Polints": 5 },
    { "Scoring Sections": "Language", "Maximum Polints": 15 },
    { "Scoring Sections": "Alberta Education Level", "Maximum Polints": 10 },
    { "Scoring Sections": "Age", "Maximum Polints": 20 },
    { "Scoring Sections": "Spouse/Common law Factors", "Maximum Polints": 10 },
    { "Scoring Sections": "Alberta Relatives", "Maximum Polints": 10 },
    {
      "Scoring Sections": <bold>Maximum Score Available</bold>,
      "Maximum Polints": <bold>200</bold>,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Scoring Sections</th>
          <th>Maximum Polints</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item["Scoring Sections"]}</td>
            <td>{item["Maximum Polints"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function AlbertaGraduateEntrepreneurStream() {
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
          {" > "}Alberta Graduate Entrepreneur Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Alberta Graduate Entrepreneur Stream
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Graduate Entrepreneur Stream is one stream of the Alberta Advantage
        Immigration Program (AINP), a Provincial Nominee Program (PNP) operated
        by the province of Alberta. This stream offers a pathway to permanent
        residence to international graduates from Alberta post-secondary
        institutions that wish to start and operate a business in the province.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Application Procedure</li>
          <li>Alberta GES Points Ranking System</li>
          <li>Free Assessment</li>
        </ul>
        <br />
        This stream uses a points-based Expression of Interest system to rank
        candidates. Those with the highest-ranking points will be invited to
        submit a detailed Business Application. Successful applicants will be
        issued a nomination by the province, which can be used to apply for
        Canadian permanent residence.
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
        To be eligible for the Graduate Entrepreneur Stream, candidates must
        have completed a minimum two-year degree or diploma from an Alberta
        Advanced Education publicly funded post-secondary institution. The
        institution must render the applicant eligible for a Post-Graduate Work
        Permit
        <br />
        <br />
        <bold>Work Experience</bold>
        <br />
        <br />
        There is no minimum work experience requirement for this stream.
        However, a minimum of 6 months of full-time work experience has been
        indicated as a factor that could increase a candidate’s chances of
        success under this program. The work experience should have been while
        actively managing or owning a business or equivalent. An equivalency can
        include the completion of entrepreneurship program courses or experience
        with an incubator or business accelerator.
        <br />
        <br />
        <bold>Work Permit</bold>
        <br />
        <br />
        Eligible candidates must have a valid post-graduate work permit at the
        time of submitting an Expression of Interest (EOI) profile.
        <br />
        <br />
        <bold>Business Establishment</bold>
        <br />
        <br />
        Candidates must establish a new business or buy an existing business in
        Alberta with at least 34% ownership.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Graduate Entrepreneur Stream operates on an Expression of Interest
        (EOI) system. Candidates who meet the minimum stream requirements can
        register a profile using AINP’s online portal. Once the profile has been
        submitted, candidates will be assigned a score and ranked against one
        another using the GES Points Grid. The highest-ranking candidates will
        be contacted by AINP and invited to submit a Business Plan.
        <br />
        <br />
        Candidates invited to submit a Business Plan must submit a complete
        application to the stream within 90 days from when they receive the
        request to do so. The business plan must be evaluated by an AINP
        designated Qualified Service Provider. All online AINP Business
        Applications are subject to a $3,500 CAD application fee.
        <br />
        <br />
        Candidates must sign a Business Performance Agreement. This is a legal
        agreement signed with Alberta that outlines the conditions under which
        the candidate will receive a nomination for permanent residence. Alberta
        will issue a Business Application Approval Letter once all parties have
        signed the Business Performance Agreement. Candidates are expected to
        meet the conditions of the business performance agreement and reside and
        operate their business in Alberta for at least 12 months before
        submitting a final report for AINP Nomination. <br />
        <br />
        After receiving a provincial nomination, the applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
        <br />
        <br />
        <bold>Alberta GES Points Ranking System</bold>
        <br />
        <br />
        The Graduate Entrepreneur Stream uses the following points-grid to rank
        candidates who have registered profiles. Only those candidates with the
        most competitive scores will be invited to apply to the program.
        <br />
        <br />
        <TableRanking />
      </h2>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    {
      name: "Connection to Province",
      amount: "No",
    },
    { name: "Job Offer", amount: "No" },
    {
      name: "Language Proficiency",
      amount: "CLB 5",
    },
    {
      name: "Level of Education",
      amount: "No minimum",
    },
    {
      name: "Work Experience",
      amount:
        "3 years business ownership or 5 years senior business management",
    },
    {
      name: "Investment Requirement",
      amount: "Investment: $150,000 CAD Personal Net Worth: $600,000 CAD",
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
const TableFactor = () => {
  const data = [
    { name: "Language", amount: "35" },
    {
      name: "Education",
      amount: "25",
    },
    { name: "Business Ownership or Management Experience", amount: "35" },
    {
      name: "Net Worth",
      amount: "10",
    },
    {
      name: "Age",
      amount: "10",
    },
    {
      name: "Adaptability",
      amount: "10",
    },
    {
      name: "Economic Priorities",
      amount: "10",
    },
    {
      name: "Investment",
      amount: "15",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Selection Factor</th>
          <th>Maximum Points</th>
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
export default function NovaScotiaEntrepreneurCategory() {
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
          {" > "}Nova Scotia Entrepreneur Category
        </p>
        <div className="header-content">
          <h1 className="heading-about">Nova Scotia Entrepreneur Category</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        This stream is designed to target experienced business owners or senior
        business managers who want to live in Nova Scotia. Successful applicants
        must start a new business or buy an existing business in which they
        participate in the day-to-day management duties. Since this is a
        business immigration stream, candidates must demonstrate that they have
        enough business ownership or management experience to successfully
        establish and run a business in Nova Scotia. After operating the
        business for one year, the entrepreneur may be nominated for permanent
        resident status.
        <br />
        <br />
        <sp>Program Requirements</sp> <br /> <br />
        <Table /> <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Nova Scotia Entrepreneur stream operates on an Expression of
        Interest (EOI) system. Eligible candidates must submit a profile to a
        pool of candidates. All the profiles are then assigned a score based on
        the Nova Scotia Entrepreneur Ranking System. The candidates with the
        highest-ranking profiles will be invited to apply to the stream in one
        of the program’s periodic intakes. Candidates must include a business
        establishment plan and a net worth verification report with their
        application to the stream.
        <br />
        <br />
        If the applicant successfully demonstrates that they meet the stream
        requirements, they will be invited to participate in an interview with
        an immigration officer in Nova Scotia. If the interview is successful,
        the candidate will be invited to sign a business performance agreement.
        Once the Nova Scotia Office of Immigration (NSOI) receives the signed
        business performance agreement, it will issue the applicant a letter of
        support for a work permit. The applicant must then apply to Immigration,
        Refugees and Citizenship Canada (IRCC) for a temporary work permit. Work
        permits issued to business immigration candidates generally do not
        require a Labour Market Impact Assessment (LMIA).
        <br />
        <br />
        If the applicant is issued a temporary work permit, they may then travel
        to Nova Scotia to establish their business. If the applicant meets the
        conditions described in the business performance agreement, they will be
        eligible for a provincial nomination from Nova Scotia once the business
        has been in operation for at least 12 months.
        <br />
        <br />
        After receiving a provincial nomination, an applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
        <br />
        <br />
        <bold>Nova Scotia Entrepreneur Ranking System</bold>
        <br />
        <br />
        The Nova Scotia Entrepreneur stream uses the following system to rank
        candidates who have submitted Expressions of Interest (EOIs). There is
        no minimum score, but only those candidates with the most competitive
        scores will be invited to apply to the program.
        <br />
        <br />
        <sp>Overview of Factors</sp> <br /> <br />
        <TableFactor />
      </h2>
    </div>
  );
}

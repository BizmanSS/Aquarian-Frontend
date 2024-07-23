import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    {
      name: "Connection to Province",
      amount: (
        <>
          Study Experience- degree or diploma after a minimum of two years of
          full-time study in from a Nova Scotia university or community college.
          <br />
          <br /> Currently residing in Nova Scotia, on a valid PGWP.
        </>
      ),
    },
    { name: "Job Offer", amount: "No" },
    {
      name: "Language Proficiency",
      amount: "CLB 7",
    },
    {
      name: "Level of Education",
      amount: (
        <>
          Post-secondary
          <br />
          <br />A minimum 2-year diploma or degree from an eligible university
          or community college in Nova Scotia
        </>
      ),
    },
    {
      name: "Work Experience",
      amount: (
        <>
          Business ownership (at least one-third) and management. In Nova Scotia
          <br />
          <br />1 year minimum
        </>
      ),
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
          <th style={{ width: "10%" }}>Requirement</th>
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
    { name: "Work experience", amount: "15" },
    {
      name: "Adaptability",
      amount: "10",
    },
    {
      name: "Age",
      amount: "10",
    },

    {
      name: "Economic Priorities",
      amount: "5",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Selection Factor</th>
          <th>Points</th>
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
export default function NovaScotiaInternationalGraduateEntrepreneurCategory() {
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
          {" > "}Nova Scotia International Graduate Entrepreneur Category
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Nova Scotia International Graduate Entrepreneur Category
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        This stream is designed to target recent graduates of a Nova Scotia
        university or Nova Scotia Community College. Applicants must have
        already started or bought a Nova Scotia business and operated it for at
        least one year. Applicants must currently be residing in Nova Scotia
        with a valid post-graduation work permit.
        <br />
        <br />
        This program is by invitation only. Interested candidates must submit an
        Expression of Interest (EOI). After submitting an EOI the candidate will
        be assigned a score based on the Nova Scotia International Graduate
        Entrepreneur points grid. The applicants with the most competitive
        scores will be invited to submit an official application to the program.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Nova Scotia International Graduate Entrepreneur stream operates on
        an Expression of Interest (EOI) system. Eligible candidates must submit
        a profile to a pool of candidates. All the profiles are then assigned a
        score based on the Nova Scotia International Graduate Entrepreneur
        Ranking System. The candidates with the highest-ranking profiles will be
        invited to apply to the stream in one of the program’s periodic intakes.
        Candidates must include an audit opinion and special purpose report
        attesting to the viability of the business with their application to the
        stream.
        <br />
        <br />
        If the applicant successfully demonstrates that they meet the stream
        requirements, they will be invited to participate in an interview with
        an immigration officer in Nova Scotia. If the interview is successful,
        the candidate will be issued a provincial nomination for permanent
        residence.
        <br />
        <br />
        After receiving a provincial nomination, the candidate has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
        <br />
        <br />
        <bold>Nova Scotia International Graduate Entrepreneur Points Grid</bold>
        <br />
        <br />
        The Nova Scotia International Graduate Entrepreneur stream uses the
        following system to rank candidates who have submitted Expressions of
        Interest (EOIs). There is no minimum score, but only those candidates
        with the most competitive scores will be invited to apply to the
        program.
        <br />
        <br />
        <sp>Overview of Factors</sp>
        <br />
        <br />
        <TableFactor />
      </h2>
    </div>
  );
}

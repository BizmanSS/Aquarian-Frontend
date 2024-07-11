import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "No" },
    {
      name: "Connection to Province",
      amount: "Study Experience",
    },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount: (
        <>
          CLB 5- NOC Skill Level 0, A, or B<br />
          CLB 4- NOC C or D
        </>
      ),
    },
    {
      name: "Level of Education",
      amount: (
        <>
          Post-secondary
          <br />2 years
        </>
      ),
    },
    {
      name: "Work Experience",
      amount: (
        <>
          Business ownership and management In Nova Scotia
          <br />1 year
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
export default function NovaScotiaSkilledWorkerCategory() {
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
          {" > "}Nova Scotia Skilled Worker Category
        </p>
        <div className="header-content">
          <h1 className="heading-about">Nova Scotia Skilled Worker Category</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The stream is designed to assist Nova Scotian employers to recruit
        international workers in order to fill gaps in the labour force. Through
        this program, employers who have been unable to fill positions with
        Canadian citizens or permanent residents may provide job offers to
        interested foreign workers to facilitate their immigration. This program
        is an excellent option for foreign workers and recently graduated
        international students who have a job offer from a Nova Scotian
        employer.
        <br />
        <br />
        <sp>Program Requirements</sp> <br />
        <br />
        <Table />
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        To be eligible for the Nova Scotia Skilled Worker stream, candidates
        must have a valid job offer from an eligible employer in Nova Scotia. In
        order to be considered valid, the job offer must be from a business
        which has a permanent residence in Nova Scotia and which has been in
        active operation over the previous two years. In order for a job offer
        to be valid for this program, the business must demonstrate that they
        were unable to find a Canadian permanent resident or citizen to fill the
        position.
        <br />
        <br />
        If the job offer is for a position at National Occupational
        Classification (NOC) Skill Level C or D, the applicant must have already
        been working with the employer for at least 6 months. Candidates must
        show that they have at least 1 year of full-time work experience in the
        same occupation as their offer of employment.
        <br />
        <br />
        <bold>Language Proficiency</bold>
        <br />
        <br />
        If a candidate speaks English or French as their first language and is
        applying with a job offer at NOC skill level 0, A, or B, then they will
        be exempt from the language test requirement. If a candidate speaks
        English or French as a second language then they must demonstrate proof
        of language proficiency. Candidates applying with a job offer at must
        demonstrate language test results consistent with Canadian Language
        Benchmark (CLB) level 5. Candidates applying with a job offer at NOC
        Skill Level C or D must demonstrate test results at CLB level 4.
        <br />
        <br />
        <bold>Settlement Funds</bold>
        <br />
        <br />
        All candidates for this stream must meet the settlement funds
        requirement as determined by Immigration, Refugees and Citizenship
        Canada (IRCC). This can be demonstrated through their own finances, or
        through maintaining a valid offer of employment.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        Applications for the Nova Scotia Skilled Worker category are accepted at
        all times, provided that an applicant meets program requirements.
        Applications to this stream are processed on a first-come, first served
        basis. Successful applicants will be issued a provincial nomination for
        permanent residence from Nova Scotia.
        <br />
        <br />
        After receiving a provincial nomination an applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
        <br />
        <br />
      </h2>
    </div>
  );
}
